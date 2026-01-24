import { useState, useRef, useCallback } from 'react';
import { Upload } from 'lucide-react';
import type { HITLComponentProps, UploadMetadata, UploadedFile } from '../types';
import { RequestHeader } from './shared/RequestHeader';
import { ContextPanel } from './shared/ContextPanel';

/**
 * File upload component for requesting file uploads.
 *
 * Provides drag-and-drop zone and file picker with type/size validation.
 *
 * Note: This component handles the UI for file selection. The actual file
 * upload and storage is handled by the consuming application, which should
 * provide an `onUpload` handler in the request metadata if needed.
 */
export function FileUpload({
  request,
  onRespond,
  onCancel,
  className = '',
  showHeader = true,
  showContext = true,
}: HITLComponentProps) {
  const { request_id, metadata } = request;
  const uploadMeta = metadata as UploadMetadata | undefined;

  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const accept = uploadMeta?.accept;
  const maxSize = uploadMeta?.max_size;
  const multiple = uploadMeta?.multiple ?? false;

  const acceptString = accept?.join(',') ?? '';

  const validateFile = useCallback(
    (file: File): string | null => {
      // Check file type
      if (accept && accept.length > 0) {
        const isValidType = accept.some((pattern) => {
          if (pattern.startsWith('.')) {
            return file.name.toLowerCase().endsWith(pattern.toLowerCase());
          }
          if (pattern.endsWith('/*')) {
            const type = pattern.slice(0, -2);
            return file.type.startsWith(type);
          }
          return file.type === pattern;
        });
        if (!isValidType) {
          return `Invalid file type. Accepted: ${accept.join(', ')}`;
        }
      }

      // Check file size
      if (maxSize && file.size > maxSize) {
        return `File too large. Maximum size: ${formatBytes(maxSize)}`;
      }

      return null;
    },
    [accept, maxSize]
  );

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;

      const newFiles: File[] = [];
      const errors: string[] = [];

      for (const file of Array.from(fileList)) {
        const error = validateFile(file);
        if (error) {
          errors.push(`${file.name}: ${error}`);
        } else {
          newFiles.push(file);
        }
      }

      if (errors.length > 0) {
        setError(errors.join('\n'));
        return;
      }

      setError(null);
      if (multiple) {
        setFiles((prev) => [...prev, ...newFiles]);
      } else {
        setFiles(newFiles.slice(0, 1));
      }
    },
    [validateFile, multiple]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) return;

    setIsSubmitting(true);

    // Create file info objects
    // Note: actual upload would be handled by consuming app
    const fileInfos: UploadedFile[] = files.map((file) => ({
      path: URL.createObjectURL(file), // Temporary URL for preview
      name: file.name,
      size: file.size,
      mime_type: file.type || 'application/octet-stream',
    }));

    const value = multiple ? fileInfos : fileInfos[0];
    onRespond({ request_id, value });
  };

  return (
    <div className={`tactus-hitl-upload tactus-ai-card ${className}`.trim()}>
      {showHeader && <RequestHeader request={request} />}
      {showContext && <ContextPanel request={request} />}

      <form onSubmit={handleSubmit} className="tactus-hitl-upload-form tactus-ai-field">
        <div
          className={`tactus-hitl-dropzone tactus-ai-dropzone ${isDragging ? 'tactus-hitl-dropzone-active' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="tactus-hitl-file-input"
            accept={acceptString}
            multiple={multiple}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
          <div className="tactus-hitl-dropzone-content">
            <Upload className="tactus-hitl-dropzone-icon" size={48} strokeWidth={1.5} />
            <span className="tactus-hitl-dropzone-text">
              Drop files here or click to browse
            </span>
            {accept && (
              <span className="tactus-hitl-dropzone-hint">
                Accepted: {accept.join(', ')}
              </span>
            )}
            {maxSize && (
              <span className="tactus-hitl-dropzone-hint">
                Max size: {formatBytes(maxSize)}
              </span>
            )}
          </div>
        </div>

        {error && <div className="tactus-hitl-upload-error">{error}</div>}

        {files.length > 0 && (
          <ul className="tactus-hitl-file-list">
            {files.map((file, index) => (
              <li key={index} className="tactus-hitl-file-item">
                <span className="tactus-hitl-file-name">{file.name}</span>
                <span className="tactus-hitl-file-size">{formatBytes(file.size)}</span>
                <button
                  type="button"
                  className="tactus-hitl-file-remove"
                  onClick={() => handleRemoveFile(index)}
                  disabled={isSubmitting}
                  aria-label="Remove file"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="tactus-hitl-actions">
          <button
            type="submit"
            className="tactus-hitl-button tactus-hitl-button-primary"
            disabled={isSubmitting || files.length === 0}
          >
            {isSubmitting ? 'Uploading...' : `Upload ${files.length} file${files.length === 1 ? '' : 's'}`}
          </button>
          {onCancel && (
            <button
              type="button"
              className="tactus-hitl-button tactus-hitl-button-secondary"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

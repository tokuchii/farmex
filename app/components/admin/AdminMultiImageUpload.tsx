import { LucideImagePlus, LucideX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FC } from "react";
import { cn, sortFilesByName } from "~/lib/utils";
import { adminInputClass } from "./adminFormStyles";

type AdminMultiImageUploadProps = {
  files: File[];
  onChange: (files: File[]) => void;
  existingUrls?: string[];
  onExistingUrlsChange?: (urls: string[]) => void;
  maxFiles?: number;
  disabled?: boolean;
  label?: string;
};

const AdminMultiImageUpload: FC<AdminMultiImageUploadProps> = ({
  files,
  onChange,
  existingUrls = [],
  onExistingUrlsChange,
  maxFiles = 10,
  disabled = false,
  label = "Images",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const totalCount = existingUrls.length + files.length;
  const canAddMore = totalCount < maxFiles;

  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [files]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    const remaining = maxFiles - existingUrls.length;
    const merged = sortFilesByName([...files, ...selected]).slice(0, remaining);
    onChange(merged);
    event.target.value = "";
  };

  const removeFile = (index: number) => {
    onChange(files.filter((_, fileIndex) => fileIndex !== index));
  };

  const removeExistingUrl = (index: number) => {
    onExistingUrlsChange?.(existingUrls.filter((_, urlIndex) => urlIndex !== index));
  };

  return (
    <div className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <p className="mt-1 text-xs text-slate-500">
        You can upload up to {maxFiles} images ({totalCount}/{maxFiles}).
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        disabled={disabled || !canAddMore}
        onChange={handleFileChange}
        className="sr-only"
      />

      <button
        type="button"
        disabled={disabled || !canAddMore}
        onClick={() => inputRef.current?.click()}
        className={cn(
          adminInputClass,
          "mt-2 flex items-center justify-center gap-2 border-dashed text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/50 disabled:cursor-not-allowed disabled:opacity-60"
        )}
      >
        <LucideImagePlus className="h-4 w-4" />
        {!canAddMore ? "Maximum images reached" : "Select images"}
      </button>

      {existingUrls.length > 0 ? (
        <div className="mt-3">
          <p className="mb-2 text-xs font-medium text-slate-500">Current images</p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {existingUrls.map((url, index) => (
              <li
                key={url}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
              >
                <img src={url} alt="" className="h-28 w-full object-cover" />
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => removeExistingUrl(index)}
                  className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow-sm transition hover:bg-white hover:text-rose-600"
                  aria-label="Remove saved image"
                >
                  <LucideX className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {files.length > 0 ? (
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.lastModified}-${index}`}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
            >
              <img
                src={previews[index]}
                alt={file.name}
                className="h-28 w-full object-cover"
              />
              <button
                type="button"
                disabled={disabled}
                onClick={() => removeFile(index)}
                className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow-sm transition hover:bg-white hover:text-rose-600"
                aria-label={`Remove ${file.name}`}
              >
                <LucideX className="h-4 w-4" />
              </button>
              <p className="truncate px-2 py-1 text-xs text-slate-500">{file.name}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default AdminMultiImageUpload;

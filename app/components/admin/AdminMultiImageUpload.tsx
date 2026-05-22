import { LucideImagePlus, LucideX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FC } from "react";
import { cn } from "~/lib/utils";
import { adminInputClass } from "./adminFormStyles";

type AdminMultiImageUploadProps = {
  files: File[];
  onChange: (files: File[]) => void;
  maxFiles?: number;
  disabled?: boolean;
  label?: string;
};

const AdminMultiImageUpload: FC<AdminMultiImageUploadProps> = ({
  files,
  onChange,
  maxFiles = 10,
  disabled = false,
  label = "Images",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [files]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    const merged = [...files, ...selected].slice(0, maxFiles);
    onChange(merged);
    event.target.value = "";
  };

  const removeFile = (index: number) => {
    onChange(files.filter((_, fileIndex) => fileIndex !== index));
  };

  return (
    <div className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <p className="mt-1 text-xs text-slate-500">
        Pwede kang mag-upload ng hanggang {maxFiles} images. I-upload sa Cloudinary kapag nag-save.
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        disabled={disabled || files.length >= maxFiles}
        onChange={handleFileChange}
        className="sr-only"
      />

      <button
        type="button"
        disabled={disabled || files.length >= maxFiles}
        onClick={() => inputRef.current?.click()}
        className={cn(
          adminInputClass,
          "mt-2 flex items-center justify-center gap-2 border-dashed text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/50 disabled:cursor-not-allowed disabled:opacity-60"
        )}
      >
        <LucideImagePlus className="h-4 w-4" />
        {files.length >= maxFiles ? "Maximum images reached" : "Pumili ng images"}
      </button>

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

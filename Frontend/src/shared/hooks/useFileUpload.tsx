// hooks/useFileUpload.ts
"use client";
import { useState, DragEvent } from "react";
import { formatFileSize, UploadFile } from "../lib/fileUtils";

export function useFileUpload() {
  const [files, setFiles] = useState<UploadFile[]>([]);

  // เลือกไฟล์ผ่าน input
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).map((file) => ({
        id: crypto.randomUUID(),
        name: file.name,
        size: formatFileSize(file.size),
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  // Drag & Drop
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files).map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      size: formatFileSize(file.size),
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // ลบไฟล์
  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return {
    files,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    handleRemoveFile,
  };
}

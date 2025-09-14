"use client";
import { useState } from "react";
import { Trash2, File } from "lucide-react";
import { useFileUpload } from "../hooks/useFileUpload";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FileItem {
  id: string;
  name: string;
  size: string;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const {
    files,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    handleRemoveFile: originalHandleRemoveFile,
  } = useFileUpload();

  const [isDragging, setIsDragging] = useState(false);
  const [removingFileId, setRemovingFileId] = useState<string | null>(null);

  const handleRemoveFile = (fileId: string) => {
    setRemovingFileId(fileId);
    setTimeout(() => {
      originalHandleRemoveFile(fileId);
      setRemovingFileId(null);
    }, 300); // ให้ตรงกับ duration ของ fadeOut
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="gap-4 flex flex-col h-full">
          <h1 className="text-2xl font-bold text-white p-6 bg-purple-500 shadow-lg">
            File Manager
          </h1>
          <div className="p-6 flex flex-col gap-4 h-full overflow-auto">
            {/* Upload Zone */}
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center text-gray-500 cursor-pointer transform transition duration-300
              ${
                isDragging
                  ? "bg-blue-100 scale-105 border-blue-400"
                  : "border-gray-300 hover:bg-blue-100 hover:scale-105 hover:border-blue-400"
              }`}
              onDrop={(e) => {
                handleDrop(e);
                setIsDragging(false);
              }}
              onDragOver={(e) => {
                handleDragOver(e);
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <p>ลากไฟล์มาวางที่นี่</p>
              <p>หรือคลิกเพื่อเลือกไฟล์</p>
              <input
                id="fileInput"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>

            {/* title files info */}
            <div className="flex items-center justify-between text-lg font-semibold text-gray-700">
              <p>ไฟล์ที่อัปโหลด</p>
              <h2 className="px-2 rounded-2xl bg-blue-100 text-blue-600 font-normal">
                {files.length}
              </h2>
            </div>

            {/* Upload Button */}
            {files.length > 0 && (
              <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                อัพโหลด
              </button>
            )}

            {/* Files List */}
            <div className="flex-1 space-y-3 pr-2">
              {files.map((file: FileItem) => (
                <div
                  key={file.id}
                  className={`flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50 transition-transform duration-300 
                  ${
                    removingFileId === file.id
                      ? "animate-fadeOut"
                      : "animate-fadeIn"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <File className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <span className="font-medium text-gray-800 line-clamp-2 break-words">
                        {file.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {file.size}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFile(file.id)}
                    className="text-red-500 hover:text-red-700 transition transform hover:scale-110 flex-shrink-0 ml-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }
      `}</style>
    </>
  );
}

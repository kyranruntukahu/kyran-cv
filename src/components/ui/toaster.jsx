import * as React from "react";
import { useToast } from "@/hooks/use-toast.js";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col gap-2 p-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white text-black shadow-lg border rounded-md p-4 min-w-[250px]"
        >
          {toast.title && <div className="font-semibold">{toast.title}</div>}
          {toast.description && (
            <div className="text-sm opacity-80">{toast.description}</div>
          )}

          {/* close button */}
          {toast.open && (
            <button
              onClick={() => toast.onOpenChange(false)}
              className="absolute top-1 right-1"
            >
              ✕
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

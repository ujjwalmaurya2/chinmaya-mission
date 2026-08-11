import React from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function ToastNotification({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50 max-w-md w-full animate-fade-up">
      <div className="bg-[#2B211B] text-[#FFF9F1] p-4 rounded-2xl shadow-2xl border border-[rgba(201,111,50,0.3)] flex items-start gap-3">
        {toast.type === 'success' ? (
          <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
        ) : toast.type === 'error' ? (
          <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
        ) : (
          <Info className="w-6 h-6 text-[#C96F32] shrink-0 mt-0.5" />
        )}
        
        <div className="flex-1">
          <h4 className="font-semibold text-sm text-[#FFF9F1] mb-0.5">{toast.title || 'Notification'}</h4>
          <p className="text-xs text-[#D1C5BA] leading-relaxed">{toast.message}</p>
        </div>

        <button 
          onClick={onClose}
          className="text-[#D1C5BA] hover:text-white transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react'
export function Toast({ toast, onClose }) {
  useEffect(()=>{
    if (!toast) return;
    const t = setTimeout(()=> onClose && onClose(), 4000);
    return ()=> clearTimeout(t);
  },[toast])
  if (!toast) return null;
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={"px-4 py-2 rounded shadow-lg text-sm " + (toast.type==='success' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-white')}>
        {toast.message}
      </div>
    </div>
  )
}

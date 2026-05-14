"use client";
import { useContactModal } from "@/context/ContactModalContext";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function ModalOpenButton({ className, style, children }: Props) {
  const { openModal } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => openModal()}
      className={className}
      style={{ border: "none", cursor: "pointer", ...(className ? {} : { background: "transparent", padding: 0 }), ...style }}
    >
      {children}
    </button>
  );
}

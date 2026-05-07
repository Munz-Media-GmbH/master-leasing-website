"use client";
import { useContactModal } from "@/context/ContactModalContext";

interface Props {
  vehicleTitle: string;
  vehicleImg: string;
  vehicleTyp?: string;
}

export default function VehicleInquiryButton({ vehicleTitle, vehicleImg: _vehicleImg, vehicleTyp }: Props) {
  const { openModal } = useContactModal();

  const handleClick = () => {
    openModal({
      initialData: {
        fahrzeugtyp: vehicleTyp ?? "pkw",
        marke: vehicleTitle.split(" ")[0],
        modell: vehicleTitle,
      },
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn-primary"
      style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", border: "none" }}
    >
      <svg width="14" height="14" viewBox="0 0 256 512" fill="currentColor">
        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
      </svg>
      Jetzt anfragen
    </button>
  );
}

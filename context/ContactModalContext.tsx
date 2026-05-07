// context/ContactModalContext.tsx
"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface ModalFormData {
  fahrzeugtyp: string;
  marke: string;
  modell: string;
  baujahr: string;
  kilometerstand: string;
  preis: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  unternehmen: string;
  land: string;
  strasse: string;
  plz: string;
  stadt: string;
  nachricht: string;
  agb: boolean;
}

interface ContactModalContextValue {
  isOpen: boolean;
  initialData: Partial<ModalFormData>;
  openModal: (config?: { initialData?: Partial<ModalFormData> }) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<Partial<ModalFormData>>({});

  const openModal = useCallback((config?: { initialData?: Partial<ModalFormData> }) => {
    setInitialData(config?.initialData ?? {});
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider value={{ isOpen, initialData, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

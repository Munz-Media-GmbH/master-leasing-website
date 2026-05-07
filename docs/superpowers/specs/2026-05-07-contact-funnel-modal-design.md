# Contact Funnel Modal — Design Spec
**Date:** 2026-05-07
**Status:** Approved

## Goal

Replace all CTA buttons that currently navigate to `/kontakt` or open simple modals with a unified 4-step contact funnel modal. The modal opens in-place without a page navigation, reducing friction and increasing conversion.

## User-Facing Behaviour

- Clicking any primary CTA button on the site opens a centered dark modal overlay
- The modal contains the existing 4-step form funnel (Fahrzeugtyp → Objektdaten → Persönliche Angaben → Unternehmensdaten)
- On success: a success screen is shown inside the modal (no page reload)
- Modal can be closed via: ✕ button, Escape key, or clicking outside the card
- Vehicle-specific buttons (Fahrzeuge page) pre-fill step 1 (Fahrzeugtyp) and step 2 (Marke, Modell) so those steps can be skipped or confirmed quickly

## Architecture

### New: `context/ContactModalContext.tsx`

React context with:
```ts
interface ContactModalConfig {
  initialData?: Partial<FormData>; // optional pre-fill
}
function openModal(config?: ContactModalConfig): void
function closeModal(): void
```

- `ContactModalProvider` wraps `<body>` in `app/layout.tsx`
- Renders `<ContactFunnelModal />` once at root level
- Any component can call `useContactModal()` to get `openModal`

### New: `components/ContactFunnelModal.tsx`

The 4-step funnel extracted from `ContactForm.tsx`, adapted for modal use:

- **Overlay:** `position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdropFilter: blur(4px); zIndex: 9999`
- **Card:** `background: #141414; border: 1px solid rgba(255,255,255,0.1); borderRadius: 20px; maxWidth: 580px; maxHeight: 90vh; overflowY: auto`
- **Progress bar** at top of card (same as ContactForm)
- **Step 1:** Fahrzeugtyp visual cards (3×2 grid with photos)
- **Step 2:** Objektdaten (Marke, Modell, Baujahr, Kilometerstand, Preis)
- **Step 3:** Persönliche Angaben (Vorname, Nachname, Email, Telefon mit +49 prefix)
- **Step 4:** Unternehmensdaten (Firma, Land, Straße, PLZ, Stadt, Nachricht, AGB)
- **Step 5:** Success screen with checkmark + logo
- Close: ✕ button (top-right), Escape key listener, click-outside on overlay
- API: `POST /api/kontakt` — unchanged

When `initialData` is provided (e.g. from VehicleInquiryButton), the form is pre-populated. If `fahrzeugtyp` is pre-filled, step 1 starts with that type already selected.

### Changed: `app/layout.tsx`

Wrap the existing layout body with `<ContactModalProvider>`:
```tsx
<ContactModalProvider>
  <Header />
  {children}
  <Footer />
  <CookieBanner />
</ContactModalProvider>
```

`ContactFunnelModal` is rendered inside the provider (once, at root).

### Changed: `components/Hero.tsx`

Convert "Jetzt Leasing starten" from `<Link href="/kontakt">` to a `<button>` that calls `openModal()`.

### Changed: `components/Header.tsx`

Convert "Leasinganfrage stellen" anchors (desktop nav + mobile menu) from `<a href="/kontakt">` to `<button onClick={openModal}>`. Styled identically to current `btn-primary` links.

### Changed: `components/CTABanner.tsx`

Remove `<QuickContactModal label="Kontakt aufnehmen" />`. Replace with a plain `<button className="btn-primary" onClick={openModal}>Kontakt aufnehmen</button>` using the context.

### Changed: `components/VehicleInquiryButton.tsx`

Remove the local `InquiryModal` component and its state. Replace with:
```tsx
const { openModal } = useContactModal();
// on click:
openModal({ initialData: { fahrzeugtyp: vehicleTyp ?? "pkw", marke: vehicleTitle.split(" ")[0], modell: vehicleTitle } })
```

The vehicle photo/title header that was in the old InquiryModal is dropped — the generic funnel is used instead.

### Deleted: `components/QuickContactModal.tsx`

No longer used. Safe to delete after CTABanner and any other consumers are updated.

## Form Steps Detail

| Step | Fields | Required |
|------|--------|----------|
| 1 | `fahrzeugtyp` (visual card select) | yes |
| 2 | `marke`, `modell`, `baujahr`, `kilometerstand`, `preis` | marke + preis |
| 3 | `vorname`, `nachname`, `email`, `telefon` | all |
| 4 | `unternehmen`, `land`, `strasse`, `plz`, `stadt`, `nachricht`, `agb` | unternehmen + agb |
| 5 | Success screen | — |

This is identical to the existing `ContactForm.tsx` form logic.

## API

No changes. Uses existing `POST /api/kontakt` route which sends:
- Team notification to `anfrage@master-leasing.com`
- Customer confirmation to the submitted email

## Files Summary

| Action | File |
|--------|------|
| CREATE | `context/ContactModalContext.tsx` |
| CREATE | `components/ContactFunnelModal.tsx` |
| MODIFY | `app/layout.tsx` |
| MODIFY | `components/Hero.tsx` |
| MODIFY | `components/Header.tsx` |
| MODIFY | `components/CTABanner.tsx` |
| MODIFY | `components/VehicleInquiryButton.tsx` |
| DELETE | `components/QuickContactModal.tsx` |

## Out of Scope

- The `/kontakt` page itself is unchanged (ContactForm remains as a full-page section)
- No changes to `/api/kontakt`
- No changes to email templates

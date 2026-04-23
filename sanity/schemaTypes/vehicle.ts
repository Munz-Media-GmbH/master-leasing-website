import { defineField, defineType } from "sanity";

export const vehicleType = defineType({
  name: "vehicle",
  title: "Fahrzeug",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL-Slug",
      type: "slug",
      description: "Wird automatisch aus dem Titel generiert – URL der Detailseite",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Fahrzeugbild",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Weitere Bilder (Galerie)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "monthlyRate",
      title: "Monatliche Rate (€)",
      type: "number",
      description: "z.B. 399 für 399 €/Monat",
    }),
    defineField({
      name: "description",
      title: "Beschreibung",
      type: "text",
      rows: 4,
      description: "Kurzbeschreibung des Fahrzeugs für die Detailseite",
    }),
    defineField({
      name: "specs",
      title: "Technische Daten",
      type: "array",
      description: "z.B. Motor: 2.0 TDI, Leistung: 150 PS, Getriebe: Automatik",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Bezeichnung", type: "string" },
            { name: "value", title: "Wert", type: "string" },
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({
      name: "href",
      title: "Externer Link (optional)",
      type: "url",
      description: "Nur falls auf eine externe Seite verlinkt werden soll",
    }),
    defineField({
      name: "isActive",
      title: "Aktiv (auf Website anzeigen)",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      type: "number",
      description: "Kleinere Zahl = weiter oben",
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: "Reihenfolge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      isActive: "isActive",
      rate: "monthlyRate",
    },
    prepare({ title, media, isActive, rate }) {
      return {
        title: title ?? "Unbenanntes Fahrzeug",
        subtitle: `${isActive ? "✓ Aktiv" : "✗ Inaktiv"}${rate ? ` · ab ${rate} €/Monat` : ""}`,
        media,
      };
    },
  },
});

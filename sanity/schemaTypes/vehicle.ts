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
      name: "subtitel",
      title: "Untertitel / Ausstattung-Kurzfassung",
      type: "string",
      description: "Wird unter dem Titel angezeigt, z.B. 'LED · ACC · NAVI · APP-CONN'",
    }),
    defineField({
      name: "monthlyRate",
      title: "Monatliche Rate (€)",
      type: "number",
      description: "z.B. 399 für 399 €/Monat",
    }),
    defineField({
      name: "typ",
      title: "Fahrzeugtyp",
      type: "string",
      description: "Wird für die Filterung im Listing verwendet",
      options: {
        list: [
          { title: "PKW / Limousine", value: "pkw" },
          { title: "Kombi / Variant", value: "kombi" },
          { title: "SUV / Crossover", value: "suv" },
          { title: "Transporter / Kastenwagen", value: "nutzfahrzeug" },
          { title: "LKW / Schwertransport", value: "lkw" },
          { title: "Landmaschinen", value: "landwirtschaft" },
          { title: "Geräte & Zubehör", value: "geraete" },
          { title: "Anhänger", value: "anhaenger" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "motor",
      title: "Motorart",
      type: "string",
      description: "Wird für die Filterung im Listing verwendet",
      options: {
        list: [
          { title: "Diesel", value: "diesel" },
          { title: "Benzin", value: "benzin" },
          { title: "Elektro (BEV)", value: "elektro" },
          { title: "Plug-in Hybrid (PHEV)", value: "hybrid" },
          { title: "Mild-Hybrid (MHEV)", value: "mildhybrid" },
          { title: "Erdgas (CNG)", value: "erdgas" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "leistung",
      title: "Leistung (PS)",
      type: "number",
      description: "Nur die Zahl, z.B. 150",
    }),
    defineField({
      name: "verbrauch",
      title: "Verbrauch (l/100km)",
      type: "string",
      description: "z.B. '6,2' oder '— elektrisch'",
    }),
    defineField({
      name: "farbe",
      title: "Farbe",
      type: "string",
      description: "Anzeige + Filterung",
      options: {
        list: [
          { title: "Weiß", value: "Weiß" },
          { title: "Schwarz", value: "Schwarz" },
          { title: "Grau", value: "Grau" },
          { title: "Silber / Metallic", value: "Silber" },
          { title: "Blau", value: "Blau" },
          { title: "Rot", value: "Rot" },
          { title: "Grün", value: "Grün" },
          { title: "Beige / Braun", value: "Beige" },
          { title: "Orange / Gelb", value: "Orange" },
        ],
        layout: "dropdown",
      },
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

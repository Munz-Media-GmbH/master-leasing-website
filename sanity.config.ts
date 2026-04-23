import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "master-leasing",
  title: "Master Leasing CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Master Leasing")
          .items([
            S.listItem()
              .title("Fahrzeuge")
              .child(S.documentTypeList("vehicle").title("Fahrzeuge")),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});

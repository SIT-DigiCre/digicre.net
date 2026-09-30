import { readFileSync } from "node:fs";
import type { MetadataRoute } from "next";
import YAML from "yaml";
import type { Team } from "@/data/team";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const teams = YAML.parse(
    readFileSync("./src/data/teams.yaml", "utf-8"),
  ) as Team[];
  const teamPages: MetadataRoute.Sitemap = teams.map((team) => ({
    url: `https://digicre.net/about/${team.id}`,
    lastModified: new Date(),
  }));

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: "https://digicre.net",
      lastModified: new Date(),
      priority: 1,
    },
    ...teamPages,
  ];

  return sitemap;
}

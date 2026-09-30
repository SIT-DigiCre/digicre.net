import { readFileSync } from "node:fs";
import YAML from "yaml";

export const readYaml = (src: string) => {
  const content = readFileSync(src, "utf-8");
  return YAML.parse(content);
};

export default readYaml;

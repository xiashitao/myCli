import fs from "fs-extra";
import path from "node:path";

export const loadTemplate = async (templateName: string) => {
  const templatePath = path.join(__dirname, "templates", templateName);
  return fs.readFile(templatePath, "utf-8");
};

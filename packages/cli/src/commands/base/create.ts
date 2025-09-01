import prompts from "prompts";
import type { Command } from "commander";
import { logger } from "@/utils/logger";
import pc from "picocolors";

export const create = (program: Command) => {
  return program
    .createCommand("create")
    .description("create project")
    .action(async () => {
      logger.box("create");
      const templateResult = await prompts({
        type: "select",
        name: "template",
        message: "请选择模版",
        choices: [
          {
            title: pc.yellow("Alime Card"),
            value: "alime-card",
            description: "小蜜卡片",
          },
          {
            title: pc.yellow("Service hall Card"),
            value: "sh-card",
            description: "服务大厅卡片",
          },
          {
            title: pc.blue("Alime App"),
            value: "alime-app",
            description: "基蜜平台应用",
          },
        ],
      });
      // console.log("🚀 ~ create ~ templateResult:", templateResult);
      logger.log(templateResult)

      const typeResult = await prompts({
        type: "select",
        name: "type",
        message: "Please select a variant",
        choices: [
          { title: pc.blue("TypeScript + TailwindCSS"), value: "ts" },
          { title: pc.yellow("JavaScript"), value: "js" },
        ],
      });
      // console.log("🚀 ~ create ~ typeResult:", typeResult)
      logger.log(typeResult)

      const projectResult = await prompts({
        type: "text",
        name: "projectName",
        message: "Please enter the project name",
        format: (value) => value.trim(),
        hint: "默认值为my-project",
        initial: "my-project",
        validate: (value) => {
          if (!value) {
            return "The project name cannot be empty";
          }
          if (value.includes(" ")) {
            return "The project name cannot contain spaces";
          }
          return true;
        },
      });
      logger.log("");
      // console.log(projectResult);
      // logger.box(pc.green("welcome to card-cli11"), args);
      logger.log(
        "🚀  Successfully created project " +
          pc.green(projectResult.projectName)
      );
      logger.log("👉  Get started with the following commands:");
      logger.log("");
      logger.log("cd " + projectResult.projectName);
      logger.log("tnpm install");
      logger.log("tnpm run dev");
    });
};

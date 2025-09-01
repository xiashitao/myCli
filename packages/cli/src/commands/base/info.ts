import { logger } from "@/utils/logger";
import { Command } from "commander";
import { green } from "picocolors";

export const info = (program: Command) => {
  return program
    .createCommand("info")
    .description("info project")
    .action(() => {
      logger.box(green("welcome to card-cli"));
    });
};

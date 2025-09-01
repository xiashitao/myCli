import "./commands";
import { program } from "commander";

program.version('1.0.0').name('card-cli');

export const run = (args: string[]) => {
  program.parse(args);
};
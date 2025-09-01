import { program, Command } from "commander";

type Fn = (p: Command) => Command

export function registerCommand(fn: Fn) {
  program.addCommand(fn(program))
}

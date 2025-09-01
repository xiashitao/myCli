import { registerCommand } from "./registerCommand";
import { build, create, info } from "./base";

registerCommand(build);
registerCommand(create);
// registerCommand(serve);
registerCommand(info);

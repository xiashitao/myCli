import { registerCommand } from "./registerCommand";
import { build, create, info } from "./base";

/**
 * 注册构建项目的命令
 */
registerCommand(build);
/**
 * 注册创建项目的命令
 */
registerCommand(create);
/**
 * 注册打印信息的命令
 */
registerCommand(info);

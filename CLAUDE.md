# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing a CLI tool called `card-cli` with the following structure:

```
newCli/
├── packages/
│   ├── cli/          # Main CLI package (@card-cli/cli)
│   └── shared/       # Shared utilities (@card-cli/shared)
└── tsconfig.json     # Root TypeScript configuration
```

The CLI package is the main entry point located at `packages/cli/` and is published as `@card-cli/cli`.

## Development Commands

### Building
- `npm run build` - Build the CLI using tsup (outputs to `dist/`)
- `npm run dev` - Build in watch mode during development

### Project Setup
- Work from the `/packages/cli/` directory for CLI development
- The CLI binary is defined in `bin/card-cli` and points to `dist/index.js`
- TypeScript configuration extends from the root `tsconfig.json`

## Architecture

### CLI Structure
- **Entry point**: `index.ts` - Contains the main CLI logic
- **Binary**: `bin/card-cli` - Executable that requires the built `dist/index.js`
- **Build system**: Uses `tsup` for bundling TypeScript to CommonJS

### TypeScript Configuration
- Root `tsconfig.json` uses NodeNext module resolution
- Individual packages extend the root configuration
- Target is ES2015 with ESNext and DOM libraries

### Package Structure
- `@card-cli/cli` - Main CLI package with binary distribution
- `@card-cli/shared` - Shared utilities (currently minimal)
- Packages are configured for local development within the monorepo

## Key Files
- `index.ts` - Main CLI implementation
- `tsup.config.ts` - Build configuration (entry: index.ts, format: cjs, outDir: dist)
- `package.json` - Defines the CLI binary and build scripts
- `bin/card-cli` - Executable wrapper that requires the built output
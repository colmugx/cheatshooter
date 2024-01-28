# cheatshooter
a cheat code shooter, and also refer to it as `konami code`

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/colmugx/cheatshooter)](https://github.com/colmugx/cheatshooter/issues)
[![GitHub stars](https://img.shields.io/github/stars/colmugx/cheatshooter)](https://github.com/colmugx/cheatshooter/stargazers)

**English** | [简体中文(Chinese)](./README.zh-CN.md) | [日本語(Japanese)](README-ja.md)

## Getting Started

### Installation

```bash
pnpm add cheatcode-shooter
```

### Usage

```typescript
// btw, it was initially named cheat-shooter, but npm disallowed the use of `cheat`.
import { CheatShooter } from 'cheatcode-shooter';

const actions = {
  'konami': () => {
    // Your action for the Konami code
    console.log('konami')
  },
  // Add more actions as needed
};

const cheatShooter = new CheatShooter(actions);

cheatShooter.on('command', (commandInfo: Output) => {
  if (commandInfo) {
    console.log(`Command detected: ${commandInfo.input}`);
  } else {
    console.log('Invalid command');
  }
});

// Access the available commands
console.log('Available commands:', cheatShooter.commands);

// Destroy the cheat shooter when it's no longer needed
cheatShooter.destroy();
```

## API
### CheatShooter

```typescript
interface Output {
  step: number;
  input: string;
  guesses: string[];
}
```

`new CheatShooter(actions: Record<string, Action>): CheatShooter`
> Creates a new CheatShooter instance with the specified actions.

`destroy(): void`
> Removes event listeners and cleans up resources when the CheatShooter is no longer needed.

`on(event: EventType, callback: EventCallback): Function`
> Registers a callback function to be called when a command is detected. Returns a function to remove the listener.

`commands: string[]`
> An array of available cheat commands.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

# cheatshooter

「作弊码」发射器，可以在你的应用中集成热键触发功能

> 在游戏行业中，作弊码也成为「科乐美代码」
> 
> （but, F__K ______!）

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/colmugx/cheatshooter)](https://github.com/colmugx/cheatshooter/issues)
[![GitHub stars](https://img.shields.io/github/stars/colmugx/cheatshooter)](https://github.com/colmugx/cheatshooter/stargazers)

## 指南

### 安装

```bash
pnpm add cheatcode-shooter
```

### 使用

```typescript
// 顺带一提，本来就叫 ↓ 这个名字但是 `npm` 不允许 `cheat`
import { CheatShooter } from 'cheatcode-shooter';

const actions = {
  'konami': () => {
    // `konami` 对应的动作
    console.log('konami')
  },
  // 其他需要触发的动作
};

const cheatShooter = new CheatShooter(actions);

cheatShooter.on('command', (commandInfo: Output) => {
  if (commandInfo) {
    console.log(`命中输入: ${commandInfo.input}`);
    console.log(`这是第: ${commandInfo.step} 步`);
    console.log(`猜测可能列表: ${commandInfo.guesses}`);
  } else {
    console.log('找不到，下一个');
  }
});

// 可以查询被等级的命令
console.log('Available commands:', cheatShooter.commands);

// 记得销毁
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
> 创建实例

`destroy(): void`
> 主动销毁（毕竟带了监听器）

`on(event: EventType, callback: EventCallback): Function`
> 监听输入

`commands: string[]`
> 所有已经正常注册的命令可以通过这个查询（当然注册只允许在实例化时注册）

## License

MIT 兄弟，MIT。但是你可以检查 [LICENSE](LICENSE)

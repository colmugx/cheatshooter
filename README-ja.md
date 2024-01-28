# cheatshooter
また「コナミコード」とも呼ばれます

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/colmugx/cheatshooter)](https://github.com/colmugx/cheatshooter/issues)
[![GitHub stars](https://img.shields.io/github/stars/colmugx/cheatshooter)](https://github.com/colmugx/cheatshooter/stargazers)

## Getting Started

### インストール

```bash
pnpm add cheatcode-shooter
```

### 使用法

```typescript
// ところで、最初はcheat-shooterと呼ばれていましたが、npmは`cheat`の使用を許可しませんでした。
import { CheatShooter } from 'cheatcode-shooter';

const actions = {
  'konami': () => {
    // コナミコードのアクション
    console.log('konami');
  },
  // 必要に応じて他のアクションを追加
};

const cheatShooter = new CheatShooter(actions);

cheatShooter.on('command', (commandInfo: Output) => {
  if (commandInfo) {
    console.log(`コマンドが検出されました：${commandInfo.input}`);
  } else {
    console.log('無効なコマンド');
  }
});

// 利用可能なコマンドにアクセス
console.log('利用可能なコマンド:', cheatShooter.commands);

// CheatShooter が不要になったら破棄する
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
> 指定されたアクションで新しい CheatShooter インスタンスを作成します。

`destroy(): void`
> CheatShooter が不要になったときにイベントリスナーを削除し、リソースをクリーンアップします。

`on(event: EventType, callback: EventCallback): Function`
> コマンドが検出されたときに呼び出されるコールバック関数を登録します。リスナーを削除する関数が返されます。

`commands: string[]`
> 利用可能なチートコマンドの配列。

## ライセンス

このプロジェクトは `MIT` ライセンスの下でライセンスされています、詳細については [LICENSE](LICENSE) ファイルを参照してください

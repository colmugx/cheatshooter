import type { Action, EventCallback, EventType } from './interface';
import { EventEmitter } from './event-emitter';

export class CheatShooter {
  private _eventEmitter: EventEmitter;
  private _actions: Map<string, Action>;
  private _commands: string[] = [];
  private _currentCode: string[] = [];

  constructor(actions: Record<string, Action>) {
    this._eventEmitter = new EventEmitter();

    this._actions = new Map(Object.entries(actions));
    this.initCmd(actions);
    this.setupListener();
  }

  destroy() {
    document.removeEventListener('keydown', this.handleKeydown.bind(this));
  }

  on(event: EventType, callback: EventCallback) {
    return this._eventEmitter.on(event, callback);
  }

  get commands() {
    return this._commands;
  }

  private initCmd(actions: Record<string, Action>) {
    this._commands = Object.keys(actions).map(cmd => cmd);
  }

  private setupListener() {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  private check() {
    const code = this._currentCode.join('');

    const hit = this._commands.includes(code);

    if (hit) {
      const action = this._actions.get(code);

      this._eventEmitter.emit('command', {
        step: this._currentCode.length,
        input: code,
        guesses: [code],
      });

      action?.();
      this.reset();
      return;
    }

    const halfHit = this._commands.filter(cmd => cmd.startsWith(code));

    if (halfHit.length > 0) {
      this._eventEmitter.emit('command', {
        step: this._currentCode.length,
        input: code,
        guesses: halfHit,
      });
    } else {
      this._eventEmitter.emit('command', false);
      this.reset();
    }
  }

  private handleKeydown(event: KeyboardEvent) {
    event.stopPropagation();
    // 每次按下只触发一次
    if (event.repeat) {
      return false;
    }

    const { key } = event;
    this._currentCode.push(key);
    this.check();

    return false; // 阻止默认事件，防止按键被浏览器记录到历史记录中
  }

  private reset() {
    this._currentCode = [];
  }
}

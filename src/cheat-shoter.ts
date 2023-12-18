import { EventSource } from './event-source';
import type { Action, OutputEvent } from './interface';

export class CheatShoter {
  private _eventSrouce: EventSource;
  private _actions: Map<string, Action>;
  private _commands: string[][] = [];
  private _currentCode: string[] = [];

  constructor(actions: Record<string, Action>) {
    this._actions = new Map(Object.entries(actions));
    this._eventSrouce = new EventSource();
    this.initCmd(actions);
    this.setupListener();
  }

  initCmd(actions: Record<string, Action>) {
    this._commands = Object.keys(actions).map(cmd => cmd.split(''));
  }

  destroy() {
    document.removeEventListener('keydown', this.handleKeydown.bind(this));
  }

  on() {}

  testOn(data: OutputEvent) {
    console.log(data);
  }

  setupListener() {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  private check() {
    const code = this._currentCode.join('');
    console.log('code', code);
    // const action = this._actions[code];
    // if (action) {
    //   action();
    //   this.reset();
    // } else if (this._commands.includes(this._currentCode)) {
    //   this.reset();
    // } else {
    //   this._currentCode.pop();
    // }
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

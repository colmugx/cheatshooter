import type { EventCallback, EventType } from './interface';

export class EventEmitter {
  private _events: Map<string, EventCallback[]>;

  constructor() {
    this._events = new Map();
  }

  on(event: EventType, listener: EventCallback) {
    this._events.set(event, (this._events.get(event) || []).concat(listener));
  }

  emit(event: EventType, ...args: any[]) {
    const eventList = this._events.get(event);
    eventList?.forEach(cb => cb(...args));
  }

  off(event: EventType, listener: EventCallback) {
    this._events.set(
      event,
      (this._events.get(event) || []).filter(cb => cb !== listener),
    );
  }

  removeAll() {
    this._events.clear();
  }
}

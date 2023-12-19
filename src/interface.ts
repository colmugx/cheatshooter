export type Action = () => void;
export type EventCallback = (...args: any[]) => void;
export type EventType = 'command';

interface Output {
  step: number;
  input: string;
  guesses: string[];
}

export type OutputEvent = Output | false;

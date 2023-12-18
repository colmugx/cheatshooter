export type Action = () => void;

export interface OutputEvent {
  step: number;
  command: string[];
}
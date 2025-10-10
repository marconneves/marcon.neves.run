import { flag } from 'flags/next';
 
export const exampleFlag = flag<number>({
  key: 'example-flag',
  defaultValue: 0,
  description:
    'A flag for debugging and demo purposes which delays the data loading',
  options: [
    { value: 0, label: 'No delay' },
    { value: 200, label: '200ms' },
    { value: 1000, label: '1s' },
    { value: 3000, label: '3s' },
    { value: 10_000, label: '10s' },
  ],
  decide() {
    return this.defaultValue!;
  },
});

export const terminalCode = flag({
  key: 'terminal-code-flag',
  description:
    'Outra flag teste',
  decide() {
    return Math.random() > 0.5;
  },
});

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

export const headerCode = flag<boolean>({
  key: 'header-flag',
  defaultValue: false,
  description:
    'Ativar header e navegação do site.',
  decide() {
    return this.defaultValue!;
  },
});

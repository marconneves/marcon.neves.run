import { flag } from 'flags/next';
 
export const aboutPageFlag = flag<boolean>({
  key: 'about-page-flag',
  defaultValue: false,
  description:
    'Ativar pagina sobre.',
  decide() {
    return this.defaultValue!;
  },
});

export const contactPageFlag = flag<boolean>({
  key: 'contact-page-flag',
  defaultValue: false,
  description:
    'Ativar pagina de contato.',
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

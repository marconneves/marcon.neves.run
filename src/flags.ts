import { flag } from 'flags/next';

export const contactPageFlag = flag<boolean>({
  key: 'contact-page-flag',
  defaultValue: false,
  description:
    'Ativar pagina de contato.',
  decide() {
    return this.defaultValue!;
  },
});

export const blogPageFlag = flag<boolean>({
  key: 'blog-page-flag',
  defaultValue: false,
  description:
    'Ativar pagina do blog.',
  decide() {
    return this.defaultValue!;
  },
});

export const newsletterPageFlag = flag<boolean>({
  key: 'newsletter-page-flag',
  defaultValue: false,
  description: 'Ativar feature da newsletter.',
  decide() {
    return this.defaultValue!;
  }
});

export const projectsPageFlag = flag<boolean>({
  key: 'projects-page-flag',
  defaultValue: false,
  description: 'Ativar feature da projetos.',
  decide() {
    return this.defaultValue!;
  }
});
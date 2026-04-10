import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ko', 'zh-CN', 'ja', 'es'],
  defaultLocale: 'zh-CN',
  localePrefix: 'always',
});

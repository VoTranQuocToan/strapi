import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({});

export default ({ env }) => ({
    i18n: {
      enabled: true,
      config: {
        ai: {
          enabled: true,
          provider: 'openai',
        },
      },
    },
  });
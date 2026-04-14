import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({});

export default ({ env }: { env: any }) => ({
    'strapi-llm-translator': {
      enabled: true,
      config: {
        apiUrl: 'https://api.groq.com/openai/v1',
        apiKey: env('GROQ_API_KEY'),
        model: 'llama-3.3-70b-versatile',
      },
    },
  });
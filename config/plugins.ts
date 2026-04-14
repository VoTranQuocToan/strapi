export default ({ env }: { env: any }) => {
    return {
      'strapi-llm-translator': {
        enabled: true,
        config: {
          apiUrl: env('LLM_API_URL'),
          apiKey: env('LLM_API_KEY'),
          model: env('LLM_MODEL'),
        },
      },
    };
  };
export default ({ env }: { env: any }) => {
  return {
    'strapi-llm-translator': {
      enabled: true,
      config: {
        apiUrl: env('LLM_API_URL', 'https://api.groq.com/openai/v1'),
        apiKey: env('LLM_API_KEY'),
        model: env('LLM_MODEL', 'llama3-70b-8192'),
      },
    },
  };
};
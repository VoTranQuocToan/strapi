export default ({ env }: { env: any }) => ({
  'strapi-llm-translator': {
    enabled: true,
    config: {
      openai: {
        apiKey: env('GROQ_API_KEY'),
        baseURL: 'https://api.groq.com/openai/v1',
        model: 'llama3-70b-8192',
      },
    },
  },
});
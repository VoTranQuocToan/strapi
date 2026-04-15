export default ({ env }: { env: any }) => ({
  'strapi-llm-translator': {
    enabled: true,
    config: {
      apiUrl: 'https://api.groq.com/openai/v1',
      apiKey: env('GROQ_API_KEY'), // ✅ đúng chuẩn Strapi
      model: 'llama3-70b-8192',
    },
  },
});
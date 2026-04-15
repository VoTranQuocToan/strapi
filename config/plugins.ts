export default ({ env }: { env: any }) => {
  return {
    'strapi-llm-translator': {
      enabled: true,
      config: {
        apiUrl: 'https://api.groq.com/openai/v1',
        apiKey: process.env.GROQ_API_KEY,
        model: 'llama3-70b-8192',
      },
    },
  };
};
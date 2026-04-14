export default ({ env }: { env: any }) => {
    console.log('GROQ_API_KEY value:', env('GROQ_API_KEY')); // debug
    return {
      'strapi-llm-translator': {
        enabled: true,
        config: {
          apiUrl: 'https://api.groq.com/openai/v1',
          apiKey: env('GROQ_API_KEY'),
          model: 'llama-3.3-70b-versatile',
        },
      },
    };
  };
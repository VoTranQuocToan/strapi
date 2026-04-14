import { translateText } from "../../../../utils/translate";

const TARGET_LOCALES = ["en", "ja"];

export default {
  async afterCreate(event) {
    await handleTranslate(event);
  },

  async afterUpdate(event) {
    await handleTranslate(event);
  },
};

async function handleTranslate(event) {
  const { result } = event;

  // chỉ translate từ default locale (ví dụ: vi)
  if (result.locale !== "vi") return;

  for (const locale of TARGET_LOCALES) {
    const translated = {};

    for (const key in result) {
      if (typeof result[key] === "string") {
        translated[key] = await translateText(result[key], locale);
      }
    }

    await strapi.entityService.create("api::blog.blog", {
      data: {
        ...translated,
        locale,
        localizations: [result.id],
      },
    });
  }
}
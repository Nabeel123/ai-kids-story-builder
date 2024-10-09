/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_STUDIO;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Create kids story on description for 5-8 years kids, Educational story, and all images in paper out style, story of boy and magic school give me 5 chapters, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "story_title": "The Boy Who Went to Magic School",\n  "cover_image": {\n    "description": "A young boy with a mischievous grin, wearing a pointy wizard hat, stands in front of a colorful, swirling, magical portal. The portal is surrounded by glowing stars and floating books.",\n    "style": "paper-cut out"\n  },\n  "chapters": [\n    {\n      "chapter_title": "The Mysterious Invitation",\n      "text": "Toby was a curious boy who loved exploring the woods behind his house. One sunny afternoon, he stumbled upon a small, shimmering box tucked beneath a giant oak tree. Inside, he found a beautifully crafted scroll with swirling letters that seemed to glow. It read: \\"To Toby, the curious one, you are invited to the Academy of Magical Arts.\\" Toby\'s eyes widened in amazement. Could this be real? A magic school?",\n      "image": {\n        "description": "Toby, a boy with brown hair and blue eyes, holding the glowing scroll with one hand, looks at it with wonder. In the background, a large oak tree stands tall, leaves rustling in the wind.",\n        "style": "paper-cut out"\n      }\n    },\n    {\n      "chapter_title": "The Journey to the Academy",\n      "text": "Toby, filled with excitement, followed the instructions on the scroll. He found a secret path that led him to a hidden clearing. There, a majestic castle stood, shimmering with enchanted lights. As he approached the castle, the doors opened as if by magic, welcoming him inside.",\n      "image": {\n        "description": "Toby stands before a large, stone castle with tall towers, glowing windows, and intricate carvings. A magical path of swirling lights leads him to the castle entrance. The doors open revealing a glimpse of a grand hallway inside.",\n        "style": "paper-cut out"\n      }\n    },\n    {\n      "chapter_title": "The Magic Lessons",\n      "text": "The Academy was filled with amazing classrooms. Toby learned to levitate objects with a flick of his wrist, conjure colorful sparks with his fingertips, and even talk to talking animals! His favorite teacher, Professor Willow, was a friendly wizard with a long white beard who taught him the secrets of potions.",\n      "image": {\n        "description": "Toby, dressed in a wizard robe, levitates a book with a magic wand. He stands in a classroom with a chalkboard filled with magical symbols, surrounded by other students who are learning different magic tricks.",\n        "style": "paper-cut out"\n      }\n    },\n    {\n      "chapter_title": "The Magical Challenge",\n      "text": "One day, the Academy was in danger. A mischievous gnome named Grumble had stolen the school\'s magical key, which powered all the enchantments. Toby and his friends had to work together to retrieve the key and save the Academy. Toby used his new magic skills to outsmart Grumble and return the key.",\n      "image": {\n        "description": "Toby, his friends, and Professor Willow chase after Grumble, who is running away with the magical key. The scene is filled with swirling magical effects, including disappearing and reappearing objects, and glowing sparks.",\n        "style": "paper-cut out"\n      }\n    },\n    {\n      "chapter_title": "The Magic of Friendship",\n      "text": "Toby learned that the most powerful magic was the magic of friendship. He discovered that working together with his friends was the key to overcoming any challenge. As Toby returned home, he knew that even though he was leaving the Academy, the magic would always be with him, and he would always remember the friends he made.",\n      "image": {\n        "description": "Toby, standing in front of the castle with his friends, waves goodbye. The castle is bathed in magical light, and all the characters have smiles on their faces. In the background, Toby\'s house is visible in the distance.",\n        "style": "paper-cut out"\n      }\n    }\n  ]\n}\n``` \n',
        },
      ],
    },
  ],
});

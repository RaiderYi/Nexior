import i18n from '@/i18n';
import { IChatModel, IChatModelGroup } from '@/models';

export const ROLE_SYSTEM = 'system';
export const ROLE_ASSISTANT = 'assistant';
export const ROLE_USER = 'user';

export const CHAT_MODEL_NAME_GPT_5_5 = 'gpt-5.5';
export const CHAT_MODEL_NAME_GPT_5_4 = 'gpt-5.4';
export const CHAT_MODEL_NAME_GPT_5_4_MINI = 'gpt-5.4-mini';
export const CHAT_MODEL_NAME_GPT_4_1 = 'gpt-4.1';
export const CHAT_MODEL_NAME_GPT_4O = 'gpt-4o';
export const CHAT_MODEL_NAME_GPT_5_1 = 'gpt-5.1';
export const CHAT_MODEL_NAME_GPT_5_2 = 'gpt-5.2';
export const CHAT_MODEL_NAME_GPT_5_MINI = 'gpt-5-mini';
export const CHAT_MODEL_NAME_GPT_5_NANO = 'gpt-5-nano';
export const CHAT_MODEL_NAME_O1 = 'o1';
export const CHAT_MODEL_NAME_O3 = 'o3';

export const CHAT_MODEL_NAME_DEEPSEEK_CHAT = 'deepseek-v3';
export const CHAT_MODEL_NAME_DEEPSEEK32_CHAT = 'deepseek-v3.2-exp';
export const CHAT_MODEL_NAME_DEEPSEEK_V4_FLASH = 'deepseek-v4-flash';
export const CHAT_MODEL_NAME_DEEPSEEK_REASONER = 'deepseek-r1';
export const CHAT_MODEL_NAME_DEEPSEEK_R1_0528 = 'deepseek-r1-0528';
export const CHAT_MODEL_NAME_DEEPSEEK_V3_250324 = 'deepseek-v3-250324';

export const CHAT_MODEL_NAME_GROK_4 = 'grok-4';
export const CHAT_MODEL_NAME_GROK_3 = 'grok-3';

export const CHAT_MODEL_NAME_GEMINI_3_1_PRO = 'gemini-3.1-pro';
export const CHAT_MODEL_NAME_GEMINI_3_0_PRO = 'gemini-3.0-pro';
export const CHAT_MODEL_NAME_GEMINI_3_5_FLASH = 'gemini-3.5-flash';
export const CHAT_MODEL_NAME_GEMINI_2_5_PRO = 'gemini-2.5-pro';
export const CHAT_MODEL_NAME_GEMINI_2_5_FLASH = 'gemini-2.5-flash';
export const CHAT_MODEL_NAME_GEMINI_2_0_FLASH = 'gemini-2.0-flash';
export const CHAT_MODEL_NAME_GEMINI_2_5_FLASH_LITE = 'gemini-2.5-flash-lite';
export const CHAT_MODEL_NAME_GEMINI_3_FLASH_PREVIEW = 'gemini-3-flash-preview';

export const CHAT_MODEL_NAME_CLAUDE_OPUS_4_8 = 'claude-opus-4-8';
export const CHAT_MODEL_NAME_CLAUDE_SONNET_4_6 = 'claude-sonnet-4-6';
export const CHAT_MODEL_NAME_CLAUDE_HAIKU_4_5 = 'claude-haiku-4-5-20251001';
export const CHAT_MODEL_NAME_CLAUDE_FABLE_5 = 'claude-fable-5';
export const CHAT_MODEL_NAME_CLAUDE_SONNET_5 = 'claude-sonnet-5';
export const CHAT_MODEL_NAME_CLAUDE_OPUS_4_6 = 'claude-opus-4-6';
export const CHAT_MODEL_NAME_CLAUDE_OPUS_4_7 = 'claude-opus-4-7';
export const CHAT_MODEL_NAME_CLAUDE_3_7_SONNET = 'claude-3-7-sonnet-20250219';

export const CHAT_MODEL_NAME_KIMI_K2_5 = 'kimi-k2.5';
export const CHAT_MODEL_NAME_KIMI_K2_THINKING = 'kimi-k2-thinking';
export const CHAT_MODEL_NAME_KIMI_K2_THINKING_TURBO = 'kimi-k2-thinking-turbo';
export const CHAT_MODEL_NAME_KIMI_K2_INSTRUCT_0905 = 'kimi-k2-instruct-0905';
export const CHAT_MODEL_NAME_KIMI_K2_TURBO_PREVIEW = 'kimi-k2-turbo-preview';

export const CHAT_MODEL_NAME_GLM_5_1 = 'glm-5.1';
export const CHAT_MODEL_NAME_GLM_4_7 = 'glm-4.7';
export const CHAT_MODEL_NAME_GLM_5 = 'glm-5';
export const CHAT_MODEL_NAME_GLM_5_TURBO = 'glm-5-turbo';
export const CHAT_MODEL_NAME_GLM_4_6 = 'glm-4.6';

export const CHAT_MODEL_ICON_CHATGPT = 'https://cdn.acedata.cloud/7dljuv.png';
export const CHAT_MODEL_ICON_GROK = 'https://cdn.acedata.cloud/p1ge98.png';
export const CHAT_MODEL_ICON_DEEPSEEK = 'https://cdn.acedata.cloud/zv0360.jpg';
export const CHAT_MODEL_ICON_GEMINI = 'https://cdn.acedata.cloud/psfx0g.jpg';
export const CHAT_MODEL_ICON_CLAUDE = 'https://cdn.acedata.cloud/8fnw4v.jpg';
export const CHAT_MODEL_ICON_KIMI = 'https://cdn.acedata.cloud/57ebgy.png';
export const CHAT_MODEL_ICON_GLM = 'https://cdn.acedata.cloud/jqi3nv.png';

export const CHAT_SERVICE_ID = 'b1fbcc32-e218-4253-9dc3-4fe600a1bfb9';

export const CHAT_MODEL_GPT_5_5: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GPT_5_5,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isFileSupported: true,
  isImageSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.55'),
  getDescription: () => i18n.global.t('chat.model.55Description')
};

export const CHAT_MODEL_GPT_5_4: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GPT_5_4,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isFileSupported: true,
  isImageSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.54'),
  getDescription: () => i18n.global.t('chat.model.54Description')
};

export const CHAT_MODEL_GPT_5_4_MINI: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GPT_5_4_MINI,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isFileSupported: true,
  isImageSupported: true,
  isFree: true,
  getDisplayName: () => i18n.global.t('chat.model.54Mini'),
  getDescription: () => i18n.global.t('chat.model.54MiniDescription')
};

export const CHAT_MODEL_GPT_4_1: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GPT_4_1,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isFileSupported: true,
  isImageSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gpt41'),
  getDescription: () => i18n.global.t('chat.model.gpt41Description')
};

export const CHAT_MODEL_GPT_4O: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GPT_4O,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isFileSupported: true,
  isImageSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gpt4o'),
  getDescription: () => i18n.global.t('chat.model.gpt4oDescription')
};

export const CHAT_MODEL_GPT_5_1: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GPT_5_1,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isFileSupported: true,
  isImageSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.51'),
  getDescription: () => i18n.global.t('chat.model.51Description')
};

export const CHAT_MODEL_GPT_5_2: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GPT_5_2,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isFileSupported: true,
  isImageSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.52'),
  getDescription: () => i18n.global.t('chat.model.52Description')
};

export const CHAT_MODEL_GPT_5_MINI: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GPT_5_MINI,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isFileSupported: true,
  isImageSupported: true,
  isFree: true,
  getDisplayName: () => i18n.global.t('chat.model.5Mini'),
  getDescription: () => i18n.global.t('chat.model.5MiniDescription')
};

export const CHAT_MODEL_GPT_5_NANO: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GPT_5_NANO,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isFileSupported: true,
  isImageSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.5Nano'),
  getDescription: () => i18n.global.t('chat.model.5NanoDescription')
};

export const CHAT_MODEL_O1: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_O1,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.o1'),
  getDescription: () => i18n.global.t('chat.model.o1Description')
};

export const CHAT_MODEL_O3: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_O3,
  icon: CHAT_MODEL_ICON_CHATGPT,
  modelGroup: 'chatgpt',
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.o3'),
  getDescription: () => i18n.global.t('chat.model.o3Description')
};

export const CHAT_MODEL_DEEPSEEK_CHAT: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_DEEPSEEK_CHAT,
  icon: CHAT_MODEL_ICON_DEEPSEEK,
  modelGroup: 'deepseek',
  getDisplayName: () => i18n.global.t('chat.model.deepseekChat'),
  getDescription: () => i18n.global.t('chat.model.deepseekChatDescription')
};

export const CHAT_MODEL_DEEPSEEK_CHAT32: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_DEEPSEEK32_CHAT,
  icon: CHAT_MODEL_ICON_DEEPSEEK,
  modelGroup: 'deepseek',
  getDisplayName: () => i18n.global.t('chat.model.deepseekChat32'),
  getDescription: () => i18n.global.t('chat.model.deepseekChat32Description')
};

export const CHAT_MODEL_DEEPSEEK_V4_FLASH: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_DEEPSEEK_V4_FLASH,
  icon: CHAT_MODEL_ICON_DEEPSEEK,
  modelGroup: 'deepseek',
  getDisplayName: () => i18n.global.t('chat.model.deepseekV4Flash'),
  getDescription: () => i18n.global.t('chat.model.deepseekV4FlashDescription')
};

export const CHAT_MODEL_DEEPSEEK_REASONER: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_DEEPSEEK_REASONER,
  icon: CHAT_MODEL_ICON_DEEPSEEK,
  modelGroup: 'deepseek',
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.deepseekReasoner'),
  getDescription: () => i18n.global.t('chat.model.deepseekReasonerDescription')
};

export const CHAT_MODEL_DEEPSEEK_R1_0528: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_DEEPSEEK_R1_0528,
  icon: CHAT_MODEL_ICON_DEEPSEEK,
  modelGroup: 'deepseek',
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.deepseekR10528'),
  getDescription: () => i18n.global.t('chat.model.deepseekR10528Description')
};

export const CHAT_MODEL_DEEPSEEK_V3_250324: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_DEEPSEEK_V3_250324,
  icon: CHAT_MODEL_ICON_DEEPSEEK,
  modelGroup: 'deepseek',
  getDisplayName: () => i18n.global.t('chat.model.deepseekV3250324'),
  getDescription: () => i18n.global.t('chat.model.deepseekV3250324Description')
};

export const CHAT_MODEL_GROK_4: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GROK_4,
  icon: CHAT_MODEL_ICON_GROK,
  modelGroup: 'grok',
  isImageSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.grok4'),
  getDescription: () => i18n.global.t('chat.model.grok4Description')
};

export const CHAT_MODEL_GROK_3: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GROK_3,
  icon: CHAT_MODEL_ICON_GROK,
  modelGroup: 'grok',
  getDisplayName: () => i18n.global.t('chat.model.grok3'),
  getDescription: () => i18n.global.t('chat.model.grok3Description')
};

export const CHAT_MODEL_GEMINI_3_1_PRO: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GEMINI_3_1_PRO,
  icon: CHAT_MODEL_ICON_GEMINI,
  modelGroup: 'gemini',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gemini31Pro'),
  getDescription: () => i18n.global.t('chat.model.gemini31ProDescription')
};

export const CHAT_MODEL_GEMINI_3_0_PRO: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GEMINI_3_0_PRO,
  icon: CHAT_MODEL_ICON_GEMINI,
  modelGroup: 'gemini',
  isImageSupported: true,
  isFileSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gemini30Pro'),
  getDescription: () => i18n.global.t('chat.model.gemini30ProDescription')
};

export const CHAT_MODEL_GEMINI_3_5_FLASH: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GEMINI_3_5_FLASH,
  icon: CHAT_MODEL_ICON_GEMINI,
  modelGroup: 'gemini',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gemini35Flash'),
  getDescription: () => i18n.global.t('chat.model.gemini35FlashDescription')
};

export const CHAT_MODEL_GEMINI_2_5_PRO: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GEMINI_2_5_PRO,
  icon: CHAT_MODEL_ICON_GEMINI,
  modelGroup: 'gemini',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gemini25Pro'),
  getDescription: () => i18n.global.t('chat.model.gemini25ProDescription')
};

export const CHAT_MODEL_GEMINI_2_5_FLASH: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GEMINI_2_5_FLASH,
  icon: CHAT_MODEL_ICON_GEMINI,
  modelGroup: 'gemini',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gemini25Flash'),
  getDescription: () => i18n.global.t('chat.model.gemini25FlashDescription')
};

export const CHAT_MODEL_GEMINI_2_0_FLASH: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GEMINI_2_0_FLASH,
  icon: CHAT_MODEL_ICON_GEMINI,
  modelGroup: 'gemini',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gemini20Flash'),
  getDescription: () => i18n.global.t('chat.model.gemini20FlashDescription')
};

export const CHAT_MODEL_GEMINI_2_5_FLASH_LITE: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GEMINI_2_5_FLASH_LITE,
  icon: CHAT_MODEL_ICON_GEMINI,
  modelGroup: 'gemini',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gemini25FlashLite'),
  getDescription: () => i18n.global.t('chat.model.gemini25FlashLiteDescription')
};

export const CHAT_MODEL_GEMINI_3_FLASH_PREVIEW: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GEMINI_3_FLASH_PREVIEW,
  icon: CHAT_MODEL_ICON_GEMINI,
  modelGroup: 'gemini',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.gemini30FlashPreview'),
  getDescription: () => i18n.global.t('chat.model.gemini30FlashPreviewDescription')
};

export const CHAT_MODEL_CLAUDE_OPUS_4_8: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_CLAUDE_OPUS_4_8,
  icon: CHAT_MODEL_ICON_CLAUDE,
  modelGroup: 'claude',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.claudeOpus48'),
  getDescription: () => i18n.global.t('chat.model.claudeOpus48Description')
};

export const CHAT_MODEL_CLAUDE_SONNET_4_6: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_CLAUDE_SONNET_4_6,
  icon: CHAT_MODEL_ICON_CLAUDE,
  modelGroup: 'claude',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.claudeSonnet46'),
  getDescription: () => i18n.global.t('chat.model.claudeSonnet46Description')
};

export const CHAT_MODEL_CLAUDE_HAIKU_4_5: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_CLAUDE_HAIKU_4_5,
  icon: CHAT_MODEL_ICON_CLAUDE,
  modelGroup: 'claude',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.claudeHaiku45'),
  getDescription: () => i18n.global.t('chat.model.claudeHaiku45Description')
};

export const CHAT_MODEL_CLAUDE_FABLE_5: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_CLAUDE_FABLE_5,
  icon: CHAT_MODEL_ICON_CLAUDE,
  modelGroup: 'claude',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.claudeFable5'),
  getDescription: () => i18n.global.t('chat.model.claudeFable5Description')
};

export const CHAT_MODEL_CLAUDE_SONNET_5: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_CLAUDE_SONNET_5,
  icon: CHAT_MODEL_ICON_CLAUDE,
  modelGroup: 'claude',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.claudeSonnet5'),
  getDescription: () => i18n.global.t('chat.model.claudeSonnet5Description')
};

export const CHAT_MODEL_CLAUDE_OPUS_4_6: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_CLAUDE_OPUS_4_6,
  icon: CHAT_MODEL_ICON_CLAUDE,
  modelGroup: 'claude',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.claudeOpus46'),
  getDescription: () => i18n.global.t('chat.model.claudeOpus46Description')
};

export const CHAT_MODEL_CLAUDE_OPUS_4_7: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_CLAUDE_OPUS_4_7,
  icon: CHAT_MODEL_ICON_CLAUDE,
  modelGroup: 'claude',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.claudeOpus47'),
  getDescription: () => i18n.global.t('chat.model.claudeOpus47Description')
};

export const CHAT_MODEL_CLAUDE_3_7_SONNET: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_CLAUDE_3_7_SONNET,
  icon: CHAT_MODEL_ICON_CLAUDE,
  modelGroup: 'claude',
  isImageSupported: true,
  isFileSupported: true,
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.claude37Sonnet'),
  getDescription: () => i18n.global.t('chat.model.claude37SonnetDescription')
};

export const CHAT_MODEL_KIMI_K2_5: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_KIMI_K2_5,
  icon: CHAT_MODEL_ICON_KIMI,
  modelGroup: 'kimi',
  getDisplayName: () => i18n.global.t('chat.model.kimiK25'),
  getDescription: () => i18n.global.t('chat.model.kimiK25Description')
};

export const CHAT_MODEL_KIMI_K2_THINKING: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_KIMI_K2_THINKING,
  icon: CHAT_MODEL_ICON_KIMI,
  modelGroup: 'kimi',
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.kimiK2Thinking'),
  getDescription: () => i18n.global.t('chat.model.kimiK2ThinkingDescription')
};

export const CHAT_MODEL_KIMI_K2_THINKING_TURBO: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_KIMI_K2_THINKING_TURBO,
  icon: CHAT_MODEL_ICON_KIMI,
  modelGroup: 'kimi',
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.kimiK2ThinkingTurbo'),
  getDescription: () => i18n.global.t('chat.model.kimiK2ThinkingTurboDescription')
};

export const CHAT_MODEL_KIMI_K2_INSTRUCT_0905: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_KIMI_K2_INSTRUCT_0905,
  icon: CHAT_MODEL_ICON_KIMI,
  modelGroup: 'kimi',
  getDisplayName: () => i18n.global.t('chat.model.kimiK2Instruct0905'),
  getDescription: () => i18n.global.t('chat.model.kimiK2Instruct0905Description')
};

export const CHAT_MODEL_KIMI_K2_TURBO_PREVIEW: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_KIMI_K2_TURBO_PREVIEW,
  icon: CHAT_MODEL_ICON_KIMI,
  modelGroup: 'kimi',
  getDisplayName: () => i18n.global.t('chat.model.kimiK2TurboPreview'),
  getDescription: () => i18n.global.t('chat.model.kimiK2TurboPreviewDescription')
};

export const CHAT_MODEL_GLM_5_1: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GLM_5_1,
  icon: CHAT_MODEL_ICON_GLM,
  modelGroup: 'glm',
  getDisplayName: () => i18n.global.t('chat.model.glm51'),
  getDescription: () => i18n.global.t('chat.model.glm51Description')
};

export const CHAT_MODEL_GLM_4_7: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GLM_4_7,
  icon: CHAT_MODEL_ICON_GLM,
  modelGroup: 'glm',
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.glm47'),
  getDescription: () => i18n.global.t('chat.model.glm47Description')
};

export const CHAT_MODEL_GLM_5: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GLM_5,
  icon: CHAT_MODEL_ICON_GLM,
  modelGroup: 'glm',
  getDisplayName: () => i18n.global.t('chat.model.glm5'),
  getDescription: () => i18n.global.t('chat.model.glm5Description')
};

export const CHAT_MODEL_GLM_5_TURBO: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GLM_5_TURBO,
  icon: CHAT_MODEL_ICON_GLM,
  modelGroup: 'glm',
  getDisplayName: () => i18n.global.t('chat.model.glm5Turbo'),
  getDescription: () => i18n.global.t('chat.model.glm5TurboDescription')
};

export const CHAT_MODEL_GLM_4_6: IChatModel = {
  enabled: true,
  name: CHAT_MODEL_NAME_GLM_4_6,
  icon: CHAT_MODEL_ICON_GLM,
  modelGroup: 'glm',
  isReasoningSupported: true,
  getDisplayName: () => i18n.global.t('chat.model.glm46'),
  getDescription: () => i18n.global.t('chat.model.glm46Description')
};

export const CHAT_MODEL_GROUP_CHATGPT: IChatModelGroup = {
  icon: CHAT_MODEL_ICON_CHATGPT,
  name: 'chatgpt',
  getDisplayName: () => i18n.global.t('chat.modelGroup.chatgpt'),
  getDescription: () => i18n.global.t('chat.modelGroup.chatgptDescription'),
  models: [
    CHAT_MODEL_GPT_5_4_MINI,
    CHAT_MODEL_GPT_5_5,
    CHAT_MODEL_GPT_5_4,
    CHAT_MODEL_GPT_4_1,
    CHAT_MODEL_GPT_4O,
    CHAT_MODEL_GPT_5_1,
    CHAT_MODEL_GPT_5_2,
    CHAT_MODEL_GPT_5_MINI,
    CHAT_MODEL_GPT_5_NANO,
    CHAT_MODEL_O1,
    CHAT_MODEL_O3
  ],
  isVoiceCallSupported: true
};

export const CHAT_MODEL_GROUP_DEEPSEEK: IChatModelGroup = {
  icon: CHAT_MODEL_ICON_DEEPSEEK,
  name: 'deepseek',
  getDisplayName: () => i18n.global.t('chat.modelGroup.deepseek'),
  getDescription: () => i18n.global.t('chat.modelGroup.deepseekDescription'),
  models: [
    CHAT_MODEL_DEEPSEEK_V4_FLASH,
    CHAT_MODEL_DEEPSEEK_CHAT,
    CHAT_MODEL_DEEPSEEK_CHAT32,
    CHAT_MODEL_DEEPSEEK_REASONER,
    CHAT_MODEL_DEEPSEEK_R1_0528,
    CHAT_MODEL_DEEPSEEK_V3_250324
  ]
};

export const CHAT_MODEL_GROUP_GROK: IChatModelGroup = {
  icon: CHAT_MODEL_ICON_GROK,
  name: 'grok',
  getDisplayName: () => i18n.global.t('chat.modelGroup.grok'),
  getDescription: () => i18n.global.t('chat.modelGroup.grokDescription'),
  models: [CHAT_MODEL_GROK_4, CHAT_MODEL_GROK_3]
};

export const CHAT_MODEL_GROUP_GEMINI: IChatModelGroup = {
  icon: CHAT_MODEL_ICON_GEMINI,
  name: 'gemini',
  getDisplayName: () => i18n.global.t('chat.modelGroup.gemini'),
  getDescription: () => i18n.global.t('chat.modelGroup.geminiDescription'),
  models: [
    CHAT_MODEL_GEMINI_3_1_PRO,
    CHAT_MODEL_GEMINI_3_0_PRO,
    CHAT_MODEL_GEMINI_3_5_FLASH,
    CHAT_MODEL_GEMINI_2_5_PRO,
    CHAT_MODEL_GEMINI_2_5_FLASH,
    CHAT_MODEL_GEMINI_2_0_FLASH,
    CHAT_MODEL_GEMINI_2_5_FLASH_LITE,
    CHAT_MODEL_GEMINI_3_FLASH_PREVIEW
  ]
};

export const CHAT_MODEL_GROUP_CLAUDE: IChatModelGroup = {
  icon: CHAT_MODEL_ICON_CLAUDE,
  name: 'claude',
  getDisplayName: () => i18n.global.t('chat.modelGroup.claude'),
  getDescription: () => i18n.global.t('chat.modelGroup.claudeDescription'),
  models: [
    CHAT_MODEL_CLAUDE_OPUS_4_8,
    CHAT_MODEL_CLAUDE_FABLE_5,
    CHAT_MODEL_CLAUDE_SONNET_4_6,
    CHAT_MODEL_CLAUDE_HAIKU_4_5,
    CHAT_MODEL_CLAUDE_SONNET_5,
    CHAT_MODEL_CLAUDE_OPUS_4_6,
    CHAT_MODEL_CLAUDE_OPUS_4_7,
    CHAT_MODEL_CLAUDE_3_7_SONNET
  ]
};

export const CHAT_MODEL_GROUP_KIMI: IChatModelGroup = {
  icon: CHAT_MODEL_ICON_KIMI,
  name: 'kimi',
  getDisplayName: () => i18n.global.t('chat.modelGroup.kimi'),
  getDescription: () => i18n.global.t('chat.modelGroup.kimiDescription'),
  models: [
    CHAT_MODEL_KIMI_K2_5,
    CHAT_MODEL_KIMI_K2_THINKING,
    CHAT_MODEL_KIMI_K2_THINKING_TURBO,
    CHAT_MODEL_KIMI_K2_INSTRUCT_0905,
    CHAT_MODEL_KIMI_K2_TURBO_PREVIEW
  ]
};

export const CHAT_MODEL_GROUP_GLM: IChatModelGroup = {
  icon: CHAT_MODEL_ICON_GLM,
  name: 'glm',
  getDisplayName: () => i18n.global.t('chat.modelGroup.glm'),
  getDescription: () => i18n.global.t('chat.modelGroup.glmDescription'),
  models: [CHAT_MODEL_GLM_5_1, CHAT_MODEL_GLM_4_7, CHAT_MODEL_GLM_5, CHAT_MODEL_GLM_5_TURBO, CHAT_MODEL_GLM_4_6]
};

export const CHAT_MODELS: IChatModel[] = [
  CHAT_MODEL_GPT_5_4_MINI,
  CHAT_MODEL_GPT_5_5,
  CHAT_MODEL_GPT_5_4,
  CHAT_MODEL_GPT_4_1,
  CHAT_MODEL_GPT_4O,
  CHAT_MODEL_GPT_5_1,
  CHAT_MODEL_GPT_5_2,
  CHAT_MODEL_GPT_5_MINI,
  CHAT_MODEL_GPT_5_NANO,
  CHAT_MODEL_O1,
  CHAT_MODEL_O3,
  CHAT_MODEL_DEEPSEEK_CHAT,
  CHAT_MODEL_DEEPSEEK_CHAT32,
  CHAT_MODEL_DEEPSEEK_V4_FLASH,
  CHAT_MODEL_DEEPSEEK_REASONER,
  CHAT_MODEL_DEEPSEEK_R1_0528,
  CHAT_MODEL_DEEPSEEK_V3_250324,
  CHAT_MODEL_GROK_4,
  CHAT_MODEL_GROK_3,
  CHAT_MODEL_GEMINI_3_1_PRO,
  CHAT_MODEL_GEMINI_3_0_PRO,
  CHAT_MODEL_GEMINI_3_5_FLASH,
  CHAT_MODEL_GEMINI_2_5_PRO,
  CHAT_MODEL_GEMINI_2_5_FLASH,
  CHAT_MODEL_GEMINI_2_0_FLASH,
  CHAT_MODEL_GEMINI_2_5_FLASH_LITE,
  CHAT_MODEL_GEMINI_3_FLASH_PREVIEW,
  CHAT_MODEL_CLAUDE_OPUS_4_8,
  CHAT_MODEL_CLAUDE_FABLE_5,
  CHAT_MODEL_CLAUDE_SONNET_4_6,
  CHAT_MODEL_CLAUDE_HAIKU_4_5,
  CHAT_MODEL_CLAUDE_SONNET_5,
  CHAT_MODEL_CLAUDE_OPUS_4_6,
  CHAT_MODEL_CLAUDE_OPUS_4_7,
  CHAT_MODEL_CLAUDE_3_7_SONNET,
  CHAT_MODEL_KIMI_K2_5,
  CHAT_MODEL_KIMI_K2_THINKING,
  CHAT_MODEL_KIMI_K2_THINKING_TURBO,
  CHAT_MODEL_KIMI_K2_INSTRUCT_0905,
  CHAT_MODEL_KIMI_K2_TURBO_PREVIEW,
  CHAT_MODEL_GLM_5_1,
  CHAT_MODEL_GLM_4_7,
  CHAT_MODEL_GLM_5,
  CHAT_MODEL_GLM_5_TURBO,
  CHAT_MODEL_GLM_4_6
];

export const CHAT_MODEL_GROUPS: IChatModelGroup[] = [
  CHAT_MODEL_GROUP_CHATGPT,
  CHAT_MODEL_GROUP_DEEPSEEK,
  CHAT_MODEL_GROUP_GROK,
  CHAT_MODEL_GROUP_GEMINI,
  CHAT_MODEL_GROUP_CLAUDE,
  CHAT_MODEL_GROUP_KIMI,
  CHAT_MODEL_GROUP_GLM
];

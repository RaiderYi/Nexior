import { CHAT_MODEL_GROUP_GLM } from '@/constants';
import { ROUTE_GLM_CONVERSATION, ROUTE_GLM_CONVERSATION_NEW } from './constants';

export default {
  path: '/glm',
  meta: {
    modelGroup: CHAT_MODEL_GROUP_GLM,
    appName: 'chat'
  },
  component: () => import('@/layouts/Main.vue'),
  children: [
    {
      path: '',
      redirect: {
        name: ROUTE_GLM_CONVERSATION_NEW
      }
    },
    {
      path: 'conversations',
      name: ROUTE_GLM_CONVERSATION_NEW,
      component: () => import('@/pages/chat/Conversation.vue')
    },
    {
      path: 'conversations/:id',
      name: ROUTE_GLM_CONVERSATION,
      component: () => import('@/pages/chat/Conversation.vue')
    }
  ]
};

<template>
  <div v-if="visible" class="floating-contact">
    <!-- Collapsed: circular button -->
    <div v-if="!expanded" class="contact-fab" :class="{ pulse: shouldPulse }" @click="toggleExpand">
      <el-icon :size="24"><ChatDotRound /></el-icon>
      <span class="fab-label">联系</span>
    </div>

    <!-- Expanded: popup card -->
    <transition name="contact-card">
      <div v-if="expanded" class="contact-card">
        <div class="card-header">
          <span class="card-title">技术支持 / 问题反馈</span>
          <el-icon class="card-close" :size="18" @click="toggleExpand"><Close /></el-icon>
        </div>
        <div class="card-body">
          <div class="qr-section">
            <img src="/wechat-qr.jpg" alt="WeChat QR" class="qr-img" />
          </div>
          <div class="info-section">
            <p class="scan-tip">扫码添加技术支持</p>
            <ul class="benefit-list">
              <li><span class="check">✅</span> 遇到问题随时问</li>
              <li><span class="check">✅</span> 新模型优先体验</li>
              <li><span class="check">✅</span> 一对一响应</li>
            </ul>
          </div>
        </div>
        <div class="card-footer">
          <span class="email-label">📧 邮箱：</span>
          <a :href="'mailto:' + emailAddress" class="email-link">{{ emailAddress }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ChatDotRound, Close } from '@element-plus/icons-vue';

const HIDE_ROUTES = ['auth-login', 'auth-callback', 'settings-index', 'settings-local-tools'];

const HINT_KEY = 'bp_contact_hint_seen';

export default defineComponent({
  name: 'FloatingContact',
  components: { ChatDotRound, Close },
  data() {
    return {
      expanded: false,
      shouldPulse: false,
      emailAddress: '429507312@qq.com'
    };
  },
  computed: {
    routeName(): string {
      return this.$route.name as string;
    },
    visible(): boolean {
      if (!this.routeName) return true;
      return !HIDE_ROUTES.some((r) => this.routeName.startsWith(r));
    }
  },
  mounted() {
    const seen = localStorage.getItem(HINT_KEY);
    if (!seen) {
      window.addEventListener('scroll', this.onFirstScroll, { once: true, passive: true });
    }
    window.addEventListener('open-floating-contact', this.onOpenRequest);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onFirstScroll);
    window.removeEventListener('open-floating-contact', this.onOpenRequest);
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
      if (this.shouldPulse) {
        this.shouldPulse = false;
        localStorage.setItem(HINT_KEY, '1');
      }
    },
    onOpenRequest() {
      this.expanded = true;
      if (this.shouldPulse) {
        this.shouldPulse = false;
        localStorage.setItem(HINT_KEY, '1');
      }
    },
    onFirstScroll() {
      this.shouldPulse = true;
      setTimeout(() => {
        this.shouldPulse = false;
      }, 3000);
    }
  }
});
</script>

<style scoped>
.floating-contact {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
}

/* Collapsed FAB */
.contact-fab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  color: #fff;
}
.contact-fab:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 28px rgba(99, 102, 241, 0.55);
}
.fab-label {
  font-size: 10px;
  margin-top: 2px;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Pulse animation */
.contact-fab.pulse {
  animation: contact-pulse 1.5s ease-in-out infinite;
}
@keyframes contact-pulse {
  0%,
  100% {
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  }
  50% {
    box-shadow:
      0 4px 20px rgba(99, 102, 241, 0.4),
      0 0 0 12px rgba(99, 102, 241, 0);
  }
}

/* Expanded card */
.contact-card {
  width: 360px;
  background: var(--el-bg-color, #fff);
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border: 1px solid var(--el-border-color-light, rgba(0, 0, 0, 0.06));
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
}
.card-title {
  font-size: 15px;
  font-weight: 700;
}
.card-close {
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.card-close:hover {
  opacity: 1;
}
.card-body {
  display: flex;
  gap: 16px;
  padding: 20px;
}
.qr-section {
  flex-shrink: 0;
}
.qr-img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.info-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.scan-tip {
  font-size: 14px;
  font-weight: 700;
  color: var(--el-text-color-primary, #1f2937);
  margin-bottom: 12px;
}
.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.benefit-list li {
  font-size: 13px;
  color: var(--el-text-color-regular, #4b5563);
  line-height: 1.8;
}
.card-footer {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-top: 1px solid var(--el-border-color-lighter, rgba(0, 0, 0, 0.04));
  font-size: 13px;
}
.email-label {
  color: var(--el-text-color-secondary, #6b7280);
}
.email-link {
  color: #6366f1;
  text-decoration: none;
  font-weight: 600;
}
.email-link:hover {
  text-decoration: underline;
}

/* Transition */
.contact-card-enter-active,
.contact-card-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.contact-card-enter-from,
.contact-card-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.95);
}

/* Mobile */
@media (max-width: 768px) {
  .floating-contact {
    bottom: 16px;
    right: 16px;
  }
  .contact-fab {
    width: 52px;
    height: 52px;
  }
  .fab-label {
    display: none;
  }
  .contact-card {
    width: calc(100vw - 32px);
    max-width: 360px;
  }
  .card-body {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .qr-img {
    width: 160px;
    height: 160px;
  }
  .benefit-list li {
    text-align: left;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .contact-card {
    background: var(--el-bg-color, #1a1a2e);
  }
  .qr-img {
    border-color: rgba(255, 255, 255, 0.1);
  }
}
</style>

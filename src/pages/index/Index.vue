<template>
  <div class="landing-page" @mousemove="onGlobalMouseMove">
    <!-- PARTICLE CANVAS -->
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>

    <!-- 1. NAVBAR -->
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="navbar-inner">
        <div class="logo" @click="goHome">
          <div class="logo-icon">B</div>
          <span>BigPlayer AI</span>
        </div>
        <div class="nav-links">
          <a href="#capabilities" @click.prevent="scrollTo('capabilities')">{{ $t('index.landing.nav.features') }}</a>
          <a href="#models" @click.prevent="scrollTo('models')">{{ $t('index.landing.nav.models') }}</a>
          <a href="#usecases" @click.prevent="scrollTo('usecases')">{{ $t('index.landing.nav.useCases') }}</a>
          <a href="/download">{{ $t('index.landing.nav.download') }}</a>
        </div>
        <div class="nav-cta">
          <button class="btn btn-ghost" @click="goLogin">{{ $t('index.landing.nav.login') }}</button>
          <button class="btn btn-primary" @click="goLogin">{{ $t('index.landing.nav.signup') }} →</button>
        </div>
      </div>
    </nav>

    <!-- 2. HERO -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="dot"></span>
          <span>{{ $t('index.landing.hero.badge') }}</span>
        </div>
        <h1>
          <span class="gradient">{{ $t('index.landing.hero.titleAccent') }}</span
          ><br />
          {{ $t('index.landing.hero.titleMain') }}
        </h1>
        <p class="subtitle">{{ $t('index.landing.hero.subtitle') }}</p>
        <div class="hero-cta">
          <button class="btn btn-primary btn-large" @click="goFeature('/chatgpt')">
            {{ $t('index.landing.hero.ctaPrimary') }} →
          </button>
          <button class="btn btn-ghost btn-large" @click="scrollTo('models')">
            {{ $t('index.landing.hero.ctaSecondary') }}
          </button>
        </div>
        <div class="hero-models-preview">
          <div v-for="chip in heroChips" :key="chip.name" class="model-chip" @click="goFeature(chip.route)">
            <div class="chip-icon" :style="{ background: chip.bg, color: chip.fg }">{{ chip.letter }}</div>
            {{ chip.name }}
          </div>
        </div>
      </div>
    </section>

    <!-- 3. STATS BAR -->
    <section class="stats-bar">
      <div class="stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ $t(stat.label) }}</div>
        </div>
      </div>
    </section>

    <!-- 4. CAPABILITY GRID -->
    <section id="capabilities" class="section">
      <div class="section-inner">
        <div class="section-header">
          <h2>{{ $t('index.landing.capabilities.title') }}</h2>
          <p>{{ $t('index.landing.capabilities.subtitle') }}</p>
        </div>
        <div class="capability-grid">
          <div
            v-for="cap in capabilities"
            :key="cap.id"
            class="capability-card"
            :style="{ '--card-accent': cap.color, '--icon-bg': cap.iconBg }"
            @click="goFeature(cap.route)"
            @mousemove="onCardMouseMove($event)"
          >
            <div class="capability-icon">{{ cap.icon }}</div>
            <h3>{{ $t(cap.titleKey) }}</h3>
            <p>{{ $t(cap.descKey) }}</p>
            <div class="card-count">{{ $t(cap.countKey) }} →</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. MODEL WALL -->
    <section id="models" class="section model-wall">
      <div class="section-inner">
        <div class="section-header">
          <h2>{{ $t('index.landing.models.title') }}</h2>
          <p>{{ $t('index.landing.models.subtitle') }}</p>
        </div>
        <div class="model-groups">
          <div v-for="group in modelGroups" :key="group.id" class="model-group">
            <h3>
              <div class="group-icon" :style="{ background: group.bg, color: group.fg }">{{ group.letter }}</div>
              {{ $t(group.nameKey) }}
              <span class="group-count">{{ $t(group.countKey) }}</span>
            </h3>
            <div class="model-grid">
              <div v-for="model in group.models" :key="model.name" class="model-item" @click="goFeature(model.route)">
                <div class="m-icon" :style="{ background: model.bg, color: model.fg }">{{ model.letter }}</div>
                <div class="m-info">
                  <div class="m-name">{{ model.name }}</div>
                  <div class="m-desc">{{ $t(model.descKey) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. USE CASES -->
    <section id="usecases" class="section">
      <div class="section-inner">
        <div class="section-header">
          <h2>{{ $t('index.landing.useCases.title') }}</h2>
          <p>{{ $t('index.landing.useCases.subtitle') }}</p>
        </div>
        <div class="usecase-grid">
          <div v-for="uc in useCases" :key="uc.id" class="usecase-card" @click="goFeature(uc.route)">
            <div class="usecase-visual" :style="{ background: uc.gradient }">{{ uc.icon }}</div>
            <div class="usecase-body">
              <h4>{{ $t(uc.titleKey) }}</h4>
              <p>{{ $t(uc.descKey) }}</p>
              <span class="usecase-tag">{{ $t(uc.tagKey) }} →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. BOTTOM CTA -->
    <section class="bottom-cta">
      <h2>
        <span class="gradient">{{ $t('index.landing.bottomCta.title') }}</span>
      </h2>
      <p>{{ $t('index.landing.bottomCta.subtitle') }}</p>
      <button class="btn btn-primary btn-large" @click="goLogin">{{ $t('index.landing.bottomCta.button') }} →</button>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-info">© {{ new Date().getFullYear() }} BigPlayer AI · All Rights Reserved</div>
        <div class="footer-links">
          <a href="/download">{{ $t('index.landing.footer.download') }}</a>
          <a href="#" @click.prevent="showContact">{{ $t('index.landing.footer.support') }}</a>
          <a href="/auth/login">{{ $t('index.landing.nav.login') }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
  opacity: number;
}

export default defineComponent({
  name: 'Index',
  data() {
    return {
      isScrolled: false,
      particleCanvas: null as HTMLCanvasElement | null,
      particles: [] as Particle[],
      animationId: 0,
      mouseX: -9999,
      mouseY: -9999,
      heroChips: [
        { name: 'GPT-5.5', letter: 'G', bg: '#10a37f', fg: '#fff', route: '/chatgpt' },
        { name: 'Claude', letter: 'C', bg: '#d97757', fg: '#fff', route: '/claude' },
        { name: 'Gemini', letter: 'G', bg: '#4285f4', fg: '#fff', route: '/gemini' },
        { name: 'DeepSeek', letter: 'D', bg: '#1c1c1c', fg: '#4ecca3', route: '/deepseek' },
        { name: 'Midjourney', letter: 'M', bg: '#000', fg: '#ffd93d', route: '/midjourney' },
        { name: 'Suno', letter: '♪', bg: '#000', fg: '#fff', route: '/suno' }
      ],
      stats: [
        { number: '46+', label: 'index.landing.stats.models' },
        { number: '30+', label: 'index.landing.stats.features' },
        { number: '18', label: 'index.landing.stats.languages' },
        { number: '99.9%', label: 'index.landing.stats.uptime' }
      ],
      capabilities: [
        {
          id: 'chat',
          icon: '💬',
          color: '#6c5ce7',
          iconBg: 'rgba(108,92,231,0.1)',
          route: '/chatgpt',
          titleKey: 'index.landing.capabilities.chat.title',
          descKey: 'index.landing.capabilities.chat.desc',
          countKey: 'index.landing.capabilities.chat.count'
        },
        {
          id: 'image',
          icon: '🎨',
          color: '#ff6b9d',
          iconBg: 'rgba(255,107,157,0.1)',
          route: '/midjourney',
          titleKey: 'index.landing.capabilities.image.title',
          descKey: 'index.landing.capabilities.image.desc',
          countKey: 'index.landing.capabilities.image.count'
        },
        {
          id: 'video',
          icon: '🎬',
          color: '#00d4ff',
          iconBg: 'rgba(0,212,255,0.1)',
          route: '/sora',
          titleKey: 'index.landing.capabilities.video.title',
          descKey: 'index.landing.capabilities.video.desc',
          countKey: 'index.landing.capabilities.video.count'
        },
        {
          id: 'music',
          icon: '🎵',
          color: '#4ecca3',
          iconBg: 'rgba(78,204,163,0.1)',
          route: '/suno',
          titleKey: 'index.landing.capabilities.music.title',
          descKey: 'index.landing.capabilities.music.desc',
          countKey: 'index.landing.capabilities.music.count'
        }
      ],
      modelGroups: [
        {
          id: 'openai',
          letter: 'G',
          bg: '#10a37f',
          fg: '#fff',
          nameKey: 'index.landing.models.openai.name',
          countKey: 'index.landing.models.openai.count',
          models: [
            {
              name: 'GPT-5.5',
              letter: 'G',
              bg: '#10a37f',
              fg: '#fff',
              route: '/chatgpt',
              descKey: 'index.landing.models.openai.gpt55'
            },
            {
              name: 'GPT-5.4',
              letter: 'G',
              bg: '#10a37f',
              fg: '#fff',
              route: '/chatgpt',
              descKey: 'index.landing.models.openai.gpt54'
            },
            {
              name: 'GPT-5.2',
              letter: 'G',
              bg: '#10a37f',
              fg: '#fff',
              route: '/chatgpt',
              descKey: 'index.landing.models.openai.gpt52'
            },
            {
              name: 'GPT-5-mini',
              letter: 'G',
              bg: '#10a37f',
              fg: '#fff',
              route: '/chatgpt',
              descKey: 'index.landing.models.openai.gpt5mini'
            },
            {
              name: 'o3',
              letter: 'G',
              bg: '#10a37f',
              fg: '#fff',
              route: '/chatgpt',
              descKey: 'index.landing.models.openai.o3'
            }
          ]
        },
        {
          id: 'anthropic',
          letter: 'C',
          bg: '#d97757',
          fg: '#fff',
          nameKey: 'index.landing.models.anthropic.name',
          countKey: 'index.landing.models.anthropic.count',
          models: [
            {
              name: 'Claude Fable-5',
              letter: 'C',
              bg: '#d97757',
              fg: '#fff',
              route: '/claude',
              descKey: 'index.landing.models.anthropic.fable5'
            },
            {
              name: 'Claude Sonnet-5',
              letter: 'C',
              bg: '#d97757',
              fg: '#fff',
              route: '/claude',
              descKey: 'index.landing.models.anthropic.sonnet5'
            },
            {
              name: 'Claude Opus-4.8',
              letter: 'C',
              bg: '#d97757',
              fg: '#fff',
              route: '/claude',
              descKey: 'index.landing.models.anthropic.opus48'
            },
            {
              name: 'Claude Haiku-4.5',
              letter: 'C',
              bg: '#d97757',
              fg: '#fff',
              route: '/claude',
              descKey: 'index.landing.models.anthropic.haiku45'
            }
          ]
        },
        {
          id: 'google',
          letter: 'G',
          bg: '#4285f4',
          fg: '#fff',
          nameKey: 'index.landing.models.google.name',
          countKey: 'index.landing.models.google.count',
          models: [
            {
              name: 'Gemini 3.5 Flash',
              letter: 'G',
              bg: '#4285f4',
              fg: '#fff',
              route: '/gemini',
              descKey: 'index.landing.models.google.gemini35flash'
            },
            {
              name: 'Gemini 3.1 Pro',
              letter: 'G',
              bg: '#4285f4',
              fg: '#fff',
              route: '/gemini',
              descKey: 'index.landing.models.google.gemini31pro'
            },
            {
              name: 'Gemini 2.5 Pro',
              letter: 'G',
              bg: '#4285f4',
              fg: '#fff',
              route: '/gemini',
              descKey: 'index.landing.models.google.gemini25pro'
            },
            {
              name: 'Gemini 2.5 Flash',
              letter: 'G',
              bg: '#4285f4',
              fg: '#fff',
              route: '/gemini',
              descKey: 'index.landing.models.google.gemini25flash'
            }
          ]
        },
        {
          id: 'deepseek',
          letter: 'D',
          bg: '#1c1c1c',
          fg: '#4ecca3',
          nameKey: 'index.landing.models.deepseek.name',
          countKey: 'index.landing.models.deepseek.count',
          models: [
            {
              name: 'DeepSeek V4 Flash',
              letter: 'D',
              bg: '#1c1c1c',
              fg: '#4ecca3',
              route: '/deepseek',
              descKey: 'index.landing.models.deepseek.v4flash'
            },
            {
              name: 'DeepSeek V3.2',
              letter: 'D',
              bg: '#1c1c1c',
              fg: '#4ecca3',
              route: '/deepseek',
              descKey: 'index.landing.models.deepseek.v32'
            },
            {
              name: 'DeepSeek R1',
              letter: 'D',
              bg: '#1c1c1c',
              fg: '#4ecca3',
              route: '/deepseek',
              descKey: 'index.landing.models.deepseek.r1'
            }
          ]
        },
        {
          id: 'cn',
          letter: '中',
          bg: '#6c5ce7',
          fg: '#fff',
          nameKey: 'index.landing.models.cn.name',
          countKey: 'index.landing.models.cn.count',
          models: [
            {
              name: 'Kimi K2.5',
              letter: 'K',
              bg: '#1a1a2e',
              fg: '#fff',
              route: '/kimi',
              descKey: 'index.landing.models.cn.kimi25'
            },
            {
              name: 'Kimi K2 Thinking',
              letter: 'K',
              bg: '#1a1a2e',
              fg: '#fff',
              route: '/kimi',
              descKey: 'index.landing.models.cn.kimi2think'
            },
            {
              name: 'GLM-5.1',
              letter: 'Z',
              bg: '#3b5998',
              fg: '#fff',
              route: '/glm',
              descKey: 'index.landing.models.cn.glm51'
            },
            {
              name: 'Grok-4',
              letter: 'X',
              bg: '#000',
              fg: '#fff',
              route: '/grok',
              descKey: 'index.landing.models.cn.grok4'
            }
          ]
        },
        {
          id: 'creative',
          letter: 'A',
          bg: 'linear-gradient(135deg,#ff6b9d,#00d4ff)',
          fg: '#fff',
          nameKey: 'index.landing.models.creative.name',
          countKey: 'index.landing.models.creative.count',
          models: [
            {
              name: 'Midjourney',
              letter: 'M',
              bg: '#000',
              fg: '#ffd93d',
              route: '/midjourney',
              descKey: 'index.landing.models.creative.mj'
            },
            {
              name: 'Sora',
              letter: 'S',
              bg: '#000',
              fg: '#fff',
              route: '/sora',
              descKey: 'index.landing.models.creative.sora'
            },
            {
              name: 'Kling 3.0',
              letter: 'K',
              bg: '#ff6b6b',
              fg: '#fff',
              route: '/kling',
              descKey: 'index.landing.models.creative.kling'
            },
            {
              name: 'Suno',
              letter: '♪',
              bg: '#000',
              fg: '#fff',
              route: '/suno',
              descKey: 'index.landing.models.creative.suno'
            },
            {
              name: 'Flux',
              letter: 'F',
              bg: '#fff',
              fg: '#000',
              route: '/flux',
              descKey: 'index.landing.models.creative.flux'
            },
            {
              name: 'Luma',
              letter: 'L',
              bg: '#0066ff',
              fg: '#fff',
              route: '/luma',
              descKey: 'index.landing.models.creative.luma'
            }
          ]
        }
      ],
      useCases: [
        {
          id: 'writing',
          icon: '📝',
          gradient: 'linear-gradient(135deg,#6c5ce722,#00d4ff22)',
          route: '/chatgpt',
          titleKey: 'index.landing.useCases.writing.title',
          descKey: 'index.landing.useCases.writing.desc',
          tagKey: 'index.landing.useCases.writing.tag'
        },
        {
          id: 'design',
          icon: '🎨',
          gradient: 'linear-gradient(135deg,#ff6b9d22,#ffd93d22)',
          route: '/midjourney',
          titleKey: 'index.landing.useCases.design.title',
          descKey: 'index.landing.useCases.design.desc',
          tagKey: 'index.landing.useCases.design.tag'
        },
        {
          id: 'video',
          icon: '🎬',
          gradient: 'linear-gradient(135deg,#00d4ff22,#4ecca322)',
          route: '/sora',
          titleKey: 'index.landing.useCases.video.title',
          descKey: 'index.landing.useCases.video.desc',
          tagKey: 'index.landing.useCases.video.tag'
        },
        {
          id: 'music',
          icon: '🎵',
          gradient: 'linear-gradient(135deg,#4ecca322,#ffd93d22)',
          route: '/suno',
          titleKey: 'index.landing.useCases.music.title',
          descKey: 'index.landing.useCases.music.desc',
          tagKey: 'index.landing.useCases.music.tag'
        }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.$nextTick(() => {
      this.initParticles();
      this.initScrollReveal();
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    if (this.animationId) cancelAnimationFrame(this.animationId);
  },
  methods: {
    onScroll() {
      this.isScrolled = window.scrollY > 20;
    },
    onResize() {
      this.initParticles();
    },
    onGlobalMouseMove(e: MouseEvent) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    onCardMouseMove(e: MouseEvent) {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      target.style.setProperty('--mouse-x', `${x}%`);
      target.style.setProperty('--mouse-y', `${y}%`);
    },
    initParticles() {
      const canvas = this.$refs.particleCanvas as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      this.particleCanvas = canvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 110);
      this.particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        this.particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.8 + 0.4,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      this.animateParticles();
      window.addEventListener('resize', this.onResize);
    },
    animateParticles() {
      if (!this.particleCanvas) return;
      const canvas = this.particleCanvas;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxDist = 130;
      const mouseRadius = 180;
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        // Drift
        p.x += p.vx;
        p.y += p.vy;
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        // Mouse repulsion
        const dx = p.x - this.mouseX;
        const dy = p.y - this.mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          p.x += (dx / dist) * force * 3;
          p.y += (dy / dist) * force * 3;
        }
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 92, 231, ${p.opacity})`;
        ctx.fill();
        // Draw connections
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < maxDist) {
            const cOpacity = (1 - cdist / maxDist) * 0.25;
            // Mouse proximity enhances lines
            const midX = (p.x + p2.x) / 2;
            const midY = (p.y + p2.y) / 2;
            const mouseDist = Math.sqrt((midX - this.mouseX) ** 2 + (midY - this.mouseY) ** 2);
            const boost = mouseDist < 200 ? (1 - mouseDist / 200) * 0.5 : 0;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(108, 92, 231, ${cOpacity + boost})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      this.animationId = requestAnimationFrame(this.animateParticles);
    },
    initScrollReveal() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('lp-revealed');
            }
          });
        },
        { threshold: 0.12 }
      );
      const els = document.querySelectorAll(
        '.capability-card, .usecase-card, .model-group, .stat-item, .section-header'
      );
      els.forEach((el, i) => {
        el.classList.add('lp-reveal');
        (el as HTMLElement).style.transitionDelay = `${(i % 4) * 0.08}s`;
        observer.observe(el);
      });
    },
    scrollTo(id: string) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    goFeature(path: string) {
      this.$router.push(path);
    },
    goLogin() {
      this.$router.push('/auth/login');
    },
    goHome() {
      this.$router.push('/');
    },
    showContact() {
      const event = new CustomEvent('open-floating-contact');
      window.dispatchEvent(event);
    }
  }
});
</script>

<style lang="scss" scoped>
/* PARTICLE CANVAS */
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

/* SCROLL REVEAL */
.lp-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.lp-revealed {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.landing-page {
  --lp-bg-base: #08090f;
  --lp-bg-surface: #0f1119;
  --lp-bg-card: #141826;
  --lp-bg-card-hover: #1a1f30;
  --lp-border: #1e2438;
  --lp-border-light: #2a3048;
  --lp-text-primary: #eef1f8;
  --lp-text-secondary: #9ba3b8;
  --lp-text-muted: #5a6478;
  --lp-accent: #6c5ce7;
  --lp-accent-light: #a29bfe;
  --lp-cyan: #00d4ff;
  --lp-gradient-accent: linear-gradient(135deg, #6c5ce7 0%, #00d4ff 100%);
  --lp-gradient-text: linear-gradient(135deg, #ffffff 0%, #a29bfe 60%, #00d4ff 100%);
  --lp-shadow-glow: 0 0 40px rgba(108, 92, 231, 0.15);
  --lp-shadow-card-hover: 0 8px 40px rgba(108, 92, 231, 0.2);

  background: var(--lp-bg-base);
  color: var(--lp-text-primary);
  font-family: -apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
}

/* Ensure all sections sit above particle canvas */
.navbar,
.hero,
.stats-bar,
.section,
.bottom-cta,
.footer {
  position: relative;
  z-index: 1;
}

/* NAVBAR */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  background: rgba(8, 9, 15, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.3s,
    background 0.3s;

  &.scrolled {
    border-bottom-color: var(--lp-border);
    background: rgba(8, 9, 15, 0.9);
  }
}
.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
  cursor: pointer;
}
.logo-icon {
  width: 36px;
  height: 36px;
  background: var(--lp-gradient-accent);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: var(--lp-shadow-glow);
}
.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
  a {
    font-size: 14px;
    color: var(--lp-text-secondary);
    transition: color 0.2s;
    &:hover {
      color: var(--lp-text-primary);
    }
  }
}
.nav-cta {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.btn-ghost {
  background: transparent;
  color: var(--lp-text-secondary);
  border: 1px solid var(--lp-border-light);
  &:hover {
    color: var(--lp-text-primary);
    border-color: var(--lp-text-secondary);
  }
}
.btn-primary {
  background: var(--lp-gradient-accent);
  color: white;
  box-shadow: 0 4px 20px rgba(108, 92, 231, 0.3);
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 28px rgba(108, 92, 231, 0.45);
  }
}
.btn-large {
  padding: 16px 40px;
  font-size: 16px;
}

/* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background:
    radial-gradient(ellipse at top, rgba(108, 92, 231, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(0, 212, 255, 0.08) 0%, transparent 50%);
  overflow: hidden;
  padding: 120px 24px 80px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(108, 92, 231, 0.08) 1px, transparent 0);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  }

  /* Animated aurora orbs */
  &::after {
    content: '';
    position: absolute;
    top: 10%;
    left: 50%;
    width: 600px;
    height: 600px;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(108, 92, 231, 0.12) 0%, transparent 60%);
    border-radius: 50%;
    animation: lp-aurora 8s ease-in-out infinite alternate;
    pointer-events: none;
  }
}
@keyframes lp-aurora {
  0% {
    transform: translateX(-50%) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translateX(-40%) scale(1.3);
    opacity: 0.9;
  }
}
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(108, 92, 231, 0.1);
  border: 1px solid rgba(108, 92, 231, 0.2);
  border-radius: 9999px;
  font-size: 13px;
  color: var(--lp-accent-light);
  margin-bottom: 32px;
  .dot {
    width: 6px;
    height: 6px;
    background: #4ecca3;
    border-radius: 50%;
    animation: lp-pulse 2s infinite;
  }
}
@keyframes lp-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
.hero h1 {
  font-size: 64px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  .gradient {
    background: var(--lp-gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
.hero .subtitle {
  font-size: 20px;
  color: var(--lp-text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-models-preview {
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  opacity: 0.7;
}
.model-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--lp-bg-card);
  border: 1px solid var(--lp-border);
  border-radius: 9999px;
  font-size: 13px;
  color: var(--lp-text-secondary);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border-color: var(--lp-accent);
    color: var(--lp-text-primary);
    transform: translateY(-2px);
  }
}
.chip-icon {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
}

/* STATS BAR */
.stats-bar {
  padding: 48px 24px;
  background: var(--lp-bg-surface);
  border-top: 1px solid var(--lp-border);
  border-bottom: 1px solid var(--lp-border);
}
.stats-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  text-align: center;
}
.stat-item {
  .stat-number {
    font-size: 42px;
    font-weight: 800;
    background: var(--lp-gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
  }
  .stat-label {
    font-size: 14px;
    color: var(--lp-text-muted);
    margin-top: 4px;
  }
}

/* SECTION */
.section {
  padding: 100px 24px;
}
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.section-header {
  text-align: center;
  margin-bottom: 64px;
  h2 {
    font-size: 40px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  p {
    font-size: 17px;
    color: var(--lp-text-secondary);
  }
}

/* CAPABILITY GRID */
.capability-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.capability-card {
  background: rgba(20, 24, 38, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--lp-border);
  border-radius: 20px;
  padding: 32px 28px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  /* Glow on hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(108, 92, 231, 0.08),
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--card-accent, var(--lp-accent));
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover {
    background: var(--lp-bg-card-hover);
    border-color: var(--card-accent, var(--lp-accent));
    transform: translateY(-4px);
    box-shadow: var(--lp-shadow-card-hover);
    &::before {
      opacity: 1;
    }
    &::after {
      opacity: 1;
    }
  }
}
.capability-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-bottom: 20px;
  background: var(--icon-bg, rgba(108, 92, 231, 0.1));
}
.capability-card {
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    color: var(--lp-text-secondary);
    line-height: 1.6;
  }
  .card-count {
    margin-top: 16px;
    font-size: 13px;
    color: var(--card-accent, var(--lp-accent-light));
    font-weight: 600;
  }
}

/* MODEL WALL */
.model-wall {
  background: var(--lp-bg-surface);
}
.model-groups {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.model-group {
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .group-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
  }
  .group-count {
    font-size: 13px;
    color: var(--lp-text-muted);
    font-weight: 400;
  }
}
.model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}
.model-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(20, 24, 38, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--lp-border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--lp-bg-card-hover);
    border-color: var(--lp-accent);
    transform: translateY(-2px);
  }
  .m-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    flex-shrink: 0;
  }
  .m-info {
    flex: 1;
    min-width: 0;
  }
  .m-name {
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .m-desc {
    font-size: 11px;
    color: var(--lp-text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

/* USE CASES */
.usecase-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.usecase-card {
  background: rgba(20, 24, 38, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--lp-border);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: var(--lp-accent);
    transform: translateY(-4px);
    box-shadow: var(--lp-shadow-card-hover);
  }
}
.usecase-visual {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}
.usecase-body {
  padding: 24px;
  h4 {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  p {
    font-size: 13px;
    color: var(--lp-text-secondary);
    line-height: 1.6;
  }
}
.usecase-tag {
  display: inline-block;
  margin-top: 12px;
  padding: 4px 10px;
  background: rgba(108, 92, 231, 0.1);
  border-radius: 6px;
  font-size: 11px;
  color: var(--lp-accent-light);
  font-weight: 600;
}

/* BOTTOM CTA */
.bottom-cta {
  padding: 100px 24px;
  text-align: center;
  background:
    radial-gradient(ellipse at top, rgba(108, 92, 231, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(0, 212, 255, 0.08) 0%, transparent 50%);
  border-top: 1px solid var(--lp-border);
  h2 {
    font-size: 42px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    .gradient {
      background: var(--lp-gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  p {
    font-size: 18px;
    color: var(--lp-text-secondary);
    margin-bottom: 40px;
  }
}

/* FOOTER */
.footer {
  padding: 48px 24px 32px;
  background: var(--lp-bg-surface);
  border-top: 1px solid var(--lp-border);
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}
.footer-info {
  font-size: 13px;
  color: var(--lp-text-muted);
}
.footer-links {
  display: flex;
  gap: 24px;
  a {
    font-size: 13px;
    color: var(--lp-text-muted);
    transition: color 0.2s;
    &:hover {
      color: var(--lp-text-secondary);
    }
  }
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .hero h1 {
    font-size: 40px;
  }
  .hero .subtitle {
    font-size: 17px;
  }
  .stats-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .capability-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .usecase-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .section {
    padding: 64px 24px;
  }
  .section-header h2 {
    font-size: 30px;
  }
}
@media (max-width: 600px) {
  .hero h1 {
    font-size: 32px;
  }
  .stats-inner {
    grid-template-columns: 1fr;
  }
  .capability-grid {
    grid-template-columns: 1fr;
  }
  .usecase-grid {
    grid-template-columns: 1fr;
  }
}
</style>

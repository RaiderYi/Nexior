<template>
  <div class="landing-page" @mousemove="onGlobalMouseMove">
    <!-- PARTICLE CANVAS -->
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
    <!-- SCI-FI GRID OVERLAY -->
    <div class="grid-overlay"></div>

    <!-- 1. NAVBAR -->
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="navbar-inner">
        <div class="logo" @click="goHome">
          <div class="logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="url(#logo-grad)" stroke-width="2" />
              <path d="M16 8L22 11.5V18.5L16 22L10 18.5V11.5L16 8Z" fill="url(#logo-grad)" />
              <defs>
                <linearGradient id="logo-grad" x1="4" y1="2" x2="28" y2="30">
                  <stop stop-color="#6c5ce7" />
                  <stop offset="1" stop-color="#00d4ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span>BigPlayer<span class="logo-accent">.AI</span></span>
        </div>
        <div class="nav-links">
          <a href="#capabilities" @click.prevent="scrollTo('capabilities')">{{ $t('index.landing.nav.features') }}</a>
          <a href="#models" @click.prevent="scrollTo('models')">{{ $t('index.landing.nav.models') }}</a>
          <a href="#usecases" @click.prevent="scrollTo('usecases')">{{ $t('index.landing.nav.useCases') }}</a>
          <a href="/download">{{ $t('index.landing.nav.download') }}</a>
        </div>
        <div class="nav-cta">
          <button class="btn btn-ghost" @click="goLogin">{{ $t('index.landing.nav.login') }}</button>
          <button class="btn btn-primary" @click="goLogin">
            {{ $t('index.landing.nav.signup') }}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7H11M11 7L7 3M11 7L7 11"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- 2. HERO -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-pulse"></span>
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
            {{ $t('index.landing.hero.ctaPrimary') }}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="btn btn-ghost btn-large" @click="scrollTo('models')">
            {{ $t('index.landing.hero.ctaSecondary') }}
          </button>
        </div>
        <div class="hero-models-preview">
          <div v-for="chip in heroChips" :key="chip.name" class="model-chip" @click="goFeature(chip.route)">
            <div class="chip-icon" :style="{ '--chip-color': chip.color }">
              <span>{{ chip.letter }}</span>
            </div>
            {{ chip.name }}
          </div>
        </div>
      </div>
    </section>

    <!-- 3. STATS BAR -->
    <section class="stats-bar">
      <div class="stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <div class="stat-corner tl"></div>
          <div class="stat-corner tr"></div>
          <div class="stat-corner bl"></div>
          <div class="stat-corner br"></div>
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ $t(stat.label) }}</div>
        </div>
      </div>
    </section>

    <!-- 4. CAPABILITY GRID -->
    <section id="capabilities" class="section">
      <div class="section-inner">
        <div class="section-header">
          <div class="section-label">// SYSTEM CAPABILITIES</div>
          <h2>{{ $t('index.landing.capabilities.title') }}</h2>
          <p>{{ $t('index.landing.capabilities.subtitle') }}</p>
        </div>
        <div class="capability-grid">
          <div
            v-for="cap in capabilities"
            :key="cap.id"
            class="capability-card"
            :style="{ '--card-accent': cap.color }"
            @click="goFeature(cap.route)"
            @mousemove="onCardMouseMove($event)"
          >
            <div class="card-corner tl"></div>
            <div class="card-corner tr"></div>
            <div class="card-corner bl"></div>
            <div class="card-corner br"></div>
            <div class="capability-icon" v-html="cap.svg"></div>
            <h3>{{ $t(cap.titleKey) }}</h3>
            <p>{{ $t(cap.descKey) }}</p>
            <div class="card-count">
              {{ $t(cap.countKey) }}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6H10M10 6L6 2M10 6L6 10"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. MODEL WALL -->
    <section id="models" class="section model-wall">
      <div class="section-inner">
        <div class="section-header">
          <div class="section-label">// MODEL REGISTRY</div>
          <h2>{{ $t('index.landing.models.title') }}</h2>
          <p>{{ $t('index.landing.models.subtitle') }}</p>
        </div>
        <div class="model-groups">
          <div v-for="group in modelGroups" :key="group.id" class="model-group">
            <h3>
              <div class="group-icon" :style="{ '--group-color': group.color }">
                <span>{{ group.letter }}</span>
              </div>
              {{ $t(group.nameKey) }}
              <span class="group-count">{{ $t(group.countKey) }}</span>
            </h3>
            <div class="model-grid">
              <div v-for="model in group.models" :key="model.name" class="model-item" @click="goFeature(model.route)">
                <div class="m-icon" :style="{ '--m-color': model.color }">
                  <span>{{ model.letter }}</span>
                </div>
                <div class="m-info">
                  <div class="m-name">{{ model.name }}</div>
                  <div class="m-desc">{{ $t(model.descKey) }}</div>
                </div>
                <svg class="m-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7H11M11 7L7 3M11 7L7 11"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
          <div class="section-label">// USE CASES</div>
          <h2>{{ $t('index.landing.useCases.title') }}</h2>
          <p>{{ $t('index.landing.useCases.subtitle') }}</p>
        </div>
        <div class="usecase-grid">
          <div
            v-for="uc in useCases"
            :key="uc.id"
            class="usecase-card"
            :style="{ '--uc-color': uc.color }"
            @click="goFeature(uc.route)"
          >
            <div class="card-corner tl"></div>
            <div class="card-corner tr"></div>
            <div class="card-corner bl"></div>
            <div class="card-corner br"></div>
            <div class="usecase-visual" v-html="uc.svg"></div>
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
      <div class="cta-rings">
        <div class="ring r1"></div>
        <div class="ring r2"></div>
        <div class="ring r3"></div>
      </div>
      <div class="cta-content">
        <h2>
          <span class="gradient">{{ $t('index.landing.bottomCta.title') }}</span>
        </h2>
        <p>{{ $t('index.landing.bottomCta.subtitle') }}</p>
        <button class="btn btn-primary btn-large" @click="goLogin">
          {{ $t('index.landing.bottomCta.button') }}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L8 3M13 8L8 13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-info">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style="vertical-align: middle; margin-right: 4px; opacity: 0.4"
          >
            <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1" />
            <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.3" />
          </svg>
          {{ new Date().getFullYear() }} BigPlayer AI · All Rights Reserved
        </div>
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
  opacity: number;
}

const svgChat = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10C8 8.89543 8.89543 8 10 8H38C39.1046 8 40 8.89543 40 10V30C40 31.1046 39.1046 32 38 32H22L14 40V32H10C8.89543 32 8 31.1046 8 30V10Z" stroke="var(--card-accent)" stroke-width="2"/><circle cx="18" cy="20" r="2" fill="var(--card-accent)"/><circle cx="24" cy="20" r="2" fill="var(--card-accent)"/><circle cx="30" cy="20" r="2" fill="var(--card-accent)"/></svg>`;
const svgImage = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="32" height="32" rx="2" stroke="var(--card-accent)" stroke-width="2"/><circle cx="18" cy="18" r="3" stroke="var(--card-accent)" stroke-width="2"/><path d="M12 32L20 24L26 30L32 22L38 32" stroke="var(--card-accent)" stroke-width="2" stroke-linejoin="round"/></svg>`;
const svgVideo = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="12" width="28" height="24" rx="2" stroke="var(--card-accent)" stroke-width="2"/><path d="M34 20L42 16V32L34 28V20Z" stroke="var(--card-accent)" stroke-width="2" stroke-linejoin="round"/><path d="M16 20L24 24L16 28V20Z" fill="var(--card-accent)"/></svg>`;
const svgMusic = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 10V34" stroke="var(--card-accent)" stroke-width="2" stroke-linecap="round"/><path d="M18 10L36 14V18" stroke="var(--card-accent)" stroke-width="2" stroke-linecap="round"/><circle cx="14" cy="34" r="4" stroke="var(--card-accent)" stroke-width="2"/><circle cx="32" cy="30" r="4" stroke="var(--card-accent)" stroke-width="2"/><path d="M32 26V14" stroke="var(--card-accent)" stroke-width="2"/><path d="M18 30V14" stroke="var(--card-accent)" stroke-width="2"/></svg>`;
const svgWriting = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6H32L38 12V42H12V6Z" stroke="var(--uc-color)" stroke-width="2"/><path d="M32 6V12H38" stroke="var(--uc-color)" stroke-width="2"/><path d="M18 22H32M18 28H32M18 34H26" stroke="var(--uc-color)" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const svgDesign = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="32" height="32" rx="2" stroke="var(--uc-color)" stroke-width="2"/><circle cx="20" cy="20" r="5" stroke="var(--uc-color)" stroke-width="2"/><rect x="28" y="28" width="8" height="8" stroke="var(--uc-color)" stroke-width="2"/><path d="M12 36L24 24" stroke="var(--uc-color)" stroke-width="1.5"/></svg>`;
const svgFilm = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="10" width="32" height="28" rx="2" stroke="var(--uc-color)" stroke-width="2"/><path d="M8 18H40M8 30H40M16 10V18M16 30V38M32 10V18M32 30V38" stroke="var(--uc-color)" stroke-width="1.5"/></svg>`;
const svgWave = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 24C6 24 10 12 14 24C18 36 22 12 26 24C30 36 34 12 38 24C40 30 42 24 42 24" stroke="var(--uc-color)" stroke-width="2" stroke-linecap="round"/><circle cx="14" cy="24" r="2" fill="var(--uc-color)"/><circle cx="26" cy="24" r="2" fill="var(--uc-color)"/><circle cx="38" cy="24" r="2" fill="var(--uc-color)"/></svg>`;

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
        { name: 'GPT-5.5', letter: 'G', color: '#10a37f', route: '/chatgpt' },
        { name: 'Claude', letter: 'C', color: '#d97757', route: '/claude' },
        { name: 'Gemini', letter: 'G', color: '#4285f4', route: '/gemini' },
        { name: 'DeepSeek', letter: 'D', color: '#4ecca3', route: '/deepseek' },
        { name: 'Midjourney', letter: 'M', color: '#ffd93d', route: '/midjourney' },
        { name: 'Suno', letter: 'S', color: '#00d4ff', route: '/suno' }
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
          svg: svgChat,
          color: '#6c5ce7',
          route: '/chatgpt',
          titleKey: 'index.landing.capabilities.chat.title',
          descKey: 'index.landing.capabilities.chat.desc',
          countKey: 'index.landing.capabilities.chat.count'
        },
        {
          id: 'image',
          svg: svgImage,
          color: '#ff6b9d',
          route: '/midjourney',
          titleKey: 'index.landing.capabilities.image.title',
          descKey: 'index.landing.capabilities.image.desc',
          countKey: 'index.landing.capabilities.image.count'
        },
        {
          id: 'video',
          svg: svgVideo,
          color: '#00d4ff',
          route: '/sora',
          titleKey: 'index.landing.capabilities.video.title',
          descKey: 'index.landing.capabilities.video.desc',
          countKey: 'index.landing.capabilities.video.count'
        },
        {
          id: 'music',
          svg: svgMusic,
          color: '#4ecca3',
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
          color: '#10a37f',
          nameKey: 'index.landing.models.openai.name',
          countKey: 'index.landing.models.openai.count',
          models: [
            {
              name: 'GPT-5.5',
              letter: 'G',
              color: '#10a37f',
              route: '/chatgpt',
              descKey: 'index.landing.models.openai.gpt55'
            },
            {
              name: 'GPT-5.4',
              letter: 'G',
              color: '#10a37f',
              route: '/chatgpt',
              descKey: 'index.landing.models.openai.gpt54'
            },
            {
              name: 'GPT-5.2',
              letter: 'G',
              color: '#10a37f',
              route: '/chatgpt',
              descKey: 'index.landing.models.openai.gpt52'
            },
            {
              name: 'GPT-5-mini',
              letter: 'G',
              color: '#10a37f',
              route: '/chatgpt',
              descKey: 'index.landing.models.openai.gpt5mini'
            },
            { name: 'o3', letter: 'G', color: '#10a37f', route: '/chatgpt', descKey: 'index.landing.models.openai.o3' }
          ]
        },
        {
          id: 'anthropic',
          letter: 'C',
          color: '#d97757',
          nameKey: 'index.landing.models.anthropic.name',
          countKey: 'index.landing.models.anthropic.count',
          models: [
            {
              name: 'Claude Fable-5',
              letter: 'C',
              color: '#d97757',
              route: '/claude',
              descKey: 'index.landing.models.anthropic.fable5'
            },
            {
              name: 'Claude Sonnet-5',
              letter: 'C',
              color: '#d97757',
              route: '/claude',
              descKey: 'index.landing.models.anthropic.sonnet5'
            },
            {
              name: 'Claude Opus-4.8',
              letter: 'C',
              color: '#d97757',
              route: '/claude',
              descKey: 'index.landing.models.anthropic.opus48'
            },
            {
              name: 'Claude Haiku-5',
              letter: 'C',
              color: '#d97757',
              route: '/claude',
              descKey: 'index.landing.models.anthropic.haiku5'
            }
          ]
        },
        {
          id: 'google',
          letter: 'G',
          color: '#4285f4',
          nameKey: 'index.landing.models.google.name',
          countKey: 'index.landing.models.google.count',
          models: [
            {
              name: 'Gemini 3.5 Pro',
              letter: 'G',
              color: '#4285f4',
              route: '/gemini',
              descKey: 'index.landing.models.google.gemini35pro'
            },
            {
              name: 'Gemini 3.5 Flash',
              letter: 'G',
              color: '#4285f4',
              route: '/gemini',
              descKey: 'index.landing.models.google.gemini35flash'
            },
            {
              name: 'Gemini 3.0 Pro',
              letter: 'G',
              color: '#4285f4',
              route: '/gemini',
              descKey: 'index.landing.models.google.gemini30pro'
            },
            {
              name: 'Gemini 3.0 Flash',
              letter: 'G',
              color: '#4285f4',
              route: '/gemini',
              descKey: 'index.landing.models.google.gemini30flash'
            }
          ]
        },
        {
          id: 'deepseek',
          letter: 'D',
          color: '#4ecca3',
          nameKey: 'index.landing.models.deepseek.name',
          countKey: 'index.landing.models.deepseek.count',
          models: [
            {
              name: 'DeepSeek V4',
              letter: 'D',
              color: '#4ecca3',
              route: '/deepseek',
              descKey: 'index.landing.models.deepseek.v4'
            },
            {
              name: 'DeepSeek V3.5',
              letter: 'D',
              color: '#4ecca3',
              route: '/deepseek',
              descKey: 'index.landing.models.deepseek.v35'
            },
            {
              name: 'DeepSeek R1',
              letter: 'D',
              color: '#4ecca3',
              route: '/deepseek',
              descKey: 'index.landing.models.deepseek.r1'
            }
          ]
        },
        {
          id: 'cn',
          letter: '中',
          color: '#a29bfe',
          nameKey: 'index.landing.models.cn.name',
          countKey: 'index.landing.models.cn.count',
          models: [
            {
              name: 'Kimi K2.5',
              letter: 'K',
              color: '#a29bfe',
              route: '/kimi',
              descKey: 'index.landing.models.cn.kimi25'
            },
            {
              name: 'Kimi K2 Thinking',
              letter: 'K',
              color: '#a29bfe',
              route: '/kimi',
              descKey: 'index.landing.models.cn.kimi2think'
            },
            { name: 'GLM-5.1', letter: 'Z', color: '#a29bfe', route: '/glm', descKey: 'index.landing.models.cn.glm51' },
            { name: 'Grok-4', letter: 'X', color: '#a29bfe', route: '/grok', descKey: 'index.landing.models.cn.grok4' }
          ]
        },
        {
          id: 'creative',
          letter: 'A',
          color: '#ff6b9d',
          nameKey: 'index.landing.models.creative.name',
          countKey: 'index.landing.models.creative.count',
          models: [
            {
              name: 'Midjourney',
              letter: 'M',
              color: '#ffd93d',
              route: '/midjourney',
              descKey: 'index.landing.models.creative.mj'
            },
            {
              name: 'Sora',
              letter: 'S',
              color: '#00d4ff',
              route: '/sora',
              descKey: 'index.landing.models.creative.sora'
            },
            {
              name: 'Kling 3.0',
              letter: 'K',
              color: '#ff6b6b',
              route: '/kling',
              descKey: 'index.landing.models.creative.kling'
            },
            {
              name: 'Suno',
              letter: 'S',
              color: '#4ecca3',
              route: '/suno',
              descKey: 'index.landing.models.creative.suno'
            },
            {
              name: 'Flux',
              letter: 'F',
              color: '#e0e0e0',
              route: '/flux',
              descKey: 'index.landing.models.creative.flux'
            },
            {
              name: 'Luma',
              letter: 'L',
              color: '#0066ff',
              route: '/luma',
              descKey: 'index.landing.models.creative.luma'
            }
          ]
        }
      ],
      useCases: [
        {
          id: 'writing',
          svg: svgWriting,
          color: '#6c5ce7',
          route: '/chatgpt',
          titleKey: 'index.landing.useCases.writing.title',
          descKey: 'index.landing.useCases.writing.desc',
          tagKey: 'index.landing.useCases.writing.tag'
        },
        {
          id: 'design',
          svg: svgDesign,
          color: '#ff6b9d',
          route: '/midjourney',
          titleKey: 'index.landing.useCases.design.title',
          descKey: 'index.landing.useCases.design.desc',
          tagKey: 'index.landing.useCases.design.tag'
        },
        {
          id: 'video',
          svg: svgFilm,
          color: '#00d4ff',
          route: '/sora',
          titleKey: 'index.landing.useCases.video.title',
          descKey: 'index.landing.useCases.video.desc',
          tagKey: 'index.landing.useCases.video.tag'
        },
        {
          id: 'music',
          svg: svgWave,
          color: '#4ecca3',
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
        this.particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
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
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        const dx = p.x - this.mouseX;
        const dy = p.y - this.mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          p.x += (dx / dist) * force * 3;
          p.y += (dy / dist) * force * 3;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 92, 231, ${p.opacity})`;
        ctx.fill();
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < maxDist) {
            const cOpacity = (1 - cdist / maxDist) * 0.25;
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
            if (entry.isIntersecting) entry.target.classList.add('lp-revealed');
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
      window.dispatchEvent(new CustomEvent('open-floating-contact'));
    }
  }
});
</script>

<style lang="scss" scoped>
/* ========== BASE ========== */
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(108, 92, 231, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(108, 92, 231, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 80%);
}
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
  --lp-bg-base: #06070d;
  --lp-bg-surface: #0b0d16;
  --lp-bg-card: rgba(15, 18, 30, 0.6);
  --lp-bg-card-hover: rgba(20, 24, 40, 0.8);
  --lp-border: #1a1e2e;
  --lp-border-light: #2a3048;
  --lp-text-primary: #e8ecf4;
  --lp-text-secondary: #8a92a8;
  --lp-text-muted: #4a5268;
  --lp-accent: #6c5ce7;
  --lp-accent-light: #a29bfe;
  --lp-cyan: #00d4ff;
  --lp-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace;
  --lp-sans: -apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --lp-gradient-accent: linear-gradient(135deg, #6c5ce7 0%, #00d4ff 100%);
  --lp-gradient-text: linear-gradient(135deg, #ffffff 0%, #a29bfe 50%, #00d4ff 100%);
  --lp-glow-purple: 0 0 30px rgba(108, 92, 231, 0.15);
  --lp-glow-cyan: 0 0 30px rgba(0, 212, 255, 0.1);
  background: var(--lp-bg-base);
  color: var(--lp-text-primary);
  font-family: var(--lp-sans);
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
}
.navbar,
.hero,
.stats-bar,
.section,
.bottom-cta,
.footer {
  position: relative;
  z-index: 1;
}

/* ========== CARD CORNERS (HUD style) ========== */
.card-corner,
.stat-corner {
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: var(--card-accent, var(--lp-accent));
  border-style: solid;
  border-width: 0;
  opacity: 0.6;
  transition: opacity 0.3s;
  &.tl {
    top: -1px;
    left: -1px;
    border-top-width: 2px;
    border-left-width: 2px;
  }
  &.tr {
    top: -1px;
    right: -1px;
    border-top-width: 2px;
    border-right-width: 2px;
  }
  &.bl {
    bottom: -1px;
    left: -1px;
    border-bottom-width: 2px;
    border-left-width: 2px;
  }
  &.br {
    bottom: -1px;
    right: -1px;
    border-bottom-width: 2px;
    border-right-width: 2px;
  }
}
.stat-item:hover .stat-corner,
.capability-card:hover .card-corner,
.usecase-card:hover .card-corner {
  opacity: 1;
}

/* ========== NAVBAR ========== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 14px 0;
  background: rgba(6, 7, 13, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.3s,
    background 0.3s;
  &.scrolled {
    border-bottom-color: var(--lp-border);
    background: rgba(6, 7, 13, 0.9);
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
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  cursor: pointer;
}
.logo-icon {
  width: 32px;
  height: 32px;
  filter: drop-shadow(0 0 8px rgba(108, 92, 231, 0.4));
}
.logo-accent {
  background: var(--lp-gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: var(--lp-mono);
  font-size: 14px;
}
.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
  a {
    font-size: 13px;
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

/* ========== BUTTONS ========== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 22px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  font-family: var(--lp-sans);
}
.btn-ghost {
  background: transparent;
  color: var(--lp-text-secondary);
  border: 1px solid var(--lp-border-light);
  &:hover {
    color: var(--lp-text-primary);
    border-color: var(--lp-accent);
    background: rgba(108, 92, 231, 0.05);
  }
}
.btn-primary {
  background: var(--lp-gradient-accent);
  color: white;
  box-shadow: 0 4px 20px rgba(108, 92, 231, 0.25);
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    transition: left 0.5s;
  }
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 28px rgba(108, 92, 231, 0.4);
    &::before {
      left: 100%;
    }
  }
}
.btn-large {
  padding: 14px 36px;
  font-size: 15px;
  border-radius: 10px;
}

/* ========== HERO ========== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108, 92, 231, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0, 212, 255, 0.06) 0%, transparent 50%);
  overflow: hidden;
  padding: 120px 24px 80px;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(108, 92, 231, 0.06) 1px, transparent 0);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  }
  &::after {
    content: '';
    position: absolute;
    top: 5%;
    left: 50%;
    width: 700px;
    height: 400px;
    transform: translateX(-50%);
    background: radial-gradient(ellipse, rgba(108, 92, 231, 0.08) 0%, transparent 60%);
    animation: lp-aurora 8s ease-in-out infinite alternate;
    pointer-events: none;
  }
}
@keyframes lp-aurora {
  0% {
    transform: translateX(-50%) scale(1);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-40%) scale(1.2);
    opacity: 0.8;
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
  background: rgba(108, 92, 231, 0.08);
  border: 1px solid rgba(108, 92, 231, 0.2);
  border-radius: 4px;
  font-size: 12px;
  color: var(--lp-accent-light);
  font-family: var(--lp-mono);
  margin-bottom: 32px;
  .badge-pulse {
    width: 6px;
    height: 6px;
    background: var(--lp-cyan);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--lp-cyan);
    animation: lp-pulse 2s infinite;
  }
}
@keyframes lp-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
.hero h1 {
  font-size: 60px;
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
  font-size: 19px;
  color: var(--lp-text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 560px;
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
  margin-top: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.model-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  background: rgba(15, 18, 30, 0.5);
  border: 1px solid var(--lp-border);
  border-radius: 6px;
  font-size: 12px;
  color: var(--lp-text-secondary);
  transition: all 0.3s;
  cursor: pointer;
  font-family: var(--lp-mono);
  &:hover {
    border-color: var(--lp-accent);
    color: var(--lp-text-primary);
    transform: translateY(-2px);
  }
}
.chip-icon {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  background: color-mix(in srgb, var(--chip-color) 15%, transparent);
  color: var(--chip-color);
  border: 1px solid color-mix(in srgb, var(--chip-color) 30%, transparent);
  box-shadow: 0 0 6px color-mix(in srgb, var(--chip-color) 20%, transparent);
}

/* ========== STATS ========== */
.stats-bar {
  padding: 48px 24px;
  background: var(--lp-bg-surface);
  border-top: 1px solid var(--lp-border);
  border-bottom: 1px solid var(--lp-border);
}
.stats-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
}
.stat-item {
  position: relative;
  padding: 20px 16px;
  .stat-corner {
    border-color: var(--lp-accent);
  }
  .stat-number {
    font-size: 40px;
    font-weight: 800;
    background: var(--lp-gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    font-family: var(--lp-mono);
  }
  .stat-label {
    font-size: 12px;
    color: var(--lp-text-muted);
    margin-top: 4px;
    font-family: var(--lp-mono);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}

/* ========== SECTION ========== */
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
  .section-label {
    font-family: var(--lp-mono);
    font-size: 11px;
    color: var(--lp-accent-light);
    letter-spacing: 0.15em;
    margin-bottom: 12px;
    opacity: 0.7;
  }
  h2 {
    font-size: 38px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  p {
    font-size: 16px;
    color: var(--lp-text-secondary);
  }
}

/* ========== CAPABILITY ========== */
.capability-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.capability-card {
  background: var(--lp-bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--lp-border);
  border-radius: 12px;
  padding: 32px 28px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      color-mix(in srgb, var(--card-accent) 6%, transparent),
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  &:hover {
    background: var(--lp-bg-card-hover);
    border-color: var(--card-accent);
    transform: translateY(-4px);
    box-shadow: 0 8px 40px color-mix(in srgb, var(--card-accent) 15%, transparent);
    &::after {
      opacity: 1;
    }
  }
}
.capability-icon {
  width: 52px;
  height: 52px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 12px color-mix(in srgb, var(--card-accent) 30%, transparent));
  svg {
    width: 100%;
    height: 100%;
  }
}
.capability-card {
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  p {
    font-size: 13px;
    color: var(--lp-text-secondary);
    line-height: 1.6;
  }
  .card-count {
    margin-top: 16px;
    font-size: 12px;
    color: var(--card-accent);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: var(--lp-mono);
  }
}

/* ========== MODEL WALL ========== */
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
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .group-icon {
    width: 30px;
    height: 30px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    background: color-mix(in srgb, var(--group-color) 12%, transparent);
    color: var(--group-color);
    border: 1px solid color-mix(in srgb, var(--group-color) 25%, transparent);
    box-shadow: 0 0 8px color-mix(in srgb, var(--group-color) 15%, transparent);
  }
  .group-count {
    font-size: 12px;
    color: var(--lp-text-muted);
    font-weight: 400;
    font-family: var(--lp-mono);
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
  padding: 12px 14px;
  background: rgba(15, 18, 30, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--lp-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: var(--lp-bg-card-hover);
    border-color: var(--m-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px color-mix(in srgb, var(--m-color) 12%, transparent);
  }
  .m-icon {
    width: 30px;
    height: 30px;
    border-radius: 6px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    background: color-mix(in srgb, var(--m-color) 12%, transparent);
    color: var(--m-color);
    border: 1px solid color-mix(in srgb, var(--m-color) 25%, transparent);
  }
  .m-info {
    flex: 1;
    min-width: 0;
  }
  .m-name {
    font-size: 13px;
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
  .m-arrow {
    color: var(--lp-text-muted);
    transition: color 0.2s;
    flex-shrink: 0;
  }
  &:hover .m-arrow {
    color: var(--m-color);
  }
}

/* ========== USE CASES ========== */
.usecase-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.usecase-card {
  background: var(--lp-bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--lp-border);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  &:hover {
    border-color: var(--uc-color);
    transform: translateY(-4px);
    box-shadow: 0 8px 40px color-mix(in srgb, var(--uc-color) 12%, transparent);
  }
}
.usecase-visual {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, color-mix(in srgb, var(--uc-color) 8%, transparent), transparent);
  border-bottom: 1px solid var(--lp-border);
  svg {
    width: 48px;
    height: 48px;
    filter: drop-shadow(0 0 12px color-mix(in srgb, var(--uc-color) 30%, transparent));
  }
}
.usecase-body {
  padding: 20px;
  h4 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  p {
    font-size: 12px;
    color: var(--lp-text-secondary);
    line-height: 1.6;
  }
}
.usecase-tag {
  display: inline-block;
  margin-top: 10px;
  padding: 3px 10px;
  background: color-mix(in srgb, var(--uc-color) 10%, transparent);
  border-radius: 4px;
  font-size: 11px;
  color: var(--uc-color);
  font-weight: 600;
  font-family: var(--lp-mono);
}

/* ========== BOTTOM CTA ========== */
.bottom-cta {
  padding: 100px 24px;
  text-align: center;
  background: radial-gradient(ellipse at top, rgba(108, 92, 231, 0.12) 0%, transparent 50%);
  border-top: 1px solid var(--lp-border);
  position: relative;
  overflow: hidden;
}
.cta-rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  .ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(108, 92, 231, 0.08);
    border-radius: 50%;
  }
  .r1 {
    width: 300px;
    height: 300px;
  }
  .r2 {
    width: 500px;
    height: 500px;
    border-color: rgba(0, 212, 255, 0.05);
  }
  .r3 {
    width: 700px;
    height: 700px;
    border-color: rgba(108, 92, 231, 0.03);
  }
}
.cta-content {
  position: relative;
  z-index: 1;
}
.bottom-cta {
  h2 {
    font-size: 40px;
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
    font-size: 17px;
    color: var(--lp-text-secondary);
    margin-bottom: 40px;
  }
}

/* ========== FOOTER ========== */
.footer {
  padding: 40px 24px 32px;
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
  font-size: 12px;
  color: var(--lp-text-muted);
  font-family: var(--lp-mono);
}
.footer-links {
  display: flex;
  gap: 24px;
  a {
    font-size: 12px;
    color: var(--lp-text-muted);
    transition: color 0.2s;
    font-family: var(--lp-mono);
    &:hover {
      color: var(--lp-text-secondary);
    }
  }
}

/* ========== RESPONSIVE ========== */
@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .hero h1 {
    font-size: 38px;
  }
  .hero .subtitle {
    font-size: 16px;
  }
  .stats-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
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
    font-size: 28px;
  }
}
@media (max-width: 600px) {
  .hero h1 {
    font-size: 30px;
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

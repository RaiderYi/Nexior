<template>
  <el-row class="credentials-page">
    <el-col :span="24">
      <h2 class="title">{{ $t('console.credentials.title') }}</h2>

      <!-- Quick Start Guide Card -->
      <el-card shadow="hover" class="mb-4">
        <div class="guide-card">
          <div class="guide-header">
            <font-awesome-icon icon="fa-solid fa-rocket" class="guide-icon" />
            <h3>{{ $t('console.credentials.guide.title') }}</h3>
          </div>
          <div class="guide-steps">
            <div class="guide-step">
              <span class="step-number">1</span>
              <div class="step-content">
                <p class="step-title">{{ $t('console.credentials.guide.step1Title') }}</p>
                <p class="step-desc">{{ $t('console.credentials.guide.step1Desc') }}</p>
                <code class="step-code">https://api.acedata.cloud/v1/chat/completions</code>
              </div>
            </div>
            <div class="guide-step">
              <span class="step-number">2</span>
              <div class="step-content">
                <p class="step-title">{{ $t('console.credentials.guide.step2Title') }}</p>
                <p class="step-desc">{{ $t('console.credentials.guide.step2Desc') }}</p>
              </div>
            </div>
            <div class="guide-step">
              <span class="step-number">3</span>
              <div class="step-content">
                <p class="step-title">{{ $t('console.credentials.guide.step3Title') }}</p>
                <p class="step-desc">{{ $t('console.credentials.guide.step3Desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </el-card>

      <!-- API Keys Table -->
      <el-card shadow="hover">
        <div slot="header" class="keys-header">
          <span class="keys-title">{{ $t('console.credentials.keys.title') }}</span>
          <el-button type="primary" size="small" round @click="onRefresh" :loading="loading">
            <font-awesome-icon icon="fa-solid fa-rotate" class="mr-1 text-[12px]" />
            {{ $t('console.credentials.button.refresh') }}
          </el-button>
        </div>

        <el-skeleton v-if="loading && credentials.length === 0" :rows="4" animated />

        <el-empty v-else-if="credentials.length === 0" :description="$t('console.credentials.keys.empty')">
          <el-button type="primary" round @click="onStartUsing">
            {{ $t('console.credentials.keys.startUsing') }}
          </el-button>
        </el-empty>

        <el-table v-else :data="credentials" stripe table-layout="fixed">
          <el-table-column :label="$t('console.credentials.field.service')" min-width="140px">
            <template #default="scope">
              <div class="service-cell">
                <font-awesome-icon :icon="getServiceIcon(scope.row.serviceTitle)" class="service-icon" />
                <span>{{ scope.row.serviceTitle || scope.row.applicationId }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column :label="$t('console.credentials.field.apiKey')" min-width="220px">
            <template #default="scope">
              <div class="key-cell">
                <code class="key-value">{{ scope.row.token }}</code>
                <copy-to-clipboard :content="scope.row.token" class="inline-block" />
              </div>
            </template>
          </el-table-column>

          <el-table-column :label="$t('console.credentials.field.balance')" width="120px" class-name="text-center">
            <template #default="scope">
              <span class="balance">{{ scope.row.remainingAmount }}</span>
            </template>
          </el-table-column>

          <el-table-column :label="$t('console.credentials.field.createdAt')" width="160px" class-name="hidden sm:table-cell">
            <template #default="scope">
              <span class="text-sm">{{ scope.row.createdAt }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-card>

      <!-- Code Example Card -->
      <el-card v-if="credentials.length > 0" shadow="hover" class="mt-4">
        <div class="example-card">
          <div class="example-header">
            <font-awesome-icon icon="fa-solid fa-code" class="example-icon" />
            <h3>{{ $t('console.credentials.example.title') }}</h3>
          </div>
          <pre class="code-block"><code>curl https://api.acedata.cloud/v1/chat/completions \
  -H "Authorization: Bearer {{ firstToken }}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'</code></pre>
          <p class="example-hint">{{ $t('console.credentials.example.hint') }}</p>
        </div>
      </el-card>

      <!-- Available Models Card -->
      <el-card shadow="hover" class="mt-4">
        <div class="models-card">
          <div class="models-header">
            <font-awesome-icon icon="fa-solid fa-list" class="models-icon" />
            <h3>{{ $t('console.credentials.models.title') }}</h3>
          </div>
          <div class="models-grid">
            <div v-for="modelGroup in modelGroups" :key="modelGroup.name" class="model-group">
              <div class="model-group-header">
                <img v-if="modelGroup.icon" :src="modelGroup.icon" class="model-group-icon" />
                <span class="model-group-name">{{ modelGroup.displayName }}</span>
              </div>
              <div class="model-list">
                <code v-for="model in modelGroup.models" :key="model" class="model-tag">{{ model }}</code>
              </div>
            </div>
          </div>
          <p class="models-hint">{{ $t('console.credentials.models.hint') }}</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  ElRow,
  ElCol,
  ElCard,
  ElTable,
  ElTableColumn,
  ElButton,
  ElSkeleton,
  ElEmpty,
  ElMessage
} from 'element-plus';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CopyToClipboard from '@/components/common/CopyToClipboard.vue';
import { applicationOperator, credentialOperator } from '@/operators';
import {
  IApplication,
  IApplicationType
} from '@/models';
import {
  CHAT_MODEL_GROUPS
} from '@/constants';

interface IDisplayCredential {
  applicationId: string;
  serviceTitle: string;
  token: string;
  remainingAmount: string;
  createdAt: string;
}

export default defineComponent({
  name: 'ConsoleCredentialsIndex',
  components: {
    ElRow,
    ElCol,
    ElCard,
    ElTable,
    ElTableColumn,
    ElButton,
    ElSkeleton,
    ElEmpty,
    FontAwesomeIcon,
    CopyToClipboard
  },
  data() {
    return {
      loading: false,
      credentials: [] as IDisplayCredential[],
      allApplications: [] as IApplication[]
    };
  },
  computed: {
    firstToken(): string {
      return this.credentials[0]?.token || 'YOUR_API_KEY';
    },
    modelGroups(): Array<{
      name: string;
      displayName: string;
      icon: string;
      models: string[];
    }> {
      return CHAT_MODEL_GROUPS.map((group: any) => ({
        name: group.name,
        displayName: group.getDisplayName(),
        icon: group.icon,
        models: group.models
          .filter((m: any) => m.enabled)
          .map((m: any) => m.name)
      }));
    }
  },
  mounted() {
    this.onFetchData();
  },
  methods: {
    async onFetchData() {
      this.loading = true;
      try {
        // 1. Fetch all user applications
        const { data: appData } = await applicationOperator.getAll({
          limit: 100,
          user_id: this.$store.getters.user.id,
          ordering: '-created_at',
          type: IApplicationType.USAGE
        });
        this.allApplications = appData.items;

        // 2. For each application, fetch its credentials
        const allCreds: IDisplayCredential[] = [];
        for (const app of appData.items) {
          try {
            const { data: credData } = await credentialOperator.getAll({
              application_id: app.id,
              user_id: this.$store.getters.user.id
            });
            for (const cred of credData.items) {
              if (cred.token) {
                allCreds.push({
                  applicationId: app.id || '',
                  serviceTitle: app.service?.title || '',
                  token: cred.token,
                  remainingAmount:
                    app.remaining_amount !== undefined
                      ? app.remaining_amount.toFixed(6)
                      : '—',
                  createdAt: cred.created_at || ''
                });
              }
            }
          } catch {
            // skip credential fetch errors for individual apps
          }
        }

        // Also check global credentials (chat service etc.)
        try {
          const { data: globalCredData } = await credentialOperator.getAll({
            user_id: this.$store.getters.user.id
          });
          for (const cred of globalCredData.items) {
            if (
              cred.token &&
              !allCreds.some((c) => c.token === cred.token)
            ) {
              allCreds.push({
                applicationId: cred.application_id || '',
                serviceTitle: cred.name || this.$t('console.credentials.keys.general'),
                token: cred.token,
                remainingAmount: '—',
                createdAt: cred.created_at || ''
              });
            }
          }
        } catch {
          // ignore
        }

        this.credentials = allCreds;
      } catch {
        ElMessage.error(this.$t('console.credentials.message.loadFailed').toString());
      } finally {
        this.loading = false;
      }
    },
    onRefresh() {
      this.onFetchData();
    },
    onStartUsing() {
      this.$router.push('/');
    },
    getServiceIcon(title: string): string {
      if (!title) return 'fa-solid fa-cube';
      const lower = title.toLowerCase();
      if (lower.includes('chat') || lower.includes('gpt')) return 'fa-solid fa-comments';
      if (lower.includes('image') || lower.includes('midjourney') || lower.includes('flux'))
        return 'fa-solid fa-image';
      if (lower.includes('video')) return 'fa-solid fa-video';
      if (lower.includes('music') || lower.includes('audio') || lower.includes('suno'))
        return 'fa-solid fa-music';
      return 'fa-solid fa-cube';
    }
  }
});
</script>

<style lang="scss" scoped>
.credentials-page {
  .title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--el-text-color-primary);
  }
}

.guide-card {
  .guide-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;

    .guide-icon {
      font-size: 20px;
      color: var(--el-color-primary);
    }
    h3 {
      margin: 0;
      font-size: 18px;
    }
  }

  .guide-steps {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .guide-step {
    display: flex;
    gap: 12px;
    align-items: flex-start;

    .step-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--el-color-primary);
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      flex-shrink: 0;
    }

    .step-content {
      flex: 1;

      .step-title {
        margin: 0 0 4px 0;
        font-weight: 600;
        font-size: 14px;
      }
      .step-desc {
        margin: 0 0 4px 0;
        font-size: 13px;
        color: var(--el-text-color-secondary);
      }
      .step-code {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 4px;
        background: var(--el-fill-color-light);
        font-size: 12px;
        word-break: break-all;
      }
    }
  }
}

.keys-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .keys-title {
    font-size: 16px;
    font-weight: 600;
  }
}

.service-cell {
  display: flex;
  align-items: center;
  gap: 8px;

  .service-icon {
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }
}

.key-cell {
  display: flex;
  align-items: center;
  gap: 6px;

  .key-value {
    font-size: 12px;
    word-break: break-all;
    color: var(--el-text-color-regular);
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.balance {
  font-weight: 600;
  color: var(--el-color-success);
}

.example-card {
  .example-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .example-icon {
      font-size: 18px;
      color: var(--el-color-primary);
    }
    h3 {
      margin: 0;
      font-size: 16px;
    }
  }

  .code-block {
    background: var(--el-fill-color-darker);
    border-radius: 8px;
    padding: 16px;
    overflow-x: auto;
    margin: 0;

    code {
      font-size: 13px;
      line-height: 1.6;
      color: var(--el-text-color-regular);
      white-space: pre;
    }
  }

  .example-hint {
    margin: 8px 0 0 0;
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }
}

.models-card {
  .models-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;

    .models-icon {
      font-size: 18px;
      color: var(--el-color-primary);
    }
    h3 {
      margin: 0;
      font-size: 16px;
    }
  }

  .models-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }

  .model-group {
    .model-group-header {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 8px;

      .model-group-icon {
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }
      .model-group-name {
        font-weight: 600;
        font-size: 13px;
      }
    }

    .model-list {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }

    .model-tag {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      background: var(--el-fill-color-light);
      font-size: 11px;
      color: var(--el-text-color-regular);
    }
  }

  .models-hint {
    margin: 16px 0 0 0;
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }
}

@media screen and (max-width: 767px) {
  .models-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>

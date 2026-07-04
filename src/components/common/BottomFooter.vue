<template>
  <el-container id="footer" class="footer">
    <el-row class="w-full">
      <el-col class="container" :span="18" :offset="3">
        <el-row>
          <el-col :span="24" class="text-center">
            <p>
              <a href="/download">{{ $t('common.nav.mobileApp') }}</a>
              ·
              © {{ new Date().getFullYear() }} BigPlayer AI
              · All Rights Reserved
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElContainer, ElRow, ElCol } from 'element-plus';

export default defineComponent({
  name: 'BottomFooter',
  components: {
    ElContainer,
    ElRow,
    ElCol
  }
});
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  max-width: 1200px;
  padding: 32px 24px 24px;
}

.footer {
  background: var(--app-gradient-hero);
  color: rgba(255, 255, 255, 0.9);
  padding: 0;
  font-size: 14px;
  letter-spacing: -0.01em;

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    transition: color 0.2s;

    &:hover {
      color: #93b8c3;
    }
  }
}
</style>

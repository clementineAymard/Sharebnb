<template>
  <el-row :gutter="30">
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value="9850">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Daily Views
              <el-tooltip effect="dark" content="Number of users who saw your stay in one day" placement="top">
                <el-icon style="margin-left: 10px" :size="12">
                  <Warning />
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday -</span>
            <span class="green">
              24%
              <el-icon>
                <CaretTop />
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value="69370">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Monthly Views
              <el-tooltip effect="dark" content="Number of users who who saw your stay in one month" placement="top">
                <el-icon style="margin-left: 10px" :size="12">
                  <Warning />
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>month on month -</span>
            <span class="red">
              12%
              <el-icon>
                <CaretBottom />
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </el-col>
    <!-- <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value="7" title="New transactions today" class="seven">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              New transactions today
            </div>
          </template>
        </el-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday -</span>
            <span class="green">
              16%
              <el-icon>
                <CaretTop />
              </el-icon>
            </span>
          </div>

        </div>
      </div>
    </el-col> -->
  </el-row>
</template>
  
<script lang="ts" setup>
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
</script>
  
<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;

}

.el-statistic {
  --el-statistic-content-font-size: 24px;


}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: rgb(186, 216, 218);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  /* background-color: var(--el-bg-color-overlay); */
}



.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--el-text-color-regular);
  margin-top: 16px;

}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  /* margin-left: 4px; */
}

.green {
  color: var(--el-color-success);
  font-weight: bold;
}

.red {
  color: var(--el-color-error);
  font-weight: bold;
}

.el-row {
  margin-right: 50px;

}
</style>
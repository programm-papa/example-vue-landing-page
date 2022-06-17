<template>
  <welcomeBlock v-if="true"/>
  <tableСontentsBlock v-if="true"/>
  <servicesBlock v-if="true"/>
  <consultationBlock v-if="true"/>
  <blueInfoBlock v-if="true"/>
  <scrollTrackingBlock v-if="true"/>
  <casesBlock v-if="true"/>
  <methodsAttractingCustomersBlock v-if="true"/>
  <stagesSalesFunnel v-if="false"/>
  <commentsSliderBlock v-if="false"/>
  <workersBlock v-if="false"/>
  <completedWorks v-if="false"/>
</template>

<script>
//import page blocks
import welcomeBlock from "@/blocks/welcome_block.vue";
import tableСontentsBlock from "@/blocks/table_contents.vue";
import servicesBlock from "@/blocks/services_block.vue";
import consultationBlock from "@/blocks/consultation_block.vue";
import blueInfoBlock from "@/blocks/blue_info_block.vue";
import scrollTrackingBlock from "@/blocks/scroll_tracking_block.vue";
import casesBlock from "@/blocks/cases_block.vue";
import methodsAttractingCustomersBlock from "@/blocks/methods_attracting_customers_block.vue";
import stagesSalesFunnel from "@/blocks/stages_sales_funnel.vue";
import commentsSliderBlock from "@/blocks/comments_slider_block.vue";
import workersBlock from "@/blocks/workers_block.vue";
import completedWorks from "@/blocks/completed_works.vue";
export default {
  components: {
    welcomeBlock,
    tableСontentsBlock,
    servicesBlock,
    consultationBlock,
    blueInfoBlock,
    scrollTrackingBlock,
    casesBlock,
    methodsAttractingCustomersBlock,
    stagesSalesFunnel,
    commentsSliderBlock,
    workersBlock,
    completedWorks,
  },
};
</script>

<style lang="scss">
.block {
  .wrapper {
    margin: 0px auto;
    width: 1200px;
    padding: 0px 20px;
  }
}
</style>

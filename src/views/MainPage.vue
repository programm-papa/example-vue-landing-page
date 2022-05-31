<template>
  <welcomeBlock />
  <tableСontentsBlock />
  <servicesBlock />
  <consultationBlock />
  <block5 />
  <block6 />
  <block7 />
  <block8 />
  <block9 />
  <block10 />
  <block11 />
  <block12 />
</template>

<script>
//import page blocks
import welcomeBlock from "@/blocks/welcome_block.vue";
import tableСontentsBlock from "@/blocks/table_contents.vue";
import servicesBlock from "@/blocks/services_block.vue";
import consultationBlock from "@/blocks/consultation_block.vue";
import block5 from "@/blocks/block5.vue";
import block6 from "@/blocks/block6.vue";
import block7 from "@/blocks/block7.vue";
import block8 from "@/blocks/block8.vue";
import block9 from "@/blocks/block9.vue";
import block10 from "@/blocks/block10.vue";
import block11 from "@/blocks/block11.vue";
import block12 from "@/blocks/block12.vue";
export default {
  components: {
    welcomeBlock,
    tableСontentsBlock,
    servicesBlock,
    consultationBlock,
    block5,
    block6,
    block7,
    block8,
    block9,
    block10,
    block11,
    block12,
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

<template>
  <block1 />
  <block2 />
  <block3 />
  <block4 />
  <block5 />
  <block6 />
  <block7 />
  <block8 />
</template>

<script>
//import page blocks
import block1 from "@/blocks/block1.vue";
import block2 from "@/blocks/block2.vue";
import block3 from "@/blocks/block3.vue";
import block4 from "@/blocks/block4.vue";
import block5 from "@/blocks/block5.vue";
import block6 from "@/blocks/block6.vue";
import block7 from "@/blocks/block7.vue";
import block8 from "@/blocks/block8.vue";
export default {
  components: {
    block1,
    block2,
    block3,
    block4,
    block5,
    block6,
    block7,
    block8,
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

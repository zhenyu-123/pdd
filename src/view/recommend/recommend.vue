<template>
  <div>
    <ShopList :reclist="reclist" />
  </div>
</template>

<script>
import ShopList from "@/components/ShopList/ShopList";
import { mapState } from "vuex";
export default {
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState(["reclist"]),
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getrecommend");
  },
  components: {
    ShopList,
  },
};
</script>

<style scoped lang="stylus">
 
</style>

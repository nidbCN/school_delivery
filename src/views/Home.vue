<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <item-list :limit="limit"/>
        </v-container>
      </v-card>
    </v-container>
    <v-container >
      <v-btn v-if="!isShowMore" @click="showMore" color="primary" text>
        <v-icon small>mdi-more</v-icon>
        查看更多历史记录
      </v-btn>
      <v-btn v-else @click="showLess" color="primary" text>
        <v-icon small>mdi-eye-off</v-icon>
        收起更多历史记录
      </v-btn>
    </v-container>
    <v-container>
      <v-btn color="primary" block>
        <v-icon small>mdi-send</v-icon>
        发布新代取
      </v-btn>
    </v-container>
    <v-container>
      <v-btn color="error" block>立即加入我们！</v-btn>
    </v-container>
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  data:() => ({
    isShowMore: false,
    limit: 5
  }),
  name: "Home",
  components: {
    ItemList,
  },
  methods: {
    showMore() {
      this.isShowMore = true;
      this.limit = 100;
    },
    showLess() {
      this.isShowMore = false;
      this.limit = 5;
    }
  },
  created() {
    console.log(this.$route.query.isLogin);

    if (this.$route.query.isLogin === undefined
        || this.$route.query.isLogin !== "true") {
      this.$router.push({path: "/login"});
    }
  }
};
</script>
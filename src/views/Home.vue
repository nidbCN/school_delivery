<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <item-list :limit="limit"/>
        </v-container>
      </v-card>
    </v-container>
    <v-container v-if="!showMore">
      <v-btn @click="showAll" color="primary" text>
        <v-icon small>mdi-more</v-icon>
        查看更多历史记录
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
    showMore: false,
    limit: 5
  }),
  name: "Home",
  components: {
    ItemList,
  },
  methods: {
    showAll() {
      this.showMore = true;
      this.limit = 100;
    }
  }
};
</script>
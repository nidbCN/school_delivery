<template>
  <v-container>
    <v-list two-line>
      <v-list-item-group>
        <div v-for="(item, index) in items.slice(0, limit)" :key="index">
          <v-list-item>
            <template :v-slot:default="item.time">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.time"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                    v-text="item.info"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text>
                  <b><span class="red--text">{{ item.action }}</span></b>
                </v-list-item-action-text>

                <v-icon small> mdi-clock-outline</v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="(index < items.length - 1) && (index < limit - 1)" :key="index"></v-divider>
        </div>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>

export default {
  props: ['limit'],
  name: "ItemList",
  data: () => ({
    items: [
      {
        id: 1,
        action: "剩余：7 min",
        time: "2021-3-15",
        info: "赵石（18528371190）",
        title: "天天饺子馆",
      },
      {
        id: 2,
        action: "已完成",
        time: "2021-3-13",
        info: "王刚（13865422515）",
        title: "万鑫家常菜",
      },
      {
        id: 3,
        action: "已完成",
        time: "2021-3-05",
        info: "李亮（13548756521）",
        title: "川菜饭庄",
      },
      {
        id: 4,
        action: "已完成",
        time: "2021-2-27",
        info: "赵石（13458371190）",
        title: "撸串吧",
      },
      {
        id: 5,
        action: "已完成",
        time: "2021-2-19",
        info: "李丽婷（13954251190）",
        title: "张记西点",
      },
      {
        id: 6,
        action: "已完成",
        time: "2021-2-15",
        info: "王传（1351251190）",
        title: "王氏家常菜",
      },
      {
        id: 7,
        action: "已完成",
        time: "2021-2-11",
        info: "赵石（11735426584）",
        title: "黄焖鸡米饭",
      },
      {
        id: 8,
        action: "已完成",
        time: "2021-2-11",
        info: "李刚（13548759521）",
        title: "天天饺子馆",
      },
      {
        id: 9,
        action: "已完成",
        time: "2021-2-04",
        info: "王乐乐（15845795235）",
        title: "快乐星汉堡",
      },
      {
        id: 10,
        action: "已完成",
        time: "2021-1-26",
        info: "赵石（18528371190）",
        title: "三姐板面王",
      },
      {
        id: 11,
        action: "已完成",
        time: "2021-1-25",
        info: "张航（13586478786）",
        title: "天天饺子馆",
      },
      {
        id: 12,
        action: "已完成",
        time: "2021-2-16",
        info: "丁伊（13548754652）",
        title: "中恒鸡排",
      },
    ],
  }),
};
</script>

<style scoped>
</style>
<template>
  <v-container>
    <v-list two-line>
      <v-list-item-group>
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template :v-slot:default="item.time">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                    v-text="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-if="item.time > 0">
                  剩余： {{ item.time }} min
                </v-list-item-action-text>
                <v-list-item-action-text v-else>
                  <b><span style="color: #ff0000">超时： {{ -item.time }} min</span></b>
                </v-list-item-action-text>

                <v-icon small> mdi-clock-outline</v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "ItemList",
  data: () => ({
    items: [
      {
        time: 7,
        action: "剩余：7 min",
        headline: "550011512279140",
        subtitle: "送件中,赵石（18528371190）",
        title: "百世快递",
      },
      {
        time: 22,
        action: "剩余：22 min",
        headline: "773072083648762",
        subtitle: "取件中,王箐竹（13729100367）",
        title: "申通快递",
      },
      {
        time: 6,
        action: "剩余 6 min",
        headline: "77128029470899",
        subtitle: "送件中,牛顺（19927819836）",
        title: "中通快递",
      },
      {
        time: -2,
        action: "超时 2 min",
        headline: "4312742069829",
        subtitle: "送件中,李刚（12901937829）",
        title: "韵达快递",
      },
    ],
  }),
};
</script>

<style scoped>
</style>
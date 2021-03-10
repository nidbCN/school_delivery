<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>用户中心</v-card-title>
        <v-card-subtitle>欢迎：13547835443</v-card-subtitle>
        <v-divider/>
        <v-card-text>
          <v-list>
            <v-subheader>账号设置</v-subheader>
            <v-list-item-group>
              <v-list-item
                  :to="item.link"
                  v-for="(item, i) in settingList"
                  :key="i">
                <v-list-item-icon>
                  <v-icon small> {{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ item.content }}
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Account",
  data: () => ({
    settingList: [
      {
        icon: "mdi-home",
        content: "收货地址",
        link: ""
      },
      {
        icon: "mdi-key",
        content: "账号安全",
        link: ""
      },
      {
        icon: "mdi-message-alert",
        content: "消息通知",
        link: ""
      },
      {
        icon: "mdi-information-outline",
        content: "关于平台",
        link: ""
      }
    ]
  })
}
</script>
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
                  <v-badge :value="item.hasNew" dot left>
                    <v-icon small>
                      {{ item.icon }}
                    </v-icon>
                  </v-badge>
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
    <v-container>
      <v-btn color="primary" block>
        <v-icon small>mdi-swap-horizontal</v-icon>
        切换账号
      </v-btn>
    </v-container>
    <v-container>
      <v-btn color="error" block>
        <v-icon small> mdi-logout</v-icon>
        退出登录
      </v-btn>
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
        hasNew: false,
        link: ""
      },
      {
        icon: "mdi-key",
        content: "账号安全",
        hasNew: false,
        link: ""
      },
      {
        icon: "mdi-message-alert",
        content: "消息通知",
        hasNew: true,
        link: ""
      },
      {
        icon: "mdi-information-outline",
        content: "关于平台",
        hasNew: false,
        link: ""
      }
    ]
  }),
  created() {
    let isLogin = this.$cookie.get("isLogin")
    if (isLogin === undefined
        || isLogin !== "true") {
      this.$router.push({path: "/login"});
    }
  }
}
</script>
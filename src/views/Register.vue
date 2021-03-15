<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
          >
            <v-text-field
                label="账户"
                required
            ></v-text-field>
            <v-text-field
                type="password"
                label="密码"
                required
            ></v-text-field>
            <v-text-field
                type="password"
                label="重复密码"
                required
            ></v-text-field>
            <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || '必选项']"
                label="类别"
                required
            ></v-select>
            <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || '请同意许可协议以继续']"
                label="同意许可协议"
                required
            ></v-checkbox>
            <v-btn
                color="success"
                class="mr-4"
                @click="register"
            >
              注册
            </v-btn>
            <v-btn
                @click="goLogin"
                color="primary"
                class="mr-4"
                text
            >
              <v-icon small> mdi-login</v-icon>
              已有账户？登录
            </v-btn>

          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import accountService from "@/comons/accountService";

export default {
  name: "Register",
  data: () => ({
    valid: true,
    items: [
      '用户',
      '员工'
    ],
    select: '用户',
    checkbox: false,
  }),
  methods: {
    goLogin() {
      this.$router.push({name: 'Login'});
    },
    register() {
      accountService.register();
      this.$router.push({name: 'Home'});
    }
  },
  created() {
    let type = this.$route.params.type;
    if (type === "worker") {
      this.select = '员工';
    }
  }
}
</script>
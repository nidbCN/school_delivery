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
                color="primary"
                class="mr-4"
                text
            >
              注册
            </v-btn>
            <v-btn
                color="success"
                class="mr-4"
                @click="validate"
            >
              登录
            </v-btn>

            <v-btn
                color="error"
                class="mr-4"
                @click="reset"
            >
              重置
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    valid: true,
    items: [
      '用户',
      '员工'
    ],
    select: '用户',
    checkbox: false,
    myList: null,
    myLength: null
  }),
  methods: {
    register() {
      console.log("TEST");
    },
    validate() {
      if (this.$refs.form.validate()) {
        // 验证成功
        this.$cookie.set("isLogin", true);
      }
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>

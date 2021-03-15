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

            <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="地址"
                required
            ></v-select>

            <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="姓名"
                required
            ></v-text-field>

            <v-text-field
                v-model="email"
                label="电话"
                required
            ></v-text-field>

            <v-btn color="warning" block>
              <v-icon small>mdi-upload</v-icon> 上传外卖截屏
            </v-btn>

          </v-form>
        </v-container>
      </v-card>
    </v-container>
    <v-container>
      <v-btn color="primary" block>
        <v-icon small>mdi-send</v-icon>
        发布新代取
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'New',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    select: null,
    email: '',
    items: [
      '大连外国语大学：辽宁省大连市',
      '宏泰小区：河北省唐山市',
      '上兰理工：山西省太原市'
    ],
    checkbox: false,
  }),
  mounted() {
    this.select = this.items[0];
  },
  methods: {
    createNewJob() {
      if (this.validate()) {
        console.log("HERE");
      } else {
        console.log("校验失败");
      }
    },
    validate() {
      this.$refs.form.validate()
    }
  },
}
</script>
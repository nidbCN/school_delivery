<template>
    <div>
      <v-container>
        <v-card>
          <v-container>

          </v-container>
        </v-card>
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
import accountService from "@/comons/accountService";

export default {
  name: "Detail",
  data: () => ({
    limit: 5,
    showMore: false,
  }),
  methods: {

  },
  mounted() {
    if (!accountService.validate()) {
      this.$router.push({path: "/login"});
    }
  }
}
</script>
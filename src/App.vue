<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <router-link to="/">
        <div class="d-flex align-center">
          <v-icon>随心赚</v-icon>
        </div>
      </router-link>


      <v-spacer/>
      <router-link to="account">
        <v-icon>mdi-account</v-icon>
      </router-link>


    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col cols="10">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>

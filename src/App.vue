<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-icon>随心赚</v-icon>
      </div>
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

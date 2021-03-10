<template>
  <div>
    <v-container>
      <v-card>
        <v-container><item-list /></v-container>
      </v-card>
    </v-container>
    <v-container>
          <v-btn color="primary" block><v-icon small>mdi-send</v-icon>发布新代取</v-btn>
    </v-container>
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  name: "Home",
  components: {
    ItemList,
  },
};
</script>
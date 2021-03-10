<template>
  <div>
    <v-container>
      <v-card>
        <v-container><item-list/></v-container>
      </v-card>
    </v-container>
    <v-container>
      <v-card>
        <v-container>TEST2</v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  name: "Home",
  components:[
    ItemList,
  ]
}
</script>
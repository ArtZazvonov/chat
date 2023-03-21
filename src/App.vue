<template>
  <v-app id="inspire">
    <v-app-bar app color="deep-purple accent-4" dense dark>
      <v-toolbar-title>Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Login</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer app color="deep-purple accent-4">
      <v-col class="text-center white--text" cols="12">
        {{ new Date().getFullYear() }}@<strong>Chat</strong>
      </v-col>
    </v-footer>
  </v-app>

</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

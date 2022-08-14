<script setup lang="ts">
import { provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './graphql'

provide(DefaultApolloClient, apolloClient)
</script>

<template>
  <IxModalProvider>
    <router-view />
  </IxModalProvider>
</template>


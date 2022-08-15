<script setup lang="ts">
import { provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './graphql'

provide(DefaultApolloClient, apolloClient)
</script>

<template>
  <IxNotificationProvider>
    <IxModalProvider>
      <router-view />
    </IxModalProvider>
  </IxNotificationProvider>
</template>


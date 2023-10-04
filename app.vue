import { GqlFindAllPosts } from './.nuxt/gql/index';

<script setup>
const posts = await GqlFindAllPosts();
/* console.log(posts); */
</script>

<template>
  <main class="container mx-auto">
    <UTable :rows="posts.findAllPosts" />
  </main>
</template>


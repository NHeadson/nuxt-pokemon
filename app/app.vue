<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Battlefield",
    to: "/battlefield",
    active: route.path.endsWith("/battlefield"),
  },
]);
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <span class="font-bold">Poke Battles</span>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator
      icon="i-simple-icons-nuxtdotjs"
      type="dashed"
      class="h-px"
    />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-facebook"
          color="neutral"
          variant="ghost"
          to="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://x.com"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          to="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
        />
      </template>
    </UFooter>
  </UApp>
</template>

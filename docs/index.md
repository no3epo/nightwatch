---
layout: home
title: Welcome to Night's Watch
---

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const base = '/nightwatch/';
  const defaultLang = 'zh/';
  window.location.href = base + defaultLang;
})
</script>

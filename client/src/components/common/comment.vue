<template>
  <div id="SOHUCS" sid="sourceId"></div>
</template>
<style>
</style>
<script>
  window.changyan.api.config({
    appid: process.env.changyanAppId,
    conf: process.env.changyanConf
  });
  export default {
      props:['sourceId']
  }
</script>

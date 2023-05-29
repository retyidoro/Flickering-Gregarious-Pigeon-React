<template>
  <div class="home-container">
    <h1>Heading</h1>
    <img
      alt="image"
      src="/aaa/screenshot%202023-04-28%20at%2011.04.05-200w.png"
      class="home-image"
    />
    <img alt="image" src="/aaa/airplane-200h.jpg" class="home-image1" />
    <img
      alt="image"
      src="/aaa/New Folder/hibiscus-fav2-200h.png"
      class="home-image2"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Flickering Gregarious Pigeon',
    meta: [
      {
        property: 'og:title',
        content: 'Flickering Gregarious Pigeon',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-image {
  width: 200px;
  object-fit: cover;
}
.home-image1 {
  width: 200px;
  object-fit: cover;
}
.home-image2 {
  width: 200px;
  object-fit: cover;
}
</style>

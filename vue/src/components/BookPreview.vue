<template>
  <div class="bookPreview">

    <div class="book_cover">
      <img :src=cover height="150">
    </div>
    <div class="book_info">
      <h2>{{title}}</h2>

      <ul class="preview_tags">
        <li v-for="tag in tags" :key=tag class="preview_tag">
          <h5>{{ tag }}</h5>
        </li>
      </ul>

      <h4>{{ stars }} stars</h4>
    </div>

    

  </div>
</template>

<script>
export default {
    name: "BookPreview",
    props: {
        title: {required: true, type: String},
        cover: {required: true, type: String},
        stars: {required: true, type: Number},
        tags: {required: true, type: Array}
    }
}
</script>

<style>

  .bookPreview {

    width: 100%;
    height: 100%;
    background-color: rgb(163, 241, 195);

    display: flex;
    position: relative;

    justify-content: center;
    align-items: center;

  }


</style>
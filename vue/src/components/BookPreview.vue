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

      <h4>
        <span v-for="(star) in stars" :key=star>
          <span v-if="(star % 2 == 0)" class="star">⭐️</span>
          <span v-else-if="(star == stars)" class="star half-star">⭐️</span>
          
        </span>
      </h4>
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

  .book_cover {

    top: 0;
    left: 0;
    right: 0;

  }

  

  .book_info h4 {

    position: absolute;
    top: 0;
    left: 10px;

  }

  .star {
    position: relative;
  }

  .half-star::after {
    content: "";
    background: white;
    position: absolute;
    mix-blend-mode: color;
    
    top: 0;
    left: 50%;
    height: 100%;
    width: 50%;
  }

  .bookPreview {

    width: 100%;
    height: 100%;
    background-color: rgb(163, 241, 195);

    position: relative;

  }


</style>
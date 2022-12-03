<template>
  <div>

    
    <h1>Die besten Bücher</h1>

    <Suspense>
      <template #default>
        <BookList></BookList>
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
    


  </div>
</template>

<script>
import BookList from "./components/BookList"

export default {
  name: 'App',
  components: {
    BookList
  }
}
</script>

<style>
  @import 'css/style.css';
</style>

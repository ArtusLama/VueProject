
<template>

    <ul class="book_list">
        <li v-for="book in AllBooks" :key=book>
            <BookPreview class="BookPreview" :title=book.title :cover=book.cover :stars=book.stars :tags=book.tags></BookPreview>
        </li>
    </ul>

</template>





<script>

    import BookPreview from "./BookPreview"


    export default {
        name: "BookList",
        components: {
            BookPreview
        },

        data() {
            return {
                AllBooks: this.data
            }
        },

        async setup() {
            const requestOptions = { mode: "no-cors"}
            const response = await fetch("http://192.168.2.117:3000/api/getAll", requestOptions);
            console.log(response)
            const data = await response.json();
            console.log("GET ALL BOOKS")
            console.log(data)

    
            return {
                data
            }
        }
    
        
    }
   
</script>

<style>

    .book_list {

        list-style-type: none;
        
        position: absolute;
        left: 5%;
        right: 5%;
        height: 20rem;

        display: grid;
        grid-gap: 50px;
        
        
        
        

        
    }


    .book_list > li {
        grid-row: 1;   
        width: 30rem;
        padding: 2rem;
        background-color: antiquewhite;
        border: solid aqua 2px;
    }

    


</style>
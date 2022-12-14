
<template>

    <ul class="book_list">
        <li v-for="book in AllBooks" :key=book class="BookPreviewElement">
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

            const data = await response.json();

    
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
        left: 0;
        right: 0;
        height: 50rem;

        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        

    }



    .BookPreviewElement {
        
        
        width: 15rem;
        height: 20rem;
       
    }


    


</style>
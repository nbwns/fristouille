<template>
    <div class="w-full">
        <img class="w-full max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-96 object-cover"
            :src="img"
            :srcset="imgSet"
            :alt="imgAlt"
        >
    </div>
</template>

<script>

    export default {
        props:{
            img: String,
            imgSet: String,
            imgAlt: String,
        }
    }

</script>

<style>

</style>
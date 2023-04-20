<template>
    <div class="w-full bg-black-200 dark:bg-white-200" 
    :class="[
        {'h-44 lg:h-52': xxl},
        {'h-24 lg:h-28': xl},
        {'h-20 lg:h-24': lg},
        {'h-16 lg:h-20': md},
        {'h-10 lg:h-14': sm},
        {'h-5 lg:h-8': xs},
        {'h-2 lg:h-5': xxs},
    ]"
    />
    
</template>

<script> 
    
export default {
    props: {
        size: {
            type: String,
            default: 'lg'
        }
       
    },

    computed: {
        xxs() {
            return this.size === 'xxs';
        },
        xs() {
            return this.size === 'xs';
        },
        sm() {
            return this.size === 'sm';
        },
        md() {
            return this.size === 'md';
        },
        lg() {
            return this.size === 'lg';
        },
        xl() {
            return this.size === 'xl';
        },
        xxl() {
            return this.size === 'xxl';
        },
    }
 }

</script>

<style>

</style>
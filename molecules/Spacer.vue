<template>
    <component class="w-full" 
    :class="[
        {'h-44 lg:h-52': xxl},
        {'h-24 lg:h-28': xl},
        {'h-20 lg:h-24': lg},
        {'h-16 lg:h-20': md},
        {'h-10 lg:h-14': sm},
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
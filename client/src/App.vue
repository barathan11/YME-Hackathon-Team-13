<template>
    <div>
        <Navigation />
        <router-view />
    </div>
</template>

<script>
import Navigation from '@/components/Navigation';
export default {
    name: 'App',
    components: {
        Navigation,
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    transition: all 0.5s;
}
a {
    color: inherit;
    text-decoration: none;
}
a:hover {
    text-decoration: none;
    cursor: pointer;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>

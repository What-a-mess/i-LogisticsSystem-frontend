<template>
    <div>
    <TopBar />
        <br /><br />
    <LeftMenu />

    </div>
</template>

<script>
    import TopBar from "./TopAndLeft/TopBar";
    import LeftMenu from "./TopAndLeft/LeftMenu";
    export default {
        name: "Main",
        components: {LeftMenu, TopBar},
    }
</script>

<style scoped>

</style>
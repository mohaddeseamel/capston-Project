<template>
    <div class="wrapper">
        <div class="header">
            <slot name="header"/>
        </div>
        <div class="main">
            <div class="sidbar">
                <slot name="sidbar"/>
            </div>
            <div class="content">
                <slot name="content"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Layout"
}
</script>

<style scoped>
    .wrapper{
        height: 100vh;
    }
    .header{
        height: 50px; 
    }
    .main{
        height: calc(100vh - 50px);
        border-top: 2px solid silver;
        display: flex;
    }
    .sidbar{
        border-right: 2px solid silver;
        width: 200px;
        padding: 10px;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 300px;
    }
</style>
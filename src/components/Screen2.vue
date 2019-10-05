<template>
    <div class="screen2">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="green"></div>
    </div>
</template>

<script>
export default {
    name: 'Screen2',
}
</script>

<style scoped>
.screen2 {
    width: 120px;
    height: 320px;
    margin: 0 auto;
    background-color: black;
    border: 1px solid black;
}
.red {
    width: 100px;
    height: 100px;
    margin: 5px auto;
    border-radius: 50%;    
    background-color: red;
    opacity: 0.1;
}
.yellow {
    width: 100px;
    height: 100px;
    margin: 5px auto;
    border-radius: 50%;  
    background-color: yellow;
}
.green {
    width: 100px;
    height: 100px;
    margin: 5px auto;
    border-radius: 50%;  
    background-color: green;
    opacity: 0.1;
}
</style>
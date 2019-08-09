<template>
    <div class="wrapper">
        <slot name="scroll"></slot>
    </div>
</template>

<script>
    export default {
        name: "scroll",
    }
</script>

<style>
    .wrapper{
      height:100%;
    }
</style>
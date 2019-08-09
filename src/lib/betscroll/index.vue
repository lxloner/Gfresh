<template>
    <div class="show" ref="showBetscroll">
        <slot></slot>
    </div>
</template>
<script>
import Bscroll from "better-scroll"
export default {
    name:"Bscrollcommon",
    mounted() {
        new Bscroll(this.$refs.showBetscroll)
    },
}
</script>
<style>
    .show{
        height:100%;
    }
</style>
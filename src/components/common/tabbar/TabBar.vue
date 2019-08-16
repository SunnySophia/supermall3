<template>
    <div id="tab-bar">
     <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  box-shadow: 0px -3px 3px rgb(100, 100, 100,0.1)
}

</style>



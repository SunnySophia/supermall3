<template>

     <div class="tab-bar-items" @click="itemClick">
        <div v-if='isactive'><slot name="item-icon"></slot></div> 
        <div v-else><slot  name="item-icon-active"></slot></div> 
        <div :style="activeStyle"><slot  name="item-text"></slot></div> 
     </div>
</template>
<script>
export default {
    name:'tabbaritems',
    data(){
        return{
            
        }
    },
    computed: {
      isactive(){
          return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
          return this.isactive?{color:this.activecolor}:{}
      }
    },
    props:{
        path:String,
        activecolor:{
            type:String,
            default:'red'
        }
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path) 
        }
    }
}
</script>
<style scoped>
.tab-bar-items{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-items img{
    width:24px;
    height:24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}

</style>



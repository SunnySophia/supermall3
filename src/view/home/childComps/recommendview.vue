<template>
    <div id="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-items">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'recommendview',
    props: {
        recommends:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>
<style scoped>
    #recommend{
        display: flex;
        width: 100%;
        padding: 10px 0 20px;
        text-align: center;
        border-bottom: 10px  solid #eee;
        font-size: 12px;
       
        position: relative;
    }
    .recommend-items{
        flex:1;

    }
    .recommend-items img{
        width:70px;
        height: 70px;
        padding: 5px
    }
    .recommend-items a{
       color: black;  
    text-decoration:none

    }
</style>
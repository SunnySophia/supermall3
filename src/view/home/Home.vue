<template>
    <div id="home">
          <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
         <home-swiper :banners='banners'></home-swiper>
         <recommendview :recommends='recommends'></recommendview>
    </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import {getHomeMultidata} from 'network/home'
import recommendview from './childComps/recommendview'

export default {
    name:'Home',
    components: {
        NavBar,
        HomeSwiper,
        recommendview
    },
    data(){
        return {
            banners:[
                {
                image: 'https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg',
                link:'http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119'
                },
                {
                image: 'https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg',
                link:'http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119'
                },
            ],
            recommends:[
                {
                title: '十点抢卷',
                image: 'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
                link:'http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119'
                },
                 {
                title: '十点抢卷',
                image: 'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
                link:'http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119'
                },
                 {
                title: '十点抢卷',
                image: 'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
                link:'http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119'
                },
                 {
                title: '十点抢卷',
                image: 'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
                link:'http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119'
                },

            ]
        }
    },
    created () {
        getHomeMultidata().then(res=>{
            console.log(res)
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
        })
    }
}
</script>
<style scoped>
.home-nav{
    background-color: pink;
    color: #fff
  }
</style>



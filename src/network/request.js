import axios from 'axios'
export function request(config){ 
    //创建axios实例
    const instance=axios.create({
        baseURL:'http://123.207.32.32:8000/api/v1',
        timeout:'5000'
    })
    //axios拦截器
    //请求拦截
    instance.interceptors.request.use(config=>{
        console.log(config);  
        return config//拦截之后要return出去否则下面会请求不到config 
    },err=>{
        console.log(err);  
    })
    //相应拦截
    instance.interceptors.response.use(res=>{
        console.log(res);
        return res.data
    },err=>{
        console.log(err);
    })
    //发送真正的网络请求
     return instance(config)
}
 //  return new Promise((resolve,rejects)=>{
    //      //创建axios实例
    //     const instance=axios.create({
    //         baseURL:'http://123.207.32.32:8000',
    //         timeout:'5000'
    //     })
    //     //发送真正的网络请求
    //     instance(config).then(res=>{
    //         resolve(res)
    //     }).catch(err=>{
    //         rejects(err)
    //     })
    //  })
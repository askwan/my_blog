export default {
  namespace:'global',
  state:{
    user:{
      name:'askwan'
    }
  },
  subscriptions:{
    setup({dispatch,history}){
      history.listen(({pathname})=>{
        // console.log(pathname,'pathanem');
        if(pathname === '/home'){
          // console.log(window.__app,'app');
          // console.log(require('./homeUi').default);
          // window.__app.model(require('./homeUi').default)
        }
      })
    }
  },
  effects:{
    *getList(){

    }
  },
  reducers:{
    
  }
}
new Vue({
  el:'#vue-app',
  data: {
    name: 'Josh',
    job: 'Ninja'
  },
  methods:{
    greet:function(time){
      return 'Hey, ' + this.job + ' ' + this.name +'! ' + 'Good ' + time + ' man!'
    }
  }
});

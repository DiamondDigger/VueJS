new Vue({
  el:'#vue-app',
  data: {
    name: 'Josh',
    job: 'Ninja',
    kills: '0',
    website: 'https://thenetninja.co.uk',
    websiteTag:'<a href="https://thenetninja.co.uk">Net Ninja</a>'
  },
  methods:{
    greet:function(time){
      return 'Hey, ' + this.job + ' ' + this.name +'! ' + 'Good ' + time + ' man!'
    },
    add:function(){
      this.kills++;
    },
    subtract:function(){
      this.kills--;
    }
  }
});

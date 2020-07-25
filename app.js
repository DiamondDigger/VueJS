new Vue({
  el:'#vue-app',
  data: {
    name: 'Josh',
    job: 'Ninja',
    website: 'https://thenetninja.co.uk',
    websiteTag:'<a href="https://thenetninja.co.uk">The Net Ninja, once again</a>'
  },
  methods:{
    greet:function(time){
      return 'Hey, ' + this.job + ' ' + this.name +'! ' + 'Good ' + time + ' man!'
    }
  }
});

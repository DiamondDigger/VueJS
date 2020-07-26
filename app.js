new Vue({
  el:'#vue-app',
  data: {
    name: 'Josh',
    job: 'Ninja',
    kills: 0,
    weapon: '',
    skill: '',
    x: 0,
    y: 0,
    website: 'https://thenetninja.co.uk',
    websiteTag:'<a href="https://thenetninja.co.uk">Net Ninja</a>'
  },
  methods:{
    greet:function(time){
      return 'Hey, ' + this.job + ' ' + this.name +'! ' + 'Good ' + time + ' man!'
    },
    add:function(inc){
      this.kills += inc;
    },
    subtract:function(dec){
      this.kills -= dec;
    },
    upgradeXY:function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click:function(){
      alert('You clicked me');
    },
    logName: function(){
      console.log("You entered name");
    },
    logJob: function(){
      console.log("You entered job");
    }

  }
});

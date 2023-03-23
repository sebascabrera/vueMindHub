
const { createApp } = Vue

createApp({
  data() {
    return {
      firstArray: [],
      textOFSerch: '',
      checkChecked: [],
      inputOfSerch:[],
      categoryArr:[],
    }
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then(response => response.json())
      .then(data => {
        this.firstArray = data.events
        console.log(this.firstArray);
        this.categoryArr = [ ...new Set(this.firstArray.map(card => card.category))]
        console.log(this.categoryArr);
        })
  },methods:{

  },computed:{
    filterSerch: function readerSercher() {
      this.inputOfSerch = this.firstArray.filter(card => card.name.toLowerCase().includes(this.textOFSerch.toLowerCase().trim()))
      console.log(this.inputOfSerch);
     }
  }
}).mount('#app')

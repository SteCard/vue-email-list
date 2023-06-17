const { createApp } = Vue

  createApp({
    data() {
      return {
        mail: []
      }
    },
    mounted() {
        this.functionRandom()
    },
    methods: {
        functionRandom(){
            for (let i=0; i<= 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.mail.push(result.data.response);
                });
            };
        }, 
    },
  }).mount('#app')
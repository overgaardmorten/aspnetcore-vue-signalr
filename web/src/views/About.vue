<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button  @click="sendMessage('Hallo')" >Send</button>
    
    <div>
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src 
  import tradechimpsHub from '@/services/tradechimpshubservice'
  import { mapState } from 'vuex'


  export default {
    name: 'about',
    methods: {
      sendMessage: function(message) {
        tradechimpsHub.sendData('TheUser', message)
      }
    },
    computed: {
      ...mapState(['message'])
    },
    components: {
      
    }
  }
</script>

const App = {
  data() {
    return {
      name: '',
      servers: []
    }
  },
  async mounted() {
    const res = await fetch('/api/all')
    this.servers = await res.json()
  },
  methods: {
    async createServer() {
      const data = {
        name: this.name,
        status: 'created'
      }

      const res = await fetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      this.name = ''
      let newServers = await res.json()

      this.servers.push(newServers)
    },
    async remove(id) {
      const res = await fetch('/api/del/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const newServers = await res.json()

      let newServers2 = this.servers.filter(el => el.id != id)
      console.log(newServers2);
      this.servers = newServers2
    }
  }
}


Vue.createApp(App).mount('#app')
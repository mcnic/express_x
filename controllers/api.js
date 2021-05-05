let servers = [
  {
    id: 0,
    name: 'server 1',
    status: 'ok'
  },
  {
    id: 1,
    name: 'server 2',
    status: 'fail'
  }
]

getAll = (req, res) => {
  res.status(200).json(servers)
}

addServer = (req, res) => {
  // console.log(req.body);
  const newServer = {
    id: Date.now().toString(),
    ...req.body
  }
  servers.push(newServer)

  res.status(201).json(newServer)
}

delServer = (req, res) => {
  // console.log(req.params.id);
  const newServers = servers.filter(el => el.id != req.params.id)
  console.log(newServers);
  servers = newServers
  res.status(200).json({ result: 'ok' })
}

module.exports = {
  getAll,
  addServer,
  delServer
}
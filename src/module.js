console.log('test 2')

async function start() {
  return await Promise.resolve()
}

start().then(console.log)
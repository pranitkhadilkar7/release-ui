import path from 'path'
import fs from 'fs'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import { StaticRouter } from 'react-router-dom/server'

import App from '../src/App'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'

const app = express()

const port = process.env.SSR_PORT || 3005

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )
  const indexFile = path.resolve('./build/index.html')

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    )
  })
})

app.use(express.static('./build'))

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

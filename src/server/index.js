import app from './http'
import renderer from './renderer'
import createStore from './createStore'
import routes from '../share/routes'
import { matchRoutes } from 'react-router-config'

app.get('*', (req, res) => {
  const store = createStore()
  const promises = matchRoutes(routes, req.path).map(({route}) => {
    if (route.loadData) {
      return route.loadData(store)
    }
  })
  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})
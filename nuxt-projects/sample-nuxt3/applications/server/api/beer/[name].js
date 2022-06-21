import { useQuery } from 'h3'
import { parseURL } from 'ufo'

export default req => ({
  path: '/api/beer' + parseURL(req.url).pathname,
  query: useQuery(req)
})

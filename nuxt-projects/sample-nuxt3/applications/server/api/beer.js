export default defineEventHandler((event) => {
  const query = getQuery(event)
  return {
    path: '/api/beer' + event.node.req.url,
    query
  }
})

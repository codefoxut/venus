export default defineEventHandler((event) => {
    const query = useQuery(event)
    return { a: query.param1, b: query.param2 }
  })
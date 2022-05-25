import http from 'http'

export default function ({ route }) {
  return http.get('http://httpbin.org/post?a=5&b=6', {
    url: route.fullPath
  });
}
export default (req, res, next) => {
    console.log('Legacy middleware')
    next()
  }

export default req => `Hello world (${req.url.substr(1)}) (Generated from [name] at ${new Date().toGMTString()})`

export default (type,payloadCreator)=>{
  return (...args)=>{
    return {
      type,
      payload:payloadCreator ? payloadCreator(...args):undefined
    }
  }
}
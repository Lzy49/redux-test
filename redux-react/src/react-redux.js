let connect = (mapStateToProps,mapDispatchToProps)=>(_component)=>{
  const Proxy = ()=>{

    return (
      <_component {...mapStateToProps} {...mapDispatchToProps()}/>
    )
  }
  return Proxy;
}

const RenderIf = ({cnd = true, children, fb = null}) => {
  return (
      cnd ? children : fb
  )
};

export default RenderIf;

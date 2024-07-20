const Rel = ({ children, tp }) => {
  return (
    <span className={`${tp ? "text-accent/80" : "text-accent"}`}>
      {children}
    </span>
  )

}

export default Rel;
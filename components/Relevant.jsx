const Rel = ({ children, tp }) => {
  return (
    <span className={`${tp ? "text-accent/80" : "text-accent dark:text-writing-rel"}`}>
      {children}
    </span>
  )

}

export default Rel;
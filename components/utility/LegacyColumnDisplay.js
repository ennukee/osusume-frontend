const ColDisplay = (props) => (
  <div className="column-display">
    { props.children }
    <style jsx>{`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    `}</style>
  </div>
)

export default ColDisplay

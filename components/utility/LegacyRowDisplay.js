const RowDisplay = (props) => (
  <div className="row-display">
    { props.children }
    <style jsx>{`
      .row-display {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        justify-content: center;
      }
    `}</style>
  </div>
)

export default RowDisplay

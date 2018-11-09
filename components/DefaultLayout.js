import Header from './Header'

const Layout = (props) => (
  <div className="layout">
    <Header />
    <div id={`${props.pad_inner == "0" ? '' : 'page-content'}`}  className="layout">
      {props.children}
    </div>
    <style jsx>{`
      #page-content {
        padding: 5px;
      }

      div.layout {
        
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        height: 100vh;
        background-color: #ffc9c99c;
      }

      #__next {
        height: 100%;
      }
    `}</style>
  </div>
)

export default Layout

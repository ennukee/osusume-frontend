import Header from './Header'
import React from 'react'
import Fonts from './utility/Fonts'

class Layout extends React.Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    return (<div className="layoutL">
      <div id="header-container" className={`${this.props.incl_header == "no" ? "no-header" : ""}`}><Header /></div>
      <div className="layout">
        {this.props.children}
      </div>

      <style jsx>{`
        div.layout {
          padding-top: 45px;
        }

        #header-container.no-header {
          display: none;
        }
      `}</style>
      <style jsx global>{`
        body {
          font-family: 'Roboto';
          margin: 0;
          height: 100vh;
          background-color: rgba(255, 255, 0, 0.05);
        }

        #__next {
          height: 100%;
        }
      `}</style>
    </div>)
  }
}

// const Layout = (props) => (
//   <div className="layoutL">
//     <Header />
//     <div id={`${props.pad_inner == "0" ? '' : 'page-content'}`}  className="layout">
//       {props.children}
//     </div>
//     <style jsx>{`
//       #page-content {
//         padding: 5px;
//       }
//
//       div.layoutL {
//         padding-top: 45px;
//       }
//     `}</style>
//     <style jsx global>{`
//       body {
//         margin: 0;
//         height: 100vh;
//         background-color: #ffc9c99c;
//       }
//
//       #__next {
//         height: 100%;
//       }
//     `}</style>
//   </div>
// )

export default Layout

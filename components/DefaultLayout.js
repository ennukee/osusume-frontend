import Header from './Header'
import React from 'react'
import Fonts from './utility/Fonts'

class Layout extends React.Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    return (<div className="layoutL">
      <Header />
      <div className="layout">
        {this.props.children}
      </div>
      <style jsx>{`
        div.layoutL {
          padding-top: 45px;
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

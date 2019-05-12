import Header from './Header'
import React from 'react'
import Fonts from './utility/Fonts'

import { CSSTransition } from 'react-transition-group'

class Layout extends React.Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    return (<div className="layoutL">
      <div id="mobile-warning">Heads up! osusume is NOT currently implemented for mobile or otherwise small screens! Please avoid using osusume on such devices. Thank you!</div>

      <div id="header-container" className={`${this.props.incl_header == "no" ? "no-header" : ""}`}><Header /></div>
      <div className="layout">
        {this.props.children}
      </div>

      <style jsx>{`
        .warning-popup-appear {
          top: -100px;
        }

        .warning-popup-appear-done {
          top: 10px;
          transition: top 300ms;
        }

        div.layout {
          padding-top: 45px;
        }

        #header-container.no-header {
          display: none;
        }

        #mobile-warning {
          position: absolute;
          display: flex;
          align-items: center;
          text-align: center;

          z-index: 10000;

          top: -100px;
          left: 10px;
          width: 80%;
          max-width: 300px;
          height: auto;
          padding: 10px;
          background-color: rgba(157, 189, 217, 1);
          border-radius: 3px;
          border: 2px solid black;
          font-weight: bold;

          transition: top 300ms ease-out;
        }

        @media only screen and (max-width: 900px) {
          #mobile-warning {
            top: 10px;
            transition: top 300ms ease-out;
          }
        }
      `}</style>
      <style jsx global>{`
        body {
          font-family: 'Roboto';
          margin: 0;
          height: 100vh;
          background-color: rgba(255, 255, 255, 0.05);
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

import React from 'react'
import { Column } from 'simple-flexbox'

import InfoPanel from './InfoPanel'

class Recommendations extends React.Component {
  render() {
    return (
      <div id="recommendations">
        <Column alignItems='center'>
          <InfoPanel data={this.props.rec_data}/>
        </Column>
        <style jsx>{`
          #recommendations {
            width: 100%;
            height: 100vh;
          }
        `}</style>
      </div>
    )
  }
}

export default Recommendations

// Recommendations.getInitialProps = async function (context) {
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }

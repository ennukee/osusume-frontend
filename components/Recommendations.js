// let dummydata = require('../dummydata.json')
// console.log({ dummydata })
import fetch from 'isomorphic-unfetch'
import Layout from './DefaultLayout'
import RecItem from './RecItem'

import { Column } from 'simple-flexbox';

// tbd: take props.rec_data and make a new component <RecItem /> for each item in that list

const Recommendations = (props) => (
  <div id="recommendations">
    <Column>
      <div id="recommendations-title">Recommended for you</div>
      <div id="recommendations-data">
        {props.rec_data.map((rec) => (
          <RecItem id={rec.data.id} rec={rec} />
        ))}
      </div>
    </Column>
    <style jsx>{`
      #recommendations {
        width: 50%;
        height: 100%;
        background-color: #ff9c3caa;
      }

      #recommendations-data {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
      }

      #recommendations-data #rec-item {
        background-color: red;
      }
    `}</style>
  </div>
)



// Recommendations.getInitialProps = async function (context) {
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }

export default Recommendations

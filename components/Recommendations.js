import fetch from 'isomorphic-unfetch'
import Layout from './DefaultLayout'
import RecItem from './RecItem'

import { Column } from 'simple-flexbox';

const Recommendations = (props) => (
  <div id="recommendations">
    <Column alignItems='center'>
      <div id="recommendations-title">Recommended for you</div>
      <div id="recommendations-data">

        {props.rec_data.map((rec) => (
          <RecItem key={rec[0].mediaId} rec={rec[0]} custom_data={rec[1]}  />
        ))}
      </div>
    </Column>
    <style jsx>{`
      #recommendations {
        width: 50%;
        min-width: 580px;
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

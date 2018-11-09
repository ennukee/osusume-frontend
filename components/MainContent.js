import OtherInformation from '../components/OtherInformation'
import Recommendations from '../components/Recommendations'

import { Row } from 'simple-flexbox';

const MainContent = (props) => (
  <div id="main-content-container">
    <div id="main-content">
      <Row>
        <OtherInformation />
        <Recommendations rec_data={props.rec_data}/>
      </Row>
    </div>
    <style jsx>{`
      #main-content-container {
        height: 100%;
        width: 100%;
        min-width: 1050px;

        margin-top: 50px;
        display: flex;
        justify-content: center;
      }

      #main-content {
        width: 70%;
        height: 100%;
        background-color: #ff3c9c9c;
      }
    `}</style>
  </div>
)

export default MainContent

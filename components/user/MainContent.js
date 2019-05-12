import Recommendations from './Recommendations'

import { Row } from 'simple-flexbox';

const MainContent = (props) => (
  <div id="main-content-container">
    <div id="main-content">
      <Recommendations rec_data={props.rec_data}/>
    </div>
    <style jsx>{`
      #main-content-container {
        height: 100%;
        width: 100%;
        min-width: 1050px;

        display: flex;
        justify-content: center;

        background:
          linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
          ),
          url(https://i.imgur.com/6TBa1Kb.jpg) no-repeat center center;
        background-attachment: fixed;
        background-size: cover;
        height: 100%;

        animation: bg_animation 40s linear infinite;
      }

      #main-content {
        width: 1000px;
        height: 100%;
        background-color: rgba(255, 255, 255, 1);

        background: linear-gradient(to right, rgba(255,255,255,0) 1%, rgba(255,255,255,1) 3%, rgba(255,255,255,1) 97%, rgba(255,255,255,0) 100%);

        // border-width: thin medium 5px;
        // border-color: black;
        // border-style: solid;
      }

      @keyframes bg_animation {
        0% { background-position: 5% 0px; }
        50% { background-position: 95% 0px; }
        100% { background-position: 5% 0px; }
      }
    `}</style>
  </div>
)

export default MainContent

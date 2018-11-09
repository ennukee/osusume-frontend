import { Row } from 'simple-flexbox';

let REC_LIMIT = 9

const RecItem = (props) => (
  <div id="rec-item">
    <div id="title-header">
      { props.rec.data.title.userPreferred.substring(0,34)} {props.rec.data.title.userPreferred.length > 34 ? "(...)" : ""}
    </div>
    <div id="footer">
      some kind of content
    </div>
    <div id="episode-count">
      <Row>
        <div id="episode-num">{ props.rec.data.episodes }</div> <div id="episode-ep">ep{props.rec.data.episodes > 1 ? "s" : ""}</div>
      </Row>
    </div>
    <div id="avg-score">
      { props.rec.data.averageScore }
    </div>
    <style jsx>{`
      #rec-item {
        display: none;
        position:relative;

        width: 30%;
        min-width: 125px;
        height: 250px;
        border: 2px solid black;

        margin: 0 3px 15px 3px;
      }

      #rec-item:nth-child(-n+${REC_LIMIT}) {
        display: block;
      }

      #title-header {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.4);
      }

      #footer {
        background-color: rgba(255, 255, 255, 0.4);
        height: 15px;
        width: 100%;
        float: down;

        position:absolute;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        opacity: 0;
        -webkit-transition: opacity 0.75s, height 0.4s;
        transition: opacity 0.75s, height 0.4s;
      }

      #rec-item:hover #footer {
        height: 60px;
        opacity: 1;
      }
    `}</style>
  </div>
)

export default RecItem

import { Row } from 'simple-flexbox';

let REC_LIMIT = 9

const RecItem = (props) => (
  <div id="rec-item" key={props.rec.mediaId}>
    <div id="title-header">
      { props.rec.title.userPreferred.substring(0,32)} {props.rec.title.userPreferred.length > 32 ? "(...)" : ""}
    </div>
    <div id="footer">
      <div id="divisor"></div>
      <div id="featured-label">Featured</div>
      <div id="featured-section">
        {props.custom_data.score.BEST_QUALITIES.slice(0,4).map((item) => (
          <div id="featured-item" key={item.name}>
            <Row>
              <div className="icon" id={`icon-${item.type}`}></div>
              <div id={`item-label${(item.name || "").length > 11 ? '-small' : ''}`}>
                {(item.name || "").substring(0,13)}{(item.name || "").length > 13 ? "..." : ""}
              </div>
            </Row>
          </div>
        ))}
      </div>
      <div id="score-section">
        <div id="average" className="score-element">
          <div id="label">AVG</div>
          <div id="value">{ props.rec.averageScore }</div>
        </div>
        <div id="personal" className="score-element">
          <div id="label">YOU</div>
          <div id="value">{ Math.round(props.custom_data.score.SCORE_PREDICT * 10) }</div>
        </div>
      </div>
    </div>
    <style jsx>{`
      #score-section {
        width: 100%;
        height: 100%;
      }

      .score-element #label {
        font-weight: 100;
        margin-bottom: -10px;
        font-size: 16px;
      }

      .score-element #value {
        font-size: 35px;
        font-weight: 900;
      }

      .score-element {
        margin-right: 3px;
        margin-bottom: 0px;

        position: absolute;
        bottom: 5px;
        right: 5px;
      }

      @-moz-document url-prefix() {
        .score-element {
           margin-bottom: 5px;
        }

        .score-element #label {
          font-weight: 100;
          margin-bottom: -5px;
          font-size: 16px;
        }
      }

      #featured-label {
        position: absolute;
        bottom: 50px;
        left: 7px;
        font-weight: 900;
        font-size: 14px;
      }

      #divisor {
        position: absolute;
        bottom: 0;
        right: 63px;
        width: 2px;
        height: 70px;
        background-image: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,255), rgba(255,255,255,0))
      }



      #featured-item {
        width: 200px;
        position: absolute;
        bottom: 0;

        animation-delay: 0.5s;
      }

      #featured-item:nth-child(1) {
        animation: featured1 9s infinite;
      }

      #featured-item:nth-child(2) {
        animation: featured2 9s infinite;
      }

      #featured-item:nth-child(3) {
        animation: featured3 9s infinite;
      }

      #featured-item:nth-child(4) {
        animation: featured4 9s infinite;
      }

      .icon {
        width: 15px;
        height: 15px;
        margin: 2px;

        filter: invert(100%);
        background-size: cover;
      }

      #icon-STAFF {
        background-image: url("http://104.236.44.148:8000/icon-STAFF.png");
      }

      #icon-GENRE {
        background-image: url('http://104.236.44.148:8000/icon-GENRE.png');
      }

      #icon-STUDIO {
        background-image: url('http://104.236.44.148:8000/icon-STUDIO.png');
      }

      #icon-TAG {
        background-image: url('http://104.236.44.148:8000/icon-TAG.png');
      }

      #item-label {
        font-size: 12px;
      }

      #item-label-small {
        font-size: 10px;
      }

      #featured-section {
        position: absolute;
        bottom: 0;
        left: 5%;
      }



      @keyframes average-score {
        0% { opacity: 1; }
        38% { opacity: 1; }
        44% { opacity: 0; }
        94% { opacity: 0; }
        100% { opacity: 1; }
      }

      @keyframes personal-score {
        0% { opacity: 0; }
        44% { opacity: 0; }
        50% { opacity: 1; }
        88% { opacity: 1; }
        94% { opacity: 0; }
        100% { opacity: 0; }
      }

      #rec-item * div#personal.score-element {
        animation: personal-score 4.5s infinite;
      }

      #rec-item * div#average.score-element {
        animation: average-score 4.5s infinite;
      }



      #rec-item {
        display: none;
        position:relative;

        background-image: url(${props.rec.coverImage.large || props.rec.coverImage.extraLarge});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;


        width: 30%;
        min-width: 125px;
        height: 250px;
        border: 3px solid white;
        border-radius: 10px;

        margin: 0 3px 15px 3px;

        transition: 1s;
      }

      #rec-item:hover {
        filter: grayscale(0.4) hue-rotate(30deg);
      }

      #rec-item:nth-child(-n+${REC_LIMIT}) {
        display: block;
      }

      #title-header {
        display: flex;
        align-items: top;
        justify-content: center;
        text-align: center;

        padding: 8px 8px 0px 8px;
        height: 60px;
        border-radius: 10px 10px 0px 0px;

        background-image: linear-gradient(rgba(0,0,0,255), rgba(0,0,0,0));
        color: white;
        font-weight: bold;
      }

      #footer {
        // background-color: rgba(255, 255, 255, 0.4);
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,255));
        color: white;
        height: 15px;
        width: 100%;
        float: down;

        font-family: 'Noto Sans SC', sans-serif;

        position:absolute;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        border-radius: 0 0 10px 10px;

        opacity: 0;
        -webkit-transition: opacity 0.75s, height 0.4s;
        transition: opacity 0.75s, height 0.4s;
      }

      #rec-item:hover #footer {
        height: 150px;
        opacity: 1;
      }

      @keyframes featured1 {
        0%, 20%, 100% {
          bottom: 30px;
          opacity: 1;
          font-weight: bold;
        }
        25%, 45% {
          bottom: 15px;
          opacity: 0.5;
          font-weight: normal;
        }
        50% {
          bottom: 0px;
          opacity: 0;
          font-weight: normal;
        }
        51%, 98% {
          bottom: 30px;
          opacity: 0;
          font-weight: normal;
        }
      }

      @keyframes featured2 {
        0%, 20%, 100% {
          bottom: 15px;
          opacity: 0.5;
          font-weight: normal;
        }
        25% {
          bottom: 0px;
          opacity: 0;
          font-weight: normal;
        }
        26%, 73% {
          bottom: 30px;
          opacity: 0;
          font-weight: normal;
        }
        75%, 95% {
          bottom: 30px;
          opacity: 1;
          font-weight: bold;
        }
      }

      @keyframes featured3 {
        75%, 95% {
          bottom: 15px;
          opacity: 0.5;
          font-weight: normal;
        }
        0%, 100% {
          bottom: 0px;
          opacity: 0;
          font-weight: normal;
        }
        1%, 48% {
          bottom: 30px;
          opacity: 0;
          font-weight: normal;
        }
        50%, 70% {
          bottom: 30px;
          opacity: 1;
          font-weight: bold;
        }
      }

      @keyframes featured4 {
        25%, 45% {
          bottom: 30px;
          opacity: 1;
          font-weight: bold;
        }
        50%, 70% {
          bottom: 15px;
          opacity: 0.5;
          font-weight: normal;
        }
        75% {
          bottom: 0px;
          opacity: 0;
          font-weight: normal;
        }
        0%, 23%, 76%, 100% {
          bottom: 30px;
          opacity: 0;
          font-weight: normal;
        }
      }
    `}</style>
  </div>
)

export default RecItem

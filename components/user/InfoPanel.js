import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Row } from 'simple-flexbox'
import { Textfit } from 'react-textfit'
import Pallete from 'react-palette'

class Recommendations extends React.Component {
  constructor(props) {
    super(props);

    this.ITEM_LIMIT = 5;
    this.state = {
      /*
        Mapping the props data provided to an id -> data object list instead
        so that it's easier to access dynamically with just an id
      */
      byId: props.data.slice(0,this.ITEM_LIMIT).reduce(function(acc, cv) {
        acc[cv[0].id] = cv;
        return acc;
      }, {}),
      idActive: props.data[0][0].id
    }
  }

  /*
    Helper function so that I don't have to keep writing
    "this.state.byId[this.state.idActive]" when coding the
    dynamic content portion of the page
  */
  byId = () => {
    return this.state.byId[this.state.idActive];
  }

  humanize = (str) => {
    /* https://stackoverflow.com/questions/28336104/humanize-a-string-in-javascript */
    return str.replace(/^[\s_]+|[\s_]+$/g, '').replace(/[_\s]+/g, ' ').replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
  }

  setPrimaryAnime = (e) => {
    /* Hacky logic to move element ids around to make simple cover image
      movement via changing CSS Flexbox order attributes */
    let clicked = e.target.parentElement.parentElement.parentElement;
    let clicked_id = e.target.parentElement.parentElement;

    //console.log(clicked_id.dataset.cdicd);

    //$('#prio0').id = clicked.id;
    let old = document.getElementById("prio0").id = clicked.id;
    clicked.id = "prio0";

    this.setState({
      idActive: clicked_id.id
    });
  }

  render() {
    return (
      <div style={{position: "relative"}}>
        <div id="banner-data">
          {this.props.data.slice(0,this.ITEM_LIMIT).map((rec, index) => (
            <div id={`prio${index}`} style={{zIndex: "2"}}>
              <div id={`${rec[0].id}`} className={`cover-banner-div`} data-cdicd="345">
                <div id="cover-banner">
                  <img src={rec[0].coverImage.extraLarge} onClick={(e) => {this.setPrimaryAnime(e)}}/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="divisor" style={{zIndex: "1"}}></div>
        {/*
          TODO: Move this palette styling to cover the lower portion of the
          page(?) OR make it the coloring of the explanation bubble on the left

          <Pallete image={this.byId()[0].coverImage.extraLarge}>
            {palette => (
              <div id="banner-bg" style={{zIndex: "1", opacity: 0.8, backgroundColor: palette.lightVibrant}}></div>
            )}
          </Pallete>
        */}
        <div id="banner-bg" style={
          {
            background: "linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.5)), url("+this.byId()[0].bannerImage+") no-repeat center center"
          }
        }></div>
        <div id="recommendation-data" style={{position: 'relative'}}>
          <div style={{zIndex: "2"}}>
            <div id="score-section" className="data-bit">
              <div id="predicted" className="label-pairs">
                <div className="label">YOU</div>
                <div id="score-predict" className="label-value">
                  {/* Get nik to make this a 2 digit smooth # by default*/}
                  {Math.round(this.byId()[1].score.SCORE_PREDICT * 10)}
                </div>
              </div>
              <div id="average"  className="label-pairs">
                <div className="label">AVG</div>
                <div id="score-avg" className="label-value">
                  {Math.round(this.byId()[0].averageScore)}
                </div>
              </div>
            </div>
            <div id="title" className="data-bit">
              <Textfit mode="multi" style={{height: "80px", fontWeight: "800", lineHeight: "2ex"}}>
                {this.byId()[0].title.userPreferred.toUpperCase()}
              </Textfit>
            </div>
            <div id="studio" className="data-bit">
              <Textfit style={{height: "25px", fontFamily: "Open Sans Condensed"}}>
                {/* Add a link to their anilist page (its in the JSON) */}
                {this.byId()[0].studios.edges[0].node.name}{ this.byId()[0].studios.edges[0].node.name.slice(-1) == 's' ? `'` : `'s`}
              </Textfit>
            </div>
            <div id="featured-section" className="data-bit">
              <div id="featured-title">Featured</div>
              {this.byId()[1].score.BEST_QUALITIES.slice(0,4).map((item) => (
                <div id="featured-item" key={item.name}>
                  <Row>
                    <div className="icon" id={`icon-${item.type}`}></div>
                    <div className="item-label" id={`item-label${(item.name || "").length > 11 ? '-small' : ''}`}>
                      {(item.name || "").substring(0,13)}{(item.name || "").length > 13 ? "..." : ""}
                    </div>
                  </Row>
                </div>
              ))}
            </div>
            <div id="info-section" className="data-bit" dir="rtl">
              <div id="info-title">Details</div>
              <ul>
                <li><span>{this.byId()[0].endDate ? "Finished" : "On-going"}</span></li>
                <li><span>{this.byId()[0].episodes}</span> Episodes</li>
                <li>Released in <span>{this.byId()[0].startDate.year}</span></li>
                <li>Source: <span>{this.byId()[0].source.toUpperCase()}</span></li>
                <li><span>{this.humanize(this.byId()[0].season)}</span> Season</li>
              </ul>
            </div>
          </div>
        </div>

        <style jsx>{`
          * {
            font-family: 'Open Sans';
          }

          #banner-bg {
            z-index: 1;
            opacity: 0.8;
            background-size: cover;
            background-attachment: fixed;

            position:absolute;
            top: 0;

            width: 100%;
            height: 235px;

            padding: 0 20px 0px 20px;
            margin-left: -20px;

            animation: bg_animation 80s ease-in-out infinite;
          }

          @keyframes bg_animation {
            0% { background-position: 5% 0px; }
            50% { background-position: 95% 0px; }
            100% { background-position: 5% 0px; }
          }

          #info-section {
            top: -80px;
            right: 150px;
          }

          #info-section #info-title {
            font-size: 30px;
            margin-bottom: -18px;
            margin-right: 20px;
            font-weight: 600;
          }

          ul li, ul li * {
            font-size: 18px;
            font-family: 'Open Sans Condensed';
          }

          ul li span {
            font-weight: bold;
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

          #score-section #predicted.label-pairs {
            animation: personal-score 4.5s infinite;
          }

          #score-section #average.label-pairs {
            animation: average-score 4.5s infinite;
          }

          .label-pairs {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          #score-section div .label {
            font-size: 52px;
            line-height: 50px;
            font-weight: 800;
          }

          #score-section div .label-value {
            top: 30px;
            font-size: 150px;
            line-height: 150px;
            font-family: 'Open Sans Condensed';
            font-weight: 700;
          }

          #score-section {
            top: -80px;
            right: 80px;
          }

          #score-section, #score-section div {
            position: absolute;
          }

          .divisor {
            position: absolute;
            top: 235px;

            width: 100%;
            padding: 0 20px 0px 20px;
            margin-left: -20px;
            left: 0px;

            height: 3px;
            //background-image: linear-gradient(-90deg, rgba(0,0,0,0) 1%, rgba(0,0,0,255) 5%, rgba(0,0,0,255) 95%, rgba(0,0,0,0) 100%)
            background-color: black;
          }

          #featured-title {
            font-size: 30px;
            font-weight: 600;
          }

          #featured-item {
            margin-left: 15px;
          }

          .item-label {
            font-family: 'Open Sans Condensed' !important;
            font-size: 20px;
          }

          #featured-section {
            top: -80px;
            left: 15px;
          }

          #studio {
            width: 213.9px;

            top: 3px;
            left: 50%;
            margin-left: -112px;

            background-color: rgba(0,0,0,0);
            text-align: center;
          }

          #title {
            width: 213.9px;

            top: 25px;
            left: 50%;
            margin-left: -112px;

            background-color: rgba(0,0,0,0);
            text-align: center;
          }

          .data-bit {
            position: absolute;
          }

          .icon {
            width: 26px;
            height: 26px;
            margin: 2px;

            filter: invert(100%);
            background-size: cover;

            background-color: red;
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

          .cover-banner-div {
            margin: 10px;
            border: 3px solid black;
          }

          #prio0 { order: 3; }
          #prio0 div img, #prio0 div  {
            width: 213.9px;
            height: 299.7px;
          }
          #prio1 { order: 2; }
          #prio2 { order: 4; }
          #prio3 { order: 1; }
          #prio4 { order: 5; }

          #cover-banner img, #cover-banner {
            width: 140px;
            height: 197px;
          }

          #banner-data {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
        `}</style>
      </div>

    )
  }

}

export default Recommendations

// {this.props.data.slice(0,this.ITEM_LIMIT).map((rec, index) => (
//   /* NOTE: This component overwrites classes of direct children,
//     which breaks how the current transition (and swapping) works
//
//     Need to figure out some way to make initial initialization of
//     visibility node work and it should all work out
//
//     OR... just figure out a different way to operate it entirely */
//   <CSSTransition
//     in={true}
//     appear={true}
//     timeout={2000}
//     classNames="data"
//   >
//     <div id={`data-id${rec[0].id}`} style={{position: 'absolute', visibility: 'hidden', opacity: 0}} className={`${index == 0 ? "visible" : ""}`}>
//       <div id="score-predict" style={{top: 20}}>
//         {rec[1].score.SCORE_PREDICT}
//       </div>
//       <div id="title">
//         {rec[0].title.userPreferred}
//       </div>
//     </div>
//   </CSSTransition>
// ))}

import Layout from '../components/DefaultLayout'
import UsernameInput from '../components/UsernameInput'

import { Row } from 'simple-flexbox';
import { Column } from 'simple-flexbox';

const Index = () => (
  <div id="index">
    <Layout incl_header="no">
      <Column alignItems="center">
        <div id="logo"></div>
        <div id="username-input">
          <UsernameInput />
        </div>
        <div className="divisor" id="mid-page-divisor"></div>
        <div id="about-me">
          <div id="about-title">What is osusume?</div>
          <div id="about-desc">osusume serves as a intensive anime/manga analysis system that aims to recommend content to its userbase based on factors further than just "other watchers of this anime liked this"</div>
          <div id="about-images">
            <div id="about-images-1" className="about-image"></div>
            <div id="about-images-2" className="about-image"></div>
            <div id="about-images-3" className="about-image"></div>
          </div>
        </div>
      </Column>
    </Layout>

  <style jsx>{`
    .about-image {
      width: 200px;
      height: 200px;
      background-color: rgba(255, 255, 255, 0.6);

      border: solid 3px black;
      border-radius: 3px;
    }

    #about-images {
      display: flex;
      width: 700px;
      justify-content: space-evenly;
    }

    #about-desc {
      text-align: center;
      width: 500px;
      margin-bottom: 20px;
    }

    #about-title {
      font-size: 60px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    #about-me {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    #mid-page-divisor {
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .divisor {
      width: 70%;
      height: 3px;
      background-image: linear-gradient(-90deg, rgba(0,0,0,0), rgba(0,0,0,255), rgba(0,0,0,0))
    }

    #logo {
      width: 490px;
      height: 170px;
      background: url(https://i.imgur.com/wD8rCsA.png) no-repeat center center;
      background-size: contain;
      margin-bottom: 20px;
    }

    #index {
      padding-top: 70px;

      background:
        linear-gradient(
          rgba(255, 255, 255, 0.55),
          rgba(255, 255, 255, 0.55)
        ),
        url(https://i.imgur.com/PnzQAqz.jpg) no-repeat center center;
      background-attachment: fixed;
      background-size: cover;
      height: 100%;

      animation: bg_animation 100s linear infinite;
    }

    @keyframes bg_animation {
      0% { background-position: 5% 0px; }
      50% { background-position: 95% 0px; }
      100% { background-position: 5% 0px; }
    }
  `}</style>

  </div>
)

export default Index

import Link from 'next/link'

const UsernameInput = () => (
  <div id="uinput-cont">
    <div>
      <Link href="/login">
        <div id="login-button" className="link">Click to login with Anilist</div>
      </Link>
    </div>
    <div>
      <Link href="/mal-help">
        <div id="no-anilist" className="link">Have a MyAnimeList but not Anilist? Click here!</div>
      </Link>
    </div>
    <style jsx>{`
      #uinput-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      #uinput-cont div {
        padding-bottom: 5px;
      }

      #login-button {
        font-family: 'Roboto';
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 290px;
        height: 40px;

        color: black;
        font-size: 16px;
        background-color: rgba(255, 255, 255, 0.3);

        border-radius: 3px;
        border: solid 3px black;

        animation: 0.75s;
      }

      #no-anilist {
        font-size: 14px;
        font-weight: bold;
      }

      #no-anilist:hover {
        cursor: pointer;
        color: rgba(25, 25, 200, 1);
      }

      #login-button:hover {
        cursor: pointer;
        background-color: rgba(222, 222, 222, 0.3);
      }

      #login-button:active {
        background-color: rgba(167, 167, 167, 0.3)
      }
    `}</style>
  </div>
)

export default UsernameInput

import {withRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/DefaultLayout'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/user/MainContent'

import { Row } from 'simple-flexbox';

const User = withRouter((props) => (
  <Layout pad_inner="0">
    <MainContent rec_data={props.rec_data}/>
  </Layout>
))

// access token: { props.router.query.access_token }

User.getInitialProps = async function(context) {
  const res = await fetch(`http://localhost:8888/dummydata`)
  const dummydata = await res.json()

  // var a = { rec_data: dummydata };
  // var rc = { rec_data: a.rec_data };
  // rc.rec_data.map((e) => (
  //   console.log(e[0].title)
  // ));
  // dummydata.map((e) => (
  //   console.log(e[0].title)
  // ));

  return { rec_data: dummydata }
}


export default User

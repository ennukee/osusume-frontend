let express = require('express')
let request = require('request')
let querystring = require('querystring')

let dummydata = require('./dummydata.json')

let app = express()

let redirect_uri =
  process.env.REDIRECT_URI ||
  'http://localhost:8888/callback'

app.get('/dummydata', function(req, res) {
  console.log('/dummydata received')
  res.sendFile("C:/Users/Dylan/Documents/GitHub/osusume-frontend/dummydata.json")
})

app.get('/login', function(req, res) {
  res.redirect('https://anilist.co/api/v2/oauth/authorize?' +
    querystring.stringify({
      response_type: 'code',
      redirect_uri: redirect_uri,
      client_id: process.env.ANILIST_CLIENT_ID,
    }))
})

app.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    uri: 'https://anilist.co/api/v2/oauth/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    json: {
      'grant_type': 'authorization_code',
      'client_id': process.env.ANILIST_CLIENT_ID,
      'client_secret': process.env.ANILIST_CLIENT_SECRET,
      'redirect_uri': redirect_uri,
      'code': code,
    }
  }
  request.post(authOptions, function(error, response, body) {
    if (error) {
      console.log(error)
    }
    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000/user'
    res.redirect(uri + '?access_token=' + access_token)
  })
})

let port = process.env.PORT || 8888
console.log(`Callback server listening on port ${port}.`)
app.listen(port)

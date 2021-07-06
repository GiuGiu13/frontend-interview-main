let express = require('express')
let path = require('path')
let logger = require('morgan')

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

require('./app/routes')(app)

app.use(function(err, req, res, next) { // error handler
  console.log(err)
})

app.listen(8080)

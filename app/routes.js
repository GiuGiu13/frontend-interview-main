module.exports = function(app, csrfProtection, io) {

    app.get('/',async function (req, res) {
        res.render('index.ejs', {
            name: 'Ben',
            title: 'Home Page'
        })
    })

    app.get('/cats',async function (req, res) {
        res.render('catsPage.jsx', {
            title: 'Cat Pictures!'
        })
    })

}
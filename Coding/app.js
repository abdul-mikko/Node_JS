const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', "ejs");
app.set('views', "views")

const adminRoutes = require('./Routes/admin')
const userRoutes = require('./Routes/shop')


app.use('/admin', adminRoutes.routes);
app.use(userRoutes);

app.use((req, res) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
})

const port = 4000;
app.listen(port, () => {
    console.log('Server Started at Port:', port);
});
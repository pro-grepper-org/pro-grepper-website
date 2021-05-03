const express = require('express');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const connectDB = require('./config/db')

dotenv.config({
    path: "./config/config.env"
})

// database connection
connectDB()

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/grep', requireAuth, (req, res) => res.render('grep'));
app.get('/aboutus', (req, res) => res.render('aboutus'));
app.use(authRoutes);



app.listen(port, () => {
    console.log('server is running on port ' + port);
})
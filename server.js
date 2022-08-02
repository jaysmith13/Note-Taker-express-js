const express = require('express');
const apiRoutes = require ('./routes/apiRoutes');
const htmlRoutes = require ('./routes/htmlRoutes');
const port = process.env.port || 3001;

const app = express();

//api routes
app.use('/api', apiRoutes);
app.use('/',htmlRoutes);
app.listen(port,() => {
    console.log('API server live on port ${port}');
});

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static(public));
app.use(express.json());
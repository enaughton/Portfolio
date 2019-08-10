const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const { projects } = require('./data.json');


const projectsRoute = require('./project.js');


const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.use('/projects', projectsRoute);

app.get('/' , (req, res) => {
	res.render('index',  {
        heading: 'Hi, my name is Emmett!',
        description: 'Discipline Equals Freedom - Jocko Wilink',
        projects
        
    });
})

app.get('/about', (req, res) => {
	res.render('about')
})

app.get('/project', (req, res) => {
	res.render('project', projectsRoute )
	})



	


// init
app.listen(port, () => {
    console.log(`App running at port :${port}`);
});
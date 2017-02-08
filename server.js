var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles = {
     'article-one': {
        
        title: 'Article-One | Arjun',
        heading: 'Article one',
        date: 'Feb 5 2017',
        content:`
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>
                    
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>
                    
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>
                    
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>`
    },
     'article-two': {
         title:'Article-Two | Arjun',
        heading:'Article two',
        date:'Feb 5 2017',
        content:`
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>
                    
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>
                    
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>
                    
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>`
    },
     'article-three': {
         title:'Article-Three | Arjun',
        heading:'Article three',
        date:'Feb 5 2017',
        content:`
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>
                    
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>
                    
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>
                    
                    <p> This is some content This is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some contentThis is some content
                    </p>`
    },
};

function createTemplate(data) {
        var title = data.title;
        var heading = data.heading;
        var date = data.date;
        var content = data.content;
        var HTMLTemplate= `
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" conten="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
            
        </html>
`;
    return HTMLTemplate;
}



app.get('/:articleName',function(req,res) {
    //aricleName == article-one // functionality of express // :____ will become a variable
    //articles[articleName]=={} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
    
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

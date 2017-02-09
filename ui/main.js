console.log('Loaded!');

var element = document.getElementById('main-text');

//element.innerHTML = 'New Content';

var image = document.getElementById('madi');

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    image.style.marginLeft = marginLeft + 'px';
}



image.onclick = function() {
  var interval = setInterval(moveRight,50);
  
  };

var button = document.getElementById('counter');
button.onclick = function() {
    
    var request = new XMLHttpRequest(); // Create a request object
    
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
   
    //make the request
    request.open('GET', 'http://arjungulzzz.imad.hasura-app.io/counter', true);
    request.send(null);
};




var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var request = new XMLHttpRequest(); // Create a request object
    
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200){
                    //capture a list of names and render it in html
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                    for( var i =0; i<names.length; i++){
                    list = list + '<li>' + names[i] + '</li>';
                    }
                    var ul = document.getElementById('namelist');
                    ul.innerHTML = list;
            }
        }
        //not done yet
    };
   
    //make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://arjungulzzz.imad.hasura-app.io/submit-name?name='+ name, true);
    request.send(null);
    
    //make a request to the server and send the name
    
    
};

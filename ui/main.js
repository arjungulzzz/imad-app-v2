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
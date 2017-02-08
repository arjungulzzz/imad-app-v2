console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New Content';

var image = document.getElementById('madi');

image.onclick = function() {
    
  image.style.marginLeft = '100px';  
};
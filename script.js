document.getElementById('bt').addEventListener('click', function() {
    document.getElementById('msg').style.display = 'block';
});

var zoom = document.getElementById('zoom');
zoom.addEventListener('mouseover', function() {
    zoom.style.fontSize = '30px'; 
});
zoom.addEventListener('mouseout', function() {
    zoom.style.fontSize = '20px'; 
});

var zoom = document.getElementById('zoom');
zoom.addEventListener('mouseover', function() {
    zoom.style.color = 'red';
});
zoom.addEventListener('mouseout', function() {
    zoom.style.color = 'yellow' ;
});
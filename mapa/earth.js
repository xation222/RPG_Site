        
        document.addEventListener('mousemove', function(e) {  //seguir o mouse
            let body = document.querySelector('body');
            let circle = document.getElementById('circle');
            let left = e.offsetX;
            let top = e.offsetY;
            circle.style.left = left + 'px';
            circle.style.top = top + 'px';
        })
        
        // document.body.style.cursor = 'none';  //esconder cursor do mouse
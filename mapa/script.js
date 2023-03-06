        // variável de colisão, evita que mais de um box abra ao mesmo tempo
    var colisao = false
        //esconder cursor do mouse
    document.body.style.cursor = 'none';  
        // movimento de seguir o mouse
    var device = false;
    document.addEventListener('mousemove', function(e) {   
    if (device == false) {
        var circle = document.getElementById('circle');
        let left = e.pageX;
        let top = e.pageY;
        circle.style.left = left - 40  + 'px';
        circle.style.top = top - 40 + 'px';
    }
        // declaração de objetos
    var ob1 = document.getElementById('circleIntern').getBoundingClientRect();
    var objeto1 = document.getElementById('circle');
    var ob2 = document.querySelector('#p2').getBoundingClientRect();
    var ob2t = document.querySelector('#p2t').getBoundingClientRect();
    var objeto2texto = document.querySelector('#p2t');
    var ob3 = document.querySelector('#p3').getBoundingClientRect();
    var ob3t = document.querySelector('#p3t').getBoundingClientRect();
    var objeto3texto = document.querySelector('#p3t');
    var ob4 = document.querySelector('#p4').getBoundingClientRect();
    var ob4t = document.querySelector('#p4t').getBoundingClientRect();
    var objeto4texto = document.querySelector('#p4t');
    var ob5 = document.querySelector('#p5').getBoundingClientRect();
    var ob5t = document.querySelector('#p5t').getBoundingClientRect();
    var objeto5texto = document.querySelector('#p5t');
    var ob6 = document.querySelector('#p6').getBoundingClientRect();
    var ob6t = document.querySelector('#p6t').getBoundingClientRect();
    var objeto6texto = document.querySelector('#p6t');
    var ob7 = document.querySelector('#p7').getBoundingClientRect();
    var ob7t = document.querySelector('#p7t').getBoundingClientRect();
    var objeto7texto = document.querySelector('#p7t');
    var ob8 = document.querySelector('#p8').getBoundingClientRect();
    var ob8t = document.querySelector('#p8t').getBoundingClientRect();
    var objeto8texto = document.querySelector('#p8t');
    var ob9 = document.querySelector('#p9').getBoundingClientRect();
    var ob9t = document.querySelector('#p9t').getBoundingClientRect();
    var objeto9texto = document.querySelector('#p9t');
    var ob10 = document.querySelector('#p10').getBoundingClientRect();
    var ob10t = document.querySelector('#p10t').getBoundingClientRect();
    var objeto10texto = document.querySelector('#p10t');
    var ob11 = document.querySelector('#p11').getBoundingClientRect();
    var ob11t = document.querySelector('#p11t').getBoundingClientRect();
    var objeto11texto = document.querySelector('#p11t');

        // declaração de pontos
    var pontos_ob1 = [  {x:ob1.left, y:ob1.top}, 
                        {x:ob1.left+ob1.width, y:ob1.top}, 
                        {x:ob1.left+ob1.width, y:ob1.top+ob1.height}, 
                        {x:ob1.left, y:ob1.top+ob1.height}];
    var pontos_ob2 = [  {x:ob2.left, y:ob2.top}, 
                        {x:ob2.left+ob2.width, y:ob2.top}, 
                        {x:ob2.left+ob2.width, y:ob2.top+ob2.height}, 
                        {x:ob2.left, y:ob2.top+ob2.height}];
    var pontos_ob2t = [ {x:ob2t.left, y:ob2t.top}, 
                        {x:ob2t.left+ob2t.width, y:ob2t.top}, 
                        {x:ob2t.left+ob2t.width, y:ob2t.top+ob2t.height}, 
                        {x:ob2t.left, y:ob2t.top+ob2t.height}];
    var pontos_ob3 = [  {x:ob3.left, y:ob3.top}, 
                        {x:ob3.left+ob3.width, y:ob3.top}, 
                        {x:ob3.left+ob3.width, y:ob3.top+ob3.height}, 
                        {x:ob3.left, y:ob3.top+ob3.height}];
    var pontos_ob3t = [ {x:ob3t.left, y:ob3t.top}, 
                        {x:ob3t.left+ob3t.width, y:ob3t.top}, 
                        {x:ob3t.left+ob3t.width, y:ob3t.top+ob3t.height}, 
                        {x:ob3t.left, y:ob3t.top+ob3t.height}];
    var pontos_ob4 = [  {x:ob4.left, y:ob4.top}, 
                        {x:ob4.left+ob4.width, y:ob4.top}, 
                        {x:ob4.left+ob4.width, y:ob4.top+ob4.height}, 
                        {x:ob4.left, y:ob4.top+ob4.height}];
    var pontos_ob5 = [  {x:ob5.left, y:ob5.top}, 
                        {x:ob5.left+ob5.width, y:ob5.top}, 
                        {x:ob5.left+ob5.width, y:ob5.top+ob5.height}, 
                        {x:ob5.left, y:ob5.top+ob5.height}];
    var pontos_ob6 = [  {x:ob6.left, y:ob6.top}, 
                        {x:ob6.left+ob6.width, y:ob6.top}, 
                        {x:ob6.left+ob6.width, y:ob6.top+ob6.height}, 
                        {x:ob6.left, y:ob6.top+ob6.height}];
    var pontos_ob7 = [  {x:ob7.left, y:ob7.top}, 
                        {x:ob7.left+ob7.width, y:ob7.top}, 
                        {x:ob7.left+ob7.width, y:ob7.top+ob7.height}, 
                        {x:ob7.left, y:ob7.top+ob7.height}];
    var pontos_ob8 = [  {x:ob8.left, y:ob8.top}, 
                        {x:ob8.left+ob8.width, y:ob8.top}, 
                        {x:ob8.left+ob8.width, y:ob8.top+ob8.height}, 
                        {x:ob8.left, y:ob8.top+ob8.height}];
    var pontos_ob9 = [  {x:ob9.left, y:ob9.top}, 
                        {x:ob9.left+ob9.width, y:ob9.top}, 
                        {x:ob9.left+ob9.width, y:ob9.top+ob9.height}, 
                        {x:ob9.left, y:ob9.top+ob9.height}];
    var pontos_ob10 = [ {x:ob10.left, y:ob10.top}, 
                        {x:ob10.left+ob10.width, y:ob10.top}, 
                        {x:ob10.left+ob10.width, y:ob10.top+ob10.height}, 
                        {x:ob10.left, y:ob10.top+ob10.height}];
    var pontos_ob11 = [ {x:ob11.left, y:ob11.top}, 
                        {x:ob11.left+ob11.width, y:ob11.top}, 
                        {x:ob11.left+ob11.width, y:ob11.top+ob11.height}, 
                        {x:ob11.left, y:ob11.top+ob11.height}];
    var pontos_ob4t = [ {x:ob4t.left, y:ob4t.top}, 
                        {x:ob4t.left+ob4t.width, y:ob4t.top}, 
                        {x:ob4t.left+ob4t.width, y:ob4t.top+ob4t.height}, 
                        {x:ob4t.left, y:ob4t.top+ob4t.height}];
    var pontos_ob5t = [ {x:ob5t.left, y:ob5t.top}, 
                        {x:ob5t.left+ob5t.width, y:ob5t.top}, 
                        {x:ob5t.left+ob5t.width, y:ob5t.top+ob5t.height}, 
                        {x:ob5t.left, y:ob5t.top+ob5t.height}];
    var pontos_ob6t = [ {x:ob6t.left, y:ob6t.top}, 
                        {x:ob6t.left+ob6t.width, y:ob6t.top}, 
                        {x:ob6t.left+ob6t.width, y:ob6t.top+ob6t.height}, 
                        {x:ob6t.left, y:ob6t.top+ob6t.height}];
    var pontos_ob7t = [ {x:ob7t.left, y:ob7t.top}, 
                        {x:ob7t.left+ob7t.width, y:ob7t.top}, 
                        {x:ob7t.left+ob7t.width, y:ob7t.top+ob7t.height}, 
                        {x:ob7t.left, y:ob7t.top+ob7t.height}];
    var pontos_ob8t = [ {x:ob8t.left, y:ob8t.top}, 
                        {x:ob8t.left+ob8t.width, y:ob8t.top}, 
                        {x:ob8t.left+ob8t.width, y:ob8t.top+ob8t.height}, 
                        {x:ob8t.left, y:ob8t.top+ob8t.height}];
    var pontos_ob9t = [ {x:ob9t.left, y:ob9t.top}, 
                        {x:ob9t.left+ob9t.width, y:ob9t.top}, 
                        {x:ob9t.left+ob9t.width, y:ob9t.top+ob9t.height}, 
                        {x:ob9t.left, y:ob9t.top+ob9t.height}];
    var pontos_ob10t = [{x:ob10t.left, y:ob10t.top}, 
                        {x:ob10t.left+ob10t.width, y:ob10t.top}, 
                        {x:ob10t.left+ob10t.width, y:ob10t.top+ob10t.height}, 
                        {x:ob10t.left, y:ob10t.top+ob10t.height}];
    var pontos_ob11t = [{x:ob11t.left, y:ob11t.top}, 
                        {x:ob11t.left+ob11t.width, y:ob11t.top}, 
                        {x:ob11t.left+ob11t.width, y:ob11t.top+ob11t.height}, 
                        {x:ob11t.left, y:ob11t.top+ob11t.height}];
    
        // sistema de colisão e chamada de objeto2textoos
    // obj2
    if ((pontos_ob2[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob2[1].x) 
    && (pontos_ob2[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob2[2].y)
    && (colisao == false))
    {
        objeto2texto.style.display = 'block';
        objeto2texto.style.left = pontos_ob2[0].x - this.getElementById('p2t').offsetWidth;
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob2t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob2t[1].x) 
    && (pontos_ob2t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob2t[2].y))) 
    {
        colisao = true;
        objeto2texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob2[0].x - 28;
        circle.style.top = pontos_ob2[0].y - 28;
    }
    //obj3
    else if (((pontos_ob3[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob3[1].x) 
    && (pontos_ob3[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob3[2].y)
    && (colisao == false))) 
    {
        objeto3texto.style.display = 'block';
        objeto3texto.style.left = pontos_ob3[0].x - this.getElementById('p3t').offsetWidth;
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob3t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob3t[1].x) 
    && (pontos_ob3t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob3t[2].y))) 
    {
        colisao = true;
        objeto3texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob3[0].x - 28;
        circle.style.top = pontos_ob3[0].y - 28;
    }
    //obj4
    else if (((pontos_ob4[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob4[1].x) 
    && (pontos_ob4[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob4[2].y)
    && (colisao == false))) 
    {
        objeto4texto.style.display = 'block';
        objeto4texto.style.left = pontos_ob4[0].x - this.getElementById('p4t').offsetWidth;
        objeto4texto.style.top = pontos_ob4[3].y - this.getElementById('p4t').offsetHeight
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob4t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob4t[1].x) 
    && (pontos_ob4t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob4t[2].y))) 
    {
        colisao = true;
        objeto4texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob4[0].x - 28;
        circle.style.top = pontos_ob4[0].y - 28;
    }
    //obj5
    else if (((pontos_ob5[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob5[1].x) 
    && (pontos_ob5[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob5[2].y)
    && (colisao == false))) 
    {
        objeto5texto.style.display = 'block';
        objeto5texto.style.left = pontos_ob5[0].x - this.getElementById('p5t').offsetWidth;
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob5t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob5t[1].x) 
    && (pontos_ob5t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob5t[2].y))) 
    {
        colisao = true;
        objeto5texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob5[0].x - 10;
        circle.style.top = pontos_ob5[0].y - 10;
    }
    //obj6
    else if (((pontos_ob6[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob6[1].x) 
    && (pontos_ob6[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob6[2].y)
    && (colisao == false))) 
    {
        objeto6texto.style.display = 'block';
        objeto6texto.style.left = pontos_ob6[1].x;
        objeto6texto.style.top = pontos_ob6[2].y - this.getElementById('p6t').offsetHeight;
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob6t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob6t[1].x) 
    && (pontos_ob6t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob6t[2].y))) 
    {
        colisao = true;
        objeto6texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob6[0].x - 28;
        circle.style.top = pontos_ob6[0].y - 28;
    }
    //obj7
    else if (((pontos_ob7[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob7[1].x) 
    && (pontos_ob7[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob7[2].y)
    && (colisao == false))) 
    {
        objeto7texto.style.display = 'block';
        objeto7texto.style.left = pontos_ob7[1].x;
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob7t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob7t[1].x) 
    && (pontos_ob7t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob7t[2].y))) 
    {
        colisao = true;
        objeto7texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob7[0].x - 28;
        circle.style.top = pontos_ob7[0].y - 28;
    }
    //obj8
    else if (((pontos_ob8[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob8[1].x) 
    && (pontos_ob8[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob8[2].y)
    && (colisao == false))) 
    {
        objeto8texto.style.display = 'block';
        objeto8texto.style.left = pontos_ob8[1].x;
        objeto8texto.style.top = pontos_ob8[2].y - this.getElementById('p8t').offsetHeight;
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob8t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob8t[1].x) 
    && (pontos_ob8t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob8t[2].y))) 
    {
        colisao = true;
        objeto8texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob8[0].x - 28;
        circle.style.top = pontos_ob8[0].y - 28;
    }
    //obj9
    else if (((pontos_ob9[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob9[1].x) 
    && (pontos_ob9[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob9[2].y)
    && (colisao == false))) 
    {
        objeto9texto.style.display = 'block';
        objeto9texto.style.left = pontos_ob9[1].x;
        objeto9texto.style.top = pontos_ob9[2].y - this.getElementById('p9t').offsetHeight;
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob9t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob9t[1].x) 
    && (pontos_ob9t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob9t[2].y))) 
    {
        colisao = true;
        objeto9texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob9[0].x - 28;
        circle.style.top = pontos_ob9[0].y - 28;
    }
    //obj10
    else if (((pontos_ob10[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob10[1].x) 
    && (pontos_ob10[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob10[2].y)
    && (colisao == false))) 
    {   
        objeto10texto.style.display = 'block';
        objeto10texto.style.left = pontos_ob10[1].x;
        objeto10texto.style.top = pontos_ob10[2].y - this.getElementById('p10t').offsetHeight;
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob10t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob10t[1].x) 
    && (pontos_ob10t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob10t[2].y)))
    {
        colisao = true;
        objeto10texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob10[0].x - 8;
        circle.style.top = pontos_ob10[0].y - 8;
    }
    //obj11
    else if (((pontos_ob11[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob11[1].x) 
    && (pontos_ob11[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob11[2].y)
    && (colisao == false))) 
    {
        objeto11texto.style.display = 'block';
        objeto11texto.style.left = pontos_ob11[0].x - this.getElementById('p11t').offsetWidth;
        objeto1.style.opacity = '100%';
    }
    else if (((pontos_ob11t[0].x <= pontos_ob1[1].x) 
    && (pontos_ob1[0].x <= pontos_ob11t[1].x) 
    && (pontos_ob11t[0].y <= pontos_ob1[2].y) 
    && (pontos_ob1[0].y <= pontos_ob11t[2].y))) 
    {   
        colisao = true;
        objeto11texto.style.display = 'block';
        objeto1.style.opacity = '100%';
        document.body.style.cursor = 'auto';
        circle.style.left = pontos_ob11[0].x - 28;
        circle.style.top = pontos_ob11[0].y - 28;
    }
    //padrão
    else {
        document.body.style.cursor = 'none';  
        objeto11texto.style.display = 'none';
        objeto10texto.style.display = 'none';
        objeto9texto.style.display = 'none';
        objeto8texto.style.display = 'none';
        objeto7texto.style.display = 'none';
        objeto6texto.style.display = 'none';
        objeto5texto.style.display = 'none';
        objeto4texto.style.display = 'none';
        objeto3texto.style.display = 'none';
        objeto2texto.style.display = 'none';
        objeto1.style.opacity = '80%';
        colisao = false;
    }
    console.log(device)
    })  
    document.addEventListener('touchstart', e => {
        device = true;
        circle.style.left = e.changedTouches[0].clientX - 40;
        circle.style.top = e.changedTouches[0].clientY - 40;
        console.log(e.changedTouches[0].clientX)
    })
    document.addEventListener('touchmove', e => {
        circle.style.left = e.changedTouches[0].clientX - 40;
        circle.style.top = e.changedTouches[0].clientY - 40;
        console.log('move')
    })




var valueBg = 'red';
let j = 0;
var xIndex100 = 100;
var xIndex101 = 101;
for (j = 0; j < 20; j++) {
    for (let i = 0; i < 18; i++) {
        // var j = 45;
        var j10 = j * 9;
        var i10 = i * 20;
        $('.line').append($('<div class="line__point y' + j + ' x' + i + '"></div>'));
        var valueTransform = 'rotateY(' + j10 + 'deg) rotateX(' + i10 + 'deg) translateZ(' + xIndex100 + 'px)';

        if (j % 2 == 1) {
            // alert('Этерация: ' + j + '\nj mod 2 = ' + j % 2 + '\nНомер этерации нечетный');
        var valueTransform = 'rotateY(' + j10 + 'deg) rotateX(' + i10 + 'deg) translateZ(' + xIndex101 + 'px)';
            $('.y' + j).css({
                'background' : 'green',
                'z-index' : '1'
            });
        } else {
            // alert('Этерация: ' + j + '\nj mod 2 = ' + j % 2 + '\nНомер этерации четный');
        };


        $('.y' + j + '.x' + i).css({
            'transform' : valueTransform
        });
    };
};

// var i10 = 100;
// var i100 = String(i10);
// var style = 'transform';
// var value = 'translateZ(' + i100 + 'px)';
// alert(css);
function drawLine(coordinates, $container, lineWidth, lineColor) {
    var thickness = lineWidth || 1;
    var color = lineColor || '#000';
    var x1 = coordinates.x1, x2 = coordinates.x2, y1 = coordinates.y1, y2 = coordinates.y2;
    var length = Math.sqrt((x2-x1) * (x2-x1) + (y2-y1) * (y2-y1));
    // connecting points of x and y
    var cx = ((x1 + x2) / 2) - (length / 2);
    var cy = ((y1 + y2) / 2) - (thickness / 2);
    // angle of the line
    var angle = Math.atan2((y1 - y2), (x1 - x2)) * 180/Math.PI;
    // append line
    var htmlLine = '<div class="connecting-line" style="width:' + length + 'px; height:' + thickness + 'px; background-color:' + color + '; left:' + cx + 'px; top:' + cy + 'px; -moz-transform:rotate(' + angle + 'deg); -webkit-transform:rotate(' + angle + 'deg); -o-transform:rotate(' + angle + 'deg); -ms-transform:rotate(' + angle + 'deg); transform:rotate(' + angle + 'deg);" />';
    $container.append(htmlLine);
}

function getCoordinates($elem1, $elem2) {
    return {
        x1: $elem1.position().left + $elem1.width() / 2,
        x2: $elem2.position().left + $elem2.width() / 2,
        y1: $elem1.position().top + $elem1.height() / 2,
        y2: $elem2.position().top + $elem2.height() / 2
    };
}

$(function() {
    var $container = $('.container');
    var $elem1 = $container.find('.elem1');
    var $elem2 = $container.find('.elem2');
    var $elem3 = $container.find('.elem3');
    drawLine(getCoordinates($elem1, $elem2), $container, 2, '#fff');
    drawLine(getCoordinates($elem1, $elem3), $container, 2, '#fff');
    drawLine(getCoordinates($elem2, $elem3), $container, 2, '#fff');
});
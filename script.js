for(i=0; i<4; i++){
$('#container').append(' <div class=\'box\'></div> <div class=\'box\'></div> <div class=\'box\'></div> <div class=\'box\'></div>')
}

$('#container').on('click', '.box', function() {
    $(this).toggleClass('lightColor')
});

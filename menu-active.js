var url = jQuery(location).attr('href'),
parts = url.split("/"),
last_part = parts[parts.length-2];
if (last_part == 'bt4u.one') {
    jQuery('.home-link').addClass('active');
}else{
    jQuery('.'+last_part).addClass('active');
}
var url2 = jQuery(location).attr('href'),
parts2 = url.split("/"),
last_part2 = parts2[parts2.length-2];
if (last_part2 == 'pt-br') {
    jQuery('.home-link').addClass('active');
}else{
    jQuery('.'+last_part2).addClass('active');
}	

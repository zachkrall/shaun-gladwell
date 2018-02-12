$( document ).ready(function() {

$( '.about' ).click(function(){

  $('#about-o').show();

});
  
$( 'a.contact' ).hover(
    function() {
    $( this ).append( $( "<span> shaun@badfaith.co</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

$( '.closeParent' ).click(function(){

  $(this).parent().hide();

});

$( '.filterButton ' ).click(function(){
    $('.filterButton').removeClass('active');
    $(this).addClass('active');

    if ( $(this).attr('value') === "grid" ){
        $('#book__container').removeClass('list').addClass('grid');
        console.log('turned into a grid!');
    } else {
        $('#book__container').removeClass('grid').addClass('list');
        console.log('turned into a list!');
    }

});

var gladwell = [
    {
     'title':'The Lacrima Chair',
     'author':'Shaun Gladwell',
     'publisher':'Sherman Contemporary Art Foundation',
     'published':2015,
     'url':'https://dl.dropbox.com/s/d25wbz38clcyn77/0_GLADWELLl_THE%20LACRIMA_CHAIR.pdf',
     'thumb':'images/Cover-400x511.jpg'
    },

    {
     'title':'Double War',
     'author':'Kit Messham-Muir',
     'publisher':'Thames and Hudson',
     'published':2015,
     'url':'https://dl.dropbox.com/s/qq22gmblk0am3dk/0.0_GLADWELL_DOUBLE_WAR.pdf',
     'thumb':'images/Double-War-Shaun-Gladwell.jpg'
    },

    {
     'title':'Patafunctions',
     'author':'Shaun Gladwell',
     'publisher':'Sherman Contemporary Art Foundation',
     'published':2015,
     'url':'https://dl.dropbox.com/s/aesb19c5qr5iqki/0.1_GLADWELLl_Semiotext%28e%29.pdf',
     'thumb':'images/SG_11-400x644.jpg'
    },

    {
     'title':'Cycles of Radical Will',
     'author':'Shaun Gladwell',
     'publisher':'De La Warr Pavillion (UK)',
     'published':2013,
     'url':'https://dl.dropbox.com/s/d0r1c4b3kccnj0a/1_GLADWELLl_CYCLES%20OF%20RADICAL%20WILL_DLWP_2013%20.pdf',
     'thumb':'images/33164.jpg'
    },

    {
     'title':'Perpetual 360 Degree Sessions',
     'author':'Shaun Gladwell',
     'publisher':'Schunck (Netherlands)',
     'published':2011,
     'url':'https://dl.dropbox.com/s/d0r1c4b3kccnj0a/1_GLADWELLl_CYCLES%20OF%20RADICAL%20WILL_DLWP_2013%20.pdf',
     'thumb':'images/JR_PUB_01.jpg'
    },

    {
     'title':'Stereo Sequences',
     'author':'Shaun Gladwell',
     'publisher':'Schwartz City &amp; The Australian Centre for the Moving Image',
     'published':2011,
     'url':'https://dl.dropbox.com/s/wgfz8wva9w0brhc/5_GLADWELL_STEREO%20SEQUENCES_ACMI_2011.pdf',
     'thumb':'images/gladwellstereo.jpg'
    },

    {
     'title':'Interceptor Intersection',
     'author':'Shaun Gladwell',
     'publisher':'Schwartz City and Cambelltown Art Center',
     'published':2010,
     'url':'https://dl.dropbox.com/s/mzrr5zwg5meh2s7/8_INTERCEPTOR%20INTERSECTION_CAMPBELLTOWN_2010.pdf',
     'thumb':'images/interior.png'
    },

    {
     'title':'Maddest Maximus',
     'author':'Shaun Gladwell',
     'publisher':'Schwartz City',
     'published':2009,
     'url':'https://dl.dropbox.com/s/63a2fcs886mnv1v/9_GLADWELL_MMP%26S_VENICE_2009.pdf',
     'thumb':'images/maximus.png'
    },

    {
     'title':'Shaun Gladwell Videoworks',
     'author':'Shaun Gladwell',
     'publisher':'Artspace, Sydney',
     'published':2008,
     'url':'https://dl.dropbox.com/s/8wvu2i7fgn3zmus/10_GLADWELL_VIDEOWORK_ARTSPACE_2008.pdf',
     'thumb':'images/videowork.png'
    }
];

for (i = 0; i < gladwell.length; i++) {

    $('#book__container').append('<div class="book__card">\
                                  <div class="book__image"><img src="' + gladwell[i].thumb + '"></div>\
                                  <div class="book__info">\
                                  <div class="book__title">' + gladwell[i].title + '</div><div class="book__year">' + gladwell[i].published + '</div>\
                                  <div class="book__action"><a href="' + gladwell[i].url + '" class="action">Download</a></div>\
                                  </div>');

};


});
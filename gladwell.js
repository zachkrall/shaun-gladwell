var gladwell = [
    {
     'title':'The Lacrima Chair',
     'author':'Shaun Gladwell',
     'publisher':'Sherman Contemporary Art Foundation',
     'published':2015,
     'url':'https://dl.dropbox.com/s/d25wbz38clcyn77/0_GLADWELLl_THE%20LACRIMA_CHAIR.pdf',
     'thumb':''
    },
     
    {
     'title':'Double War',
     'author':'Kit Messham-Muir',
     'publisher':'Thams and Hudson',
     'published':2015,
     'url':'https://dl.dropbox.com/s/qq22gmblk0am3dk/0.0_GLADWELL_DOUBLE_WAR.pdf',
     'thumb':''
    },
 
    {
     'title':'Patafunctions',
     'author':'Shaun Gladwell',
     'publisher':'Sherman Contemporary Art Foundation',
     'published':2015,
     'url':'https://dl.dropbox.com/s/aesb19c5qr5iqki/0.1_GLADWELLl_Semiotext%28e%29.pdf',
     'thumb':''
    },
 
    {
     'title':'Cycles of Radical Will',
     'author':'Shaun Gladwell',
     'publisher':'De La Warr Pavillion (UK)',
     'published':2013,
     'url':'https://dl.dropbox.com/s/d0r1c4b3kccnj0a/1_GLADWELLl_CYCLES%20OF%20RADICAL%20WILL_DLWP_2013%20.pdf',
     'thumb':''
    },
];

for (i = 0; i < gladwell.length; i++) { 
    $('book__container').append('<h1> '+ gladwell[i].title +' </h1>');
    console.log('appended' + gladwell[i].title');                            
};

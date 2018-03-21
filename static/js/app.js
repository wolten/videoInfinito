var station=1;
$(document).ready(function()
{

    
    $('.btnDrop').click(  function(e)
        {    
            e.preventDefault();  
            removeOvergray('content');

        });

    $('body').click(function(e){       

        if(station==1)
        {
            station=0;
            $('#content').attr('class','content');
            removeOvergray('content');
        }else
        {
            station=1;
            $('#content').removeClass('animated bounceOutDown');
            openOvergray('content');
        }

    });

});

function removeOvergray(div)
{
    
    $('#' + div).addClass('animated bounceOutDown');

}


function openOvergray(div)
{
    
    $('#' + div).addClass('animated tada');

}

var underweightcard = document.getElementById('underweightid');
var normalcard = document.getElementById('normalid');
var overweightcard = document.getElementById('overweightid')

underweightcard.style.display ="none"
normalcard.style.display="none"
overweightcard.style.display="none"
function underweight()
{


    if(underweightcard.style.display == "none")
    {
        underweightcard.style.display = "block";
        normalcard.style.display ="none"
        overweightcard.style.display ="none";
    }
    else
    {
        underweightcard.style.display ="none"
    }

 
}

function Normal()
{


    if(normalcard.style.display == "none")
    {
        normalcard.style.display = "block";
        underweightcard.style.display = "none"
        overweightcard.style.display ="none";
    }
    else
    {
        normalcard.style.display ="none"
    }

 
}

function overweight()
{
    if(overweightcard.style.display == "none")
    {
        overweightcard.style.display = "block";
        underweightcard.style.display = "none"
        normalcard.style.display ="none";
    }
    else
    {
        overweightcard.style.display ="none"
    }
    

}
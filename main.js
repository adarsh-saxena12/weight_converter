
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('nvAge').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input',function(e){

    if(e.target.value != 0){
        document.getElementById('output').style.visibility = 'visible';
        
        if(e.target.value < 0) {
            document.getElementById('nvAge').style.visibility = 'visible';
            document.getElementById('output').style.visibility = 'hidden';
        }

    }else{
        document.getElementById('output').style.visibility = 'hidden';
        document.getElementById('nvAge').style.visibility = 'hidden';
    }
    

    const lbs = e.target.value;

    document.getElementById('gramsOutput').innerHTML = lbs /0.0022046;

    document.getElementById('kgOutput').innerHTML = lbs /2.2046;

    document.getElementById('ozOutput').innerHTML = lbs*16;
})


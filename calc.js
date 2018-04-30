
window.onload=function(){
        var buttons = document.getElementsByTagName('span'),
            equals = document.querySelectorAll('.equals p')[0],
            clear = document.getElementsByClassName('clear')[0];
        for (var i = 0; i < buttons.length; i+= 1){
            if (buttons[i].innerHTML === '='){
                buttons[i].addEventListener("click", calculate(i));
            } else {
                buttons[i].addEventListener("click", addValue(i));
            }
        }
        
        clear.onclick = function(){
            equals.innerHTML = '';
        };
        
        function addValue(i){
            return function(){
                if(buttons[i].innerHTML === '/'){
                    equals.innerHTML += '/';
                } else if (buttons[i].innerHTML === 'x'){
                    equals.innerHTML += '*';
                } else{
                    equals.innerHTML += buttons[i].innerHTML;
                }
            };
        }
        
        function calculate(i){
            return function(){
                var final_res = equals.innerHTML;
                var bugFix = final_res.replace(/\d+/g, function(numb){
                    return parseInt(numb, 10);
                });
                equals.innerHTML = eval(bugFix);
            };
        }
    };

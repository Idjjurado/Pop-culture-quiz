const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

var starter1 = document.getElementById('starter1');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var q5 = document.getElementById('q5');
var q6 = document.getElementById('q6');
var q7 = document.getElementById('q7');
var q8 = document.getElementById('q8');
var q9 = document.getElementById('q9');
var q10 = document.getElementById('q10');
var q11 = document.getElementById('q11');
var q12 = document.getElementById('q12');
var q13 = document.getElementById('q13');
var q14 = document.getElementById('q14');
var q15 = document.getElementById('q15');

var start1 = document.getElementById('start1');
var next1 = document.getElementById('next1')
var back1 = document.getElementById('back1')
var next2 = document.getElementById('next2')
var back2 = document.getElementById('back2')
var next3 = document.getElementById('next3')
var back3 = document.getElementById('back3')
var next4 = document.getElementById('next4')
var back4 = document.getElementById('back4')
var next5 = document.getElementById('next5')
var back5 = document.getElementById('back5')
var next6 = document.getElementById('next6')
var back6 = document.getElementById('back6')
var next7 = document.getElementById('next7')
var back7 = document.getElementById('back7')
var next8 = document.getElementById('next8')
var back8 = document.getElementById('back8')
var next9 = document.getElementById('next9')
var back9 = document.getElementById('back9')
var next10 = document.getElementById('next10')
var back10 = document.getElementById('back10')
var next11 = document.getElementById('next11')
var back11 = document.getElementById('back11')
var next12 = document.getElementById('next12')
var back12 = document.getElementById('back12')
var next13 = document.getElementById('next13')
var back13 = document.getElementById('back13')
var next14 = document.getElementById('next14')
var back14 = document.getElementById('back14')
var next15 = document.getElementById('next15')
var back15 = document.getElementById('back15')

document.addEventListener('DOMContentLoaded', function () {
let query = window.matchMedia('(max-width: 767px)');
    if (query.matches) {
        start1.onclick = function () {
        starter1.style.left = '-650px';
        q1.style.left = '15px';
        }
        next1.onclick = function () {
        q1.style.left = '-650px';
        q2.style.left = '15px';
        }
        back1.onclick = function () {
        q1.style.left = '15px';
        q2.style.left = '650px';
        }
        next2.onclick = function () {
        q2.style.left = '-650px';
        q3.style.left = '15px';
        }
        back2.onclick = function () {
        q2.style.left = '15px';
        q3.style.left = '650px';
        }
        next3.onclick = function () {
        q3.style.left = '-650px';
        q4.style.left = '15px';
        }
        back3.onclick = function () {
        q3.style.left = '15px';
        q4.style.left = '650px';
        }
        next4.onclick = function () {
        q4.style.left = '-650px';
        q5.style.left = '15px';
        }
        back4.onclick = function () {
        q4.style.left = '15px';
        q5.style.left = '650px';
        }
        next5.onclick = function () {
        q5.style.left = '-650px';
        q6.style.left = '15px';
        }
        back5.onclick = function () {
        q5.style.left = '15px';
        q6.style.left = '650px';
        }
        next6.onclick = function () {
        q6.style.left = '-650px';
        q7.style.left = '15px';
        }
        back6.onclick = function () {
        q6.style.left = '15px';
        q7.style.left = '650px';
        }
        next7.onclick = function () {
        q7.style.left = '-650px';
        q8.style.left = '15px';
        }
        back7.onclick = function () {
        q7.style.left = '15px';
        q8.style.left = '650px';
        }
        next8.onclick = function () {
        q8.style.left = '-650px';
        q9.style.left = '15px';
        }
        back8.onclick = function () {
        q8.style.left = '15px';
        q9.style.left = '650px';
        }
        next9.onclick = function () {
        q9.style.left = '-650px';
        q10.style.left = '15px';
        }
        back9.onclick = function () {
        q9.style.left = '15px';
        q10.style.left = '650px';
        }
        next10.onclick = function () {
        q10.style.left = '-650px';
        q11.style.left = '15px';
        }
        back10.onclick = function () {
        q10.style.left = '15px';
        q11.style.left = '650px';
        }
        next11.onclick = function () {
        q11.style.left = '-650px';
        q12.style.left = '15px';
        }
        back11.onclick = function () {
        q11.style.left = '15px';
        q12.style.left = '650px';
        }
        next12.onclick = function () {
        q12.style.left = '-650px';
        q13.style.left = '15px';
        }
        back12.onclick = function () {
        q12.style.left = '15px';
        q13.style.left = '650px';
        }
        next13.onclick = function () {
        q13.style.left = '-650px';
        q14.style.left = '15px';
        }
        back13.onclick = function () {
        q13.style.left = '15px';
        q14.style.left = '650px';
        }
        next14.onclick = function () {
        q14.style.left = '-650px';
        q15.style.left = '15px';
        }
        back14.onclick = function () {
        q14.style.left = '15px';
        q15.style.left = '650px';
        }
    }
    else {
        start1.onclick = function () {
        starter1.style.left = '-650px';
        q1.style.left = '50px';
        }
        next1.onclick = function () {
        q1.style.left = '-650px';
        q2.style.left = '50px';
        }
        back1.onclick = function () {
        q1.style.left = '50px';
        q2.style.left = '650px';
        }
        next2.onclick = function () {
        q2.style.left = '-650px';
        q3.style.left = '50px';
        }
        back2.onclick = function () {
        q2.style.left = '50px';
        q3.style.left = '650px';
        }
        next3.onclick = function () {
        q3.style.left = '-650px';
        q4.style.left = '50px';
        }
        back3.onclick = function () {
        q3.style.left = '50px';
        q4.style.left = '650px';
        }
        next4.onclick = function () {
        q4.style.left = '-650px';
        q5.style.left = '50px';
        }
        back4.onclick = function () {
        q4.style.left = '50px';
        q5.style.left = '650px';
        }
        next5.onclick = function () {
        q5.style.left = '-650px';
        q6.style.left = '50px';
        }
        back5.onclick = function () {
        q5.style.left = '50px';
        q6.style.left = '650px';
        }
        next6.onclick = function () {
        q6.style.left = '-650px';
        q7.style.left = '50px';
        }
        back6.onclick = function () {
        q6.style.left = '50px';
        q7.style.left = '650px';
        }
        next7.onclick = function () {
        q7.style.left = '-650px';
        q8.style.left = '50px';
        }
        back7.onclick = function () {
        q7.style.left = '50px';
        q8.style.left = '650px';
        }
        next8.onclick = function () {
        q8.style.left = '-650px';
        q9.style.left = '50px';
        }
        back8.onclick = function () {
        q8.style.left = '50px';
        q9.style.left = '650px';
        }
        next9.onclick = function () {
        q9.style.left = '-650px';
        q10.style.left = '50px';
        }
        back9.onclick = function () {
        q9.style.left = '50px';
        q10.style.left = '650px';
        }
        next10.onclick = function () {
        q10.style.left = '-650px';
        q11.style.left = '50px';
        }
        back10.onclick = function () {
        q10.style.left = '50px';
        q11.style.left = '650px';
        }
        next11.onclick = function () {
        q11.style.left = '-650px';
        q12.style.left = '50px';
        }
        back11.onclick = function () {
        q11.style.left = '50px';
        q12.style.left = '650px';
        }
        next12.onclick = function () {
        q12.style.left = '-650px';
        q13.style.left = '50px';
        }
        back12.onclick = function () {
        q12.style.left = '50px';
        q13.style.left = '650px';
        }
        next13.onclick = function () {
        q13.style.left = '-650px';
        q14.style.left = '50px';
        }
        back13.onclick = function () {
        q13.style.left = '50px';
        q14.style.left = '650px';
        }
        next14.onclick = function () {
        q14.style.left = '-650px';
        q15.style.left = '50px';
        }
        back14.onclick = function () {
        q14.style.left = '50px';
        q15.style.left = '650px';
        }
    }
});


function uncheck() {
var rad = document.getElementById('rd')
rad.removeAttribute('checked')
}

function showResults(){}


// on submit, show results
submitButton.addEventListener('click', showResults);


var time1
var time2;
var timeResolve;
var t1
var t2;
var b;
var msg = "";
var flagChecked = false;
var timer;

function updateTimer() {
    time2 = new Date();
    t2 = time2.getTime();
    timeNow = Math.round((t2 - t1) / 1000);

    if (timeNow) {
        document.getElementsByClassName('timer')[0].innerHTML = JSClock(timeNow);
    }
}

timer = setInterval(updateTimer, 1000);

const el = document.getElementById('startBtn');
el.addEventListener('animationend', function() {
    el.classList.remove('invalid');
})

function startTest() {

    let checkFio = document.getElementById('fio2').value;
    let checkEmail = document.getElementById('email2').value;
    let checkOrg = document.getElementById('org2').value;

    if ((checkFio == "") || (checkEmail == "") || (checkOrg == "")) {
        if (checkFio == "") {
            document.getElementById('fio2').style.border = "1px solid red";
        } else {
            document.getElementById('fio2').style.border = "1px solid #ccc";
        }
        if (checkEmail == "") {
            document.getElementById('email2').style.border = "1px solid red";
        } else {
            document.getElementById('email2').style.border = "1px solid #ccc";
        }
        if (checkOrg == "") {
            document.getElementById('org2').style.border = "1px solid red";
        } else {
            document.getElementById('org2').style.border = "1px solid #ccc";
        }
        document.getElementById('startBtn').classList.add('invalid');

        return false;
    }

    time1 = new Date();
    t1 = time1.getTime();

    const y = document.getElementsByClassName('startBlock')[0];
    y.style.display = "none";

    const x = document.getElementsByClassName('overlay')[0];
    x.style.display = "block";
    x.style['background-color'] = "white";

}

function addC() {
    ++b;
}

function empty_result() {
    if (flagChecked == false) {
        alert('Вы не выбрали ни одного варианта ответа в тесте.');
        return false;
    };
    const z = document.getElementsByClassName('results')[0];
    z.style.display = "block";
    
    const w = document.getElementsByClassName('overlay')[0];
    w.style.display = "none";
    
};

function JSClock(time) {
    var hours = Math.floor(time / 60 / 60);
    var minutes = Math.floor(time / 60) - (hours * 60);
    var seconds = time % 60;

    var formatted = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');

    return formatted;
}

$(function() {
    $('form').submit(function() {
        $.ajax({
            type: 'POST',
            url: 'sendResult.php',
            data: { fio: document.getElementById('fio').value,
            org: document.getElementById('org').value,
            email: document.getElementById('email').value,
            endresult: document.getElementById('endResult').value,
            timeResolve: document.getElementById('timeResolve').value
            },
            success: function(data){
        },
            error: function (jqXHR, exception) {
        if (jqXHR.status === 0) {
            console.log('Not connect. Verify Network.');
        } else if (jqXHR.status == 404) {
            console.log('Requested page not found (404).');
        } else if (jqXHR.status == 500) {
            console.log('Internal Server Error (500).');
        } else if (exception === 'parsererror') {
            console.log('Requested JSON parse failed.');
        } else if (exception === 'timeout') {
            console.log('Time out error.');
        } else if (exception === 'abort') {
            console.log('Ajax request aborted.');
        } else {
            console.log('Uncaught Error. ' + jqXHR.responseText);
        }
    }
        });
        return false;
    }); 
})

function result() {
    time2 = new Date();
    t2 = time2.getTime();
    timeResolve = Math.round((t2 - t1) / 1000);

    b = 0;

    var a = document.getElementsByTagName('input');
    for (var i = 0; i < a.length; i++) {
        if ((a[i].type == 'checkbox' || a[i].type == 'radio') && a[i].checked) {

            flagChecked = true;

            switch (a[i].id) {
                case "question1_2":
                    addC();
                    break;
                case "question2_3":
                    addC();
                    break;
                case "question3_4":
                    addC();
                    break;
                case "question4_3":
                    addC();
                    break;
                case "question5_1":
                    addC();
                    break;
                case "question6_4":
                    addC();
                    break;
                case "question7_3":
                    addC();
                    break;
                case "question8_4":
                    addC();
                    break;
                case "question9_4":
                    addC();
                    break;
                case "question10_3":
                    addC();
                    break;
                case "question11_3":
                    addC();
                    break;
                case "question12_1":
                    addC();
                    break;
                case "question13_2":
                    addC();
                    break;
                case "question14_3":
                    addC();
                    break;
                case "question15_3":
                    addC();
                    break;
                case "question16_2":
                    addC();
                    break;
                case "question17_1":
                    addC();
                    break;
                case "question18_1":
                    addC();
                    break;
            }
        }
    };

    document.getElementById('fio').value = document.getElementById('fio2').value;
    document.getElementById('org').value = document.getElementById('org2').value;
    document.getElementById('email').value = document.getElementById('email2').value;
    document.getElementById('endResult').value = b;
    document.getElementById('timeResolve').value = JSClock(timeResolve);
};

const f = document.getElementById('fio2');
const o = document.getElementById('org2');
const e = document.getElementById('email2');

f.addEventListener('change', function() {
    if (f.value != "") {
        f.style.border = "1px solid #ccc";
    }
})

f.addEventListener('input', function() {
    if (f.value != "") {
        f.style.border = "1px solid #ccc";
    } else {
        f.style.border = "1px solid red";
    }
})

o.addEventListener('change', function() {
    if (o.value != "") {
        o.style.border = "1px solid #ccc";
    }
})


o.addEventListener('input', function() {
    if (o.value != "") {
        o.style.border = "1px solid #ccc";
    } else {
        o.style.border = "1px solid red";
    }
})

e.addEventListener('change', function() {
    if (e.value != "") {
        e.style.border = "1px solid #ccc";
    }
})


e.addEventListener('input', function() {
    if (e.value != "") {
        e.style.border = "1px solid #ccc";
    } else {
        e.style.border = "1px solid red";
    }
})
const title = "Введите время для начала отсчета таймера. "
let result = prompt(title, "23, 59, 59")
let resultList = result.split(", ")
let date = new Date();
function timer(){
    let ss = Number(resultList[2]) - 1;
    let mm = (Number(resultList[1]))
    let h = Number(resultList[0]);

    let timer = setInterval(function(){
        if (String(ss) === '00') mm--;
        if (String(mm) === '00' ) h--;

        if  (String(ss) === '0' && String(mm) === '0' &&
            String(h) === '0') {
            clearInterval(timer);

            location.assign('./img.png');
        }

        date.setHours(h, mm , ss )
        let tag = document.querySelector('span#timer');
        tag.innerText = (String(date).split(" "))[4];
        ss--;

    }, 1000);
}
timer()

function clickers() {
    let i = 0;
        mm = 0;
        ss = 0;

    const img = document.querySelector('img');
        spanCounter = document.querySelector('#clicker__counter');
        spanTimer = document.querySelector('#clicker__timer');

    let intWDown = Number(img.clientWidth);
    const timer = new Date();


    img.addEventListener('mousedown',() =>{
        intWDown = Number(intWDown) + 10;
        img.width = intWDown;
        i++;
    });

    img.addEventListener('mouseup', ()=> {
            intWDown = Number(intWDown) - 10;
            img.width = intWDown;
            spanCounter.innerText = String(i);
            if (i === 1) driveTimer();

        });
    console.log(`i: ${i}`);

    function driveTimer(){
            let timeInterval = setInterval(() => {

                if (String(ss) === '59') {
                    ss = 0;
                    mm = Number(mm) + 1;
                }
                if (String(ss) === '59' &&
                    String(mm) === '59') clearInterval(timeInterval);

                ss = Number(ss) + 1;
                timer.setHours(0);
                timer.setMinutes(mm, ss);

                spanTimer.innerText = (String(timer).split(' '))[4];

            }, 1000);
    }
}


clickers()
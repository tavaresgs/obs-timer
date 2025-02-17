window.Timer = {
    finishDate: new Date(),

    updateMsg: function () {
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("msg")) {
            document.querySelector("#timer .msg").innerHTML =
                urlParams.get("msg");
        }
    },

    updateFinishDate: function () {
        var urlParams = new URLSearchParams(window.location.search);
        var date = new Date();
        if (urlParams.has("t")) {
            var t = urlParams.get("t").split(":");
            t = t.map(function (v) {
                return parseInt(v, 10);
            });
            date.setHours(t[0], t[1], 0, 0);
            if (date - new Date() < 0) {
                date.setDate(date.getDate() + 1);
            }
        } else {
            var min = date.getMinutes();
            date.setMinutes(min - (min % 15) + 15);
            date.setSeconds(0);
            date.setMilliseconds(0);
        }
        Timer.finishDate = date;
    },

    calcDiff: function () {
        return Math.floor((Timer.finishDate - new Date()) / 1000);
    },

    formatTimer: function (diff) {
        if (diff <= 0) {
            return "0:00";
        }
        var min = Math.floor(diff / 60).toString();
        var sec = (diff % 60).toString();
        if (sec.length == 1) {
            sec = "0" + sec;
        }
        return min + ":" + sec;
    },

    updateTimer: function () {
        var diff = Timer.calcDiff();
        var timer = document.getElementById("timer");
        timer.querySelector(".clock").innerHTML = Timer.formatTimer(diff);
        if (diff > 0) {
            setTimeout(Timer.updateTimer, 1000);
        } else {
            timer.classList.add("finished");
        }
    },
};

Timer.updateMsg();
Timer.updateFinishDate();
Timer.updateTimer();

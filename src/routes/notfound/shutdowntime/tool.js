export const convertToNum = function (raw) {
    var num = Number(raw);
    var result = NaN;
    if (isNaN(num)) {
        num = raw.toString();
        if (num.indexOf(':') !== -1) {
            var time = num.split(':');
            var hour = Number(time[0]);
            var min = Number(time[1]);
            var sec = Number(time[2]);
            if (typeof hour === 'number' && typeof min === 'number' && typeof sec === 'number') {
                result = hour * 3600 + min * 60 + sec;
            }
        }
        return result;

    } else {
        return num;
    }
}

export const convertToTime = function (num) {
    var result = num;
    if (typeof num === 'number') {
        var hour = parseInt(num / 3600).toString().length === 1 ? '0' + parseInt(num / 3600).toString() : parseInt(num / 3600).toString();
        var minute = num % 3600;
        var min = parseInt(minute / 60).toString().length === 1 ? '0' + parseInt(minute / 60).toString() : parseInt(minute / 60).toString();
        var sec = (minute % 60).toString().length === 1 ? '0' + Math.round(minute % 60).toString() : Math.round(minute % 60).toString();
        result = hour + ':' + min + ':' + sec;

    }
    return result;
}

export const colors = ['#6D95FF', '#FF8888', '#FCBA71', '#52E1CB', '#966FF2', '#DD4B39', '#ED9E9E', '#EBBCB7', '#F48E4A', '#FFB652', '#F7DC00', '#C6DD84', '#4ECB73', '#76DAC4', '#4B9FA0', '#78D0DA', '#00ADD7', '#5090F4', '#425087', '#6766B3', '#965EE3', '#DD7DC1', '#ADACDC', '#CACACA', '#878B8C']
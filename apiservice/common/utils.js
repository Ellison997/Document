const crypto = require('crypto'); //crypto模块用于加密数据 (node原生模块)

// md5 加密
let md5 = (str) => {
    let rune = '';
    let md5Obj = crypto.createHash('md5');
    md5Obj.update(str + rune);
    return md5Obj.digest('hex');
};


// 获取当前日期与时间
let getTimeString = (chuo) => {
    let yt = new Date(chuo);
    let year = yt.getFullYear();
    let month = yt.getMonth() + 1 < 10 ? '0' + (yt.getMonth() + 1) : yt.getMonth() + 1;
    let day = yt.getDate() < 10 ? '0' + yt.getDate() : yt.getDate();
    let hours = yt.getHours() < 10 ? '0' + yt.getHours() : yt.getHours();
    let minutes = yt.getMinutes() < 10 ? '0' + yt.getMinutes() : yt.getMinutes();
    let seconds = yt.getSeconds() < 10 ? '0' + yt.getSeconds() : yt.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};



let dateFormat = (dateObj, string) => { //格式化日期
    let json_inf = {
        'y+': dateObj.getFullYear(),
        'M+': dateObj.getMonth() + 1 > 9 ? dateObj.getMonth() + 1 : '0' + (dateObj.getMonth() + 1),
        'd+': dateObj.getDate() > 9 ? dateObj.getDate() : '0' + dateObj.getDate(),
        'h+': dateObj.getHours() > 9 ? dateObj.getHours() : '0' + dateObj.getHours(),
        'm+': dateObj.getMinutes() > 9 ? dateObj.getMinutes() : '0' + dateObj.getMinutes(),
        's+': dateObj.getSeconds() > 9 ? dateObj.getSeconds() : '0' + dateObj.getSeconds(),
        'q+': Math.floor((dateObj.getMonth() + 3) / 3),
        'w+': dateObj.getDay(),
        'S+': function() {
            if (dateObj.getMilliseconds() < 10) {
                return '00' + dateObj.getMilliseconds();
            } else if (dateObj.getMilliseconds() > 9 && dateObj.getMilliseconds() < 100) {
                return '0' + dateObj.getMilliseconds();
            } else {
                return dateObj.getMilliseconds();
            }
        }
    };
    for (let key in json_inf) {
        let re = new RegExp(key);
        if (re.test(string)) {
            string = string.replace(re, (json_inf[key]));
        }
    }
    return string;
};

// 返回请求中的token
let getRequestToken = req => {
    let token = '';
    if (req.headers.hasOwnProperty('authorization')) {
        token = req.headers.authorization.split(' ')[1];
    } else {
        token = req.query.token
    }
    return token;
}



module.exports = {
    md5,
    getTimeString,
    dateFormat,
    getRequestToken
}
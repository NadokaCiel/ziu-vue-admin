export function date(time, format = "yyyy-MM-dd hh:mm:ss") {
  if (!time) return '--';
  return new Date(time).Format(format);
}

export function numPad(num, digit = 10) {
  return (`${num}`).padStart(digit, "0");
}

// eslint-disable-next-line
Date.prototype.Format = function(time) { // author: meizz
  const o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds(), // 毫秒
  };
  let fmt = time;
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length));
  // eslint-disable-next-line
  for (const k in o) if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
  return fmt;
};

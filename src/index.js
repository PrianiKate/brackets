module.exports = function check(str, bracketsConfig) {
  // your solution
  let l = [];
  let r = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        l.push(bracketsConfig[i][0]);
        r.push(bracketsConfig[i][1]);
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let posr = r.indexOf(str[i]);
        let posl = l.indexOf(str[i]);

        if (posr !== -1) {
            let top = stack[stack.length - 1];

            if (posr === posl && (top !== str[i] || stack.length === 0)) {
                stack.push(str[i]);
            } else if (l.indexOf(top) === posr) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(str[i]);
        }
    }

    return stack.length === 0;
}

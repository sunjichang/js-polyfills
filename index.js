(
  function () {
    // replaceAll polyfill
    if (typeof String.prototype.replaceAll === "undefined") {
      String.prototype.replaceAll = function (match, replaceText) {
        console.log('custom replaceAll')
        // 传入的match进行判断 正则 或字符串
        if (Object.prototype.toString.call(match) === '[object RegExp]') {
          return this.replace(match, replaceText)
        } else {
          // 需要转义的特殊字符
          const escapeCharacter = '$*+.?\\^|(){}[]'
          let tmpMatch = ''
          for (let i = 0; i < match.length; i++) {
            const item = match[i];
            // 特殊的字符进行转义
            if (escapeCharacter.indexOf(item) > -1) {
              tmpMatch = tmpMatch + '\\' + item
            } else {
              tmpMatch += item
            }
          }
          return this.replace(new RegExp(tmpMatch, 'g'), () => replaceText);
        }
      }
    }
    // ...todo 其他polyfill
  }
)()
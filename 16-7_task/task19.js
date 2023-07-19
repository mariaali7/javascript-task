function getByteLength(str) {
    let utf8 = unescape(encodeURIComponent(str));
    return utf8.length;
  }

  console.log(getByteLength('Hello, world!'));
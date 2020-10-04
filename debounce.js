function debounce(cb, delay) {
  let allow = true;
  return function (...args) {
    let timer;
    if (allow) {
      clearTimeout(timer);
      allow = false;
      timer = setTimeout(function () {
        allow = true;
        cb.apply(this, args);
      }, delay);
    }
  };
}

const debounce = function(fn, ms) {
  let timeOut;
  
  return function() {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      return fn.apply(this, arguments);
    }, ms);
  };
};

export default debounce;

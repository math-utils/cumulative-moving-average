module.exports = function () {
  var avg = 0
  var n = 0

  return {
    get value() {
      return avg
    },
    get length() {
      return n
    },
    push: function (value) {
      return (avg = avg + (value - avg) / ++n)
    }
  }
}
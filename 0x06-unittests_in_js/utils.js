const Utils = {
  calculateNumber: (type, a, b) => {
    if (typeof type === "string" && type.toUpperCase() === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (typeof type === "string" && type.toUpperCase() === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (typeof type === "string" && type.toUpperCase() === 'DIVIDE') {
      if (Math.round(b) === 0) return ('Error');
      return Math.round(a) / Math.round(b);
    }
  }
};

module.exports = Utils;


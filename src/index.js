module.exports = function warmup(temperature) {
    var coefficient = 1.8;
    var delta = 32;
    var temperatureFahrenheit = (temperature * coefficient) + delta;
    return temperatureFahrenheit;
};

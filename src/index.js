module.exports = function toReadable (number) {
  let number_str = '';
  let arr_0_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr_20_90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number < 20) {return arr_0_19[number]};
  if (number < 100) {
      number_str = arr_20_90[Math.floor(number/10-2)];
      if ((number % 10) !== 0) {number_str = number_str + ' ' + arr_0_19[number % 10]};
      return number_str;
  }
  if (number < 1000) {
    number_str = arr_0_19[Math.floor(number/100)]+' hundred';
    if ((number % 100) > 19) {
        number_str = number_str + ' ' + arr_20_90[Math.floor((number % 100)/10)-2];
        if ((number % 10) !== 0) {number_str = number_str + ' ' + arr_0_19[number % 10]};
    } else {
        if ((number % 100) > 0) {
            number_str = number_str + ' ' + arr_0_19[number % 100]
        }        
    }
    return number_str;
  } 
}

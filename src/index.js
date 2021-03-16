module.exports = function toReadable (number) {
  const numbers = {
    1: `one`,
    2: `two`,
    3: `three`,
    4: `four`,
    5: `five`,
    6: `six`,
    7: `seven`,
    8: `eight`,
    9: `nine`,
    0: `zero`
  }
  const ten = {
    10: `ten`,
    11: `eleven`,
    12: `twelve`,
    13: `thirteen`,
    14: `fourteen`,
    15: `fifteen`,
    16: `sixteen`,
    17: `seventeen`,
    18: `eighteen`,
    19: `nineteen`
  }
  const tens = {
    2: `twenty`,
    3: `thirty`,
    4: `forty`,
    5: `fifty`,
    6: `sixty`,
    7: `seventy`,
    8: `eighty`,
    9: `ninety`
  }
  if (number.toString().length == 1) {
    return numbers[number]
  }
  if (number.toString().length == 2) {
    if (number < 20) {
      return ten[number]
    }
    else {
      let tmp = number.toString().split(``)
      if (tmp[1] == 0) {
        return tens[tmp[0]]
      } else {
        return tens[tmp[0]] + ` ` + numbers[tmp[1]]
      }
    }
  }
  if (number.toString().length == 3) {
    let tmp = number.toString().split(``)
    if (tmp[1]==0 && tmp[2]==0) {
      return numbers[tmp[0]] + ` hundred`
    }
    if (tmp[1]==0 && tmp[2]!=0) {
      return numbers[tmp[0]] + ` hundred ` + numbers[tmp[2]]
    }
    if (tmp[1]==1) {
      return numbers[tmp[0]] + ` hundred ` + ten[tmp[1]+tmp[2]]
    }
    if (tmp[1] >= 2) {
      if (tmp[2] == 0) {
        return numbers[tmp[0]] + ` hundred ` + tens[tmp[1]]
      } else {
        return numbers[tmp[0]] + ` hundred ` + tens[tmp[1]] + ` ` + numbers[tmp[2]]
      }
    }
    return `number to big for this exercise`
  }
}

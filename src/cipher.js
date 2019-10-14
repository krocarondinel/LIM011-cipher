window.cipher = {
  encode: (numberOfTrips, toTranslate) => {
    let encryptedMessage = ''
    for (let i = 0; i < toTranslate.length; i++) {
      const ascii = toTranslate.charCodeAt(i)
      // mayusculas, minusculas, números.
      if (ascii >= 65 && ascii <= 90) {
        const newAsciiCapitalLetters = (ascii - 65 + numberOfTrips) % 26 + 65
        const newWordCapitalLetters = String.fromCharCode(newAsciiCapitalLetters)
        encryptedMessage += newWordCapitalLetters
      } else if (ascii >= 97 && ascii <= 122) {
        const newAsciiLowercase = (ascii - 97 + numberOfTrips) % 26 + 97
        const newWordLoweercase = String.fromCharCode(newAsciiLowercase)
        encryptedMessage += newWordLoweercase
      } else {
        // casos especificos
        encryptedMessage += toTranslate[i]
      }
    }
    return encryptedMessage
  },

  decode: (numberOfTripsToBack, toDescipher) => {
    let descipherMessage = ''
    for (let i = 0; i < toDescipher.length; i++) {
      const ascii2 = toDescipher.charCodeAt(i)
      // mayusculas, minusculas, números
      if (ascii2 >= 65 && ascii2 <= 90) {
        const newAsciiCapitalLetters2 = (ascii2 - 90 - numberOfTripsToBack) % 26 + 90
        const newWordCapitalLetters2 = String.fromCharCode(newAsciiCapitalLetters2)
        descipherMessage += newWordCapitalLetters2
      } else if (ascii2 >= 97 && ascii2 <= 122) {
        const newAsciiLowercase2 = (ascii2 - 122 - numberOfTripsToBack) % 26 + 122
        const newWordLoweercase2 = String.fromCharCode(newAsciiLowercase2)
        descipherMessage += newWordLoweercase2
      } else {
        // casos especificos
        descipherMessage += toDescipher[i]
      }
    }
    return descipherMessage
  }
}

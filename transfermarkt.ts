function getPlayerStatistics() {
  const rowGroup = document.querySelector('div[role="rowgroup"]')
  if (rowGroup) {
    let els = Array.from(rowGroup.querySelectorAll('div'))
    return els.map((el) => {
      const innerEls = Array.from(el.querySelectorAll('*[class]'))
      if (innerEls.length > 0) {
        return innerEls.map((innerEl, idx) => {
          try {
            const value = innerEl?.textContent.trim()
            if (value === '' || value === '-') return 0

            if (value.endsWith("'")) {
              const _value = value.replace("'", '')
              return parseInt(_value)
            }

            if (idx === 0) {
              return value
            } else {
              return parseInt(value)
            }
          } catch (e) {
            return 0
          }
        })
      }
    }).filter((value) => value !== undefined).map((value) => {
      return {
        competition: value[0],
        goals: value[1],
        assists: value[2],
        ownGoals: value[3],
        substitutionOn: value[4],
        substitutionOff: value[5],
        yellowCards: value[6],
        secondYellowCards: value[7],
        redCards: value[8],
        penaltyGoals: value[10],
        minutesPerGoal: value[11],
        minutesPlayed: value[12]
      }
    })
  }
}

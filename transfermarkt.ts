function cleanValue(value: string) {
  if (value === '' || value === '-') return '0'
  return value.replace("'", '').replaceAll(/\s+/g, '')
}

function getPlayerStatistics() {
  const rowGroup = document.querySelector('div[role="rowgroup"]')
  if (rowGroup) {
    let els = Array.from(rowGroup.querySelectorAll('div'))
    return els.map((el) => {
      const innerEls = Array.from(el.querySelectorAll('*[class^="tm-grid__cell"]'))
      if (innerEls.length > 0) {
        const template = {
          competition: '',
          appearances: 0,
          goals: 0,
          assists: 0,
          ownGoals: 0,
          substitutionOn: 0,
          substitutionOff: 0,
          yellowCards: 0,
          secondYellowCards: 0,
          redCards: 0,
          penaltyGoals: 0,
          minutesPerGoal: 0,
          minutesPlayed: 0
        }

        template.competition = innerEls[0]?.textContent.trim() || ''
        template.appearances = parseInt(cleanValue(innerEls[1]?.textContent))
        template.goals = parseInt(cleanValue(innerEls[2]?.textContent))
        template.assists = parseInt(cleanValue(innerEls[3]?.textContent))
        template.ownGoals = parseInt(cleanValue(innerEls[4]?.textContent))
        template.substitutionOn = parseInt(cleanValue(innerEls[5]?.textContent))
        template.substitutionOff = parseInt(cleanValue(innerEls[6]?.textContent))
        template.yellowCards = parseInt(cleanValue(innerEls[7]?.textContent))
        template.secondYellowCards = parseInt(cleanValue(innerEls[8]?.textContent))
        template.redCards = parseInt(cleanValue(innerEls[9]?.textContent))
        template.penaltyGoals = parseInt(cleanValue(innerEls[10]?.textContent))
        template.minutesPerGoal = parseFloat(cleanValue(innerEls[11]?.textContent))
        template.minutesPlayed = parseInt(cleanValue(innerEls[12]?.textContent))

        return template
      }
    }).filter((statistic) => statistic !== undefined)
  }
}

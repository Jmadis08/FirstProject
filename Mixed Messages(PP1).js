// gets a rancom number from 0 -> 1 
function randomNumber(num) {
    return Math.floor(Math.random() * num)
}

//console.log (randomNumber(7))--checking random number generator
const hireMe = {
    interviewAnswer: ['great job','you did well enough','we want you','welcome to the team'],
    whatNow: ['When do I start?', 'Lets get lunch!', 'Thank you for the opportunity!', 'lets go!'],
    companyResult: ['a team member willing to learn','leader for a future team','someone who gives his all for you','a well developed app/website'],
}

//storeing hireMe in an array
let hireMeNow = []

for(let prop in hireMe) {
    let optionsIndx = randomNumber(hireMe[prop].length)

    switch(prop) {
        case 'interviewAnswer': 
        hireMeNow.push(`Jacob ${hireMe[prop][optionsIndx]}.`)
        break
        case 'whatNow':
        hireMeNow.push(`Wow! ${hireMe[prop][optionsIndx]}.`)
        break
        case 'companyResult':
        hireMeNow.push(`Your team now has ${hireMe[prop][optionsIndx]}.`)
        break
      default:
          hireMeNow.push('Need more info.')
    }5
}

function newJob(hiring) {
    const result = hireMeNow.join('\n')
    console.log(result)
}
newJob(hireMeNow)


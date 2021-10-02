// Code your solution here

function findMatching(drivers, string) {
   return drivers.filter(find_string => {
       return(find_string.toLowerCase() === string.toLowerCase())
   })
}

function fuzzyMatch(drivers, letter) {
  return drivers.filter( find_string => {
      if (letter.charAt(0) === find_string.charAt(0)) {
         return find_string
      }
  })
}

function matchName(drivers, string) {
   return drivers.filter( function(find_string){
       if (find_string.name == string) {
           return find_string
       }
   })
}
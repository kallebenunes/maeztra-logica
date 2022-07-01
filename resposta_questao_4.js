function getMostWorkedYears (intervalYears){

    
    let workkedYYears = {}
    let mostWorkedYears = []
    let maxGruopOcurrency


    for(let i = 0; i < intervalYears.length; i++ ){
        
        for(let j = intervalYears[i][0]; j <= intervalYears[i][1]; j++){
            if(workkedYYears[j]){
                workkedYYears[j] += 1
                maxGruopOcurrency = workkedYYears[j]
            } else {
                workkedYYears[j] = 1
            }
        }
    }

    for(let year in workkedYYears){
        if(workkedYYears[year] === 3)
            mostWorkedYears.push(year)

    }


    return mostWorkedYears
}

console.log(getMostWorkedYears([[1960,2005],[1945,2008],[1938,1999]]))
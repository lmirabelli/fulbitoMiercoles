let boxData = document.getElementById('data')
let abc = document.getElementById('alfa')
let masPartidos = document.getElementById('partidos')
let ausencia = document.getElementById('ausencia')

class wedMatch{
    constructor(day,month,year,j1,j2,j3,j4,j5,j6,j7,j8,j9,j10,j11,j12,j13,j14,j15,j16,j17,j18){
        this.day = day,
        this.month = month,
        this.year = year,
        this.j1 = j1,
        this.j2 = j2,
        this.j3 = j3,
        this.j4 = j4,
        this.j5 = j5,
        this.j6 = j6,
        this.j7 = j7,
        this.j8 = j8,
        this.j9 = j9,
        this.j10 = j10,
        this.j11 = j11,
        this.j12 = j12,
        this.j13 = j13,
        this.j14 = j14,
        this.j15 = j15,
        this.j16 = j16,
        this.j17 = j17,
        this.j18 = j18
    }
}
class wedPlayers{
    constructor(name,pj,lastMatchPlayed,dia,mes,anio){
        this.name = name,
        this.pj = pj,
        this.lastMatchPlayed = lastMatchPlayed,
        this.dia = dia,
        this.mes = mes,
        this.anio = anio
    }
}

let match = []
let jugadores = []
let jugadoresData = []

match.push(new wedMatch(09,03,2022,`Ricky`,`Jonhy`,`Cata`,`Fede`,`Damian`,`Ivan`,`Leo Mi`,`Cacho`,`Gonza`,`Gaston`,`Ernes`,`Chino`,`Fede More`,`Coco`,`Diego (Coco)`,`David`,`Leo Marin`,`Javi`))
match.push(new wedMatch(16,03,2022,`Gonza`,`Ivan`,`Fede`,`Cata`,`Ricky`,`Jonhy`,`Coco`,`Diego (Coco)`,`Cacho`,`Gaston`,`Leo Mi`,`Damian`,`Fede More`,`Gonza B`,`Chino`,`Tincho (Jonhy)`,`Ruben (Coco)`,`Migue (Fede)`))
match.push(new wedMatch(23,03,2022,`Ricky`,`Nahuel (Gonza)`,`Cata`,`Jonhy`,`Cata2`,`Fede`,`Coco`,`Diego (Coco)`,`Leo Mi`,`Fede More`,`Cacho`,`Gaston`,`Gonza`,`Gonza B`,`Damian`,`Ema (Fede)`,`Ruben (Coco)`,`Maty (seba Pato)`))
match.push(new wedMatch(30,03,2022,`Agus`,`Cata`,`Ricky`,`Ivan`,`Gonza B`,`Jonhy`,`Leo Mi`,`Bruno`,`Coco`,`Diego (Coco)`,`Cacho`,`Fede`,`Fede More`,`Javi`,`Damian`,`Chino`,`Migue (Fede)`,`Ruben (Coco)`))
match.push(new wedMatch(06,04,2022,`Martin`,`Ricky`,`Jonhy`,`Cata`,`Fede`,`Javi`,`Leo Mi`,`Leo Marin`,`Agus`,`Coco`,`Ruben (Coco)`,`Gonza B`,`Cacho`,`Fede More`,`Gaston`,`Ema (Fede)`,`Bruno`,`Sebita`))
match.push(new wedMatch(13,04,2022,`Cata`,`Ricky`,`Martin`,`Ivan`,`Leo Mi`,`Chino`,`Fede`,`Jonhy`,`Agus`,`Cacho`,`Gonza B`,`Coco`,`Javi`,`Sebita`,`Damian`,`Leo Marin`,`Diego (Coco)`,`Ema (Fede)`))
match.push(new wedMatch(20,04,2022,`Agus`,`Cata`,`Jonhy`,`Leo Mi`,`Fede More`,`Gonza`,`Martin`,`Ricky`,`Ivan`,`Javi`,`Fede`,`Leo Marin`,`Damian`,`Gonza B`,`Cacho`,`Chino`,`Gaston`,`Coco`))
match.push(new wedMatch(27,04,2022,`Ricky`,`Cata`,`Agus`,`Leo Mi`,`Cata2`,`Jonhy`,`Fede`,`Coco`,`Fede More`,`Gaston`,`Ivan`,`Damian`,`Gonza B`,`Chino`,`Ema (Fede)`,`Bruno`,`Cata2`,`Walter`))
match.push(new wedMatch(04,05,2022,`Ricky`,`Agus`,`Pablo Rojas`,`Jonhy`,`Gonza`,`Fede`,`Leo Mi`,`Coco`,`Cacho`,`Cata`,`Ema (Fede)`,`Sebita`,`Gaston`,`Gonza B`,`Ivan`,`Damian`,`Chino`,`Ruben (Coco)`))
match.push(new wedMatch(11,05,2022,`Leo Mi`,`Ricky`,`Jonhy`,`Ivan`,`Fede`,`Coco`,`Ruben (Coco)`,`Sebita`,`Amigo (Jonhy)`,`Cacho`,`Gaston`,`Ema (Fede)`,`Migue (Fede)`,`Cata2`,`Amigo (Jonhy)`,`Chino`,`Gonza`,`Amigo (Cacho)`))
match.push(new wedMatch(18,05,2022,`Leo Mi`,`Jonhy`,`Agus`,`Fede`,`Fede More`,`Damian`,`Ivan`,`Gonza B`,`Coco`,`Ezequiel (Coco)`,`Mauro`,`Gaston`,`Ema (Fede)`,`Joaco (Fede More)`,`Juan (Fede)`,`Bruno`,`Chino`,`Migue (Fede)`))
match.push(new wedMatch(25,05,2022,`Leo Mi`,`Gonza B`,`Gonza`,`Ivan`,`Fede`,`Ema (Fede)`,`Cacho`,`Chino`,`Damian`,`Fede More`,`Bruno (Fede)`,`Juanse (Fede)`,`Bruno`,`Cata2`,`Pablo S`,`Adrian (Pablo S)`,`Juani (Fede)`,`Franco (Fede)`))
match.push(new wedMatch(01,06,2022,`Leo Mi`,`Jonhy`,`Fede`,`Gonza B`,`Pablo S`,`Gaston`,`Cacho`,`Chino`,`Damian`,`Ivan`,`Migue (Fede)`,`Diego (Jonhy)`,`Bruno`,`Cata2`,`Naldo (Jonhy)`,`Leo Costa (Leo Mi)`,`Ale (Leo Mi)`,`…`))
match.push(new wedMatch(08,06,2022,`Fede More`,`Jonhy`,`Agus`,`Fede`,`Leo Mi`,`Gaston`,`Ivan`,`Ema (Fede)`,`Damian`,`Gonza B`,`Bruno (Fede)`,`Bruno`,`Tigre`,`Cacho`,`Gonza`,`Chino`,`Joaco (Jonhy)`,`Cuñado (Gonza)`))
match.push(new wedMatch(15,06,2022,`Leo Mi`,`Gonza`,`Fede`,`Pablo S`,`Cacho`,`Migue (Fede)`,`Bruno`,`Bruno (Fede)`,`Cata2`,`Tigre`,`Jonhy`,`Ivan`,`Damian`,`Diego (Fede)`,`Gonza B`,`Gaston`,`Amigo (Jonhy)`,`Amigo (Jonhy)`))
match.push(new wedMatch(22,06,2022,`Naldo (Jonhy)`,`Jonhy`,`Leo Mi`,`Cacho`,`Fede`,`Gonza B`,`Ivan`,`Damian`,`Pablo S`,`Gaston`,`Migue (Fede)`,`Ema (Fede)`,`Bruno (Fede)`,`Bruno`,`Chino`,`Tigre`,`Joaco (Jonhy)`,`Diego (Jonhy)`))
match.push(new wedMatch(06,07,2022,`Leo Mi`,`Gaston`,`Fede`,`Jonhy`,`Migue (Fede)`,`Cacho`,`Gonza B`,`Ema (Fede)`,`Ivan`,`Seba P`,`Amigo (Jonhy)`,`Amigo (Jonhy)`,`Amigo (Jonhy)`,`Leandro (Seba Pato)`,`Damian`,`Facu (Seba Pato)`,`Chino`,`Gonza`))
match.push(new wedMatch(13,07,2022,`Seba P`,`Cacho`,`Leo Mi`,`Gonza B`,`Jonhy`,`Bruno`,`Facu (Seba Pato)`,`Ema (Fede)`,`Pablo S`,`Ivan`,`Fede`,`Gaston`,`Migue (Fede)`,`Damian`,`Amigo (Jonhy)`,`Amigo (Jonhy)`,`Kun (Coco)`,`Gonza`))
match.push(new wedMatch(20,07,2022,`Seba P`,`Gaston`,`Jonhy`,`Leo Mi`,`Fede`,`Ema (Fede)`,`Diego (Jonhy)`,`Ivan`,`Pablo S`,`Chino`,`Gonza B`,`Damian`,`Cacho`,`Fede More`,`Migue (Fede)`,`Gonza`,`Tigre`,`Naldo (Jonhy)`))
match.push(new wedMatch(27,07,2022,`Leo Mi`,`Fede`,`Migue (Fede)`,`Ema (Fede)`,`Pablo S`,`Bruno`,`Jonhy`,`Ivan`,`Gonza B`,`Damian`,`Gaston`,`Fede More`,`Chino`,`Naldo (Jonhy)`,`Bruno (Fede)`,`Diego (Jonhy)`,`Joaco (Jonhy)`,`Gonza`))
match.push(new wedMatch(03,08,2022,`Ivan`,`Fede`,`Ema (Fede)`,`Migue (Fede)`,`Jonhy`,`Tigre`,`Damian`,`Pablo S`,`Bruno`,`Gonza`,`Fede More`,`Gonza B`,`Naldo (Jonhy)`,`Joaco (Jonhy)`,`Martin (Seba Pato)`,`Chino`,`Sebita`,`Bruno (Fede)`))
match.push(new wedMatch(10,08,2022,`Agus`,`Fede`,`Ema (Fede)`,`Migue (Fede)`,`Pablo S`,`Leo Mi`,`Gonza B`,`Cacho`,`Damian`,`Bruno`,`Fede More`,`Bruno (Fede)`,`Juan (Agus)`,`Chino`,`Jonhy`,`Tigre`,`Naldo (Jonhy)`,`Marcos (Jonhy)`))
match.push(new wedMatch(17,08,2022,`Agus`,`Leo Mi`,`Pablo Rojas`,`Fede`,`Ema (Fede)`,`Pablo S`,`Gonza B`,`Fede More`,`Bruno`,`Damian`,`Jonhy`,`Ivan`,`Tigre`,`Chino`,`Bruno (Fede)`,`Migue (Fede)`,`Naldo (Jonhy)`,`Cacho`))
match.push(new wedMatch(24,08,2022,`Leo Mi`,`Fede`,`Ema (Fede)`,`Migue (Fede)`,`Jonhy`,`Tigre`,`Bruno`,`Ivan`,`Gonza B`,`Gaston`,`Damian`,`Cacho`,`Pablo Rojas`,`Fede More`,`Cata`,`Chino`,`Bruno (Fede)`,`Naldo (Jonhy)`))
match.push(new wedMatch(31,08,2022,`Leo Mi`,`Pablo S`,`Gonza B`,`Fede`,`Ema (Fede)`,`Migue (Fede)`,`Cacho`,`Gaston`,`Chipi (Fede)`,`Ivan`,`Jonhy`,`Tigre`,`Damian`,`Bruno (Fede)`,`Naldo (Jonhy)`,`Roman (Fede)`,`Juanse (Fede)`,`Sebita`))
match.push(new wedMatch(07,09,2022,`Leo Mi`,`Pablo S`,`Fede`,`Ema (Fede)`,`Migue (Fede)`,`Damian`,`Jonhy`,`Tigre`,`Fabio (Leo Mi)`,`Bruno`,`Ricky`,`Agus`,`Chino`,`Cacho`,`Gaston`,`Gasty (Jonhy)`,`Valentin`,`David`))
match.push(new wedMatch(14,09,2022,`Cata`,`Ivan`,`Agus`,`Ricky`,`Gonza B`,`Jonhy`,`Tigre`,`David`,`Gaston`,`Pablo S`,`Fede`,`Ema (Fede)`,`Migue (Fede)`,`Pablo Rojas`,`Gonza`,`Leo Mi`,`Fede More`,`Chino`))
match.push(new wedMatch(21,09,2022,`Agus`,`Cata`,`Leo Mi`,`Gonza`,`Pablo Rojas`,`Gonza B`,`David`,`Seba P`,`Fede`,`Ricky`,`Cacho`,`Fede More`,`Jonhy`,`Tigre`,`Pablo S`,`Damian`,`Ivan`,`Gaston`))
match.push(new wedMatch(28,09,2022,`Seba P`,`Agus`,`Ivan`,`Jonhy`,`Tigre`,`Migue (Fede)`,`Fede`,`Chino`,`Gaston`,`Damian`,`Sebita`,`David`,`Gonza`,`Ema (Fede)`,`Leo Mi`,`Cacho`,`Bruno`,`Cata`))
match.push(new wedMatch(05,10,2022,`Leo Mi`,`Gonza`,`Jonhy`,`Tigre`,`Ivan`,`Agus`,`Fede`,`Damian`,`David`,`Ricky`,`Gaston`,`Gonza B`,`Pablo Rojas`,`Pablo S`,`Sebita`,`Bruno`,`Naldo (Jonhy)`,`Migue (Fede)`))
match.push(new wedMatch(12,10,2022,`Agus`,`Gonza`,`Gonza B`,`Pablo S`,`Leo Mi`,`Gaston`,`Ricky`,`Jonhy`,`Tigre`,`Chino`,`Sebita`,`Cacho`,`Fede`,`Bruno`,`Ema (Fede)`,`Migue (Fede)`,`Naldo (Jonhy)`,`Gasty (Jonhy)`))
match.push(new wedMatch(19,10,2022,`Seba P`,`Gonza`,`Leo Mi`,`Ricky`,`Pablo S`,`Ivan`,`David`,`Fede`,`Jonhy`,`Chino`,`Damian`,`Tigre`,`Gonza B`,`Cacho`,`Bruno`,`Fede More`,`Sebita`,`Ema (Fede)`))


console.log('sip')
console.log(match.length)


let createPlayers = () => {
    for(partido of match){
        for(one in partido){
            if(one !== 'day' && one !== 'month' && one !== 'year'){
                jugadores.indexOf(partido[one]) == -1 && jugadores.push(partido[one])
            }
        }
    }
}

let countMatch = (posicion) => {
    jugadoresData = []
    for (player of jugadores) {
        let actualDay = 'dia'
        let actualMonth = 'mes'
        let actualYear = 'año'
        let aDia
        let aMes
        let aYear
        let lastMatch = 'error'
        let contador = 0
        for (partido of match) {
            for (one in partido) {
                one == 'day' && (actualDay = partido[one])
                one == 'month' && (actualMonth = partido[one])
                one == 'year' && (actualYear = partido[one])
                player == partido[one] && (contador++, lastMatch = `${actualDay}/${actualMonth}/${actualYear}`, aDia = actualDay, aMes = actualMonth, aYear = actualYear)
            }
        }
        jugadoresData.push(new wedPlayers(player,contador,lastMatch,aDia,aMes,aYear))
    }
    console.table(jugadoresData)
    posicion()
    if(boxData){
        boxData.innerHTML = `<div class="renglon">
            <div class="box large titulo">Jugador</div>
            <div class="box small titulo">Jugados</div>
            <div class="box small titulo">Ultimo Partido</div>
            </div>`
        for(player of jugadoresData){
            boxData.innerHTML += `<div class="renglon">
            <div class="box large">${player.name}</div>
            <div class="box small">${player.pj}</div>
            <div class="box small">${player.lastMatchPlayed}</div>
            </div>`
        }
    }
}
let alpha = () => {
    jugadoresData.sort((a,b) => {
        if(a.name > b.name){
            return 1
        }
        if(a.name < b.name){
            return -1
        }
        return 0
    })
}
let forpj = () => {
    jugadoresData.sort((a,b) => b.pj - a.pj)
}

let forData = () => {
    jugadoresData.sort((a,b) =>{
    if(a.anio > b.anio){
        return 1
    }else if(a.anio < b.anio){
        return - 1
    }else if(a.mes > b.mes){
        return 1
    }else if(a.mes < b.mes){
        return - 1
    }else if(a.dia > b.dia){
        return 1
    }else if(a.dia < b.dia){
        return - 1
    }
    return 0
    })
}
createPlayers()
countMatch(alpha)



ausencia.addEventListener('click',() => countMatch(forData))
abc.addEventListener('click',() => countMatch(alpha))
masPartidos.addEventListener('click',() => countMatch(forpj))
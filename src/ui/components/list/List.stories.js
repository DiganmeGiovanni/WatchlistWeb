import React from 'react'
import List from './List'

export default {
    component: List,
    title: 'List'
}

const hasMovies = [
    {
        "movie": {
            "id": 9453,
            "tmdbid": 9453,
            "rating": 5.5,
            "title": "Caligula",
            "release_date": "1979-01-21",
            "original_title": "Caligola",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/6BDvx5C1zErh1wcEwV2mqHjxB3x.jpg",
            "synopsis": "The perversion behind imperial Rome, the epic story of Rome's mad Emporer. All the details of his cruel, bizarre reign are revealed right here: His unholy sexual passion for his sister, his marriage to Rome's most infamous prostitute, his fiendishly inventive means of disposing those who would oppose him, and more.",
            "poster_path": "/4N4l873TVreuaR4FVpvaL2gfQ0N.jpg"
        }
    },
    {
        "movie": {
            "id": 11620,
            "tmdbid": 11620,
            "rating": 6.9,
            "title": "Quo Vadis",
            "release_date": "1951-11-08",
            "original_title": "Quo Vadis",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/goyLlBUlfZwbKIJFvPbRmpkKYZ.jpg",
            "synopsis": "Set against the back drop of Rome in crisis, General Marcus Vinicius returns to the city from the battle fields and falls in love with a Christian woman, Lygia. Caught in the grip of insanity, Nero's atrocities become more extreme and he burns Rome, laying the blame on the Christians. Vinicius races to save Lygia from the wrath of Nero as the empire of Rome collapses around them.",
            "poster_path": "/205q2KznSETw5MeUHupvusQGXDC.jpg"
        }
    },
    {
        "movie": {
            "id": 468,
            "tmdbid": 468,
            "rating": 7.0,
            "title": "My Own Private Idaho",
            "release_date": "1991-02-01",
            "original_title": "My Own Private Idaho",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/stSaFz5CtMXwIj3r4MDjqxqWRot.jpg",
            "synopsis": "In this loose adaptation of Shakespeare's \"Henry IV,\" Mike Waters is a gay hustler afflicted with narcolepsy. Scott Favor is the rebellious son of a mayor. Together, the two travel from Portland, Oregon to Idaho and finally to the coast of Italy in a quest to find Mike's estranged mother. Along the way they turn tricks for money and drugs, eventually attracting the attention of a wealthy benefactor and sexual deviant.",
            "poster_path": "/uJY5RGgU1DMTpxFjJ4ccaUzJH2C.jpg"
        }
    },
    {
        "movie": {
            "backdrop_path": null,
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "id": 148850,
            "tmdbid": 148850,
            "original_title": "Caligola: La storia mai raccontata",
            "synopsis": "The deranged Roman emperor Gainus 'Caligula' (Little Boots) Caesar (12-41 A.D.) rules Rome with an iron fist and has anyone tortured and exectued for even the slightest insubordination. Mostly set during his last year of his reign, as Caligula loses support due to his brutal and crazed excess, a young Moor woman, named Miriam, becomes his lover while ploting to kill him to avenge the murder of a friend which Caligula was responsible for. But Miriam is torn between her personal vandeda against Caligula and her own personal feelings towards him despite his madness and debauched lifestyle of orgies and bloody torture murders.",
            "poster_path": "/zgxBmwLvUv9ptA0wkIa3kJEvaLD.jpg",
            "release_date": "1982-02-02",
            "title": "Caligula: The Untold Story",
            "rating": 5.5
        }
    },
    {
        "movie": {
            "id": 967,
            "tmdbid": 967,
            "rating": 7.6,
            "title": "Spartacus",
            "release_date": "1960-10-13",
            "original_title": "Spartacus",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/aheSIG4h3JNxWeDvdb1NxKzgjaM.jpg",
            "synopsis": "The rebellious Thracian Spartacus, born and raised a slave, is sold to Gladiator trainer Batiatus. After weeks of being trained to kill for the arena, Spartacus turns on his owners and leads the other slaves in rebellion. As the rebels move from town to town, their numbers swell as escaped slaves join their ranks. Under the leadership of Spartacus, they make their way to southern Italy, where they will cross the sea and return to their homes.",
            "poster_path": "/prdCmV8GkDLpguwoxBQczFAwvci.jpg"
        }
    },
    {
        "movie": {
            "id": 9564,
            "tmdbid": 9564,
            "rating": 6.0,
            "title": "Asterix & Obelix Take on Caesar",
            "release_date": "1999-02-01",
            "original_title": "Astérix & Obélix contre César",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/2gaZoIp1h8tSBNKARaSjzTVaC23.jpg",
            "synopsis": "Set in 50 B.C., Asterix and Obelix are living in a small but well-protected village in Gaul, where a magic potion concocted by Druids turns the townsfolk into mighty soldiers. When Roman troops carve a path through Gaul to reach the English Channel, Caesar and his aide de camp Detritus discover the secret elixir and capture the Druid leader who knows its formula, and Asterix and Obelix are sent off to rescue them.",
            "poster_path": "/nCYmH6fFFo1ccZFCouyobJhgUGv.jpg"
        }
    },
    {
        "movie": {
            "id": 746,
            "tmdbid": 746,
            "rating": 7.6,
            "title": "The Last Emperor",
            "release_date": "1987-05-27",
            "original_title": "The Last Emperor",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/viSQwjHmrMUBHG5Kfr2CMIRp6FW.jpg",
            "synopsis": "A dramatic history of Pu Yi, the last of the Emperors of China, from his lofty birth and brief reign in the Forbidden City, the object of worship by half a billion people; through his abdication, his decline and dissolute lifestyle; his exploitation by the invading Japanese, and finally to his obscure existence as just another peasant worker in the People's Republic.",
            "poster_path": "/7CZSCaGxCD2HXo8LrdcW183moqJ.jpg"
        }
    },
    {
        "movie": {
            "backdrop_path": "/tgaMo8q1HpGTbtpmJm8TYKTpOr4.jpg",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "id": 9703,
            "tmdbid": 9703,
            "original_title": "The Last Legion",
            "synopsis": "As the Roman empire crumbles, young Romulus Augustus flees the city and embarks on a perilous voyage to Britain to track down a legion of supporters.",
            "poster_path": "/60o0PuxaHjc02UqevLsftvk4Rx9.jpg",
            "release_date": "2007-04-19",
            "title": "The Last Legion",
            "rating": 5.5
        }
    },
    {
        "movie": {
            "backdrop_path": "/xdxfsLnbLp4B7dZh9GVKZc78VFj.jpg",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "id": 11416,
            "tmdbid": 11416,
            "original_title": "The Mission",
            "synopsis": "When a Spanish Jesuit goes into the South American wilderness to build a mission in the hope of converting the Indians of the region, a slave hunter is converted and joins his mission. When Spain sells the colony to Portugal, they are forced to defend all they have built against the Portugese aggressors.",
            "poster_path": "/5p63Lw35ivwcOfzax6AvjcoFzFh.jpg",
            "release_date": "1986-09-29",
            "title": "The Mission",
            "rating": 7.4
        }
    },
    {
        "movie": {
            "backdrop_path": "/yS0WL30HOPIWJ3CGSXqkF5bcST.jpg",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "id": 49494,
            "tmdbid": 49494,
            "original_title": "The Eagle",
            "synopsis": "In 140 AD, twenty years after the unexplained disappearance of the entire Ninth Legion in the mountains of Scotland, young centurion Marcus Aquila (Tatum) arrives from Rome to solve the mystery and restore the reputation of his father, the commander of the Ninth. Accompanied only by his British slave Esca (Bell), Marcus sets out across Hadrian's Wall into the uncharted highlands of Caledonia - to confront its savage tribes, make peace with his father's memory, and retrieve the lost legion's golden emblem, the Eagle of the Ninth.",
            "poster_path": "/mbsdwO4lfIARqt35VVTM0UlYkhZ.jpg",
            "release_date": "2011-02-08",
            "title": "The Eagle",
            "rating": 6.1
        }
    },
    {
        "movie": {
            "id": 32528,
            "tmdbid": 32528,
            "rating": 6.8,
            "title": "Spartacus",
            "release_date": "2004-03-17",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/9vmV4vowql7e2WNcPcZzn1iGR66.jpg",
            "poster_path": "/4qDIb9K9qLxCVT8cKGt5YrF54Xb.jpg"
        }
    },
    {
        "movie": {
            "id": 11631,
            "tmdbid": 11631,
            "rating": 6.9,
            "title": "Mamma Mia!",
            "release_date": "2008-07-02",
            "original_title": "Mamma Mia!",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/ns9T8glyF7mYwxrcUHXm22nMf9t.jpg",
            "synopsis": "An independent, single mother who owns a small hotel on a Greek island is about to marry off the spirited young daughter she's raised alone. But, the daughter has secretly invited three of her mother's ex-lovers in the hopes of finding her biological father.",
            "poster_path": "/zdUA4FNHbXPadzVOJiU0Rgn6cHR.jpg"
        }
    },
    {
        "movie": {
            "id": 507505,
            "tmdbid": 507505,
            "rating": 7.4,
            "title": "El Angel",
            "release_date": "2018-08-09",
            "original_title": "El Ángel",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/gRxlzFYDKdzNnhu8OFIKm3i9b6f.jpg",
            "synopsis": "Buenos Aires, Argentina, 1971. Carlos Robledo Puch is a 19-year-old boy with an angelic face, but a vocational thief as well, who acts ruthlessly, without remorse. When he meets Ramón, they follow together a dark path of crime and death.",
            "poster_path": "/iYrcnrxv80L9JbV9YfVv45VpNM2.jpg"
        }
    },
    {
        "movie": {
            "id": 628,
            "tmdbid": 628,
            "rating": 7.3,
            "title": "Interview with the Vampire",
            "release_date": "1994-11-11",
            "original_title": "Interview with the Vampire",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/3fChciF2G1wXHsyTfJD9y7uN6Il.jpg",
            "synopsis": "A vampire relates his epic life story of love, betrayal, loneliness, and dark hunger to an over-curious reporter.",
            "poster_path": "/t7NU8IcmcNBrlunCxiycX9JV7Rp.jpg"
        }
    },
    {
        "movie": {
            "id": 205596,
            "tmdbid": 205596,
            "rating": 8.0,
            "title": "The Imitation Game",
            "release_date": "2014-11-14",
            "original_title": "The Imitation Game",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/sixfWYfNegaGGHKdXrNNUHaMiAC.jpg",
            "synopsis": "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
            "poster_path": "/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg"
        }
    },
    {
        "movie": {
            "backdrop_path": "/rqMEeajyzSF4PpJtdCB816Iz8Vr.jpg",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "id": 449176,
            "tmdbid": 449176,
            "original_title": "Love, Simon",
            "synopsis": "Everyone deserves a great love story. But for seventeen-year old Simon Spier it's a little more complicated: he's yet to tell his family or friends he's gay and he doesn't know the identity of the anonymous classmate he's fallen for online.",
            "poster_path": "/5YUYg5q7QfC4IoNwNUtiwdiYKPr.jpg",
            "release_date": "2018-02-16",
            "title": "Love, Simon",
            "rating": 8.2
        }
    },
    {
        "movie": {
            "id": 5336,
            "tmdbid": 5336,
            "rating": 6.4,
            "title": "Salò, or the 120 Days of Sodom",
            "release_date": "1975-11-22",
            "original_title": "Salò o le 120 giornate di Sodoma",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/sXdFKnc4MVhk06CGsF3uCERwo1T.jpg",
            "synopsis": "Four corrupted fascist libertines round up 9 teenage boys and girls and subject them to 120 days of sadistic physical, mental and sexual torture.",
            "poster_path": "/xnaDdiRfZlJaTf6JRc4in40eaeI.jpg"
        }
    },
    {
        "movie": {
            "id": 451945,
            "tmdbid": 451945,
            "rating": 7.8,
            "title": "BPM (Beats per Minute)",
            "release_date": "2017-08-23",
            "original_title": "120 battements par minute",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/1pyUrlbTVCkGkcu7LsGMqxuCtkP.jpg",
            "synopsis": "Paris, in the early 1990s: a group of young activists is desperately tied to finding the cure against an unknown lethal disease. They target the pharmaceutical labs that are retaining potential cures, and multiply direct actions, with the hope of saving their lives as well as the ones of future generations.",
            "poster_path": "/azLtGx5ZhdTSP2b4oNLWtiE51OW.jpg"
        }
    },
    {
        "movie": {
            "backdrop_path": "/9ijTrSunhZiTDMdc3uN4ZuXCzuU.jpg",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "id": 29912,
            "tmdbid": 29912,
            "original_title": "The Robe",
            "synopsis": "Marcellus is a tribune in the time of Christ. He is in charge of the group that is assigned to crucify Jesus. Drunk, he wins Jesus' homespun robe after the crucifixion. He is tormented by nightmares and delusions after the event. Hoping to find a way to live with what he has done, and still not believing in Jesus, he returns to Palestine to try and learn what he can of the man he killed.",
            "poster_path": "/2ReRNpGpajVq6WwjyyqBPufNOPY.jpg",
            "release_date": "1953-09-16",
            "title": "The Robe",
            "rating": 6.6
        }
    },
    {
        "movie": {
            "id": 26171,
            "tmdbid": 26171,
            "rating": 6.6,
            "title": "Everybody's Fine",
            "release_date": "2009-12-04",
            "original_title": "Everybody's Fine",
            "genres": [
                { "name": "Drama"},
                { "name": "Action"},
                { "name": "Adventure"}
            ],
            "backdrop_path": "/tyG7ZTrUVzxeuhPm3SMENyxM97Z.jpg",
            "poster_path": "/3In4SuHSKSQINr7Lh5xNfPKFv63.jpg"
        }
    }
]

export const Default = () => <List
    isFetching={ false }
    listTitle='Western'
    hasMovies={ [] }
/>

export const Loading = () => <List
    isFetching={ true }
    listTitle='Western'
    hasMovies={ [] }
/>

export const Content = () => <List
    isFetching={ false }
    listTitle='Random movies'
    hasMovies={ hasMovies }
/>

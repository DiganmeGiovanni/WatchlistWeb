import React from "react";
import { storiesOf } from "@storybook/react";
import List from "../../src/ui/components/list/List";

const list = {
    "id": 2,
    "name": "Biographies",
    "is_default_list": false,
    "created_at": "2019-05-01T13:03:06.341410Z",
    "updated_at": "2019-05-01T13:03:06.341417Z",
    "deleted": false
};
const movies = [
    {
        "id": 301,
        "added_at": "2019-05-05T23:15:49.502410Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 1,
            "tmdb_id": 487558,
            "title": "BlacKkKlansman",
            "original_title": "BlacKkKlansman",
            "release_date": "2018-07-30",
            "synopsis": "Colorado Springs, late 1970s. Ron Stallworth, an African American police officer, and Flip Zimmerman, his Jewish colleague, run an undercover operation to infiltrate the Ku Klux Klan.",
            "rating": 7.6,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 80,
                    "name": "Crime"
                }
            ],
            "pictures": [
                {
                    "id": 1,
                    "url": "/ot3eZ9XfOF42a3zFWluMPWkfCHB.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 2,
                    "url": "/3ntR66u2SHZ2UA3r3DjF2Dl6Kwx.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 302,
        "added_at": "2019-05-05T23:15:49.511634Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 2,
            "tmdb_id": 68721,
            "title": "Iron Man 3",
            "original_title": "Iron Man 3",
            "release_date": "2013-04-18",
            "synopsis": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
            "rating": 6.9,
            "genres": [
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 878,
                    "name": "Science Fiction"
                }
            ],
            "pictures": [
                {
                    "id": 3,
                    "url": "/n9X2DKItL3V0yq1q1jrk8z5UAki.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 4,
                    "url": "/7XiGqZE8meUv7L4720L0tIDd7gO.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 303,
        "added_at": "2019-05-05T23:15:49.521346Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 3,
            "tmdb_id": 429197,
            "title": "Vice",
            "original_title": "Vice",
            "release_date": "2018-12-25",
            "synopsis": "George W. Bush picks Dick Cheney, the CEO of Halliburton Co., to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney's impressive résumé includes stints as White House chief of staff, House Minority Whip and defense secretary. When Bush wins by a narrow margin, Cheney begins to use his newfound power to help reshape the country and the world.",
            "rating": 7.1,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 35,
                    "name": "Comedy"
                },
                {
                    "id": 36,
                    "name": "History"
                }
            ],
            "pictures": [
                {
                    "id": 5,
                    "url": "/7TTlvADXSxg0yzlGTZFExmw4TSC.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 6,
                    "url": "/1gCab6rNv1r6V64cwsU4oEr649Y.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 304,
        "added_at": "2019-05-05T23:15:49.531166Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 4,
            "tmdb_id": 120,
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "original_title": "The Lord of the Rings: The Fellowship of the Ring",
            "release_date": "2001-12-18",
            "synopsis": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
            "rating": 8.3,
            "genres": [
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 14,
                    "name": "Fantasy"
                },
                {
                    "id": 28,
                    "name": "Action"
                }
            ],
            "pictures": [
                {
                    "id": 7,
                    "url": "/pIUvQ9Ed35wlWhY2oU6OmwEsmzG.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 8,
                    "url": "/56zTpe2xvaA4alU51sRWPoKPYZy.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 305,
        "added_at": "2019-05-05T23:15:49.540836Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 5,
            "tmdb_id": 459992,
            "title": "Long Shot",
            "original_title": "Long Shot",
            "release_date": "2019-05-02",
            "synopsis": "When Fred Flarsky reunites with his first crush, one of the most influential women in the world, Charlotte Field, he charms her. As she prepares to make a run for the Presidency, Charlotte hires Fred as her speechwriter and sparks fly.",
            "rating": 7.4,
            "genres": [
                {
                    "id": 35,
                    "name": "Comedy"
                },
                {
                    "id": 10749,
                    "name": "Romance"
                }
            ],
            "pictures": [
                {
                    "id": 9,
                    "url": "/88r25ghJzVYKq0vaOApqEOZsQlD.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 10,
                    "url": "/m2ttWZ8rMRwIMT7zA48Jo6mTkDS.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 306,
        "added_at": "2019-05-05T23:15:49.550300Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 6,
            "tmdb_id": 527261,
            "title": "The Silence",
            "original_title": "The Silence",
            "release_date": "2019-05-16",
            "synopsis": "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.",
            "rating": 0,
            "genres": [
                {
                    "id": 14,
                    "name": "Fantasy"
                },
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 27,
                    "name": "Horror"
                },
                {
                    "id": 53,
                    "name": "Thriller"
                }
            ],
            "pictures": [
                {
                    "id": 11,
                    "url": "/iHJQIKSLHN2mUUWySpj2MO5HVtS.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 12,
                    "url": "/lTVOquzxw2DPF3MKuYd1ynz9F6H.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 307,
        "added_at": "2019-05-05T23:15:49.560725Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 7,
            "tmdb_id": 627,
            "title": "Trainspotting",
            "original_title": "Trainspotting",
            "release_date": "1996-02-23",
            "synopsis": "Mark Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
            "rating": 8,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 80,
                    "name": "Crime"
                }
            ],
            "pictures": [
                {
                    "id": 13,
                    "url": "/Aw0z8bUhGljT0ots6udf1MTLEMi.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 14,
                    "url": "/p1O3eFsdb0GEIYu87xlwV7P4jM1.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 308,
        "added_at": "2019-05-05T23:15:49.571709Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 8,
            "tmdb_id": 395990,
            "title": "Death Wish",
            "original_title": "Death Wish",
            "release_date": "2018-03-02",
            "synopsis": "A mild-mannered father is transformed into a killing machine after his family is torn apart by a violent act.",
            "rating": 5.8,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 53,
                    "name": "Thriller"
                },
                {
                    "id": 80,
                    "name": "Crime"
                }
            ],
            "pictures": [
                {
                    "id": 15,
                    "url": "/uQqQvmptJLPTcWDrZXn22p7j7s3.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 16,
                    "url": "/7FG13lLQcV9DC2Bhn0hjxc6AFXV.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 309,
        "added_at": "2019-05-05T23:15:49.580746Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 9,
            "tmdb_id": 22,
            "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
            "original_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
            "release_date": "2003-07-09",
            "synopsis": "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
            "rating": 7.7,
            "genres": [
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 14,
                    "name": "Fantasy"
                },
                {
                    "id": 28,
                    "name": "Action"
                }
            ],
            "pictures": [
                {
                    "id": 17,
                    "url": "/8AUQ7YlJJA9C8kWk8P4YNHIcFDE.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 18,
                    "url": "/tkt9xR1kNX5R9rCebASKck44si2.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 310,
        "added_at": "2019-05-05T23:15:49.594896Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 10,
            "tmdb_id": 122,
            "title": "The Lord of the Rings: The Return of the King",
            "original_title": "The Lord of the Rings: The Return of the King",
            "release_date": "2003-12-01",
            "synopsis": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
            "rating": 8.4,
            "genres": [
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 14,
                    "name": "Fantasy"
                },
                {
                    "id": 28,
                    "name": "Action"
                }
            ],
            "pictures": [
                {
                    "id": 19,
                    "url": "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 20,
                    "url": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 311,
        "added_at": "2019-05-05T23:15:49.605018Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 11,
            "tmdb_id": 454294,
            "title": "The Kid Who Would Be King",
            "original_title": "The Kid Who Would Be King",
            "release_date": "2019-01-16",
            "synopsis": "Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He soon unites his friends and enemies, and they become knights who join forces with the legendary wizard Merlin. Together, they must save mankind from the wicked enchantress Morgana and her army of supernatural warriors.",
            "rating": 6.1,
            "genres": [
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 14,
                    "name": "Fantasy"
                },
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 10751,
                    "name": "Family"
                }
            ],
            "pictures": [
                {
                    "id": 21,
                    "url": "/jmbgxBd86MshzQQvv5laKvOKoMm.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 22,
                    "url": "/kBuvLX6zynQP0sjyqbXV4jNaZ4E.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 312,
        "added_at": "2019-05-05T23:15:49.615528Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 12,
            "tmdb_id": 471507,
            "title": "Destroyer",
            "original_title": "Destroyer",
            "release_date": "2018-12-25",
            "synopsis": "Erin Bell is an LAPD detective who, as a young cop, was placed undercover with a gang in the California desert with tragic results. When the leader of that gang re-emerges many years later, she must work her way back through the remaining members and into her own history with them to finally reckon with the demons that destroyed her past.",
            "rating": 5.8,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 53,
                    "name": "Thriller"
                },
                {
                    "id": 80,
                    "name": "Crime"
                }
            ],
            "pictures": [
                {
                    "id": 23,
                    "url": "/rURV5xPzt9ZxEXAc4OQmxchGyZ8.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 24,
                    "url": "/sHw9gTdo43nJL82py0oaROkXXNr.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 313,
        "added_at": "2019-05-05T23:15:49.625643Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 13,
            "tmdb_id": 298250,
            "title": "Jigsaw",
            "original_title": "Jigsaw",
            "release_date": "2017-10-26",
            "synopsis": "Dead bodies begin to turn up all over the city, each meeting their demise in a variety of grisly ways. All investigations begin to point the finger at deceased killer John Kramer.",
            "rating": 6.1,
            "genres": [
                {
                    "id": 27,
                    "name": "Horror"
                },
                {
                    "id": 53,
                    "name": "Thriller"
                },
                {
                    "id": 80,
                    "name": "Crime"
                },
                {
                    "id": 9648,
                    "name": "Mystery"
                }
            ],
            "pictures": [
                {
                    "id": 25,
                    "url": "/e3ofKYdZ3jgNYuCriE5AAsHp4L6.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 26,
                    "url": "/2mUqHJG7ZiGwZYIylczFCsRPbXM.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 314,
        "added_at": "2019-05-05T23:15:49.635916Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 14,
            "tmdb_id": 603,
            "title": "The Matrix",
            "original_title": "The Matrix",
            "release_date": "1999-03-30",
            "synopsis": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
            "rating": 8.1,
            "genres": [
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 878,
                    "name": "Science Fiction"
                }
            ],
            "pictures": [
                {
                    "id": 27,
                    "url": "/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 28,
                    "url": "/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 315,
        "added_at": "2019-05-05T23:15:49.646997Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 15,
            "tmdb_id": 351286,
            "title": "Jurassic World: Fallen Kingdom",
            "original_title": "Jurassic World: Fallen Kingdom",
            "release_date": "2018-06-06",
            "synopsis": "Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
            "rating": 6.5,
            "genres": [
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 878,
                    "name": "Science Fiction"
                }
            ],
            "pictures": [
                {
                    "id": 29,
                    "url": "/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 30,
                    "url": "/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 316,
        "added_at": "2019-05-05T23:15:49.656692Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 16,
            "tmdb_id": 339877,
            "title": "Loving Vincent",
            "original_title": "Loving Vincent",
            "release_date": "2017-06-22",
            "synopsis": "The film brings the paintings of Vincent van Gogh to life to tell his remarkable story. Every one of the 65,000 frames of the film is an oil-painting hand-painted by 125 professional oil-painters who travelled from all across the world to the Loving Vincent studios in Poland and Greece to be a part of the production. As remarkable as Vincent’s brilliant paintings are his passionate and ill-fated life and mysterious death.",
            "rating": 8.2,
            "genres": [
                {
                    "id": 16,
                    "name": "Animation"
                },
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 9648,
                    "name": "Mystery"
                }
            ],
            "pictures": [
                {
                    "id": 31,
                    "url": "/adFgBkl35kdI0bSrWZO2xury1JB.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 32,
                    "url": "/56sq57kDm7XgyXBYrgJLumo0Jac.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 317,
        "added_at": "2019-05-05T23:15:49.667994Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 17,
            "tmdb_id": 396806,
            "title": "Anon",
            "original_title": "Anon",
            "release_date": "2018-05-03",
            "synopsis": "Set in a near-future world where there is no privacy, ignorance or anonymity, our private memories are recorded and crime almost ceases to exist. In trying to solve a series of unsolved murders, Sal Frieland stumbles onto a young woman who appears to have subverted the system and disappeared. She has no identity, no history and no record. Sal realizes it may not be the end of crime but the beginning. Known only as 'The Girl', Sal must find her before he becomes the next victim.",
            "rating": 5.9,
            "genres": [
                {
                    "id": 53,
                    "name": "Thriller"
                },
                {
                    "id": 878,
                    "name": "Science Fiction"
                }
            ],
            "pictures": [
                {
                    "id": 33,
                    "url": "/arYvUXhpNRU2GQQut67P5cR0c5m.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 34,
                    "url": "/xhBTO9n3fxy3HJt7WlR9h9vvVmk.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 318,
        "added_at": "2019-05-05T23:15:49.677979Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 18,
            "tmdb_id": 300681,
            "title": "Replicas",
            "original_title": "Replicas",
            "release_date": "2018-10-25",
            "synopsis": "A scientist becomes obsessed with returning his family to normalcy after a terrible accident.",
            "rating": 5.7,
            "genres": [
                {
                    "id": 53,
                    "name": "Thriller"
                },
                {
                    "id": 878,
                    "name": "Science Fiction"
                }
            ],
            "pictures": [
                {
                    "id": 35,
                    "url": "/sHPfBVFq7dlnXCz1zFdbEdwcBDJ.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 36,
                    "url": "/hhPBTAn9b4TYOxc1JYNsX4BFAlW.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 319,
        "added_at": "2019-05-05T23:15:49.690260Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 19,
            "tmdb_id": 198663,
            "title": "The Maze Runner",
            "original_title": "The Maze Runner",
            "release_date": "2014-09-10",
            "synopsis": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
            "rating": 7.1,
            "genres": [
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 53,
                    "name": "Thriller"
                },
                {
                    "id": 878,
                    "name": "Science Fiction"
                },
                {
                    "id": 9648,
                    "name": "Mystery"
                }
            ],
            "pictures": [
                {
                    "id": 37,
                    "url": "/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 38,
                    "url": "/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    },
    {
        "id": 320,
        "added_at": "2019-05-05T23:15:49.701237Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 20,
            "tmdb_id": 19995,
            "title": "Avatar",
            "original_title": "Avatar",
            "release_date": "2009-12-10",
            "synopsis": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
            "rating": 7.4,
            "genres": [
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 14,
                    "name": "Fantasy"
                },
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 878,
                    "name": "Science Fiction"
                }
            ],
            "pictures": [
                {
                    "id": 39,
                    "url": "/aHcth2AXzZSjhX7JYh7ie73YVNc.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 40,
                    "url": "/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg",
                    "category": {
                        "id": 1,
                        "name": "Poster"
                    }
                }
            ]
        }
    }
];

storiesOf("Watchlist", module)
    .add('Empty list', () => (
        <List
         list={ list }
        />
    ))
    .add('List with content', () => (
        <List list={ list } has_movies={ movies }/>
    ));

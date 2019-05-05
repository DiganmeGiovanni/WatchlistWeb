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
        "added_at": "2019-05-01T13:04:09.409567Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 1,
            "tmdb_id": 566555,
            "title": "Detective Conan: The Fist of Blue Sapphire",
            "original_title": "名探偵コナン 紺青の拳（フィスト）",
            "synopsis": "23rd Detective Conan Movie.",
            "rating": 0,
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
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 35,
                    "name": "Comedy"
                },
                {
                    "id": 9648,
                    "name": "Mystery"
                }
            ],
            "pictures": [
                {
                    "id": 1,
                    "url": "/wf6VDSi4aFCZfuD8sX8JAKLfJ5m.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 2,
                    "url": "/1GyvpwvgswOrHvxjnw2FBLNkTyo.jpg",
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
        "added_at": "2019-05-01T13:04:09.416731Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 2,
            "tmdb_id": 298250,
            "title": "Jigsaw",
            "original_title": "Jigsaw",
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
                    "id": 3,
                    "url": "/e3ofKYdZ3jgNYuCriE5AAsHp4L6.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 4,
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
        "id": 303,
        "added_at": "2019-05-01T13:04:09.424703Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 3,
            "tmdb_id": 378236,
            "title": "The Emoji Movie",
            "original_title": "The Emoji Movie",
            "synopsis": "Gene, a multi-expressional emoji, sets out on a journey to become a normal emoji.",
            "rating": 5.4,
            "genres": [
                {
                    "id": 16,
                    "name": "Animation"
                },
                {
                    "id": 35,
                    "name": "Comedy"
                },
                {
                    "id": 10751,
                    "name": "Family"
                }
            ],
            "pictures": [
                {
                    "id": 5,
                    "url": "/kTrgxhRSj2sun89bDbnGCPBiey6.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 6,
                    "url": "/f5pF4OYzh4wb1dYL2ARQNdqUsEZ.jpg",
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
        "added_at": "2019-05-01T13:04:09.433025Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 4,
            "tmdb_id": 300681,
            "title": "Replicas",
            "original_title": "Replicas",
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
                    "id": 7,
                    "url": "/sHPfBVFq7dlnXCz1zFdbEdwcBDJ.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 8,
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
        "id": 305,
        "added_at": "2019-05-01T13:04:09.440949Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 5,
            "tmdb_id": 489925,
            "title": "Eighth Grade",
            "original_title": "Eighth Grade",
            "synopsis": "Thirteen-year-old Kayla endures the tidal wave of contemporary suburban adolescence as she makes her way through the last week of middle school — the end of her thus far disastrous eighth grade year — before she begins high school.",
            "rating": 7.4,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 35,
                    "name": "Comedy"
                }
            ],
            "pictures": [
                {
                    "id": 9,
                    "url": "/7cDZkagW1YTnT4nP1BYrLPSd04B.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 10,
                    "url": "/xTa9cLhGHfQ7084UvoPQ2bBXKqd.jpg",
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
        "added_at": "2019-05-01T13:04:09.449624Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 6,
            "tmdb_id": 508763,
            "title": "A Dog's Way Home",
            "original_title": "A Dog's Way Home",
            "synopsis": "A Dog’s Way Home chronicles the heartwarming adventure of Bella, a dog who embarks on an epic 400-mile journey home after she is separated from her beloved human.",
            "rating": 6.5,
            "genres": [
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 10751,
                    "name": "Family"
                }
            ],
            "pictures": [
                {
                    "id": 11,
                    "url": "/w7MsyOpP003FYhsiTgVHa3rNsrz.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 12,
                    "url": "/pZn87R7gtmMCGGO8KeaAfZDhXLg.jpg",
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
        "added_at": "2019-05-01T13:04:09.457329Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 7,
            "tmdb_id": 4922,
            "title": "The Curious Case of Benjamin Button",
            "original_title": "The Curious Case of Benjamin Button",
            "synopsis": "Born under unusual circumstances, Benjamin Button springs into being as an elderly man in a New Orleans nursing home and ages in reverse. Twelve years after his birth, he meets Daisy, a child who flits in and out of his life as she grows up to be a dancer. Though he has all sorts of unusual adventures over the course of his life, it is his relationship with Daisy, and the hope that they will come together at the right time, that drives Benjamin forward.",
            "rating": 7.5,
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
                    "id": 53,
                    "name": "Thriller"
                },
                {
                    "id": 9648,
                    "name": "Mystery"
                },
                {
                    "id": 10749,
                    "name": "Romance"
                }
            ],
            "pictures": [
                {
                    "id": 13,
                    "url": "/u4izHlsHk8jwalt5m7E2uzP8q9E.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 14,
                    "url": "/gjMR102u5hPdIAWX7O2rim8ZWgA.jpg",
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
        "added_at": "2019-05-01T13:04:09.465531Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 8,
            "tmdb_id": 1724,
            "title": "The Incredible Hulk",
            "original_title": "The Incredible Hulk",
            "synopsis": "Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.",
            "rating": 6.2,
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
                    "id": 15,
                    "url": "/cVpBJxRBIwTjajKQ08TE6BINTEu.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 16,
                    "url": "/gCQ4e8klADtzoa6bL7XLPnjiUIg.jpg",
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
        "added_at": "2019-05-01T13:04:09.475767Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 9,
            "tmdb_id": 460019,
            "title": "Truth or Dare",
            "original_title": "Truth or Dare",
            "synopsis": "A harmless game of \"Truth or Dare\" among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.",
            "rating": 6,
            "genres": [
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
                    "id": 17,
                    "url": "/jrZTNZmcjUVh7DPy6txp93Aczpa.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 18,
                    "url": "/kdkNaQYZ7dhM80LsnAGKpH8ca2g.jpg",
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
        "added_at": "2019-05-01T13:04:09.482930Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 10,
            "tmdb_id": 293660,
            "title": "Deadpool",
            "original_title": "Deadpool",
            "synopsis": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
            "rating": 7.6,
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
                    "id": 35,
                    "name": "Comedy"
                }
            ],
            "pictures": [
                {
                    "id": 19,
                    "url": "/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 20,
                    "url": "/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
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
        "added_at": "2019-05-01T13:04:09.490857Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 11,
            "tmdb_id": 1585,
            "title": "It's a Wonderful Life",
            "original_title": "It's a Wonderful Life",
            "synopsis": "A holiday favourite for generations...  George Bailey has spent his entire life giving to the people of Bedford Falls.  All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company.  But on Christmas Eve the business's $8,000 is lost and George's troubles begin.",
            "rating": 8.2,
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
                    "id": 10751,
                    "name": "Family"
                }
            ],
            "pictures": [
                {
                    "id": 21,
                    "url": "/nMomMy1sD3SN2QsKop3zBXCJfDJ.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 22,
                    "url": "/rgj6QjdyCeDrO9KGt1kusGyhvb2.jpg",
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
        "added_at": "2019-05-01T13:04:09.499419Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 12,
            "tmdb_id": 627,
            "title": "Trainspotting",
            "original_title": "Trainspotting",
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
                    "id": 23,
                    "url": "/Aw0z8bUhGljT0ots6udf1MTLEMi.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 24,
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
        "id": 313,
        "added_at": "2019-05-01T13:04:09.507363Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 13,
            "tmdb_id": 460885,
            "title": "Mandy",
            "original_title": "Mandy",
            "synopsis": "The Shadow Mountains, 1983. Red and Mandy lead a loving and peaceful existence; but when their pine-scented haven is savagely destroyed, Red is catapulted into a phantasmagoric journey filled with bloody vengeance and laced with fire.",
            "rating": 6.2,
            "genres": [
                {
                    "id": 14,
                    "name": "Fantasy"
                },
                {
                    "id": 27,
                    "name": "Horror"
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
                    "id": 9648,
                    "name": "Mystery"
                }
            ],
            "pictures": [
                {
                    "id": 25,
                    "url": "/tNa19CK0CQZl5rxZ35QRdKAT2s0.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 26,
                    "url": "/m0yf7J7HsKeK6E81SMRcX8vx6mH.jpg",
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
        "added_at": "2019-05-01T13:04:09.515564Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 14,
            "tmdb_id": 395990,
            "title": "Death Wish",
            "original_title": "Death Wish",
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
                    "id": 27,
                    "url": "/uQqQvmptJLPTcWDrZXn22p7j7s3.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 28,
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
        "id": 315,
        "added_at": "2019-05-01T13:04:09.523608Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 15,
            "tmdb_id": 593959,
            "title": "Pororo 5: Treasure Island Adventure",
            "original_title": "뽀로로 극장판 보물섬 대모험",
            "synopsis": "",
            "rating": 0,
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
                    "id": 16,
                    "name": "Animation"
                }
            ],
            "pictures": [
                {
                    "id": 29,
                    "url": "/3iy8XN5nlCewKP9YGlNEuHOo8dq.jpg",
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
        "added_at": "2019-05-01T13:04:09.532078Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 16,
            "tmdb_id": 535167,
            "title": "The Wandering Earth",
            "original_title": "The Wandering Earth",
            "synopsis": "The sun is dying out, a group of brave astronauts set out to find a new home for the entire human race and the planet.",
            "rating": 6.8,
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
                    "id": 35,
                    "name": "Comedy"
                },
                {
                    "id": 878,
                    "name": "Science Fiction"
                }
            ],
            "pictures": [
                {
                    "id": 30,
                    "url": "/3PjpT6wBsfXawa1PPTEkYGHRaYs.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 31,
                    "url": "/nhWgpdcKbwRlVR9YaNIblnREqaK.jpg",
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
        "added_at": "2019-05-01T13:04:09.539859Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 17,
            "tmdb_id": 500682,
            "title": "The Highwaymen",
            "original_title": "The Highwaymen",
            "synopsis": "In 1934, Frank Hamer and Manny Gault, two former Texas Rangers, are commissioned to put an end to the wave of vicious crimes perpetrated by Bonnie Parker and Clyde Barrow, a notorious duo of infamous robbers and cold-blooded killers who nevertheless are worshiped by the public.",
            "rating": 6.7,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
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
                    "id": 32,
                    "url": "/pZ78ksjPlXf3q2EeONN8WdHE03Y.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 33,
                    "url": "/4bRYg4l12yDuJvAfqvUOPnBrxno.jpg",
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
        "added_at": "2019-05-01T13:04:09.548093Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 18,
            "tmdb_id": 76617,
            "title": "Texas Chainsaw 3D",
            "original_title": "Texas Chainsaw 3D",
            "synopsis": "A young woman learns that she has inherited a Texas estate from her deceased grandmother. After embarking on a road trip with friends to uncover her roots, she finds she is the sole owner of a lavish, isolated Victorian mansion. But her newfound wealth comes at a price as she stumbles upon a horror that awaits her in the mansion’s dank cellars.",
            "rating": 5.3,
            "genres": [
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
                    "id": 34,
                    "url": "/syZp6erObU03jSEzc3Kvrtk9gV1.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 35,
                    "url": "/p0kJOoNvwnWgmvKvL4GqlV3OPUV.jpg",
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
        "added_at": "2019-05-01T13:04:09.556234Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 19,
            "tmdb_id": 483906,
            "title": "Polar",
            "original_title": "Polar",
            "synopsis": "When a retiring assassin realizes that he is the target of a hit, he winds up back in the game going head to head with a gang of younger, ruthless killers.",
            "rating": 6.3,
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
                    "id": 80,
                    "name": "Crime"
                }
            ],
            "pictures": [
                {
                    "id": 36,
                    "url": "/u8CP7EeWbYMlIVqEoKAt6OYsEe1.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 37,
                    "url": "/qOBEpKVLl8Q9CZScbOcRRVISezV.jpg",
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
        "added_at": "2019-05-01T13:04:09.564545Z",
        "seen_at": null,
        "added_by": 5,
        "movie": {
            "id": 20,
            "tmdb_id": 339877,
            "title": "Loving Vincent",
            "original_title": "Loving Vincent",
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
                    "id": 38,
                    "url": "/adFgBkl35kdI0bSrWZO2xury1JB.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 39,
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
        "id": 401,
        "added_at": "2019-05-01T19:21:43.346417Z",
        "seen_at": null,
        "added_by": 2,
        "movie": {
            "id": 81,
            "tmdb_id": 550,
            "title": "Fight Club",
            "original_title": "Fight Club",
            "synopsis": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            "rating": 8.4,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                }
            ],
            "pictures": [
                {
                    "id": 159,
                    "url": "/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg",
                    "category": {
                        "id": 2,
                        "name": "Backdrop"
                    }
                },
                {
                    "id": 160,
                    "url": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
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

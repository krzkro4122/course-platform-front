import { Task, Course, League, LeagueType, User } from './types';

export const TASKS: Task[] = [
    {
        id: "1",
        question: "Who is Ligma?",
        answers: [
            {
                text: "I am.",
                isCorrect: false
            },
            {
                text: "He is -> 🚶‍♂️",
                isCorrect: false
            },
            {
                text: "George Washingballs",
                isCorrect: true
            }
        ]
    },
    {
        id: "2",
        question: "Where does Hugh Mongoose live?",
        answers: [
            {
                text: "In a small shed behind the bridge",
                isCorrect: true
            },
            {
                text: "Kentucky, Arizona",
                isCorrect: false
            },
            {
                text: "Washingballs???",
                isCorrect: false
            }
        ]
    },
    {
        id: "3",
        question: "Do stormtroopers poop?",
        answers: [
            {
                text: "Maybe once a day",
                isCorrect: false
            },
            {
                text: "It's in the name, duh",
                isCorrect: false
            },
            {
                text: "I can't stop washingballs",
                isCorrect: true
            }
        ]
    },
    {
        id: "4",
        question: "Is Alan Walker really walking?",
        answers: [
            {
                text: "I am.",
                isCorrect: false
            },
            {
                text: "He is ---> 🚶‍♂️",
                isCorrect: true
            },
            {
                text: "George Washinballs",
                isCorrect: false
            }
        ]
    },
    {
        id: "5",
        question: "Is this a question?",
        answers: [
            {
                text: "That depends...",
                isCorrect: false
            },
            {
                text: "Yes (firmly)",
                isCorrect: true
            },
            {
                text: "Ye-, yeah (shivering)",
                isCorrect: false
            }
        ]
    },
    {
        id: "6",
        question: "Do dishwashers cry during a washing cycle?",
        answers: [
            {
                text: "They shed a lot of tears",
                isCorrect: true
            },
            {
                text: "Idk, i am not a zoologist",
                isCorrect: false
            },
            {
                text: "I just hope they're happy",
                isCorrect: false
            }
        ]
    },
    {
        id: "7",
        question: "Given three answers, which one is correct?",
        answers: [
            {
                text: "The third answer",
                isCorrect: false
            },
            {
                text: "Me",
                isCorrect: false
            },
            {
                text: "I really, reaaaaally like cats",
                isCorrect: true
            }
        ]
    },
    {
        id: "8",
        question: "Would you mind?",
        answers: [
            {
                text: "Probably",
                isCorrect: true
            },
            {
                text: "I hope this isn't a math question",
                isCorrect: false
            },
            {
                text: "I have no mind of my own",
                isCorrect: false
            }
        ]
    },
    {
        id: "9",
        question: "Who invented racism?",
        answers: [
            {
                text: "MGK",
                isCorrect: false
            },
            {
                text: "Definitely not Eminem",
                isCorrect: false
            },
            {
                text: "Perhaps it was Eminem",
                isCorrect: true
            }
        ]
    },
    {
        id: "10",
        question: "Did any1 even read this?",
        answers: [
            {
                text: "Probably not",
                isCorrect: false
            },
            {
                text: "Chill, these are just mock questions",
                isCorrect: true
            },
            {
                text: "I really shouldn't be the one doing this...",
                isCorrect: false
            }
        ]
    },
    {
        id: "11",
        question: "Why did the chicken cross the road?",
        answers: [
            {
                text: "That rhymes with toad!",
                isCorrect: false
            },
            {
                text: "It was trying to abolish its own falsehoods",
                isCorrect: true
            },
            {
                text: "It's going to LIDL",
                isCorrect: false
            }
        ]
    },
    {
        id: "12",
        question: "Is this the final question?",
        answers: [
            {
                text: "I sure hope so",
                isCorrect: true
            },
            {
                text: "I reckon that those will not be seen. If you do see this question please tell me",
                isCorrect: false
            },
            {
                text: "WASHINGBALLS!!!",
                isCorrect: false
            }
        ]
    }
]

export const COURSES: Course[] = [
    {
        id: "1",
        title: "Kurzgesagt",
        taskIds: ["1", "2", "3"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOibtncbyNaJVeUjVotNRl0r00hkiUfYEEv5XmNdw=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "2",
        title: "Vsauce",
        taskIds: ["3", "4", "1"],
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROGg8l8rAK_TyIhzUHVBzkJtxzgHq0cc6rA&usqp=CAU",
    },
    {
        id: "3",
        title: "Veritasium",
        taskIds: ["5", "6", "1"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqPviJ3x9GiSEuQhWNKNipzDMOXrJ0Ll51xR5osXMw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "4",
        title: "Fireship",
        taskIds: ["7", "8", "1"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOSWK9LIZ9xGvDbBZ7gjBK1ayNCxK0jKMOq1FirfA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "5",
        title: "Pasja Informatyki",
        taskIds: ["9", "10", "1"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOpZQrvexqYG2I9eBetWZIsAVmp_VKxroi9cBebNA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "6",
        title: "3Blue1Brown",
        taskIds: ["11", "12", "1"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOpvSaBjyydwPBNxyB_sckPMQj09C89VqRBsgmhtg=s900-c-k-c0x00ffffff-no-rj",
    }
];

export const LEAGUES: League[] = [
    {
        id: "1",
        type: LeagueType.FIRE,
        color: "#ec8364",
        imageSrc: "https://archives.bulbagarden.net/media/upload/e/e5/FireIC_NPSnap.png",
        courseIds: ["1", "2", "3", "6"]
    },
    {
        id: "2",
        type: LeagueType.BUG,
        color: "#bcd35c",
        imageSrc: "https://archives.bulbagarden.net/media/upload/e/e1/BugIC_NPSnap.png",
        courseIds: ["4"]
    },
    {
        id: "3",
        type: LeagueType.GHOST,
        color: "#a4abdb",
        imageSrc: "https://archives.bulbagarden.net/media/upload/7/7a/GhostIC_NPSnap.png",
        courseIds: ["5"]
    }
];

export const USERS: User[] = [
    {
        id: "0",
        leagueId: "1",
        score: 69,
        username: "Layor"
    },
    {
        id: "1",
        leagueId: "1",
        score: 100,
        username: "Ementan"
    },
    {
        id: "2",
        leagueId: "1",
        score: 55,
        username: "Dutch"
    },
    {
        id: "3",
        leagueId: "2",
        score: 23,
        username: "Derek"
    },
    {
        id: "4",
        leagueId: "3",
        score: 501,
        username: "Mark"
    }
]
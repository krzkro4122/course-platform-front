import { Task, Course, League, LeagueType } from './types';

export const TASKS: Task[] = [
    {
        id: "1",
        index: 0,
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
        index: 1,
        question: "Where does Hugh Mongoose live?",
        answers: [
            {
                text: "In a small shed behind the bridge",
                isCorrect: false
            },
            {
                text: "Kentucky, Arizona",
                isCorrect: false
            },
            {
                text: "Washingballs???",
                isCorrect: true
            }
        ]
    },
    {
        id: "3",
        index: 2,
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
        index: 3,
        question: "Is Alan Walker really walking?",
        answers: [
            {
                text: "I am.",
                isCorrect: false
            },
            {
                text: "He is ---> 🚶‍♂️",
                isCorrect: false
            },
            {
                text: "George Washinballs",
                isCorrect: true
            }
        ]
    },
    {
        id: "5",
        index: 4,
        question: "Is this a question?",
        answers: [
            {
                text: "That depends...",
                isCorrect: false
            },
            {
                text: "Yes (firmly)",
                isCorrect: false
            },
            {
                text: "Ye-, yeah (shivering)",
                isCorrect: true
            }
        ]
    },
    {
        id: "6",
        index: 5,
        question: "Do dishwashers cry during a washing cycle?",
        answers: [
            {
                text: "They shed a lot of tears",
                isCorrect: false
            },
            {
                text: "Idk, i am not a zoologist",
                isCorrect: false
            },
            {
                text: "I just hope they're happy",
                isCorrect: true
            }
        ]
    },
    {
        id: "7",
        index: 6,
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
        index: 7,
        question: "Would you mind?",
        answers: [
            {
                text: "Probably",
                isCorrect: false
            },
            {
                text: "I hope this isn't a math question",
                isCorrect: false
            },
            {
                text: "I have no mind of my own",
                isCorrect: true
            }
        ]
    },
    {
        id: "9",
        index: 8,
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
        index: 9,
        question: "Did any1 even read this?",
        answers: [
            {
                text: "Probably not",
                isCorrect: false
            },
            {
                text: "Chill, these are just mock questions",
                isCorrect: false
            },
            {
                text: "I really shouldn't be the one doing this...",
                isCorrect: true
            }
        ]
    },
    {
        id: "11",
        index: 10,
        question: "Why did the chicken cross the road?",
        answers: [
            {
                text: "That rhymes with toad!",
                isCorrect: false
            },
            {
                text: "It was trying to abolish its own falsehoods",
                isCorrect: false
            },
            {
                text: "It's going to LIDL",
                isCorrect: true
            }
        ]
    },
    {
        id: "12",
        index: 11,
        question: "Is this the final question?",
        answers: [
            {
                text: "I sure hope so",
                isCorrect: false
            },
            {
                text: "I reckon that those will not be seen. If you do see this question please tell me",
                isCorrect: false
            },
            {
                text: "WASHINGBALLS!!!",
                isCorrect: true
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
        taskIds: ["1", "3", "4"],
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROGg8l8rAK_TyIhzUHVBzkJtxzgHq0cc6rA&usqp=CAU",
    },
    {
        id: "3",
        title: "Veritasium",
        taskIds: ["1", "5", "6"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqPviJ3x9GiSEuQhWNKNipzDMOXrJ0Ll51xR5osXMw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "4",
        title: "Fireship",
        taskIds: ["1", "7", "8"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOSWK9LIZ9xGvDbBZ7gjBK1ayNCxK0jKMOq1FirfA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "5",
        title: "Pasja Informatyki",
        taskIds: ["1", "9", "10"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOpZQrvexqYG2I9eBetWZIsAVmp_VKxroi9cBebNA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        id: "6",
        title: "3Blue1Brown",
        taskIds: ["1", "11", "12"],
        imageSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqOpvSaBjyydwPBNxyB_sckPMQj09C89VqRBsgmhtg=s900-c-k-c0x00ffffff-no-rj",
    }
];

export const LEAGUES: League[] = [
    {
        id: "1",
        type: LeagueType.FIRE,
        imageSrc: "https://archives.bulbagarden.net/media/upload/e/e5/FireIC_NPSnap.png",
        courseIds: ["1", "2", "3", "6"]
    },
    {
        id: "2",
        type: LeagueType.BUG,
        imageSrc: "https://archives.bulbagarden.net/media/upload/e/e1/BugIC_NPSnap.png",
        courseIds: ["4"]
    },
    {
        id: "3",
        type: LeagueType.GHOST,
        imageSrc: "https://archives.bulbagarden.net/media/upload/7/7a/GhostIC_NPSnap.png",
        courseIds: ["5"]
    }
];

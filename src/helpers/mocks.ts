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
        id: "1",
        index: 0,
        question: "Who is Ligma?",
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
        id: "2",
        index: 0,
        question: "Who is Ligma?",
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
        id: "3",
        index: 0,
        question: "Who is Ligma?",
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
        id: "4",
        index: 0,
        question: "Who is Ligma?",
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
        index: 0,
        question: "Who is Ligma?",
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
        id: "6",
        index: 0,
        question: "Who is Ligma?",
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
        id: "7",
        index: 0,
        question: "Who is Ligma?",
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
        id: "8",
        index: 0,
        question: "Who is Ligma?",
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
        id: "9",
        index: 0,
        question: "Who is Ligma?",
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
        id: "10",
        index: 0,
        question: "Who is Ligma?",
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
        id: "11",
        index: 0,
        question: "Who is Ligma?",
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
        id: "12",
        index: 0,
        question: "Who is Ligma?",
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

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
        taskIds: ["1", "2", "3"]
    },
    {
        id: "2",
        title: "Vsauce",
        taskIds: ["1", "3", "4"]
    },
    {
        id: "3",
        title: "Veritasium",
        taskIds: ["1", "5", "6"]
    },
    {
        id: "4",
        title: "Fireship",
        taskIds: ["1", "7", "8"]
    },
    {
        id: "5",
        title: "Pasja Informatyki",
        taskIds: ["1", "9", "10"]
    },
    {
        id: "6",
        title: "3Blue1Brown",
        taskIds: ["1", "11", "12"]
    }
];

export const LEAGUES: League[] = [
    {
        id: "1",
        type: LeagueType.ELECTRIC,
        courseIds: ["1", "2", "3", "6"]
    },
    {
        id: "2",
        type: LeagueType.ROCK,
        courseIds: ["4"]
    },
    {
        id: "3",
        type: LeagueType.GRASS,
        courseIds: ["5"]
    }
];

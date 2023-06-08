export type Task = {
    id: string,
    index: number,
    question: string,
    answers: {
        text: string,
        isCorrect: boolean
    }[]
}

export type Course = {
    id: string,
    title: string,
    taskIds: string[]
};

export enum LeagueType {
    FAIRY = "fairy",
    GROUND = "ground",
    STEEL = "steel",
    ELECTRIC = "electric",
    GRASS = "grass",
    ROCK = "rock"
}

export type League = {
    id: string,
    type: LeagueType
    courseIds: string[]
};
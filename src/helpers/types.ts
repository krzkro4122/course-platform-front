export type Task = {
    id: string,
    question: string,
    answers: {
        text: string,
        isCorrect: boolean
    }[]
}

export type Course = {
    id: string,
    title: string,
    taskIds: string[],
    imageSrc: string
};

export enum LeagueType {
    FAIRY = "fairy",
    GROUND = "ground",
    STEEL = "steel",
    ELECTRIC = "electric",
    GRASS = "grass",
    ROCK = "rock",
    GHOST = "ghost",
    FIRE = "fire",
    BUG = "bug"
}

export type League = {
    id: string,
    type: LeagueType,
    color: string,
    imageSrc: string,
    courseIds: string[]
};
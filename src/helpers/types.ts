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

export type User = {
    id: string,
    username: Username,
    leagueId: string | null,
    score: number
}

export type Username = String | undefined;
export type Password = String | undefined;
export type FirstName = String | undefined;
export type LastName = String | undefined;
export type Email = String | undefined;
export type Token = string;

export enum FormType {
    Login,
    Register,
}

export interface RegistrationInfo {
    email: Email,
    password: Password,
    firstName: FirstName,
    LastName: LastName,
}
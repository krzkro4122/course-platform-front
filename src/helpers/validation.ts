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

export function validateUsername(username: Username) {
    // TODO - username validation
    return !!username;
}

export function validateFirstName(firstName: FirstName) {
    // TODO - firstName validation
    return !!firstName;
}

export function validateLastName(lastName: LastName) {
    // TODO - lastName validation
    return !!lastName;
}

export function validatePassword(password: Password) {
    // TODO - password validation
    return !!password;
}


export function validateEmail(email: Email) {
    // TODO - password validation
    return !!email;
}

export function validateToken(token: Token) {
    // TODO - password validation
    return !!token;
}
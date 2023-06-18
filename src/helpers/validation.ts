import { Email, FirstName, LastName, Password, Token, Username } from "./types";

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
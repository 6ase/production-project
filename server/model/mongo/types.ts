export interface IUser {
 firstName: string,
 lastName: string,
 fathersName: string,
 userEmail: string,
 salt: string,
 password: string,
 refreshTokens: [ string ],
 accesTokens: [ string ]
}
export interface IUser {
 _id: string,
 userEmail: string,
 name: string,
 isActivated: boolean,
 activationLink: string,
 password: string,
 refreshTokens?: [ string ],
 accesTokens?: [ string ],
 save: () => void
}
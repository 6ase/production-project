
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT:string,
        BACKEND_URL:string,
        CLIENT_URL:string,
        MAILER_LOGIN:string,
        MAILER_PASSWORD:string,
        DB_NAME:string,
        JWT_ACCESS_SECRET:string,
        JWT_REFRESH_SECRET:string,
        MAX_TOKENS_ALLOWED:number
      }
    }
  }
export {}
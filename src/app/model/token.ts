export class Token {
    message:string = "";
    statusCode:number = 0;
    response:Response = new Response();
}
class Response
{
    token:string = "";
    refreshToken:string = "";
    expires:Date = new Date();
    email:string = "";
    userId:number = 0;
    isResetPassword:string = "";
}


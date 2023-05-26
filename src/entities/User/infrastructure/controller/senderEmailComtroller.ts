import { Request, Response } from "express";
import { SenderEmail } from "../../application/senderEmail";

export class SenderEmailController {

    constructor(private readonly senderEmail:SenderEmail){}

    async run (req:Request, res:Response){
        const userId = req.params.id;
        await this.senderEmail.run(userId);
        res.status(200).send();
    }
}
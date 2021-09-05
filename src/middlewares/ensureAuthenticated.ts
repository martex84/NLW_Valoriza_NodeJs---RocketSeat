import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const decode = verify(token, "ad1f6dd8a6cb6247debf3599a46a02de");
        console.log(decode)
    }
    catch (err) {
        return response.status(401).end();
    }

    return next();

    return response.status(401).json({
        error: "Unauthorized"
    })
}
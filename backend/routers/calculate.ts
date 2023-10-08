import { Router, Request, Response } from "express";

//type
type valuesType = {
    value1: string;
    value2: string;
};

//routerの設定
export const calculateRouter: Router = Router();

//足し算
calculateRouter.post("/plus", (req: Request, res: Response) => {
    const values: valuesType = req.body;

    try {
        const numResult: number = Number(values.value1) + Number(values.value2);
        const result = String(numResult);
        return res.status(200).json(result); 
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "計算に失敗しました" });
    };
});

//引き算
calculateRouter.post("/minus", (req: Request, res: Response) => {
    const values: valuesType = req.body;

    try {
        const numResult: number = Number(values.value1) - Number(values.value2);
        const result = String(numResult);
        return res.status(200).json(result); 
    } catch(err) {
        console.error(err);
        return res.status(500).json({ error: "計算に失敗しました" });
    };
});

//かけ算
calculateRouter.post("/multiplication", (req: Request, res: Response) => {
    const values: valuesType = req.body;

    try {
        const numResult: number = Number(values.value1) * Number(values.value2);
        const result = String(numResult);
        return res.status(200).json(result); 
    } catch(err) {
        console.error(err);
        return res.status(500).json({ error: "計算に失敗しました" });
    };
});

//割り算
calculateRouter.post("/division", (req: Request, res: Response) => {
    const values: valuesType = req.body;

    try {
        const numResult: number = Math.floor((Number(values.value1) / Number(values.value2)) * 100) / 100;
        const result = String(numResult);
        return res.status(200).json(result); 
    } catch(err) {
        console.error(err);
        return res.status(500).json({ error: "計算に失敗しました" });
    };
});

calculateRouter.get("/test", (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: "OK", version: 2 });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "サーバーエラーです" })
    }
});
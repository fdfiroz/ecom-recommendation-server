//controllers/recommendationController.ts
import { getRecommendations } from "../services/recommendationService";
import { Request, Response } from 'express';

export const recommendProducts = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const recommendations = await getRecommendations(userId);
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
};

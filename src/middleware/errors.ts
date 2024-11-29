import type { Request, Response } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error(`[ERROR] Request ${req.method} ${req.path}\n`, err.stack);
  res.status(500).json({
    success: false,
    status: 'error',
    error: 'error',
    message: err.message,
  });
}

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    status: 'error',
    error: 'error',
    message: 'Not found',
  });
}

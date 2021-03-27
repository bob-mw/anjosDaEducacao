import { Request, Response, NextFunction } from 'express'
import AppError from '@errors/appError'

export default function
(err: Error, request: Request, response: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      error: err.message
    })
  }

  return response.status(500).json({
    error: 'Error interno'
  })
}

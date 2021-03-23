import { sign } from 'jsonwebtoken'
import { Request, Response } from 'express'

async function EnsureAuthenticated (request: Request, response: Response) {
  const { authentication } = request.headers

  const [] = authentication.split(' ')
}

export default EnsureAuthenticated

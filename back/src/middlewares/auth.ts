import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '@config/auth'

interface IToken {
  iat: number;
  exp: number;
  sub: string;
}

export default (request: Request, response: Response, next: NextFunction) => {
  const auth_header = request.headers.authorization

  if(!auth_header) {
    throw new Error('Você precisa estar logado para acessar isso')
  }

  const [type, token] = auth_header.split(' ')

  const { secret } = authConfig

  try {
    const decoded = verify(token, secret)

    const { sub } = decoded as IToken
    
    request.user = {
      id: sub
    }

    return next()
  }
  catch (err) {
    throw new Error('Token invalido ou espirado')
  }
}

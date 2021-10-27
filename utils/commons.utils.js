exports.multipleColumnSet = (object) => {
  if (typeof object !== 'object') {
    throw new Error('utils multipleColumnSet: Error param')
  }

  const keys = Object.keys(object)
  const values = Object.values(object)

  const columnSet = keys.map((key) => `${key} = ?`).join(' AND ')

  return {
    columnSet,
    values,
  }
}

exports.awaitHandlerFactory = (middleware) => async (req, res, next) => {
  try {
    await middleware(req, res, next)
  } catch (err) {
    next(err)
  }
}

export const asyncHandler = (fun) => {
  return (req, res, next) => {
    fun(req, res, next).catch((err) => {
      return next(new Error(err));
    });
  };
};

export const errorHandling = (err, req, res, next) => {
  if (err) {
    return res
      .status(err.cause || 500)
      .json({ message: err.message, stack: err.stack });
  }
};

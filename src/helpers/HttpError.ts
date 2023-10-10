const errorMessageList: Record<number, string> = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict',
};

const HttpError = (status: number, message: string = errorMessageList[status]): Error => {
  const error = new Error(message);
  (error as any).status = status;
  return error;
};

export default HttpError;

import CustomErrors from './CustomErrors';

const createSuccessResponse = (ctx, data = {}) => ctx.body = {
  ok: true,
  data,
};

const createErrorResponse = (ctx, errorEl, options = {}) => {
  let customError;

  if (typeof errorEl === 'string') {
    customError = errorEl && CustomErrors[errorEl]
      ? CustomErrors[errorEl]
      : CustomErrors.BAD_REQUEST;
  } else if (typeof errorEl === 'object') {
    customError = errorEl;
  } else {
    customError = CustomErrors.BAD_REQUEST;
  }

  const { data = {}, realError = null } = options;
  const body = {
    code: customError.errorCode,
    ok: false,
    data,
  };

  const message = customError.message ? customError.message : '';
  const statusCode = customError.statusCode ?
    customError.statusCode :
    CustomErrors.BAD_REQUEST.statusCode;
  ctx.privateState.realError = realError;

  return ctx.throw({
    statusCode,
    message,
    body,
  });
};

const createValidateError = (validation, ctx, errorEl, options) => {
  if (!validation) {
    return createErrorResponse(ctx, errorEl, options);
  }
};

export { createValidateError, createSuccessResponse, createErrorResponse };

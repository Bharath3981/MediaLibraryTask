//Generate success or error response
interface ResponseData {
  [key: string]: any;
}

interface Response {
  status: (code: number) => Response;
  json: (body: { message: string; data: ResponseData }) => void;
}

export const generateResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data: ResponseData = {}
) => {
  res.status(statusCode).json({
    message,
    data,
  });
};

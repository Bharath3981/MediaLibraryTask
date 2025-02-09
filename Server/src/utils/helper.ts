//Generate success or error response
interface ResponseData {
  [key: string]: any;
}

interface Response {
  status: (code: number) => Response;
  json: (body: { message: string; data: ResponseData }) => void;
}

const preapreCustomProps = (customProps: any) => {
  const customPropsWhereClauseAndArr: any = [];
  const customPropsWhereClause: any = {
    AND: [],
  };
  const customPropsArr = customProps
    .split(",")
    .map((prop: string) => prop.trim());
  customPropsArr.forEach((prop: string) => {
    const [key, value] = prop.split(":");
    customPropsWhereClauseAndArr.push({
      customProps: {
        path: [key],
        equals: value,
      },
    });
  });
  customPropsWhereClause.AND = customPropsWhereClauseAndArr;
  return customPropsWhereClause;
};

export const prepareWhereClause = (queryObj: any) => {
  let whereClause: any = {};
  for (const key in queryObj) {
    if (queryObj.hasOwnProperty(key)) {
      if (key === "tags") {
        whereClause[key] = {
          hasSome: queryObj[key].split(",").map((tag: string) => tag.trim()),
        };
      }
      if (key === "title") {
        whereClause[key] = {
          contains: queryObj[key],
        };
      }
      if (key === "customProps") {
        whereClause["AND"] = preapreCustomProps(queryObj[key]).AND;
      }
    }
  }
  return whereClause;
};

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

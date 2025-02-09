import queryString from "query-string";

export const sendRequest = async <T>(props: IRequest) => {
  const {
    url: baseUrl, // Renaming to avoid reassignment
    method,
    body,
    queryParams = {},
    useCredentials = false,
    headers = {},
    nextOption = {},
  } = props;

  // Construct final URL with query parameters
  const url = Object.keys(queryParams).length
    ? `${baseUrl}?${queryString.stringify(queryParams)}`
    : baseUrl;

  const options: RequestInit = {
    // Use RequestInit instead of any
    method,
    headers: new Headers({ "content-type": "application/json", ...headers }),
    body: body ? JSON.stringify(body) : null,
    ...nextOption,
  };
  if (useCredentials) options.credentials = "include";

  return fetch(url, options).then(async (res) => {
    const json = await res.json();
    return res.ok
      ? (json as T)
      : ({
          statusCode: res.status,
          message: json?.message ?? "",
          error: json?.error ?? "",
        } as T);
  });
};

export const sendRequestFile = async <T>(props: IRequest) => {
  const {
    url: baseUrl, // Renaming to avoid reassignment
    method,
    body,
    queryParams = {},
    useCredentials = false,
    headers = {},
    nextOption = {},
  } = props;

  // Construct final URL with query parameters
  const url = Object.keys(queryParams).length
    ? `${baseUrl}?${queryString.stringify(queryParams)}`
    : baseUrl;

  const options: RequestInit = {
    // Use RequestInit instead of any
    method,
    headers: new Headers({ ...headers }),
    body: body || null,
    ...nextOption,
  };
  if (useCredentials) options.credentials = "include";

  return fetch(url, options).then(async (res) => {
    const json = await res.json();
    return res.ok
      ? (json as T)
      : ({
          statusCode: res.status,
          message: json?.message ?? "",
          error: json?.error ?? "",
        } as T);
  });
};

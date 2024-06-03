const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
interface Request {
  path: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  token?: string;
  query?: URLSearchParams | Record<string, any>;
  body?: { json?: unknown; multipart?: FormData };
}
const customFetch = async (params: Request) => {
  const url = new URL(`/api/${params.path}`, backendUrl);
  url.search =
    params.query instanceof URLSearchParams
      ? params.query.toString()
      : new URLSearchParams(params.query).toString();
  let body;
  if (params.body?.json) {
    body = JSON.stringify(params.body?.json);
  }
  if (params.body?.multipart) {
    body = params.body.multipart;
  }
  const headers = new Headers();
  if (params.body?.json) {
    headers.set("content-type", "application/json");
  }
  if (params.token) {
    headers.set("authorization", params.token);
  }
  // if (params.body?.multipart) {
  //   headers.set("content-type", "multipart/form-data");
  // }
  const response = await fetch(url, {
    method: params.method,
    body,
    headers,
  });
  const isJson = response.headers
    .get("content-type")
    ?.includes("application/json");
  if (response.ok) {
    if (isJson) {
      return response.json();
    }
    return response.text();
  }
  if (isJson) {
    throw await response.json();
  }
  // if (response.status === 401) {
  //   throw { message: 'unauthorized' }
  // }
};
interface LoginUserRequest {
  username: string;
  password: string;
}
export const LoginUser = (data: LoginUserRequest) => {
  return customFetch({
    method: "POST",
    path: "api-token-auth/",
    body: { json: data },
  });
};
export const GetRole = (token: string) => {
  return customFetch({ method: "GET", path: "profile/", token });
};
export const CreateApplication = (data: FormData) => {
  return fetch(`${backendUrl}/api/upload-file`, {
    method: "POST",
    body: data,
  });
};

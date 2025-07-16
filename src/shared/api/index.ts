import { getCookie } from "cookies-next";

const backendUrl = "https://api.studdom.abu.edu.kz";
const roles = [
  "decanlegal",
  "decanlit",
  "decanhuman",
  "medic",
  "commandant",
  "specialist",
];
const paths = {
  decan: "decan_view/",
  medic: "medic_view/",
  commandant: "commandant_view/",
  specialist: "specialist_view/",
  end: "end_view/",
};
export interface Application {
  name: string;
  so_name: string;
  id_card: string;
  iin_id: string;
  tel: string;
  course: number;
  facultet: string;
  status: string;
  direction: string;
  med_admission: boolean;
  certificate: string;
  contract: string;
  statement_and_rules: string;
}
export const checkApplicationStatus = (id: string): Promise<Application> => {
  return customFetch({ method: "GET", path: `student/${id}/` });
};
export const updateApplicationStatus = (
  id: string,
  status: string,
  role: string,
) => {
  const data = new FormData();
  data.append("status", status);
  return customFetch({
    method: "PATCH",
    path: `${paths[role as keyof typeof paths]}${id}/`,
    token: `Token ${getCookie("token")}`,
    body: { multipart: data },
  });
};
export const deleteApplication = (id: string, role: string) => {
  return customFetch({
    method: "DELETE",
    path: `${paths[role as keyof typeof paths]}${id}/`,
    token: `Token ${getCookie("token")}`,
  });
};

export const getApplicationsByRole = (
  role: string,
  token: string,
): Promise<Application[]> => {
  const path = paths[role as keyof typeof paths];

  return customFetch({
    method: "GET",
    path,
    token: `Token ${token}`,
  });
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
  return customFetch({
    method: "POST",
    path: "upload-file/",
    body: { multipart: data },
  });
};
export const updateApplication = (
  by: keyof typeof paths,
  data: FormData,
  id: string,
) => {
  return customFetch({
    method: "PATCH",
    path: `${paths[by]}${id}/`,
    token: `Token ${getCookie("token")}`,
    body: { multipart: data },
  });
};
interface Request {
  path: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "UPDATE";
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
    headers.set("Content-Type", "application/json");
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
  if (response.status === 404) {
    throw { message: "notFound" };
  }
};

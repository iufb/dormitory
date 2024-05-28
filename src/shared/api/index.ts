const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
export const CreateApplication = (data: FormData) => {
  return fetch(`${backendUrl}/api/upload-file`, {
    method: "POST",
    body: data,
  });
};

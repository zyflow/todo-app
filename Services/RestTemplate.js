export async function post(method, body, token, skipContentType) {
  let tokens = localStorage.getItem("token");

  const basicHead = {
    Authorization: `Bearer ${tokens}`,
  };

  if (!skipContentType) {
    basicHead["Content-Type"] = "application/json";
  }

  const pageRes = await fetch("saubram-backend.test/api/data" + method, {
    method: "post",
    headers: basicHead,
    body: body,
  });

  return pageRes;
}

export async function put(method, body, token, skipContentType) {
  let tokens = localStorage.getItem("token");

  const basicHead = {
    Authorization: `Bearer ${tokens}`,
  };

  if (!skipContentType) {
    basicHead["Content-Type"] = "application/json";
  }

  const pageRes = await fetch("saubram-backend.test/api/data" + method, {
    method: "put",
    headers: basicHead,
    body: body,
  });

  return pageRes;
}

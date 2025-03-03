// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";
import "./libs/shim/urijs.js";

export let options = { maxRedirects: 4, iterations: "100" };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  collection: {
    baseUrl: "http://localhost:8080"
  }
});

export default function() {
  postman[Request]({
    name: "/status",
    id: "c804d6e4-10f0-4d32-93fc-f7448a0fc2bd",
    method: "GET",
    address: "{{baseUrl}}/status/<number>"
  });

  postman[Request]({
    name: "/get",
    id: "95692f3b-0289-4b2b-8f4d-09971df04f2b",
    method: "GET",
    address: "{{baseUrl}}/get"
  });

  postman[Request]({
    name: "/post",
    id: "1db8ca60-cfe1-4d41-8b6e-e6f086d33f60",
    method: "POST",
    address: "{{baseUrl}}/post"
  });

  postman[Request]({
    name: "/patch",
    id: "b4e579ca-7380-4262-a81e-78183c56831f",
    method: "PATCH",
    address: "{{baseUrl}}/patch"
  });

  postman[Request]({
    name: "/put",
    id: "2adab9bd-b970-495b-bfbf-1b32b14fe96d",
    method: "PUT",
    address: "{{baseUrl}}/put"
  });

  postman[Request]({
    name: "/delete",
    id: "ee24120f-d3c1-45bb-a003-42606a0ae4ff",
    method: "DELETE",
    address: "{{baseUrl}}/delete"
  });

  postman[Request]({
    name: "/xml",
    id: "c2c8497f-1fc3-4c55-917f-bb0eca2bf4f8",
    method: "GET",
    address: "{{baseUrl}}/xml"
  });

  postman[Request]({
    name: "/ip",
    id: "3bfcc465-e930-4f1f-833d-5fd5b9381bf3",
    method: "GET",
    address: "{{baseUrl}}/ip"
  });

  postman[Request]({
    name: "/user-agent",
    id: "80e7810d-734c-41b6-bdbb-34518a024f62",
    method: "GET",
    address: "{{baseUrl}}/user-agent"
  });

  postman[Request]({
    name: "/headers",
    id: "67428d29-419b-4118-9d51-23bcc9d81c77",
    method: "GET",
    address: "{{baseUrl}}/headers"
  });

  postman[Request]({
    name: "/delay",
    id: "defb060e-583f-4c73-98a7-84d434eeb674",
    method: "GET",
    address: "{{baseUrl}}/delay/:seconds"
  });

  postman[Request]({
    name: "/cache",
    id: "095a9af8-54ea-423b-b053-72df673384cf",
    method: "GET",
    address: "{{baseUrl}}/cache/:maxAge"
  });

  postman[Request]({
    name: "/uuid",
    id: "8ba68f7b-79cd-4365-a284-993e6697dd3c",
    method: "GET",
    address: "{{baseUrl}}/uuid"
  });

  postman[Request]({
    name: "/anything",
    id: "a2e50796-55a0-463c-8006-775bd57d3eef",
    method: "GET",
    address: "{{baseUrl}}/anything"
  });

  postman[Request]({
    name: "/gzip",
    id: "c6b214cc-fb83-4390-8d7a-2d45dd740f89",
    method: "GET",
    address: "{{baseUrl}}/gzip"
  });

  postman[Request]({
    name: "/base64",
    id: "3b307bd1-d645-485a-a509-c62c81c5a290",
    method: "GET",
    address: "{{baseUrl}}/base64/aGVsbG8gd29ybGQNCg%3D%3D"
  });

  postman[Request]({
    name: "/deflate",
    id: "322d7dba-e549-4825-90cc-68f9bb0f2e79",
    method: "GET",
    address: "{{baseUrl}}/deflate"
  });

  postman[Request]({
    name: "/brotli",
    id: "951a496c-d549-4c72-9ba5-af2b48a4a2a3",
    method: "GET",
    address: "{{baseUrl}}/brotli"
  });

  postman[Request]({
    name: "/response-headers",
    id: "9181bc27-5890-4b59-8dc2-8d172305fe19",
    method: "GET",
    address: "{{baseUrl}}/response-headers"
  });

  postman[Request]({
    name: "/bytes",
    id: "3508ae9a-f34d-43bd-a9ff-52062a70ad4a",
    method: "GET",
    address: "{{baseUrl}}/bytes/1024"
  });

  postman[Request]({
    name: "/redirect-to",
    id: "82dd39fd-e8f6-4acc-8852-f070403307c5",
    method: "GET",
    address: "{{baseUrl}}/redirect-to?url=http://example.com"
  });

  postman[Request]({
    name: "/stream",
    id: "3108bb42-58e0-499c-8384-07be67c47714",
    method: "GET",
    address: "{{baseUrl}}/stream/10"
  });
}

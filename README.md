# Automated testing for APIs

Run httpbin locally on Docker:

    docker run -p 8080:80 kennethreitz/httpbin


## schemathesis

Setup Python 3 venv:

    python3 -m venv .venv/dev
    source .venv/dev/bin/activate
    pip install --upgrade -r requirements-dev.txt

Run:

    schemathesis run --cheks all openapi_specs/openapi_30.yml \
      --base-url=http://localhost:8080 \
      --hypothesis-max-examples=100



## OpenAPI -> Postman

After `npm install` run:

    npm run openapi2postmanv2 -- -s openapi_specs/openapi_30.yml -o postman21.json --pretty



## postman -> k6

After `npm install` run:

    npm run postman-to-k6 -- -i 100 postman21.json -o k6_script.js

# Test generation from OpenAPI spec

Run httpbin locally on Docker:

    docker run -p 8080:80 kennethreitz/httpbin


## schemathesis

Setup a new Python3 venv:

    python3 -m venv .venv/dev
    source .venv/dev/bin/activate
    pip install --upgrade -r requirements-dev.txt

Run:

    schemathesis run --checks all openapi_specs/openapi_30.yml \
      --base-url=http://localhost:8080 \
      --hypothesis-max-examples=100



## OpenAPI -> Postman

After `npm install` run:

    npm run openapi2postmanv2 -- \
      --spec openapi_specs/openapi_30.yml --output postman21.json --pretty



## Postman -> k6

After `npm install` run:

    npm run postman-to-k6 -- \
      postman21.json --iterations 100 --output k6_script.js


## K6

Execute K6 tests:

    k6 run k6_script.js

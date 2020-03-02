# Updating single APIM product's APIs from pipeline

## Setup tools locally

Prefer explicit terraform version to not confuse the remote tfstate:

    brew install tfenv
    tfenv install 0.12.20

As new versions may introduce BWIC changes how the state is handled.

If `brew` is not available, you may download `tfenv` for your OS at
(tfenv releases)[https://github.com/tfutils/tfenv/releases]

Install Azure CLI:

    brew install azure-cli
    az login

Select the APIM environment to update:

    cd (dev|test|stg|prod)

Catch up with, or create, the shared remote tfstate hosted in Storage Account:

    export ARM_ACCESS_KEY=$(az )
    terraform init


## Applying changes manually

Prefer running this manually only for dev:

    terraform apply

For other environments run the Azure DevOps pipeline for the specific API.


## Extra: Run static analysis checks before committing

    brew install wata727/tflint/tflint liamg/tfsec/tfsec
    tflint terraform/
    tfsec terraform/


## TODO

- Add production environment to Azure DevOps pipeline yml
- Export spec from OpenAPI for tests
- Run schemathesis tests based on OpenAPI spec to test and stg
- Add support for updating API's named values from Key Vault
  - Create Key Vault
  - Use shell provider in TF modules to get the key?

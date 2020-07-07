#!/bin/bash

if [ -z "${GITHUB_TOKEN}" ]; then
  echo "Please set proper GITHUB_TOKEN to release"
  exit 1
fi

PROJECT_NAME="${PWD##*/}"
VERSION="v$(cat "package.json" | jq -r ".version")"

REPO_OWNER="$(git config --get remote.origin.url | cut -d":" -f2 | cut -d"/" -f1)"
REPO_NAME="$(git config --get remote.origin.url | cut -d"/" -f2 | cut -d"." -f1)"

cp -r dist "${PROJECT_NAME}" && \
  zip -r "${PROJECT_NAME}.zip" ${PROJECT_NAME}/* && \
  rm -rf "${PROJECT_NAME}" && \
  yarn github-release upload \
    --owner "${REPO_OWNER}" \
    --repo "${REPO_NAME}" \
    --tag "${VERSION}" \
    --name "${VERSION}" \
    --body "${VERSION}" \
    "${PROJECT_NAME}.zip" && \
  rm "${PROJECT_NAME}.zip"


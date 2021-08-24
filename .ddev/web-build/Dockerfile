ARG BASE_IMAGE
FROM $BASE_IMAGE
ENV NODE_VERSION=14
RUN sudo apt-get remove -y nodejs
RUN curl -sSL --fail https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y -o Dpkg::Options::="--force-confold" --no-install-recommends --no-install-suggests nodejs

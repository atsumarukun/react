FROM ubuntu:20.04

ENV PATH=/root/.volta/bin:$PATH

RUN apt update && apt -y install curl && \
    curl https://get.volta.sh | bash && \
    volta install node@14 && \
    npm install @fortawesome/fontawesome-svg-core && \
    npm install @fortawesome/react-fontawesome && \
    npm install @fortawesome/free-solid-svg-icons && \
    npm install @fortawesome/free-regular-svg-icons && \
    npm install @fortawesome/free-brands-svg-icons && \
    npm install microcms-js-sdk && \
    npm install date-fns && \
    npm install html-react-parser && \
    npm install html-to-text && \
    npm install plaiceholder && \
    npm install sharp

CMD ["npm", "run", "dev"]
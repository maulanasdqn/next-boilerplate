FROM imbios/bun-node:21-slim AS deps

ARG DEBIAN_FRONTEND=noninteractive

ENV NODE_ENV production

ARG API_URL

ENV NEXT_PUBLIC_API_URL ${API_URL}

RUN apt-get -y update && \
  apt-get install -yq openssl git ca-certificates tzdata && \
  ln -fs /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

FROM deps AS builder

WORKDIR /app

COPY . .

RUN bun run build


FROM node:21-slim AS runner

WORKDIR /app

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/.next/static ./.next/static/

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]

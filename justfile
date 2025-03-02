# start server
server:
    cd server && cargo run

# start ui app
ui:
    cd ui && npm run dev


# start database in docker-compose
db:
    docker compose up -d

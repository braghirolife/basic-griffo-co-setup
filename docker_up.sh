cd infra
docker-compose down -v
cd ..

echo "Copying docker-compose..."

cp infra/docker-compose.yaml docker-compose.yaml

echo "Copying Dockerfile"

cp infra/Dockerfile-api Dockerfile-api

echo "Executing docker-compose"

docker-compose build --progress=plain

docker-compose up

mv Dockerfile-api .Dockerfile-api
mv docker-compose.yaml .docker-compose.yaml


echo "Copying docker-compose..."

cp infra/docker-compose.yaml docker-compose.yaml

echo "Copying Dockerfile"

cp infra/Dockerfile-api Dockerfile-api

echo "Executing docker-compose"

DOCKER_BUILDKIT=0 docker-compose --progress=plain build

DOCKER_BUILDKIT=0 docker-compose --progress=plain up

mv Dockerfile-api .Dockerfile-api
mv docker-compose.yaml .docker-compose.yaml


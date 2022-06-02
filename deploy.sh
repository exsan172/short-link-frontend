git pull
rm -r build
yarn build
docker build -t frontend-shortin:latest .
docker stop frontend-shortin
docker rm frontend-shortin
docker run --name frontend-shortin --network bridge -p 8793:80 frontend-shortin:latest
echo "Apps success deploy !"
exit
docker stop digitalcitadel
docker rm digitalcitadel
npm run-script build && docker build -t digitalcitadel -f Dockerfile-local . && docker run -itd --name=digitalcitadel -p 8080:80 digitalcitadel
echo "open localhost:8080"

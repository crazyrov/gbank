#/bin/bash



# Build and push fraontend docker image
cd gbank_frontend
docker build -t gbank_frontend .
docker tag gbank_frontend asia-south1-docker.pkg.dev/gsd-dentsu-umang/gbank/gbank_frontend
docker push asia-south1-docker.pkg.dev/gsd-dentsu-umang/gbank/gbank_frontend


cd ..
# Build and push fraontend docker image
cd gbank_backend
docker build -t gbank_backend .
docker tag gbank_backend asia-south1-docker.pkg.dev/gsd-dentsu-umang/gbank/gbank_backend
docker push asia-south1-docker.pkg.dev/gsd-dentsu-umang/gbank/gbank_backend

cd ..
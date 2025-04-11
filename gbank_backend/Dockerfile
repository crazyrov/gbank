FROM python:3.12-slim-bullseye

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt


CMD [ "python", "server.py"]

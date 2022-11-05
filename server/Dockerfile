FROM python:alpine3.7 
COPY . ./server
WORKDIR /server
RUN pip install -r requirements.txt
EXPOSE 5000
CMD flask --app main --debug run
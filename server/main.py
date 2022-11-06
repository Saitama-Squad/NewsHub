from flask import Flask, request, Response
import requests
import os
import random
import json
from flask_cors import CORS
import db_crud
app = Flask(__name__)
CORS(app)

NEWS_API_TOPHEADLINES_ENDPOINT = 'https://newsapi.org/v2/top-headlines'
NEWS_API_KEY = os.getenv('NEWSAPIKEY')
userPreferences = ['business','entertainment','general','health','science','sports','technology']

@app.route('/get-top-headlines', methods=['GET'])
def getTopHeadlinesNewsArticlesForUser():
  query = request.args.to_dict()
  if query.get('userName', -1) == -1:
    return Response('No userName provided in query params', status=403)
  # Change the below line after integrating with the DB
  userPrefs = 'category=' + '&category='.join([userPreferences[random.randint(0, 6)] for i in range(2)])
  url = NEWS_API_TOPHEADLINES_ENDPOINT+f'?country=in&{userPrefs}&apiKey={NEWS_API_KEY}'
  apiResponse = requests.get(url=url)
  j = json.loads(apiResponse.content.decode())
  print(type(j))
  return j, 200

@app.route('/authenticate', methods=['POST'])
def authenticate_user():
  form = json.loads(request.data.decode())
  if db_crud.authenticate(form['email'], form['password']):
    return {'status':'success'}, 200
  return {'status':'failure'}, 400

@app.route('/sign-up', methods=['POST'])
def sign_up_user():
  form = json.loads(request.data.decode())
  print(form)
  if db_crud.create_account(form['email'], form['password'], [x['name'] for x in form['options']]):
    return {'status':'success'}, 200
  return {'status':'failure'}, 400

if __name__ == '__main__':
  app.run(debug=True)
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
NEWS_API_KEY = 'aeb9762b06d74d1a8ece0f3b896feb4c'
user_preferences = ['business','entertainment','general','health','science','sports','technology']

@app.route('/get-top-headlines', methods=['GET'])
def get_top_headlines_for_user():
  query = request.args.to_dict()
  if query.get('userName', -1) == -1:
    return Response('userName must be provided in query string', status=400)
  country = query.get('country', 'in')
  q = query.get('q', '')
  
  user_topics = db_crud.get_topics(query.get('userName'))
  user_prefs = 'category=' + '&category='.join(user_topics)
  url = NEWS_API_TOPHEADLINES_ENDPOINT+f'?country={country}&{user_prefs}&apiKey={NEWS_API_KEY}'
  if q != '':
    url += f'&q={q}'
  print(url)
  
  api_response = requests.get(url=url)
  return json.loads(api_response.content.decode()), 200

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
  if db_crud.create_account(form['name'], form['email'], form['password'], form['phone'], form['dob'], [x['name'] for x in form['options']]):
    return {'status':'success'}, 200
  return {'status':'failure'}, 400

@app.route('/profile', methods=['GET'])
def user_profile():
  query = request.args.to_dict()
  ret = {
    "likes" : db_crud.get_likes(query['userName']),
    "bookmarks" : db_crud.get_bookmarks(query['userName']),
    "topics": db_crud.get_topics(query['userName'])
  }
  return ret, 200

@app.route('/action', methods=["POST"])
def action():
  form = json.loads(request.data.decode())
  if(form['type']=='A'):
    db_crud.add_action(form['email'], form['title'], form['url'], form['urlToImage'], form['publishedAt'], form['description'], form['action'])
  if(form['type']=='R'):
    db_crud.remove_action(form['email'], form['url'])
  return {'status':'success'}, 200

@app.route('/update-profile', methods=['POST'])
def updateprofile():
  form = json.loads(request.data.decode())
  db_crud.update_topics(form['user'], form['topics'])
  return {'status':'success'}, 200

if __name__ == '__main__':
  app.run(debug=True)
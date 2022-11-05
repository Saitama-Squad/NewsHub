from flask import Flask, request, Response
import requests
import os
import random
import json

app = Flask(__name__)
NEWS_API_TOPHEADLINES_ENDPOINT = 'https://newsapi.org/v2/top-headlines'
NEWS_API_KEY = os.getenv('NEWSAPIKEY')
userPreferences = ['business','entertainment','general','health','science','sports','technology']

@app.route('/get-top-headlines', methods=['GET'])
def getTopHeadlinesNewsArticlesForUser():
  query = request.args.to_dict()
  if query.get('userName', -1) == -1:
    return Response('No userName provided in query params', status=403)
  userPrefs = 'category=' + '&category='.join([userPreferences[random.randint(0, 6)] for i in range(2)])
  url = NEWS_API_TOPHEADLINES_ENDPOINT+f'?country=in&{userPrefs}&apiKey={NEWS_API_KEY}'
  apiResponse = requests.get(url=url)
  return Response(apiResponse.content.decode('utf-8'), status=200)
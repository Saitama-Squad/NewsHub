from flask import Flask, request, Response
import requests
import os
import random
import json

app = Flask(__name__)
NEWS_API_TOPHEADLINES_ENDPOINT = 'https://newsapi.org/v2/top-headlines'
NEWS_API_KEY = 'aeb9762b06d74d1a8ece0f3b896feb4c'
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

if __name__ == '__main__':
  app.run(debug=True)
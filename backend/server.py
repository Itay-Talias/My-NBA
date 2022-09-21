from http import HTTPStatus
from fastapi import FastAPI, Request, Response
import uvicorn
from nba_data import NBA_data

app = FastAPI()


@app.get('/')
def root():
    return {"message": "Server is up and running"}


@app.get('/players')
def get_players():
    data = NBA_data()
    data.fetch_leagues_by_year(2018)
    return data.get_players_arr()


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True)

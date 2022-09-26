from http import HTTPStatus
from fastapi import FastAPI, Request, Response
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
from nba_data import NBA_data

app = FastAPI()

app.mount("/fronted", StaticFiles(directory="fronted"), name="fronted")


@app.get('/')
def root():
    return FileResponse('./fronted/index.html')


@app.get('/players')
def get_players():
    data = NBA_data()
    data.fetch_leagues_by_year(2018)
    return data.get_players_arr_by_team_name("lakers")


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True)

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
from nba_data import NBA_data
from dream_team import Dream_team

app = FastAPI()
nba_data = NBA_data()
dream_team = Dream_team()

app.mount("/fronted", StaticFiles(directory="fronted"), name="fronted")


@app.get('/')
def root():
    return FileResponse('./fronted/index.html')


@app.get('/active_players/{team_name}/{year}')
def get_players(team_name, year):
    nba_data.fetch_leagues_by_year(year)
    return nba_data.get_active_players_arr_by_team_name(team_name)


@app.get('/players/{team_name}/{year}')
def get_players(team_name, year):
    nba_data.fetch_leagues_by_year(year)
    return nba_data.get_players_arr_by_team_name(team_name)


@app.get('/player_stats/{last_name}/{first_name}')
def get_player_stats_by_full_name(first_name, last_name):
    return nba_data.get_player_stats_by_name(first_name, last_name)


@app.get('/dream_team')
def get_dream_team():
    return dream_team.get_dream_team()


@app.post('/dream_team')
async def add_player_to_dream_team(request: Request):
    req = await request.json()
    dream_team.add_player_to_dream_team(req)
    return dream_team.get_dream_team()

# @app.put('/dream_team')
# def update_player_in_dream_team():


@app.delete('/dream_team')
async def delete_player_from_dream_team(request: Request):
    req = await request.json()
    dream_team.delete_player_from_dream_team(
        req["first_name"], req["last_name"])
    return dream_team.get_dream_team()


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True)

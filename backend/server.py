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


@app.get('/players/{team_name}/{year}')
def get_players(team_name, year):
    nba_data.fetch_leagues_by_year(year)
    return nba_data.get_players_arr_by_team_name(team_name)


@app.get('/dream_team')
def get_dream_team():
    # return dream_team.get_dream_team()
    return [{"first_name": "LeBron",
            "last_name": "James",
             "team_id": 1610612747,
             "position": "F",
             "jersey_number": 6,
             "is_active": True}, {"first_name": "LeBron",
            "last_name": "James",
                                  "team_id": 1610612747,
                                  "position": "F",
                                  "jersey_number": 6,
                                  "is_active": True}, {"first_name": "LeBron",
            "last_name": "James",
                                                       "team_id": 1610612747,
                                                       "position": "F",
                                                       "jersey_number": 6,
                                                       "is_active": True}, {"first_name": "LeBron",
            "last_name": "James",
                                                                            "team_id": 1610612747,
                                                                            "position": "F",
                                                                            "jersey_number": 6,
                                                                            "is_active": True}, {"first_name": "LeBron",
            "last_name": "James",
                                                                                                 "team_id": 1610612747,
                                                                                                 "position": "F",
                                                                                                 "jersey_number": 6,
                                                                                                 "is_active": True}, {"first_name": "LeBron",
            "last_name": "James",
                                                                                                                      "team_id": 1610612747,
                                                                                                                      "position": "F",
                                                                                                                      "jersey_number": 6,
                                                                                                                      "is_active": True}, {"first_name": "LeBron",
            "last_name": "James",
                                                                                                                                           "team_id": 1610612747,
                                                                                                                                           "position": "F",
                                                                                                                                           "jersey_number": 6,
                                                                                                                                           "is_active": True}, {"first_name": "LeBron",
            "last_name": "James",
                                                                                                                                                                "team_id": 1610612747,
                                                                                                                                                                "position": "F",
                                                                                                                                                                "jersey_number": 6,
                                                                                                                                                                "is_active": True}, {"first_name": "LeBron",
            "last_name": "James",
                                                                                                                                                                                     "team_id": 1610612747,
                                                                                                                                                                                     "position": "F",
                                                                                                                                                                                     "jersey_number": 6,
                                                                                                                                                                                     "is_active": True}, {"first_name": "LeBron",
            "last_name": "James",
                                                                                                                                                                                                          "team_id": 1610612747,
                                                                                                                                                                                                          "position": "F",
                                                                                                                                                                                                          "jersey_number": 6,
                                                                                                                                                                                                          "is_active": True}]


@app.post('/dream_team')
async def add_player_to_dream_team(request: Request):
    res = await request.json()
    dream_team.add_player_to_dream_team(res)

# @app.put('/dream_team')
# def update_player_in_dream_team():


# @app.delete('/dream_team')
# def delete_player_from_dream_team():


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)

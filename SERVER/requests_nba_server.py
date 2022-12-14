import requests


class Requests_nba_server:
    @staticmethod
    def get_nba_leagues_by_year(year):
        res = requests.get(
            f"http://data.nba.net/10s/prod/v1/{year}/players.json")
        return res.json().get("league")

    @staticmethod
    def get_player_stats(first_name, last_name):
        res = requests.get(
            f"https://nba-players.herokuapp.com/players-stats/{last_name}/{first_name}")
        return res.json()

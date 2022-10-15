from requests_nba_server import Requests_nba_server
from player import Player
from team_id import teams_id


class NBA_data:

    def __init__(self):
        self.leagues_arr = []
        self.year = 0

    def fetch_leagues_by_year(self, year):
        self.leagues_arr = Requests_nba_server.get_nba_leagues_by_year(year)
        self.year = year

    def get_players_arr(self):
        if len(self.leagues_arr) == 0:
            raise ValueError("The leagues array is empty")
        else:
            players_arr = []
            for league in self.leagues_arr:
                players_arr += [Player(player)
                                for player in self.leagues_arr[league]]
            return players_arr

    def get_players_arr_by_team_name(self, team_name):
        players_arr = self.get_players_arr()
        return list(filter(lambda player: player.team_id ==
                           teams_id[team_name], players_arr))

    def get_active_players_arr_by_team_name(self, team_name):
        players_arr = self.get_players_arr()
        return list(filter(lambda player: player.team_id ==
                           teams_id[team_name] and player.is_active == True, players_arr))

    @staticmethod
    def get_player_stats_by_name(first_name, last_name):
        return Requests_nba_server.get_player_stats(first_name, last_name)

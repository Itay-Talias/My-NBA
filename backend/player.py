from requests_nba_server import Requests_nba_server


class Player:

    def __init__(self, player_dict):
        self.first_name = player_dict.get("firstName")
        self.last_name = player_dict.get("lastName")
        self.team_id = player_dict.get("teamId")
        self.position = player_dict.get("pos")
        self.jersey_number = player_dict.get("jersey")
        self.picture = Requests_nba_server.get_picture_by_player_name(
            self.first_name, self.last_name)

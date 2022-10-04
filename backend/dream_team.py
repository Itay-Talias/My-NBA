from player import Player


class Dream_team:
    def __init__(self):
        self.dream_team_arr = []

    def add_player_to_dream_team(self, player):
        self.dream_team_arr.append(Player(player))

    def delete_player_from_dream_team(self, player_to_delete):
        self.dream_team_arr = list(
            filter(lambda player: player != player_to_delete, self.dream_team_arr))

    def get_dream_team(self):
        return self.dream_team_arr

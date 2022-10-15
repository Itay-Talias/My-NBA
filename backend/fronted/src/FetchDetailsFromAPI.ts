class FetchDetailsFromAPI {
    private static parsingJSONToPlayer(playersArr: any[]): Player[] {
        return playersArr.map((player: any) => {
            return {
                firstName: player.first_name,
                lastName: player.last_name,
                teamId: player.team_id,
                pos: player.position,
                jersey: player.jersey_number,
                birth: player.birth,
                isActive: player.is_active,
            };
        });
    }
    public static async GetActivePlayersByTeamAndYear(
        teamName: string,
        year: number
    ): Promise<Player[]> {
        const playersArr = await $.get(`./active_players/${teamName}/${year}`);
        return this.parsingJSONToPlayer(playersArr);
    }
    public static async GetPlayersByTeamAndYear(
        teamName: string,
        year: number
    ): Promise<Player[]> {
        const playersArr = await $.get(`./players/${teamName}/${year}`);
        return this.parsingJSONToPlayer(playersArr);
    }
    public static async GetDreamTeam(): Promise<Player[]> {
        const DreamTeamArr = await $.get(`./dream_team`);
        return this.parsingJSONToPlayer(DreamTeamArr);
    }
    public static async AddPlayerToDreamTeam(player: Player) {
        const DreamTeamArr = await $.ajax({
            type: "POST",
            url: "./dream_team",
            data: JSON.stringify(player),
            contentType: "application/json",
            dataType: "json",
        });
        return this.parsingJSONToPlayer(DreamTeamArr);
    }
    public static async DeletePlayerFromDreamTeam(
        firstName: string,
        lastName: string
    ) {
        const res = await $.ajax({
            type: "DELETE",
            url: "./dream_team",
            data: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
            }),
            contentType: "application/json",
            dataType: "json",
        });
        return this.parsingJSONToPlayer(res);
    }
    public static async GetStatsByFullName(
        firstName: string,
        lastName: string
    ): Promise<object> {
        const statsPlayer = await $.get(
            `./player_stats/${lastName}/${firstName}`
        );
        return statsPlayer;
    }
}

class FetchDetailsFromAPI {
    public static async GetActivePlayersByTeamAndYear(
        teamName: string,
        year: number
    ): Promise<Player[]> {
        const playersArr = await $.get(`./active_players/${teamName}/${year}`);
        console.log(playersArr.length);
        return playersArr.map((player: any) => {
            return {
                firstName: player.first_name,
                lastName: player.last_name,
                teamId: player.team_id,
                pos: player.position,
                jersey: player.jersey_number,
                isActive: player.is_active,
            };
        });
    }
    public static async GetPlayersByTeamAndYear(
        teamName: string,
        year: number
    ): Promise<Player[]> {
        const playersArr = await $.get(`./players/${teamName}/${year}`);
        console.log(playersArr.length);
        return playersArr.map((player: any) => {
            return {
                firstName: player.first_name,
                lastName: player.last_name,
                teamId: player.team_id,
                pos: player.position,
                jersey: player.jersey_number,
                isActive: player.is_active,
            };
        });
    }
    public static async GetDreamTeam(): Promise<Player[]> {
        const DreamTeamArr = await $.get(`./dream_team`);
        return DreamTeamArr.map((player: any) => {
            return {
                firstName: player.first_name,
                lastName: player.last_name,
                teamId: player.team_id,
                pos: player.position,
                jersey: player.jersey_number,
                isActive: player.is_active,
            };
        });
    }
    public static async AddPlayerToDreamTeam(player: Player) {
        const DreamTeamArr = await $.ajax({
            type: "POST",
            url: "./dream_team",
            data: JSON.stringify(player),
            contentType: "application/json",
            dataType: "json",
        });
        return DreamTeamArr.map((player: any) => {
            return {
                firstName: player.first_name,
                lastName: player.last_name,
                teamId: player.team_id,
                pos: player.position,
                jersey: player.jersey_number,
                isActive: player.is_active,
            };
        });
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
        return res.map((player: any) => {
            return {
                firstName: player.first_name,
                lastName: player.last_name,
                teamId: player.team_id,
                pos: player.position,
                jersey: player.jersey_number,
                isActive: player.is_active,
            };
        });
    }
}

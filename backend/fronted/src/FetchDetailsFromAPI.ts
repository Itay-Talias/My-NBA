class FetchDetailsFromAPI {
    public static async GetPlayersByTeamAndYear(
        teamName: string,
        year: number
    ): Promise<Player[]> {
        const playersArr = await $.get(`./players/${teamName}/${year}`);
        return playersArr.map((player: any) => {
            return {
                firstName: player.first_name,
                lastName: player.last_name,
                teamId: player.team_id,
                pos: player.position,
                jersey: player.jersey_number,
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
}

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
                position: player.position,
                jerseyNumber: player.jersey_number,
            };
        });
    }
}

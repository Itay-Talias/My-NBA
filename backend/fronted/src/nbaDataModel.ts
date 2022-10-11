class NBADataModel {
    private _playersArr: Player[];
    private _dreamTeamArr: Player[];
    constructor() {
        this._playersArr = [] as Player[];
        this._dreamTeamArr = [] as Player[];
    }
    public get playerArr(): Player[] {
        return this._playersArr;
    }
    public get dreamTeamArr(): Player[] {
        return this._dreamTeamArr;
    }
    public async FetchActivePlayerByTeamAndYear(
        teamName: string,
        year: number
    ) {
        this._playersArr =
            await FetchDetailsFromAPI.GetActivePlayersByTeamAndYear(
                teamName,
                year
            );
    }
    public async FetchPlayerByTeamAndYear(teamName: string, year: number) {
        this._playersArr = await FetchDetailsFromAPI.GetPlayersByTeamAndYear(
            teamName,
            year
        );
    }
    public GetPlayersWithBirthDatesArr(today: Date) {
        return this._playersArr.filter((player: Player) => {
            return (
                player.birth.getDate() === today.getDate() &&
                player.birth.getMonth() === today.getMonth()
            );
        });
    }
    public async FetchDreamTeam() {
        this._dreamTeamArr = await FetchDetailsFromAPI.GetDreamTeam();
    }
    public async AddPlayerToDreamTeam(player: Player) {
        this._dreamTeamArr = await FetchDetailsFromAPI.AddPlayerToDreamTeam(
            player
        );
    }
    public async DeletePlayerFromDreamTeam(
        firstName: string,
        lastName: string
    ) {
        this._dreamTeamArr =
            await FetchDetailsFromAPI.DeletePlayerFromDreamTeam(
                firstName,
                lastName
            );
    }
}

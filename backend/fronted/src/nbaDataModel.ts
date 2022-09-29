class NBADataModel {
    private _playersArr: Player[];
    constructor() {
        this._playersArr = [] as Player[];
    }
    public get playerArr(): Player[] {
        return this._playersArr;
    }
    public async FetchPlayerByTeamAndYear(teamName: string, year: number) {
        this._playersArr = await FetchDetailsFromAPI.GetPlayersByTeamAndYear(
            teamName,
            year
        );
    }
}

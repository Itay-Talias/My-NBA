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
    public async FetchPlayerByTeamAndYear(teamName: string, year: number) {
        this._playersArr = await FetchDetailsFromAPI.GetPlayersByTeamAndYear(
            teamName,
            year
        );
    }
    public async FetchDreamTeam() {
        this._dreamTeamArr = await FetchDetailsFromAPI.GetDreamTeam();
    }
}

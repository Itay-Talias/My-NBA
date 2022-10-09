"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class NBADataModel {
    constructor() {
        this._playersArr = [];
        this._dreamTeamArr = [];
    }
    get playerArr() {
        return this._playersArr;
    }
    get dreamTeamArr() {
        return this._dreamTeamArr;
    }
    FetchActivePlayerByTeamAndYear(teamName, year) {
        return __awaiter(this, void 0, void 0, function* () {
            this._playersArr =
                yield FetchDetailsFromAPI.GetActivePlayersByTeamAndYear(teamName, year);
        });
    }
    FetchPlayerByTeamAndYear(teamName, year) {
        return __awaiter(this, void 0, void 0, function* () {
            this._playersArr = yield FetchDetailsFromAPI.GetPlayersByTeamAndYear(teamName, year);
        });
    }
    FetchDreamTeam() {
        return __awaiter(this, void 0, void 0, function* () {
            this._dreamTeamArr = yield FetchDetailsFromAPI.GetDreamTeam();
        });
    }
    AddPlayerToDreamTeam(player) {
        return __awaiter(this, void 0, void 0, function* () {
            this._dreamTeamArr = yield FetchDetailsFromAPI.AddPlayerToDreamTeam(player);
        });
    }
    DeletePlayerFromDreamTeam(firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            this._dreamTeamArr =
                yield FetchDetailsFromAPI.DeletePlayerFromDreamTeam(firstName, lastName);
        });
    }
}

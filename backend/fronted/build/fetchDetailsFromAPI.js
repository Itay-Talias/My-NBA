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
class FetchDetailsFromAPI {
    static GetActivePlayersByTeamAndYear(teamName, year) {
        return __awaiter(this, void 0, void 0, function* () {
            const playersArr = yield $.get(`./active_players/${teamName}/${year}`);
            console.log(playersArr.length);
            return playersArr.map((player) => {
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
        });
    }
    static GetPlayersByTeamAndYear(teamName, year) {
        return __awaiter(this, void 0, void 0, function* () {
            const playersArr = yield $.get(`./players/${teamName}/${year}`);
            console.log(playersArr.length);
            return playersArr.map((player) => {
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
        });
    }
    static GetDreamTeam() {
        return __awaiter(this, void 0, void 0, function* () {
            const DreamTeamArr = yield $.get(`./dream_team`);
            return DreamTeamArr.map((player) => {
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
        });
    }
    static AddPlayerToDreamTeam(player) {
        return __awaiter(this, void 0, void 0, function* () {
            const DreamTeamArr = yield $.ajax({
                type: "POST",
                url: "./dream_team",
                data: JSON.stringify(player),
                contentType: "application/json",
                dataType: "json",
            });
            return DreamTeamArr.map((player) => {
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
        });
    }
    static DeletePlayerFromDreamTeam(firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield $.ajax({
                type: "DELETE",
                url: "./dream_team",
                data: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                }),
                contentType: "application/json",
                dataType: "json",
            });
            return res.map((player) => {
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
        });
    }
}

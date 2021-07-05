import * as Samp from 'samp-node-lib';
import { Player } from './interfaces';

const { 
    OnGameModeInit, OnGameModeExit,
    OnPlayerConnect, OnPlayerDisconnect,
    GetMaxPlayers, SampPlayer,
    OnPlayerGiveDamage
} = Samp;

const MAX_PLAYERS: number = GetMaxPlayers();
const PLAYERS: Array<Player> = new Array(MAX_PLAYERS);

OnGameModeInit(function(){
    console.log(`Game Mode - Init`);
});

OnGameModeExit(function(){
    console.log(`Game Mode - Exit`);
});

OnPlayerConnect(function(player){});

OnPlayerDisconnect(function(player, reason){});
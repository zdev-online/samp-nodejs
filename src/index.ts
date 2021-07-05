import * as Samp from 'samp-node-lib';

const { 
    OnGameModeInit, OnGameModeExit,
    GetMaxPlayers
} = Samp;

OnGameModeInit(function(){
    console.log(`Game Mode - Init`);
    return true;
});

OnGameModeExit(function(){
    console.log(`Game Mode - Exit`);
    return true;
});

export default Samp;
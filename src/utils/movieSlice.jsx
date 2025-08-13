import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies : null,
        trailor:null,
        PopularMovies: null,
        topRatedMovies: null,
        upComigMovies: null,
        shows:null,
        popularShows : null,
    },
reducers:{
    addNowPlayingMovies: (state,action)=>{
        state.nowPlayingMovies = action.payload;
    },
    addTrailor: (state,action)=>{
        state.trailor = action.payload;
    },
    addPopularMovies: (state,action) =>{
        state.PopularMovies = action.payload;
    },
    addTopRatedMovies : (state, action) =>{
        state.topRatedMovies = action.payload;
    },
    addUpcomingMovies : (state,action)=>{
        state.upComigMovies = action.payload
    },
    addshows: (state, action) => {
        state.shows = action.payload;
    },
    addPopularshows: (state, action) => {
        state.popularShows = action.payload;
    }

}
});

export default movieSlice.reducer;
export const { addNowPlayingMovies , addTrailor,addPopularMovies ,addTopRatedMovies, addUpcomingMovies , addshows, addPopularshows} = movieSlice.actions;
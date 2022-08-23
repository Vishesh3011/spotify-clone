export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQD0P2Kuc_CSeeoV12NDgc2Cht9NpCV_LmNzaLnnbX6JJDgEGtei-CWBib1cwI6WjjTbGCNCRewQqUtf1UxJ4FWYO1TuO9SPUXqjC-lquoQ_6UvtUbJpAguj5IjTCX1-scjqjYYlG5a05b8LFyf5bgJQl89mXnpDc1nKLh5jhcboFWthR-18w2n-ur1jUrDKxR-HjV9YET20cFepHbFv'
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
           return state; 
    }
}

export default reducer;
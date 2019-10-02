export interface MyDbState {
    username: string;
    email: string;
    password: string;
    // galleryID: string;
}

export interface SearchState {
    keywordSearch: string;
    category: string;
    searchResults: string[];
    userID: string;
}

export interface DbState {
    my: MyDbState;
    search: SearchState;
    
}
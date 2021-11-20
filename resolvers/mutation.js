module.exports = {
    toggleFavoriteSession: (parent, { id }, { dataSources }, _) => {
        return dataSources.sessionAPI.toggleFavoriteSession(id);
    },
    addNewSession: (parent, { session }, { dataSources }, _) => {
        return dataSources.sessionAPI.addSession(session);
    }
}

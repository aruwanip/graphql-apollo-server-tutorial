const _ = require("lodash");
const {ApolloError} = require("apollo-server");

module.exports = {
    speakers: async (session, args, {dataSources}) => {
        try {
            const speakers = await dataSources.speakerAPI.getSpeakers();
            return speakers.filter((speaker) => {
                return _.filter(session.speakers, {id: speaker.id}).length > 0;
            });
        } catch (error) {
            return new ApolloError('Unable to get speakers', 'SPEAKER_API_ERROR', {token: 'UNIQUE_TOKEN'})
        }
    }
}

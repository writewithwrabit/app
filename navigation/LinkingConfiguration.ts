import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Journal: {
            screens: {
              JournalScreen: 'one',
            },
          },
          Stats: {
            screens: {
              StatsScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startMainTabs = () => {
    Promise.all([
        Icon.getImageSource("map", 30),
        Icon.getImageSource("share", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0]
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1]
                }
            ]
        });
    })
}

export default startMainTabs;
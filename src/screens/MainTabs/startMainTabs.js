import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

const startMainTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS==="android" ? "md-map" : "ios-map", 30),
        Icon.getImageSource(Platform.OS==="android"? "md-share-alt" : "ios-share-alt", 30),
        Icon.getImageSource(Platform.OS==="android"? "md-menu" : "ios-menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            //Need for IOS
            tabsStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawerScreen"
                }
            },
            //Need for android
            appStyle: {
                tabBarSelectedButtonColor: "orange"
            }
        });
    })
}

export default startMainTabs;
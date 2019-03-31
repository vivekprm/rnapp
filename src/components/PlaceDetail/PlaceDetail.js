import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { bold } from 'ansi-colors';

import Icon from 'react-native-vector-icons/Octicons';

const placeDetail = props => {
    let modalContent = null;
    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    
    return (
        <Modal 
            // On clicking back button closed the modal
            onRequestClose={props.onModalClosed}
            visible={props.selectedPlace !== null} 
            animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
                    <TouchableOpacity onPress={props.onItemDeleted}>
                        <View style={styles.deleteButton}>
                            <Icon size={30} name="trashcan" color="red"></Icon>
                        </View>
                    </TouchableOpacity>
                    <Button title="Close" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22,
    },
    placeImage: {
        width: "100%",
        height: 200,
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
    },
    deleteButton: {
        alignItems: "center"
    }
});

export default placeDetail;
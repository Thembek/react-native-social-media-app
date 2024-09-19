import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { hp } from '../../helpers/common';

const EditProfile = () => {
    return(
        <ScreenWrapper>
            <Text>EditProfile</Text>
        </ScreenWrapper>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    bio: {
        flexDirection: 'row',
        height: hp(15),
        
    }
})
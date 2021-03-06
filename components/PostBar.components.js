import React, {useEffect} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function PostBar(props) {
  // onPress = {props.gotoUserProfile}
  // onPress={props.onFullPostToolPressHandler}
  // onPress={props.onPhotoUploaderPressHandler}
  const {avatar, jumToProfile} = props;
  // useEffect(() => {
  //   console.log(`avatar`, avatar);
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.postToolWrapper}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.userAvatarWrapper}
          onPress={jumToProfile}>
          <Image
            style={styles.userAvatar}
            source={
              avatar == null || avatar == undefined || avatar == ''
                ? require('../assets/avatar_null.jpg')
                : {uri: avatar}
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.postInputWrapper}
          onPress={props.gotoCreatePostScreen}>
          <View style={styles.postInput}>
            <Text>Post somethings</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity

          activeOpacity={0.5}
          style={styles.postOptionItemWrapper}>
          <View
            style={{ ...styles.postOptionItem, ...styles.postOptionItemMiddle }}>
            <MaterialCommunityIcons
              style={styles.postOptionIcon}
              name='image'
              color="green"
              size={16}
            />
            <Text>
              Photo
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

export default PostBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  postToolWrapper: {
    padding: 10,
    flexDirection: 'row',
  },
  postOptionsWrapper: {
    flexDirection: 'row',
    height: 40,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  postOptionItemWrapper: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  postOptionItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  postOptionItemMiddle: {
    borderRightColor: '#ddd',
    borderRightWidth: 1,
    borderLeftColor: '#ddd',
    borderLeftWidth: 1,
  },
  postOptionIcon: {
    marginRight: 5,
  },
  postInputWrapper: {
    borderRadius: 48,
    flex: 1,
    marginLeft: 10,
  },
  postInput: {
    justifyContent: 'center',
    borderRadius: 48,
    height: 40,
    width: '100%',
    borderColor: '#ddd',
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  userAvatarWrapper: {},
});

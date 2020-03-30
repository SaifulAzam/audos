import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { iOSUIKit } from 'react-native-typography';

import Image from '../components/Image';
import { width } from '../components/Const';

const PlaylistItem = ({ theme, id, image, timeVisible, title, author, onTouchMore, onToucItem }) => {

    return (
        <TouchableOpacity
            onPress={() => onToucItem(id, title, author, image) }
            style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7 }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image width={45} height={45} round={5} source={image} />

                <View style={{ paddingHorizontal: 15, width: width * 0.55}}>
                    <Text numberOfLines={1} style={[ iOSUIKit.callout, { color: '#fff', flexWrap: 'wrap' } ]}>
                        { title }
                    </Text>
                    <Text style={[ iOSUIKit.footnote, { color: '#ccc' } ]}>
                        { author }
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                {
                    timeVisible &&
                    <Text style={[ iOSUIKit.footnote, { color: '#ccc', paddingHorizontal: 10 }]}>
                        2:53
                    </Text>
                }

                <TouchableOpacity onPress={() => onTouchMore()} style={{ paddingLeft: 10, paddingRight: 5 }}>
                    <Icon name={'more-v-a'} size={15} color={'#ccc'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
};

PlaylistItem.defaultProps = {
    timeVisible: true,
    onTouchMore: () => {}
}

export default PlaylistItem;
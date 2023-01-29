import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, InputToolbar, Actions, Send, Bubble } from 'react-native-gifted-chat'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Group1 from '../assets/Group1.png'
export default function Cancer() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello Welcome to Cancer Chat Room',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'MNA HEALTH COMMUNITY',
                    avatar: Group1,
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    function renderInputToolbar(props) {
        return (
            <View >
                <InputToolbar
                    {...props}
                    multiline={true}
                    containerStyle={styles.toolbar}
                >
                </InputToolbar>
            </View>
        )
    }
    function send(props) {
        return (
            <View>
                <Send
                    {...props}
                    containerStyle={{
                        marginTop: -5,
                        marginBottom: -25,
                        marginRight: 10,

                    }}
                >
                    <View style={styles.send}>
                        <Icons name='send-circle' size={40} color={'rgba(14, 108, 148, 0.85)'} />
                    </View>
                    {/* <View style={{ marginLeft: -400, marginTop: -40, }}>
                        <Icons name='plus' size={40} color={'rgba(14, 108, 148, 0.85)'} />
                    </View> */}
                </Send>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <GiftedChat
                renderSend={send}
                renderInputToolbar={renderInputToolbar}
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                    avatar: 'https://placeimg.com/140/140/any'
                }}
                renderUsernameOnMessage={true}
                renderAvatarOnTop={false}
                dateFormat=' MMM D, YYYY'
                // alwaysShowSend={true}
                // showUserAvatar={true}
                // showAvatarForEveryMessage={true}
                textInputStyle={{
                    backgroundColor: '#E6E5E5',
                    borderRadius: 20,
                    fontSize: 15,
                    paddingLeft: 15,
                    paddingTop: 15,
                    marginTop: -20,
                    marginRight: 65,
                }}
                minComposerHeight={50}
                maxInputLength={100}
                placeholder='Type your message here...'
                renderBubble={props => {
                    return (
                        <Bubble
                            {...props}
                            wrapperStyle={{
                                right: {
                                    backgroundColor: '#1DA1F2',
                                    borderRadius: 20,
                                    marginRight: 0,
                                    marginTop: 5,
                                    marginBottom: 0,
                                },
                                left: {
                                    backgroundColor: '#E6E5E5',
                                    borderRadius: 20,
                                    marginLeft: 0,
                                    marginTop: 5,
                                    marginBottom: 5,
                                }
                            }}
                            textStyle={{
                                right: {
                                    color: 'white',
                                    fontSize: 15,
                                },
                                left: {
                                    color: 'black',
                                    fontSize: 15,
                                }
                            }}

                        />
                    )
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    },
    toolbar: {
        backgroundColor: "white",
        borderTopColor: "#E8E8E8",
        borderTopWidth: 1,
        padding: 40,
        marginBottom: -108,
        width: 460,
    },
    send: {
        marginTop: -75,
        marginLeft: -90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

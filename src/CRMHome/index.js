import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Alert, View, Text, StyleSheet, ToastAndroid, ScrollView, Platform, Animated, Easing, Image } from 'react-native';
import Container from '../Container';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Avatar, ListItem, Subheader, Toolbar, Card, BottomNavigation, Icon } from '../react-native-material-ui';
import routes from '../routes';
const UP = 1;
const DOWN = -1;

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired, 
    style: PropTypes.shape({
        container: View.propTypes.style,
        active: Text.propTypes.style,
    }),
};

const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    imageItem: {
        height: 75,
        margin: 10,
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 75,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },
});

class CRMHome extends Component {
    constructor(props) {
        super(props);
        this.offset = 0;
        this.scrollDirection = 0;
        this.state = {
            selected: [],
            searchText: '',
            active: 'today',
            moveAnimated: new Animated.Value(0),
            progress: new Animated.Value(0),
        };
    }
    onScroll = (ev) => {
        const currentOffset = ev.nativeEvent.contentOffset.y;

        const sub = this.offset - currentOffset;

        // don't care about very small moves
        if (sub > -2 && sub < 2) {
            return;
        }

        this.offset = ev.nativeEvent.contentOffset.y;

        const currentDirection = sub > 0 ? UP : DOWN;

        if (this.scrollDirection !== currentDirection) {
            this.scrollDirection = currentDirection;

            this.setState({
                bottomHidden: currentDirection === DOWN,
            });
        }
    }
    show = () => {
        Animated.timing(this.state.moveAnimated, {
            toValue: 0,
            duration: 225,
            easing: Easing.bezier(0.0, 0.0, 0.2, 1),
            useNativeDriver: Platform.OS === 'android',
        }).start();
    }
    hide = () => {
        Animated.timing(this.state.moveAnimated, {
            toValue: 56, // because the bottom navigation bar has height set to 56
            duration: 195,
            easing: Easing.bezier(0.2, 0.0, 0.6, 1),
            useNativeDriver: Platform.OS === 'android',
        }).start();
    }
    componentDidMount() {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 5000,
        }).start();
    }
    renderToolbar = () => {
        return (
            <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => this.props.navigation.goBack()}
                rightElement={{
                    actions: ['textsms'],
                }}
            />
        );
    }
    renderContaint = () => {
        const datacarousel = [
            {
                "id": 1,
                "imagePath": "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/05/RB31-um-demo.png",
            },
            {
                "id": 2,
                "imagePath": "https://www.chefmerito.com/images/banner-recipes-b.jpg",
            },
            {
                "id": 3,
                "imagePath": "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/05/RB18-um-demo.png",
            },
          ];
        return (
            
            <ScrollView
                    keyboardShouldPersistTaps="always"
                    keyboardDismissMode="interactive"
                    onScroll={this.onScroll}
                    ref={(c) => { this.parentScrollView = c; }}
                >
                {this.state.active === "today" && 
                <View  style={{ flex: 1 }}>
                    <SwipeableParallaxCarousel
                        height={100}
                        data={datacarousel}
                        parentScrollViewRef={this.parentScrollView}
                        align='center'
                        navigation='true'
                        navigationType='bars'
                        parallax='false'
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}
                    />
                    <Grid>
                        <Row size={100}>
                            <Col>
                                <Image
                                    style={styles.imageItem}
                                    source={{uri: 'http://charlottemagazine-images.dashdigital.com/images/cache/cache_f/cache_f/cache_1/shutterstock_327314204-9c8af1ff.jpeg'}}
                                />
                            </Col>
                            <Col>
                                <Image
                                    style={styles.imageItem}
                                    source={{uri: 'https://png.icons8.com/color/540//restaurant-table.png'}}
                                />
                            </Col>
                            <Col>
                                <Image
                                    style={styles.imageItem}
                                    source={{uri: 'https://t4.ftcdn.net/jpg/01/23/63/67/500_F_123636713_UDh1EifUdpU8FmCzh5BGrWpA6ipavInF.jpg'}}
                                />
                            </Col>
                            <Col>
                                <Image
                                    style={styles.imageItem}
                                    source={{uri: 'https://conceptdraw.com/a3180c3/p36/preview/640/pict--sales-orders-sales-workflow---vector-stencils-library.png--diagram-flowchart-example.png'}}
                                />
                            </Col>
                        </Row>
                    </Grid>
                    <Subheader text="Gần đây" />
                        <ListItem
                            divider
                            leftElement={this.state.active}
                            centerElement={{
                                primaryText: 'Center element as an object',
                                secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                            }}
                            numberOfLines={3}
                        />
                </View>
            }
            {this.state.active === "people" && 
            <View  style={{ flex: 1 }}>
            <Subheader text="Gần đây" />
                <ListItem
                    divider
                    leftElement={this.state.active}
                    centerElement={{
                        primaryText: 'Center element as an object',
                        secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    }}
                    numberOfLines={3}
                />
            <Subheader text="Nổi bật" />
                <ListItem
                    divider
                    leftElement="person"
                    centerElement={{
                        primaryText: 'Center element as an object',
                        secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    }}
                    numberOfLines={3}
                />
            <Card style={{ flex: 1, }}>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
        </View>
    }
    {this.state.active === "history" && 
            <View  style={{ flex: 1 }}>
            <Subheader text="Gần đây" />
                <ListItem
                    divider
                    leftElement={this.state.active}
                    centerElement={{
                        primaryText: 'Center element as an object',
                        secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    }}
                    numberOfLines={3}
                />
            
            <Card style={{ flex: 1, }}>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
            <Card>
                <ListItem
                    leftElement={<Avatar text="JM" />}
                    centerElement={{
                        primaryText: 'John Mitri',
                        secondaryText: '3 weeks ago',
                    }}
                />
            </Card>
        </View>
    }
    {this.state.active === "settings" && 
            <View  style={{ flex: 1 }}>
            <Subheader text="Thiết lập tài khoản" />
            <ListItem
                        divider
                        leftElement="account-box"
                        centerElement={{
                            primaryText: 'Ảnh đại diện và bìa',
                        }}
                        rightElement="keyboard-arrow-right"
                        onLeftElementPress={() => {
                            if (Platform.OS === 'android') {
                                ToastAndroid.show('Left element pressed', ToastAndroid.SHORT);
                            }
                        }}
                        onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
                        onRightElementPress={() => {
                            if (Platform.OS === 'android') {
                                ToastAndroid.show('Right element pressed', ToastAndroid.SHORT);
                            }
                        }}
                    />
            <ListItem
                        divider
                        leftElement="phonelink-lock"
                        centerElement={{
                            primaryText: 'Mật khẩu',
                        }}
                        rightElement="keyboard-arrow-right"
                        
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Thông tin & Liên hệ',
                        }}
                        rightElement="keyboard-arrow-right"
                        
                    />
                    
            <Subheader text="Cài đặt Ứng dụng" />
            <ListItem
                        divider
                        leftElement="notifications"
                        centerElement={{
                            primaryText: 'Cài đặt thông báo',
                        }}
                        rightElement="keyboard-arrow-right"
                        
                    />
                    <ListItem
                        divider
                        leftElement="public"
                        centerElement={{
                            primaryText: 'Tiết kiệm dữ liệu',
                        }}
                        rightElement="keyboard-arrow-right"
                        
                    />
                    <Subheader text="Thông tin khác" />
            <ListItem
                        divider
                        leftElement="supervisor-account"
                        centerElement={{
                            primaryText: 'Về NhaHangPOS',
                        }}
                        rightElement="keyboard-arrow-right"
                    />
                    <ListItem
                        divider
                        leftElement="shopping-cart"
                        centerElement={{
                            primaryText: 'Ứng dụng liên quan',
                        }}
                        rightElement="keyboard-arrow-right"
                    />
                    <ListItem
                        divider
                        leftElement="local-phone"
                        centerElement={{
                            primaryText: 'Liên hệ',
                        }}
                        rightElement="keyboard-arrow-right"
                    />
                    
           
        </View>
    }
                </ScrollView>
        );
    }
    renderBottomNavigation  = () => {
        const { navigate } = this.props.navigation;
        return (
            <BottomNavigation 
                active={this.state.active}
                hidden={this.state.bottomHidden}
                style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
            >
                <BottomNavigation.Action
                    key="today"
                    icon="today"
                    onPress={() => this.setState({ active: 'today' })}
                />
                <BottomNavigation.Action
                    key="people"
                    icon="people"
                    onPress={() => this.setState({ active: 'people' })}
                />
                <BottomNavigation.Action
                    key="history"
                    icon="history"
                    onPress={() => this.setState({ active: 'history' })}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    onPress={() => this.setState({ active: 'settings' })}
                />
            </BottomNavigation>
        );
    }
    render() {
        return (
            <Container>
                {this.renderToolbar()}
                {this.renderContaint()}
                {this.renderBottomNavigation()}
            </Container>
        );
    }
}

CRMHome.propTypes = propTypes;
CRMHome.contextTypes = contextTypes;
export default CRMHome;
               
                   
            
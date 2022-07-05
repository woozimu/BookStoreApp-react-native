import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {COLORS, icons, SIZES} from "../../constants";
import LineDivider from "../LineDevider";
import React from "react";

function BookInfoSection({book, navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={book.bookCover}
                resizeMode="cover"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }}
            />

            {/* Color Overlay */}
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: book.backgroundColor
                }}
            >
            </View>

            {/* Navigation header */}
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    height: 80,
                    alignItems: 'flex-end'
            }}>
                <TouchableOpacity
                    style={{ marginLeft: SIZES.base }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back_arrow_icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: book.navTintColor
                        }}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                }}>
                    <Text style={{ color: book.navTintColor }}>
                        Book Detail
                    </Text>
                </View>

                <TouchableOpacity
                    style={{ marginRigth: SIZES.base }}
                    onPress={() => console.log("Click More")}
                >
                    <Image
                        source={icons.more_icon}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: book.navTintColor,
                            alignSelf: 'flex-end'
                        }}
                    />
                </TouchableOpacity>
            </View>

            {/* Book Cover */}
            <View
                style={{ flex: 5,
                    paddingTop: SIZES.padding2,
                    alignItems: 'center' }}>
                <Image
                    source={book.bookCover}
                    resizeMode="contain"
                    style={{
                        flex: 1,
                        width: 150,
                        height: "auto"
                    }}
                />
            </View>

            {/* Book Name and Author */}
            <View
                style={{
                    flex: 1.8,
                alignItems: 'center',
                    justifyContent: 'center' }}>
                <Text
                    style={{
                        color: book.navTintColor
                }}>
                    {book.bookName}
                </Text>
                <Text
                    style={{
                        color: book.navTintColor
                }}>
                    {book.author}
                </Text>
            </View>

            {/* Book Info */}
            <View
                style={{
                    flexDirection: 'row',
                    paddingVertical: 20,
                    margin: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: "rgba(0,0,0,0.3)"
                }}
            >
                {/* Rating */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: COLORS.white }}>{book.rating}</Text>
                    <Text style={{ color: COLORS.white }}>Rating</Text>
                </View>

                <LineDivider />

                {/* Pages */}
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: SIZES.radius,
                        alignItems: 'center'
                }}>
                    <Text style={{ color: COLORS.white }}>
                        {book.pageNo}
                    </Text>
                    <Text style={{ color: COLORS.white }}>
                        Number of Page
                    </Text>
                </View>

                <LineDivider />

                {/* Language */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: COLORS.white }}>
                        {book.language}
                    </Text>
                    <Text style={{ color: COLORS.white }}>
                        Language
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default BookInfoSection

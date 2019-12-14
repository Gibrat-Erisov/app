import React, { Component } from "react";
import { Content, Card, List, ListItem, Left, Body, Right } from "native-base";
import { Text, View } from "react-native";
export default CardItemBordered = () => {
  return (
    <Content padder>
      <Card>
        <List>
          <View style={{ backgroundColor: "#FF5722" }}>
            <ListItem>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
              >
                Продажи: Товары
              </Text>
            </ListItem>
          </View>
          <ListItem itemDivider icon>
            <Left>
              <Text>#</Text>
            </Left>
            <Body>
              <Text>Наименование</Text>
            </Body>
            <Right>
              <Text>сумма</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Text>1</Text>
            </Left>
            <Body>
              <Text
                numberOfLines={1}
                elipsizeMode="tail"
                style={{ paddingRight: 20 }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus id aliquid sapiente quidem hic officia nam a cupiditate
                in deleniti voluptatibus, exercitationem provident, rem odio ex
                natus unde explicabo corrupti.
              </Text>
            </Body>
            <Right>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                7 728 000
              </Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Text>2</Text>
            </Left>
            <Body>
              <Text
                numberOfLines={1}
                elipsizeMode="tail"
                style={{ paddingRight: 20 }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus id aliquid sapiente quidem hic officia nam a cupiditate
                in deleniti voluptatibus, exercitationem provident, rem odio ex
                natus unde explicabo corrupti.
              </Text>
            </Body>
            <Right>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                7 728 000
              </Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Text>3</Text>
            </Left>
            <Body>
              <Text
                numberOfLines={1}
                elipsizeMode="tail"
                style={{ paddingRight: 20 }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus id aliquid sapiente quidem hic officia nam a cupiditate
                in deleniti voluptatibus, exercitationem provident, rem odio ex
                natus unde explicabo corrupti.
              </Text>
            </Body>
            <Right>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                7 728 000
              </Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Text>4</Text>
            </Left>
            <Body>
              <Text
                numberOfLines={1}
                elipsizeMode="tail"
                style={{ paddingRight: 20 }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus id aliquid sapiente quidem hic officia nam a cupiditate
                in deleniti voluptatibus, exercitationem provident, rem odio ex
                natus unde explicabo corrupti.
              </Text>
            </Body>
            <Right>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                7 728 000
              </Text>
            </Right>
          </ListItem>
        </List>
      </Card>
    </Content>
  );
};

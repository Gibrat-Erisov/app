import React from "react";

import { Icon, Tabs, Tab, TabHeading, Header, Container } from "native-base";
import { Text, View } from "react-native";
import TabNavDate from "./TabNavDate";
import TabNavPeriod from "./TabNavPeriod";

export default class TabsAdvancedExample extends React.Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon name="calendar" size={24} />
                <Text> Data</Text>
              </TabHeading>
            }
          >
            <TabNavDate />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon
                  type="MaterialCommunityIcons"
                  name="arrow-expand-horizontal"
                  size={24}
                />
                <Text>Period</Text>
              </TabHeading>
            }
          >
            <TabNavPeriod />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

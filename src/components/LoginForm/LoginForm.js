import React from "react";
import { Container, Content, Form, Item, Input } from "native-base";
import { Button, Text } from "react-native";
export default LoginForm = props => {
  const { InputChange, handleSubmit, authError } = props;
  const { errorName, errorPassword, username, password } = props.data;
  return (
    <Container style={{ backgroundColor: "rgba(227, 166, 166, 0.8);" }}>
      <Content style={{ paddingTop: 50 }}>
        <Text style={{ color: "red" }}>{authError}</Text>
        <Form style={{ paddingHorizontal: 20 }}>
          <Text style={{ color: "red" }}>{errorName}</Text>
          <Item>
            <Input
              placeholder="Username"
              onChangeText={text => InputChange(text, "Username")}
              value={username}
            />
          </Item>
          <Text style={{ color: "red" }}>{errorPassword}</Text>
          <Item last>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={text => InputChange(text, "Password")}
              value={password}
            />
          </Item>
          <Button onPress={handleSubmit} title="Enter" />
        </Form>
      </Content>
    </Container>
  );
};

import React from "react";
import PropTypes from "prop-types";
import {
  Panel,
  PanelHeader,
  Div,
  Text,
  Button,
  Input,
  FormLayout,
  Card,
  FormLayoutGroup,
} from "@vkontakte/vkui";

const Info = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Новый подкаст</PanelHeader>
      <Div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card
          style={{
            height: 72,
            width: 72,
            backgroundColor: '#F2F3F5',
            borderWidth: 0.5,
            borderColor: "#e0e0e0",
            borderStyle: 'solid',
          }}
        ></Card>
        <div
          style={{
            flex: 1,
            marginLeft: 12,
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              marginBottom: 8,
              fontSize: 14,
              color: "#6D7885",
              letterSpacing: -0.154,
            }}
          >
            Название
          </Text>
          <input
            placeholder="Введите название подкаста"
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 10,
              maxHeight: 44,
              borderWidth: 0.5,
              borderStyle: "solid",
              backgroundColor: "#F2F3F5",
              borderColor: "#e0e0e0",
              fontSize: 16,
              letterSpacing: -0.32,
              color: "#818C99",
              outlineWidth: 0,
              boxSizing: "border-box",
            }}
          />
        </div>
      </Div>
    </Panel>
  );
};

Info.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Info;

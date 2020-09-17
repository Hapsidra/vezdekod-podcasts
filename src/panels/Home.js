import React from "react";
import PropTypes from "prop-types";
import {
  Panel,
  PanelHeader,
  Div,
  Text,
  Button,
} from "@vkontakte/vkui";
import Icon56AddCircleOutline from "@vkontakte/icons/dist/56/add_circle_outline";

const Home = ({ id, onClick }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Подкасты</PanelHeader>
      <Div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon56AddCircleOutline
            style={{
              color: "#99A2AD",
            }}
          />
          <Text
            style={{
              marginTop: 16,
              fontSize: 20,
              letterSpacing: 0.38,
              fontWeight: 600,
            }}
          >
            Добавьте первый подкаст
          </Text>
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 16,
              letterSpacing: -0.32,
              color: "#818C99",
              marginLeft: 32,
              marginRight: 32,
              marginTop: 8,
            }}
          >
            Добавляйте, редактируйте и делитесь подкастами вашего сообщества.
          </Text>
          <Button
            onClick={onClick}
            style={{
              marginTop: 24,
            }}
            size="l"
          >
            Добавить подкаст
          </Button>
        </Div>
      </Div>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Home;

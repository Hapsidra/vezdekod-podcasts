import React from "react";
import PropTypes from "prop-types";
import {
  Panel,
  PanelHeader,
  Div,
  Text,
  Button,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import Icon56CheckCircleOutline from "@vkontakte/icons/dist/56/check_circle_outline";
import bridge from '@vkontakte/vk-bridge';

const Share = ({ id, onClick, onBack }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={onBack} />}>
        Подкасты
      </PanelHeader>
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
          <Icon56CheckCircleOutline
            style={{
              color: "#3F8AE0",
            }}
          />
          <Text
            style={{
              marginTop: 16,
              fontSize: 20,
              letterSpacing: 0.38,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Подкаст добавлен
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
              textAlign: "center",
            }}
          >
            Раскажите своим подписчикам о новом подкасте, чтобы получить больше
            слушателей.
          </Text>
          <Button
            onClick={() => {
                bridge.send("VKWebAppShare", {"link": "https://vk.com/video-460389_160321403"});
            }}
            style={{
              marginTop: 24,
            }}
            size="l"
          >
            Поделиться подкастом
          </Button>
        </Div>
      </Div>
    </Panel>
  );
};

Share.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Share;

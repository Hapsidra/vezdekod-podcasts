import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Panel,
  PanelHeader,
  Div,
  Text,
  Button,
  PanelHeaderBack,
  Separator,
  FixedLayout,
  Spinner,
} from "@vkontakte/vkui";
import Icon56AddCircleOutline from "@vkontakte/icons/dist/56/add_circle_outline";
import { formatDuration } from "../utils";
import Icon16Play from "@vkontakte/icons/dist/16/play";

const Check = ({
  id,
  image,
  title,
  audio,
  description,
  audioObject,
  audioInfo,
  onBack,
  onNext,
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={onBack} />}>
        Новый подкаст
      </PanelHeader>
      <Div
        style={{
          display: "flex",
        }}
      >
        <Button
          style={{
            height: 72,
            width: 72,
            backgroundColor: "#F2F3F5",
          }}
          onClick={() => {
            if (audioObject.paused) {
              audioObject.play();
            } else {
              audioObject.pause();
            }
          }}
        >
          <img
            style={{
              top: 0,
              borderWidth: 0,
              margin: 0,
              objectFit: "cover",
              height: 72,
              width: 72,
              borderRadius: 10,
              marginTop: -10,
              backgroundColor: "#F2F3F5",
            }}
            src={image}
          />
        </Button>
        <Div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              letterSpacing: -0.4,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#4986CC",
              fontSize: 12,
            }}
          >
            {audioInfo.name}
          </Text>
          <Text
            style={{
              color: "#818C99",
              fontSize: 12,
            }}
          >
            Длительность: {formatDuration(audioObject.duration)}
          </Text>
        </Div>
      </Div>
      <Separator />
      <Div>
        <Text
          style={{
            fontSize: 17,
          }}
        >
          Описание
        </Text>
        <Text
          style={{
            fontSize: 15,
            letterSpacing: -0.24,
            marginTop: 12,
          }}
        >
          {description}
        </Text>
      </Div>
      <Separator />
      <Div>
        <Text
          style={{
            fontSize: 17,
          }}
        >
          Содержание
        </Text>
      </Div>
      <FixedLayout vertical="bottom">
        <Separator />
        <Div>
          <Button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                onNext();
              }, 2000);
            }}
            size="xl"
          >
            {loading ? (
              <Spinner
                style={{
                  color: "white",
                }}
              />
            ) : (
              "Опубликовать подкаст"
            )}
          </Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
};

Check.propTypes = {
  id: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Check;

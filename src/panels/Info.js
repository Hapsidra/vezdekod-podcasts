import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Panel,
  PanelHeader,
  Div,
  Text,
  PanelHeaderBack,
  Button,
  Textarea,
  FormLayout,
  Separator,
  Checkbox,
  CellButton,
  File,
  Spinner,
} from "@vkontakte/vkui";
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import "./Info.css";
import arrowIcon from "../img/arrow.svg";
import microphone from "../img/microphone.svg";

const Label = function ({ children, style }) {
  return (
    <Text
      style={{
        ...style,
        fontSize: 14,
        color: "#6D7885",
        letterSpacing: -0.154,
      }}
    >
      {children}
    </Text>
  );
};

const zeroPrefix = (s) => {
  s = s + "";
  if (s.length < 2) {
    return "0" + s;
  }
  return s;
};

const formatDuration = (seconds) => {
  seconds = parseInt(Math.round(seconds));
  const minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;
  return zeroPrefix(minutes) + ":" + zeroPrefix(seconds);
};

const Info = ({
  id,
  onBack,
  image,
  setImage,
  title,
  setTitle,
  audio,
  setAudio,
  description,
  setDescription,
  audioObject,
  setAudioObject,
  audioInfo,
  setAudioInfo,
  onEdit,
}) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={onBack} />}>
        Новый подкаст
      </PanelHeader>
      <Div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <File
          disabled={imageLoading}
          accept="image/*"
          onChange={(e) => {
            const fr = new FileReader();
            const file = e.currentTarget.files[0];
            if (file) {
              setImageLoading(true);
              fr.readAsDataURL(file);
              fr.onload = (e) => {
                const { result } = e.currentTarget;
                setImage(result);
                setImageLoading(false);
              };
            }
          }}
          style={{
            height: 72,
            width: 72,
            backgroundColor: "#F2F3F5",
            borderWidth: 0.5,
            borderColor: "#e0e0e0",
            borderStyle: "solid",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imageLoading ? (
            <Spinner />
          ) : image ? (
            <img
              style={{
                borderRadius: 10,
                objectFit: "cover",
                height: 72,
                width: 72,
              }}
              src={image}
            />
          ) : (
            <Icon56GalleryOutline
              height={25.14}
              width={25.14}
              style={{
                color: "#3F8AE0",
              }}
            />
          )}
        </File>
        <div
          style={{
            flex: 1,
            marginLeft: 12,
            alignSelf: "flex-end",
          }}
        >
          <Label
            style={{
              marginBottom: 8,
            }}
          >
            Название
          </Label>
          <input
            id="podcast-name"
            placeholder="Введите название подкаста"
            value={title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
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
              outlineWidth: 0,
              boxSizing: "border-box",
            }}
          />
        </div>
      </Div>
      <FormLayout>
        <Textarea
          top={<Label>Описание подкаста</Label>}
          value={description}
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
      </FormLayout>
      <Div
        style={{
          display: "flex",
          marginTop: 32,
          flexDirection: "column",
          alignItems: "center",
          height: 208 - 64,
          marginBottom: 32,
        }}
      >
        {audioLoading ? (
          <Spinner size="large" />
        ) : audioInfo ? (
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderRadius: 10,
                  height: 48,
                  width: 48,
                  backgroundColor: "#F2F3F5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={microphone} />
              </div>
              <Text
                style={{
                  marginLeft: 12,
                  fontSize: 16,
                  letterSpacing: -0.32,
                  flex: 1,
                }}
              >
                {audioInfo.name}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  letterSpacing: -0.078,
                  color: "#99A2AD",
                }}
              >
                {formatDuration(audioObject.duration)}
              </Text>
            </div>
            <Text
              style={{
                marginTop: 10,
                fontSize: 13,
                color: "#818C99",
                letterSpacing: -0.078,
              }}
            >
              Вы можете добавить таймкоды и скорректировать подкаст в режиме
              редактирования
            </Text>
            <Button
              style={{
                marginTop: 24,
              }}
              size="xl"
              mode="outline"
              onClick={onEdit}
            >
              Редактировать аудиозапись
            </Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                letterSpacing: 0.38,
              }}
            >
              Загрузите Ваш подкаст
            </Text>
            <Text
              style={{
                color: "#818C99",
                fontSize: 16,
                marginTop: 8,
              }}
            >
              Выберите готовый аудиофайл из вашего телефона и добавьте его
            </Text>
            <File
              style={{
                marginTop: 30,
              }}
              accept="audio/*"
              size="l"
              mode="outline"
              onChange={(e) => {
                const fr = new FileReader();
                const file = e.currentTarget.files[0];
                console.log("audio", file);
                if (file) {
                  setAudioLoading(true);
                  fr.readAsDataURL(file);
                  fr.onload = (e) => {
                    const { result } = e.currentTarget;
                    console.log("audio data", result);
                    const a = new Audio(result);
                    a.onloadeddata = () => {
                      setAudioObject(a);
                      setAudio(result);
                      setAudioInfo(file);
                      setAudioLoading(false);
                    };
                  };
                }
              }}
            >
              Загрузить файл
            </File>
          </div>
        )}
      </Div>
      <Separator />
      <Checkbox
        style={{
          marginTop: 12,
        }}
      >
        Ненормативный контент
      </Checkbox>
      <Checkbox
        style={{
          marginTop: 12,
        }}
      >
        Исключить эпизод из экспорта
      </Checkbox>
      <Checkbox
        style={{
          marginTop: 12,
        }}
      >
        Трейлер подкаста
      </Checkbox>
      <CellButton
        style={{
          marginTop: 30,
          display: "flex",
          height: 56,
        }}
      >
        <Div
          style={{
            margin: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            right: 0,
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 17,
              }}
            >
              Кому доступен данный подкаст
            </Text>
            <Text
              style={{
                color: "#818C99",
                fontSize: 11,
              }}
            >
              Всем пользователям
            </Text>
          </div>
          <img style={{}} src={arrowIcon} />
        </Div>
      </CellButton>
      <Text
        style={{
          fontSize: 13,
          color: "#818C99",
          marginLeft: 12,
        }}
      >
        При публикации записи с эпизодом, он становится доступным для всех
        пользователей
      </Text>
      <Div
        style={{
          marginTop: 24,
        }}
      >
        <Button disabled={audio == null || title.length === 0} size="xl">
          Далее
        </Button>
      </Div>
    </Panel>
  );
};

Info.propTypes = {
  id: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Info;

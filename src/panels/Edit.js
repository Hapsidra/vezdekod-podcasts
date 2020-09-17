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
import Icon56AddCircleOutline from "@vkontakte/icons/dist/56/add_circle_outline";

const Edit = ({
  id,
  image,
  title,
  audio,
  description,
  audioObject,
  audioInfo,
  onBack,
}) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={onBack} />}>
        Редактирование
      </PanelHeader>
    </Panel>
  );
};

Edit.propTypes = {
  id: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Edit;

import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Info from "./panels/Info";
import Edit from './panels/Edit'

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [audio, setAudio] = useState(null);
  const [description, setDescription] = useState("");
  const [audioObject, setAudioObject] = useState(null);
  const [audioInfo, setAudioInfo] = useState(null);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
  }, []);

  return (
    <View activePanel={activePanel}>
      <Home
        id="home"
        onClick={() => {
          setActivePanel("info");
        }}
      />
      <Info
        id="info"
        onBack={() => {
          setActivePanel("home");
		}}
		image={image}
		title={title}
		audio={audio}
		description={description}
		audioObject={audioObject}
		audioInfo={audioInfo}
		setImage={setImage}
		setTitle={setTitle}
		setAudio={setAudio}
		setDescription={setDescription}
		setAudioObject={setAudioObject}
		setAudioInfo={setAudioInfo}
		onEdit={() => {
			setActivePanel('edit');
		}}
      />
      <Edit
		id="edit"
		image={image}
		title={title}
		audio={audio}
		description={description}
		audioObject={audioObject}
		audioInfo={audioInfo}
        onBack={() => {
          setActivePanel("info");
        }}
      />
    </View>
  );
};

export default App;

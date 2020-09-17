import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {View} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Info from './panels/Info';

const App = () => {
  const [activePanel, setActivePanel] = useState("info");

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
      <Home id="home" onClick={() => {
		  setActivePanel('info')
	  }} />
	  <Info id="info" />
    </View>
  );
};

export default App;

import { View, Poster } from "./styles";
import React from "react";

export default function Bottom({ posterURL, title, day, name, hairline }) {
  return (
    <View>
      <Poster>
        <img src={posterURL} alt={title}></img>
      </Poster>
      <div>
        <p>{title} </p>
        <p>
          {day} {hairline} {name}
        </p>
      </div>
    </View>
  );
}

"use client";

import { useState } from "react";

export default function Portrait({ photo, name, initials }) {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      type="button"
      className={`portrait ${playing ? "is-playing" : ""}`}
      onClick={() => setPlaying(true)}
      onAnimationEnd={() => setPlaying(false)}
      aria-label={`Foto ${name}`}
    >
      {photo ? (
        <img src={photo} alt="" />
      ) : (
        <span className="portrait-empty" aria-hidden="true">
          <span>{initials}</span>
        </span>
      )}
    </button>
  );
}

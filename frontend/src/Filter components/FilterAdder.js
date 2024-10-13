import { add_tags } from "../functions";
import "./FilterAdder.css";

import React, { useState } from 'react';

export function FilterAdder({tags, set_tags}) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [tagText, setTagText] = useState('');

  const handleToggleForm = () => {
    setFormVisible(!isFormVisible);
    setTagText('');
  };

  const handleAddTag = () => {
    if (tagText.trim() !== '') {
      add_tags([tagText.trim()], tags, set_tags)
      setFormVisible(false);
      setTagText('');
    }
  };

  return (
    <div>
      {isFormVisible ? (
        <div>
          <input
            type="text"
            value={tagText}
            onChange={(e) => setTagText(e.target.value)}
          />
          <button onClick={handleAddTag}>Добавить</button>
        </div>
      ) : (
        <div>
          <button className="plus_filter" onClick={handleToggleForm}>+</button>
        </div>
      )}
    </div>
  );
};

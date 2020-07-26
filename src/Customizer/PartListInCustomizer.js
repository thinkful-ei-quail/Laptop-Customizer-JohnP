import React from 'react';
import slugify from 'slugify';
import OptionInPartList from './OptionInPartList';

export default function PartListInCustomizer(props) {
  const featureHash = props.feature + '-' + props.idx;
  const options = props.features[props.feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(props.feature)}
          checked={item.name === props.state.selected[props.feature].name}
          onChange={e => props.updateFeature(props.feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({props.USCurrencyFormat.format(item.cost)})
          </label>
      </div>
    );
  });

  return (
    <OptionInPartList
      featureHash={featureHash}
      feature={props.feature}
      options={options}
    />
  )
}

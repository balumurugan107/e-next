import React from 'react';
import Tooltip from '@atlaskit/tooltip';
import Select, { components, MultiValueGenericProps } from 'react-select';
import makeAnimated from 'react-select/animated';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const MultiValueContainer = (props: MultiValueGenericProps<any>) => {
  return (
    <Tooltip content={'Customise your multi-value container!'}>
      <components.MultiValueContainer {...props} />
    </Tooltip>
  );
};

const animatedComponents = makeAnimated();

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={animatedComponents}
    defaultValue={[options[1]]}
    className="rounded-full"
    isMulti
    options={options}
  />
);
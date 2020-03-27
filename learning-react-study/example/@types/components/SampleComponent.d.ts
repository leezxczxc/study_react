import React, { PureComponent } from 'react';
import { SampleModelState } from 'models/SampleModel';
declare class SampleComponent extends PureComponent<{}, SampleModelState> {
    state: {
        username: string;
        message: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: () => void;
    render(): JSX.Element;
}
export default SampleComponent;

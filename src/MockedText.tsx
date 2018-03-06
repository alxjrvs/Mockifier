
import * as React from 'react';

import mockEngine from './MockEngine';

interface Props {
    text: string;
}

interface State {
    mockedText: string;
}

const GHOST_TEXT = 'YOU HAVE AWOKEN THE BEAST. THE END IS <a href="google.com">NIGH</a>.';
const TRIGGER_TEXT = 'Gerardo';

export default class MockedText extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            mockedText: mockEngine(props.text)
        };
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        let mockedText: string;
        if (prevProps.text !== this.props.text) {
            if (this.props.text === TRIGGER_TEXT) {
                mockedText = GHOST_TEXT;
            } else {
                mockedText = mockEngine(this.props.text);
            }
            this.setState(() => ({ mockedText }));
        }
    }

    render() {
        return <div > {this.state.mockedText} </div>;
    }
}

import React from 'react';

import './index.less';

class Layout extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="main">
                Welcome react web app.
            </div>
        );
    }
}

export default Layout;
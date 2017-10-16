import React from 'react';

export default () => {
    return (
        <div>
            <label>
                <input type="checkbox" onChange={(e) => {
                    Session.set('showVisible', e.target.checked);
                }} />
                Show hidden links
            </label>
        </div>
    )
}
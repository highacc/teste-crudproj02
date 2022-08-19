import React from 'react'

export const Component03 = () => {

    return (
    <>
        <div className="modal-body">
            <h5>Popover in a modal</h5>
            <p>This <a href="#" role="button" className="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
            <hr/>
            <h5>Tooltips in a modal</h5>
            <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
        </div>
    </>
    )

    };
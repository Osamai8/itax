import React from 'react'

function CaseLawModal(props) {
    return (
        <div>
            <a style={{float:'right'}} class="btn button">Download Pdf</a>
            <div
                dangerouslySetInnerHTML={{
                  __html: props.content,
                }}
              />
        </div>
    )
}

export default CaseLawModal

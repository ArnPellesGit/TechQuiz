import React  from "react";

const NotificationBell = ({className}) => {
    return(
        <div className={className} onClick={() => {console.log('hello')}}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                 focusable="false" width="2em" height="2em"
                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                <path className="clr-i-solid clr-i-solid-path-1"
                      d="M32.85 28.13l-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8z"
                      fill="#626262"/>
                <path className="clr-i-solid clr-i-solid-path-2" d="M15.32 32a2.65 2.65 0 0 0 5.25 0z" fill="#626262"/>
            </svg>
        </div>
    )
}

export default NotificationBell;
import React from "react";
export function ErrorShowing(errorMessage: any) {
    return (
        <p className="text-red-500 font-medium text-xs mt-1">{errorMessage}</p>
    );
}
export function ErrorAlertShowing(alerterrorMessage: any) {
    return (
        <div className="flex items-center border border-red-100 p-1 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg className="flex-shrink-0 w-4 h-4 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium">
                {alerterrorMessage}
            </div>
        </div>
    )
}


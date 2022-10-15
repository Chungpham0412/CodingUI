import React from 'react';
function Button({ children, className = '', type = 'button', ...props }) {
    const { isLoading, ...rest } = props;
    const child = isLoading ? (
        <div className="w-10 h-10 border-4 rounded-full border-white-500 animate-spin border-t-transparent"></div>
    ) : (
        children
    );
    return (
        <button type={type} className={className} disabled={isLoading} {...rest}>
            {child}
        </button>
    );
}

export default Button;

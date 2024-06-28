import React from 'react';

type LinkItemProps = {
    label: string;
    url: string;
};

const LinkItem = ({ label, url }: LinkItemProps) => {
    return (
        <div>
            <a href={url}>{label}</a>
        </div>
    );
};

export default LinkItem;

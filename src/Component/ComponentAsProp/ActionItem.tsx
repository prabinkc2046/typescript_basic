import React from 'react';

type ActionItemProps = {
    label: string;
    onClick: () => void;
};

const ActionItem = ({ label, onClick }: ActionItemProps) => {
    return (
        <div>
            <button onClick={onClick}>{label}</button>
        </div>
    );
};

export default ActionItem;

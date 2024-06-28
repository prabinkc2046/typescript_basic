import React from 'react';
import LinkItem from './LinkItem';
import ActionItem from './ActionItem';

// Items properties that are common in each item in the array
// for example; each item has type either link or action
// and each item has label which is string
// so these common properties can be placed as a based properteis
// according to chatgpt

type MenuItemBase = {
    type: 'link' | 'action';
    label: string;
};


// extending the base property and being specific to specific item
// for example, item that represents only link
// so type of link and its very specfici property
// it does not include label because label is common to both or overlap and 
// alredy defined as a base property
type MenuLinkItem = {
    type: 'link';
    url: string;
    label: string;
}

// define a type specific to action only 
// properties that are not overlapped or found in base properties
type MenuActionItem = {
    type: 'action';
    onClick: () => void;
    label: string;
}

export type MenuItems = MenuLinkItem | MenuActionItem

type MenuProps = {
    menuItems: MenuItems[];
};
const menuItems: MenuItems[] = [
    { type: 'link', label: 'Home', url: '/' },
    { type: 'link', label: 'About', url: '/about' },
    { type: 'action', label: 'Logout', onClick: () => console.log('Logging out...') }
];
const Menu  = ({ menuItems }: MenuProps) => {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {menuItems.map((item, index) => (
                    <li>
                        {item.type === 'link' ? (
                            <LinkItem label={item.label} url={item.url}/>
                        ) : (
                            <ActionItem label={item.label} onClick={item.onClick}/>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;

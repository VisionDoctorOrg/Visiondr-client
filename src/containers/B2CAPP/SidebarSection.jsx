import React from 'react';
import SidebarItem from './SidebarItem';

const SidebarSection = ({ title, items }) => {
  return (
    <section className="flex flex-col mt-8 w-full text-sm">
      <h2 className="font-medium text-gray-950">{title}</h2>
      <div className="flex flex-col mt-3 w-full text-center">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
            path={item.path}
            className={index > 0 ? "mt-3" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default SidebarSection;
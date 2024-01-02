import React, { PropsWithChildren } from 'react';

type Props = {
    children?: React.ReactNode
  };

const InvItem: React.FC<Props> = (props: Props) => {
    return (
        <div className="bg-invitem w-16 h-16 xl:w-18 xl:h-18 2xl:w-24 2xl:h-24">
            {props.children}
        </div>
    );
};

export default InvItem;

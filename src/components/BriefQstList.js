import React, { Fragment } from 'react';
import BriefQst from './BriefQst';


function BriefQstList(props) {
    const { idsList, emptyListNote } = props;

    return (
        <Fragment>
            <h2 className="text-center my-3">
                <small>Would You Rather ... ?</small>
            </h2>
            {idsList.length ? (
                idsList.map((id) => <BriefQst key={id} id={id} />)
            ) : (
                <p className="text-center">
                    {emptyListNote}
                </p>
            )}
        </Fragment>
    );
}

export default BriefQstList;
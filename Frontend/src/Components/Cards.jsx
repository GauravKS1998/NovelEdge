import React from "react";

function Cards(props) {
    let { item, key } = props;

    return (
        <div
            key={key}
            className=" grid justify-center mt-3 md:mt-5 md:mb-7 space-x-4 pl-3 pr-3 pb-4"
        >
            <div className="card bg-base-100 w-full h-full shadow-lg rounded-2xl border">
                <figure>
                    <img src={item.img} alt={item.title} className=" w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>
                        {item.synopsis?.length > 120
                            ? item.synopsis.slice(0, 120) + "..."
                            : item.synopsis}
                    </p>
                    <div className="card-actions">
                        {item.genre.map((e, index) => {
                            return (
                                <div
                                    className="badge badge-outline"
                                    key={index}
                                >
                                    {e}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;

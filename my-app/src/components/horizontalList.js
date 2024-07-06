import React from "react";
import '../assets/css/list.css'

const HorizontalList = ({ item, elementStyle }) => {
    return (
        <div className={`horizontalList ${elementStyle}`}>
            {
                item.map((e, i) => {
                    if (e["type"] === "text")
                        return (
                            <div className={item["style"]} key={i}>
                                {e["describe"]}
                            </div>
                        );
                    return (
                        <></>
                    );
                })
            }
        </div>
    );
}

export default HorizontalList;
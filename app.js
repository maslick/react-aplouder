import React from "react";
import ReactDom from "react-dom";
import Aplouder from "@maslick/aplouder";
import "@maslick/aplouder/src/aplouder.css";
import "./styles.css";


class Uploader extends React.Component {
    render() {
        return(
            <div className="mybox">
                <input type="file" id={this.props.id} multiple/>
            </div>
        )
    }

    componentDidMount() {
        const uploader = new Aplouder({
            id: this.props.id,
            callback: function (f) {
                console.log(f.src.name);
            }
        });
        uploader.init();
    }
}


let mount = document.getElementById("container");
ReactDom.render(
    <div>
        <Uploader id="el-1"/>
        <Uploader id="el-2"/>
        <Uploader id="el-3"/>
    </div>, mount);
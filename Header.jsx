import '../App.css' //import file app.css untuk style

//membuat component header dengan teknik export default
function header(){
    return (
        <div className="header">
            <h1>header component</h1>
        </div>
    );
}

export default header
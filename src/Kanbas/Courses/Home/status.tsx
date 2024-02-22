function Status(){
    return(
    <>
        <div>
            <h4>Course Status</h4>
            <button type="button" className="btn btn-light"><i className="fa fa-ban"></i> Unpublish</button>
            <button type="button" className="btn btn-success"><i className="fa fa-check-circle"></i> Published</button>
        </div>
        <div>
            <div className="d-grid gap-1">
            <button type="button" className="btn btn-light btn-block"><i className="fa fa-download"></i> Import Existing Content</button>
            <button type="button" className="btn btn-light btn-block"><i className="fa fa-cloud-download"></i> Import From Commons</button>
            <button type="button" className="btn btn-light btn-block"><i className="fa fa-bullseye"></i> Choose Home Page</button>
            <button type="button" className="btn btn-light btn-block"><i className="fa fa-bar-chart"></i> View Course Stream</button>
            <button type="button" className="btn btn-light btn-block"><i className="fa fa-bullhorn"></i> New Announcement</button>
            <button type="button" className="btn btn-light btn-block"><i className="fa fa-bar-chart"></i> New Analytics</button>
            <button type="button" className="btn btn-light btn-block"><i className="fa fa-bell"></i> View Course Notifications</button>
            </div>
        </div>

        <div>
            <h4>To Do:</h4>
            <hr />
            <span className="text-danger"><i className="fa fa-check-circle-o"></i> GRADE A1- ENV + HTML</span><span className="text-muted text"><sup>X</sup></span>
            <br /><small className="text-muted">100 pts. Due Sep 8th</small>
        </div>

        <div className="row">
            <div className="col-6"><h4>Coming Up:</h4></div>
            <div className="col-6 text-danger"><i className="fa fa-calendar text-muted"></i>View Calendar</div>
            <hr/>
        </div>
        <div className="row">
            <div className="col-1"><br/><i className="fa fa-calendar text-muted"></i></div>
            <div className="col-11 text-muted"> <span className="text-danger">CS 5400 Recitation</span><br/>
                CS5400-788342-33 <br/>
                September 7th, 2112</div>
        </div>
        <div className="row">
            <div className="col-1"><br/><i className="fa fa-calendar text-muted"></i></div>
            <div className="col-11 text-muted"> <span className="text-danger">CS 5400 Pizza Party</span><br/>
                CS5400-788342-33 <br/>
                September 8th, 2112</div>
        </div>
        <div className="row">
            <div className="col-1"><br/><i className="fa fa-calendar text-muted"></i></div>
            <div className="col-11 text-muted"> <span className="text-danger">CS 5400 Paper Due</span><br/>
                CS5400-788342-33 <br/>
                September 23th, 2112</div>
        </div>
    </>
    );
}
export default Status;
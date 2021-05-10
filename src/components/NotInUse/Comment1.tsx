<div>
        <div>
          
          {this.state.dataArray.map (dataArray, index) => {console.log(dataArray);
        return <p >
          {dataArray.id}}}
          
            {data.id} {data.note}
            <Button key={index}
              variant="contained"
              onClick={(e) => {
                this.setState({ commentId: dataArray.id });
                this.handleDelete(this.state.commentId);
              }}
            >
              Delete
            </Button>
            <Link to="/UpdateComment">
              <Button
                variant="contained"
                onClick={(e) => {
                  this.setState({ commentId: dataArray.id });
                  this.props.updateCommentId(data.id);
                }}
              >
                Update
              </Button>
            </Link>
          </p>
        </div>
      </div>
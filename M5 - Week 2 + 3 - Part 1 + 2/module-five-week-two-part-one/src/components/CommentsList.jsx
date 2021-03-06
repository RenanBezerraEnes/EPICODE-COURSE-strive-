import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Loading from "./Loading";

class CommentsList extends Component {
    state = {
        isLoading: false,
    }

    render () {
        console.log(this.props.comment, "HELLO WORLD")
        return (
        <>
        	{
                this.state.isLoading && <Loading />
            } 
             
            <ListGroup.Item>
                <scan className="font-weight-bold">Rate: </scan> {this.props.comment.rate} 
                <br /> 
               <scan className="font-weight-bold">Commentary: </scan> {this.props.comment.comment} <Button size="sm" variant="outline-danger" onClick={this.deleteCommentary}>Remove</Button>
            </ListGroup.Item>
            </>
        )
    }

    deleteCommentary = async () => {
        this.setState({
            isLoading: true,
        })
        const response = await fetch ("https://striveschool-api.herokuapp.com/api/comments/" + this.props.comment._id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NTAwMzQ2MDcsImV4cCI6MTY1MTI0NDIwN30.q8-1MZ_TDzIXmHqj4QIMnHVpGC0L_YPc-Az587i8PVQ",
                'Content-type': 'application/json',
              },
        })
        if(response.ok) {
            alert("The commentary has been removed")
            this.setState({
                isLoading: false,
            })
        } else {
            this.setState({
                isLoading: false,
            })
            alert("Something is wrong")
        }
    }
}

export default CommentsList
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: ( activity: Activity) => void;
}
export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit}: Props) {

    const initialState = selectedActivity ?? {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
    }

    const [activity, setActivity] = useState(initialState);
    
    function handleSubmit() {
        createOrEdit(activity);
        console.log(activity);
    }
    
    function handleInputChange( event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name] : value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input placeHolder="Title" value={activity.title} name="title" onChange={handleInputChange}/>
                <Form.TextArea placeHolder="Description" value={activity.description} name="description" onChange={handleInputChange}/>
                <Form.Input placeHolder="Category" value={activity.category} name="category" onChange={handleInputChange}/>
                <Form.Input placeHolder="Date" value={activity.date} name="date" onChange={handleInputChange}/>
                <Form.Input placeHolder="City" value={activity.city} name="city" onChange={handleInputChange}/>
                <Form.Input placeHolder="Venue" value={activity.venue} name="venue" onChange={handleInputChange}/>
                <Button floated="right" positive type="submit" content="Submit" />
                <Button onClick={() => closeForm()} floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
}
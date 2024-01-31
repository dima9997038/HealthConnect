import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {Button, Form, Modal} from "react-bootstrap";


function ScheduleDoctor(props) {
    let {id} = useParams();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // npm install @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @mui/material @emotion/react @emotion/styled
    // npm i @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/timegrid
    const techEvents = [
        {
            title: "Event",
            start: "2024-01-30T10:00:00Z",
            end: "2024-01-30T12:00:00Z",
            description: "app"

        }
    ]
    const handleDateClick = (e) => {
        setShow(true);
        console.log(e);
    };
    return (
        <div>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next", // will normally be on the left. if RTL, will be on the right
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
                }}
                height={"90vh"}
                events={techEvents}
                dateClick={handleDateClick}

            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" >Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ScheduleDoctor;
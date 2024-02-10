import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";


function ScheduleDoctor(props) {
    let {id} = useParams();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [listAppointment, setListAppointment] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:8081/api/v1/clinic/appointment/byDoctor/'+ id;;

        axios.get(apiUrl,{headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }})
            .then((resp) => {
            const data = resp.data;
            console.log(data)
            setListAppointment(data);
        }).catch(err => {
            console.error(err)
        });
    }, [setListAppointment]);

    const handleDateClick = (e) => {
        setShow(true);
        console.log(listAppointment);
        console.log(id);
        axios.post("http://localhost:8081/api/v1/clinic/appointment", {
            doctorId: id,
            date:e.date
        },{headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }})
            .then(function (response) {
                console.log(response.data)
                setListAppointment(response.data)
            handleClose();
        })
            .catch(function (error) {
            console.log(error);
            alert("Wrong credential")
        });
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
                timeZone={'Europe/Minsk'}
                events={listAppointment}
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
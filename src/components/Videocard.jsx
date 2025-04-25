import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteVideoAPI } from '../services/allAPI';

function Videocard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{ setShow(true);
    const{title,link}=video
    let today= new Date()

    // console.log(new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today));

  let timeStamp= new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)

  const videoHistory= {title,link,timeStamp}
  // make api call
 await addHistoryAPI(videoHistory)
    
  }

  const removeVideo=async(id)=>{
  await deleteVideoAPI(id)
  setDeleteVideoResponse(true)
  }
  const dragStart =(e,id)=>{
  console.log("dragstarted "+id); 
  e.dataTransfer.setData("videoId",id)
  
  }

  return (
    <>
     <Card style={{ width: '16rem' }} draggable onDragStart={e=>dragStart(e,video?.id)} >
      <Card.Img variant="top" src={video.url} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
        <h3>{video.title}</h3>
      {insideCategory?null:<button className='btn btn-link' onClick={e=>removeVideo(video?.id)}><i className="fa-solid fa-trash text-danger"></i></button>}
       
     </Card.Title>
    
      </Card.Body>
    </Card>

    {/* modal */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Videocard

import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import $ from 'jquery';
// import 'magnific-popup';
import instaData from '../../../data/awards.json';
import ReactPaginate from 'react-paginate';
import { Card, Button, Modal } from 'react-bootstrap';

function Awards() {
    
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const publicUrl = process.env.PUBLIC_URL;
  const itemsPerPage = 6;
  const [pageNumber, setPageNumber] = useState(0);

  const pageCount = Math.ceil(instaData.length / itemsPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  
  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = instaData.slice(startIndex, endIndex);

  return (
    <div className="ltn__gallery-area mt-5 mb-5">
      <div className="section-title-wrap section-header text-center">
        <h5 className="custom-primary text-center">Get real-time updates on events</h5>
        <h2 className="title text-center">That Impact Our World.</h2>
      </div>
      <div className="container">
      <div className='awards d-flex'>
       
      {displayedItems.map(item => (
            <Card key={item.id} className='shadow'>
              <img src={process.env.PUBLIC_URL + item.imageUrl} alt="img" />
              <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                  <Card.Title>{item.year}</Card.Title>
                  <Button className='btn-sm' variant="warning" onClick={handleShow}>
                    View
                  </Button>
                </div>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{selectedCardData ? selectedCardData.year : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {selectedCardData ? selectedCardData.description : ''}
                </Modal.Body>
          </Modal>
    </div>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}

export default Awards;

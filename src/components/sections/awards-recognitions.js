import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';
import instaData from '../../../data/insta.json';
import ReactPaginate from 'react-paginate';
import { Card, Button, Modal } from 'react-bootstrap';

function Awards() {

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
  
  // Use useEffect to reinitialize magnificPopup whenever pageNumber changes
  useEffect(() => {
    $('a[data-rel^=magnific]').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });
  }, [pageNumber]); // This will trigger the effect whenever pageNumber changes
  

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
      <div>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            This is some card content. You can add any content you want here.
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Open Modal
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is the modal content. You can add any content you want in the modal.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
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

// Members.js
import React, { useState } from 'react';
import { Box, Modal, Typography } from "@mui/material";

function Members({ programData, teamData }) {
    const [selectedMember, setSelectedMember] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const handleMemberClick = (member) => {
        setSelectedProgram(member);
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const renderSection = (data, title) => (
        <div className="container mb-5">
            <div className="text-center mb-5">
                <h2 className="display-4 text-purple">{title}</h2>
                <div className="mx-auto bg-warning" style={{ height: "3px", width: "100px" }}></div>
            </div>

            <div className="row g-4">
                {data.map((member, index) => (
                    <div key={index} className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm member-card">
                            <img
                                src={`/photos/${member.image}`}
                                className="card-img-top object-fit-cover"
                                alt={member.title}
                                style={{ height: "400px" }}
                                onClick={() => handleMemberClick(member)}
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-start">
                                    <div className="rounded-circle bg-warning p-2 me-2 mt-3">
                                        <i className="bi bi-plus text-dark"></i>
                                    </div>
                                    <div>
                                        <h5 className="card-title fw-bold mb-2">{member.title}</h5>
                                        <p className="text-muted fw-bold mb-2">{member.subTitle}</p>
                                        {member.description && (
                                            <p className="card-text">
                                                {member.description}
                                                <span
                                                    className="text-purple fw-bold ms-1 cursor-pointer"
                                                    onClick={() => handleMemberClick(member)}
                                                >
                                                    Read More
                                                </span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="py-5">
            {renderSection(programData, "Our Board")}
            {renderSection(teamData, "Our Team")}

            {/* Modal */}
            <div
                className="modal fade"
                id="memberModal"
                tabIndex="-1"
                show={!!selectedMember}
                onHide={() => setSelectedMember(null)}
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fw-bold">{selectedMember?.title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setSelectedMember(null)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>{selectedMember?.fullDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                .text-purple {
    color: #633e98;
}

.member-card {
    transition: transform 0.3s ease;
    border-radius: 1rem;
    overflow: hidden;
}

.member-card:hover {
    transform: translateY(-5px);
}

.member-card img {
    transition: transform 0.3s ease;
}

.member-card:hover img {
    transform: scale(1.05);
}

.cursor-pointer {
    cursor: pointer;
}

.object-fit-cover {
    object-fit: cover;
}

.modal-dialog {
    max-height: 90vh;
}

.modal-content {
    max-height: 80vh;
    overflow-y: auto;
}

@media (max-width: 768px) {
    .display-4 {
        font-size: 2rem;
    }
}`}
            </style>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '10px',
                        maxWidth: '80vw',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {selectedProgram && selectedProgram.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {selectedProgram && selectedProgram.fullDescription}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Members;
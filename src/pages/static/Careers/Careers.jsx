import React, { useEffect, useState } from 'react';

function Careers() {
  const [jobListings, setJobListings] = useState([
    { id: 1, title: 'Software Engineer', department: 'Engineering', summary: 'Build innovative software solutions...' },
    { id: 2, title: 'Marketing Manager', department: 'Marketing', summary: 'Lead our marketing initiatives...' },
    { id: 3, title: 'Product Designer', department: 'Design', summary: 'Craft user-centric product experiences...' },
    // ... more job listings
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  const filteredListings = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterDepartment === '' || job.department === filterDepartment)
  );

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);


  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-dark text-white text-center py-5">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>We're shaping the future of Technology</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <h5 className='text-center'>Currently, we do not have any open opportunities. Please check back later for updates. Thank you for your interest!</h5>
        </div>
        {/* <div className="row">
          <div className="col-md-3">
        
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Filter</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <select className="form-control" value={filterDepartment} onChange={(e) => setFilterDepartment(e.target.value)}>
                  <option value="">All Departments</option>
                  <option value="Security">Cyber Security</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Management">Management</option>
                  <option value="Operations">Operations</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Design">Design</option>
                
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-9">
           
            <h2>Open Positions</h2>
            <div className="row">
              {filteredListings.map((job) => (
                <div className="col-md-4" key={job.id}>
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">{job.title}</h5>
                      <p className="card-text">{job.summary}</p>
                      <button className="btn btn-primary">Apply Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* Company Culture Section */}
      {/* Application Process Section */}
      {/* Footer */}
    </div>
  );
}

export default Careers;

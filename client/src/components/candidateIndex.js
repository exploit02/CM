import React from 'react';
import { MDBContainer, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBIcon, MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow  } from 'mdbreact';
import TopNav from './TopNav'

const BasicTable = () => {
  return (
      <div>
          <TopNav/>
          <MDBContainer>
          <MDBBtn outline color="primary" style={{float:'right'}}>
          <MDBIcon icon="plus" />
            Add New</MDBBtn>
          <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    <MDBRow style={{float:'right'}}>
      <MDBCol>
        <MDBPagination className="mb-5">
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              1
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>2</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>3</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">Next</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
          </MDBContainer>
    </div>
  );
}

export default BasicTable;
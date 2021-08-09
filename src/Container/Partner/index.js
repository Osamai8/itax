import React, { Component } from 'react'
import PartnerSideBar from '../../Common/partnerSideBar'
import UserHeader from '../../Common/userHeader'

export default class index extends Component {
    render() {
        return (
            <div>
                <UserHeader/>
                <PartnerSideBar/>
                <div class="w3-panel">
    <div class="w3-row-padding" style={{margin:"0 -8px"}}>
      <div class="w3-third w3-shadow text-center">
        <h5>Progress</h5>
        <img src="assets/img/progress-bar.png" style={{width:'auto'}} alt="Progress"/>
      </div>
      <div class="w3-third w3-shadow text-center">
        <h5>Regions</h5>
        <img src="assets/img/chart-bar.png" style={{width:'auto'}} alt="chart"/>
      </div>
      <div class="w3-third w3-shadow text-center" style={{height: "245px"}}>
        <h5>Service Status</h5>
        <table class="w3-table w3-striped w3-white">
          <tr>
            <td>New Service Request</td>
            <td><i>15</i></td>
          </tr>
          <tr>
            <td>In Progress</td>
            <td><i>10</i></td>
          </tr>
          <tr>
            <td>Pending with customer</td>
            <td><i>5</i></td>
          </tr>
          <tr>
            <td>Completed</td>
            <td><i>350</i></td>
          </tr>
          <tr>
            <td>Hold</td>
            <td><i>2</i></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <hr/>

  <div class="w3-container">
    <h5>Recent Assigned Services</h5>
    <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white table-responsive">
      <tr>
        <th>Sr.No.</th>
        <th width="20%">Service Ticket No.</th> 
        <th width="20%">Service Name</th>
        <th width="20%">Customer Name</th>
        <th width="20%">Comments</th>
        <th width="10%">Status</th>
        <th width="10%">Action</th>
      </tr>
      <tr>
        <td>1</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>Initiated</td>
        <td><a href="review.php" class="button w3-button w3-dark-grey">Review</a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>Initiated</td>
        <td><a href="review.php" class="button w3-button w3-dark-grey">Review</a></td>
      </tr>
      <tr>
        <td>3</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>Initiated</td>
        <td><a href="review.php" class="button w3-button w3-dark-grey">Review</a></td>
      </tr>
      <tr>
        <td>4</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>Initiated</td>
        <td><a href="review.php" class="button w3-button w3-dark-grey">Review</a></td>
      </tr>
      <tr>
        <td>5</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>Initiated</td>
        <td><a href="review.php" class="button w3-button w3-dark-grey">Review</a></td>
      </tr>
      <tr>
        <td>6</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>Initiated</td>
        <td><a href="review.php" class="button w3-button w3-dark-grey">Review</a></td>
      </tr>
      <tr>
        <td>7</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>xxxxx</td>
        <td>Initiated</td>
        <td><a href="review.php" class="button w3-button w3-dark-grey">Review</a></td>
      </tr>
    </table><br/>
  </div>
  <hr/>
            </div>
        )
    }
}

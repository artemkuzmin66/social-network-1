// import React from 'react';
// import s from './ProfileInfo.module.css';



// class ProfileStatus extends React.Component {
//    state = {
//       editMode: false,
//       status: this.props.status
//    }

//    activateEditMode = () => {
//       this.setState({
//          editMode: true
//       })
//    }
//    deactivateEditMode = () => {
//       this.setState({
//          editMode: false
//       });
//       this.props.updateUserStatus(this.state.status);
//    }

//    onUserStatusChange = (e) => {
//       this.setState({
//          status: e.currentTarget.value
//       });
//    }

//    componentDidUpdate(prevProps, prevState) {
//       if (prevProps.status !== this.props.status) {
//          this.setState({
//             status: this.props.status
//          });
//       }
//    }


//    render() {
//       return (
//          <>
//             {!this.state.editMode &&
//                <div>
//                   <span onDoubleClick={this.activateEditMode}>{this.props.status || '-'}</span>
//                </div>
//             }
//             {this.state.editMode &&
//                <div>
//                   <input onChange={this.onUserStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
//                </div>
//             }
//          </>
//       );
//    }
// }
// export default ProfileStatus;
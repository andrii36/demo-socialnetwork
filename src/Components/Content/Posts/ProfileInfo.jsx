import React from 'react';
import Preloader from '../../Preloader/Preloader';

class ProfileInfo extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunkCreator(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        
    }

    render() {
        if(!this.props.profile){
        return <Preloader/>
    }
    return(
        <div>
            <img src={this.props.profile.photos.large}/>
            {this.props.profile.aboutMe}
            {!this.state.editMode ?
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            </div>
            :
            <div>
                <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} value={this.state.status} type="text"/>
            </div> 
            }
        </div>
    )
    } 
}
export default ProfileInfo;
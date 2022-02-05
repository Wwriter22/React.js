import React, { Component } from 'react';
import { DropdownButton, Dropdown} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            type: "",
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        if(item.type == this.state.type){
           return item.name;
        }else if (this.state.type == ""){
            return item.name;
        }


    }

    button = (eventKey, event) => {
        if(eventKey == "All"){
            this.setState({type:""});
        }else{
            this.setState({type: eventKey })
        }
    }
    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>
                {/* TODO: Add more menu items with onSelect handlers*/}
                <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.button}>
                    <Dropdown.Item eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                    <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
                </DropdownButton>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}
export default FilteredList;
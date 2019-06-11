import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { setSearchField, requestBreeds } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchBreeds.searchField,
        breeds: state.requestBreeds.breeds,
        isPending: state.requestBreeds.isPending,
        isPendingImages: state.requestBreeds.isPendingImages,
        error: state.requestBreeds.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestBreeds: () => dispatch(requestBreeds())
    }
}

class App extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
        
        this.props.onRequestBreeds();
    }
    
    
    render() {
        const { searchField, onSearchChange, breeds, isPending} = this.props;
        const filteredBreeds = breeds.filter(breed =>{
            return breed.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
            <h1 className='tc'>Loading...</h1> :
            (
                <div className='tc vh-100'>
                    <h1 className='f1'>The Cattery 🐾</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList breeds={filteredBreeds}/>
                    </Scroll>
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
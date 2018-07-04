import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import TaskManagerPage from './pages/taskManager/';
import TutorialPage from './pages/tutorial/index';
import Button from './shared/button';
import closeIcon from "../icons/close.svg";
// import styles from './styles.css';

const App = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={TaskManagerPage} />
            <Route path="/tutorial" component={TutorialPage} />
        </Switch>

        <Modal
            isOpen={showMap}
            contentLabel="map"
            onRequestClose={this.handleCloseModal}
            // className={styles.modal_map}
            >
            <iframe
                title="map"
                // className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5724497654764!2d30.463088415507904!3d50.449063979475156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce8314fdfde3%3A0xcaff87f52cccc2ec!2z0LLRg9C70LjRhtGPINCf0L7Qu9GW0YLQtdGF0L3RltGH0L3QsCwgNiwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1524242063291"
                allowFullScreen />
            <Button onClick={this.handleCloseModal} type="modalClose" src={closeIcon} />
        </Modal>
    </Fragment>
);

export default App;

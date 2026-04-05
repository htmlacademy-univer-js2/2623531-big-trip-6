import {render} from '../render.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import EditFormView from '../view/edit-form-view.js';
import EventView from '../view/event-view.js';

export default class MainPresenter {
  constructor() {
    this.filtersContainer = document.querySelector('.trip-controls__filters');
    this.eventsContainer = document.querySelector('.trip-events');
  }

  init() {
    render(new FiltersView(), this.filtersContainer);
    render(new SortView(), this.eventsContainer);
    const eventsList = document.createElement('ul');
    eventsList.classList.add('trip-events__list');
    this.eventsContainer.appendChild(eventsList);
    render(new EditFormView(), eventsList);
    for (let i = 0; i < 3; i++) {
      render(new EventView(), eventsList);
    }
  }
}

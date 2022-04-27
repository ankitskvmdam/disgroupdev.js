/**
 * @typedef {Object} EventData
 * @property {Boolean} [enabled=true] If the event is enabled for loading.
 * @property {String} [name] The name of the event.
 * @property {Boolean} [once=false] If the event should only be triggered once.
 */

/**
 * The event class.
 * @class
 */
class Event {

    /**
     * The constructor of the event class.
     * @param {import('discord.js').Client} client
     * @param {EventManager} manager
     * @param {EventData} data
     */
    constructor(client, manager, data = {}) {

        /**
         * The client.
         * @type {import('discord.js').Client}
         * @public
         */
        this.client = client;

        /**
         * The event manager.
         * @type {EventManager}
         * @public
         */
        this.manager = manager;

        /**
         * The raw event data.
         * @type {EventData}
         * @private
         */
        this._data = data;

    }

    /**
     * If the event is enabled for loading or not.
     * @returns {Boolean}
     * @default true
     * @public
     */
    get enabled() {

        return this._data.enabled ?? true;

    }

    /**
     * Loads the event.
     * @returns {Promise<Boolean | DisGroupDevError>}
     * @public
     */
    load() {

        return this.manager.load(this.location);

    }

    /**
     * Gets the location of the event.
     * @returns {String}
     * @public
     */
    get location() {

        return this._data.location ?? ' ';

    }

    /**
     * Sets the location of the event.
     * @param {String} path The new path of the event.
     * @public
     */
    set location(path) {

        this._data.location = path;

    }

    /**
     * The name of the event.
     * @returns {String}
     * @public
     */
    get name() {

        return this._data.name;

    }

    /**
     * If the event is once or not.
     * @returns {Boolean}
     * @default false
     * @public
     */
    get once() {

        return this._data.once ?? false;

    }

    /**
     * Reloads the event.
     * @returns {Promise<Boolean|DisGroupDevError>}
     * @public
     */
    reload() {

        return this.manager.reload(this.name);

    }

    /**
     * Unloads the event.
     * @returns {Promise<Boolean|DisGroupDevError>}
     * @public
     */
    unload() {

        return this.manager.unload(this.name);

    }

}

module.exports = Event;
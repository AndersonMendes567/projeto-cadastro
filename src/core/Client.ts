export default class Client {
  #id: string
  #name: string
  #address: string
  #district: string
  #city: string
  #phone: string
  #isPlus: boolean

  constructor (
    name: string, 
    address: string, 
    district: string, 
    city: string, 
    phone: string, 
    isPlus: boolean,
    id: string = ''
  ) {
    this.#id = id;
    this.#name = name;
    this.#address = address;
    this.#district = district;
    this.#city = city;
    this.#phone = phone;
    this.#isPlus = isPlus;
  }

  static empty() {
    return new Client('', '', '', '', '', false);
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get address() {
    return this.#address;
  }

  get district() {
    return this.#district;
  }

  get city() {
    return this.#city;
  }

  get phone() {
    return this.#phone;
  }

  get isPlus() {
    return this.#isPlus;
  }

  updateProperties(newProperties: any) {
    if (newProperties.hasOwnProperty('name')) {
      this.#name = newProperties.name;
    }
    if (newProperties.hasOwnProperty('address')) {
      this.#address = newProperties.address;
    }
    if (newProperties.hasOwnProperty('district')) {
      this.#district = newProperties.district;
    }
    if (newProperties.hasOwnProperty('city')) {
      this.#city = newProperties.city;
    }
    if (newProperties.hasOwnProperty('phone')) {
      this.#phone = newProperties.phone;
    }
    if (newProperties.hasOwnProperty('isPlus')) {
      this.#isPlus = newProperties.isPlus;
    }
  }
}
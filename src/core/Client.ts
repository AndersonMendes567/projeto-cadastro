export default class Client {
  #id: number
  #name: string
  #address: string
  #district: string
  #city: string
  #phone: number
  #isPlus: boolean

  constructor (
    name: string, 
    address: string, 
    district: string, 
    city: string, 
    phone: number, 
    isPlus: boolean,
    id: number = 0
  ) {
    this.#id = id;
    this.#name = name;
    this.#address = address;
    this.#district = district;
    this.#city = city;
    this.#phone = phone;
    this.#isPlus = isPlus;
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
}
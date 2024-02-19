import { defineStore } from 'pinia'

export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'John',
    lastName: 'Doe',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = 'John'
      this.lastName = 'Doe'
    },
  },
  getters: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`
    },
  },
})

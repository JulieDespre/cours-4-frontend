import { setActivePinia, createPinia } from 'pinia'
import { describe, it, beforeEach, expect } from 'vitest'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    // Crée une nouvelle instance de Pinia et la rend active
    // Ainsi, elle est automatiquement utilisée par tout appel à useStore()
    // sans avoir à la passer à it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increments', () => {
    // Obtient le magasin de compteur
    const counterStore = useCounterStore()

    // Appelle la méthode d'incrémentation
    counterStore.increment()

    // Vérifie si la valeur a été correctement incrémentée
    expect(counterStore.count).toBe(1)
  })

  it('decrements', () => {
    // Obtient le magasin de compteur
    const counterStore = useCounterStore()

    // Définit une valeur de compteur initiale
    counterStore.setCount(2)

    // Appelle la méthode de décrémentation
    counterStore.decrement()

    // Vérifie si la valeur a été correctement décrémentée
    expect(counterStore.count).toBe(1)
  })
})

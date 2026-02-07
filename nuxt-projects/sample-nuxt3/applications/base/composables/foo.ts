import { useState } from 'nuxt/app'

export const useFoo = () => useState('foo', () => 'foo')

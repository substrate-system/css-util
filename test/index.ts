import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('example test', async t => {
    document.body.innerHTML += `
        <css-util class="test">
        </css-util>
    `

    const el = await waitFor('css-util')

    t.ok(el, 'should find an element')
})

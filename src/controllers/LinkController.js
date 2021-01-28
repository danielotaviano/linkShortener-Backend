import { nanoid } from 'nanoid'
import Link from '../models/Link'

class LinkController {
  async store (req, res) {
    let { slug, link } = req.body

    if (!link) return res.status(404).json({ message: 'There is no link' })
    if (!slug) {
      slug = await nanoid(5)
    }
    slug = slug.replace(/([\u0300-\u036f]|[^0-9a-zA-Z---])/g, '')
    link = link.replace(' ', '')

    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
    const regex = new RegExp(expression)

    if (!link.match(regex)) {
      link = `http://${link}`
    }

    try {
      const newLink = await Link.create({
        toLink: link.toLowerCase().trim(),
        slug: slug.trim()
      })

      return res.json({ urlShorted: `http://localhost:3333/${newLink.slug}` })
    } catch (error) {
      return res.json({
        message: 'This is slug has been exist'
      })
    }
  }

  async redirect (req, res) {
    const { slug } = req.params

    const link = await Link.findOne({ slug })
    // console.log(link);

    if (!link) return res.json({ message: 'This link is invalid' })

    return res.redirect(link.toLink)
  }
}

export default new LinkController()

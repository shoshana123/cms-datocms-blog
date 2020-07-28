import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default function Intro() {
  return (
    <section>
  <div dangerouslySetInnerHTML={{__html: `<div id="search-container"></div>
  <script src="https://unpkg.com/datocms-search@0.1.8/dist/datocms-search.widget.js"></script>
  <script>
    var client = new DatoCmsSearch("6274b2e6a0a073c3eede9632a37084", "production");
    client.addWidget("#search-container");
  </script>`}} style={{ maxWidth: '75%'}}></div>
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        Zego Dato-CMS Test Blog
      </h3>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h4>
      </section>
    </section>
  )
}

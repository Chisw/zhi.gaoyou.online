import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ImgGYRB from '../img/link-gyrb.png'
import Img720 from '../img/link-720.png'
import ImgJI from '../img/link-ji.png'
import ImgWYT from '../img/link-wyt.png'
import ImgJRGY from '../img/link-jrgy.png'
import Loadable from 'react-loadable'
import Center from '../components/Center'
import FA from '../components/FA'

const LoadableStatistics = Loadable({
  loader: () => import('../components/Statistics'),
  loading: (props) => {
    if(props.error) {
      return <div>Something wrong</div>
    } else {
      return <div>Loading..</div>
    }
  },
})

const links = [
  { logo: ImgJI, url: 'http://jisuowei.com' },
  { logo: ImgGYRB, url: 'http://epaper.gytoday.cn' },
  { logo: Img720, url: '//720yun.com/t/567jz7ukvf2?scene_id=9813419' },
  { logo: ImgWYT, url: 'http://www.wenyoutai.com' },
  { logo: ImgJRGY, url: 'http://www.gytoday.cn/' },
]

export const IndexPageTemplate = () => {

  return (
    <div>
      <div
        className="bg-center bg-fixed"
        style={{
          height: '100vh',
          minHeight: 400,
          backgroundImage: `url(./img/banner.png)`,
          backgroundSize: '1480px',
          boxShadow: '0 0 20px rgba(0,0,0, .2) inset',
        }}
      >
        <Center className="relative w-full h-full flex justify-center items-center font-kxzd">
          <div className="-mt-20 text-center" style={{ textShadow: '0 0 8px rgba(255, 255, 255, .9)'}}>
            <h1 className="text-6xl">華夏一郵邑 神州無同類</h1>
            <h3 className="text-2xl mt-4">秦王嬴政二十四年 滅楚 築高臺 置郵亭</h3>
          </div>
          <div className="absolute bottom-0 pb-8 text-3xl text-gray-800">
            <FA icon="angle-double-up" className="animation-rotate-y" />
          </div>
        </Center>
      </div>
      <div>
        <Center>
          <div className="flex justify-center">
            {
              [
                { name: '高郵州志', period: '乾隆四十八年', year: 1783 },
                { name: '續增高郵州志', period: '道光二十三年', year: 1843 },
                { name: '再續高郵州志', period: '光緒九年', year: 1883 },
                { name: '三續高郵州志', period: '民國十一年', year: 1922 },
                { name: '更多 ··', period: '敬请期待' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`py-4 flex justify-center items-center flex-grow font-kxzd border-r cursor-pointer hover:bg-gray-100 ${index === 0 ? 'border-l' : ''}`}
                  style={{ height: 320, maxWidth: 200 }}
                >
                  <p className="write-vertical text-3xl">{item.name}</p>
                  <p className="write-vertical text-gray-400 text-sm">
                    {item.period} &nbsp;
                    <span className="ml-2 text-white bg-red-600">{item.year}</span>
                  </p>
                </div>
              ))
            }
          </div>
        </Center>
      </div>
      <div className="py-16">
        <Center mobilePadding className="flex">
          <div className="font-hairline pr-4">
            古代高邮史称江左名区，广陵首邑，由宋置军至清设州，有九百多年中等行政区划的经历。高邮历史上曾唤作过秦邮、三阿、幽州、神农、广邺、高沙、承州、珠湖、盂城、散州等地名。代表江淮地区东部史前龙虬文化的龙虬庄遗址，表明七千多年前境内便有人类璀璨文明。
          </div>
          <div className="pl-4">
            <div className="font-kai">
              <p>春秋，吴邗沟地，越国并吴国后属越国。</p>
              <p>战国，楚并越属楚。</p>
              <p>公元前220年秦始皇筑驰道通海滨，经过高邮。</p>
              <p>秦王嬴政二十四年，灭楚，筑高台，置邮亭，故名高邮，亦称秦邮。</p>
              <p>汉高祖六年，分置高邮县，是为今我市境内出现县级政区建置之始，此高邮县即今高邮市的最前身。</p>
              <p>西汉，先后属荆国东阳郡、吴国、江都国。武元狩五年，置高邮县，属广陵国。</p>
              <p>东汉，高邮县属广陵郡。东汉末，高邮县废。</p>
              <p>三国，地属广陵郡，先属魏，后属吴。</p>
              <p>西晋，复高邮县，属临淮郡。</p>
              <p>东晋，高邮县属广陵郡。</p>
              <p>东晋和南北朝，高邮西北（今金湖、天长部分）侨置幽、冀、青、并州及后魏平阿县，由此形成北阿镇（三阿），与平阿湖、下阿溪三者合称三阿等地名。</p>
              <p>南北朝期间南宋置高邮县，属广陵郡，又划设临泽县，属海陵郡；南梁起，先后置广邺郡、神农郡，辖高邮县划设的高邮、竹塘、三归三县；临泽县仍属海陵郡。</p>
              <p>隋，竹塘、三归、临泽三县仍并入高邮县，属吴州（不久改称扬州），后属江都郡。</p>
              <p>唐，高邮县先后属兖州、邗州、扬州、广陵郡、扬州（均为现扬州）。玄宗元年，划江都、六合、高邮三县部分地区置千秋县，天宝七年改称天长县。</p>
              <p>五代十国，高邮县先后属吴都江都府、后唐东都（扬州）、后周扬州大都督府。</p>
              <p>宋、元时期，因置高邮军、承州、高邮路、高邮府，领辖过高邮、兴化、宝应三县，为淮扬间繁华之地。</p>
              <p>宋，开宝四年置高邮军，直属京师。诏文为：惟彼高邮，古称大邑，舟车交会，水陆要冲，宜建军名，以雄地望。军同下州高沙郡，辖高邮县；熙宁五年军罢，县属扬州；元祐元年，复置高邮军；建炎四年，升高邮军为承州，领承州、天长军，辖高邮县与兴化县；绍兴五年，废州，县属扬州；绍兴三十年，复为军，仍领高邮、兴化二县。</p>
              <p>元，至元十四年，置高邮路，辖高邮、兴化二县；至元二十年，改为高邮府，辖高邮、兴化、宝应三县，属扬州路。至正十四年，张士诚在高邮建都，国号大周。</p>
              <p>元末，高邮改为散府。</p>
              <p>明，洪武元年，置高邮州，领兴化、宝应二县，属扬州府；洪武四年，升守御所为高邮卫。</p>
              <p>清，顺治元年，置高邮州，属扬州府，不久遂为散州。</p>
              <p>民国元年，废州为县。在中国共产党领导下的抗日战争和解放战争期间，高邮县澄子河以南地区曾先后属江高行政区、江都县，高邮湖西菱塘地区曾先后属天高县、甘泉县、东南县、仪扬县、仪征县。</p>
              <p>中华人民共和国成立后仍设高邮县。</p>
              <p>1991年2月，经国务院批准撤县设市（县级）</p>
              <p>1991年4月1日，正式建高邮市，实行计划单列。</p>
            </div>
          </div>
        </Center>
      </div>
      <div className="py-16">
        <Center mobilePadding className="rounded-lg shadow">
          <LoadableStatistics />
        </Center>
      </div>
      <div className="py-12 pb-16">
        <Center>
          <div className="gyz-logo-list -mx-2 flex flex-wrap justify-center">
            {
              links.map(link => (
                <a
                  key={link.url}
                  className="list-item bg-white mx-2 p-8 hover:bg-black-100"
                  style={{
                    minWidth: 100,
                    maxWidth: '18%',
                  }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link.logo} alt="Placeholder" />
                </a>
              ))
            }
          </div>
        </Center>
      </div>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate image={frontmatter.image} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        path
      }
    }
  }
`

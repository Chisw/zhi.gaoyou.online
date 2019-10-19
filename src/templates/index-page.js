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

const LoadableStatistics = Loadable({
  loader: () => import('../components/Statistics'),
  loading: (props) => {
    if(props.error) {
      return <div>Something wrong</div>
    } else {
      return <div>Loading..</div>
    }
  },
});

export const IndexPageTemplate = () => {

  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(./img/banner.png)`,
          backgroundPosition: `center top`,
          backgroundAttachment: `fixed`,
          backgroundSize: '1480px'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen font-kxzd"
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              textAlign: 'center'
            }}
          >
            華夏一郵邑 神州無同類
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen font-kxzd"
            style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              textAlign: 'center'
            }}
          >
            秦王嬴政二十四年 滅楚 築高臺 置郵亭
          </h3>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12 gaoyou-introduction">
                      <div className="introduction-item gaoyou-profile">
                        &emsp;&emsp;古代高邮史称江左名区，广陵首邑，由宋置军至清设州，有九百多年中等行政区划的经历。高邮历史上曾唤作过秦邮、三阿、幽州、神农、广邺、高沙、承州、珠湖、盂城、散州等地名。代表江淮地区东部史前龙虬文化的龙虬庄遗址，表明七千多年前境内便有人类璀璨文明。
                      </div>
                      <div className="introduction-item gaoyou-timeaxis">
                        <div className="inner">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section">
            <LoadableStatistics />
          </div>
        </div>
        <div className="index-links">
          <div className="link-card">
            <a href="http://jisuowei.com" target="_blank" rel="noopener noreferrer">
              <img src={ImgJI} alt="Placeholder" />
            </a>
          </div>
          <div className="link-card">
            <a href="http://epaper.gytoday.cn" target="_blank" rel="noopener noreferrer">
              <img src={ImgGYRB} alt="Placeholder" />
            </a>
          </div>
          <div className="link-card">
            <a href="//720yun.com/t/567jz7ukvf2?scene_id=9813419" target="_blank" rel="noopener noreferrer">
              <img src={Img720} alt="Placeholder" />
            </a>
          </div>
          <div className="link-card">
            <a href="http://www.wenyoutai.com" target="_blank" rel="noopener noreferrer">
              <img src={ImgWYT} alt="Placeholder" />
            </a>
          </div>
          <div className="link-card">
            <a href="http://www.gytoday.cn/" target="_blank" rel="noopener noreferrer">
              <img src={ImgJRGY} alt="Placeholder" />
            </a>
          </div>
        </div>
      </section>
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
      <IndexPageTemplate
        image={frontmatter.image}
      />
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

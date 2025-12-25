import type { IVolume } from '@/types'

const GYZZ_VOLUMES: IVolume[] = [
  { key: 'vol-00', name: '高郵州志', icon: 'list' },
  { key: 'vol-01', name: '輿地志卷之一', icon: 'layer' },
  { key: 'vol-02', name: '河渠志卷之二', icon: 'river' },
  { key: 'vol-03', name: '民賦志卷之三', icon: 'money' },
  { key: 'vol-04', name: '食貨志卷之四', icon: 'bowl' },
  { key: 'vol-05', name: '學校志卷之五', icon: 'school' },
  { key: 'vol-06', name: '典禮志卷之六', icon: 'pray' },
  { key: 'vol-07', name: '軍政志卷之七', icon: 'sword' },
  { key: 'vol-08', name: '秩官志卷之八', icon: 'chair' },
  { key: 'vol-09', name: '選舉志卷之九', icon: 'column' },
  { key: 'vol-10', name: '人物志卷之十', icon: 'people' },
  { key: 'vol-11', name: '藝文志卷之十一', icon: 'book' },
  { key: 'vol-12', name: '雜類志卷之十二', icon: 'taiji' }
]

export const VOLUMES_MAP: Record<string, IVolume[]> = {
  gyzz: GYZZ_VOLUMES,
}

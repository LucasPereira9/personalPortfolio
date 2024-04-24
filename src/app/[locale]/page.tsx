import Switcher from '@/components/switcher';
import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  return (
    <div>
      <h1>{t('titulo')}</h1>
      <Switcher />
    </div>
  )
}
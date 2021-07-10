import Image from 'next/image'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'

import HeaderItem from './HeaderItem'

function Header() {
  return (
    <header className="flex flex-col items-center justify-between h-auto m-5 sm:flex-row">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon}></HeaderItem>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon}></HeaderItem>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}></HeaderItem>
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}></HeaderItem>
        <HeaderItem title="SEARCH" Icon={SearchIcon}></HeaderItem>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}></HeaderItem>
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      ></Image>
    </header>
  )
}

export default Header

'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { styled } from 'styled-components'
import { SlLogin } from 'react-icons/sl'
import { FaUserPlus, FaHome, FaSearch } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'

const StyledHeader = styled.header``
const StyledForm = styled.form``
const StyledMenu = styled.nav``

const Header = () => {
  return (
    <StyledHeader>
      <div className="site-top">
        <div className="layout-width">
          <div className="left">
            <Link href="/">
              <FaHome />
            </Link>
          </div>
          <div className="right">
            <Link href="/member/join">
              <FaUserPlus /> 회원가입
            </Link>
            <Link href="/member/login">
              <SlLogin /> 로그인
            </Link>
          </div>
        </div>
      </div>
      {/* site-top */}
      <div className="logo-search">
        <div className="layout-width">
          <div className="left">
            <Link href="/">
              <Image src={logo} alt="로고" />
            </Link>
          </div>

          <div className="right">
            <StyledForm method='"GET' action="/board/search" autoComplete="off">
              <input
                type="text"
                name="skey"
                placeholder="검색어를 입력하세요"
              />
              <button type='submit'>검색하기</button>
            </StyledForm>
          </div>
        </div>
      </div>
      {/* logo-search */}
      <StyledMenu>
        <div className="layout-width">
          <Link href="#">메뉴1</Link>
          <Link href="#">메뉴2</Link>
          <Link href="#">메뉴3</Link>
        </div>
      </StyledMenu>
    </StyledHeader>
  )
}

export default React.memo(Header)

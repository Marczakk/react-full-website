import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
}
     from './SidebarElements'

function Sidebar() {
    return (
        <SidebarContainer>
            <Icon>
              <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        Home
                    </SidebarLink>
                    <SidebarLink to="discover">
                        About
                    </SidebarLink>
                    <SidebarLink to="services">
                        Projects
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Skills
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin"> Sign In </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar

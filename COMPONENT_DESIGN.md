# Component Design

- Define all components composition required based on UI.

- Help in proper lazy loading
- Helps in writing test cases
- Web site behaviour becomes predictible

- SOLID Principle
    - S : Single responsibility
    - O : Open/Close principle, open for extension but close for modification
    - L :
    - I :
    - D :

- Eg componet design of e-commerce website
- <AppComponent>
    - <Header>
        - <LeftSection>
            - <Logo>
        - <RightCOmponent>
            - <MenuContainer>
                - <MenuItems>
    - <Body>
        - <ActionsContainer>
            - <Search>
            - <Filter>
            - <Sort>
        - <ScrollableRowContainer>
            - <Card>
                - <Image>
                - <Details>
    - <Footer>

- Youtube left collapsable menu

- <Header>
    - <Hamburger> <=>
    - <Logo>
    - <etc etc>
- <Body>
    - <LeftNavContainer> <=>
        - <ExpandedContainer>
            - <Section> []
                - <SectionHeading>
                - <SectionItem>
        - <CollapsedContainer>
            - <MenuItem>
    - <Container>

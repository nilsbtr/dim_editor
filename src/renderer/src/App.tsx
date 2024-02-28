import { Content, RootLayout, SearchContainer, Sidebar } from '@/components'

function App() {
  return (
    <RootLayout>
      <Sidebar className="p-3 bg-sidebar text-sidebar-foreground border-r border-border">
        <SearchContainer />
      </Sidebar>
      <Content className="p-3 bg-content text-content-foreground">
        <p className="">test</p>
      </Content>
    </RootLayout>
  )
}

export default App

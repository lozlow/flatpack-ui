import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Button from '../components/Button'
import Box from '../components/Box'
import Heading from '../components/Heading'
import Loader from '../components/Loader'
import Content from '../components/Content'
import ContentRow from '../components/ContentRow'
import Layout, { Column, Row } from '../components/Layout'

import '../styles/main.css'
import './demo.css'

storiesOf('Box', module)
  .add('is loading', () => (
    <Box loading>
      Hello!
    </Box>
  ))
  .add('with content', () => (
    <Box>
      Hello!
    </Box>
  ))
  .add('with noPad', () => (
    <Box noPad>
      Hello!
    </Box>
  ))
  .add('with siblings', () => (
    <div style={{ display: 'flex' }}>
      <Box>
        Hello!
      </Box>
      <Box loading>
        Again!
      </Box>
      <Box noPad>
        <Heading>No Padding</Heading>
        And again!
      </Box>
    </div>
  ))

storiesOf('Button', module)
  .add('is loading', () => (
    <Button loading>
      With click
    </Button>
  ))
  .add('is disabled', () => (
    <Button disabled>
      A button
    </Button>
  ))
  .add('with content', () => (
    <Button>
      A button
    </Button>
  ))
  .add('with click handler', () => (
    <Button onClick={action('clicked')}>
      With click
    </Button>
  ))
  .add('with intent', () => (
    <div>
      <Button>
        Default
      </Button>
      <Button intent='primary'>
        Primary
      </Button>
      <Button intent='good'>
        Good
      </Button>
      <Button intent='warn'>
        Warn
      </Button>
      <Button intent='bad'>
        Bad
      </Button>
    </div>
  ))

storiesOf('Heading', module)
  .add('with content', () => (
    <Heading>
      A heading
    </Heading>
  ))

storiesOf('Loader', module)
  .add('default', () => (
    <Loader />
  ))
  .add('with colour', () => (
    <Loader color='orange' />
  ))

storiesOf('Content', module)
  .add('with content', () => (
    <Content>
      Some content!
      <Button>A button</Button>
    </Content>
  ))
  .add('nested content', () => (
    <Content>
      Some content!
      <Content>
        Content
        <Button intent='good'>A button</Button>
      </Content>
    </Content>
  ))

storiesOf('ContentRow', module)
  .add('with content', () => (
    <ContentRow>
      <Button>Cancel</Button>
      <Button intent='primary'>Do something</Button>
    </ContentRow>
  ))
  .add('align right', () => (
    <ContentRow alignRight>
      <Button>Cancel</Button>
      <Button intent='primary'>Do something</Button>
    </ContentRow>
  ))
  .add('space between', () => (
    <div style={{ background: '#eee', padding: '25px' }}>
      <ContentRow spaceItems>
        <Box>
          Hello!
        </Box>
        <Box loading>
          Again!
        </Box>
        <Box noPad>
          <Heading>No Padding</Heading>
          And again!
        </Box>
      </ContentRow>
    </div>
  ))
  .add('alignRight and space between (invariant)', () => (
    <ContentRow alignRight spaceItems />
  ))

storiesOf('Complete Example', module)
  .add('default', () => (
    <Content>
      <Heading>Page title!</Heading>
      <ContentRow spaceItems>
        <Box>
          Hello!
        </Box>
        <Box loading>
          Again!
        </Box>
        <Box noPad>
          <Heading>No Padding</Heading>
          And again!
        </Box>
      </ContentRow>
      <Content>
        Hej!
      </Content>
    </Content>
  ))

storiesOf('Layout', module)
  .add('sidebar layout', () => (
    <Layout className='LayoutDemo'>
      <Column className='LayoutDemo-column--red' render={() => <span>Sidebar</span>} width='250px' />
      <Column>
        <Row className='LayoutDemo-row--green' render={() => <span>Header</span>} height='120px' />
        <Row className='LayoutDemo-row--blue' render={() => <span>Main content</span>} />
      </Column>
    </Layout>
  ))
  .add('nested layouts', () => (
    <Layout className='LayoutDemo'>
      <Column className='LayoutDemo-row--red' render={() => <span>Sidebar</span>} width='250px' />
      <Column>
        <Row className='LayoutDemo-row--green' render={() => (<span>Row</span>)} />
        <Row className='LayoutDemo-row--blue' render={
          () => (
            <Layout>
              <Column className='LayoutDemo-column--blue' render={() => <span>Sidebar</span>} width='250px' />
              <Column>
                <Row className='LayoutDemo-row--red' render={() => <span>Header</span>} height='120px' />
                <Row className='LayoutDemo-row--green' render={() => <span>Main content</span>} />
              </Column>
            </Layout>
          )
        } />
      </Column>
    </Layout>
  ))
  .add('row layouts', () => (
    <Layout className='LayoutDemo'>
      <Row className='LayoutDemo-row--green' render={() => <span>Header</span>} height='120px' />
      <Row className='LayoutDemo-row--blue' render={() => <span>Main content</span>} />
    </Layout>
  ))

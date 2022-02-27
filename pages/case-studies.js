import Layout from '../components/Layout'

import Description from '../components/Description'
import Anchor from '../components/Anchor'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import SquaredTile from '../components/SquaredTile'
import Contribution from '../components/Contribution'

import privacy from '../assets/img/cds-data-privacy.svg'
import integrity from '../assets/img/cds-data-integrity.svg'
import signature from '../assets/img/cds-data-signature.svg'

import distribution from '../assets/img/cds-data-distribution.svg'
import iot from '../assets/img/cds-iot-networks.svg'
import offline from '../assets/img/cds-offline-first.svg'

import streaming from '../assets/img/cds-data-streaming.svg'
import collaboration from '../assets/img/cds-data-collaboration.svg'
import replication from '../assets/img/cds-data-replication.svg'

import NextPage from '../components/NextPage'

export default function CaseStudies() {
  return (
    <div className="page-container">
      <Title content="Case studies"></Title>

      <Description content="We’re developing case studies to explore the adoption and implementation of Condensation in products and IT infrastructures."></Description>
      <Anchor description="Success factors while adopting CDS" id="#test-1"></Anchor>
      <Anchor description="Use-cases we realized" id="#test-2"></Anchor>
      <Anchor description="Future case studies" id="#test-3"></Anchor>

      <SubTitle content="Success factors while adopting CDS"></SubTitle>
      <p>
        Many new capabilities spawn when shifting from a centralized solution to CDS. It impacts the
        person using the solution as he benefit from owning its data - which mean only him decide
        who can see its data and can verify it and where it is stored. It also impacts service
        providers as they can build their IT infrastructure with flexibility to scale their offering
        and answer to the intensive data usage.
      </p>

      <SubSubTitle content="Protecting privacy and digital truth"></SubSubTitle>
      <p>
        CDS is made by design with data control and certification which are pillars for building
        digital products capable of giving guarantees of trust and privacy.
      </p>

      <div className="flex pl-24 pt-8 gap-8 flex-wrap">
        <SquaredTile
          title="End-to-end privacy"
          subtitle="to protect secrets and personal data"
          icon={privacy}
        ></SquaredTile>
        <SquaredTile
          title="Digital truth"
          subtitle="to verify the data has not been altered"
          icon={integrity}
        ></SquaredTile>
        <SquaredTile
          title="Digital signature"
          subtitle="to trust the origin of received data"
          icon={signature}
        ></SquaredTile>
      </div>

      <SubSubTitle content="Getting decentralized"></SubSubTitle>
      <p>
        The infrastructure of the applications we design are evolving to extend the traditional use
        of a centralized cloud service. CDS provide the tools to distribute data among multiple
        entities as for example to build international platforms or IoT networks.
      </p>
      <div className="flex pl-24 pt-8 gap-8 flex-wrap">
        <SquaredTile
          title="Relocating storage"
          subtitle="for scaling while ensuring sovereignty"
          icon={distribution}
        ></SquaredTile>
        <SquaredTile
          title="Connecting objects"
          subtitle="with security and low data consumption"
          icon={iot}
        ></SquaredTile>
        <SquaredTile
          title="Working offline"
          subtitle="for mobility and independence"
          icon={offline}
        ></SquaredTile>
      </div>

      <SubSubTitle content="Building applications with intensive data consumption"></SubSubTitle>
      <p>
        CDS is a solution designed for efficient and conflict-free synchronization in a distributed
        configuration for any type of user.
      </p>
      <div className="flex pl-24 pt-8 gap-8 flex-wrap">
        <SquaredTile
          title="Streaming"
          subtitle="with efficient upload of data in live"
          icon={streaming}
        ></SquaredTile>
        <SquaredTile
          title="Collaborating"
          subtitle="with simultaneous edition of data"
          icon={collaboration}
        ></SquaredTile>
        <SquaredTile
          title="Replicating"
          subtitle="without sharing redundancies"
          icon={replication}
        ></SquaredTile>
      </div>

      <SubTitle content="Use-cases we realized"></SubTitle>
      <p>
        Together with our first partners we realized the following applications using Condensation.
        We are preparing articles to present how they have been realized but if you want to learn
        more please just reach out to us.
      </p>

      <SubTitle content="Future case studies"></SubTitle>
      <p>
        We have several examples of case studies and new projects in progress - if you want to learn
        more about it or have an idea for a case study, reach out to us at info@condensation.io.
      </p>

      <div className="ml-20 mt-40 mb-12">
        <NextPage descripton={'Develop with CDS'} link={'/get-started'}></NextPage>
      </div>

      <Contribution></Contribution>
    </div>
  )
}

CaseStudies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
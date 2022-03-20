import Layout from '../components/Layout'

import Description from '../components/Description'
import Anchor from '../components/Anchor'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import SquaredTile from '../components/SquaredTile'
import Contribution from '../components/Contribution'
import UseCases from '../components/UseCases'

import privacy from '../assets/img/cds-data-privacy.svg'
import integrity from '../assets/img/cds-data-integrity.svg'
import signature from '../assets/img/cds-data-signature.svg'

import distribution from '../assets/img/cds-data-distribution.svg'
import iot from '../assets/img/cds-iot-networks.svg'
import offline from '../assets/img/cds-offline-first.svg'

import streaming from '../assets/img/cds-data-streaming.svg'
import collaboration from '../assets/img/cds-data-collaboration.svg'
import replication from '../assets/img/cds-data-replication.svg'

import imageTopMessenger from '../assets/img/use-case-messenger-phone.png'
import imageBottomMessenger from '../assets/img/use-case-messenger-person.png'
import imageSideMessenger from '../assets/img/use-case-messenger-texting.png'

import votingPin from '../assets/img/use-case-voting-pin.png'
import votingResults from '../assets/img/use-case-voting-results.png'
import votingBlockchain from '../assets/img/use-case-voting-blockchain.png'

import imageTopVehicle from '../assets/img/use-case-vehicle-map.png'
import imageBottomVehicle from '../assets/img/use-case-vehicle-microchip.png'
import imageSideVehicle from '../assets/img/use-case-vehicle-bike.png'

import NextPage from '../components/NextPage'

export default function CaseStudies() {
  return (
    <div className="page-container max-w-screen-2xl">
      <Title content="Use-cases" title="Making your app ready for the era of data." />
      <SubTitle
        content="Success factors"
        title="Condensation builds collaborative products which protect people's privacy and enhance the economy of trust."
      />
      <div className="text-container pl-5 sm:pl-20 text-2xl mt-16 mb-4">
        <h3 className="text-blue-600 inline-block font-bold">Making data ownership a reality.</h3>
        <div className="text-xl">
          Build your solution with data control and certification which are pillars for getting
          connected with trust and without intermediaries.
        </div>
      </div>
      <div className="grid grid-cols-1 place-items-center sm:flex sm:flex-wrap sm:place-items-center sm:px-20 pt-5 gap-8">
        <SquaredTile
          title="End-to-end privacy"
          subtitle="to protect secrets and personal data"
          icon={privacy}
          color={'blue'}
        ></SquaredTile>
        <SquaredTile
          title="Digital truth"
          subtitle="to verify the data has not been altered"
          icon={integrity}
          color={'blue'}
        ></SquaredTile>
        <SquaredTile
          title="Digital signature"
          subtitle="to trust the origin of received data"
          icon={signature}
          color={'blue'}
        ></SquaredTile>
      </div>

      <div className="text-container pl-5 sm:pl-20 text-2xl mt-24 mb-8">
        <h3 className="text-purple-600 inline-block font-bold">
          Breaking centralization constraints.
        </h3>
        <div className="text-xl">
          Distribute data where you want it to be and connect multiple actors and devices in the
          network of your solution.
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center sm:flex sm:flex-wrap sm:px-20 pt-5 gap-8">
        <SquaredTile
          title="Connecting objects"
          subtitle="with security and low data consumption"
          icon={iot}
          color={'purple'}
        ></SquaredTile>
        <SquaredTile
          title="Working offline"
          subtitle="for mobility and independence"
          icon={offline}
          color={'purple'}
        ></SquaredTile>
        <SquaredTile
          title="Relocating storage"
          subtitle="for scaling while ensuring sovereignty"
          icon={distribution}
          color={'purple'}
        ></SquaredTile>
      </div>

      <div className="text-container pl-5 sm:pl-20 text-2xl mt-24 mb-4">
        <h3 className="text-rose-600 inline-block font-bold">
          Getting ready for data intensiveness.
        </h3>
        <div className="text-xl">
          Enable your users to collaborate on data and manage data transfers without impacting your
          solution performances.
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center sm:flex sm:flex-wrap sm:place-items-center sm:px-20 pt-5 gap-8">
        <SquaredTile
          title="Streaming"
          subtitle="with efficient upload of data in live"
          icon={streaming}
          color={'rose'}
        ></SquaredTile>
        <SquaredTile
          title="Collaborating"
          subtitle="with simultaneous edition of data"
          icon={collaboration}
          color={'rose'}
        ></SquaredTile>
        <SquaredTile
          title="Replicating"
          subtitle="without sharing redundancies"
          icon={replication}
          color={'rose'}
        ></SquaredTile>
      </div>

      <div className="text-container pl-5 sm:pl-20 text-3xl mt-24 mb-32 font-bold text-black">
        All by design, with flexibility and scalability, to let your project evolve without
        limitations.
      </div>

      <SubTitle
        content="Products we realized"
        title=" Together with our contributing partners, we created web, mobile and IoT applications awarded for their innovative features."
      />

      <div className="mt-20"></div>

      <UseCases
        content="A smart metering system to track electric vehicles while ensuring reduced data consumption."
        imageTop={imageTopVehicle}
        altTop="map with a route"
        imageBottom={imageBottomVehicle}
        altBottom="electronic component"
        imageSide={imageSideVehicle}
        altSide="moving bike"
        awards={[
          'Awarded by TheArk foundation,',
          'Granted by Act for Change sustainability program,',
          'Finalist of Start contest and BCVs creators contest.'
        ]}
      ></UseCases>

      <UseCases
        content="An e-Voting system with data transparency to make sure our rights are respected in a digitized society."
        imageTop={votingResults}
        altTop="US map with voting results."
        imageBottom={votingBlockchain}
        altBottom="Blockchain illustration."
        imageSide={votingPin}
        altSide="I voted pin."
        awards={['Awarded by EPFL ignition grant.']}
      ></UseCases>

      <UseCases
        content="An end-to-end encrypted messenger to protect the privacy of our digital conversations."
        imageTop={imageTopMessenger}
        altTop="Phone with messenging apps."
        imageBottom={imageBottomMessenger}
        altBottom="Shadow of a person."
        imageSide={imageSideMessenger}
        altSide="Person texting."
        awards={[
          'Awarded by EPFL XGrant program,',
          'Awarded by the french embassy in Switerland,',
          'Received by Swissnex in San Francisco.'
        ]}
      ></UseCases>

      <div className="text-container pl-5 sm:pl-20 text-3xl mt-5 sm:mt-24 mb-10 font-bold text-black">
        Do you want to learn more about our past and ongoing projects?{' '}
        <span className="underline text-blue-500 underline-offset-8">Contact us</span>.
      </div>

      <div className="ml-5 mt-5 sm:ml-20 sm:mt-20 mb-12">
        <NextPage descripton={'Develop with CDS'} link={'/get-started'}></NextPage>
      </div>

      <Contribution></Contribution>
    </div>
  )
}

CaseStudies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

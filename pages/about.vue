<template>
  <section class="bg-base-foreground h-full">
    <div class="container mx-auto">
      <img
        :src="logoImg"
        class="h-64 mx-auto my-4"
      />

      <div class="prose prose-sm mx-auto md:min-w-[650px] px-4 leading-4">
        <p>
          ScaleNet is a tool for finding information about scale insects: their
          taxonomic diversity, nomenclatural history, biogeography, ecological
          associations, and economic importance. ScaleNet models the scale
          insect literature. Currently it contains data from
          <strong>26024</strong> references pertaining to
          <strong>8582</strong> valid species names.
        </p>

        <h3 class="text-">Scale Insects</h3>
        <p>
          Scale insects are small, cryptic plant parasites. Most of them make a
          living by eating phloem sap. Scale insects are the most invasive group
          of insects, and many species are agricultural pests. In addition to
          damaging plants by eating sap, scale insects damage plants indirectly
          by secreting honeydew, which encourages the growth of sooty molds and
          interferes with photosynthesis. Scale insects also vector plant
          diseases.
        </p>

        <p>
          Scale insects aren't all bad. Honeydew is an important food source for
          many birds and mammals and especially other insects. Scale insects are
          interesting to evolutionary biologists for a number of reasons: (1)
          they have intimate relationships with host plants, endosymbionts and
          social Hymenoptera; (2) they have diverse genetic systems including
          theylytoky (unfertilized eggs grow up female), ahhrenotoky
          (unfertilized eggs grow up male), paternal genome elimination (sons
          don't express their dad's genes), and hermaphroditism; (3) they have
          simple pathogen-like life cycles, in which dispersal is achieved by
          first instar nymphs blowing in the wind; and (4) they have variable
          host specificities; most species are thought to be host specialists --
          as is the case for plant-feeding insects in general -- but there are
          an exceptional number of host generalists, including some of the most
          polyphagous species known.
        </p>

        <h3>Open Source Tools and Management</h3>

        <p>
          This is a re-implementation of the original version of ScaleNet, a
          FoxPro application developed by Yair Ben-Dov, Douglass R Miller and
          Gary A P Gibson with major support from the United States-Isreal
          Binational Agricultural Research and Development Fund. The original
          application was heavily used by insect scientists and insect
          identifiers for close to two decades. This version was built by
          <a
            href="http://hardylab.skullisland.info/prospective-graduate-students/"
            title="Mayrolin"
            >Mayrolin</a
          >
          <a href="/citing/"> García</a> and
          <a
            href="http://www.ag.auburn.edu/enpl/directory/faculty/hardy/"
            title="Nate Hardy Profile"
            >Nate Hardy</a
          >
          using open source software (<a
            href="http://www.ubuntu.com/"
            title="Ubuntu Home"
            >Linux</a
          >,
          <a
            href="https://www.sqlite.org/"
            title="SQLite Home"
            >SQLite</a
          >,
          <a
            href="https://www.djangoproject.com/"
            title="Django Home"
            >Django</a
          >
          (a Python web framework), and
          <a
            href="http://httpd.apache.org/"
            title="Apache2 Home"
            >Apache2</a
          >). Its development is supported by a Specific Cooperative Research
          agreement between
          <a
            href="http://www.ars.usda.gov/pandp/people/people.htm?personid=3874"
            title="Gary Miller Profile"
            >Gary Miller</a
          >
          at the USDA Systematic Entomology Lab and
          <a
            href="http://www.ag.auburn.edu/enpl/directory/faculty/hardy/"
            title="Nate Hardy Profile"
            >Nate Hardy</a
          >
          at Auburn University. As part of the re-implementation, the data model
          was normalized, and the scientific names and classifications of
          ecological associates were updated and standardized.
        </p>

        <p>
          The ScaleNet data is managed primarily by Barb Denno. If you encounter
          errors or know of data that should be added to ScaleNet, please
          contact Barb (bdenno12 (at) gmail (dot) com). If you run in to
          software errors, contact Mayrolin (scalenetdb (at) gmail (dot) com).
        </p>
        <p>
          <strong>NOTE:</strong> The end-of-life of the original ScaleNet was 8
          July 2015. We ran into a few problems during the data migration that
          we were unable to resolve before that time with our migration scripts
          -- mainly problems with linking available scale insect names to
          validation sources in the primary literature. This affected about
          1,000 names. ScaleNet editors are working to correct these problems.
          In the meantime, those catologue entries can be accessed in flat files
          <a
            href="/flatcat/"
            title="flat catalogues"
            >here</a
          >.
        </p>

        <h4>Citing ScaleNet</h4>
        <p>
          Mayrolin García redeveloped ScaleNet as part of her MS research.
          Please use this citation:
        </p>
        <p>
          García Morales M, Denno BD, Miller DR, Miller GL, Ben-Dov Y, Hardy NB.
          2016.
          <em
            >ScaleNet: A literature-based model of scale insect biology and
            systematics</em
          >. Database. doi: 10.1093/database/bav118. http://scalenet.info [Date
          accessed].
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import logoImg from '#/pages/images/SN-logo-400.png'
</script>

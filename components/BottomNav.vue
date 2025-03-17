<template>
  <nav
    role="navigation"
    id="bottom-nav"
    class="flex gap-2 items-center uppercase text-sm justify-center flex-col md:flex-row"
  >
    <RouterLink
      to="/about"
      title="About ScaleNet"
    >
      About
    </RouterLink>
    <span class="hidden md:block">|</span>

    <a
      href="https://idtools.org/tools/1044/index.cfm"
      title="Keys to Scale Insects (2014)"
    >
      Keys
    </a>
    <span class="hidden md:block">|</span>
    <a
      href="https://idtools.org/tools/1061/index.cfm?pageID=2998"
      title="Keys to Aspidiotini"
    >
      Key Aspidiotini
    </a>
    <span class="hidden md:block">|</span>

    <a
      href="mailto:bdenno12@gmail.com"
      title="See something wrong? Click here to contact the curator about it."
    >
      Contact
    </a>
    <span class="hidden md:block">|</span>
    <RouterLink to="/otus/805967">Classification </RouterLink>
  </nav>
</template>

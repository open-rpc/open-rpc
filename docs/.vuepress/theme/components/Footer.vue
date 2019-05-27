<template>
  <footer class="footer">
    <ul>
      <li><a href="https://spec.open-rpc.org" target="_blank">Specfication</a></li>
      <li><a href="https://playground.open-rpc.org" target="_blank">Playground</a></li>
      <li><a href="https://github.com/open-rpc" target="_blank">GitHub</a></li>
      <li><a href="https://discord.gg/rsQ4esV" target="_blank">Discord</a></li>
    </ul>
  </footer>
</template>

<style lang="stylus" scoped>
  @require '../styles/config'

  footer
    font-size $fsSmall
    padding 6em 0 2em 10em

    &.home
      margin-left 2em

    ul
      margin 0

      li
        display inline-block
        margin-right 2em

        &:first-child
          padding 0

        &:before
          content ''
          padding 0

        a
          color $subduedColor

          &:hover
            color $accentColor

</style>

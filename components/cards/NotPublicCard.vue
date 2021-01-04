<template>
  <v-col cols="12" md="6" class="DataCard">
    <div class="notPublic">
      <StaticCard>
        <h2>{{ $t('非公式：InFormal') }}</h2>
        <p>
          {{
            $t(
<<<<<<< HEAD
              '最初に新規機能を追加しています。直近６週分のデータを扱います。それ以前の陽性など私の興味の外です。'
=======
              '地図表現と次のテーブルは新規機能で、直近6週分のデータを扱います。それ以前の陽性など私の興味の外です。'
>>>>>>> 01210ca (Initialize repository)
            )
          }}
        </p>
        <p>
          {{
            $t(
<<<<<<< HEAD
              '以降は公式同様、初期からの全データを扱います。そういう意味で思いっきり真似っこですし、非公式です。'
=======
              '３番目以降は公式と同様、初期からの全データを扱います。そういう意味で思いっきり真似っこですし、非公式です。'
>>>>>>> 01210ca (Initialize repository)
            )
          }}
        </p>
        <p>
<<<<<<< HEAD
          {{ $t('データは年月日で扱っています。') }}
        </p>
        <p>
          {{ $t('個々人は十分に頑張っていると思います。') }}
=======
          {{ $t('ただしデータは年月日で処理しています。') }}
        </p>
        <p>
          {{ $t('所感ですが、個々人は十分に頑張っていると思います。') }}
>>>>>>> 01210ca (Initialize repository)
        </p>
      </StaticCard>
    </div>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    StaticCard
  },
  head: (): MetaInfo => ({
    title: '非公式：InFormal'
  })
})
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);

    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>

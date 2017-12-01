<template>
  <vl-card>
    <vl-card-content>
        <vl-toolbar class="vl-content-title">
          <vl-shadow :dp="1">
            <vl-toolbar-sub>
                <h3 style="color: white" v-tooltip="'content'">Content</h3>
            </vl-toolbar-sub>
          </vl-shadow>
        </vl-toolbar>
      <vl-content class="vl-content-height">
        <p>Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem aliquam ne.</p>

        <p>
    Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent.
        </p>

        <p>
    Ad sea dolor accusata consequuntur. Sit facete convenire reprehendunt et. Usu cu nonumy dissentiet, mei choro omnes fuisset ad. Te qui docendi accusam efficiantur, doming noster prodesset eam ei. In vel posse movet, ut convenire referrentur eum, ceteros singulis intellegam eu sit.
        </p>

        <p>
    Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his, solum virtute recteque et cum. Vel cu luptatum signiferumque, mel eu brute nostro senserit. Blandit euripidis consequat ex mei, atqui torquatos id cum, meliore luptatum ut usu. Cu zril perpetua gubergren pri. Accusamus rationibus instructior ei pro, eu nullam principes qui, reque justo omnes et quo.
        </p>

        <p>
    Sint unum eam id. At sit fastidii theophrastus, mutat senserit repudiare et has. Atqui appareat repudiare ad nam, et ius alii incorrupte. Alii nullam libris his ei, meis aeterno at eum. Ne aeque tincidunt duo. In audire malorum mel, tamquam efficiantur has te.
        </p>

        <p>
    Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut. Fabulas dolorem ei has, quem molestie persequeris et sit.
        </p>

        <p>
    Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque. Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus tibique. Cu latine electram cum, ridens propriae intellegat eu mea.
        </p>

        <p>
    Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro. Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu facilisi molestiae usu.
        </p>

        <p>
    Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut. Fabulas dolorem ei has, quem molestie persequeris et sit.
        </p>

        <p>
    Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque. Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus tibique. Cu latine electram cum, ridens propriae intellegat eu mea.
        </p>

        <p v-tooltip="'Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro. Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu facilisi molestiae usu.'">
    Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro. Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu facilisi molestiae usu.
        </p>

      </vl-content>
    </vl-card-content>
  </vl-card>
</template>

<script>
import VlCard from '../components/VlCard/VlCard'
import VlCardHeader from '@/components/VlCard/VlCardHeader'
import VlCardContent from '@/components/VlCard/VlCardContent'
import VlContent from '@/components/VlContent/VlContent'
import VlToolbar from '@/components/VlToolbar/VlToolbar'
import VlToolbarSub from '@/components/VlToolbar/VlToolbarSub'
import VlShadow from '@/components/VlShadow/VlShadow'
export default {
  name: 'ContentPage',
  components: {VlCard, VlCardHeader, VlCardContent, VlContent, VlToolbar, VlToolbarSub, VlShadow}
}
</script>

<style scoped>
.vl-content-height {
  height: 450px;
}
.vl-content-title {
  background-color: #41b883;
  border-radius: 2px 2px 0 0;
}
</style>



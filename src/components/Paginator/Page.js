import React from "react";
import { Dimensions, FlatList, StyleSheet, ScrollView } from "react-native";
import { Paragraph, withTheme } from "react-native-paper";
import PropTypes from "prop-types";

function Page({
  reference,
  data,
  getItemLayout,
  viewabilityConfig,
  onScrollEndDrag,
  theme
}) {
  return (
    <FlatList
      ref={reference}
      // Data & Indexing
      data={data}
      keyExtractor={(item, index) => index.toString()}
      // Apperance & Orientation
      horizontal
      style={[{ backgroundColor: theme.colors.background }, styles.page]}
      showsHorizontalScrollIndicator={false}
      // Trasition & Interation
      getItemLayout={getItemLayout}
      viewabilityConfig={viewabilityConfig}
      onScrollEndDrag={onScrollEndDrag}
      decelerationRate="fast"
      bounces={false}
      pagingEnabled={false}
      // Render
      renderItem={({ item, index }) => (
        <ScrollView style={styles.pageContent}>
          <Paragraph>{item}</Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            cursus magna, in interdum lectus. Suspendisse pulvinar mi neque, vel
            interdum nulla dignissim sed. Etiam dictum, massa id laoreet
            iaculis, massa erat accumsan magna, ut suscipit libero erat vel ex.
            Donec ut mauris est. Integer accumsan, eros sed placerat mattis,
            risus nisi hendrerit massa, ut molestie tortor mauris sed lacus. Sed
            facilisis vulputate ligula, vitae faucibus nunc scelerisque sed.
            Cras sollicitudin lacus at tincidunt malesuada. Sed imperdiet lectus
            justo, at malesuada nisl consequat a. Curabitur id condimentum ante.
            Proin in purus velit. Ut aliquet bibendum aliquam. Curabitur a nulla
            et purus commodo dictum eu quis tortor. Praesent id elit purus.
            Morbi laoreet augue eget tellus euismod, eu eleifend risus egestas.
            Nam aliquam eu urna quis tincidunt. Phasellus finibus ante vitae
            nisl lacinia, sit amet sodales tellus cursus. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Aliquam erat volutpat. Aliquam a varius leo. Quisque quis auctor
            libero, lacinia consectetur odio. Donec lacinia nec augue sit amet
            bibendum. Vivamus sit amet accumsan ipsum. Quisque ornare sapien nec
            ex dictum, ac posuere nibh malesuada. Duis auctor dolor quis orci
            sodales, ac condimentum lectus blandit. Etiam vestibulum, diam non
            elementum rhoncus, purus nisi gravida eros, in scelerisque dui
            tortor ut quam. Integer nisi tellus, feugiat eu lacus non, efficitur
            finibus ante. Maecenas eget facilisis sem. Curabitur dapibus est id
            leo dapibus interdum. Sed eros orci, feugiat id luctus eu, suscipit
            a lacus. Nullam rutrum, sapien ac elementum consectetur, metus quam
            ullamcorper nisi, et efficitur felis orci ut ligula. In sagittis
            erat a dapibus consequat. Mauris at sapien ultrices, mattis velit
            non, consectetur velit. In at nunc eu mauris maximus gravida quis ut
            nibh. Donec in augue ac magna vulputate pellentesque vel eget nisl.
            Integer at pharetra orci, vel pellentesque leo. Maecenas tristique
            ornare gravida. Curabitur convallis tortor lacus, at laoreet dolor
            consequat blandit. Suspendisse neque dolor, molestie eget lectus id,
            suscipit gravida odio. Curabitur lectus eros, mattis nec felis et,
            semper tempor lorem. Sed eget lectus porttitor mi facilisis gravida.
            Cras elementum, ligula posuere fringilla lobortis, orci felis
            euismod diam, et facilisis metus ante at mauris. Fusce nec tincidunt
            lacus, ut consectetur sem. Vivamus venenatis porta hendrerit. Proin
            luctus justo sit amet eros ultrices pharetra. In eu ligula magna.
            Pellentesque odio neque, vehicula vel libero ac, tincidunt aliquam
            ex. Quisque dignissim dui et lorem auctor sodales. Mauris vel tempor
            nulla. Phasellus vehicula consectetur tortor, ut pulvinar mi. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Maecenas mollis nulla justo, nec eleifend dui mattis
            at. Sed a turpis sed felis imperdiet hendrerit. Nam condimentum nunc
            sit amet nibh imperdiet, a finibus eros lobortis. Aliquam id
            tincidunt libero. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Phasellus neque ante, bibendum non magna suscipit, posuere
            molestie risus. Nullam feugiat hendrerit quam id condimentum. Sed
            eleifend laoreet urna, mattis viverra tellus porttitor sit amet.
            Aenean pellentesque orci tellus, tempus congue felis faucibus id.
          </Paragraph>
        </ScrollView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%"
  },
  pageContent: {
    width: Dimensions.get("window").width
  }
});

Page.propTypes = {
  reference: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  viewabilityConfig: PropTypes.object.isRequired,
  getItemLayout: PropTypes.func.isRequired,
  onScrollEndDrag: PropTypes.func.isRequired,
  theme: PropTypes.object
};

export default withTheme(Page);

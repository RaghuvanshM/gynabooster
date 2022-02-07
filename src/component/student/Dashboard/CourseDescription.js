import React, {useState} from 'react'
import {
    Text, View,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import customColor from '../../../utility/colors';

const height = Dimensions.get ('screen').height;
const width = Dimensions.get('screen').width;

const CourseDescription = () => {
  const [isdes, setIsdes] = useState(false);
  const addTocart = () => {
    alert('Added To cart');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}></View>
      <View style={styles.courseContentContainer}>
        <ScrollView style={{marginBottom: 100}}>
          <View style={{marginTop: 10}}>
            <OrangeButtom btnStyle={{width: '90%'}} title={'Course'} />
          </View>
          <View style={styles.courseContainer}>
            <Image
              source={require('../../../assets/pic.jpg')}
              style={{height: 100, width: '100%', borderRadius: 10}}
            />
            <View style={styles.cousedesrow}>
              <RowText leftText={'Course:'} rightText={'Test'} />
              <RowText leftText={'Instructor:'} rightText={'Sushant Sir'} />
              <RowText leftText={'Language:'} rightText={'English/Hindi'} />
              <RowText leftText={'Fees:'} rightText={'₹200'} />
              <RowText leftText={'Vallid Till:'} rightText={'Life Time'} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  addTocart();
                }}
                style={styles.addbtnContianer}>
                <Text style={styles.addtocartText}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.descontianer}>
            <OrangeButtom
              onPress={() => {
                setIsdes(!isdes);
              }}
              title={'Description'}
              btnStyle={{width: '100%'}}
            />
            {isdes && (
              <View style={{padding: 5, marginBottom: 10}}>
                <Text style={{fontSize: 15}}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like
                </Text>
              </View>
            )}
          </View>
          <View style={styles.descontianer}>
            <OrangeButtom
              onPress={() => {
                setIsdes(!isdes);
              }}
              title={'Description'}
              btnStyle={{width: '100%'}}
            />
            {isdes && (
              <View style={{padding: 5, marginBottom: 10}}>
                <Text style={{fontSize: 15}}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like
                </Text>
              </View>
            )}
          </View>
          <View style={styles.descontianer}>
            <OrangeButtom
              onPress={() => {
                setIsdes(!isdes);
              }}
              title={'Description'}
              btnStyle={{width: '100%'}}
            />
            {isdes && (
              <View style={{padding: 5, marginBottom: 10}}>
                <Text style={{fontSize: 15}}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CourseDescription;

const OrangeButtom = ({title, onPress, btnStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[btnStyle, styles.btnContainer]}>
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const RowText = ({leftText, rightText}) => {
  return (
    <>
      <View style={styles.hrline} />
      <View style={styles.rowContainer}>
        <Text style={{fontSize: 16, color: 'black'}}>{leftText}</Text>
        <Text style={{fontSize: 16, color: '#616161'}}>{rightText} </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addbtnContianer: {
    height: 40,
    width: '90%',
    backgroundColor: '#234294',
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  descontianer: {
    borderWidth: 2,
    borderColor: '#ededed',
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  cousedesrow: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  courseContainer: {
    width: '90%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ecebf0',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  headerContainer: {
    height: 150,
    width: '100%',
    backgroundColor: customColor.themcolor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  courseContentContainer: {
    height: height,
    width: '80%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 60,

    alignSelf: 'center',
    elevation: 24,
    borderRadius: 5,
    borderColor: customColor.bordergray,
    borderWidth: 1,
  },
  btnContainer: {
    height: 60,
    backgroundColor: customColor.themcolor,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hrline: {
    borderTopWidth: 1,
    marginTop: 4,
    borderTopColor: '#f3f2f5',
  },
  addtocartText: {
    fontSize: 16,
    color: 'white',
  },
});
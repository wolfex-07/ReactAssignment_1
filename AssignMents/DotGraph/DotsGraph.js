import { Text, SafeAreaView, StyleSheet, View, Touchable, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import DrawDots from './DrawDots';
import AxisComponent from './AxisComponent';

function fetchData() {
  
   const usersData = [];
   const yAxisData = [];
   const range = 200;

   for (let i = 0; i < range; i++) {
     const x = i - range / 2;
     const time = (i%13) + ' am'
     const food = (i%7==0)
     const title = Math.round( 100 * Math.sin((Math.PI * x) / (range / 2)) + 110); // Parabolic function
     usersData.push({ id: i, title, time, food });
  }

  return usersData;

}

const DATA = fetchData();

const DATA1= [
  {
    id: '1',
    title: '1',
    time: '8 am'
  },
  {
    id: '2',
    title: '2',
    time: '9 am'
  },
  {
    id: '3',
    title: '3',
    time: '10 am'
  },{
    id: '4',
    title: '4',
    time: '11 am'
  }
];

const Item = ({title}) => (
  <View style = {DotsGraphStyle.componentContainer}>
     <View style={DotsGraphStyle.item}>
     </View>
     <View style={DotsGraphStyle.xAxisComponent}>
      <Text style = {{padding: 5,}}>{title.time}</Text>
     </View>
  </View>
);

const btnImgUrl = 'https://icons.veryicon.com/png/o/internet--web/industrial-icon/down-arrow.png'
export default function DotsGraph() {
  return (
    <SafeAreaView style = {DotsGraphStyle.baseAreaview}>
     
      <Text style = {DotsGraphStyle.title}>Glucose</Text>
      <View style = {DotsGraphStyle.Container}>
       
        <View style = {DotsGraphStyle.GraphHeaderView}>
         
           <View style  = {DotsGraphStyle.headerLeftView}>
             
             <Text style = {DotsGraphStyle.headerLeftUpperText}>Glucose Levels</Text>
             <Text style = {DotsGraphStyle.headerLeftLowerText}>11 Jan 2024</Text>

           </View>
           <View style  = {DotsGraphStyle.headerRightView}>
            
            <TouchableOpacity style = {DotsGraphStyle.headerBtn}>
              
              <View style = {DotsGraphStyle.insideBtnView}>
                 
                 <Text style = {DotsGraphStyle.btnText}>Day</Text>
                 <Image style = {DotsGraphStyle.btnimg} src = {btnImgUrl} ></Image>
               
              </View>
            
            </TouchableOpacity >
            <TouchableOpacity  style = {DotsGraphStyle.headerBtn}>
                
              <View style = {DotsGraphStyle.insideBtnView}>
                 
                 <Image style = {DotsGraphStyle.btnimg} src = {btnImgUrl} ></Image>
                 <Text style = {DotsGraphStyle.btnText}>List</Text>
               
              </View>

            </TouchableOpacity>

           </View>
        
        </View>
        <View style = {DotsGraphStyle.GraphMainView}>
          
           <View style = {DotsGraphStyle.yAxisContainer}>
            <Text>1</Text>
           </View>
           <View style = {DotsGraphStyle.GraphandXaxisContainer}>
             <FlatList
               data={DATA}
               renderItem={(item) => <DrawDots data = {item} />}
               keyExtractor={item => item.id}
               horizontal = {true}
               scrollEnabled = {true}
              />
            </View>
      
           </View>
      
      </View>
      
    </SafeAreaView>
  );
}


const DotsGraphStyle = StyleSheet.create({
  baseAreaview: {
   backgroundColor: '#E8F3F1',
   flex: 1,
  },
  title: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: 24,
    marginLeft: 10,
    fontWeight: '600',
    fontFamily: 'Comicsansms',
  },
  Container: {
    backgroundColor: 'white',
    marginTop: 20,
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  GraphHeaderView: {
     backgroundColor: 'red',
     height: 100,
     flexDirection: 'row',
     justifyContent: 'space-between',
  },
  GraphMainView: {
    backgroundColor: '#e3e3e3',
    flexDirection: 'row',
    height: 380,
    marginTop: 0,
    margin: 10,
  },
  GraphandXaxisContainer: {
    backgroundColor: 'white',
  }, 
  yAxisContainer: {
    backgroundColor: 'white',
    width: 40,
    borderRightWidth: 0.5,
    justifyContent: 'space-between'
  },
  headerLeftView: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  headerRightView: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  headerLeftUpperText: {
     fontSize: 15,
     fontWeight: '700',
  },
  headerLeftLowerText: {
    fontSize: 12,
    marginTop: 8,
    fontWeight: '300'
  },
  headerBtn: {
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  insideBtnView: {
    flexDirection: 'row',
  },
  btnimg: {
    width: 10,
    margin: 2,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'blue'
  },
  item: {
    backgroundColor: 'green',
    height: 10,
    width: 10,
    top: 10,
    borderRadius: 10,
    marginHorizontal: 2,
    alignSelf: 'center',
    position: 'relative',
  },
  titleComponent: {
    fontSize: 14,
  },
  componentContainer: {
   marginLeft: 1,
   width: 50,
   //alignItems: 'center'
  },
  xAxisComponent: {
    height: 40,
    opacity: 1,
    top: 330,
    borderTopWidth: 1,
    //justifyContent: 'flex-end',
    backgroundColor: 'orange',
    //justifyContent: 'center',
    //position: 'relative'
  }
});
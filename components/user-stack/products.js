import * as React from "react";
import { View, Text, FlatList, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createFakeData } from '../../data'

function Item({title, subHeading, tags, description, availability,pricePerWeight,itemCode, mainImg, extraImages}) {
  return (
    <View >
      <Text>{title}</Text>
      <Image source={ {uri: mainImg, width: 300, height: 300, scale: 1} } />
      {extraImages.map((img)=><Image source={ {uri: img, width: 50, height: 50, scale: 1} } />)}
      <Text>{subHeading}</Text>
      <View>
            {tags.map((tag, index) => {
               return <Text key={index}>{tag}</Text> 
            })}
            <Text>{description}</Text>
      </View>

    </View>
  );
}

//TODO: Rename this component
function Main() {
  const navigation = useNavigation();
  console.log(createFakeData())
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={() => navigation.openDrawer()}>Home Screen</Text>
      <FlatList 
      data={createFakeData()}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={item => item.itemCode}
      />
    </View>
  );
}

//Created a nested stack so when a user adds a product, we can remain in the products tab
function Products() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{}} name="codename:Shitake">
        {(props) => <Main {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
export default Products;

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Caption, Drawer, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../components/UserContext';
import { styles } from '../../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons';




export function DrawerContent(props) {
    
	const { logout } = useContext(UserContext);

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{ flexDirection: 'row', marginTop: 15 }}>
							<Avatar.Image
								source={require('../../images/user.jpg')}
								size={50}
							/>
							<View style={{ marginLeft: 15, flexDirection: 'column' }}>
								<Title style={styles.title}>Fulano de Tal</Title>
								<Caption style={styles.caption}>@fulano de tal</Caption>
							</View>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => <Ionicons name="home" style={styles.ico2} size={20}/>}
							label="Home"
							onPress={() => {
								props.navigation.navigate('Apresentação');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => <Ionicons name="person" style={styles.ico2} size={20}/>}
							label="Perfil"
							onPress={() => {
								props.navigation.navigate('Perfil');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) =>  <Ionicons name="thumbs-up" style={styles.ico2} size={20}/>}
							label="Corridas "
							onPress={() => {
								props.navigation.navigate('Corridas');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => <Icon name="motorcycle" style={styles.ico2} size={20}/>}
							label="Histórico"
							onPress={() => {
								props.navigation.navigate('Histórico');
							}}
						/>
                        
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => <Ionicons name="exit-outline" style={styles.ico2} size={20} />}
					label="Sair"
					onPress={() => {
						logout();
					}}
				/>
			</Drawer.Section>
		</View>
	);
}

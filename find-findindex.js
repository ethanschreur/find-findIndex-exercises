function findUserByUsername(usersArray, username) {
	return usersArray.find(function(value) {
		return value['username'] === username;
	});
}
const users = [ { username: 'mlewis' }, { username: 'akagen' }, { username: 'msmith' } ];

function removeUser(usersArray, username) {
	let badIndex = usersArray.findIndex(function(value, index) {
		return value['username'] === username;
	});
	if (badIndex === -1) {
		return undefined;
	} else {
		return usersArray.splice(badIndex, 1)[0];
	}
}

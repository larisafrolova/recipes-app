<template>
    <form>
        <div>
            <label>Title</label>
            <input v-model="userTitle" type="text">
        </div>
        <div>
            <label>Course</label>
            <input v-model="userCourse" type="text"/>
        </div>
        <div>
            <label>Ingredients</label>
            <textarea v-model="userIngredients" rows="30" cols="30"></textarea>
        </div>
        <div>
            <label>Directions</label>
            <textarea v-model="userDirections" rows="30" cols="30"></textarea>
        </div>
        
    </form>
</template>

<script>
export default {
    data (){
        return {
            userTitle: '',
            userCourse: '',
            userIngredients: '',
            userDirections: ''
        };
    }
};


</script>

<style>

</style>
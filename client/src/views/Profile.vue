<template>
    <div class="profile">
        <div class="profile__top">
            <div class="profile__top--text">
                <h3>Your Profile</h3>
                <h1>Hi {{ user.preferred_name }}</h1>
            </div>
        </div>
        <div class="profile__basic-info">
            <div class="info__item">
                <div class="info__item--text">
                    <span class="info__item--heading">Name</span>
                    {{ user.full_name }}
                </div>
                <div class="info__item--icon">
                    <el-icon size="22">
                        <edit />
                    </el-icon>
                </div>
            </div>
            <div class="info__item">
                <div class="info__item--text">
                    <span class="info__item--heading">Email</span>
                    {{ user.email_id }}
                </div>
                <div class="info__item--icon">
                    <el-icon size="22">
                        <edit />
                    </el-icon>
                </div>
            </div>
            <div class="info__item">
                <div class="info__item--text">
                    <span class="info__item--heading">Date of Birth</span>
                    {{ user.dob }}
                </div>
                <div class="info__item--icon">
                    <el-icon size="22">
                        <edit />
                    </el-icon>
                </div>
            </div>
            <router-link :to="{ name: 'Interests' }">
                <div class="info__item">
                    <div class="info__item--text">Interests</div>
                    <div class="info__item--icon">
                        <el-icon size="22">
                            <arrow-right-bold />
                        </el-icon>
                    </div>
                </div>
            </router-link>
            <router-link :to="{ name: 'YourGoal' }">
                <div class="info__item">
                    <div class="info__item--text">Your Goal</div>
                    <div class="info__item--icon">
                        <el-icon size="22">
                            <arrow-right-bold />
                        </el-icon>
                    </div>
                </div>
            </router-link>
            <div class="info__signout">
                <p @click="handleSignOut">Sign Out</p>
            </div>
        </div>
    </div>
</template>

<script>
import { Edit, ArrowRightBold } from '@element-plus/icons';
export default {
    name: 'Profile',
    components: { Edit, ArrowRightBold },
    setup() {
        const user = {
            preferred_name: 'James',
            full_name: 'James Moore',
            email_id: 'moore@gmail.com',
            dob: '12/12/1997',
        };

        const handleSignOut = () => {
            console.log('Sign out successful');
        };

        return {
            user,
            handleSignOut,
        };
    },
};
</script>

<style lang="scss" scoped>
.profile {
    &__top {
        display: flex;
        align-items: flex-end;
        background-color: #0c1b32;
        height: 170px;
        &--text {
            padding: 30px;
        }
        h1 {
            color: white;
        }
        h3 {
            color: rgb(138, 138, 138);
            margin-bottom: 5px;
        }
    }
    &__basic-info {
        .info__item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 10px;
            font-weight: 600;
            margin: 0 20px;
            border-bottom: solid 1.5px rgb(170, 170, 170);
            &--text {
                display: flex;
                flex-direction: column;
            }
            &--heading {
                color: rgb(170, 170, 170);
                font-size: 0.9em;
                margin-bottom: 3px;
            }
        }
        .info__signout {
            text-align: center;
            margin: 20px;
            font-weight: 600;
            color: rgb(228, 0, 0);
            p {
                cursor: pointer;
            }
        }
    }
}
</style>

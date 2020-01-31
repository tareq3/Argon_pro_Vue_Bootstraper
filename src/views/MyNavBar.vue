<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top border-bottom navbar-expand"
    :class="{'bg-success': type ==='default', 'navbar-dark': type ==='default'}"
  >
    <div
      class="navbar-search form-inline mr-sm-3"
      :class="{'navbar-search-light': type === 'default', 'navbar-search-dark': type === 'light'}"
      id="navbar-search-main"
    >
      <div class="form-group mb-0">
        <div class="input-group input-group-alternative input-group-merge">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <input class="form-control" placeholder="Search" type="text" />
        </div>
      </div>
      <button
        type="button"
        class="close"
        data-action="search-close"
        data-target="#navbar-search-main"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>

    <ul class="navbar-nav align-items-center ml-md-auto">
      <li class="nav-item d-xl-none">
        <!-- Sidenav toggler -->
        <div
          class="pr-3 sidenav-toggler"
          :class="{active: $sidebar.showSidebar, 'sidenav-toggler-dark': type === 'default', 'sidenav-toggler-light': type === 'light'}"
          @click="toggleSidebar"
        >
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
          </div>
        </div>
      </li>

      <base-dropdown
        class="nav-item"
        tag="li"
        title-classes="nav-link"
        title-tag="a"
        icon="ni ni-bell-55"
        menu-classes="dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden"
      >
        <template>
          <!-- Dropdown header -->
          <div class="px-3 py-3">
            <h6 class="text-sm text-muted m-0">
              You have
              <strong class="text-primary">13</strong> notifications.
            </h6>
          </div>
          <!-- List group -->
          <div class="list-group list-group-flush">
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <img
                    src="/img/theme/team-1.jpg"
                    alt="Image PlaceHolder"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h4>John Doe</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">A new day has begain</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="/img/theme/team-2.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="/img/theme/team-3.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>5 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Your posts have been liked a lot.</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="/img/theme/team-4.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="/img/theme/team-5.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                </div>
              </div>
            </a>
          </div>
          <!-- View all -->
          <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
        </template>
      </base-dropdown>

      <base-dropdown
        class="nav-item"
        icon="fas fa-layer-group"
        title-tag="a"
        title-classes="nav-link"
        menu-classes="dropdown-menu-lg shortcuts dropdown-menu-right bg-default dropdown-menu-dark"
      >
        <template>
          <div class="row mx-4 my-4">
            <a href="#!" class="col-4 shortcut-item">
              <span class="avatar rounded-circle bg-gradient-red">
                <i class="ni ni-calendar-grid-58"></i>
              </span>
              <small class="text-white">Calender</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
              <span class="avatar rounded-circle bg-gradient-orange">
                <i class="fas fa-envelope fa-solid"></i>
              </span>
              <small class="text-white">Email</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
              <span class="avatar rounded-circle bg-gradient-info">
                <i class="fas fa-credit-card"></i>
              </span>
              <small class="text-white">Payment</small>
            </a>
          </div>
        </template>
      </base-dropdown>
    </ul>

    <ul class="navbar-nav ml-auto ml-md-0">
      <base-dropdown
        menu-on-right
        class="nav-item"
        tag="li"
        title-tag="a"
        title-classes="nav-link pr-0"
      >
        <a href="#!" class="nav-link pr-0" slot="title-container">
          <div class="media align-items-center">
            <span class="avatar avatar-sm rounded-circle">
              <img src="/img/theme/team-4.jpg" alt="image placeHolder" />
            </span>

            <div class="media-body ml-2 d-none d-lg-block">
              <span class="font-weight-bold text-sm">John Show</span>
            </div>
          </div>
        </a>

        <template>
          <div class="dropdown-header">
            <h4>WelCome!</h4>
          </div>
          <a class="dropdown-item">
            <i class="fas fa-user"></i>
            <span>My Profile</span>
          </a>

          <a class="dropdown-item">
            <i class="fas fa-cog"></i>
            <span>Setting</span>
          </a>
          <div class="dropdown-divider"></div>

          <a class="dropdown-item">
            <i class="fas fa-sign-out-alt"></i>
            <span>Log-out</span>
          </a>
        </template>
      </base-dropdown>
    </ul>
  </base-nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BaseNav from "@/components/argon-core/Navbar/BaseNav.vue";
import { extend } from "vee-validate";
import SidebarPlugin from "@/components/argon-core/SidebarPlugin/index";
@Component
export default class MyNavBar extends Vue {
  type: String = "default";

  toggleSidebar() {
    this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
  }
}
</script>

<style>
</style>
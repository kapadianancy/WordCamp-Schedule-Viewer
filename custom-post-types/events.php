<?php // Register a Custom Field Type as a REST field

function register_startDate_as_rest_field() {
  register_rest_field(
    'wordCamps',
    'startDate',
    array(
      'get_callback' => 'get_startDate_meta_field',
      'update_callback' => null,
      'schema' => null,
    )
  );
};

function get_startDate_meta_field( $object, $field_name, $value ) {
  return get_post_meta($object['id'])[$field_name][0];
};

add_action( 'rest_api_init', 'register_genre_as_rest_field' );
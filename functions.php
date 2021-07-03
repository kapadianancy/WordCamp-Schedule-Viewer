$query = new WP_Query(array(
    'post_type' => 'custom',
    'post_status' => 'publish',
    'posts_per_page' => -1,
));


while ($query->have_posts()) {
    $query->the_post();
    $post_id = get_the_ID();
    echo $post_id;
    echo "<br>";
}

wp_reset_query();
create table customers (
    id                      bigserial,
    name                    varchar(255) not null,
    primary key (id)
);

create table products (
    id                      bigserial primary key,
    title                   varchar(255),
    price                   int
);

create table orders (
    id                      bigserial primary key,
    customer_id             bigint references customers(id),
    price                   int
);

create table order_items (
    id                      bigserial primary key,
    product_id              bigint references products(id),
    order_id                bigint references orders(id),
    price                   int,
    price_per_product       int,
    quantity                int
);

insert into customers (name)
values
('Bob'),
('John'),
('Jack');

insert into products (title, price)
values
('Bread1', 21),
('Bread2', 22),
('Bread3', 21),
('Bread4', 22),
('Bread5', 21),
('Bread6', 22),
('Bread7', 21),
('Bread8', 22);

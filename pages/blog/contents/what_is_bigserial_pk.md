---
title: 'BigSerial Primary Key'
subtitle: 'PostgreSQL 특징'
date: '2024-03-15'
tags: [DB, CS, BE]
---

`BIGSERIAL PRIMARY KEY`는 PostgreSQL에서 사용되는 데이터 타입으로, 테이블에 새로운 행이 추가될 때마다 고유 식별자를 생성하는 데 사용됩니다. `BIGSERIAL`은 자동으로 값을 1씩 증가시키는 정수 타입으로, 일반적인 `SERIAL` 타입보다 더 큰 범위의 값을 저장할 수 있는 `BIGINT`를 기반으로 합니다.

테이블 정의에서 `BIGSERIAL PRIMARY KEY`를 사용하면 다음과 같은 의미가 있습니다:

- **BIGSERIAL**: 큰 범위의 정수 데이터 타입으로, 새 레코드가 테이블에 삽입될 때마다 자동으로 고유 번호를 생성합니다. `BIGSERIAL`은 1부터 시작하여 9223372036854775807까지 증가할 수 있습니다.

- **PRIMARY KEY**: SQL 데이터베이스에서 테이블의 모든 레코드에서 해당 컬럼의 값이 유일해야 한다는 제약 조건을 의미합니다. 이는 또한 컬럼에 `NULL` 값을 포함할 수 없다는 것을 의미합니다. 기본 키는 테이블의 각 레코드를 식별하는 역할을 합니다.

`BIGSERIAL PRIMARY KEY`로 컬럼을 정의하면 PostgreSQL이 자동으로 각 레코드에 대한 고유 식별자를 생성하게 되며, 이는 큰 정수(64비트 크기)가 됩니다.

예를 들어, `BIGSERIAL PRIMARY KEY`가 있는 테이블을 생성하는 SQL 문은 다음과 같습니다:

```sql
CREATE TABLE my_table (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
```

이 테이블에서 `id` 컬럼은 기본 키로 사용됩니다. 새로운 `name`이 삽입될 때마다 `id`에 대해 수동으로 값을 지정할 필요 없이 자동으로 고유한 번호를 할당합니다.

추가적으로 `BIGSERIAL` 데이터 타입은 주문 오더 번호와 같은 순차적인 식별자를 생성할 때 매우 유용합니다. 각각의 새로운 행에 대해 자동으로 고유한 번호를 할당함으로써, 주문이나 다른 연속적인 항목에 대해 쉽게 추적할 수 있는 순번을 제공합니다. 이는 특히 대규모 시스템에서 많은 양의 데이터를 처리할 때 유용하며, `SERIAL` 대신 `BIGSERIAL`을 사용하면 더 큰 범위의 순번을 안전하게 처리할 수 있습니다. 

예를 들어, 주문 시스템에서 주문을 순차적으로 번호 매기기 위해 다음과 같은 테이블을 생성할 수 있습니다:

```sql
CREATE TABLE orders (
    order_id BIGSERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date TIMESTAMP NOT NULL,
    ... -- 기타 주문 관련 필드
);
```

여기서 `order_id` 필드는 각 주문에 대해 자동으로 생성되는 고유한 순번을 보유하게 됩니다. 이는 주문이 생성될 때마다 1씩 증가하여 각 주문에 대한 고유 식별자로 사용됩니다. 이를 통해 데이터베이스에서 주문을 쉽게 찾고, 관련 정보를 관리하며, 데이터의 무결성을 유지할 수 있습니다.
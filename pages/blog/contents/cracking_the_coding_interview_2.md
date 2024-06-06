---
title: 'Cracking the Coding Interview - 2'
subtitle: 'ArrayList: Dynamic Array'
date: '2024-06-06'
tags: [Algorithm, CS, Data Structures]
---

### 동적 배열 자료구조: 배열 크기와 삽입 수행 시간 그리고 배열의 용량이 꽉찼을 때의 해결법

`동적 배열(Dynamic Array)`은 크기가 고정되지 않고, 필요에 따라 자동으로 크기를 조정하는 배열입니다. 여러 프로그래밍 언어에서 다양한 방식으로 구현되어 있으며, 배열의 크기 조정과 삽입 연산의 시간 복잡도를 이해하는 것은 매우 중요합니다. 또한, 배열의 용량이 꽉 찼을 때 이를 해결하는 방법도 중요합니다.

### 1. 동적 배열의 기본 원리

동적 배열은 내부적으로 고정 크기의 배열을 사용하여 요소를 저장합니다. 배열의 크기는 요소가 추가됨에 따라 자동으로 증가합니다. 초기에는 작은 크기의 배열로 시작하여, 배열이 가득 차면 더 큰 배열을 할당하고 기존 요소를 복사합니다.

### 2. 배열 크기 조정

배열 크기 조정은 다음과 같은 단계를 거칩니다:

1. **초기 크기 할당**: 작은 크기의 배열로 시작합니다.
2. **용량 초과**: 배열이 가득 차면 새로운 배열을 할당합니다.
3. **복사**: 기존 배열의 요소를 새로운 배열로 복사합니다.

대부분의 구현에서는 `배열 크기를 두 배로 늘리는 방식으로 크기를 조정`합니다. 이는 성능과 메모리 사용의 균형을 맞추기 위한 전략입니다.

### 3. 삽입 연산의 시간 복잡도

동적 배열에서의 삽입 연산 시간 복잡도는 다음과 같습니다:

1. **평균 시간 복잡도 (Amortized Time Complexity)**: O(1)
   - 배열에 새로운 요소를 추가하는 대부분의 경우는 상수 시간에 이루어집니다.

2. **최악 시간 복잡도 (Worst-case Time Complexity)**: O(n)
   - 배열이 가득 차서 크기를 두 배로 늘려야 하는 경우, 모든 요소를 새로운 배열로 복사해야 하므로 O(n)의 시간이 소요됩니다.

이와 같은 이유로 여러 번의 삽입 연산을 평균적으로 계산하면 삽입 연산의 시간 복잡도는 상수 시간 O(1)로 간주할 수 있습니다.

### 4. 배열의 용량이 꽉 찼을 때의 해결법

배열의 용량이 꽉 찼을 때의 해결법은 새로운 더 큰 배열을 할당하고 기존 배열의 요소를 모두 복사하는 것입니다. 이 과정을 통해 더 많은 요소를 저장할 수 있는 공간을 확보합니다.

#### 예시 코드

**JavaScript**

```javascript
class DynamicArray {
  constructor() {
    this.array = [];
    this.capacity = 1;
    this.size = 0;
  }

  // 요소 삽입
  push(element) {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.array[this.size] = element;
    this.size++;
  }

  // 배열 크기 두 배로 늘리기
  resize() {
    this.capacity *= 2;
    const newArray = new Array(this.capacity);
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }
}

// 사용 예시
const dynamicArray = new DynamicArray();
dynamicArray.push(1);
dynamicArray.push(2);
console.log(dynamicArray.array); // [1, 2, empty slots...]
```

**Python**

```python
class DynamicArray:
    def __init__(self):
        self.array = []
        self.capacity = 1
        self.size = 0

    def append(self, element):
        if self.size == self.capacity:
            self._resize()
        self.array.append(element)
        self.size += 1

    def _resize(self):
        self.capacity *= 2
        new_array = [None] * self.capacity
        for i in range(self.size):
            new_array[i] = self.array[i]
        self.array = new_array

# 사용 예시
dynamic_array = DynamicArray()
dynamic_array.append(1)
dynamic_array.append(2)
print(dynamic_array.array) # [1, 2, None, None...]
```

**C++**

```cpp
#include <iostream>
#include <vector>

class DynamicArray {
private:
    std::vector<int> array;
    int capacity;
    int size;

    void resize() {
        capacity *= 2;
        std::vector<int> newArray(capacity);
        for (int i = 0; i < size; ++i) {
            newArray[i] = array[i];
        }
        array = newArray;
    }

public:
    DynamicArray() : capacity(1), size(0) {
        array.resize(capacity);
    }

    void push_back(int element) {
        if (size == capacity) {
            resize();
        }
        array[size] = element;
        size++;
    }

    void print() {
        for (int i = 0; i < size; ++i) {
            std::cout << array[i] << " ";
        }
        std::cout << std::endl;
    }
};

// 사용 예시
int main() {
    DynamicArray dynamicArray;
    dynamicArray.push_back(1);
    dynamicArray.push_back(2);
    dynamicArray.print(); // 1 2 
    return 0;
}
```

### 결론

동적 배열은 `초기 크기와 상관없이 필요에 따라 크기를 조정`할 수 있는 유연한 자료구조입니다. 

대부분의 프로그래밍 언어에서 배열의 크기가 `두 배`로 늘어나도록 설계되어 있으며, 이는 `메모리와 성능의 균형을 맞추기 위한 전략`입니다. `삽입 연산의 평균 시간 복잡도는 O(1)`이지만, 배열이 가득 차서 크기를 늘려야 할 때는 O(n)의 시간이 소요될 수 있습니다. 이러한 특성 덕분에 동적 배열은 다양한 애플리케이션에서 효율적으로 사용될 수 있습니다.

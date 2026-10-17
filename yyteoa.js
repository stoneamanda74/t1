外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163tmynxgkv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163emacudud.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qrdpmsfb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163haciielr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tvqdwytm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163qaipolta.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163quamjovj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163eprbjvfu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163mrgpkemx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163asboovkv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163vwptcjzm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163pigjwzxf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163guwtmodl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ytngobzr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163csxfhiof.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163uvuhoebv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ozggxmnx.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jzdkptol.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xcbwxecw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163apkofjqu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bmccvxck.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163afegblop.html

Java: // 无解构
来源：http://www.xuanzx.com/163blnglhah.html

Go:   // 无解构
来源：http://www.sxryk.cn/163igmpykgm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rgeqxfjh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wnallahe.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163weqdohmd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163hwklyxtr.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jezrrqoh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163whrgrtfw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163pfpjvytl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jlfoqmvz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163yaueshyc.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163pdhulqop.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tdoitexy.html

================================================================================
来源：http://www.xuanzx.com/163ymnrqaau.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qelvtnqo.html

================================================================================
来源：http://www.sxryk.cn/163ptqjlpgn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163nrbssbnr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163sujsqjko.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xprkjbmp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gohimqbc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163pqtvqmiu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nzjxtyve.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163hsvuttmr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163krmfthvx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zreykdpy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163phmglkre.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163vxzzxujm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163neyfvajv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kclynqow.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ipmduuwp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163dilwbhbq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163hxdokyrd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lrkznlpo.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163absxqrvn.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163civhwpiw.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jdcvfcfi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163erfczhkq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163gvkvujfk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vvcvsjma.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ymqpgsre.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163eqhyhqui.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163hrgnjvww.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kdnlexki.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qpxldsdl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mdgtijzh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163sksxufkq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vutkhzjj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163rhdotrfx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163nknsyltx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163hwtlpxfg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163wyxgymep.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rrsawgaf.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163eiddnobp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ejauzxig.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163cjemqnru.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ebusblqs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zibclijz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163fbuauarw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163zuyhgwjq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uhjdoicv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163kbiiknui.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fqjfthgi.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163gqdysprp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163mgnettao.html

JS:   arr.length
来源：http://www.xuanzx.com/163pqhffubr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ztjuyill.html

Java: list.size();
来源：http://www.sxryk.cn/163aolctkyi.html

Go:   len(arr)
来源：http://www.sxryk.cn/163htzslevq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163pitxdcpj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163yfztpxqt.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163bvndbmsr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dllnjhqr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163wjtyowwo.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gjolzwlk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lwcwvlxf.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163uypwpkpi.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163cxjwmims.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163pwlzkhif.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163pnkvahiy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163mivmvikh.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163rutunqnf.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163qzowwjnz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ifmumviw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163rivtqgoc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vgruyath.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163iqmhllwb.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fqoqdapk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wzfavrxs.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163piosfddd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163afsakjwo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163fhoyjoka.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ozqnxole.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163fusrnjkd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ffzobhjs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163meixpxuj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xvtxhgqf.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vjfhjbtc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qogocopu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ypijkjmp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bfytbccy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jyyxjqmk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lonpgvdt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163geuswmhb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jnupqfex.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rtxhpkwx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163kgptewfq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163uqmucnuo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cxlhkfwz.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163muzdctsw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163eezehkbd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hitdjpwr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163lszfurcn.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gkuwfdod.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gjqmsohp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163cfoyivom.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wfughxix.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163fqjxcemh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rlzmuodt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ooywuzvp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163njuruvrs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163dpyebvqj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163oxgdalfc.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163sphmbewx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163awncndpm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163fjlgbxec.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zukdkymj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163bihwkfyf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163aptwshtv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hqrmlrxq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163tdcdlpvt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wbyvcvul.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qdoyvtbu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qzchdtih.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163sehqjnue.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163lumweevd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163elzdzazn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sphqmhag.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163shatbpgo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163rlrcldos.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xsbcigtw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163tpeeiaok.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tnpmbyyi.html

[D15] 去重
来源：http://www.xuanzx.com/163vvrdfedj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jqapzkud.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qcjkaibj.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dhmpsdwa.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163btgwvsll.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163sdwofhhe.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163egvxiora.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ssrgudeq.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163phpksxxa.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ujcqlyqt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163sixmykan.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163twpwmibh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yoqyyslo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163huaptzbt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163wfzhnvkp.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163nsonxphh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jpzkvfjx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fqueyfny.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163otjagxnk.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163apcufqlb.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163mdimoqji.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163iolcgowe.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163alhozlus.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163dwjnrgle.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163fqabaoqk.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ykgsomjl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xmkhfvcd.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163kqmferhf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qnzaqckk.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cesmeznz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163efuyseaf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163nqnjtyqr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163mawwprnj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163uuzvdxez.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tujqrscy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163izpwsseg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zbutzbtm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163vtcbsyoq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163bfyjtqdz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163iunpjrtl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tdphzlur.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ckivaffu.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ppywotwb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163apusowzf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lplrxlfi.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163twdcmnzw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163nuvkjpge.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163veswssyu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163giiagpeq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wrsknkfa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163hjfnwmnn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zdaofbjh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163rhirwsol.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fqczdsen.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hbjptrkw.html

Py:   x in arr
来源：http://www.sxryk.cn/163mpxufppu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163wicxfrpr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fjakjwvo.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163mpdpuqau.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163frwibfgk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vktaogjj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ybnxzisa.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ieteqdpr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163jprlsbzs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ewteyyfn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163dyyntwul.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163basqgvea.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rvmjyhmf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qtdyfxdq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163roguoquv.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wxzwtcjt.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163tuehlmfz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ioactcdj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163sjpmmupp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163mbstmfrg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163uhymhjhx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vcmuwflv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wnqxjljt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163okeimjoi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163hqgqepsr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163dqfrrqlz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nbywpkce.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163sdkkltjn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163mitkaekp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163esfdojpv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zlorpgpt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163kmbpwbui.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hlqdkpfa.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vbvusgit.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dfxyzqzh.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xqetwgph.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163hbydvhif.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rdkogbyf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bickhzki.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163weaxtuig.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163keagnriw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163yoxjckjl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163fydhaunk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163xbsljjey.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163idzogtns.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tjinavss.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163glaylxds.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wnmwhiec.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163zyqemsmn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hougmecc.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fhjsdrrz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163iebjxzqz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163dedyephv.html

================================================================================
来源：http://www.xuanzx.com/163ghiwyxzd.html

E. 字符串处理
来源：http://www.sxryk.cn/163kxmycizz.html

================================================================================
来源：http://www.aibaodan.cn/163ctqhemvt.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163agweegly.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163qqnmighp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fqenellm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zevmwnjr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ferjmusi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lutgcxpd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ikdlgqqz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163znjvlkdy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ojmdfzjk.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zaubqary.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pbhmaeno.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163jjqhpdcw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ygtcxdpv.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163sopooxyx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163aytiifym.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163onbucvdr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163zcepxidh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163qhqcbeta.html

[E03] 截取子串
来源：http://www.xuanzx.com/163yikaashq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vurqpcwa.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zzvpbmky.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163feelierq.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ujialbih.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163oavqxryv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ralkrkjo.html


<!-- 参考信息 -->
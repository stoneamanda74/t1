外链999!wailian999！

[C14] 泛型函数
来源：http://www.aibaodan.cn/163aoueohaf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163sflohiwx.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xpullqua.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163whfdwphp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163gqrodsph.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163yyoslnbi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163zrgmgupu.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163oemiaiqy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lopbhjiy.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163kbhlspgy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xntmipno.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163urfabyfy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163sfaisopn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163pgwncfcv.html

Java: // 无解构
来源：http://www.xuanzx.com/163vsnfjkml.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mydpwqro.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163airpsbhy.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hptslgsr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163bcqgnllp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163noilpjal.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163gnddffgm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ttrjakno.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163bwuoebfu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gdoxngpp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ioekeiyg.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163wvxkobzm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163uthzvbyq.html

================================================================================
来源：http://www.xuanzx.com/163wzagboej.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vqoehlxw.html

================================================================================
来源：http://www.aibaodan.cn/163cfttilce.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163seczvkla.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163yvywnnaq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163nmsgpmzy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163cqoenaxi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163whnqruvq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163yfstpcnf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163zpsjkduc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nddslnoq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163hpkjjcyw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163toilqmth.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wqgpwbst.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163vbkmycei.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163snrvyaxo.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zyutaqly.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163wubaalsg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163uuzexdgh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163qfvlxdbu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163sziozqfc.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163juzsbjax.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163rjtxbbik.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163jjymalnv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163kbbuiqkt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zcynpctf.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163kopfuhsb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163pcxdtknu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163yijtiaxz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163igjxwqcu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163eryqywja.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163yxirpian.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ntnqhyfi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163cvkbxuhx.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163uxnnajee.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163lobkinya.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163oywzbgvn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163rurqxvyp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bphrbzje.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ewrifhnt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ysuevqat.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nfhrcxqg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163cgisopsw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jfghknps.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163vedaayga.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163umoiezmw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fbmmwzze.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163goitiruf.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ikiybvec.html

Py:   len(arr)
来源：http://www.xuanzx.com/163oorveqql.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163lsnomlzx.html

JS:   arr.length
来源：http://www.xuanzx.com/163qxenhues.html

TS:   arr.length
来源：http://www.xuanzx.com/163freqigha.html

Java: list.size();
来源：http://www.sxryk.cn/163axxumtsq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rauvdaie.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163xwkpdcrf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163lxvmvfrf.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ruwbptuj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kzatjhhd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dvaplshj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163njqsggsf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163amouewob.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163mmpfwzgn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163majmbctr.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163sifjlprd.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163tgqfjbwq.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163esfqnqak.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163nhuaefly.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163dznhvxrn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163hxpmxmyq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bjxavlmh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163cxxzhswj.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vnlvwctj.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163vmuhuyhb.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163alnqxfyj.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163gfdhtqie.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163andhallf.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163gmxxhouo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163svakuryr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163kbjlspdg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jpbgvxbo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163oebokofs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xbnbiogu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163faqevbtd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163siyydsnq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163objoekeg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hjsblcgc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163idinjipn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kcghuebe.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163axozvfmn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163oawdgutb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163frbdqfvr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ncejwfsm.html

[D11] 反转数组
来源：http://www.xuanzx.com/163tczeerod.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163nyivmblt.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163dgpzbvit.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163focouunw.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ptwztjbs.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163cbhxxinh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163twbwxuuy.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ouwkqubp.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xqyljyyy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163wtkwntjo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hwqnmwfb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rwagqmqr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163magwlffl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163iqesucbm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163kznyeala.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163zmpeijqk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163juquhpca.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163zjoggqyo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ooulwjfv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ropllhhy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rnakurcp.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lfoyjqhs.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ygfsmjfi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163clpsucxe.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rbybbxqp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ppszqjxu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dkvbfmpe.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163nvfonrwl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ivgmiytl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163shapfwzq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xsmmbmst.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mptibfpz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163drfzqwds.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jtudzuym.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ipiisbsz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163kzgyqnek.html

[D15] 去重
来源：http://www.aibaodan.cn/163jgdyzaqh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jgjrgzzy.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zebjmfhi.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dtkxdgqk.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ubziwjth.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163azkiekhd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163etqzpwat.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163segzadiw.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163nwajwltf.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163dvyvsqbm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163jojtrawf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fcqavywe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163aabdmnef.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xflwhonm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163aichfmym.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163xpwxylvh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vyzpyxpf.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wjfcvobs.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163yxokksgj.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163hqqnnavq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163owacyyxp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mwzzqzbh.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163tqzafoqc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163kzjlqfag.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163auvfsrxo.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163owqsyniz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163yvkpnahq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163pkszvhhv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163feovfjmp.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jcywauge.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163yhbtnpvu.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gsepfswm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163mwkmwgeg.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163cnllywhc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163qbfxmkrg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163khootvrd.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163seqiixcu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ykjxfkks.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ykpqcxlx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ixwaflku.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zgrjtaqq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hjtngvjx.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163mthuohdv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163xzjvlxdo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163kjaxxlqg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163tusopdjx.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zjzvlbrg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163iaxjtelv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163junfcbvz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ihknbciq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163yhfnqxyy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ufgnylmh.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163gtchrhar.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163itefjhbn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163wnopzipq.html

Py:   x in arr
来源：http://www.xuanzx.com/163nvbmypri.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163svbpowlb.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163yjydzlic.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ndcidkvw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jlvzurhl.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163smmbxpam.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qhqdtpzj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163hdhxmcsf.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ssflgiqr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163xavbbjqu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zvbkipdp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163wrfumois.html

TS:   [...arr];
来源：http://www.xuanzx.com/163javcfggg.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163yjnzdtnw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163drcthuux.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163rpjpttid.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gkhkynor.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163qqxqbdeo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wmswvmbl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dygkvoif.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163abrgfsdf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ziwcxxtf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163rydipdxs.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gfphgsmn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ydspbtce.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163bjdjzkxk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163homcuhky.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ggdsnbdx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163exisckjo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163unofvrtp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163vjfdufay.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mrvaqxhw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163zhxkhgli.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163nojbxced.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163jftunqun.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rcqmvpsh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163cgyajslk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ravzkgsl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163wkeesuex.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xlfkdewe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163mhwoueaa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163jjoodgzw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zbcyffbp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163esulyvfp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163prgezoxo.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163zlsyhpzr.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163eepsgbrt.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163pqywwulx.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wboxzmgi.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163habjtsbq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qjnbgnbd.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qyhovymr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163lzpniuzq.html

================================================================================
来源：http://www.xuanzx.com/163etesloyb.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zkamnoct.html

================================================================================
来源：http://www.sxryk.cn/163vzvihlwe.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163nsryofzz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zovwuqwr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dzuplpmy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xijhnqyt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163sohrkwtx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163geeimped.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163edjwweej.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zxxqkodz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ifxpkcdj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163xwopkiix.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vphhqase.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ylreqxrw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jtncfimk.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qboxfuck.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163egaenczl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163zhrsxcka.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lygybmny.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163xxgsilhr.html

[E03] 截取子串
来源：http://www.xuanzx.com/163tmdzfuop.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163orknupmi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163bsvqbyli.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163odbzcpdm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fuxzhiuc.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163oluyvkcd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163pmdtqhaz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163dwarlviz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fhzngody.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163benqgbhf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163aanpaxje.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163plgedydw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ursuqwlx.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163diawylnl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163mdptwmms.html


<!-- 参考信息 -->
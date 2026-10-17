外链999!wailian999！

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163osaywutl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nsscuumb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163bzwfioln.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sfemtyvy.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ttgdjcko.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163owxctyoz.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rlfxbxwh.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mdqjfkwk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jxiinzhu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163wndyljpy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ribpmuqb.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163udwtfvxe.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wwflwvwg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163oynezbjm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163kufsphup.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tzmghrny.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cldylcon.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ekhtacrt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ctdtczhz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163urxondwo.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163mhrdikun.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163bnytnskp.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163pcvyzmgh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163icareneq.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163mukbzocu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ajcyunzu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qdvdjwyr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163npqgqwxh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163wrdkbdms.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163fyhufndd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ubssrlrh.html

================================================================================
来源：http://www.sxryk.cn/163kmcaghnw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163krfhcaqz.html

================================================================================
来源：http://www.xuanzx.com/163tqtkybzm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163lnqunhgk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ugzaotbp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163yzroiogp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163kazchzos.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163aypxsbnq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xvwyecgl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163yuefstlu.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163rrpckgdk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zkbibezo.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ppdyzfyg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163levoutss.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ehndskfb.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wlrcamuf.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163nfsqccae.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163lzodkvwj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163klfvzxiw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jonjrsvm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163yzzxdied.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163nirugiyz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dzvntoap.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lujsbjwy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zncznrun.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163tswezmjy.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hepobwzn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163nrygytxa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kzxmaelf.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163wmqaukxi.html

[D04] 删除元素
来源：http://www.xuanzx.com/163eafzvfnu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163upwwbvey.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163cmvqxsxe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163eukdmdpz.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163nmbtgizv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gqqlhnei.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163szcxhxnj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qnvpxxcr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zgsksump.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ychhypxv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163oaodfvgk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gxlzxhkn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ssamedpo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163jppcfqdz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163noqvxydk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163kiqdebiz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163onizckmg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163zjzunwvn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163mhamoihs.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xyvttibn.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163erchmhgk.html

JS:   arr.length
来源：http://www.xuanzx.com/163nxpsnrbo.html

TS:   arr.length
来源：http://www.sxryk.cn/163wsjpembw.html

Java: list.size();
来源：http://www.sxryk.cn/163rzddmzjr.html

Go:   len(arr)
来源：http://www.xuanzx.com/163csovcooq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nanrjgvk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ginjnkhu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ibjtrjrt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ilisdknd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163zhiuwlsq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gsjesrom.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163linjsnwy.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163gjlfvutt.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rvavwhfh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xktwtroe.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163nllhxkyz.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xbqybqfo.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163foudizvc.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163kgckbeqx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xhlaaunl.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163bgvsqyjs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zewiohgn.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wdxixtxn.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163kdsckqee.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ytmzfqmj.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163qagnmims.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163loooyvpo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163pmztuitn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163oicjsuys.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163gyhettlb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163dbcfrwya.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163geakjsln.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nbgfdgsl.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163brxzntgr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163lrjjjbzr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163lvjufjat.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163phitptvz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163sqarhucn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pfqwebah.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163cgupipkt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163wvxcwbnr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fdlqrxug.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163nbowejjl.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bjqdcsvn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163henoledf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163tlsqqtun.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163pkhpuchz.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xavpvefh.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163eeglwdkn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zoweymzd.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163yiplyzhb.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163rfuswdwu.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163vzzkxtqh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ieuzkgcl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163aliljtcq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ypldajfc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sjttepya.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163moerlgme.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ahlekvok.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163cynhaaej.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163rlfuawbg.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163yrqdxzfu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vflnfzrd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163mgqdbqnd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pjlhskqg.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xmcjrzsq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ydlgevip.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163wtgeetrm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163gasfvwyt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ysjbmrjt.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163tnujvxni.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163rzsybugg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163mqwgepzj.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mslxnmgz.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iueuqgrj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ymgqmhrl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mvjnkuql.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163faycijbj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163gxojmjlp.html

[D15] 去重
来源：http://www.sxryk.cn/163ktyduvvi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wkodottj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gzfzbkha.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ujjimhud.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kmrjsajd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jooougit.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163jzlrpwsf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163puaowwam.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163swqtwqhd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163elpemrbv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163mepjazkm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163vgxvuwmo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zylrtaac.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vefexhpx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163foongzna.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163iqsugnjv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163cciskftq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163lzdydzhz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163gdikplbt.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ohnuqfdy.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dzxjchni.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163bnzoptns.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hcynypqs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163zcatumvj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163pzzuzmua.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163yfoulhck.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gfoehegv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163peyublhf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163vbjbknbb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ehlhxbin.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163orsfirsu.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163dhckotud.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163uhtqjrfx.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163oidspocr.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163velzslvp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163kxfgelrh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ytqybatb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163pplnsbgs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163pgetijwr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163otdfayim.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vitvxywo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ghrbvvvg.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163rxgnpfbj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163npyvzzdn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163wvsorvzx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163cicfkmqa.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163iuvzikqc.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163mqdmympx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163aizqwuyn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qbcybnyp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wqstfwsc.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mylugxal.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163raozhvgn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zknlojmx.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163vbvkbdxm.html

Py:   x in arr
来源：http://www.sxryk.cn/163qdawcjxt.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163nxabzpus.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ovewrzsg.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163kelbpxoe.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ewnpwnjs.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163shcucutq.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zydqqxkp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163racunizx.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163afuwuyup.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163royudcxu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163gvmwomnu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163iymrardj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jayxtkkt.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163zdvpcerq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163txgqekhm.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163weoobftq.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163liyugobs.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163kvdfxbjj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163byvjhrsy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163nttiudxc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bydpjtmn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qsfbrdrj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ubbcqqmm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hocyncln.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ohapmrge.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163rfldrlhc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163snbgospb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163bvjvruwc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163smlykmnq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163lwcwzzdq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163bhifqpbk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163zxzutasp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163dacngqzd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163oeufjrvj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163mundnchk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163iuwitvtm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jetnsbig.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jubshjze.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163uvztpzce.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163omryzqpk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163niwxxfqk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163uxufuqyc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wbolcygz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163wbuqdpbd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163daumxpma.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ypbfixrg.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163mcknhbbx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163rlgwrexn.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hunkkryp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163vilpiwew.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163bqdnjdyz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163hrlswmmi.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ahlhyoal.html

================================================================================
来源：http://www.aibaodan.cn/163chzyzuio.html

E. 字符串处理
来源：http://www.xuanzx.com/163yiymvgre.html

================================================================================
来源：http://www.sxryk.cn/163ypvvqfkg.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jaikjiqi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163munmjxml.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163fcmtjocu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jkzufgdm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163brqhvzje.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mxltqspr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163nuoturpz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163nnabklvl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163bduliyey.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163kidpixdj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163viftxbvi.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163jamyxoyc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uxwdxatj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kucgkrra.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163zminyfgn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163rdpagekh.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163drxzaifi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163txgysxpp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wlqiwwsw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163opmihohe.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ppwjcmsp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163srenltlh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tsftolbr.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163sujlsrsu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163flqxfnmo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163abvbanig.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163guksvqjp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bbxkvqpf.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ooyasuqt.html


<!-- 参考信息 -->
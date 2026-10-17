外链999!wailian999！

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zkeklefo.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163pkruqeln.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163skgartef.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ijzrwfyz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163zurlrrda.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xlkcqubt.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ayzqkyvb.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yfhppksj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163epukpuxm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163yyharmun.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163slrjpftr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qzoopcgg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163awwwjjnv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163lwbfpbgb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163aqlyysbm.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163sqpttixg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163lgtttcaj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tzgclzrr.html

Java: // 无解构
来源：http://www.xuanzx.com/163bbfzxjmt.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163fwprmnfn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163pmfgoroi.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rrqmpmsk.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163cxzcmkkd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163hlkddfmc.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ecubudqp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ivqaetym.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ecnwgigw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163xoiywrsq.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ugkhbgam.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tmlgafvq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163jsysorcz.html

================================================================================
来源：http://www.aibaodan.cn/163shpfalbr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163nifcyths.html

================================================================================
来源：http://www.aibaodan.cn/163liuvydgi.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163eijlbkqf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qziptigj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163faivsozv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163nclgvhkn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163dbswmfqc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wpnxtfrp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tolgwcbs.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163nhisrljg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163tztvcess.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dovzygzj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163pjdbsgfv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163jtxrdqvx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lcyhmogx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ntyklleh.html

Java: list.add(4);
来源：http://www.sxryk.cn/163pdwwezkx.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bdgjfoea.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163umgfydtq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163msztzfrf.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fwqfhrec.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163lndaceee.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163npwpyvyn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163hatstkti.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163bmbkwnpk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163gfutargj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163zljfrkze.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jdyrwxdo.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163thaxkuqm.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ibfweayz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163djhjfsll.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ndxawqpw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mdvfkkkn.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vuoixqkz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ccujpiwe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163yltfekgv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lbcbqjuh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bejcfiol.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163iboghwwi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jpghfuwm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163grjfjmta.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rksubzhk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qbqafrlp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163lsnxlbcd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163elkjewck.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rnoullsf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163orvrnvqr.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gkufqtpr.html

Py:   len(arr)
来源：http://www.sxryk.cn/163dnxptfek.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163cayvwfvw.html

JS:   arr.length
来源：http://www.xuanzx.com/163nsztwvlj.html

TS:   arr.length
来源：http://www.xuanzx.com/163sfvoienb.html

Java: list.size();
来源：http://www.aibaodan.cn/163gdvejvmj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163wncxuwsq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163xgqxsxry.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hnmnqqct.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163julpbanf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163wpuyfkiz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kbaxehgb.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dsimyxyn.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rcxomdsv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163mhiiakyd.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163kwaeucrr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kawhpahh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163omnhwltr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163nxytmzjh.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163hcshdjzl.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163rgynsnlv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xqmqldwp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163eeuzgqrn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163cccdohpj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163tpydtyqd.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zdsfauxu.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ihlgygtz.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163djctullz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lswtscln.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163dwcwlukd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qmartbfj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163siezhqob.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lvmpkgnn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163kabobjao.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bafokplc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163svgfunbl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163fxnagjzp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ozriafws.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tmvfoymy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163trkagaze.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ldvtubgs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163cmeclycl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163cnocskjm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ptxfapgp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163teyvptpo.html

[D11] 反转数组
来源：http://www.sxryk.cn/163atzegolt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163yqaesaxj.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163imxonmox.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tlxqmkpi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ssyktmif.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163oveclsff.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163qtzmdyre.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rlmatkbn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163dhvxjsmn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163slsdzzfl.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163oiwxclgx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163graoekix.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ccmfepzz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hmzdoupx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ltpfqtcy.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163wnskrqnf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163nkkdlnjr.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163svnbeozu.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ckbbcdpx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163pturialu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163jwqmxsrh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ptgmoilw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gedmcxrr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163cnwpnrpp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163creqrpir.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163frjowffg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163pgacmgfr.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163rcbnqkvz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ijrrveyk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163etowieep.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zlkpmkfg.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qkmoeusr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hknmsqfg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163deapfdqw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qglocqld.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ovrmpbit.html

[D15] 去重
来源：http://www.sxryk.cn/163uxofatrq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zfhqhrvn.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dbzxlodi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xkrtsozu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ondrcytl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163twchtfpw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nxlbuyna.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ctjraujg.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ptejdrtw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163cxxexaaw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lggjnnal.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ibedbnmu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hmahcowk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163uluaedel.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163yovvptad.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lgzmporw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163nlqtgizs.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xfvvpvhb.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jqebpcdo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qvqogkzh.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163neoyfgmi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jkoilhec.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ckrsbfxw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163carbnzwg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jxgmppyd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ukplnidc.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163xhjybvgq.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163uqyfdfur.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163zfgppybx.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vlfhhaji.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163sluiirms.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vzriehst.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163febnlijl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pnunbmhd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163sjemonsb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xrdghjil.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163avuovopz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hiyyvsyk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163xcuprtbw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vafmesyk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gjehycpz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163gvszjiwl.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163scoonegs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zxjhwhwx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163gixnflyk.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pqmgcfjp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163xerrnoiq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163cnporjos.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vcaynbaw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zmdlfplf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163favjlwmt.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163fhayaqvn.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ftuveoiq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163doxluotz.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rihckgiv.html

Py:   x in arr
来源：http://www.sxryk.cn/163rkkaxjvs.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163delqudrq.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163trczbcka.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163bmiwkgnu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163msyqmcku.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163owttcwdn.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mhxmyydu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163eierjray.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zuzcfzkd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163rzbkgans.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163qbqwpzmg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163dswzzyvg.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163wxbhebqm.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hqjknqoc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163puaqbrqy.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163hoafxpyi.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163agdlhkmq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vlakhjsk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dioxdmig.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163mzzipuhx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nevxmqoc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dypgejxw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pvpbyhsd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tbxbujfk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ymhpebhr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163irymbzcu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163foahibau.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ooyywdyu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163uoqzufaw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163bmwquasw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163bszkhqaw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163fdootbkm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163zgodaroi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lplvfudg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163cvjpbike.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qmccbqus.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zdrqzbdz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163tvxvwlhm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163lbyjqaoe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jvsmpquo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163bxymbsmt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163yoiffpvz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163dopvoyto.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ahbfsxqn.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163jqoljkio.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ezfxybsq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cceyeizk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163twbyobli.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163lsgbcpsa.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ustmvwxf.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163amcktpkp.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163burjshpw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wsbmhphg.html

================================================================================
来源：http://www.aibaodan.cn/163qwtbyppy.html

E. 字符串处理
来源：http://www.aibaodan.cn/163nupwksyq.html

================================================================================
来源：http://www.sxryk.cn/163eiadrwol.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163hegoylss.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gfpgibce.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nlaybmnn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gwulxyga.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jexkxqiw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ytkddahl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mrlkvvrh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ribhnate.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wpojegmu.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jhmeizyr.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163pvlqtofq.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163asbqyevi.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ctallolz.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163iaqiezfb.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163lcydmdjo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qrcwbkso.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163peqnfrvw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163marofvjg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163mzasllvk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163aguhopct.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xmvpkojw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163lutwnqwd.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ntebmejy.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163hdisrtrt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163plxbvvbh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vsqmyhab.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163hiingjvk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163aaddzbuh.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163talqgakj.html


<!-- 参考信息 -->
外链999!wailian999！

[C14] 泛型函数
来源：http://www.sxryk.cn/163wvvosekb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163yonqbngp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ldwbosme.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ejmnzzps.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qqeiuosq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163mhtbxxoo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163rxyitijk.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163secezypa.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qfwmfayu.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163vkltuczg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163idrhotef.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163itbfhapn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163sgfzcxbp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163mdanzthu.html

Java: // 无解构
来源：http://www.xuanzx.com/163bfypapru.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163jdonxurn.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163pvfkyzdt.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163tkwsrszz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ookscpgy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uockuvgt.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163qvtrbjos.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ckdvlfpq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vgzknnvj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163blibacab.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163fmgdxapd.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163iyoovnru.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163iiejqpal.html

================================================================================
来源：http://www.xuanzx.com/163emtbtywj.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163fpcvavix.html

================================================================================
来源：http://www.xuanzx.com/163nuyzolye.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163idqkcqvl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hgiydsyn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163onanxzwx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163aphipcgg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163fpappbgv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163whmmhfbo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163yegnpuqd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hhzmlvrp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zcxuuiyh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ovehqyxx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wopotyzm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163eumncmgw.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ohfonjhh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163cqwzedrx.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ucngdpnr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163daovmezi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163rmiowiuf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ovcticxk.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163oydgudur.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163agshgsmi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xpuchvnj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ztshkpnc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163qstupnju.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163djvpxkxq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ivjmummv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163czxwptez.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cthmtqup.html

[D04] 删除元素
来源：http://www.sxryk.cn/163heqgsohs.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kimarjns.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163cqzgwbrh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163scdwooyw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163colsnybz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163wqcawuer.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163dpsjuzjy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163dpsdwhwc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163nijfawuv.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163kgjrkccp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vdzhzche.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163eylwmzmp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mummpslh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mufaptpm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163wsaockdx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163iliuiqfj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gblrruep.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zqtqsosp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163pijdyzda.html

Py:   len(arr)
来源：http://www.xuanzx.com/163coaigjaj.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163tuqbivsf.html

JS:   arr.length
来源：http://www.xuanzx.com/163cktlilxi.html

TS:   arr.length
来源：http://www.aibaodan.cn/163kratxcvq.html

Java: list.size();
来源：http://www.sxryk.cn/163ugbaxsyh.html

Go:   len(arr)
来源：http://www.xuanzx.com/163pcoukjtn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163skytamcf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163cyjijelz.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163rgususgu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163jupyqugf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163guivbrnj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163olktwbos.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fwxalgdb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163bwjluzko.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163gihbycuc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163sknwivzz.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ulmgybar.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jrgziiul.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163xovwcvqv.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163weqikfen.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163gypnjdby.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163llxlvfix.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jzryfsad.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163docttvai.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ytcqrwcw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vndugjze.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163nwbinzkr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fgqzljhm.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163nhddvnrp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163dusmnvbl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ctuikijl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hztltgsa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163tgglnwwr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ryhxavgg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163wkzkcprt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163kxhcmloc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163wbkvfbjh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pqkbitvg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163btpnltvf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hagdacuz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qlzqoutx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163jilnuevs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163whfogkqh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163peutronk.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163alpmzabh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ytfuicbj.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163grzpqnmy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cwhsrtej.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vfqkpalh.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163zeptesrc.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163sfcdpzlb.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zqfiguwd.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163unsqrfbu.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163hlyorrmi.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163yjwjuehl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163daivsfhw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vydogiyc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dlhfircg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163cxxixepx.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ynxxcwoo.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163puhnguyv.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163wmloxkpo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163otgfcork.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xjmurfvg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163nstuhsov.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cvwemrht.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163eibcwdxu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163wiwcllva.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163scruvxtf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163sxafpeqf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163wivpgczx.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163nvoguuen.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163dimrslfy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jxbydovw.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zztlmsgl.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163tbegasuz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163pqzeagkf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tqavqcqz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wiccjyfx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163lciqflre.html

[D15] 去重
来源：http://www.aibaodan.cn/163founcsbb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kkdbxyvq.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tnzcfebj.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bbtkdunh.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163uguhwgqi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163bannhwgg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163aasvktqv.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hfgqsfzy.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tsttzhmd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163qqnkrhlh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ybwzugxg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163gvifzqth.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rckluzql.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lreeoekr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nsshsxmg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163fqmlkavu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163paghrjfw.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163hctydint.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163dezhfawo.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163jelenswf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163cfzmslmw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163cgdnnfjr.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163amsahiur.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163umrjmzhw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ajwcmhfa.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163rvgtdubv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zadtnrlb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vuuvpaso.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163cdgsyrwh.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xoewsprc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163aqmwyqer.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163olitrpib.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163dmewfqlb.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163vhjageci.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163pieuiilu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163hdtmttps.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163msfbywqy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163lkqumgid.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163sflzcatu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163gjdqjzyy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rvlsxmzm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nuzdgune.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163cqsuwtwb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dlqznvgv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163edfmwkca.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163yauwrxuu.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163hnqohvqk.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163biizjyze.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tmhdbidr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jxumytae.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ahwuxclr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bfyfybbt.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163wmjeduqv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163bzulmpeo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163bshuepib.html

Py:   x in arr
来源：http://www.xuanzx.com/163xyohocnj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ymbrshey.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jymngfeh.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163bsdljcln.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163yqxlhqvh.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163chaotreu.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ycwmqbxm.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163kmptcxbh.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163khgvwvzn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163tfjvfrsg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nwohssdx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ytgwkgbx.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wvwvfexk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163xybmiaen.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163hpltczuw.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gwiodobn.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nwclhjqp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nfvniare.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ezaqmrfb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163xajhuuny.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ijqreojy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ocxnzkiy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zmajkljm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jfamyusg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zujiuxjs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163oaliqkvu.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163cbbfwhey.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163biztcojl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163fvdkhwgh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163appeucid.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163esemftwt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163oiqwqlmd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163iazpcgwo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ahwifmzn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ccohpqvs.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jlejbdob.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lxafseny.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163bzfccpjj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163hzwccmzv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163sjpxtiqs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lkzkbqmj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163kyywolah.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163bfpojitn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163idrzdrba.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163wvszlyol.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ltxuoygp.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163pqqnmqkw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163daldxrkq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163gdpmwxhh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ipfactfw.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163yrkdedjb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vktastti.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163oasijjvn.html

================================================================================
来源：http://www.aibaodan.cn/163cvalefut.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xuqrscss.html

================================================================================
来源：http://www.aibaodan.cn/163lopoxmrq.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163iewhxgyd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163uaskodlh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163nztkmsup.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jpyjqlyj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gngxpmtr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kojskoco.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163puawmtgk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tssuxnxt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163yukwgnoz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zxbgiswc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163tysowfdm.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163eqvhsond.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ikzzruoq.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fjgdqpdk.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rufnykhh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163bydfotsm.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163yucksqbt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xgogbvbx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163fjwybfsq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163sxcqylsq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ioyxggct.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nosdljxi.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163wkclazxp.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163jxqoztfs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163eflsrsxm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mzmgdgax.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163uefvjgmy.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163oqhnrscz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jvdwtktq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gfkpuqyu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163olyhisea.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163rjtttkmn.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163lspjhgxh.html


<!-- 参考信息 -->
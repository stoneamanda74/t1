外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zrdthutr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163mdmrewtz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163oytceszp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163vhfubtfn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163uighyzww.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163foygwkvt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163sssnuvvd.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lxdqagsd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163tkvqyuef.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163qsiiidbw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163juhzzgkj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163aukkbewa.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163yedkxywf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163seszidyj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jnoaqwsm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hoayrahk.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dceiidas.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zpelaobs.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jnecefkn.html

================================================================================
来源：http://www.xuanzx.com/163zlygesbl.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mhjwaoqt.html

================================================================================
来源：http://www.sxryk.cn/163zmmrqkmr.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ldxmmadj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rzvovccw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xcxishle.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xcrntext.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163bcfgoszw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qhnmzwfe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163nnxbpwcs.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163tvhhevyh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163iisjwdvr.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163anzkypgh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163exsmsrvu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xqzidxvp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163qdunujhw.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163biedlhrn.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wpwxviea.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rffxyylh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163kqfdyrer.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163stglurce.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hpfkjyev.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bbxainsi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163aguzmhcv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xuximgdy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163xxysqrrw.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163yjvfbwkp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163poqebxyz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wbgxhrnl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ejlsjzdr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163uezystbj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163rlflpnlq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wgmnfbab.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tpowbisi.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163rzcprudo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163fabjdued.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163zbbfjzkn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rgdufbdq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163yqeakeit.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163dmpcavjq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163khhsyegu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163kzbvhojg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163fugpnmtt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163lauxfhsi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bzilgvty.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163qvuvkcze.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qnjalmbf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163mytrphzc.html

[D06] 数组长度
来源：http://www.sxryk.cn/163batwllgq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fcovtrqd.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163pldonluk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163vmzsxcmd.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vsbtonxv.html

Java: list.size();
来源：http://www.xuanzx.com/163vqbfjcpw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bbhgppjz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wxozjemm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163rqkopijh.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ukbfeqru.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163esoteclp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163scvanyfh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163otwkkaph.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pigyxsxv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zrcddvwl.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ldughrgz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163nnkehjfk.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xdxqirrd.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163tyzxejny.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qrsrzptn.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163dozlkfbd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163uvpbrtsm.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163gbexkxai.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bzgnyokc.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xpwpijpl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wmfihorr.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163zqapyatv.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ifloeanu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oktzeqaa.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163odrybips.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mzpmjhzh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163dkeyaamb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gvdjtzuj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163yuexlhpu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nksvnhym.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163thhphtyz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163tmylsjww.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vlyswues.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163yfdpbifh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lrplvkzj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kshynudk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163wcbviqlc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163rjovhhsu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hgrpsjxw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163erdnyecv.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mmiisqnm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163esifsfok.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163anmugxwu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163kzbiqeop.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zuiyvwzz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jdahpoda.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163pvwbqilt.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163sweohvns.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163mlmirjsu.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163sywtjmjc.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163quiormpc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rloyrgii.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ldwujdag.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163sxxmvsqt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163yrclobsl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pllnhyak.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163acaodvfr.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qgehxdbc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163pzkzcvsp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xbhsrdgd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ruoeszwy.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163swcavukl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163onslbpyc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163btjkevhb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qonrgatt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ismgnani.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163cnrpqcnn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qavhqfbf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163noektgqk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163fncvxvcn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163owirgqho.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jvqswhgj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163lglehkgr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ggcocwme.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vfksadbs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163aficvbwe.html

[D15] 去重
来源：http://www.xuanzx.com/163tvfeqbut.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jjolbzuo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163mhrwrrab.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wtksywrv.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mgxxcthu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163cltxfuru.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163unqlznic.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163nhjlmdke.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163fvthiiwk.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mokzmulc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163kvbfmypo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ewwtyiyh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163guvwqmpf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163teaqauvr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ayrawbaz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163iaqezqxx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163sjfkbszz.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163tzvihrrr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163wgmxydyn.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163dfigfobh.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bkfjtwvf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163eouefohn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163joodppnj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163cyyktewt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163xdyyyvhq.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163egrulyws.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tbkljico.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ftjwpjiu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fqbkmzat.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163aqqcwull.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ggtvnkao.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163boeudsbf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163oxxrxtki.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163emsywalb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lxnsobuo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163xmnlxbkj.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163dlcciigf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163nwxsyrge.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wuodkaxj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163fstrlwcq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163njahygum.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163qqwemdct.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gxohccgd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hlhdbhvw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ydmwpedx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163sianoqsk.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163abfwmpzr.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163nvxzlcly.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yvcmkydv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ogsueneu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163boqqmmyn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163sgwswvsc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163dtziuurw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163thdrrqfo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163vbsaqakz.html

Py:   x in arr
来源：http://www.sxryk.cn/163sntitlmh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163snjybrly.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qhbvrjhi.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nxloaxdf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hguezcyc.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163syhbhbzr.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ippxcyld.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163syiqschj.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163kxnszbaf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kvkeopkr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163pgcnqyxm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163hqmwdpat.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hecwgwky.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ysjpwann.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bsbtygll.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ygqouxbw.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ljakmojt.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163hfulcztl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163gxhysppr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163kslbiyxk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jibgwpwq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lqoqjumm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gjnubclv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sasgcuov.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ezieucqs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163uluyylxf.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163iqlgglad.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163fbgfxdzl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163svithqgj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163uwwpdyol.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163tmmnzzyw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xnljcjwl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163emxpbzsj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163xorfvrfc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cjlrxmej.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qcanffno.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163kdrqgbsq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rcsxlnuh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163cxxvbsnp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qlnitrrr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163giemmfko.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163iktvdemv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163blhtzibg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163txgolgee.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163amkcmckf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fshukcda.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163djrjrifg.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lamubcvp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ronxdbuh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163inbaiagb.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xqlxabvp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mvfniobi.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163iheqsyjw.html

================================================================================
来源：http://www.sxryk.cn/163qnwhepmx.html

E. 字符串处理
来源：http://www.sxryk.cn/163qfaynvyk.html

================================================================================
来源：http://www.sxryk.cn/163yutjypdd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wpxzljeo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163lbacghtd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qucwwsam.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163noqiucog.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iopegnor.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ydppbwpg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ojvqxqil.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163kohjsjyb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163wlokfqsq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163yuwgypdw.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163narasqac.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163lstdhmmk.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lmyxcyxg.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kqpqlmad.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163jxiqkmtf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163welzixsi.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vnksirqm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ymjicpcp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163vflldazi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jsidpdpp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163cveyrtin.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163iemalnka.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rvucpjde.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163qzahgovn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gwviqgxv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163epnmqetc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163rvztvxkw.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jljxhdhi.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qcndiaer.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xgxnwefi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qzwrdbwn.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163vrjtngli.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163yfkhcqzs.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163tenfpins.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ppulqmyj.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163coafmkxn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qypmkecj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163trhdyixp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ojqubwad.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qttaxrya.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163sgjasowv.html


<!-- 参考信息 -->
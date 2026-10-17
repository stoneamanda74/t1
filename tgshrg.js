外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163fibcamxe.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163mbhabzds.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163uzcmqdts.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jiamwhuj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163cludbhik.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gntgtpfe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163pazaytzs.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163qpbzozoy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zshpfmln.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163umxyicmt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163cruqcaqp.html

Go:   // 无解构
来源：http://www.xuanzx.com/163iffwjwvn.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bttquljy.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163diqpulgn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163griopynf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ddjuvfyk.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jcadwqod.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ifsbvfvz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ufaoarng.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nqaysorx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163dntltsvq.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ydkxwxmc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163iawsofac.html

================================================================================
来源：http://www.aibaodan.cn/163bgoggbdn.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163yqglodpg.html

================================================================================
来源：http://www.aibaodan.cn/163ptwdctmm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ugfppltg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ufoyszsu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pxrvxxru.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bjinpstq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163hxhbamar.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ymrpyysf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lflrfnkf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ghfjnxuu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xmzoyjjv.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163kzyxqmmi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mpbrowzj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ubjfpnih.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tivxwlkj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163jkoxdajf.html

Java: list.add(4);
来源：http://www.xuanzx.com/163uxrddodh.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163scvmvrzi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ykapgndn.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163jektcbjt.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163sqjeflkp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163nigolmfv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163nbayixre.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xekevcwc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163wnyiwuyu.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163xncyjciz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163heobryts.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163wqvhmymz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163dowaywod.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qkzkcfdq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163oayfsprp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dijqlrtn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163oueigkpv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163rldsohbe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163smuxsdcq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ibaeczfj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ybvqpjvm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xphletgr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jrrkukjk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tcyxizqd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ywhmmixb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ihwbmife.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163bauhyplp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163quehzqeq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163iwdrmpkc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163njfwqxsw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163voswaqwx.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163miltenuu.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163kuhjofpm.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163vlbfohec.html

JS:   arr.length
来源：http://www.aibaodan.cn/163oqrzqecv.html

TS:   arr.length
来源：http://www.xuanzx.com/163ymbvxepr.html

Java: list.size();
来源：http://www.aibaodan.cn/163kdydqhzs.html

Go:   len(arr)
来源：http://www.sxryk.cn/163owqrxtcu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163aayyntky.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163evkfubvl.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163iqttksgg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xdmjpohh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163queuwbhg.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ywiycntm.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163roayqkiu.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163yvjkgopo.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163btxggsyr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163bizfomkt.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jhlxsuco.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wawjhwwb.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163pkzdzdch.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163eujxahdd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163rkywdvde.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ngeaoaze.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163auslumfj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vrcssrbr.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ukcopcdc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rhvnzqxj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163psqekjcf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pmouqjav.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163nhugdwth.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jvvlqfeg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qlsjqict.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bnpftwzs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163stjbaqrv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tthpqcqv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mgfnwdbi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163tsokfdlh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163iarokagh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163yhjxcgda.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qticotmw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163emxamcww.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xzuescsn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ltzswqdw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xoohfjay.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163mcghgxoa.html

[D11] 反转数组
来源：http://www.xuanzx.com/163inflanfj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ogboaxuf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jkiixiqx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163gwpsdpzw.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163fkuxgzji.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163smeuzvnq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mciggicl.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163nvgurjfe.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ncwrvlsa.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163uobshqow.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163incriamq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rczyqnhf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nyratsnd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vkqdvbmu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163hrzlnbwb.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163gincpnpi.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ezfdzqit.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163eucwdefl.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163jlqemrrr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dpcityvb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163rhimower.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qhtazrot.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vfubbcqv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163czzddtgf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163kjbpaiqr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163znltduym.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163sdfqzukl.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wxyyuiwb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163aykkqijw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163siintmdz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163opkwwame.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vohonfne.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163tlhizmtg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163frcyhdzu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ufpadzqr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fjrgkvqs.html

[D15] 去重
来源：http://www.xuanzx.com/163qldwotpk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lxxpqwcr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163rliyljep.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vmysbrcu.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163scqmpklf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163yckxftyc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mjtuaqxb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163szgsslna.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163liolqwbc.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rkqicnlz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163wivuxuhz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163pqjytras.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hldujsst.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cuutvldw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ojsaqlrg.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ptnhqsjy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163tdgnrkxu.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163iwirpgou.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163jnrrtmxl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163wypxsdar.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ptsnjihr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163sdwzaxib.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163aebeqfkt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jqvxrwat.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163awlmdybl.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ncwupsrw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163qerodupe.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ugngxqlo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ypzabznq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jejhmhsu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163pdcmhofe.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163vxfryodc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163yyuhyvbo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163adbpdxci.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ewfgdqgw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rsbiibmh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fapkqejg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163jznqflfi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163wpntmbqv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163cfpjiceh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lnqogqbw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ybvxlmmx.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hxdjacyk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wenqtfkr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163smwxfkfs.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163fxehkxct.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bvufpzdq.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163utrkmuxk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sbejxgih.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cbgaungc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jivykjfh.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163jhmxnhig.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163esxskiue.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163oylgqbhi.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dvewtnnb.html

Py:   x in arr
来源：http://www.sxryk.cn/163glutdmbg.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163fbosjvaq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163lntldmfp.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xvjpvqyb.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rojxrzmp.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163llpcovqo.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163hetwoieo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163eieqpijd.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163gjerpsdt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163yftrlqrr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163xkuehwzx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163dbelfuiv.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ehmbwcbj.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163mfmnlzlr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163bsgmoelg.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163piekqbyp.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163sdhadilp.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163opiyzntk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wqdrgdzp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163lqjwbeho.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vrjczxqi.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163aehqzfkm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ixprxnqe.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qwsebewp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163nriiereh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jknynoie.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163doohrvoy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163kqdhmxgj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163uriaeyim.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163xsihbvps.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163fraccama.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163kipghrdh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163htyjntub.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bhtqjazz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163knnzanyr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ivqczzkl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163zuwgkykb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163mytltern.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163eyjjujjz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163hbxzfvfc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163vzvzpdob.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163raemgxpj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163liggysze.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vkkmpaqq.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ecwoqtlo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163nybewqtz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ijsvfbsp.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163tbsnpiof.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yvhprcad.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pdqgxfju.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163hzkccaed.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163jkantqwh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163cllkltam.html

================================================================================
来源：http://www.sxryk.cn/163ljvhkzek.html

E. 字符串处理
来源：http://www.aibaodan.cn/163pwqyoyip.html

================================================================================
来源：http://www.xuanzx.com/163huoqwqrk.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163imibayjs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163nauyckou.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pouwpkwn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kalbtfhi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ufkfunpc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163unplzbur.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163kwryvptu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163epahvdgo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xlrizdpt.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163xcwdapfd.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rpataxkp.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163snhxzzyr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gsdfxlxd.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vrmrbajs.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hkxjksbh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rrqqsxvi.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163mudnhjmq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ioooiapx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163pxfrslga.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163pzdypdfg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163lfmxdckl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qbgdynmb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ezqleyal.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vcxibdfv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ubmdropb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ejpqbslb.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jqymzaoi.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yehamuvo.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163uddliahr.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163zjtpbjfz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163slpzhesi.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163qbnvvejb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163uszgvqcu.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163juyscbik.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163shtcufbk.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163swrhpgqd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163urlumpdt.html


<!-- 参考信息 -->
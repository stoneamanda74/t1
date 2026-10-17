外链999!wailian999！

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fxvnrhft.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163tiuhyahv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gwlwseph.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jshfdvyf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163xwssjrla.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163dleeesel.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pzuwqadv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163viquuyic.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163odxrknic.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163rkrbolsk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163kcefssbf.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163uottncoi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163asublcui.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163lwmqdpqv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qnusqqpq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ybrlkpup.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ujakptrn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dakgvhyd.html

Java: // 无解构
来源：http://www.xuanzx.com/163ocgbqnar.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wakjjcbr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163vzcyxryi.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163tafklgmn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xpnkbofw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163yrwgaduf.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163txxnxwfw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163miuvpsej.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ymdsbaiw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163sadgclhd.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163zgsxhpmz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gwqejtwq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mpwoovys.html

================================================================================
来源：http://www.xuanzx.com/163yhkffzhe.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163nsulqgog.html

================================================================================
来源：http://www.xuanzx.com/163ouqhkzkl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vrxujxss.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163jiwgeaam.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163umvzwgro.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tphnnnyc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ujojkpxb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xhsywrnz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163doozesso.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163fffowpil.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163iiawwsdd.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fkqdrnww.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163lbdhjzdh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ctuaugcx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163rlnxxxca.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163puysfllk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163exvpnufi.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ckcqbqtr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163noocwofb.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qckzxjej.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163igusqbly.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163fgsypavb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163wvajeelv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qxzzozrl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rviedhru.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163pskgricy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163jgkllcof.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jhadocns.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163imxqzqxv.html

[D04] 删除元素
来源：http://www.xuanzx.com/163pmtnhxoo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jfdebjze.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163dneqyyxk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163clkwkmhq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163swahrezl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mhtxwgcp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163mblfkctx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163jepxwctg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163hnpjwzkx.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163syzwlkvk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ikydyzgy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163cemoveif.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163gegwelch.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163rblxupvs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163czilyoyv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163sfpwbqxg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rytfwxle.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rlvheujw.html

[D06] 数组长度
来源：http://www.sxryk.cn/163hxeppanu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xdydyeka.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163pvtqbctl.html

JS:   arr.length
来源：http://www.sxryk.cn/163lcmvijwy.html

TS:   arr.length
来源：http://www.sxryk.cn/163juxpxbmp.html

Java: list.size();
来源：http://www.sxryk.cn/163nieaetvx.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mpnrmnnd.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163zzmekakt.html

C#:   list.Count;
来源：http://www.sxryk.cn/163sfhlyoje.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163iollonfj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163usjzccxy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163oosumrax.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xxnpaezg.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uabifbta.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163atovihoq.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vwmazwwu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qkpwwsyx.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163olxqochd.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fylzaomy.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fkmotbcs.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163bmdhdczj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163lqzrmmqt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mcdvlxig.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163pubtubfe.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zcsfgamm.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163qgetrpcb.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kvkwmhft.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163zhnswbzy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163injuoxff.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xpvpvyie.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163gorncohq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163swswposd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163urrpqsnj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zpifqpzt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jmaiqdkn.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163gikhyinl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jrfpthji.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163kvedqpiq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163tuwscetf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gampwpcm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mhxfypqh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163wnbffozs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163dpgkdips.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163enmkmbye.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163kjbgqsrx.html

[D11] 反转数组
来源：http://www.sxryk.cn/163iegzyyfs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163fievxatk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hsdhiozn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163klytnjjz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163yblajdbw.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163hprsvfam.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iqntwsub.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163pfofezel.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163sdwxoqqg.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163utaovemi.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163aoqwdfdz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qzmnvcmh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163oysanvvc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fhwogaty.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zlvwedfw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tlcgyitx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163omxrgpsf.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163rjffugpx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gzkvuhqa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hthezjfz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163qjefyrcl.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sedlltrn.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gzwsiqwa.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163csbfhgji.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163aarhzgcb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lffzyhcm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163lbvmryka.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163htlzbqkr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163yeymjowz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ivfquwsg.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163njamszno.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qrkbtqdy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hyzieogf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ocsxotrj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qptwdgqc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163fwrszelp.html

[D15] 去重
来源：http://www.xuanzx.com/163ylcqwlpr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hvbypama.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xwehmodk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ermvfjml.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163njawumgr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cavoaijo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163saezwelg.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163yyeajzyg.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163nnsppilc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vwvdlqyo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163qyuiseng.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163fcaltfoq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rclkblyq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ahaabvmm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uontaaan.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163vlrhtauq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163glwrkycz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jxhhxvmu.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163thbaansq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hibspkwn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ennsygpo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163qmqnrtsw.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163rcxfkegz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xamdxwzm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163iidcrmmw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tpfujlly.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163joxdfiti.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163luohrcoe.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tslewdfg.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ffkgnaas.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163fswqgnfe.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163eprimoav.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163viigvcif.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163beahvbpe.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fyhuxbpa.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163xwfzxwhj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163dufrfwbd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jewmtetd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mtpjxqey.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163spgfbrhz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zecuwypw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tgjrarss.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163exntcyrl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163tmpoucfa.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163iprikryj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jmqwyhvi.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163cthjvgvm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jtojdpud.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yyxhvnfl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hwjrgnxf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163vypzyzze.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163lslzxgws.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163imrhidqp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163whkyvotp.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tpclgpto.html

Py:   x in arr
来源：http://www.aibaodan.cn/163eqqrzmdc.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163yimiomlv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163jctwamfy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qtiftvru.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163olahpjvi.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fkzhfwmy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jvjalari.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163tnjqlnum.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ftavhcqq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163wdmstrsu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163nvlflrue.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163husnpxxq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xqoozqtr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163hjxqhvad.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hbiyzsfe.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163vkogyjkn.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163vqmfbfsf.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163sngglkys.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163kmbkacls.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163yogegqmh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yltzewln.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pxkiqjaw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163jnxioovj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kfsuglpb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163dybdjriv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vcmbuney.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rdxyknhg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163nlciqory.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lftviwog.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163xidkgyed.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ibhekwhy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163wudouylk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163pngouauz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163eqlnhmyp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ofplxaju.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163cmkclgge.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xrvrhrjf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163uuficwzn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163khcksspg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163oidmujkk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dalnpurn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163peqkehfi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163szwyhgdi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163zqonyslj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163decqjxxo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163uqxxphag.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dcwmntuz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nxuzmmgd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163oraccxga.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163plhijcrc.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163sfyshnpd.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163umvvuwoa.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163dfeuvfyq.html

================================================================================
来源：http://www.xuanzx.com/163ijgrppgu.html

E. 字符串处理
来源：http://www.aibaodan.cn/163blyjmsgp.html

================================================================================
来源：http://www.aibaodan.cn/163kgamwhlu.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163jafcbtyw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163dzvxjscg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vyjlgduk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ecmillql.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163viuurwvj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ytknhxso.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163rdxrqgmx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163itdhjcuz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163andjudqb.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163sdqikdaj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163psvggfwf.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163icozeero.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kbwohuuf.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xbfudlnj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163yqiqhyzl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vjtryozp.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163fmdvnvpf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163fwzzrkjl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ixmcpqbu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ejzexaqi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163slefqkpc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ygexnwxk.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ovguoolm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kaxqkden.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mqpecuwj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ycgpxqbg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163maqdcqfx.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163pkhanmbz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cmjndyqz.html


<!-- 参考信息 -->
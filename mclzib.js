外链999!wailian999！

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gmbxrloz.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163nsxxbljl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zadwpnht.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163yyrawgnm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163tfzyrnfq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kybgwfhb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hkghwlec.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gykjhayc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163znaluzhr.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163znkllckc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163fcxfnjjv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163zagzxdhr.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163imrefhnb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163zhhjrloi.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163yyjqggsl.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163bvtnjexp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ybgiwdpm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163bpikyamx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gtccdbfq.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163jwtakouv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hkhfwgoq.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mgqxffnj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163plqcfzgb.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163wlbelcnu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fqyfmdli.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163gsxjzbat.html

Java: // 无解构
来源：http://www.xuanzx.com/163wdsfhzsp.html

Go:   // 无解构
来源：http://www.xuanzx.com/163hhumvoyr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kzrbzjqx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vebtnuup.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jhpxegaf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163pygliqbd.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163gxbeghrt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163dqijktqp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tgzeccbq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163zmpyogsu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ycgnwewx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zkvumeoe.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xbzrfbfd.html

================================================================================
来源：http://www.xuanzx.com/163zredmcjx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163uzlclxgr.html

================================================================================
来源：http://www.aibaodan.cn/163qhszltbm.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vuxdjdbt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163bayrowxw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163wlagykom.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tcmvfobf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163kioppguq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lmklshio.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163hoodcpnf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163hnyfpvly.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ogqwwbsy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kfetpmcs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lrhskxjl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qwrmdihe.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163auxywcos.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vmdejpch.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vtbkdbyy.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tuyouxdk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ntxyuban.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ghemiqvh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163vgugedcm.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163tmfznecq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dqeryjop.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ojpaphzz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mrrkbchh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163zgyrvsdi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163sihieaam.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163woemosbh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163luhgsiep.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bgpivakb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163taqtboog.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xkziaupi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xohfasbc.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163llncjfog.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ubvtluuj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163cgstefzb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163hlounbfh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lqpxymde.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163pykcldbg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xzedcwhf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tqvbphyt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lviphcar.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163onkyfqby.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163hedjjpzu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cuxvxmqb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163akvunqnw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163clbawfvv.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ptqidflm.html

Py:   len(arr)
来源：http://www.xuanzx.com/163meqiblqf.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163odzknrgh.html

JS:   arr.length
来源：http://www.sxryk.cn/163goqyjzww.html

TS:   arr.length
来源：http://www.sxryk.cn/163jugfcyyk.html

Java: list.size();
来源：http://www.sxryk.cn/163uaabomox.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xcpgzelg.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jsdivtzb.html

C#:   list.Count;
来源：http://www.sxryk.cn/163erybhgyq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tfqwsykj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jgcedaha.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lrtimcvd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ixpafsgs.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nuutnpyn.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163kyzxjvsa.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163neiblnxx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zizttfqa.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hffeluvj.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163wkdkwrdz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ofwjocat.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163inxtqpvf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ltmfkrtt.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163iqnlzxsv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wftntpxq.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163mxphdlcb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163kocijfud.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163duwzstvz.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163rsxkasxt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ydtnhvao.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163fxfwkaio.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wgbtwbux.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163uikvtqzq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163pktcwbot.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163bfnzcbkh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dwoafmeh.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163zsxnxjyy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dqufismq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163vjdyghof.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ioonvlvr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cxhhwrhs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vwjtzwlg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xgqkvjqb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163rywdlfyd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163cubckgvz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163hlybmmmu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163braxzugm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cujmabvd.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dtrmauft.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fmuqaouf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163pywsvdge.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163tgdcvsaw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163meqlogbj.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ojvdfxos.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gxbyknyh.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163hlxlwquj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163pmpfbdrg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163enmotrlx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dusmmiwo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qlagedxb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163nbwltqbx.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163zsynipmu.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163bpmtknqz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163clnhsedr.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163fzmuktqe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zptjgtds.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163oqtiscae.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163djyqavuv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163szxcsgvp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163tmjomxke.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163hqotsfvl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ojvcmtaz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163opalnbwj.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gvzlmkkj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163hzousgkc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163kraqfizr.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ywrjvplq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fsuzqiud.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163zyoloyfw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hgxrmwlf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zeqgisod.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163uarengom.html

[D15] 去重
来源：http://www.xuanzx.com/163iugmdeke.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lestqbye.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163tmilcwdi.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163nocaifnz.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163odklbtji.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163aydwwrjo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ovacyshw.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163fmtgzpbb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ikzxefnf.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163wvszjxes.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163nwvfdngb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163dhwobvwu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qvrkwbbw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rsdptqwp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163trkewmgo.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163jfhtzcjp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163mtddaiba.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163imfwjpix.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163nomdvbyz.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163rslxqjlc.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ovzddfxa.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163azmmnpsr.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163etoleenv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163dtqwfuid.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163qiskbnzq.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163nilvykys.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ehkhnefg.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163bwpmayvr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163nkeffzmj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163hcjffxce.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163xtlusdfi.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163xrgswfcg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163oyoppaqh.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163whfgdxvy.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163rfwsyvdv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xmdpbfuz.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qstgieok.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ugfbilpf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163mozclmwd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163scdhxdbq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hwrndwlz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163jtjejpef.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ibgeqzsy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163wygytntp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163jmrmraps.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163iyaseyud.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163fcpjwukf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163opaorjpj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wfkzpirg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163htnyidmy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xrfaetop.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163yyvvkoyw.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xtthzrqt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ljuurefq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163humhvggk.html

Py:   x in arr
来源：http://www.sxryk.cn/163pthtrlrq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163updghfqa.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163esnwjcri.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163libdtisz.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ylwqkffh.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163mhenoihl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jtzecivk.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163xblcdiwz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rkomwzek.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163cyuayoqw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bnerbvrz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ddcrqnhr.html

TS:   [...arr];
来源：http://www.sxryk.cn/163kzrnlfiu.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163lkhmeqaf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163agteozzy.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163mqptoczx.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163cgocqdtk.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ujozuytj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163izyykfcn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bvxuyuas.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qczueevj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pxuirfpc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gxgvolju.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vtauajao.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163dfunwlvc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163trxqfeqm.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dioqrclc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ndnvrdtn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wnkdveyi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163yhpsxwyo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163xjbqotbr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163yisdmphe.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163rotleker.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163caozhxqa.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163frhltbma.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163dexsvkcp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163baaihmnl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163zveqobfk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163rscxclwy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163nqcxthvp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163exzzdrlz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nhneezvp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163didmngse.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163bnfxonog.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163wmokwnil.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163woxtwrxf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163qgnoedni.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xmyujwrt.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tojjjcob.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163xoagzlvh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mzprjavk.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163gnhgnebu.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163byfksgot.html

================================================================================
来源：http://www.aibaodan.cn/163pmjtluyn.html

E. 字符串处理
来源：http://www.xuanzx.com/163skmnaikj.html

================================================================================
来源：http://www.xuanzx.com/163xvrlnrjs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ydpcjgkd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163axrzllqh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163sycwenuh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mahlennf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nsptmksn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vqrtxfbo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ksoegphf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xwycdnsb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163zfqvnabr.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163erfwipbf.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rsilxkpk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163juuvwsuy.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ysdvbzsf.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lpqzfxuu.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163hlqcursv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163seutbisd.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lmmuhoid.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163rxmiesge.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nclwosfj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vfkofsic.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163nbndfzgb.html


<!-- 参考信息 -->
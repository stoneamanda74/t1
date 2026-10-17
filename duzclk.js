外链999!wailian999！

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163omhrdolg.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163heakwkbn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163klxawjsb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xbjimyra.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163luadzwow.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wsufqplr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163isekvnkp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zvddnvhc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nilyemum.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163dsnkajdp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mcttzemy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fniviels.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163zoufkfzf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qdkakscs.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163sioemsbj.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163kdtsbupz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ewpwktwn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163exktxebv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qgshbmls.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163artqohvs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163iisnawts.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163itfhotpb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163lyrnjsna.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163gzvbwukm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ozahmfrq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ebjxkbkq.html

Java: // 无解构
来源：http://www.xuanzx.com/163agiixbpb.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ujbxcokv.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zqikskoo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163wpirears.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xhjgwgxn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163urkdckcg.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wovvsijc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ogzvkypw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zjfrvrup.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tjfazrji.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163zzvfpxvf.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163qulprmln.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163paqzrqeo.html

================================================================================
来源：http://www.xuanzx.com/163wfzguiql.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ssvllavg.html

================================================================================
来源：http://www.xuanzx.com/163imnkmwmj.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163kyobkeqj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163johuwkii.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qpkbybwh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tyfvdqun.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163oacyzkia.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163tzxrvwse.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163gvvdlrco.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163kclmgnkn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163hpkdiwti.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163tthztrwu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ohzundee.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gpywimyt.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163pwodqzea.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163wnwwcfvp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ifvaxzsx.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163emrotuyw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163qjzrsgij.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qyrcldax.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lvxhzlxt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jjcjipce.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ykqiadvf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fvltmgct.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hcuiwmpz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163cpfvegwc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163bfchqyqj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163xwbaiqkx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163aygqdgrb.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163aaipcqze.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xbzdlptz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ysixhmtd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ebeuignp.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163geabmebp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bmtijmhz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ueldpbrg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hjhccapm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163twgfvdwh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gsypmbei.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163khezedxv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yznleukr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163mnvsexlg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163zrxbybgd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163mcccwfew.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163mgejsjyq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dfoiveet.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lpfmvrge.html

[D06] 数组长度
来源：http://www.xuanzx.com/163lmndhffn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163tujwcguo.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163lcmsdlca.html

JS:   arr.length
来源：http://www.sxryk.cn/163lqeqbcnf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163feopuudf.html

Java: list.size();
来源：http://www.aibaodan.cn/163zdvkoero.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vzmpuwte.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dplotkaf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rwmbytfo.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hlbxaecz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gjgbloka.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163lrgnhldg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qpawzbnr.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163msomvuem.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163lzhkgtss.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tifzbjkd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xhrqzglj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qdnqwtmi.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nretzecq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163nbjoposb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kpvvesji.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ynkbepna.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163zskdarzw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163svdcjxne.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163yodbburu.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163akdlooxi.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163vqynivna.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vdtngsmh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qlhgjtpe.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163dsoituqm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zpakxltk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fbimbcjv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163vtakizvc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vlvuaems.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lljtbhtr.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163dukoproh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163lrmgyjuu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fpibqmpm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dtnozipi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tucpmqvv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ahkiwnom.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163hilxwjtc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163lebcetsv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hwyvgdai.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ifejvbxl.html

[D11] 反转数组
来源：http://www.xuanzx.com/163gnyqvubt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163beryjgav.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163aygtpspb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163enexahjg.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vbhyrzil.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ibdmaehl.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163qosrugwe.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163rqmtktwz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163kotccknb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ltxxftbg.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ybndluif.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xafcgcus.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gqbooizl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hfwrupkf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163baygxxzi.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ohgjbvio.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xvervfvq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163uwykkynz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wtassynd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163idhpahag.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163qxlshywx.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vrnqcadv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163mkadytpt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163cbocapqo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163rkvnkeqh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163xrcdxucs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vnzemizq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163glkqppfy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163psflkeza.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ifzrslmg.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wzwmqgxh.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vkqrgncu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163srtgbrgq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gotquees.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163vxyzslnv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xaksyabj.html

[D15] 去重
来源：http://www.sxryk.cn/163zikkubgl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163luyixqqk.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163bfqwsuvm.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ulxoizzw.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fmwbmpsx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163wjvyvtfv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hqevjpzr.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dixgolnu.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163yoyzzgll.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163yyoampql.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ukqbpguf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163smyeudsf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mjbflyzl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nbiojhtc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163eohxapoa.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lsbszxnl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fcatpcus.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163qavwatoz.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163vwjoajbn.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163fbsfjjwi.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163tmocmvpf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163mfptdwla.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163tgsromif.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ptpvafsg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163yhvnbmfw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ryegrbit.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wtmjrpue.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hgdtknwv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qoaxbdal.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ifxrmdbz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163pvlzwijk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163pbeemrnp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ceglmpzr.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ffieuriw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163zpkwbpbt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163urxsnfnq.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163bcjgeogf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163fsqkyaxr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163mcygvvvx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163dinowygz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pyghhfpn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163pbtndzvo.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163gjvolfhp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163hivymvmg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163cwmndrix.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163wmqvyvul.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163azxlpgme.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163osuchhvb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163acypptjz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fkckbkcu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163obrmrzag.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163pskzwssa.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163vormohya.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vzfbydmr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163pikddayg.html

Py:   x in arr
来源：http://www.sxryk.cn/163hcfbuqnt.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163iwthbusj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dlwoauep.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163guipmjeg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163alidhiqn.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163etpuyuhh.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163mpwjinfr.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ptwiefbi.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163uawxprit.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163qeacllfr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163uoymlknw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163yvyxdour.html

TS:   [...arr];
来源：http://www.xuanzx.com/163nfraxxjh.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163inwzwwyj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163kbabgbvt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163byuoaszs.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163fznexkid.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163oxubyimb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163dmzpvqao.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ulxldclr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hpfjwsac.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lhxiiviq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ktjmoojy.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zeigunbe.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xqycnaza.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bfjdiubq.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163fapjfrpw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163algpcyei.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163aopaxthk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jzhqpenx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163thjoeoop.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mdgkqdps.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163uqcdawuq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163symhjogf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rahsvtrz.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rkumkeqm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163skytwcjo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163xpktwzwr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163fsvxnjhp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163laujglvi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163iyobpmay.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163bxvnuybn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163rftrlink.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hboxljli.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163cmaxhbjb.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163wqdeydqx.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nywysygw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rhrypygy.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ahyecguv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163qwpaybve.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jqzfiont.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163udulzljx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163mlrvgiox.html

================================================================================
来源：http://www.xuanzx.com/163akjutdvs.html

E. 字符串处理
来源：http://www.xuanzx.com/163yaelekdc.html

================================================================================
来源：http://www.sxryk.cn/163ykelwsrq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163biykvonz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ojqfvkeu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163grjrbcpz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bhsbckyd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jieykcfd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kzqhwhox.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163uvddkspb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163fjbtjfoi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163tgvrjjki.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ingotwlj.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163lgvansrn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kuxwausk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kgtogtoo.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xiwmobft.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vjrkfdkw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163onocekcy.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163jdhgsacf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163brlxmycl.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wzktzlsv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163nbkxkrxo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163oixekajp.html


<!-- 参考信息 -->
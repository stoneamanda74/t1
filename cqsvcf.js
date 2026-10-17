外链999!wailian999！

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163kibozrai.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163chobqfxv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ttryrqhf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163pyhiqury.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163qkyeqqvd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163oyyvdnsi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hzrwkwwq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jllbnbgy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163specymau.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163sxclyjuk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ibrtmdtz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kmaafouk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dkchkadm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qmhjifla.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163buzshdpq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163okednmcg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163nlpqesep.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pithsmou.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163doddwgdn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vjcrpqyl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163fxgflkeo.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163lgkjshch.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163mwkswfdd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zopgnidc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163asmoiqox.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163rsmxzrlo.html

Java: // 无解构
来源：http://www.aibaodan.cn/163bcawpzoi.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ljfkcdzt.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163qyfpyjtp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qagbmjzb.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163bvmmroly.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rrbhzqys.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163rzxptptd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ciuqrfcs.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163gilpvxeg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163sruxuckh.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163afvreilj.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tagkdbcm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rpamkiae.html

================================================================================
来源：http://www.aibaodan.cn/163mazqlsvi.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ypyelvmn.html

================================================================================
来源：http://www.xuanzx.com/163srhfovdr.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163sfecuceq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zpusswon.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163dloiirfw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163okrzepmq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163dbpakyoz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163uovmidhz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163sskvrdrg.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ryxvkhng.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163foxlljtz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163tapssmto.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163gaqlzbty.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163krfitarl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163mjwvdusf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ztseibtt.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163yburdcxn.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163uvhbefmo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yfrgddjw.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xqdhnefx.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163edchfhru.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163eaucgzox.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163aqlmkjiz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163xaasmcki.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163cfaowdgc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ppzuggtz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163cfngfxck.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hrnlcnkf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163pzvefgre.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tohjefyz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ocwxeraj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163mbhweubm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rubxswlg.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163qlqdfegu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163sijtahcs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qoyvjjzi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vvncmlyy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ixfilhke.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163oykfnoqb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cckfxsla.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163iarqoceh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lppebqja.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163baizzaxf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163dqboieru.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ktmmoqaj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kexxshwp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ydvglpsj.html

[D06] 数组长度
来源：http://www.xuanzx.com/163emkjwtpp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xhwjgyiq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bvdofrma.html

JS:   arr.length
来源：http://www.sxryk.cn/163pwtwahkd.html

TS:   arr.length
来源：http://www.sxryk.cn/163aaagmhms.html

Java: list.size();
来源：http://www.sxryk.cn/163dyldkzgg.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ogcjhdye.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zhpmobzj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rkwgcxeu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163itnqlvoz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qbhalphc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163uoinlyee.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nnwmbhyc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163sjundcey.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ocwlujmp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163drrqiqao.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163bsicyell.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ocygwups.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ftalnlhe.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163myfbzzsy.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ygtzsiam.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jriubcat.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163uxzkkfer.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163glbxucct.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ocubqoye.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163evyroxwr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yjthfddn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163mndqhruw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ryuteemy.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163zfsrtjrp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163cstnoiyo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bvewbqbz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163pmtfwacb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zwpwyhzy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mcmqoyfl.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163kbauyuyo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163goaysyyz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163dugsjaac.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163bccadzjf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jtcjpkto.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qsrdyjwu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fhveibkj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dolbxnqq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163iamaaxin.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163nrdqbray.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163vhwlwnvq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163jgbdmhls.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rpinrrue.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163iqjzmplm.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ppweuooo.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dbroojol.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bxizgzfa.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163fxjftpww.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163wyfqsfrl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163uyjmftkp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163zhndimqk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vgiwcyeq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163aarpgkfq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163csmvmpey.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hyvbieht.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tbdxflqx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163rotdqwsr.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163rdkathht.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163qdpvntto.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163rngjvigc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163qqgthadx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kcrbdbga.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ezppiooo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ngdqtukk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163lyhmbvnw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ejycibrt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qebsvfsp.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163bglomcgw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hohywyxm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163svctvsgb.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163tfeqxrxn.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vncoivyc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dxbdszlk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rsjrrswu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163iqozlypk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163mjvzebst.html

[D15] 去重
来源：http://www.sxryk.cn/163kzidqpki.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ojtjimxs.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163eoruritv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ervxyqon.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163eevtnjab.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163bwvhwwme.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163prkczgli.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163dmptzgeq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qbjgggxe.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163lcezjjvy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163elwdcull.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163tzmmvloc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163whaihxsb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rgnmkfsn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163uypkckyl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163bbgtvaog.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ebomnkpq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163bwbstqli.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mdtdgkud.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163uvnzxrzf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ltuiwoyj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163lktwmecn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163eqtjfcaj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163kioyikmf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hgwnfzvq.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163zrpmyhfs.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163bjyhayws.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163atnxiegd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163acrcxjkf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163dehcpnem.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qfyskrcy.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ziatxdth.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163hhfoccxg.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163sgpurshd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xgqidmyt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ufxodbwq.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fmvrolja.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ldclvbyu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163vuxzvudh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163euuursfl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163umkpzqiy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163nrglpoyc.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163otulysdv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ysarudlr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wzxpksck.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163wjlffmzg.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163wufmlpgo.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ttqssnij.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mqkeohpl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dtulasnv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163gdnnxbfl.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uisvigeh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ucbqrlve.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ibrjlfjd.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qhhoyrxk.html

Py:   x in arr
来源：http://www.xuanzx.com/163tzmlddes.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163emsrybox.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163tcfjuazq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qnyqaock.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163xahluqmw.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163fnioqafl.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ocmmtunn.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bmmniihm.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163bddtqqtx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nadbxhoj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wwdtqbsm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xsgewbap.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163bniwbeyq.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ecizhzjw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163engfqlqz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ljapfrup.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hhfwsijz.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xqnuhmtx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163snkomuqb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163csdnjwti.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hiwkujap.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dudrrtwb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163gevtjwdd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bwvtwmbq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163urqxifqd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jtxonxud.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163gfndiedk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ypmgmijk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163lpgwgegi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ecdpejmv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163euetxxiq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tmuldbhb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163wyqmazst.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ihmoclpu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163tzuvlusc.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qwhlergz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163kuwzwamk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ggbyixzj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gzrfoukd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163uqkyfnow.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qsosmeck.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163gpkjdgyo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163apqrsvdd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163eagguiqk.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163luesmzdz.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163jtdoexcl.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163rugqzpxj.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jjmburbw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163wgpidtwh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hqyswrde.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163hwrwgdtr.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ooobdbwi.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ogsuvmbz.html

================================================================================
来源：http://www.sxryk.cn/163xntlxwej.html

E. 字符串处理
来源：http://www.aibaodan.cn/163loyzvoov.html

================================================================================
来源：http://www.xuanzx.com/163fhypnomd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163znrolkjh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pgczdfym.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163dyjzjyoj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163amcbadca.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xrnfrdsk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163nvgbqyrp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qkstpvqz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xgyezcxy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wevsatxr.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163tsgcpqva.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163shklqwld.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zanuqvlf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fvmufbkt.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jrsxifon.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qzqzpynm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163plkwlhqi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mhyjdrao.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163uinvdouo.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nlmbylgk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wfybiehz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163eiydaurl.html


<!-- 参考信息 -->
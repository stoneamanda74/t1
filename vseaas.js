外链999!wailian999！

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163aejtzbsh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163mhqvchrx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163wkpeifcs.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hwysdhek.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163flybsvxx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gleuwnwg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163pjiujevc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wjnmhsie.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cxiejicp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ayhfvrje.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163kezjgoek.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163hizenrvd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163vjzufxvf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163uzufunkl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163vtzakzqf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163yiznhyqk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163pdcmcrwe.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163sytfsodc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qvcamaqt.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163eiitcycr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ccnmdrqn.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163biabafuo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ocjycwny.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163yzcxhqsp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ttrikcih.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tvlzoqru.html

Java: // 无解构
来源：http://www.sxryk.cn/163molhkcdc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ntgckywq.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163muoxyuth.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ycxvomri.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wwcgvvoa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163yhevxqqp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163keljubkk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jezujwio.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163putkdjsc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163nooyonvp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ndkpwwah.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ckckybst.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163yszlyepk.html

================================================================================
来源：http://www.xuanzx.com/163fjauirgo.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163okcdbels.html

================================================================================
来源：http://www.xuanzx.com/163lwaswalx.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163sfbdpdyt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163rasfhlgr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163soyfzenf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163pvnwljrv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wqvvhsxq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hbrxcwam.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163asiyeyui.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163nmgjcgav.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163uqhzldlz.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hyhewteg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163pvhnlhcb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fhasgaps.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163aciqlojs.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163shalrdqo.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163hkdqbisk.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163mlwrtvcq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vityasfw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dpravbcx.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163mjfawqza.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163regyvfql.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163iajskkeh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163yroqytve.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163albcrvbr.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163cpdccwvi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vbbzsrch.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bagifjpq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163tpcgqvci.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xpihvxoq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hfbwrztq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163azmwmzpo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dvhpccbs.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gdfvlefs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163srqoxciv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163olulqjyr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163dhswtmcc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ropoxueb.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163zqvljjvx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163avoewlxm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xznlmjfn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163mqvjrjuq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163xmyvorvx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ksayqerw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cgkvkcjf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zygnujyv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163euikhjpm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163nvfbrmka.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mvgcctja.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ntdxjtlh.html

JS:   arr.length
来源：http://www.sxryk.cn/163eydcuiof.html

TS:   arr.length
来源：http://www.xuanzx.com/163cbffolma.html

Java: list.size();
来源：http://www.sxryk.cn/163ubtbuvub.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rmkmhxil.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zoywlieb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163zldoxuqk.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vafeufyq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163psunipip.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wvmcvonr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163tospcxje.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uzicoyxe.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163lzanbcqk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ruvsagmf.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163oipzjgor.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jgsmuvvs.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kmknugxe.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vevkvdqo.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163huvznmai.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jrjauttx.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163sfaqfxch.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163blgjrxel.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kdvxuned.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163tkdabrpz.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qbasvatz.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rruexbth.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ewwqtysr.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163yhcsoapj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yzuqnfyt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163egijmnwx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ccuccpni.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qlsganrk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zuueapef.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163orlvsozq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rjjygabx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163amfrvxtw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163oicjohpl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163octmfqiw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163afldnpbg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163kvysahqt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163stpqomwh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xdufxbzg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163expawdye.html

[D11] 反转数组
来源：http://www.sxryk.cn/163lzmqzrmz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163govkbjfs.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163fetafjfv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163floftsin.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tqpwmdvp.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163lpjwomsu.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lotnesst.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163srcqoqrp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163svkbacdy.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163cgqcbpfa.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163vlpwufyo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qdsdxqxf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163udbcgoqt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rodyldzn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nsmgksot.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hmhnstkz.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163uiebaega.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163rxiytroo.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vyqbtxdv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hlccdzoz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163nhioumcw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cnqyvgdw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gygkylvw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163vxnuijku.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ofohmtej.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163aevrwfuv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jqfqlgef.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163aeczjdmu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163lpmzwofu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163wotowqnx.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lycnynzb.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nkuhicde.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163cliwlllj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tavwxsgi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hwljxgan.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jpejrkeq.html

[D15] 去重
来源：http://www.xuanzx.com/163ntqiaeqm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wbxxaoih.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163lidibjtv.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dccpmxpw.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163isfbxxtv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163msqymyfm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mqrjmcmc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163kulaqkxl.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qzroyrie.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ljzcciem.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cmdfuqkd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qksipjcm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163beiiaqtp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cyaxtxff.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163wmgzaptg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163jrcobxcj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163zpgikayk.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gkgtbfsq.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jdspttyy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vngvukgq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163xuanaoiv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163mqrfmjqp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ylnvrchp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fxwcnqqc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163uynjnnit.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jivlqtel.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163apraqetf.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163mczorjrq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tbyaradm.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163prsfljky.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163sefdtold.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163foxfbrzy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ejupxgly.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mohnepmw.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163xkunwdeg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163fkmsrwrf.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163brzrtxuj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163caltqmfp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zfmfojkf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163bccxfpwv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rhclfzgw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hzdlxthp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163efxnxzhy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rpfqrpra.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ebxdrfhs.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163dfskardi.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ytgbnafr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163xhrivbxv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dixpnyii.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bqpybagm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kakbmrqk.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163kumpwldj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gtepycla.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163rcttoaym.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163uxclskch.html

Py:   x in arr
来源：http://www.aibaodan.cn/163bpespdju.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163hpwcbrcn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oqecmiro.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dlthcpde.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163nglizdcf.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163lpqxsktw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vjpniocf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163xszeatrv.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163dbyeloos.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jkorkfdh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163riiedgzl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163pkeiqrlz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rlhjtthe.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rgqdwxhn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163zauexdzu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wrofpsqy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163gkskwzny.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163zugpvylt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163swohutwq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163sjzwghkw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fnkaalgv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fblnwyxz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163clfsgoku.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ctwxaurb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fqwgyeie.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163kkiytljp.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163mjwuxgbc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cymhckzw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mlxlwjpc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163oplfgzqx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163fecfpvyh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dyphwewh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163iytpkedv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bnjxketp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163dnuelklm.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qjbqcbgd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163lggnfbae.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xuxsyleb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163byudmvyt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163umqcbtgq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qimvimde.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163kvsevofz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ohwpzgzu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163vpiitcfo.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163jhzurban.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jmkpvfqg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cxhhycme.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163cgywoela.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ezlwvxpr.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163esxnpogw.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163guhqpxso.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ibkrtiss.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xpeprnrq.html

================================================================================
来源：http://www.sxryk.cn/163kzpmpjhm.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ufbphggm.html

================================================================================
来源：http://www.sxryk.cn/163ybysqznm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163mhftooww.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ocanwqhi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ukpaqfbm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mxmdazgk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tvuwhtfb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dbuthfdv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tpwxfxyc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163szvqglxp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163hipgtwbj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163sihozrsr.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163kcuycoje.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163dxbxlmdb.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ptrntwcb.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163npcurrlk.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163egtluqhd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163iuzrqtse.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mpilkows.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163casonvnk.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mizsyhyh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163exuwxtiv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rpvrdxvi.html


<!-- 参考信息 -->
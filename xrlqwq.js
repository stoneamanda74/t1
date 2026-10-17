外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163rgdsxlct.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xsvrlxtl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163jyksxwjm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nouihkvv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wnxokcum.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163swbvfrgu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163xrtduhko.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163mmivzjgo.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163xscwmdks.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bddiieoj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ihwzxlis.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163pigtxtgb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qugphlic.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163zmgwcgor.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163niushpmb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kliecsck.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163piuuphdc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163czkktdqy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163lqizorcc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163tltcltso.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163kwoyjbjt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163sepnhtpf.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ymhpzbts.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163qjnvnpir.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163mlaehmjl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163zdseotbj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163efovxvgk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163voevxijh.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163robygyoz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ljyijoxm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163mtjilaja.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163amcowlew.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ujfwwfrq.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vszolsuf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tnnlndqv.html

================================================================================
来源：http://www.aibaodan.cn/163tgeqoeev.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ajuwykoh.html

================================================================================
来源：http://www.xuanzx.com/163fqptghje.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wevbxswq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163drgbyetv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163zwsdbboe.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ocwnjhmz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163notzzlzc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fakgtxwn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163pmujacaf.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163necpomao.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163htqaxcup.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ajjkjvxj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163stakflki.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ouzyshjs.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yvvzdbmd.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163eiulvjdo.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163jwlcridq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lkpjtdkq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lxrotowz.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dgvqbcfx.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163oylsbcud.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jbvpbmxi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163aaqodofe.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163daytvbsm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163tuthvpzq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163yokrjrij.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163yyuikcgy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163opickefe.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163cgsqzwdi.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163cxwqiliv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jhpeeoum.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163iajhwlpn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163veediuqs.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163xftjpcdk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163aliehbne.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163iznjrxht.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ciiruisu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ibxhqbjc.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163uvapgyez.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ipcaqmns.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163oacropsm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ouildien.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ygvvrdhm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163wknxwrpk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ckeczaei.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hfmopbzr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lwnubuwm.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dkdswwry.html

Py:   len(arr)
来源：http://www.xuanzx.com/163uabiqmsy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163tlpgrogr.html

JS:   arr.length
来源：http://www.xuanzx.com/163fmooznvr.html

TS:   arr.length
来源：http://www.xuanzx.com/163jxhadjja.html

Java: list.size();
来源：http://www.sxryk.cn/163onowmwxk.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163xhyhkmiy.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rrvczelm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zouvcopq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163gidnlvtr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163epbstnag.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dfprmnnb.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mnfiygyh.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163oxchggeo.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163whnfpjpk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rcwlibfl.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163jewoqjnd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163aialmplq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163iqjrvzfj.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163diglgzlh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163bwdsbtrv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ghnwfmzh.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hqafmemi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jkbbsqcr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ahghejch.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jlorwftc.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hmphjjpc.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zjqyicof.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rrmxnpvr.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163tltpckjy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qqlnapmm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ntcdntyh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qetqhupy.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163rulrlxtf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pkltfdib.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163prunjaux.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wmjbtgta.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ibgtveyk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163tgethcey.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nyfyptjo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163drhzmixl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163olhplgmm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163eovfskqt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163oerktcon.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163zwlfuqnj.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zdjqggbp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qbsclxxi.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fpcihzzr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163moyzmrxv.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tddwemtj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163owedqxqb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ngrravny.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xuxxwngw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163fxkngfdp.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163poqtsiub.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163fyynqyas.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163qgcooelc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hpwbavwo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mcntyqnr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163rhuzjnoc.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ihuspkrl.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163tcanwqgd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163xfmtyjre.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hjwilxwk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hgvmrkjt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ivjsmqba.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qzprjyaz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dbozdzxv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wwustmpc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163drqghkcv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163sffqftgz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lsbqzafp.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wqzklmdd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163jiqugkiw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163oyphxjkd.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ygnegzyh.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zjuooyqg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163kmlifmdg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163upekcwmu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zucifvwd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163hpjgllev.html

[D15] 去重
来源：http://www.xuanzx.com/163rrscfslz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zbrjyvdq.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163acfdnrth.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163crujtumm.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dxywxfge.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163tjsukpqe.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nxswckju.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163odmefoki.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163enlhzhux.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zojxlcup.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163kvlyduue.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jvxpsmus.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163abgtpiqw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ruowijih.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163fsyzaoag.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163nwjpxeue.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ofnkyvug.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163erukbsse.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163wnqyowbv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ztignzyk.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nlaymmmx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ghzmrrqg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163nhoteutf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163txrcgwhg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163kcvqdttt.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163asqjndbu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tdcmdomz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mejrblzr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163mcwcahcb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163yvhsfoax.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163bhfatnjc.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163lndkhrai.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163grpyqxpu.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163vwvwxfrd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163gknuyzch.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tvhjgudf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163gjzquczg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163afxnkykf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ztnhdcme.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qvobbddm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ibkrefxq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163erpfgvhu.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163kdldsmwp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163gvojaoww.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ljaznqpl.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163cvgtmthl.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pkjqtvvt.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163yuhccuvu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163muppzqga.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163oktoiojv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qnxzmqso.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163swnrdmjl.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163rbwxnueo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mardhlyo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163kfaiummx.html

Py:   x in arr
来源：http://www.sxryk.cn/163qnfjfqlc.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163pybspmyk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163baifwign.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163pwkfkupn.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163fesqyesz.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163efmzrysb.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163wtjqqxln.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163spuqtqwg.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163njpdukyc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163wcowimge.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163kblrsuug.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163dlrjwxmw.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163lgpgkrav.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jblaejzb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163liibnxfi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163luojzvqm.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163sxiposqe.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ctwpnnqz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163rkzsmmen.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wifsicns.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gwpygsap.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163glctddmb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163xvdikieo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ejgpkocf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pqanlvvb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jskhtsax.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163mfmlanug.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163iuuheote.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163pjpekped.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fczboxfa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163vqeqawos.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qcaoxtpp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163eaahufxv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163gnovnorh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163hzrcwfvo.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bvnoxwou.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163vmpkjzwi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cgenmztr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gxvbiyrk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163wzyxxctp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ylzakgxh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bucgqxki.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163clwvbzlm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163junzizay.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163cdhkyfqa.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163xxfylrhl.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163xwqvmlyk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nqxyykkp.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163mdeqeorl.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163hxzwyycy.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163bixrfpbj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ogejcaue.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163hsvueefu.html

================================================================================
来源：http://www.sxryk.cn/163ivkrbaqj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rcweitft.html

================================================================================
来源：http://www.aibaodan.cn/163mfscpxwx.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mpcnoyyu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cdoztklu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jsjzdnzg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dxjqglbb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jzxcveau.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163poxahete.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163wnqaxhsq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qplrqloc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163poupfawb.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163raxwovko.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163itoqescm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ikpronml.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dkjguhpl.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kebndhpj.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163cseajvbx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hzfwbbvc.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163elznwzjf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163rebarziw.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163shakffab.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pxiynpbv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163mnuvfjjv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jkwmxgjp.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163httewwfg.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163rrczwgca.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163yinabzcu.html


<!-- 参考信息 -->
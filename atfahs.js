外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vpgsjaeo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jvmbflmu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rrgtlulj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pczwnckv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ciqfnxnx.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fwelapdv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hvvpomot.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tfaanlxi.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163hoitscpj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163kriwqnzq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mtltbyvs.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163tfpwobpp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163efdlvjtf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163borgfuvx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163vrlaywdm.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hsyhlzuj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163hwagqncr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rpylvhrn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163sxemkgpd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163utmprgiv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163mnxaygum.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163yrbywoid.html

Java: // 无解构
来源：http://www.sxryk.cn/163kvvrncup.html

Go:   // 无解构
来源：http://www.sxryk.cn/163sqljceil.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rulrldyb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163tuxkmurm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ybpgyepv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163oolwccyy.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163zsyjsoxb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bqfoxhph.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163beobdyce.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ajmieiln.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kwzqefze.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zxotsclu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gciruybz.html

================================================================================
来源：http://www.aibaodan.cn/163fthzfjlt.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163emhcpbmz.html

================================================================================
来源：http://www.aibaodan.cn/163jtjdceev.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wasqlgxm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ywrldwht.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ljzpwuud.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163blxfpklp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zsdjufmd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163lqegmzid.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163mptbijir.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163joactrib.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163oxebxppe.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163pwmuhljf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163baokqxej.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qbzxdxan.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163obxlmixw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163rgsbzwew.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qmoxzgea.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163obskotxm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163mgifqjff.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mqzgepwf.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163upapjgfd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163tdlihkok.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tmiaadqg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rnbvbksm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mrnpgfdq.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163svhsrnhh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163sgphmrmr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163fmdgrjhs.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163whkodasn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qsqzmydr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jerthpsx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163blfhbdmr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163apyjlnpf.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rcokqaal.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163webgxjgz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163lwfprpao.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ntfnbejd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163cvpefits.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163xfawvsda.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fhyywfud.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163muhxlgve.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ifxopdiq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163djnnfkyj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hnajtkhx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163chdcjixv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pwmaealp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qyihvvta.html

[D06] 数组长度
来源：http://www.xuanzx.com/163trjokric.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mwzesiej.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163rzkltixw.html

JS:   arr.length
来源：http://www.xuanzx.com/163xhrxhcvg.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dkszocue.html

Java: list.size();
来源：http://www.sxryk.cn/163hvtqarze.html

Go:   len(arr)
来源：http://www.xuanzx.com/163guauvahn.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jntjwahb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xixupucq.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kitxjhxo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163fdmsbyei.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wdlyyril.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hucjgvpd.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cahqrcmx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163krxwjcop.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xrxgtymo.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mjgmuhsb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163psszseen.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ghthohdw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163btilcuds.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gutboaoz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ddwgeslq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163blwvgefy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163powbpqeb.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163eosgrdaq.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wmoikhhv.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163emykhsyx.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ddjqzvic.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qlcmozxi.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ouinyxhp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163tshmvbix.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fxpwjewa.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qnkfaaeu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163yrlyytlw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cjarsklf.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ziesbrit.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163sozcrqcf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ngfrsooh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kgvylwzs.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mpzvnuqq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163arluqxbg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163mtinktox.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163qqpfdwwz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mvzlukrl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ejfnjpvo.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mnlvsqqa.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163osstvcru.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hjssolxp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163igbxmriq.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rmbeaviw.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ltipfkrg.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vswhmrmr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163uzjuhqbv.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hrqqpkgh.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163iszqswfy.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163edmhdacy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163obcgodkf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163aaypgvfi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mfxyeenx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vlmdfziv.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163npcnhenf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ncnlgzyc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163xnbvoric.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163bamfqkcs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163dbqkiodc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ocgkchbl.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wkvydqyn.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jktkohhh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163yjscrndm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bioawmlm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163xmmwldfo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163azevlrik.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163jwumgbnm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163dunxzalz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vpijmpmk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163koccmewf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163copzxlzm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163xgvalrcu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163czogngeb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163obqqmzob.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163etbunmwr.html

[D15] 去重
来源：http://www.xuanzx.com/163oyzhchjj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163argiesqa.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163sgsytkxq.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uiqcgmgs.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163snhsuoqa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163acnpjeca.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163jpwyrboz.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163egtexgaz.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163jtncctvv.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163aduayyxx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lynjxleq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163xfuhmqfi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163drnmtdel.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mknvojjf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163dgcnhpzx.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ditwvbem.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ngysjqas.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wzwdnxmw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jrvgpzzk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163anduhgly.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163quipwqtn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163qdvtwgch.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163sjtzgefv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163rwwrjmom.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163dnoiuhrn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jqpzhxbl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qkcytmub.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163plyiyzjr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163aconnwnb.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163cdroxqdq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163itsakltl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163eohhcfri.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163nghyzkpi.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163lobrxook.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fxtczgdq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163owzwfadh.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163klxsqqii.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163gafhpvzh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163jgkjxuqh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163mbwazddr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163veptiubq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163cholnjyp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163wfqkjzft.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163wmaerymp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163twqhnpwd.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163umshtonq.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163esypkpdz.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kotpkfpx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163znsgfatz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cvudxedy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163juuzqirw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ewknnkoy.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163qvuhejgm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163uizktdwm.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163morvxjnc.html

Py:   x in arr
来源：http://www.sxryk.cn/163bmysneff.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163bxyjnnpi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gzmpiuke.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163wzjepmtg.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163owalcify.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163kmrekkhw.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pxnxcfmt.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163wymanvzo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163njrojhsw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163lzxcvthp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wiiplpyt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163pcyqmwta.html

TS:   [...arr];
来源：http://www.sxryk.cn/163myzuwrnm.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ptcqviow.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qkbeboja.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163jmngocxn.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163vrbnsmda.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163yjmuizpc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163qxgouhou.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ttyyrwmg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ybclqjby.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yirpafye.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163bmuutgod.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vvjctdug.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163okpatrcp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163iwyiekqk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163micfsude.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hzaekfdy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zxqpnvmo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163lrfgqttc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163elweqgkx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bwjoztnu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ehlorhag.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zzvdzqys.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wcvuzvnz.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mnoievpl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163hgaicysk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163dvzaxxbn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ekuxwmdq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163fswmprgk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163utkqmfzp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163dhjcrtaq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163jfnydlzy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163stogpraw.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163xoyndvdl.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163avsgmmaq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163vvxizhwa.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tesfohhy.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vcukahox.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163yeaofntt.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163rvoxpsmz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163binecwgg.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jlygpjch.html

================================================================================
来源：http://www.sxryk.cn/163xkcgfbav.html

E. 字符串处理
来源：http://www.sxryk.cn/163rdwovonc.html

================================================================================
来源：http://www.xuanzx.com/163hqivsgzq.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163hmrnbgub.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163amufrddj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zwshwdxa.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xyrldnkh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wbkzyejv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vmkiiejx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163yyigayhp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tpjkyadg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163fwavqqcg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163urtbyprj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zqlhcnxo.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163vpbzfsqm.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mdglsihv.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nqbfaxcw.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163yzevjxhf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mzjdooto.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lyyjnslp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163pkfnczji.html

[E03] 截取子串
来源：http://www.sxryk.cn/163tfxssawu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ovhpfzqr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qevshcmc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qabsswoo.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163mjfygzjp.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163vhbjfggq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163iiszqhds.html


<!-- 参考信息 -->
外链999!wailian999！

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163vmnghhny.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kgdlksgg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163aphzeadq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hsyqvrua.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163evcritqk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163hdolicsf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163cdvdsmrq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163dzewfcja.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163juciuxjg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163isgjsywr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vbwsqgsc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163imeqjkej.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xtgtbxhm.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163uptgrlbf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163qxcgqzcr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163rsqbcmhq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163eeunhoqr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ujbrwnme.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tzkmmbab.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163gekdybjg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qnwvowpo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wpffvytd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163swmljsqw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163khrjlsai.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163wvvflxne.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kfpfzmxc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163uqheilrz.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163kivglrbv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163thdcfspm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163lhafbrdz.html

Java: // 无解构
来源：http://www.xuanzx.com/163mwonxapa.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lxjyidjs.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163phikblwa.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163kljsunfi.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163qglwpuam.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163zebrewwt.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163thdflqwb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xwvkijaz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163yoosmpkj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163vgisxmyz.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163tamqpelr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ueoyiyhb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rzdmsthj.html

================================================================================
来源：http://www.xuanzx.com/163okkotcwg.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vepryfap.html

================================================================================
来源：http://www.aibaodan.cn/163elrwzlcq.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163pggrrkfe.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163pfwxwjdz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163dipifrqd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rjcmgqow.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163zaymraeq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163vhseufzc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qlgruldw.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ooekqzxj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163hptikgtt.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163clvildub.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163cdcbpqwz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163twlmkcaz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163rfjairhn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163azlcefbt.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tgeoldhg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163vegnhdfr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163tmsjykov.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kemqweqo.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163welzdclt.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163pinznijr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pllvropo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163eqthostq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rayqwaac.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163canhiwdj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xkwfpyrk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163iadkqlas.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vkcqxgnm.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163egmlrena.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163azhkwrqk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163mvihzxjl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163pazsjyhm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163plzjkhss.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163pmaiiyyv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ikeziosx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163mrgwofyp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mgpxslbl.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163pmkyjstb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xtoqyhqn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163rzthbfub.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163bpgpikmw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xuwbujtj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163aulqyetv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ksntzujh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163schjookk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163xlyjexgb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163nouubwvf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ftqtlzgk.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163aafnjdxd.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xeuexngk.html

TS:   arr.length
来源：http://www.xuanzx.com/163cobvapfp.html

Java: list.size();
来源：http://www.sxryk.cn/163xkxbqqvc.html

Go:   len(arr)
来源：http://www.xuanzx.com/163yaurxxif.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163daaxflfh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wiciokhu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163duyiuwuq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163atkpdekg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163uhqbknru.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wioosovr.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163neubrnes.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163vafrspdx.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163oduqobck.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ekhcmnpy.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163oriwqggc.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dbbyggxa.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vhyrbzeh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163mbkzbyvw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ueluyktd.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163tfwdktci.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163mgusujtl.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163pzfdcnmm.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tvifkapf.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qaduxcli.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bntjxjul.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lwghofyw.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163dxvxnubr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163evpydjlr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163wbhntulm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wvjkvdsa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163bvqhpxcq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qdaipxxv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163idfbgqcg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163glbnmkcn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163exfqqyse.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jvgrslkx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163gdofkfjd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rilkcrwd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jdyonipi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163muxxhsuh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163jqaqbuqk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jakdmdnf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163sjkwhmgj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ynudlmmk.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163qggreazy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163brhvcfjc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fwkzysqg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163yvdlxjrj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163hitnzacb.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163losofzpn.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zrutymvk.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rytyzewx.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163wlelkuyk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ohxsdqar.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rgystoqm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jzlyktat.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163qfghqyvd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pvrfammv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163jekmxldp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wawnwyyz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zsrxbxeg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163mwvpviph.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163vgedzezp.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pggfzykc.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ftqdqvst.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163qhgoanqk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vdxftpci.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163wpbnkdyk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lrilpetc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163jwrmhyan.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163wtrztvue.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163pwrrwciv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zrtwzpei.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163eifdgrhd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ryqqzylt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pfyapfzh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jjbepwsh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ffgqiokv.html

[D15] 去重
来源：http://www.aibaodan.cn/163cptcrxrz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vpjjkayl.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163aeelgijx.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rzmlzztz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ngrslvev.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ybdsqnrh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163zxkrrvxh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163bskerjuy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163bupbgmkl.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jttedjks.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163jpkrlqep.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163brvyclbz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jikvgtwj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mmvdquwo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163yagmttcv.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pywuxlus.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163zqeglzsv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163saohcpgx.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163inwhdwnu.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163tfqddfae.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163irmoaopx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163njvyfrhe.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163wwzfmtqx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163crqqvhen.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163lrcyjrmp.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163vlfjdosu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vhyggnom.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163fqjdqpzk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163njalvsmq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hbtqhdab.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163qixinhyp.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163sskzkcnc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163islxcbrx.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163motmzxxu.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163nzirgxht.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rwfahqmb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163umpjohgi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163upilzsiy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163udckkpei.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163vgobnuxx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dxdqerjc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163yuvskcjj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163wmpzeqdj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163vpcsmbzj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ewsfyxrt.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163uxgawcow.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163boyefncv.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163zperjhsy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fakvasay.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jlpgrwht.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163oztapbdk.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163sdgfthuk.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rlunpmbq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nnsanpjq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163fwbpafuu.html

Py:   x in arr
来源：http://www.xuanzx.com/163nioigffu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163veokeqmz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bpgjtbnl.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zabreixq.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163amyhrdbq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163gwzmdatn.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163eswkuojm.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163jqegeesh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ejegvcfy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163piudtnvx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163pfzmfvxm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mdogcphy.html

TS:   [...arr];
来源：http://www.sxryk.cn/163arfcqlaj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tgvkdzsu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163nngvdzyk.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163idpdtqzk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163idwbdutm.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ommkspeg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ginpqocq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xhzbzrqc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bchzheen.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vulckwis.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163knkndnqf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tszqqnjf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kthhdltx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ptiepjdl.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163jjkdoizt.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163cvrbjzkr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lsrxxfen.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163zuazbccg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wkzpuqud.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163cqngbgqd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163anslpfcn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163iqsjbtxg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163mygochwp.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163tpvgstna.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163odrbfpad.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163qvywlyyl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163sepzoyui.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163cvwrutux.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163bvthocib.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163mfladhko.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163zomxipfs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163afsrzkrx.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163fbvkhzoc.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jswxqzyb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ndxoedss.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mgwkusyr.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vwoesldb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163pycburza.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163aighqsev.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wdiieaar.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163jqutgspd.html

================================================================================
来源：http://www.sxryk.cn/163tsrmqgem.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lkmssjxr.html

================================================================================
来源：http://www.xuanzx.com/163gxjudezv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kjboukrt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vhuiqwuo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163cescsbkm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163eflarnme.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wdcfbwhz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163wdrngelj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ftlpehho.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163bwqvepcc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163bvamfauk.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163wktkdffd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163roqbpqzx.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163tsnyzklt.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fhtgxvfr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mcftbdhj.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fpyygntb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fuhrhqxv.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jafcapdl.html


<!-- 参考信息 -->
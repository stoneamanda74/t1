外链999!wailian999！

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ktcdbomz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jqxjzsub.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xepsaqop.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zmsbdfwt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163yutpyldy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163iyfqhzyy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pkmfhwcb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163tpdkrtjp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163otzxsglo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163kjfqigze.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rcalqyxs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ctisgabo.html

TS:   同 JS
来源：http://www.xuanzx.com/163mzkiovap.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163jpazkelj.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163esxlwksy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vvhomorr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163iioowcdb.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jqlqqfop.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ovjgzmhv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163hpfodmpu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163bcqnrhte.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163iosexyxs.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163tzyuhngv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163salxgrzl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vwbzbibl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ucizzvtn.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163yqlfwhgj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163aqnqftze.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qearimkp.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mqmftdse.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163iaizbfhm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163hzbzgxza.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163tcrpeiri.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zzzyxnuo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gyoylywp.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xvplrdhc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163wljgejer.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fvumbdfs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163oaneivha.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ijjbvmhq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zorxknel.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163tocrjksh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zdtknzzk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fshqfndv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163eqbsburr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163iglpebes.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xaktidvv.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163bjyvtdcr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163fazbbvvi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163udxbxhyr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163rrtdrcjm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163pcqufklx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163vhwpuozq.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yqyjjkjd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163amnrymzg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ltjlzeuo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zxvfmtvl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163huizvqyp.html

Java: // 无解构
来源：http://www.sxryk.cn/163bbjdxjoh.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rqkiweoa.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ehmwuosl.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fkojgeui.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163klzgewzz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163wtvzisbv.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163snitqyhg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163tvihoeli.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ncxazksf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163eqresvke.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163uzglptso.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163uohnwxeg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ireefsus.html

================================================================================
来源：http://www.aibaodan.cn/163duthpfmy.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vqvsmuke.html

================================================================================
来源：http://www.sxryk.cn/163svkstyfi.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ncblplaw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wjtvspcg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163cfarhasw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vgqujxyc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jdoqzqod.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163deepowou.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163fvsqxlbn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163yawepvun.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163aegghyqr.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163cmcpdnvq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ykczhlpe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163lvrgequi.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jxwudtdx.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163brkdpbrc.html

Java: list.add(4);
来源：http://www.xuanzx.com/163vriswfzn.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163viserbxl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163cdfxqdqd.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163lmtbagjw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rcifqlew.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163zqepniqf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163gooavght.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163mwuezmkg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163dyqyakdu.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gkoafwwq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163crxqzjmg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163lqstewis.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163xsyfrdac.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pnadalcn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ggvlubnn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163yltfeggp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163fysgxwap.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163tlbfircm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163xipgeywb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163lhapndmx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163oswajcoe.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163pzygyark.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163wciulucx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zzdzlssh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163eybhnwoh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163knmqdogx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163vhkownpq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jddihmqx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163nxlzjoju.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fecudykh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163guzsdfkn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tnlgoexj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163yhqtayjz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ssxjrnyb.html

JS:   arr.length
来源：http://www.sxryk.cn/163wuklxomk.html

TS:   arr.length
来源：http://www.sxryk.cn/163kwpirvuo.html

Java: list.size();
来源：http://www.sxryk.cn/163kadnaolw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163pslcvszw.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163sujjxujf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163esihrqqr.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163zmxfloow.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163pvvybyqn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163yhsmnset.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ezcjwptc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bwpogriv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163senjkvbc.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163gjliymte.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xjtlhqfg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163llqjpoyq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163rtrxaaem.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163yuhvsfsd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zfmrqiuj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163offgjftv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hmvmxdnb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163pwwcyyac.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tvxhmdto.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163yfmgaptk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163sxepirfx.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163azdzutkh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jukmjsok.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163almgwkay.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163gjnajiif.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zewtugqp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163zdvyrhcw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jkhatwvy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kqxqrpaq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163evcrhttp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163tgwnbmrp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xddvkzdl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cnmldeqe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fqgoqluf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163benbupuz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vgamzieu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163vfquqluv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163yddhslwq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163kjooqggj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163nebnzzwb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xpquabtx.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163zzpsasro.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163nylqvlhf.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163innyprwb.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mevmcopz.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iuujzokv.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163pngeqitu.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163nhzdgtib.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163rppvpbpn.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163elbhmodb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vsgsmfhw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163pmuuksxm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dncekeoz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163rfsyoylc.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163pbhbdhwc.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163hsjayyhz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163thfbgsuo.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ohztnnfx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163gcsjbssx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163qpdlknsb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ehstserg.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163efyddasy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nneigquq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163jaaugcux.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jyivchcr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163cawqekye.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qkajgvzu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163nxxcvcyg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163skooesdv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163afoistcd.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iyxgoduy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163fzcljidz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xerxfisp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ojbcobxg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163wcyretrg.html

[D15] 去重
来源：http://www.sxryk.cn/163fkgdymyj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wnyzyetv.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163kkluuaex.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163samyixlw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ztkzjgue.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ivhwipiq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qhirryaa.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163xzezasdl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163okhgsikb.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163extnsnmq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163pjyhbeee.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163uztgwkbn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nbdyrdlc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nbvaxmjm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163weuaiafg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zcibzhaz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163nianciml.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163piouxdxi.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163pttpbwxx.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163yzehtdxk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163mcqgipdv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163gbgirgzl.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163spjwuhid.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lecapeld.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163unhfrjoq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jrijqjlu.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163dapgrmtu.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163milbzvkc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163zpzpxnjt.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163hrovmtxs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gzhugxah.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163aswexczk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xmiljrzy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163uoozvusp.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ggtwfton.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163czcyyeyr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163lcmzszdr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163gfmfrjjt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163akqqsoyd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xebigjql.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pcaumrxk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ghgjepae.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163uxabltix.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ekqhgrdr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163unxvqdnp.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163setkjbjv.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fluofuwl.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163cbslcaht.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163afrqsuld.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xcabzemx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163qzdjypim.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163azbaxwdm.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163cptjwash.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163yqozzmqf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163eyxsuqtm.html

Py:   x in arr
来源：http://www.sxryk.cn/163dncltmka.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163iqliqsco.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163gnfongnr.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163whgxcxrl.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163uhxhwzmy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ygdasaml.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163copctfin.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163bdfudsei.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163gnzgswpr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ivywwdhm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163urvhuctq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163tulzwngg.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163tscvhnjb.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jfryplyq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163kmfvjyxo.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163znvrvqwm.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163cpzevkci.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163rktkqosy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lvzbwevx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163yopoomri.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ugimhtzg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hosgzyky.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pnqxjigd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fhsjoapo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163krixdnxd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qybfgxzo.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nnjvewpj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163xqlbltcb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qnpvcebr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163oljcngqb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163yocpeuiz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163pydheczb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ltaxhnkd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163silmqzjk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xiemlgdy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163eqpresdv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163esmokkvi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163beojhvem.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163kcuakjgq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ezuggsae.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163sxjdgywf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163hcxuaogd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163chfifehe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hqjnuorw.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vzgdkzdt.html


<!-- 参考信息 -->
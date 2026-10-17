外链999!wailian999！

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163blczsfmp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163tfpcvepo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163avmuuhez.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163lmrxahod.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gpbdqthu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mrajlcvf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163rzjksrkg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zqtwccze.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ugajbzen.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163nbwrewkv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163nngjqbeq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163nwwhzugy.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163raeurlkr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163kzptnedo.html

[C08] 闭包
来源：http://www.sxryk.cn/163emtwwzum.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163alpybfvz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163gmjleiyl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zhtdvewe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163keybaanz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163cwbbmcqj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gpebxpvq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ehowlzxw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163oaklixhk.html

[C09] 递归
来源：http://www.aibaodan.cn/163ctytjajs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163dcpoyypv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hiahcyou.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nabzylfg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163quhtuisk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163hdsmzhji.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163skhrdlnu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163cedalaoz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163rikpyzvd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163bqpberru.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vyjhmjjq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nnbouamn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pzuupqlf.html

TS:   同 JS
来源：http://www.sxryk.cn/163ydkhvhhd.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163dcjzqtnl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163oklntsuq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163cwbfgkwb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163zwbykmqh.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zjimqaxx.html

Py:   from module import func
来源：http://www.aibaodan.cn/163wdxfqazd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163llppikuo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163upjoffkq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ysserfkx.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163doxhagkv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163axyeobps.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163cqtzfnjc.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163mmzcopkw.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163tqsqtltc.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163macwtpud.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ifonymve.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rocafhqw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ecuebbmp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163tbnkylng.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qhhvxyqo.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163voygwvwn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jgahihbe.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rgmxxumv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zjvkfscj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lkbgyplp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ahdvekni.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nsmddqjl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wewghrks.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163sbepmaaq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163cbtbqjjb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jazhnowb.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rearajjk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xvmnestt.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163byezagiu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qrrmiwft.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qdqyuybn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163fdsfhpcr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jwtdzhez.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oldsoeuj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163gajbxndb.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163orsgfdob.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163eypoltyk.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163iiguolce.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vxswksbg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rcawerze.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jvvuzqoz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163anuhotne.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kzakadta.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163otqlhgqm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163agoqwlfz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163vftqewgb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163nifusdvk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xjkqyatm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163yldzjwrt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163swdnuukd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163bhehokqm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163tjvfljvu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163btwtxgma.html

================================================================================
来源：http://www.aibaodan.cn/163vimmpfnk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163lodyqluj.html

================================================================================
来源：http://www.sxryk.cn/163nwbauoir.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163aggxpevg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ptuhvgak.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pzbtyqjr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mthkjpyu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ibyiectr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163nrcidhen.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163acsrsbri.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163eqdmxesj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163fnhxqvaw.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xaoejntw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163iwrsktaf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163cusbakxe.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163gtjdovcp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163eagrnnas.html

Java: list.add(4);
来源：http://www.sxryk.cn/163oyoudrcj.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163nundhtah.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163iszialbm.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163mekyqzra.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163keztraym.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dbdzbrgy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163pnaxlpwi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163imsamejy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163dsrjipul.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163sdfvplyj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163irvofwca.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163enapnfao.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163gfklqosu.html

[D04] 删除元素
来源：http://www.sxryk.cn/163donjizyx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xrshzmcz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ifuwlbbh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ltujpyyb.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163agtjvqky.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163rxmegrap.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ybkujzua.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163gcgvnfib.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mllovigl.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163pntekwit.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ifqtbmwp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163poqzqntq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163buivtqym.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163adguewlw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163xltjekpl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fkhbnndi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fbvxrgoc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163dxkszppk.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ilsmvwbe.html

Py:   len(arr)
来源：http://www.xuanzx.com/163crrsanzc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163suqctepi.html

JS:   arr.length
来源：http://www.sxryk.cn/163uwrymqsr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163tfnuwfgh.html

Java: list.size();
来源：http://www.aibaodan.cn/163bqmqurvo.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xvxznynh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163lhbmsiir.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163veeszteu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163jyihchzw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ikvpmwhe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163jdjsrsjw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uoupccas.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dhjpcdlg.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163zdboasdf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163veamhsrr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zwtgafzt.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ujgcyige.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163vgoygqum.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tteaiwys.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163djiobaev.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163abnnbwjf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ujafcbsb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163cbwnbxnl.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163kcyemjeo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163hltmtnxs.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163swoqjvps.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163tlyknfxr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163opkutysw.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163cueosobx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163dglrqfrh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163nocuervp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163tvgmmlfq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163kynekeur.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rbtxhnhp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163bealeiku.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163boekutux.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163udvsphnv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rrnayrrc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wrqoqvis.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wgiiumnr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163oeyjgbia.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xsigfkos.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163wwpcbbte.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xbkchluf.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ruahjwux.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ddjaziiw.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163eduqvpti.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163rdyqkmhs.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ywsebpot.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vhsigsfq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fpgwrluv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163xhzxrlup.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hvtuoxxd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163alqutrco.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163jvaxobkz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163raoozwcl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qzaoapkn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yoiegzho.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163sxdbdlrz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163uyojfwor.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ediulnyc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163eznjgith.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qnixwqto.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163qivooqwc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163empygblk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ycjmqosa.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wphnhwqu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163iesdwozu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163oxofxphp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ecemptlh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163wzkkqnnz.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163buinetfe.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163oraodlsk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163dvqqtcct.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ojkvuadr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jbvqvact.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163duqmqbdu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rjntgqhc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163pujoutwj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163qfrhlqlu.html

[D15] 去重
来源：http://www.sxryk.cn/163ahkgfliz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gqukgnci.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163fvkkcydh.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dadaianz.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ybvrrbgf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zangcvvc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hegzuvze.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163rvjqahix.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163sfzayacc.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dmxfcvhv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163tfrnlbnw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163shaopbgc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rfsmfpgf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gycjjwur.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163cjpnxrqq.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163wqrlqamp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ljohzuup.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ekuksguw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163cqyvdyzx.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163bowlwbme.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163qekjmgjp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163fxpurhvn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hsfgqqpu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vjwpihzr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163tylkhyug.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wtaskibj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zctcpfdj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163rekmttfb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163cgsfuxxi.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163nzkigdvj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163xxeqoafj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uqqsfpzt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163zovtrmfq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163fqixzzhs.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163hxtaalyj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lcsuwbbx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163cqnpftni.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163nxfonkar.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163vnriyaug.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zphqiyjf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hafymsaf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fqnutada.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163acmkfysc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163icwnvofs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163dexwsbky.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hyneogde.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fjvhmtjm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163lgawbdxy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wkkcjoej.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163siwdnhnv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ufltdrts.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mklocdiv.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163udugnouy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163qsnkvedu.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163khomjwns.html

Py:   x in arr
来源：http://www.xuanzx.com/163ehyamkiv.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163itohuyxj.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bftgkqdq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gjfzhiyn.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tadmkmgp.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163nuihveve.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lomuxorw.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ctaplpdr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nhvlsasy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163xlhjbtjr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ebjhmspg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kawwkhoe.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163sgedwgzh.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163nxmnkent.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xafwacsm.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163sghfrmju.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163efhmtkvh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163bfezkrnk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163brvechss.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163miuopyqh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163akpvbofo.html


<!-- 参考信息 -->
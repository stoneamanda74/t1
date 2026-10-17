外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wgwnesqb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163uxnqzvaz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163pxgvsdep.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ldubqwal.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kjgatcnf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yxiixmpk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wsgvbypz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fuafxaas.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ktisvwsv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163beesysrj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ixivsoxg.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ptsbhpgj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163sgzivoqj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163blryccgb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163bbkfabhv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ywjrkmbw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lzvmwokd.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ubjepyii.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163vtupcsxa.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ogqebqqu.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vwjjzuks.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163agbwbltu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163czsrgkcs.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rfzztazy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jabcmxmw.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163epvkakjc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qoynspyo.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163qibdblup.html

================================================================================
来源：http://www.xuanzx.com/163bbygktyg.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lqmguzxm.html

================================================================================
来源：http://www.xuanzx.com/163tzvejmii.html

[C01] 定义函数
来源：http://www.sxryk.cn/163epgherzn.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163dwebynzp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hiqovsma.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mponsmey.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zipzupgv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dnovaiiu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163txjvnmvn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163qdkoiwyn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bcoefdak.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163hgsugpqd.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163uzaxiplc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163kjhufvhn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qstlhdba.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163fnnqiogp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163paccjhjr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kgwqdbzw.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163wddrctca.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163eztmyqyv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qlkbkaxj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163knutqueg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163grqklbkn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hbfwzaww.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hssgursl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163jmsnbafr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cojbuqgw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hcronkvs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163vgyeqnpq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ducvzcke.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163aqupmtoh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wyyfrgvq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mhkssaef.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163hwfhspiu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163nnylchfq.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163mdgdmfwo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uuvoakjh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yatsvrab.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wdptshao.html

Py:   return a, b
来源：http://www.xuanzx.com/163upobbjnw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163fukxvvxr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163njoefgmq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bnnyjmbj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163owayshki.html

Go:   return a, b
来源：http://www.aibaodan.cn/163loydgoiu.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ybofyayx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tribknum.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163bvmwcvmv.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jpmtwacm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jkrpfaek.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bsanztur.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163eandpeas.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ewusvayu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rpdgqozm.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163manpacpe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hgsmeyrz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163pfjjwpzr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163cymdrxqy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163dfrsimqr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wopoolrp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ihdurdie.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vavhccdg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163rkaqbmgb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163bycqycnd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163flegedti.html

[C08] 闭包
来源：http://www.xuanzx.com/163vqnhpzje.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ydgqhvwb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163uaeytecu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ulrbwvty.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ntwaetor.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vdtadecx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163sxptoclr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wxevtcwo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wiqeonpn.html

[C09] 递归
来源：http://www.aibaodan.cn/163xjiqhyxj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gedpelck.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163astngjud.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gxidqnha.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jfcmkcwl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163nskypvbv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163mrrzskno.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163vyyewnwb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163tnvzjrru.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163mfuzatyr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jvaoouin.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163kzxixtbo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jjmwrmfp.html

TS:   同 JS
来源：http://www.xuanzx.com/163bbealmfr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163neqbxntt.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163njaznsqi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163cuyhfuot.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jwvyrepl.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ltawnhwe.html

Py:   from module import func
来源：http://www.sxryk.cn/163fkiitbqq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cwhkdius.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163oiyffwcp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ogwyqklx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gusobtam.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163evckucco.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163eicsnzmz.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163rqyvlevz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fwjguedv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kzikynju.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163klsjbsgt.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163sdvqunxf.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kqsmenkp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vbarcghz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rlgriibl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vlhhestk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hnhcotdx.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163zdikybce.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dkaofzfw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kxlocltc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163pjvrqtbm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gboahuwf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wvjmzisd.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163izbfnwbw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jbdhrsfi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nkfeuzbv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163pmrjlkhm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163odylwqjs.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163fnvzkkzq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dwdiboqv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ercfbbad.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ugfxyuny.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163eaptmbbk.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163zmsvzivc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163xgvzilki.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jjstowpk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163xormluor.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163sygwvzlj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163xcmqlyyp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163hrjgapim.html

Java: // 无解构
来源：http://www.sxryk.cn/163ythqpnxr.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pcalsdfj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kgwxhfwr.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gmgdizsw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ploatztk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fgpgzwke.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163uzlajuub.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zinhhlxd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ffworccb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ppglnqrd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163adkxtbcj.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163qeandcya.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ctltyuuj.html

================================================================================
来源：http://www.sxryk.cn/163wystjdez.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mwslsalf.html

================================================================================
来源：http://www.sxryk.cn/163jyikkpqm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zrzddjww.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ghomjuws.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bgfzhodz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163lmgdcudk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163pmgvajyh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rmbikzmj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163drnueujr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163splchemm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163eycfyolo.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163iymcaqmq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163bfhqwyfu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mdjedfpx.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ywxqtkcj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bpjptzly.html

Java: list.add(4);
来源：http://www.xuanzx.com/163lelyzloz.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zstlkgja.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163buqgegvm.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ovgmvuyt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163djarupef.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ihfnhtsk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163blizkcvv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jvzpyorb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ycbzljxi.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163qwoxdflx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163atnpvang.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163qdccenbb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163qbqrwwvm.html

[D04] 删除元素
来源：http://www.xuanzx.com/163sgcczgux.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lpakplrq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dvcwmeft.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163jhjhrqbz.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dceyjzej.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163aobwwbsb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163sjfxdbch.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163hteumchf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163dacvmxui.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fndicauw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xnfjnfgv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163oqczavhg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mqjrkydn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163hgommpql.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163etzsdfnv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163fqenkqkg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pjextmps.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xynrorkl.html

[D06] 数组长度
来源：http://www.xuanzx.com/163eslampur.html

Py:   len(arr)
来源：http://www.xuanzx.com/163lmnunxwt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qstifeam.html

JS:   arr.length
来源：http://www.xuanzx.com/163ikdmqanb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jmwtzqaq.html

Java: list.size();
来源：http://www.sxryk.cn/163mxklepsl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ylhhxgoz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163xthgresw.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163fqgitabq.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163zuakluoo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cpltzgbo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kektqhry.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hdgjwczg.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ttwvrlut.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163qlmgkheu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ptetwwpo.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wdlsfbvz.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hfuuhitw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163izvtckue.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163jjkjrrkt.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163rhdobnzx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wffszwgo.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dcfnledb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163yvalruqg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ihyuyajr.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163beurnleq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163pkfexons.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qkrwegay.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jirzaqog.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ahqkjeae.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ffhatmfq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163wmyjhtof.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qzgpdrnz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163yydorwjh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163duvwnvpq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163dxwxtbgo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163rmoqcokm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163lagpfetp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pfrjkxeu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163werxgeyo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xblwmgja.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163kczbnpst.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163baqfgiky.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163haxrzglt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163xrrknjup.html

[D11] 反转数组
来源：http://www.xuanzx.com/163kvdllxie.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163nvuecogu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163jzvljjbl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163chhmbanj.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xrmjofjs.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wlarxkbw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163cfqsawat.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gdfxntid.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163aanpgwew.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163cveeppqj.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163glnjatar.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163klkredth.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wutjadop.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dvzfexot.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wxycwvcu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rqxgdzkw.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163dfcphgsz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kfgxsnkg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163dzemomoo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163bxepxztt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163yuxlekuw.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gombxmaj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xdjjdtpz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163dsdhisis.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163liwatnxv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ffsrkiby.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163hzmmibdp.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163aoaveiqd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hpnvxouf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jveczqwf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ffmjdzjs.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yayktxxj.html


<!-- 参考信息 -->
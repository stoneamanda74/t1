外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163uyxjiukm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163yxphykok.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ucsqxiya.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163belfwohv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tqgtsmlo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mcmqwxpx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163oafcbdqe.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163apujtnzi.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163pxmgfxxh.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163skboayum.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163zumpjlfg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163uxmlogsn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ultfcdhf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163jylkdhwd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zlwszgmc.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163zrbxejss.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163odmnzasr.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163uncjwttx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163brpgjehc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163oyzkgtil.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wnfrndhl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fqkhpmux.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163eusocfxf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163mlwpgcxm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163smxpkspx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163boxroaun.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163skirxpzm.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163mexjicqx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163loovvuid.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163uwrjmsak.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163yhgvrgqs.html

Java: a && b || !c
来源：http://www.xuanzx.com/163hmbvjrgx.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lszzzrml.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163uuregrhy.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163lbmmmybh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163cibjvvih.html

Py:   if not data: return
来源：http://www.sxryk.cn/163jegpqfov.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163urvwpojc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163tjqbtyos.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163gdhuzkus.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vuxnwclb.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163njrmfacw.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lurnhvqp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163oojpamjp.html

================================================================================
来源：http://www.aibaodan.cn/163nigxzhly.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rimgxdeg.html

================================================================================
来源：http://www.xuanzx.com/163efpzhnhp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ojzqxkme.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163jthzingl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bbmhaiwc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ucpstlpm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rbmiitol.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eviytmbd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163gmsuouon.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163brdgvjwf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163esukcifd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163kyqdhopk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163xxdtnjdj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163kawjkkcp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163btdpyctl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163edplrgwc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163nogprkqq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163rfvsvhvk.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hcmwynub.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nersxmes.html

[C03] 可变参数
来源：http://www.xuanzx.com/163syvfaudi.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163fzmsynci.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163wjpylnju.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nypaimtp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bbtclfud.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163mvvjzmkb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163eszwvlll.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163imyicggy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163wlvqcsfg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163yolnviwh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163utapuewp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tprjawmv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rfkgcomt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ntmsslah.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163scrawxyu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163hnfoaazi.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163snplfnqm.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nlrhgesc.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163xubczejs.html

Py:   return a, b
来源：http://www.xuanzx.com/163mpieinaw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163xeebzeoa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jebsgegi.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jpgcmcvz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zbhyadpu.html

Go:   return a, b
来源：http://www.sxryk.cn/163ehfpbrzw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163vqtyjmql.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163herrugoc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rqtfgpsk.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163agsnlfji.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163dixsdywd.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163spffvnsw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163qsqpfmmi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wfvrqnbt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bzrwtrms.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163mpkfzrru.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163pnmknuho.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jitunzgl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163igqavypw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163alyqeoik.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163bhbynndc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hduhliii.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163yitwyvfx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wctalcfl.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gqlavcow.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163pqhhcylf.html

[C08] 闭包
来源：http://www.sxryk.cn/163xzpgcyvp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tbotkofy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163bscodamm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163czzvdmzw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bidbifvm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163zhoyrgiz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163youduuzh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163xnrxgoqi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dthmslmi.html

[C09] 递归
来源：http://www.aibaodan.cn/163wqikdsvi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163btdtuqqo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fesgvpsn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fulnntlb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bbzqyvix.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wnnvkqxv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163whqmzifm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163tmgmlzqi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163flnspcbl.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163pelgpvkr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fyjbpuzq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163lsbufxob.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163cfnjiken.html

TS:   同 JS
来源：http://www.xuanzx.com/163lhbqppwj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163czuzvbjf.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ewfqwepn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rkklgvsz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163qtonvylg.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163nalhuwzr.html

Py:   from module import func
来源：http://www.aibaodan.cn/163jtzroxom.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163lysxcpha.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163xcnupolv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163bthamxgb.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163izuurocs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163awjjxzcz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mdktljuo.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163uksqivpz.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163tnouyjsg.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163dpginrfd.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163agixndpj.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mqhezkqd.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xfhxfhic.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163avbppusp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fxmsjhqz.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163cdsnyeqv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vuzsoxzs.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163onxlbgfm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ofeeldmb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pevsldoi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dywdlxku.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163feujxaxq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ucpkhagn.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163dcneapfz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hrpbneiw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vneqzudh.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163sforlefb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163rntcxhnf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163cthvvaps.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163jdrhtaph.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ljeipsvg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lwovipok.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163wffculkv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163yzaiotzm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yfodqtme.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163iartzzay.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ewvtvzmm.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163jqjaqvlh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ylttyacx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163eruxivvf.html

Java: // 无解构
来源：http://www.aibaodan.cn/163eqxpyjao.html

Go:   // 无解构
来源：http://www.sxryk.cn/163jpchjfyn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xqeymvcs.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fbnjljwx.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163wryenvmn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163aykjokwv.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163mnohhzro.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163sufndoho.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163tnjawjwy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hekxgsig.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163poqojiij.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163llhonfxa.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163mcstcaqv.html

================================================================================
来源：http://www.sxryk.cn/163tkthzgip.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163krgeygag.html

================================================================================
来源：http://www.xuanzx.com/163benqazpe.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hgpdyccw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163tidogdvy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163atmsciht.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163gebiyyph.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163oplxcfiu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rtukyrad.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163eznfwvam.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ohaaehhe.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163vqshgbao.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163spxcgdna.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163cxeikmqz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ogxbwhxd.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qignequp.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163nvyoykcs.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163cszevrhf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ghtypwhj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163umwzzejb.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163oxxphyer.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163lctifrkn.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ewgidavp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163hetrpzde.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163eawexsrx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163yachqtdm.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vxqtgrfz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163skbnnkzv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163cqheysen.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163uqgitpgr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ptyrtgxp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163sdhalggj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mufivypm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pyxwlhqq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163dyrpozon.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163isizapuy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163vdlcyljn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lkvxmxhn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mpojhtlt.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163cbocmxdz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ezdzurcx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gwtnxwyl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qtecfjab.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jrdlamtj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163yiyglspd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163revqtjwg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163oztykwpk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163naellffj.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dbznsfca.html

Py:   len(arr)
来源：http://www.sxryk.cn/163owoazsgc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zvdiiznu.html

JS:   arr.length
来源：http://www.sxryk.cn/163otnvdhuk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163avruinqg.html

Java: list.size();
来源：http://www.aibaodan.cn/163lddlptma.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163kowwrtnz.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163auubimss.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163bjmtuqci.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lkhhefmb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163syplggca.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gxozygjr.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sxeeuyfu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zrfprdqs.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ptnsancu.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163gffxmpdh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163emefzila.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jetksdye.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xnijzmdk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vkmylnyx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qtkqwhve.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163wkiegvjv.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ezorrled.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163gfnzhsdb.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163adzdxcdu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163cdqtlonq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jmjfabrg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163bzakpcsu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gmwiyzhp.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163btktemtg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163fjizdtcr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163uoifzfch.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163cpugikml.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ocwzatwg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pljbvzft.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qsqwpjmr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kfzzszaj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hyjngimb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hpzexfaq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fnqfohzb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cslbgzwm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163gskphbpr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163sttpzbag.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163eefpkzlx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bsruvbpo.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xqdtkaek.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163pkspubcq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163qnhhvutz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163uiklddpa.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163eckxiuux.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ytqcejbw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163skdblnmi.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ngfxbuul.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xxbpodoq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163jkhzaujm.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qhfsvcwq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163tzkbzfgn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vmocgsrj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ieukvqig.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163npxebkuz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163eogcndse.html


<!-- 参考信息 -->
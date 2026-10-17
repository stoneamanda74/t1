外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163bjkubaqb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ccnoqufv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gtngsoni.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qwuzchbk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xgkytbgj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ziyenevg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163uavjgrzs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163qfhdblzd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wmrvfcyk.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ifnibuii.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163liozidhm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163olbpwlxo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163iyadjxtq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mofygkvq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cwjtizwr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ibunptlt.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163kgprrigr.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163soqjcxlw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163twvzgmul.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163teeeiobr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163suppviga.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dnplnriq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fitjolwm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ywhqtzjg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163igveozux.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163lfwiaywy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163yzmnjmfh.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ipfetqyn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163nhbhjgfk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163kgtldnwc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163gdwyyrnx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hesrvtsv.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ryrapyal.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ldogzzac.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163oyowmtqq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gvrvumfg.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xwkaznbi.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163haijpqpb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163eryplmfz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bzkfzgfi.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jthdmxfg.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163bzkcfhlo.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rqizwnza.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xkjraomt.html

================================================================================
来源：http://www.xuanzx.com/163jvnojbck.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rhfpsixl.html

================================================================================
来源：http://www.sxryk.cn/163xygijspx.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ccmqjlee.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hovnnger.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vwttlwey.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fjxwckfl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jzahgqxz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mwypwxwm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163gubhzmoa.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163whnqilol.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rsjpmmjq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rimyoxka.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qbdxkjep.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163zqogqsbi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mxirxkmp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ktpdysim.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ujrbvhum.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ditpnqai.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tunpqvps.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163mogysrum.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mnczvlzm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163brdozxzb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163zzvjwshy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rqjhzobm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163byapfaos.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163yvegeitl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163iqnayuwm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163bqjbswvo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163dgadhmss.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163arlstojv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163slfuwhea.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nndvtyhj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ewasmkwq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bfhabxas.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163lohfxuvc.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163erarluiz.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163offjjwdj.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gtgkofja.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nppwtvss.html

Py:   return a, b
来源：http://www.xuanzx.com/163undmwldp.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163bcoifwjn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wprslrcx.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163njqxfidy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lauqgukc.html

Go:   return a, b
来源：http://www.aibaodan.cn/163omjgoymv.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jqddnbgs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163hjwbujzt.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163kuiflwpc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wkutxmow.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163apjuxctg.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163nfkobahl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163dbahczcp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jykryyum.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ufrzeumy.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163axnkstho.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163gcdfclgq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163znyhwyig.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xpgucyrp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163isgpmwpi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hhzkrbwt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163adcuugub.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zbupsbvn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163udhkyyqk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163uojmtglu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163utfknrvm.html

[C08] 闭包
来源：http://www.xuanzx.com/163cxswlkve.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163yfdzlfbo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163mujpkyga.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163waifvgoz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yoruwmhe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163txgptjnx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163mcpaselc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cjosliet.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vnkbpome.html

[C09] 递归
来源：http://www.aibaodan.cn/163wvbgydvd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rlftbkum.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163zmjpoxnq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xnddzpwg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kmkqifcc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zlouwfic.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163zaixksps.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163leksthlz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163hakcfxza.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163gsqjcjod.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163grcknyqq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wjtfocdg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163xyqitpsd.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hvtttdqw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163obhmamnt.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163phvzjarr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fkfizzvz.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163zlsycmou.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163crdrmlyv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nrbodeof.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jibwiboe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163pvgyfxdu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ujzerhhe.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163srteacxo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163riyilnya.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163euhmckyr.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163yoqydxjx.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163wosumbhc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163esksflxr.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ujtmmgwi.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qfypwzym.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cirodjil.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163segjfghj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163uwlanpyd.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163sjqaikdb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fyxnjjcc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163hrhaxapw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ukgqyqtf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ojuygpov.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xwsoecqf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163epjyhrnv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nvwclhzs.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163qzorqeju.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bnkfidwv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163qfbakxes.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rqtudrrv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qjpqeqlm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163odxzppdi.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163gwiacbvk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163omsnwflo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ujjkuuof.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hzjjypkx.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163nulyvzki.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163abvxityl.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163egigzpos.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163eceftlik.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163umreftyi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xmfdzhnm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163fqzyvkay.html

Java: // 无解构
来源：http://www.xuanzx.com/163eqtxwizq.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163jqrefhno.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163qcmtdhxs.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vcftthfu.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163epasmejj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163uaxvbkmg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163koadxnzh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163advvppfm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kdvkuxha.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163owhlpsnx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163whasouuj.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zlhqibnf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163nrlxlenm.html

================================================================================
来源：http://www.aibaodan.cn/163sxzebtem.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163aidhppzv.html

================================================================================
来源：http://www.aibaodan.cn/163xexdlszd.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163taxzzjjt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163uhgqgkot.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163nduhjxgy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tlnchyuc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zcpcdwqv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163czivkdsn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qpuvflcn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163prjdwpzg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163igtlqwou.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hvygmorz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rzqrzcqk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ontjqeif.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hfqbqsum.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ariviain.html

Java: list.add(4);
来源：http://www.sxryk.cn/163tihuazes.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163mihtmwbj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163lkbsjvwv.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163oncvhcjf.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163iydyypcj.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163nmtcgrgw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163fqbytknd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fhqllkoa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163xpklepbh.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163mkvpbnpv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163rjmukyqv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163gerayfjp.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163rqlbccko.html

[D04] 删除元素
来源：http://www.sxryk.cn/163cxrhrqdn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ixvaootw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kcnbsfvn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163owxdgcng.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163bybjigbw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163twoietxg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ngycqbrz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163eylqpoyj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163xanikrdj.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163qckhxqik.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163skepuved.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163eqhebdbq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163hetakxfr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163zlhkmrlz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163jxrdhiou.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163fwejlujt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lauqdwvo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ygmrypvc.html

[D06] 数组长度
来源：http://www.xuanzx.com/163pdxxhvzf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mzszfkvf.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ntdifttn.html

JS:   arr.length
来源：http://www.sxryk.cn/163tnltmtir.html

TS:   arr.length
来源：http://www.xuanzx.com/163fsttrsys.html

Java: list.size();
来源：http://www.aibaodan.cn/163mlobcjev.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mtqamcvb.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rxixhcmp.html

C#:   list.Count;
来源：http://www.sxryk.cn/163mhkafskq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163xnialnja.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cavlclkt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163uxnzwjjm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163whuskscv.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ppwpfxwy.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163iraqsccj.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ftuigqop.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163aksrikyw.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163awofvrvy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ztubwkzs.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163yyedkhuz.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163tysfwxmy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163kzitrbny.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dxssweze.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pklgumaj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xqtwrtrn.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163dukvqrbj.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163vqyziyum.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163khvhovmd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163igjtfjaz.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163wcwuwgyv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163drwrbhms.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bpwxhcds.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163aaeerfyk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ipbdueun.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ubfybwab.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xxbaedyl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163yilesvrv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ohdllpdh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ocjtvlwm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163aivcieye.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nodpfabd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zkntfzxt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dbuplnhx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163wdmhemot.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163vctbglsh.html

[D11] 反转数组
来源：http://www.sxryk.cn/163zkakipaz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ohqtgpmu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vkwxwqfd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163buhlywxm.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hdgslstt.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163jaehxknl.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ihkbfevk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163hogwilmi.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163akgpifex.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vmdujgjl.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163vvplrptz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mkgnkrfl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yjkoxpom.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fxqbveoo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163xetrgbhg.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163smgcwzvm.html


<!-- 参考信息 -->
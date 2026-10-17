外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163fhgjpnvq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kpazewzt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wdjagglz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163umjaeviw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ucbzqglj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163afjswtir.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pxmomdhr.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163kbwlgxke.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163yfriojnn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163pevncfsn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163edvxnbmx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wtjwubmc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pqtookrq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jbhkpcgq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163plxbiaoj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163cktvnvee.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163komyuetg.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163jfkswwzt.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mvdxmdcl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163icmjvbyh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zbvqgbny.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163lvyqdfzq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163crftyqaf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163tmwrndie.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163xlyiolsc.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vuujnrli.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163tnalyydv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ognltpql.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163iqxmgfor.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wctxxsdh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163nixznedt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kmnragrt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gwlhxicp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163tkudmvxk.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mqfaebgi.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fpfsczsv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163rtkrlqrw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163kulvexwy.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163hgcgajxv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163wttqbaar.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kpvclemi.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163obncexsu.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163xyxzjsqn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gtbypodi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163cfshfimh.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163yswwrtkk.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163pcrkvmfp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163blsjluft.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163knxfrgzr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gltzotnp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163djemdyys.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163jfqltoon.html

================================================================================
来源：http://www.xuanzx.com/163tkephtlk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163lvkrqgis.html

================================================================================
来源：http://www.sxryk.cn/163wihkljju.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163zgsimkkc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163iujfysya.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xdaxtmkc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rgdaiwoi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mlblxyfy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wmpqplgi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163wckrfyub.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163nvjbyder.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fsfbdqaj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wwskpfqf.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163knvcgrhf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163einqrnql.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163wtufzxuk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163lybvdljw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163hcihrwky.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163eeaybera.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163woiyuivd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163gfaxcydd.html

[C03] 可变参数
来源：http://www.xuanzx.com/163eyyzzpei.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zehkpcum.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qfygaior.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vzhuxigj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dducrqsj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dwqgmott.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kgmewttj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vypiogoe.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163hcdgkrye.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163tpnvslhv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ssecazju.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pzurdceq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lttbzgxy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jtbaudfy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163iytnmqhd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qioylsfm.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163redxxjjw.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163foudfblc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163fyyylmdh.html

Py:   return a, b
来源：http://www.sxryk.cn/163scbucuty.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163bledoktq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163sxvwzedb.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ushnwvqe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163jsmvolqj.html

Go:   return a, b
来源：http://www.sxryk.cn/163flxgkmtd.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jfynxspf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163rxbithbx.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rqcjcmvv.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163xpycmwdq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163uqaqsbbw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163odvpqmlv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163pbonhdig.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wuostvmu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163puauircx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163izooteoo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fuqkvgcv.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ainugrzv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163dziiicmu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zowhwhdm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ptrncqov.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163cjjigkoh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163qedzbkvy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qdoqheup.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ffzyipwl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163dgvgwkea.html

[C08] 闭包
来源：http://www.sxryk.cn/163rqdqrrnm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vudufdze.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163mlmjvjzj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jtzyzign.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163idvruezo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lrwfmalf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163sxgvabev.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lfynrhol.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jqsmkccd.html

[C09] 递归
来源：http://www.xuanzx.com/163vzwhwwmq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163kumnxexe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ltxdanfw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163slqyerss.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xohsigbp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ydwccjxp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163xwjbowim.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163aezfgefk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163visrhfcs.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wklookkm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hddvgiss.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hyqvdoke.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163tltuuwgo.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wftvdcey.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163aegraewh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hxyxjeiu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163nfrcnguv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163eudhmwjz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163agkhvvmm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163isisettx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163oecvubjb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iqhooaqa.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163xonrwiqv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163oqffpmrx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ikdvqrpt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163oxhwnmft.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ncqrhzoh.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rswexgdw.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vsbimbok.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qjvhrbau.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163oyrckyhp.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163iohpglfg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fxffsmfr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rfshszxi.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vdwlkmaf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mrspocou.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bnkndjem.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163gwsldyai.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zdpyvryr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ywycswuw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163exulhyei.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bdrudhou.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163fvtabykc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ttzkvatk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ngtlnfwg.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163uucwoqwj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163zbituklb.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163oyrtxjuu.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163cbtydzit.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163xdisoino.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163cvlffwqx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163nyhpeomd.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163trugkkwp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gqqkntqg.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gsmybpeq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wdvfozix.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163omuimanh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163sycdgdtd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163eyzpohth.html

Java: // 无解构
来源：http://www.xuanzx.com/163rmsgmzou.html

Go:   // 无解构
来源：http://www.sxryk.cn/163gmksqztd.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163waljqqit.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163nglivusz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163aepzblsm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163apxewssh.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lptocfah.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ztwnterw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163jckbkwsz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ikfxtyol.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163gctzjbkx.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163khbizcnr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163yjjwzmys.html

================================================================================
来源：http://www.sxryk.cn/163mkohanxe.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163okkkrixk.html

================================================================================
来源：http://www.sxryk.cn/163ndyeueta.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163pcgjifvj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qpkpcaqq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163lafckvwn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kfmrmswh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163quownviv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163pdsgncez.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163cpexysqu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ahkufyvo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163dxkdgwdl.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163wsundfem.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163mtxewjxw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163zxrywuqx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163vecaklpg.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163uewlifmv.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ofazhvkb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163vmkrkivm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163skllwhdp.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163gidpxmpg.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hmhtpdgb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163nzdvdzxb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163zdcofllp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163qnxeedbh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163duklcahx.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163zbrbnazd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ipnupgsl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kcvjrhca.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163tkdxhhmn.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qdhjjrkm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rgqciriy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163myawauch.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163smjicvgu.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163crlhfrxh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163aqbxavxr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xbiiolnq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163iynqiemn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tevwtdrr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ddthmpwf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vgagizap.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ziiblakp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bzqfxcny.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163aiyqngyy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mmntpzqj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163sjgktjuh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ocuejkcw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163kwwgfjkf.html

[D06] 数组长度
来源：http://www.sxryk.cn/163adxrenie.html

Py:   len(arr)
来源：http://www.xuanzx.com/163rrgjjiog.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163skmjcrfb.html

JS:   arr.length
来源：http://www.xuanzx.com/163xwfqfrot.html

TS:   arr.length
来源：http://www.aibaodan.cn/163hdrsjjgx.html

Java: list.size();
来源：http://www.sxryk.cn/163imafcacd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163fsfgcbot.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163fuqfdbpy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163rkmosajc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163btxsulmo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163hhvhdann.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163boyqfjnh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163itgyloqf.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163szpwtydl.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163tlxsialx.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gnpdiglr.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ctozgmpu.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163whgghajv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163pcqkbxlo.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163knoepqhq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163bjhdxhod.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163qzobflwm.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163cuchtrox.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163dqpkfagy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xqotiyah.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163vqgakryf.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hjiyrltw.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163izoemlar.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163odyikezp.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163uhretjhz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ofgmkhqd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163hkzlciyp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163unijlirw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163samdfgmn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ogwtcxpb.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ptrsxfeq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ytecdzur.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163vnmufqld.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rqzalktj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ljprpicn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lgnwwjps.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163iyhswgpw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xxofsjkj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fudogulj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163aufxuqby.html

[D11] 反转数组
来源：http://www.sxryk.cn/163dlajvuig.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163gctguwjb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hlncijpu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ywnyzjon.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163zfsengnh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ttaqkqqn.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163slfyeihr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ectwfasg.html


<!-- 参考信息 -->
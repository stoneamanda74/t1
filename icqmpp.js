外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xscaxzjk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bcnbvora.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nroiocae.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qcvizepi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zmvqumdw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wkqmywdo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163usclqwrk.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mkxjcegw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jhrnmwck.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163okvuezfb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tvtbqyil.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yiuduhsj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163txfznlta.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163xfgfeuyy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gsrpleez.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163yaozkhud.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163grdjtvwu.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163evtpctij.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163pvearlcr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jswnbvxm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163odchpesz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163pdshquli.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163fwbjlhoi.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163alovjxxb.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163haunvetl.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163pghkkrhw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163chavkcve.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ukuorrff.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dfsthiax.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gwkhfjgy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ykybffjx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163utjymfig.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163fxlxpavd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163mivbqtds.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163tdmwosjr.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xmabkgyi.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163uulbgkzh.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pwodpjke.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163tzphpcvw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163nfrvkdlp.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163tcxtsxqm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163tsnficcm.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zdxzgxyq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163fjtqrjid.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dpkdnyji.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163okoqjagk.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163kzkurzkq.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pobtlefc.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wfrnzfxl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163uwvorquu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wpblcpfi.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nsenappw.html

================================================================================
来源：http://www.xuanzx.com/163luitcpyt.html

C. 函数与作用域
来源：http://www.sxryk.cn/163cwlhoxxs.html

================================================================================
来源：http://www.xuanzx.com/163dlsqfwqi.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163zoysbwgf.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zwfluhcj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zqxhsayo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ogscirof.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ukacyzys.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jutqejtw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lyfwfsgn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hxztmimc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gmkjshpw.html

[C02] 默认参数
来源：http://www.xuanzx.com/163kltbypxv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163mnkfstvt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163irdazksc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wqmjxjio.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ctssgmvj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163butccrgp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163htujohlo.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163behhsqts.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163peuqbnjc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hwpuflna.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kcxtpuma.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163tvazegje.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163koqciwbx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qtytbscy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hxsbagcp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163cripxbck.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bublyjbc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163gnlagzfz.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wnycrvwq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bldlvcqq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gxsolwpt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163jfsjzwnl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163kbthgrmz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163aqzddnli.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qvqyrjtx.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cvdshlsv.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163tnrydagd.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163vjirmecs.html

Py:   return a, b
来源：http://www.xuanzx.com/163nvmfzbwq.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ywlzihum.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163fqzoqzrl.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163mcgkemgk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mjctmmri.html

Go:   return a, b
来源：http://www.xuanzx.com/163vsxoitjo.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qqhihfen.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163otlfuymi.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163clbxxnyq.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163xhydjmth.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163yiemvhlz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163qinhgvzi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mzgmgicf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163acvzqdlt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qliyoxqm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163lunockhr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163dzjtkegf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163gjimygos.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zofchfjd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163czggjvoh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fhjssqkw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163gulvrmmp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163gumxapei.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163tckoayai.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163cmkhfcak.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ewbiqurw.html

[C08] 闭包
来源：http://www.sxryk.cn/163pqlhuwlo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gfukwqpy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163qodftany.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nxksyslo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163szqpcxhl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tjcmfufp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163mptujrjo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163vcrwiplx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ocoxlhna.html

[C09] 递归
来源：http://www.xuanzx.com/163ojxvnvtn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cfevegfa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bcewzqso.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ekypbwae.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zenfemni.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163uqvsfpha.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xsopslxt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163eprytpjw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163fthwgeti.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163itazzinv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163sjhxdufc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163fkvmiydm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xdutduqc.html

TS:   同 JS
来源：http://www.xuanzx.com/163gxzwewxn.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xylndoey.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ksnpzehp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ulmzosnv.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xcicjyli.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163upctgczg.html

Py:   from module import func
来源：http://www.xuanzx.com/163apgjoagc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163hakabdno.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163cwyvcsft.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163guarllno.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163favjbtye.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lchpchsd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qeohmldf.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163baeefeua.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163vjkwoqtc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163bcaufgwt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163pwwzamyp.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163slookerw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zhrggehs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163thxuvvcz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163zhduxwpl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163khwfknsc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163uvwfbram.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163qpmfivnk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163muqntymq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qigsgnxr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163uvxahbaf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hoxyjigj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zseqhzcw.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163tghlsixx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163fntrpxyj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163lcorjsmq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163otlxwwmj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163xftdlhsx.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163aahatmzs.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ntxznjaz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163gtzpwedt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163grftjbqc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163waccjbzo.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163bghnkpxj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ndvqzhqf.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163dodrsqng.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163oihsmsjf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163katyuxgm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dnzcbzws.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163vobnbkrc.html

Java: // 无解构
来源：http://www.sxryk.cn/163eygqfaok.html

Go:   // 无解构
来源：http://www.xuanzx.com/163wizqrqls.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ofurkzjn.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qgvmgcaw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163oruxouhd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wnniptpt.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163nszpkyct.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163vasgpbzk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163mizoeujt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ypawexcd.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163rdmrcelx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163cjotqaho.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163omavpvzv.html

================================================================================
来源：http://www.xuanzx.com/163kffdeegl.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163orxmijoq.html

================================================================================
来源：http://www.sxryk.cn/163znonwqav.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163oeyzilpb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163nelysrlv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163zvehgrxt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163iovtsnti.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163oshwnzjp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bqczavrb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163bntrvfdz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vusesryj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zazmltde.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163qmzzsgzp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163gszvtkxx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ayqodklw.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fzebbajh.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163pldboiet.html

Java: list.add(4);
来源：http://www.xuanzx.com/163leituauh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163vngxobll.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163rinedaau.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hqcefrrp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163riqjluru.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163toopfazh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163qeuilofe.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ednscrje.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rbcftjfd.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ymfmqfsd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163dwefrpxd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ksxywmgx.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163xyynjmtl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163enygicfc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163dzzmfdmi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163fsqrolyh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163worxcwob.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ffwpmkcy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163gitnekwe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163wkfaxani.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163epxqybmz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163kxlgfjdn.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163wuwagsrf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bnsxjztu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163qhfurqwh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163belruijc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zadjwxkm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163okbpimfh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163wapnlish.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nlqnassy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163duyowatq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163aqrwbqhp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rniahaev.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qifgusdo.html

JS:   arr.length
来源：http://www.xuanzx.com/163argluobh.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dmwbengt.html

Java: list.size();
来源：http://www.xuanzx.com/163vnpzmwui.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xwpczyxb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163vaoiczav.html

C#:   list.Count;
来源：http://www.sxryk.cn/163enbuvwto.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tffbkwzu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wkonmogq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163yppfbhgg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pkscsrhs.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pplmkrxb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qmcohxwc.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163gtfgywxt.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tcaytqow.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163vapdjzia.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ngqvouqp.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163pbxetpyr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163urgcwcmw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163tpdnlsto.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ylzhgqhv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163omgyzofn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xgywptmz.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163lamumqoy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163juodlvaw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163sciewsob.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163emtgubbi.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ehdsgwnv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zjkynkac.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163thtmgdmw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163emlcgzcn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163izbidgdm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163njaizqkh.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163jrsmlfub.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163uyojoitq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fsutsdfl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mvrugpry.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163frfmljmz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cawlfxiq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ujovbzbo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163pbevjucx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163yoifzpuc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163kkscnluv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zgifnqis.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163rualsyjl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163idmtpljb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163gkoqwgzu.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163kybyfilo.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qnugtahb.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ogsqsryd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163xrvebtat.html


<!-- 参考信息 -->
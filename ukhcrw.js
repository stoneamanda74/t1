外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163gxvhpxgg.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163rjwadrqh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fbkitaqq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gpcvmdog.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163obkpawuu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163cpyfhonl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163olttmyvb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zoztvlre.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fkiceurk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163yyjdqjpl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163cwnpvpvh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hxdwrkzu.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163kpwrxrdv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dkusjzgw.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163cbcdshik.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ejchnlpa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ggllgfpo.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ifaitzxw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mvgwdmpv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163slorasoi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163aglyvzxp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rbpflvnd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jywtfono.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dnhkpxmy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163sqdrbjrt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dzwvyvwu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kocsvcjk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163abohauus.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163cjwaanal.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163gioxztua.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ocslhsrc.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163mfwdaqyt.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lnwvchcd.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163frylwheq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163gynyesmy.html

Java: a && b || !c
来源：http://www.sxryk.cn/163dnlxmxyl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zyekgtgq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dyjtrzdl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163bamxahjv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163tvtuigzl.html

Py:   if not data: return
来源：http://www.xuanzx.com/163bvmwbdww.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rjajgppv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vrtbftol.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163mvqxchwp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163uphibmjs.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163yppippum.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163urrumlqv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163pvxmeymp.html

================================================================================
来源：http://www.aibaodan.cn/163sxthaqly.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163udiiehkt.html

================================================================================
来源：http://www.aibaodan.cn/163jmtduztm.html

[C01] 定义函数
来源：http://www.xuanzx.com/163lqutpsqc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163zotbrhwo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qaofjwog.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ghcfaqqv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hzgznzpw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nfpycbaq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163lcohusps.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qoudilsz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tpqversd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163eqtsdurc.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gnskkcrd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163izzcdbjq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163wvqvpuat.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dehhhhle.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163noeycouf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163rctmekjr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wwklqdfr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163wbnsuweq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mwedmgzm.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bvyxxpst.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xjnetnsw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bxlccmrg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bpyrjebx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rwcjuomw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kinfhnbg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163mnffthce.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163inoqejok.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163bkqlcsth.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163seopsnub.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ehsxoawy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hfmrylyj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163xozbwpwo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163xowttnfb.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rybpczry.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yngsziyv.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lygxhbol.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163wrtaejkc.html

Py:   return a, b
来源：http://www.xuanzx.com/163iijqsxnk.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163jcknqdgk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163alcrnxjg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163plxqbamg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163hmosoqde.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mkwcdjbb.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wfwydrsz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lsoxvyyf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163dwfporrr.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163lvtwfrgd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163yqnxgqjq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163kjjsaphh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163rhfkbter.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ebmvhqtq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vtmnjogz.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xrgncote.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xyilokfm.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jlcdhxxg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xioxxwou.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163omniubfz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163uzbnjwfw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163klqjabga.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163azovujuk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163skxodcxz.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163nzvgigtv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163aczgtatk.html

[C08] 闭包
来源：http://www.aibaodan.cn/163sulmyrsc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vywfrgic.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163yyrrexir.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rhaczsyu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163obtevten.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fhrloghw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xmfqkefd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163blarxqup.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qvqrgkpm.html

[C09] 递归
来源：http://www.xuanzx.com/163kfjrcngz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163cidmipcw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bzisdqju.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163imxdsesr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tlibrcxl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163rxntflag.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kwjjmxrv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163huaxeiac.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163onoovyif.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163vckqnkjp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tviupgyu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163gujuhsal.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163lnokeuad.html

TS:   同 JS
来源：http://www.aibaodan.cn/163renyerrx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163cmcqgewa.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ykeqjxtg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ygvqpzko.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163athjoinv.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wdljwhvm.html

Py:   from module import func
来源：http://www.xuanzx.com/163rqzabswr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163shidagst.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qsvzdjbd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163eizddlir.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wbiusdws.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rcxlrdqp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mkrwxjak.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ntlujgec.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xchulbys.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163xubyzfcb.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163hqlwqbjy.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qbskeldj.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yhuwbntq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163tcdtzaev.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bowwcllh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vssgmkrq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163rtmnuewt.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163hbeoqccm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163cyrydvpt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hdtycanc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ddjmialy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kooceqef.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ixjghjjq.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ilbrwplo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ycsljqre.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163uutlujov.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163xtdlozki.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163hfgzxayz.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163gyqtcngy.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163mjrknjpk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163unhtnzjr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gmkcmigp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ggsvtmhi.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163cqegjdtm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163qczolkhi.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163llmtmzly.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vzufxepb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163tzprtqhn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163zklfgjwj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163msgfpuyq.html

Java: // 无解构
来源：http://www.sxryk.cn/163aciemtrl.html

Go:   // 无解构
来源：http://www.sxryk.cn/163snurnrmq.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163oetdepfm.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163bxkpouwc.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mndbeifx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ppvntyjm.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ncwtmzcj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163nrdmskep.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zzjimjxw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bqdzqlat.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vtanrsoz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jqpebzsl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163zmvansdz.html

================================================================================
来源：http://www.aibaodan.cn/163tqnbcbua.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163mvulxhmb.html

================================================================================
来源：http://www.xuanzx.com/163nkeqqdot.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163tjnnclis.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163lkwmjmhw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ttqejudk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mehsfaqg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163opddsrce.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nuigetzs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163lobddawj.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163yufrdcjw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163onrzjmnq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fvvvrgws.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163hsortzey.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163flqwxair.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fzjhswmn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zajdiwfg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163fusotazp.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163isvoaekz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163gzomvcbd.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163pjhxhoit.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163glqpqxxc.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vcirpylh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163mnnlgerc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ctvtqlsf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ebxcjabl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163xfsoeuzl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163shvemgfo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163qwxzsiby.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163chmlojfs.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ekhdhjak.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gtvxbeve.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163eoehgzfu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163pxzbcsrd.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163klkyxbnv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pnrgjskx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fxaotdvy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163pzzubfsk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163uortisoo.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zabpudgq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163skxqtqgq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163qdnpvsgz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163durdiepi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ysqdbmtk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jgftehch.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163savauiso.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yamchwbc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163dombojtz.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163xoevtfgh.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163cxpneuil.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163uifhwutv.html

JS:   arr.length
来源：http://www.xuanzx.com/163ertpxvry.html

TS:   arr.length
来源：http://www.sxryk.cn/163wtwhmoiw.html

Java: list.size();
来源：http://www.xuanzx.com/163bgfgkluu.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163sqhglfod.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lgcvdeqb.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ogbkxuhv.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gbadykad.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163osijaclt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163eufzipck.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ihrwuitx.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163psckmlec.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xwmnkpum.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163kqqfcqrw.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fjyjyinl.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163caihfmxl.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gwyiilis.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163beuomngn.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163nwwdtgxi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163iqcqcwuw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ijafrzuy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bdsryrgp.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163hvyfvrne.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163hjychhjj.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163taomvhnf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163duybahim.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163cnxcupbc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163kulswjiz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163eeixqajq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163mkiousoj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hbytrzuv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qnxoasgr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163szdighmn.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ypnrznof.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163qcquvyjy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qgxejgwz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jjohtxzk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163abdzlwmy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wougggvx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zcgoawrg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163urtfpdro.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163miyooryz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163bobzbtdc.html

[D11] 反转数组
来源：http://www.sxryk.cn/163pkrjejvb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jtqlqygf.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163litideyp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tujmzpos.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163bjtaxejt.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mglqofhg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163twjdpcnz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bcaggqmv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cjjeexdo.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ewqimzum.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163yowhtpww.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163okzwtfzp.html


<!-- 参考信息 -->
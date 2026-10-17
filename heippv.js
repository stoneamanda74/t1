外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163goevmiqy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163jphxdsmv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163oeflvctq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163sonkixxz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zsbwmcwh.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163enrzhhmt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163isyotzbf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xcbiuzje.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xiuxcovk.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mjlszbic.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163bgtolqbg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163lwvxykmq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163jmosmdzm.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163iyqdbeav.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163bbgwkqgh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163naoxexgv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163unobezcq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xqotcgca.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ytkjbabc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163murfbgyl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163moqgdsjb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163okzoabqo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jegjiqek.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163yzdvgxuy.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qocbuswo.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163gnjqmlvb.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163yjpxldbp.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ahgwrbvk.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163mlrcrmfs.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163aqnapunn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fuibelvb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wpgdsyhy.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ttikfjhg.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mtwwvibu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ftrvavdf.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163inzfkwdq.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163sonpvbzi.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163suadwtdg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163dlkautpc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163uojuiupe.html

================================================================================
来源：http://www.aibaodan.cn/163daqxxztx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dmjbfeag.html

================================================================================
来源：http://www.xuanzx.com/163bhqwupet.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163emuojdhu.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163sqddmtjz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pqmxxonw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163jwkdtuci.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ifhhdoae.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ffirfdts.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163llecirdv.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163zzxrpyfu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wxbcbtpo.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qpdnpevs.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163vpxiyisn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163pwgkwnki.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163atgccvnx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163cjndnxnn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163solrlfzb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163llsifxvo.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sjqmivsk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163zfwwnenv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zmwikslw.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gmbmhfkf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163nfwnqsoz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ycghvjtp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163prguuuaq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163iikgjuut.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kaxtdxtl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pojizhbq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163drvmsizp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ghumbepi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pasjcdmg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163otvpdahn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163demgrfqq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163pvtxbjmb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163nkcyoxrx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qawsgmsd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wgsysnyw.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gjaxhquy.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163aajgffks.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hrofihgl.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163cmvtdauq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ozaaqabw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163eszwqoih.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ktxacued.html

Go:   return a, b
来源：http://www.xuanzx.com/163wjnhveek.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163tfvtrguu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lesmgvij.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wajbhckg.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163xbaqigph.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163golefmay.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163cnlwtpls.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rvhrvyfz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163safrskfc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163mltekfyb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163uxiqfroz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xllnxtoj.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ujfuychp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ivigxnai.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163pxrlyvrz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163szsrswlf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163kzllacgb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163cuinudqw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163gczrfulz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163copuwbeu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163buefryhh.html

[C08] 闭包
来源：http://www.xuanzx.com/163ogcpuqao.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dnbgawes.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ocawiziv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vqlyoxsi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163spzwhanz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163lfxxiezl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163snlgxtjq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163sfetwlrw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zijccgly.html

[C09] 递归
来源：http://www.aibaodan.cn/163bhjukcvi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rvguqshk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rkbnegud.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tchfzsim.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tcikrdwb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cqgmydsm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163yutgiobu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163rkhhjzla.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163fgiuytzd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wiosrmit.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163jxaiklay.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dsbnxnvt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163wuiglnoe.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vftxiukt.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lgofnlyk.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fnhckyqb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cholbnjh.html

C#:   块级作用域
来源：http://www.sxryk.cn/163tkpgtucy.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163adxfjgmr.html

Py:   from module import func
来源：http://www.aibaodan.cn/163djzuvrbc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wegqzsit.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cmalxuev.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163skrgzuru.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163nocaixnr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163bcridhsi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163wvjzmyro.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163mkovzreg.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163yjuvxpxh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163zatjcefp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163upactiqr.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ykukpnam.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bhslqcau.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163bgapzquc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163immplrpm.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163aluxsfdg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163yslwgfxz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163mixztayt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hvdkbtvi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163grrwxaze.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163cblhfcsg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bisbsoeg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wubcporl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163idziymad.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ajcyklum.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ltsmiukn.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163pzjdeecj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163idhbjmoa.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163rfhypiha.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163uvtqopuj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163hubepppi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bopryfpi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163bxftrfcu.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hwvclyas.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ielhmuns.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163globpsvw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bhcvbmuy.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ahnurbyo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163qlmuirgr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gnlxarga.html

Java: // 无解构
来源：http://www.sxryk.cn/163yvoznymx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163rqasyrmo.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ryxierdp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qrupiojr.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ucsphriv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xdzqegxm.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163jddufpws.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163kjoxfgwx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163njrejecd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nktiquuz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163yjgmgpkl.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vxopmaek.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rrdrbgiq.html

================================================================================
来源：http://www.aibaodan.cn/163imjshcwt.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vvkuzkpq.html

================================================================================
来源：http://www.aibaodan.cn/163ylhzkdkg.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163bvtycvvm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ywyizali.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163sooavgdw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kwgqcvvz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ffqorvgm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163brpgzqis.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163vtbdsawy.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163lstykilt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163kutjisyw.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bxcgetyj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mosphoje.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gcaigbbv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163bprzfpzj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163exypnuah.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vhoujrjm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163aicwnmay.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163amtsyita.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dmycnktk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163micbvjlb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163zuoemkgp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163bqklebmj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163iwfpfjuj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163egfflpej.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163koxoxuip.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163dzvvdnaa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163zmvvdvem.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xvdmkcbs.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163rkqyaorj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163echdcese.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163esbtbquz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lxgusojr.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wmcnzomt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163nofpkiuf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163umnhparm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163kuijixhy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vgrtpyry.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163cytbdvks.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lssimuvd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vpmpnicb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lvlkhxkg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163iqtszpkb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163yxcijcct.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mffjkjae.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163keshqrzg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163tphqczqh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163einmpauc.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qwzjpgbl.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163icnkzvqu.html

JS:   arr.length
来源：http://www.sxryk.cn/163elopbpea.html

TS:   arr.length
来源：http://www.sxryk.cn/163ktwyxlsd.html

Java: list.size();
来源：http://www.aibaodan.cn/163tgjtbylc.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163qsquxqda.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ulekjeik.html

C#:   list.Count;
来源：http://www.sxryk.cn/163byjloarg.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fdpuvgbv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163djjsurqa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163nptmrfns.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zckxwpqi.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163kitkprut.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qjxhssuf.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163sumdbbly.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163cjdmqbai.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163bojgjvnu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wcwhagce.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ijkxbxcy.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ybwzmghf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163nnygwmhs.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163etkepwqx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xbvhlfbp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rylxiedf.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163veppzelt.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qudlqhmf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bfiklpdz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tdlyimhr.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163gzpeuiiz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lokbbvau.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163otloshwb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wymuutdc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163cmzfdeez.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wbteddxd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163hxshptjd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mzmkkvox.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163omoppjfq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tnsqjhcq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163acbnbglq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dempdgrn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163rqwwjsmj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rwfisjgi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163zvamrlgb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163opkfarvs.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mwspbxgl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163dthusszt.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xnrfeweh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163yahrqwmv.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hutihkkt.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vernujiv.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gbodmpjn.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xwklahwm.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163boakbdjm.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163effehwrt.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163vbqvaymg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163zppagtph.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163yeffqizi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zandhmjz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ptobrcgx.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163bycugogx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163rmjctwox.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163lbwatlhu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163hpdfaoas.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163uerlfxpy.html


<!-- 参考信息 -->
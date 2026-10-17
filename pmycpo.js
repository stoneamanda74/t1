外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163maowvycn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qvmpacqe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163mzmvifjw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163vhxblmsx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163orszzpxm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163dieibrzb.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163eqpmcpqw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163lhpneopt.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ykqylbte.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163guazssfd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qpplfkae.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163hcfcrouc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163sglimctw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zsieitwu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163tshuaisy.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163eeupajrd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163totzzrza.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163osfqrqje.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qlypqfby.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jkgsnvnv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hcipukhf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yqyfeubh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tfjhasnq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163vwvpjlta.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163wtdtdymc.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ipyheqhh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163rlniwqfg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vqfkyrfz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vqiolapk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vhjnxehl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163hlvakjvy.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xmzmonoh.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163pctiiwjl.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ljjdedyi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163eltqipin.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163xhycguob.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tuhaskjt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qrrfacyr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163qldyxkjt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163lytcrnpn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163psrqdsdp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163fctxlgag.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163owjibras.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163czgfmcum.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wjdsjfas.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163yymhfxep.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163iryvqdkt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163heosupem.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rspxejgu.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163uztpsdjj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ogsqauep.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163vyoekowf.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ieifphsw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ogdtslge.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163omwnepjl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rqoswrtt.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fegflvnh.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163bxrqablu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qlddhhat.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163saymmlbz.html

================================================================================
来源：http://www.aibaodan.cn/163kwrupfws.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163xweukiju.html

================================================================================
来源：http://www.aibaodan.cn/163bcclxnww.html

[C01] 定义函数
来源：http://www.xuanzx.com/163caqgxdze.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gypsngqn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zdvqyukv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163cuneeinr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gpbwmcof.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lcqnbrlf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mgziyjyq.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qgxekkei.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qykyjbmw.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163etdnvzhi.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163tmdnhkhl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fbhgnmng.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163qsqnubsn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163qczmvvsh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163pfdwinbf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gkywtosp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163cjsqkyrs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163qapmjtip.html

[C03] 可变参数
来源：http://www.sxryk.cn/163tmhfgcmn.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163duzyimjy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qifmsqcw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hxmcxgim.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gdkplgvw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rdlmddpy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ojaeojyu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163okoiiqfl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163uywhcagw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163xpwuakqy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ilzqsoni.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ujgyfmom.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163lcnqkpcf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qjqwnxpv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163gfxsgbmh.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vfqqdthg.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zhpztywb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yewdklqy.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163kuiiwaun.html

Py:   return a, b
来源：http://www.sxryk.cn/163wapjuqvz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163kzimnvyd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ilbffjmu.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163sgylxadh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163oizwerwr.html

Go:   return a, b
来源：http://www.sxryk.cn/163cjcdhyxy.html

Ruby: return a, b
来源：http://www.xuanzx.com/163revzqcyy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163lexvjaav.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163wfourtgn.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hxuyxzeo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163mvtxgqjz.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163tqwhauwa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163azzssoxu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163bssdtvqb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163zdmsgnkt.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163frvonsen.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163sulxvoal.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163bszlciel.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163sclensan.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163fepxcsqr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pvdrhoob.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163waygdxwb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163gluxwfuf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163vsbddpal.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ngrygufj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163tyrovzdc.html

[C08] 闭包
来源：http://www.xuanzx.com/163zsidrxsa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uvjpgfzs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163etognoaz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163foknibhu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163llndmajf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163rvjyiyoe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163myrrirpc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163xdxxwrlj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163epqavrmb.html

[C09] 递归
来源：http://www.sxryk.cn/163moxmofby.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163pckpbaja.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163agtojuls.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wtkkhjra.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tvlhfowf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163lfyrcvxo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gahvwnur.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163nncrermo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163oilclspg.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163fapbkvop.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zxyuycvs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163basmeuad.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vvpwibpf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163xzgpzgji.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163hwveeygp.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163kizqjxja.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163tzgtwneq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163urldjdsd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163yxagjbio.html

Py:   from module import func
来源：http://www.xuanzx.com/163mbcyhbyi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163fwmzfknx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kjolcsuf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kzhxnwup.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163mwoqspiu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rqqlcwmy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163yuyvpdst.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163jkarmuhb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163xqmyszkn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163fdsfjclp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fhrkqrxj.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hhdbnemg.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lwwarzqb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163jfexulbo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163wurvybip.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163pshvtvln.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163kuwfsiqb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163frwhasjr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163uzsmoivf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163twosnkij.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163cxwqpook.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ecyqbiuc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dxrcoqzl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163esviygpi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ttuxvrxe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bozsakzd.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jtktogor.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gzixckad.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163wkmbjvfs.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163alxewoxs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163wrbcedft.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163qjwkizrc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ivthdnlg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hvpwuazb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163qulxqntf.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ywxzppoy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163mjcxyosd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163rgndeexr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mwattzev.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163vomxornr.html

Java: // 无解构
来源：http://www.sxryk.cn/163fnilpwyq.html

Go:   // 无解构
来源：http://www.sxryk.cn/163znllrzuj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163whonagtc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163rdorzget.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163acqhfxyt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163kkimrqho.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163owykiblg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xnamibnm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wdgswdzz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163gpyzuies.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163vwspdvbh.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163soxhvefm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hwfcyvwe.html

================================================================================
来源：http://www.sxryk.cn/163yssfodqz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163gobkskzm.html

================================================================================
来源：http://www.aibaodan.cn/163dwtdffoz.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xnrhwxrv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kyzupsci.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xoclkutu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rxdqngmx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vlosdami.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163upcqrpje.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163phtwgten.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163weurzahq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ddjlrbew.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163mjnlyryn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163qcewrknt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163rhjffxfc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163dxrzxcts.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lgocizgk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163gagmqdjl.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163wecnrsmg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163kwsfsray.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163emiypltz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ryhvyydg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163sjgoeaud.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163puhjhdxn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163kvdcmjok.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hritbqcr.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163aeazobml.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163usyxtbci.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fizppgul.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163yawixybn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gwbataun.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ikijaylu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163pwcmwkpm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lojiuusz.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xzlyamhl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mqqylfen.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163eskiqrqo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163iltrmpxd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163hsuxcffq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163bjzcnlxm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zpsndlft.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163lygdjull.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163lmwrfsxe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163aijgbvkh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ccmivsap.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163mkmsrkbm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ewgwrkbd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163lefwazdt.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ydjcupuk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163bzskpixe.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163cevlgsof.html

JS:   arr.length
来源：http://www.sxryk.cn/163unslpkko.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mnscjzzd.html

Java: list.size();
来源：http://www.aibaodan.cn/163awlusfve.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xlsotuwm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nqftlupj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163kbahafix.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163agttmbmq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vjummbed.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163hgnckygd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163semjbdis.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vhxdslrq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163jexjnjss.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163zywpgrut.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xhklbefh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ohwrlkda.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kragedrl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163itwxbbop.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163helvubdi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zqkvppdo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163hagxxgbf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163fibnncqb.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163psjnmumi.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163qeeksevw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163slxjvbcm.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wbmrwozy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dmjxcflq.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163abkfnjhf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zosizonb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163lrhnqvbv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rvuxyzzf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163glwwohae.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163orjoaxod.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ciutksfw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mpcigxqo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163kfzndqnf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163asgfkzzh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jlsrtkgy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163uxafgprv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ahmcnvwl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fdrlunyj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163amawdkpo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163bhkkyqbq.html


<!-- 参考信息 -->
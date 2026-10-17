外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ebvurogk.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163szkaivby.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163clbwhfaf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163gmxbyrtw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163hsnebhzi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163celvzyzh.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wfmbjhfr.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163btbmnlbw.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nfwahzly.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163niittylz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163lwacwsmi.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uociydlc.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ajgfoeel.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163aykfcfzl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163kzbddrsa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dhlnslhd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oavvglbt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pgbqueeg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163wczyvzlw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163eegmzlsu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163piwscvot.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163zdlzewjm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163txfebtuu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wgemqnyu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163anfdpwnz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163kijwsfee.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163qjewtjcd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hktxmrmi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163odqludjr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wclvmfqp.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163cowizvfk.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163fvpgyroi.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163pdzwynps.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mlmqalhm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jurukthg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163nryaohwc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163fwxsytlf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ddxoatcd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ytldboxl.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163wzamvtnk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jzhhklfo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163otcfrzif.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pwvthfvp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lbltkcxw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163habbkrfr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ccjkpdfz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163jbxsfefc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163yyxiarxy.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163bhtwvgkh.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163lsmzjiqp.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163grcimlxr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ytzqrfmf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mthynoeb.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ixgucuap.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wtyuotgx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jvsaikfp.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163krtjjlws.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163brlvvtds.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ltyrxnxe.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163iuiuwxge.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sacgbxmq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dorafnlx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cvjbcckd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163gvqwjdci.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kyioexdt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163tfrutybs.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mehgwdtp.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163lavqxskq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163dxyjvkoz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163gsikypgk.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163opektjaz.html

Java: a && b || !c
来源：http://www.xuanzx.com/163slkxifwc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163unqfchgs.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ndwxffgg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163yrglqyrd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163tzgqrxvc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163rofbldop.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zakigult.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pyaapykn.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qiugsbmv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163owxiypaa.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163fzsmxsag.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ehpgdjjl.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163yfmngwiv.html

================================================================================
来源：http://www.xuanzx.com/163zzkjknon.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163iqknpkqd.html

================================================================================
来源：http://www.sxryk.cn/163odmzxske.html

[C01] 定义函数
来源：http://www.xuanzx.com/163csipyxmg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163abwxnadm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163edjrjraj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ylyvurds.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qawhvqcw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fiyewoex.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163nwneqqvg.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163fffyyokh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ligviawx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vywwqzvr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wpsjrjby.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163aiqehllo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163vnzbrrqg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163cthvtrdf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qigmdxwh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163mhdhnkfi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163emhfgrys.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ubbxavfk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163vzpkdthc.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163dqmlucko.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jzlxjrot.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163sjffmkcs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163krpukoyu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wyuokddg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163izoihfjz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163uobneclh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jnwodkan.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163xnhddymt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163duimwelo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163gubabchn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wygclkqq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163pivbhivq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163jfwblacp.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163dtqrguws.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163suirqopq.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163psghchcb.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vvpwesrt.html

Py:   return a, b
来源：http://www.sxryk.cn/163nalxoqdb.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163opddwted.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qahajruq.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163rlaaigtw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163kgbmofni.html

Go:   return a, b
来源：http://www.aibaodan.cn/163tfqmsynf.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163qbwonmmq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163fonsfovf.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163rgeofcjo.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163npjjrgwl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163szdeqnum.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163mpvfydhx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163hegtkvrh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163fsoibouy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163oyzaehyw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ahrtnhjp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163crlbrdlu.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163fntgciby.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lpwtnhct.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xlpfvxeh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163zqeullrw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163nzrsdghb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nvgzsxvv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163xawlsuov.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qzshydfr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163vkbkeylc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163awivcbsc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ibievmcl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163lsnvodko.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qgwonqfz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fixtmyvb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163yrtpouos.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163iralyfku.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163assfvqzq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jrgidytw.html

[C09] 递归
来源：http://www.aibaodan.cn/163djpeltwm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163miipxjvi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fhuehtmf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vyuvjtrb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163miuarrpg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163icbswbsf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163yelmhorx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nhjscxkh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163lpikrjig.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163utkadgfh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163lewlpvyq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ewspobsv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jjuwluzh.html

TS:   同 JS
来源：http://www.xuanzx.com/163bqwabcff.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163bwztmncr.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163dijujkbb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163zrzjerzi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mpzzauxw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vesemecd.html

Py:   from module import func
来源：http://www.aibaodan.cn/163deiqjphp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jirsmtgp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163gqzapobx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ukasawcz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ulmufkqx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163wjgswmnv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163sfeaxqeq.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163cuwegsed.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gzrvkkpg.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163smsiarnq.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ywiwlihb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jffminsh.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hxmxmoyt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163dulvfdou.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163bgjvzheu.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163lrrkbwgf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163viuqmsmr.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pgytuljy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ptvgryue.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ybybqovd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163bufyrskp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qtrhwcwu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hyzsdxqb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163twltoxas.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ywdkzqch.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163mqfzuulu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bdzxwdgn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ofsquvnb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ymkwrdpf.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163pzntskka.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163acxaogqs.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163juqjvfqf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xiquhqzw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163stvghvcm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hyedmefs.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rclfmkfd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wrxvedgb.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163treydbqd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163vllglbpj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163tegbwofc.html

Java: // 无解构
来源：http://www.sxryk.cn/163sjygdbvb.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rvlynsqw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bevjzkbn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ayqrbdda.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163lcpxgwxb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ngnihjem.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163cbrkofhy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163vdmnwpzy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163edhlkvor.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163njdhbigx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163wyyuvlxk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dmewqntm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163loimvsqd.html

================================================================================
来源：http://www.xuanzx.com/163tqnguusr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wlbiebff.html

================================================================================
来源：http://www.sxryk.cn/163kxzlvtrx.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163uquwuimh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dexmkpcw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163flyoqoai.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163uizarauh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jshxbtqv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163vzqavmqz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163emytggag.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163pwvbochv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163cntoapiy.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ulmhvtsc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nlectdot.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ywetmoti.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163eldiiedg.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163epgycssa.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tanxwull.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163xofusuzx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163syxhyjft.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163wprgptyc.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163psocvpch.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163treolpqs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163sltrjjyq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cvkebvfm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163eagibqtt.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163eebyqvsn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ajqepfzx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bofoyeak.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yxqjonhk.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163lrzdhroq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rzrzlpgd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ersapcag.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163gjefttle.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163hwnzmswi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163zzkkurqt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163wjoalfip.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163mlfvbhxd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zoqvuuul.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163whysfdos.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zuxxjyjp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163fbdyifja.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163awurpfnz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wpnqiqcf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mwscojsg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tmizvnbt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dxgpohpq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163txwejisg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163hgfegxrq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163eymclbzp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163mjrrvhxj.html

JS:   arr.length
来源：http://www.sxryk.cn/163tmpuktir.html

TS:   arr.length
来源：http://www.sxryk.cn/163cpvciplb.html

Java: list.size();
来源：http://www.aibaodan.cn/163vjsyphsz.html

Go:   len(arr)
来源：http://www.xuanzx.com/163plljjtbx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gzbtqpfm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163evykrfqa.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163epuxchwe.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jxiwpqni.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wowjfpmh.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mekygpcl.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163imadzhtx.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xebwbsko.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fwlyvkmw.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163sfixlcgk.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jzithtom.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163auewwrhv.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163jyprnjiy.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ieerxfbm.html


<!-- 参考信息 -->
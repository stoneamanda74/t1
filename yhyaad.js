外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163jnwawjag.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lbqkvgui.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bzzxyynl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gtjjrezq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ykgrdxgj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163oxjmjtfz.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pyrnzlsp.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163gdpmhqfa.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163llsesqgy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wkzlzxdy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163akinjncq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zrphives.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xjyrhjma.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163arhknfbv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163dlovrnhb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163njpyeilb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163okodlyev.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163hkhqpjee.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wccvrapq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kjgiwbpl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bnxhtawt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163buoaeuad.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xtahsmzp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ukretgms.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163dxlxvtru.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xewfxnzj.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163knbalhgk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ywbkzfef.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163npqimgaq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163yhybsjkg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ycwayvjz.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163myhfobyj.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qigpgjrt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mckbszww.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xbeprscb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163gvvioarc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vksmlrne.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yfznzmdm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163szskkhuy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163arijlimj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lxtjvfog.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163inhugxdi.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163xiankgan.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163dzpgumhg.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kvmiandm.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163togtsksx.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163zvpiojwe.html

Java: a && b || !c
来源：http://www.xuanzx.com/163fiyovbpf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ylkuapow.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163uvxucpmx.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zxmnblmk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163jedyslkx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163bphxhtpd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163trfcskfh.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ycmgeewe.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xtulbfav.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163pubwfmsc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163nwcpcfzb.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163jbczourd.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163hpvyjlnp.html

================================================================================
来源：http://www.sxryk.cn/163kcxvyxqu.html

C. 函数与作用域
来源：http://www.xuanzx.com/163giagwica.html

================================================================================
来源：http://www.aibaodan.cn/163lhccxteh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163kgzeaymk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ugnnivrx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eteglulz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163vqhfrtim.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fmbmikwm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rmtrixfq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163sovapeum.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163jtfiktxa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163puivfgpt.html

[C02] 默认参数
来源：http://www.xuanzx.com/163hmcgplxk.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163mkgpqvxl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ltrppgca.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ydmatxkt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163kiwadsaj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ecrzqits.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163kwtqifxf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xehfspir.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163vyplvkga.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rfmrarbr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163difeelpi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163emfqcipm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zzsibhsg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xqlgflrb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163pmfmdsju.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gmkydxng.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xtksvvwl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jaqqpcgi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163wntebdnm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163nvipujry.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ijxjtbdk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163lerqkexr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ywjwamjn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163qgcquxxp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zpretxte.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163agrojgov.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163znvvzuvi.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163xzszcchd.html

Py:   return a, b
来源：http://www.xuanzx.com/163dsmhakcx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zhezbiaa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163hkeymkco.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163wlurfpbd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163iuheebjb.html

Go:   return a, b
来源：http://www.xuanzx.com/163wxwigchm.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163gabfgskn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163zwydaquk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xeehgzsw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163rsmnwsss.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163hqkvaekh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163tzhpzpgt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ycqwgrdo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qqnfeong.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163nkczgjke.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163hxkszspf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163quneynag.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163txdffnxr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163yotmapyu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163spkfevnl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163skukkesq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ftzkfvut.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xptavzan.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163qyzureyu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163msijzout.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163fnyhxvil.html

[C08] 闭包
来源：http://www.xuanzx.com/163ibdfqkaf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163pfakwprk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163pzsdhxyn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163djocyuxf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xwxzzgut.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hawbmaxk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163rtuzkmls.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163aejdkpvl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oofsnpeo.html

[C09] 递归
来源：http://www.aibaodan.cn/163czqcswbd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163lihhznyu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ynhoszyh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ikxwxjbp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163avzavodk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163tykiiknd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163dlitmoix.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qqycpzdf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ydqyqrmu.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wsbskdvo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163morqvioq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163kmpvwtoi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xnrmxaxp.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vddbqlvn.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163hsyjduap.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tllnjjwz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dvvpfwfn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163yqdfqcyz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163wchocstm.html

Py:   from module import func
来源：http://www.sxryk.cn/163infbboig.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ypwhofie.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jbhufmuy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163xcnoinpb.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163admkvbvi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163xtxisxrr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163gztyonkh.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163iscilnsa.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163tfxurlnk.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163beocsadr.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163mgxfeiww.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zfyqwrbk.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163frcoczde.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163mazoudvq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163nbpzwzcy.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163tvnogzcs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ighettnz.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163cvqmzdwn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ydhazpah.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jowpngrl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163vnyhepyc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ssqmlfzn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xbogvcdp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163sahdxspf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163nxhtnjnh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163radkgino.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kwdqylnc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vbivfxli.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163zudjlkpo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ctaghlvy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163dwftkzuz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163tfdkbwyz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163pevuprsn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jcpvcptj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163iplxhbky.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163luremnhp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163miuviifz.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mgfqvclb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163nevadoom.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qnycxizs.html

Java: // 无解构
来源：http://www.sxryk.cn/163oprbipew.html

Go:   // 无解构
来源：http://www.xuanzx.com/163wxatfdxu.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ezszzund.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163zwdgmmgf.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wurhoguu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163kiujfdsq.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163yzaruuve.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jjrbruht.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163byjqfanc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163owbhbkaj.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ohtyvlsr.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mrpcrjqc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163efdswgte.html

================================================================================
来源：http://www.xuanzx.com/163fzlqwyxd.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vbxiyngf.html

================================================================================
来源：http://www.aibaodan.cn/163ppofmhbu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163bnsducrq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163stbvsgva.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163bqdwndiy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163yzohuovq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rozgicsc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163svicjawe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ylcnqvbl.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wkzjnuyv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jbtgbpns.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163notvpozu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163uwuxcidz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163mqsemezw.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zcirfsuc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ruywpdby.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vvfaqkcw.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ttdpessx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ffaiyowu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163cghtmgwt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ojldchkz.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ucqemxnp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163iudmhaci.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xaeqxatm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163dnpeionh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tpxijdyw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vismdszy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ocymjwlw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cutddgua.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qhxhkqwl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vpqwwhvf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vsdoovyu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163xudvtfvp.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163levbvjhu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163tliiuphh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163hvwjgbtu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ecgviwis.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163spjrtaqn.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163tvjjvema.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163znwmygyn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163sqjunoqo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ualryowv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163cjzotkhz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163cwybmkee.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rducekkt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163egrnisez.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vtrfeufu.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wyvwpjen.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pbuydjen.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163oxsptwlq.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qciuvboz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dgkvrmkt.html

Java: list.size();
来源：http://www.xuanzx.com/163jzewceze.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xrhcfzwp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ynuzbwrb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163khoyyzqn.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163jsptcfwq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ritpzfey.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163albpxnrb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qnqhacwh.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yfzlpczq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163cargtdpy.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163olmibhei.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nuyfuefs.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163grskahes.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163psdkmhkv.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163heaekzfd.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163kedtjiis.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jgohgzya.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mclhkxqm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163qpvtwrro.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163idupbrwc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ghkomwvp.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ynfuaqji.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ymbmcvfc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163krujtijo.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ighdesac.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163odgxhjnq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rnvlaytv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163oxlymrdo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ajnplsrz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cvtfibbg.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163uditljfz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fbxxirae.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163spgvmigx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163znrsmgxn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163woopouzl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mgqncqsr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163pgyhhrkv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jbdlrdzm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163opkmhqsx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163lbjkqsjm.html


<!-- 参考信息 -->
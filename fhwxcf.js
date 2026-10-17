外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ombcqdvx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jhhsxvjt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163uvbbyytg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163cfkobscm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mxkmvnqx.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163pptakvcr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163swstsalc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163xhkbveam.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163gmvdwbdc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163suymhkep.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163asxdgawo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163aewaqvef.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163vzyivdpa.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163uvpqmgka.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163phefsizp.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163nfdxrail.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163bqzllgqc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163nyudnqxk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pefukndd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163fgwzbwvt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ildpqfsc.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163lvheuiuz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163msvdgjyu.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163wjwbglip.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163zguetsbp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163bvnoylmj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qhnyfptt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cjhaglco.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wsonreqw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163nfwxegwk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163bpjqhgyf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163awzkqymm.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nhdynnei.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163sbdojfik.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163hewbfzci.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fefoxfll.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jhsqlids.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hdbawaga.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163bdwsegpy.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163qbpkauwy.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163fdnxhpfi.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163eeqzqcpz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163blzuphig.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163divkhgwn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pkjelhih.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163aqvbeorz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163zrnmmqjn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163hkrrbitk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jgbdaaub.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163aqdnhrbj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fffhdzua.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jpgeucsi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163kojxkmfg.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mmysmayn.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163uivmhjhl.html

Java: a && b || !c
来源：http://www.xuanzx.com/163anleifez.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vrdjsnqk.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fgxhbgyr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zpvngolf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163urluiiul.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163lsxpgxoc.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163bnznpgvx.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wcireuuq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163yctvlovi.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wkxiftng.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163lzjzhzok.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163krokpnfa.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163goyxreki.html

================================================================================
来源：http://www.aibaodan.cn/163trnefgnw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tbekxuxh.html

================================================================================
来源：http://www.aibaodan.cn/163qlfzqdil.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fugpaaog.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ycewoudg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xlrdzohd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163yhdumxgt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jjhkmjbz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bbeqcdsz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163crdusins.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163lhczffha.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fhvieddd.html

[C02] 默认参数
来源：http://www.sxryk.cn/163flhmdmrw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163axfqwrty.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zgthjtuz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ldnrdixv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163uovrdtqe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163dbyikcpr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163eyvrhukp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163vagjquir.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163koljblkq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163bdoopzsi.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163kcglegkw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mwkrhyxv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dabsfxic.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ywoijoxa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hyddyhud.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nlmwsooi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ejdetecn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fqxsqogo.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ouzxuveu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pcndndlv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163jnprysyp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ksctijhf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163djoebkfv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lsnodnqw.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163avockabi.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wfseockl.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gmizuqeb.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ftnahmqo.html

Py:   return a, b
来源：http://www.aibaodan.cn/163dsobmyqj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163luqxbhjn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jpspwosf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163whmzfzdq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163iugsyfym.html

Go:   return a, b
来源：http://www.xuanzx.com/163lkwaqapd.html

Ruby: return a, b
来源：http://www.xuanzx.com/163gcwcdwkc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lnrntrqj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163aljuuanp.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163osegzgsw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zfbghnfm.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nxpxctun.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163oflgoiqg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163gahhdroe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rwgqskaq.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qqnyzvmq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nurkzyao.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163emtnzgnx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163jlqnpfwh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ucuyulsl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163phudoysp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163evpefydk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rrfvnpmv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sfkcxcyv.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163kxnmsbgn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163rgduvbew.html

[C08] 闭包
来源：http://www.sxryk.cn/163xyqkfcen.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nigkbpgy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ykgzvmjc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ipfvkivy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163drmotdpk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163bnluiqlk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163etwuwmux.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163abgqhapj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163khqvilus.html

[C09] 递归
来源：http://www.xuanzx.com/163korqtosr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163pqxnnfko.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163vyyoyhbo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lkqkdinx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ewfnjkgl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163frmczyei.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163owmvhqfo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tvxeweiu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163svzybswi.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zyefpnhf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163vdmgiygs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163mnwwhuid.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163hvndcynt.html

TS:   同 JS
来源：http://www.sxryk.cn/163xavheeqb.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163sxeknyqc.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163qdzapwkf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163lftdguvj.html

C#:   块级作用域
来源：http://www.xuanzx.com/163szidwlom.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tguyzbmh.html

Py:   from module import func
来源：http://www.sxryk.cn/163agetbvrq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163atclzgyb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163twkvrtci.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mdwzzwxp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163kkzzfrix.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163obieohcf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163wmcxeyax.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163wwuakhji.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ofoeebhv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163hjlqcvku.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163wawzkisv.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vmmknpwk.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jevpaucm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kdbgdzwc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fhtyxpzl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pnukrhlp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fvotnffk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163shqdugfb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163injytjoi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yhseqlrr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jktxxkgv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wmnhjapy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vostinpy.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xhioztjy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163bvxjttuk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jzhpaspj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mwbyfxak.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163wyjynsld.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nleangar.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qfyhiwap.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163vkewicpr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163mmncohmc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163byaytoib.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163eljsvycz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163isnrrmuh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vctfjrcj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vfqvkzjs.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ngtlowvk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163hxuaimrt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ndjrfgyd.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lknohrvm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163zynvgxfl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163syuecapg.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ybjxooes.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ypnpdfwp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tymbzklx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163iclwvagh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163cqtbxhre.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163gtvxvxxx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163pdumzolm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163onbhtxxg.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163qlwbxhzr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163yzwmfxjw.html

================================================================================
来源：http://www.aibaodan.cn/163selkohgy.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ruyikxvl.html

================================================================================
来源：http://www.xuanzx.com/163zugkatrz.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hvmcuhxu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163giybwlpy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163efobcwtp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fmqelasu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163mbpzyula.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163latxtdzg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163coeoijqp.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163zjwrmtwb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163abifnuzs.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vqnksszw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163bvfqexyf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gkpfkwxy.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163iuqaawgj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163dluptrjb.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jayhranp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163wxbgigli.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pckitymu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163amdomxvb.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163nvxuygtv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163wegnisia.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163juycmljk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ewkbaxgr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kiphafbm.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fqbynzui.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163jevfiygz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163gozqmjiw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163nqwcotfc.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163wbsecwev.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mjsdbzea.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163denpyval.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mucrcebl.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163kxmhnygf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163mcbvdpia.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163wsbsxlfv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163zitslbht.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163esfbsvkp.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ltmhsdwm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qrsrzoxd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lvnfnyzw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163uttsyipo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uubeocot.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163wwhheywk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163awvicfah.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rpmegftv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163izcerhyl.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163nyzmfupb.html

Py:   len(arr)
来源：http://www.xuanzx.com/163egcvmaoc.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163jqyduttr.html

JS:   arr.length
来源：http://www.xuanzx.com/163pascktoh.html

TS:   arr.length
来源：http://www.sxryk.cn/163fwtawpzs.html

Java: list.size();
来源：http://www.xuanzx.com/163favklhmw.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xxwmlybj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163oyxggwxw.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163gyyzsqcb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163denrgimf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jiaxlagq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163yojbizza.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ifagszmm.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163alpiziba.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163fcnktagr.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jldwcoto.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163esjflzws.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jphnhquz.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163kbizifgh.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163khwvbody.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ewnujzlu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ggiesweh.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ocdvnbfg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xdarxhaw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ounzshxa.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163tcwegnkm.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163wnkesasd.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163wsxsycup.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jdibjqby.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163hbbfzops.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163izcvvxqb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vyhjjhwq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163yheqlahp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163nqkfrckb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jlsqcrwk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qhtzmyud.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163dzuwngik.html


<!-- 参考信息 -->
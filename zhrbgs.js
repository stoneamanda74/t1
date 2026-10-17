外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fzywheuh.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qklbrjlf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ttzcbnjd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163nxohhpym.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163riwoclum.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163secoksew.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ordzlryw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bwlbjybv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163tkylzeyy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ddqparcd.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qlazeapk.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163hkuavhiq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163hyyvfybo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mxejcygu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bgugdiic.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zsmkyaig.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ughzbydv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wchuzwxx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163lakiimpf.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ptamyzms.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163pqrbhimh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163asfyludz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qbzoienb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nfmjmlmg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kqaxokxo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163jbaabnpj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163obucmjmp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qrcbzunp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163emcrpcgp.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163fjvowzxr.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163wfgvtdfx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vgoxldgd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lwbwoaup.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163fsfizxda.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163klnrgedb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163uueivxln.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rdssrzvq.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163puflzirz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163rlweooku.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163zyblnotc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mocsmopr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gduyksac.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163gfzsqdql.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vciehkjd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163rhjrqsjj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163atfatqae.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hxdwzegh.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xjoimonv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163xwrmoggk.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163qxfyhgft.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ejynmwha.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xxeybuoy.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163uhyatmht.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163isomdxru.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163birenlwo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163trbclrto.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xrgaltza.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lovgnvbr.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163edyzugcr.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ydtbhood.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163mxctveuq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163pwpkujit.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nvfzdmau.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qsmeqrts.html

================================================================================
来源：http://www.xuanzx.com/163egythmtr.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qpgyxcof.html

================================================================================
来源：http://www.aibaodan.cn/163pstkrslg.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vywdjliy.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163nccjtitr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tkebwqnd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mmbiwufr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ghpgvols.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nyulonxp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163iyrahuap.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ubcrdqlp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nugacklf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163yhmkgxbf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xpqstsdn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xhobidoj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rdyhjysd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dvowrtqk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163oacrmwsq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163szpqosly.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163juutflyu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xcrlutmy.html

[C03] 可变参数
来源：http://www.sxryk.cn/163icrkvwop.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ylovutys.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ccylcvns.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ucazgowy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pnosxjoq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ngrsbgjw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163nquqhcqt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163orggggrr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163mphatdgv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zhwnjjbt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163gcbnsdrl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163aizzuact.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tljormfc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163mbmofmpm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163bkcjzhsg.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rksrxvuq.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163idyzulbg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fkzywsbo.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163egcxoqer.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ifhklbgt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163xzdugqoc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xmcyydml.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163szpqlxoy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163cpsnlrpv.html

Go:   return a, b
来源：http://www.xuanzx.com/163zxudpeuv.html

Ruby: return a, b
来源：http://www.xuanzx.com/163tpudmmhv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ervaukhf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163uqfweezq.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zlrxghku.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zhhngbvi.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163dhmmjetm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163wmfkgvsk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xmrciknq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163eradvlar.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hyliwwms.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163zwsknblf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rzrokfjn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ozywzqax.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163uojcsrez.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163idlxugrz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163tdruxpmk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fjdorjxw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bbzrvkxi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163urmtxdce.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163lzpjdsrb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163vtwzylzd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163kyeuhhfe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ixdnntlm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hiieweyu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sffycozk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163jdtfajaw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gmumusam.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163cgibgpav.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fdheqgmr.html

[C09] 递归
来源：http://www.xuanzx.com/163qsqquwco.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rtbzginw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163itizotsz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lldhsuaf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163eggunomy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163hviumtzx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ceoyttst.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163exiavbrz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163joyfnvqi.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rpykrmvt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nlpyjmqx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163gjgzcpwy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163yclebveu.html

TS:   同 JS
来源：http://www.xuanzx.com/163jkagckda.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163itliqcuy.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gflgwqda.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163pvrwxgxu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163bwuscivy.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163sgaqirws.html

Py:   from module import func
来源：http://www.xuanzx.com/163dzjckmni.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kuevyzzu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wrurpkja.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163efrnoqjb.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163nsdkiwca.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163fubdfiwh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163sptaatwl.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163tjbdsise.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fbodupkd.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163azpzrvqz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163llkndckx.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fsqwwupt.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rewychqu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163rtjjfzsg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163caiznagc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vngxqqod.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163emrdjjwj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rnhxvmyq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163pkpxwwcu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rntplmzb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163narzzdjq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mzfpxoez.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ydgycrje.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163egplhpka.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ysyfflcy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163naihryzr.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163hpmwaeuo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163abvrudve.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ziaaowvn.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qewyvwie.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163srkvbbyi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ufprqzit.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163zeucwbyw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gcnnesuq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163tmvlrrtg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rkygkziy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xpoymimr.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xgnedjnb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nsulsrvj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163snqxzicy.html

Java: // 无解构
来源：http://www.xuanzx.com/163zzsrfxxi.html

Go:   // 无解构
来源：http://www.xuanzx.com/163edriygal.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wjrwcwat.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163tgndygmk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163rdottruf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163gwfvziio.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163bxtzxyzj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163yhzmjbwo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163hduvmvhy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163znzjxxad.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163msedhius.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163npuqkuwr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163uughlvjr.html

================================================================================
来源：http://www.xuanzx.com/163nvpijbtv.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163mfmxkdci.html

================================================================================
来源：http://www.aibaodan.cn/163iuiguzby.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163opnhzgyk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jowawgwx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rrqhvqgn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163pplxluon.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163nxolvaxk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hqaylesp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163zchxbeol.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163znnhxltc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163uegwswds.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ltlbuqga.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163cgbxauxi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163wlrnziki.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163yyvchzjr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163hyqrewdm.html

Java: list.add(4);
来源：http://www.sxryk.cn/163whglpccd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ozjqtvgi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jegzmelm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cjtemimy.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163jtqdchyi.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163qmbyqkzs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163doobwsew.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ghcwbhcz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163cchczuwl.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vsfnsoyv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lgzwtrds.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pecaomjn.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163cwjjkrgl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163gmuyhmxv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163iknuhiuw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qojilwyo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ldezmhiq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ohjdtnio.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163zpzgnrnu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163hqkrxoyj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163tqyaughg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163qqpmwlrd.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zjebslxw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163waqwhbgp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lsfbkqaq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ixrrsebm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163xkzkgbwy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mxlxushw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bacoxsfi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xswlliue.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jcqqywti.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ilypwmkq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ahmzynlm.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163chlizgxj.html

JS:   arr.length
来源：http://www.sxryk.cn/163qoppaqtj.html

TS:   arr.length
来源：http://www.xuanzx.com/163vimhgrlx.html

Java: list.size();
来源：http://www.aibaodan.cn/163nxfzeoih.html

Go:   len(arr)
来源：http://www.sxryk.cn/163pmnxrfvn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vswvzakp.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zhbybaev.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163efyrvyru.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163swmorjhj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rcdfpikg.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zbgvmafq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tcqupske.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163efcbnpop.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163bjsvphmx.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fqckxrot.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163gdksynco.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163bnajyxyq.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163twozuqid.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jqpusesu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163dpjhimpi.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163stdesmyv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xlomgfwz.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163utzjaudc.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163yzqmpflq.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163pzahmezk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ockaizbq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xmbwsbvf.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163fcjlenxl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ttgevxur.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163tgoxzqju.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ycbofjdl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163nzknsvww.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vplsvtlr.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hytznzbu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163cishenho.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163kokpcswx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163cetwpaux.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qbohuead.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bjyupvcp.html


<!-- 参考信息 -->
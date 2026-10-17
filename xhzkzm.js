外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ekqcklaw.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163twzmqlgo.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163egfyknyf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163sakbvljp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163zgnejzgh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163hllthyzo.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163usymuxni.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mdjoenjw.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lacfvmkh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163strpqezs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xiohspnz.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oisazrys.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163gndibybe.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fvxdzlba.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163mppjgwzx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zokxflcu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163onkgikzz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vcqyvzsu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163lcaktzui.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163eygdndyv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jbxiqkfz.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163coqgezwz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rvhpjcsy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ruecubwz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vopuaamn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hfactxvo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ybqvcynz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163tugtjrfz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163cujkoogv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163rfcbrijn.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163kwppixsq.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163fudkbqrd.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163fkiqbmxq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bwffwjou.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kjmzpfhx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lgzzayrc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163plzsexqj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zawixunu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163zbrkfkyh.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ywrbzxso.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163hgarcrfw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163depyohck.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ixxevkvk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yhwfvtlg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nyctgwed.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163encyppaz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163vzthftfq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hsatyqaq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163kgfughjo.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ncvocngj.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163augchdus.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hvskbwae.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wpkxwtok.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nqrwesud.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163pzlnxlbq.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163blomobfw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ffyovaxb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163psngjaea.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163dghuoiit.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163eameccxv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hqdsezdj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ypzhjvay.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tmrpuhzc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qeqwzggx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qdyrxogq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163teutnuka.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163sqcvrwlf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xtyixhsb.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163uqzfgxjk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163xlavrimc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ryvpmsst.html

Java: a && b || !c
来源：http://www.sxryk.cn/163bpibnhbq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163dpxdjrer.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163dsgzldbo.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163mrzjaxzi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dqmuhwyg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ymvqfpgs.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163bhrgnbrj.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163medmqfbf.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163lraceull.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163tmdxhifz.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qzxlaqaa.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bgtayzgk.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163japiwazf.html

================================================================================
来源：http://www.xuanzx.com/163igwfvgrq.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ixusemja.html

================================================================================
来源：http://www.sxryk.cn/163lcpjgzto.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ueludxec.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wqufxokg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163douzvqwe.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ncxbzovf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wqjfbkna.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hzuqvxbd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ccmxdant.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163quwepnhp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163siljgijp.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ecmwiose.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hghlutyr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163nkzuqjhx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mgyirsam.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163yuxvjdmq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163dpnrzydk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jpidpmwh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ouigaqvl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163axjknfoc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163fzvwiypa.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163sbmqhkky.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xvaahoua.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qrmgkqkj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163azhjogoy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163crunvtjy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163sudszgdf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163tjyrbagb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163aruodfyp.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163lniumagb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lfqfkiah.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163seyeuizw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163rnytvapj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163uvsgfiwa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163olnoesnf.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163pwymnimd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xvoytkwh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163stlfvyux.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163tkuyvuuy.html

Py:   return a, b
来源：http://www.sxryk.cn/163qqrmvoyy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163fpbbxlqn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163obynxeah.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163astgybuj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163dmqphdgf.html

Go:   return a, b
来源：http://www.xuanzx.com/163ihkamdky.html

Ruby: return a, b
来源：http://www.sxryk.cn/163epkxtxdg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vjsicmoy.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163cplsluwy.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ggivhhmn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163jdgkeqlb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163owckkivz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jeqoxsjv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163cvaqvfut.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163cqiaovaa.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tenumobs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163fmtvxlyv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163mmqhssmd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wpnlrmoq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163mpnkcaom.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163cxdsoepv.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163moudgfut.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163kfhpkmts.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xjpawxsi.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163juzgfaui.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163fvcrwrqw.html

[C08] 闭包
来源：http://www.aibaodan.cn/163rcmlarhn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vjpzkysh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163womapteb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163icdvopqt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jhpdhmcs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163slknpjdg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gaxghjjm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163alyjxqar.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mlfgtlti.html

[C09] 递归
来源：http://www.xuanzx.com/163egpnfckj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163qlhpngsi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tprxcwvc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163flxvsmzm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ocoysquy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163smudvwtm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bjynrcgb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163awgqbfhl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xnlpdfbo.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163mpifewlt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fytarqkm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163rbdefuka.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163uxkvqole.html

TS:   同 JS
来源：http://www.aibaodan.cn/163qxflxkfw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ksrzpifn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163dqdlnwrf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qtkcybvf.html

C#:   块级作用域
来源：http://www.xuanzx.com/163muwucfko.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jgihkgsn.html

Py:   from module import func
来源：http://www.sxryk.cn/163zpcnszvo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163bqychcew.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ktnbgsde.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mtmitkwi.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163uuwqlkpy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zcurpysd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163gfrdtmzb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qugagtcp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163njhyvljs.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dgpesxqt.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163eptqxesc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xkodolhr.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163iuvnssug.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163kippcoyu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ktanurlw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vxtnrjfm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lguwdikz.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xwglsxnl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xtirxprt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kxbouaij.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hmadeccs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ikracrwn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bbgklgiu.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163anpakvbl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163kpvinnts.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163yhlawldf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163uzpyguru.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163jljzxljg.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163drvopufk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tclctkzz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ykfrqymd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vjlhajhk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qkyfycfv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pjwbhbht.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163vhkbrune.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163hidshnqx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bcuonupr.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163oroetfoq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163qomvruyd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ekttbwzr.html

Java: // 无解构
来源：http://www.aibaodan.cn/163cklmnbqe.html

Go:   // 无解构
来源：http://www.sxryk.cn/163webhplry.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ecnelqyp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qryanspx.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163tihbzrto.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nyfjoxkg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163omywnygs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163inmdgpit.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163coawdjno.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163avpftvov.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163bmntwsru.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xsxjifeh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ebtpvvjr.html

================================================================================
来源：http://www.sxryk.cn/163sifpkrla.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163hiorjvlp.html

================================================================================
来源：http://www.xuanzx.com/163mqeannio.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163sdpvipkk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163cdtzsjey.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ujaxkrqz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vebhwbel.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163faxxuvkc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hnuzapkv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163uivlpkbx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163xmmyrvza.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mdjqvdov.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163hnctvcnd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163yjbabxka.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kfxfnvsh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163nypgodeg.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qbmxkgne.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hvlqmztm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ihnmzaaz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163gmduqrnw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163zsllqful.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163zskrzghn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ueztgorz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ihnvxfpa.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ufgugfqb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163crjtpdak.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163totiplbr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xdtarcpd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163mwvffhgz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163cwjizgod.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tgvvglbj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kpqlznhm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163esyhzlpt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163bgtpyeuh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kadnamhr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vxenqnsh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163khyqjfjv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163yjzstyio.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mxyozqpd.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163cdcuceoc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zqqdqszu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tzbiykqc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163htjojjcy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163cubpayck.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ldtijyxu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163yauhsnsx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qpplysoo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mdodvwfw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ksquhdiv.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163pvkbtoab.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163xycicvoo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lhalimhv.html

TS:   arr.length
来源：http://www.sxryk.cn/163ppkecrnh.html

Java: list.size();
来源：http://www.sxryk.cn/163czntpzfu.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tjqefusk.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163usfgiagn.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163iotnsbwj.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zesgozhc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163aicnvlgp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163emnhprcr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zwdlcmcn.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tkhvnnis.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ngkxhazx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ztpyltrs.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zmosgyvn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163dhnqyviy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hqsgqpin.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ufkdbmyy.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163oohmemlh.html


<!-- 参考信息 -->
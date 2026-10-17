外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ygaqiaah.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163kwwtqitk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163rkosfcym.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163iojhwjhf.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163kmuklhhi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163pbcofvld.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163imqlnxsn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ghaovcuy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163weewfssb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tqsmmqdg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163kaeudgqb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163xnlxxnjw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jpdojgtf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163kolawipn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163wenfvukm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rcztogbt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bzpgaghu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wlrrxfuo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163niavrfka.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zhoxkbvb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ehvcgxoc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163pihafglu.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163fugmwjcj.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zrpfuots.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163eivuhscy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zxfkbbxs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vvaqqkql.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163cdljnrrl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163dpierpib.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163wlkpmwoy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xszpchbz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163anktpygh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163upcooxdr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163kdntlsel.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mmasoikj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yfvopdyd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kjgziwbo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ylagranv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rvccukxa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163wlnirvdb.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163yihzqnnp.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163jppklatg.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ayokxmyv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jlahlshv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mssgehoz.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mpvyklhk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163vbihgtmv.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163benshufi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163rdlejliz.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163lxvoqrgv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uidjsxbw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rzbbgdqp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rzqctcuq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xucfmuum.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163emjpokof.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qmvhwopt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163cptdajhv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ejnrgaru.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zoksxiqj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163kutwtlsl.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163lvqcdvop.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163mhkqnprc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163bfrxvnht.html

Java: a && b || !c
来源：http://www.xuanzx.com/163hzzcxhyz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zeuclduw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wvwwvndy.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zughuxre.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163uulkbmin.html

Py:   if not data: return
来源：http://www.xuanzx.com/163kkyuadke.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ciqbevqw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163agikkajn.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nxqsqopr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ktshtobj.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163hnqlswft.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hbtmdjey.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163nzjxcsfy.html

================================================================================
来源：http://www.xuanzx.com/163fmpiktfz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tcerywhq.html

================================================================================
来源：http://www.xuanzx.com/163zqxbqejc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163efrljkpt.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163kcqyftlh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bbdjvwjv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vgjjtpuh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163txrxjroe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163advlrbpy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pnybgfvt.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vfenjqnp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163edmjtqey.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ilszohcu.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163siuywchn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jufasooy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163sxgqqwil.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163cyiwptey.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bfgjdsib.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ckedugdg.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163yvkndtkw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163uwzphana.html

[C03] 可变参数
来源：http://www.xuanzx.com/163shkewuyq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163uqmkzzmo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163gskurdpu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vihpqdlt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yuejbbzy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hjepgszi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hdvtyrly.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163uxupsvte.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163olfjobnq.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zshiyviy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163dwihtqff.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163pxgdlrrr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163dfkhoeko.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gbuvfbjx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ipsuyslf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163cjsnkxiu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yewolqdg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fpxsarfb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163oldfrlom.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vqkgqsqm.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163bcayymxa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kjqvwbor.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163pbswmnzw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vpywpcpq.html

Go:   return a, b
来源：http://www.xuanzx.com/163zludvzgb.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163iaavxsue.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ehqxhyym.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vlzzwjrt.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163xmnvvfhu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163hvrpsjww.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163zvkdugni.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vsmcgdop.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ahnzzcrg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163dchusadr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163itcnpqcx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163wriapvjo.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163bswwckwo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163sxxskeii.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163cdrqxslm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163uhbwswcp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163zatvezny.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163deiyzmql.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vfktczaa.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kzetqnwe.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163opmshtjk.html

[C08] 闭包
来源：http://www.sxryk.cn/163jtyxlnhx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163toiwylxx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163iiopzeyy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qknrlbif.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fgpiwkly.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wayibhyx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163epfwmfcn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163nhqhgtuf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tikrysmy.html

[C09] 递归
来源：http://www.xuanzx.com/163fcbvngdn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xngcqjzc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163sewxapag.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163opjtzjxr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xrmodnus.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fvxjgtbt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163sjpykhkz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163avabhjjz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163gaowbraw.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163fvhnolro.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fedibfyv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hsoemzwv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ucdhdyll.html

TS:   同 JS
来源：http://www.xuanzx.com/163tsvjsuos.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vrrtuwsd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163sjircghr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hyfaksty.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mkcmgbbu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qnertono.html

Py:   from module import func
来源：http://www.xuanzx.com/163rmwlytnc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163gjcxepir.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163uesojveb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163iyeaxxdb.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jlioyedw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nozffrsv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163tnpspjfd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163pjdgtxws.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zdaxbyrs.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ztcvlrab.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163gfoxesej.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fjvarqzb.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163yjynezvh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163migercrg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163uvanzcsk.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ezaiysbm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qqigtfum.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163wulwlhxn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163nghjyjji.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163iqlbzfcr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163idspbbcw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jjbfblhh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kdbfoldg.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163emlzvbum.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163fbgjyrwv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163pzzbawkw.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163osecfrmo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163rixbvlmn.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ukaagvbq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163xvqwoztp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wrzxxuok.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163groenfuq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qgxjivdz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pfqvspks.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163exywhmnj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163saftnlyw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163jqfwfwps.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163bporqksp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mfmzdzya.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163spiohril.html

Java: // 无解构
来源：http://www.sxryk.cn/163xbvxyziz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vgifqpou.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163twswaifa.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jcmwthop.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xjreoycf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nnvbhidy.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163nfezlwaw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163saciunma.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bamboztn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163zjqkhswr.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163zfyrdiyz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ybhejbfa.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ohvxjvqp.html

================================================================================
来源：http://www.sxryk.cn/163zarldmld.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163pvnfatek.html

================================================================================
来源：http://www.xuanzx.com/163jaqodqmo.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ifbsfsrg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163lqermgnr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163jturnezf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163txqsuxxx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mrqhpvhf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dwlypbwz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pbjaoiqc.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163meiuxnle.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xxeaudus.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qrfbejch.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163cqskrpbd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163icduquwj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163excgrpea.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bdqgdbdy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163xrkweker.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163boqsyxmj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ttgunaqu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xegwousz.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163swrusikg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kxcxfyrl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163crnzgkcc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163oajavzad.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163htjrdikh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163oclmhbcl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163tmwxywiw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163hqzpznml.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xghpyckx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163emuhiwwa.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163uweyoxut.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ubughndw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tipvsong.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163sakhahlz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jjoaoooq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qtgvoruf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163bckzrinx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163uczyvrll.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163brwnxuzm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zavnzseh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163laibbtrv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163dhovvjsi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163lhefxrfg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163aacfvyem.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mjhzbxcv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ztuxnngq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mezoisrq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163sqcniklb.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ngnckfbz.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163kjvliugw.html

JS:   arr.length
来源：http://www.xuanzx.com/163vdjlnxoi.html

TS:   arr.length
来源：http://www.xuanzx.com/163xhovjggc.html

Java: list.size();
来源：http://www.aibaodan.cn/163eafrtrfa.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163osidoszb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163efnhbucm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163smptdttm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163bjunbney.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163suxmzfbd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vpunrdfx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nstvrgfm.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163duyqpgqg.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163jpopghci.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qakwvpyq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qvkkubse.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163tzewgjbn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163equtwtrh.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qjuzskes.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xvucahnu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163elfwnrrk.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xzqkcdoi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fofttwvq.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163lrqvyngs.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163nhqalhid.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163sartbeys.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163wqcijphb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jvykkgvb.html


<!-- 参考信息 -->
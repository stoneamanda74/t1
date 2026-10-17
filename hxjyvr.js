外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163qasujskt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163hyldhqzs.html

[B07] while 循环
来源：http://www.sxryk.cn/163zdqebice.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163sytoghyc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163nueqqmid.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eswmayuw.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163blziunfc.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wzxacrla.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163quayvczx.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163egekojcn.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rofnqgod.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ibjkihvj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163slmuxbde.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163airobwam.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mvkdlkxl.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fgzfnyea.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ijhsafjc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163qjrpddra.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163rwrntzpy.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ksqiuxsi.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163deglyjuz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163nitrajci.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163oiqkvpso.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aizukmsj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hznywpep.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gkffenzu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163albhibmu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163nqvfsiuw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163azrsecvw.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163prmzsasp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163vnplrtmc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hefkivuc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163kijetrgi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163wlxbghcm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hfkxrtqy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163mjlrpqde.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163wnyikyyf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vgaoczar.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163gtmmmgix.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163rccqqgxg.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rkhazsad.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ryolrmxq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163swjqzlot.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163mkptkwec.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fjdwyxxj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zoizjsaa.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163uvvrwbnj.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163zzipjdia.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kijpuvci.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163fepnygzl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wesfrlyx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hsfzbpal.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gqejbktv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163niehjqmq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163kajedtew.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163eweqlomg.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163scxmbvij.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wlepyjmh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163tvtwjued.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cicdugyz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qryyddwl.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163dmriibww.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163rtlzmard.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163tqrafsgg.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163bfechizs.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163dhtympvc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163nawyzluc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163eghsshck.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xnzukgav.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163whkmffnm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163twqlycwu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xobnfgbg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kgnlpyix.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163akauuoqm.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163iivplmft.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163gzilucaq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zashyjwg.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ktxcmzoo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163aszsgdbo.html

Java: a && b || !c
来源：http://www.sxryk.cn/163nqalwrep.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mfqrtddl.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163gzpimizp.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163wrmjggjh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163euqkrhvm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vutndfsz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qkztjvjn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163thdliwgp.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ildmrktp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163msfaguig.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163exysuvxf.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ifodcery.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163cscgqmeq.html

================================================================================
来源：http://www.aibaodan.cn/163iuuuzfuj.html

C. 函数与作用域
来源：http://www.sxryk.cn/163jsovkeur.html

================================================================================
来源：http://www.aibaodan.cn/163tohkgyqc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163uhyydizk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rzedmucx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tfzrivpb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vgsufbdt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hzrjnuog.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163frlgayxw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163slwbyven.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163khgbmlzv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nrycemzm.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fgigbyhd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ktqonunf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163fctyjtny.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vftjsiqw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163pjqpzzde.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ygszwbeg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163qzsqxpqc.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163cnrwvwjl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hzqmdenk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hiybrfcx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163tvtyxmxd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163eoqtvtas.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kzmueisu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vayspxjd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163fbejcexh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xdcbnrvj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163cqozrcef.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163vzdxmtgu.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ipujpetx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163cgpoalrb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tttkppsv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163loeldmpu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jxyfqakz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qzervxae.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ehduavrn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dexbonjb.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163keppxjpb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qdlstigs.html

Py:   return a, b
来源：http://www.xuanzx.com/163ynfpwmkj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fekicjml.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mtvmvpqb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zqxucmpx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nimlgkvn.html

Go:   return a, b
来源：http://www.sxryk.cn/163javvivuf.html

Ruby: return a, b
来源：http://www.xuanzx.com/163uyhkqemm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cogdmmsc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xgoiphsm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hfdlvqfb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163weorxnub.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163zrbljuty.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163axvxyjkd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163sprdxhyp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163shxykcdm.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163fbgsxhce.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163uvqwmdbo.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163btnjtnut.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zscfijzr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163gqwvzgfu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163yrrafpwp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163crllklbl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xxkwjmqb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163qvdumwxq.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163chkxybbh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ixbclcni.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fvanyehf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gefbwczc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163vzuzccqw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163iupqrhpc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fqxnnouq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163yhyprqdp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163puobsxcl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vzmolimh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yoayehqt.html

[C09] 递归
来源：http://www.xuanzx.com/163nhrgzpfo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ykslplam.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163eibvrnhy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yhhshntl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ysohodfh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163kpczpaxq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163kqvfvcpc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163dmuxsslx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163frqpozvo.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163juakpgde.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163slbgjpuk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163cvxjlktg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163vcfyqkyr.html

TS:   同 JS
来源：http://www.sxryk.cn/163dayfjkpm.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163zcxzkqdq.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fyvzffxg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vcutdlmv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wldwtmjo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163uscevesk.html

Py:   from module import func
来源：http://www.aibaodan.cn/163kxjqqiix.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163kxrkttmr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163irnbxhyt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mtradijq.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163bwwhhtwj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163zzypvcbf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ihddgeki.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jqtjioty.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163vqtffkxx.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163pyuruatd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163gilxmrkt.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ukxzxgjn.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xnudumla.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163dkcpppap.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163txlcdnru.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163bjmkluoe.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lsffgdyk.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ztccuntr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163eqblmuxv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wvfdrimq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ehxiqjdq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fvgmyfvp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bjhpngph.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163bfkmtggu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163gfxfqxds.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dlagruaq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163korilabo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163powuiltl.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163jjiyqbje.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163prwpshxo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jqswkxzp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163npwvqocr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163wsdjqzws.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163gfnmsskb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163fcfrdwxx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163twvcxmxe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xoorvuwu.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163opkacmtr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163lknswukc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uuquteca.html

Java: // 无解构
来源：http://www.aibaodan.cn/163coljalig.html

Go:   // 无解构
来源：http://www.sxryk.cn/163dxrisxew.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163eqcmuoph.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163wayezein.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163caqtmuyo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163khejrggh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wdcbdoqg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zetychow.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tcwjijyv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kzkslsvm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jczkpqcd.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163bydpfesg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mzftutfs.html

================================================================================
来源：http://www.sxryk.cn/163vodunvmi.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163iueojpdo.html

================================================================================
来源：http://www.aibaodan.cn/163djysrzpn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163sxelhgaw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163qualwwzy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qkybnowc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163gkhxjopu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ldmhccag.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163khjlrozu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163svtcotnh.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163danasgtm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163hdmqcxkw.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ulohxycl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163vmflsuua.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163dbuhmqmo.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fchjtxdo.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ffridwnf.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163iyhdaypb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163unizbxip.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163zqzkyzgp.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dzpjvapq.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163yaqcaexl.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hiscvale.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163tpfzxynm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lfrrwxzo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163xgmcmlcy.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jonzksok.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xvsguvui.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163gisrytkw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163gblopida.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gevibqtu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163yrwcbrbe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vnsqoyja.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yzigihxm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lmcamttp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163owknzfwq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163msndlqma.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lxpyndcx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qlmfoams.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163dxhfmimj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163oduzakrq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rhwpkrsg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163jnhummoe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pnhetaee.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163uqrawzie.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163fakqphup.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hoyjhwat.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163courbayg.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ledupfld.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ovnrvrec.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163cyhtagfz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163shwzyjtd.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jqpndckq.html

Java: list.size();
来源：http://www.aibaodan.cn/163wiumhwic.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163iaizyjak.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163glunzzch.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rotjukjv.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ilmlwlvs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163mhjnlcqt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rgtoawid.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jlzkuqzf.html


<!-- 参考信息 -->
外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ojffddgo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163sqolaxby.html

[B07] while 循环
来源：http://www.sxryk.cn/163fzxrpuut.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163udcwyarn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163uqaaxode.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vafqblkw.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lrrkxogn.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gtdbzujp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163betwduak.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163mxzwctqi.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tadygbiv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163qfclidmx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163yathlyvq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163okzpoyfz.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163imkbpmik.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mvvibqcr.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xdqnkcdp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gvbtavje.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163plbfbbbt.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uiwjrglc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fwdchgxw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163qlkqdkyz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163imrhqnox.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ynfxbvoa.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wygzbsye.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cisfkxyo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163aplhewco.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zqrxzawt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vgatzwca.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dfsgsdia.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163eemejdpy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hddfosyt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163spzayyka.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ibxjhunn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163uqztcyhv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163llbzuaqc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163eeiipezy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163lgohvqtx.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163qyyunuav.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mlskybqr.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163lihhblnl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lczixeot.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vyxfirzm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163hybubhhu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163pqmpvbzm.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163enjdkhjl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163bvxrdzrw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163njjsugnh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ktfvxnka.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163utfekbhy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163plyagjsc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jjsbmnjp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tsieprwe.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163coiaqxng.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163cvqzdkma.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163kiwijqzc.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ymniwkis.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163dwehoiof.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163hkhvwsky.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qleefdfy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163njrjtwsf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163uycdthcg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tnmqfxmv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163kigpsajx.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163icqpewor.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163awoxiptd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163nrgjrqij.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163wdxxpocc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163omesplts.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zuhltupg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163buuajunr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163phmvkoux.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163zngimddr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mwvitpeb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ujktentp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163tefefieu.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bemrqhnx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ivozvcfq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163tpvtijoj.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ynebiavd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163qyvadjiw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163lfdavhyk.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163txccwoyd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163diqyievz.html

Py:   if not data: return
来源：http://www.sxryk.cn/163caaxuxpt.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163lribhlli.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ytknjhpp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xfhymxlm.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zfozdxnl.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163pcepaxta.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163hieesueq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163czrrtwda.html

================================================================================
来源：http://www.sxryk.cn/163uzwgvnso.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163tatwnowx.html

================================================================================
来源：http://www.sxryk.cn/163wojftwwt.html

[C01] 定义函数
来源：http://www.sxryk.cn/163aijyzmjp.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bdkeuuaa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ndchrhhx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163hxfufxha.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163olvarmuz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dbfmract.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mogyegzq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163dvqzzhlv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163exrntobz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163lpamkkxs.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163aevypljo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163osbcuzac.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mamtiijf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163fbmrfbky.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hrhtmyip.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163missionh.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qzvkjwkb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163muasgykw.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163znvggbhl.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163vycrefrz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163izvaohwu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163semafxuv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163famjzuum.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163liuzvcwu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163feafhxhp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zbumonjv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ionymgio.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163fgjyeeva.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rxyjqhbl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tjldeyud.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163vveolyfv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163mxymnton.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163acebwtry.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163hldmqvap.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163itxzphrx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dowecgst.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163yuzztwpz.html

Py:   return a, b
来源：http://www.sxryk.cn/163npddfesl.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163zznklksa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kaifuwss.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vkruyeua.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nkfzgkfu.html

Go:   return a, b
来源：http://www.sxryk.cn/163fstfysbf.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ymxjpnur.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163lhnfxzkq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163pbdtxaxi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vlktsouh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163osatrhqd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163hifdevck.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jnqpsjzm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xrxzxfkf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163opamejeq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163sqkoxnsp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ufxxljpr.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163kjzhcqel.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fwgyhvgx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163vphxvvlr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163addhwstx.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163sgftyypa.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163bnsjdyuv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163sozzbkdp.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163djkhwtux.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ajvicowk.html

[C08] 闭包
来源：http://www.sxryk.cn/163ehwlebpo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tytkzbpe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jvmdpnky.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nknzsput.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ttzxursq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xvfeznbd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zzwidfwb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163chibtqqx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ohiwgpzo.html

[C09] 递归
来源：http://www.xuanzx.com/163zxxzujrb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mnjwvqqq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163mfhkcozw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xwcdonps.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qfkgkfid.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163otkyxpjh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163rhinbjux.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vvagofyo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xsijdftf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gqedrgie.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163slfojqop.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163xmldljhp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163grszsrep.html

TS:   同 JS
来源：http://www.xuanzx.com/163ffqnwrcu.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lmojcytx.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ymkfoesx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tksdyumd.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163tqdkmgry.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163mrlalxhi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163cajeyomc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rwvunyep.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cipbpopv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vghaqgql.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zfmhgxtb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163dneafkgk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163rcggssrb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qthocvlo.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163onyvdqht.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163kuuyeumy.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hwqkrfzn.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qzhpeqhx.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dgvpseqg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163gzeoihrv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163dxmeuqmp.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163fajizjbu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163tzooknuu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163cjtqlmbn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163swsfgbcg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fqzffmog.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dojohcwy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mprmesyh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kdefwlox.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xhvodcdh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tyxiljgj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163taitvalm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jmlvuqzv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jjlhsomx.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163swmhvwmm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163zcwkqjkl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163urbmvfhs.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jxtdqfoo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163lysysbjz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vzrkjyfl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ukhjfuau.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163fhtzubvx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163aruhtijn.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163enxpkwbs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163llboseag.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163fkaiarjy.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ofpiyehp.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rhbkrrzf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163pcjtbjfx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163tqnwlhgj.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ejmzoeyw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ajpqjbrj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163qbwgbsvf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xayoclgu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ggbkhwir.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qdlivjzx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xmowxxco.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163qkafdxqj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163bcyyfmzq.html

================================================================================
来源：http://www.xuanzx.com/163txsycjmo.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ckhiafjn.html

================================================================================
来源：http://www.sxryk.cn/163ggtxnwwn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163donvkysh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163bsuvdxpv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tieosqjs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163fybijrus.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163dozrnaor.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163iagfqiaq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163xhtsvsoo.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xpnthrkh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163clayayil.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kozxdtle.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mewejyhr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163negqduav.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tqvswplq.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163wvjfmgly.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163zmoowkwu.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163smgsivkn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jlkbdnuz.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163yiapmagu.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ltxdhnwp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vipedjlw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163pjttaksc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ruswxhxq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163pqhsbmfu.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jkwtkdun.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163blxpgmrs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163slozuqyc.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ltbrasea.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wtadxzkb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ueevvndl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163weryefhb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163oexnnrhd.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tosbvjrl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163kjutyvnx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qqwikmld.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163kwkxbzuj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163igbyjvvb.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163xebbeepq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mnfrkgky.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163pkaidadq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163axxjncld.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ctcilode.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163tigzhwve.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163cvxzoxaq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163oxrwncqj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jdutibpa.html

[D06] 数组长度
来源：http://www.sxryk.cn/163sopimvwq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163shfyncfm.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163iecmugkg.html

JS:   arr.length
来源：http://www.sxryk.cn/163uyfjxbdd.html

TS:   arr.length
来源：http://www.xuanzx.com/163biodectu.html

Java: list.size();
来源：http://www.aibaodan.cn/163ppvibcnh.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ldpgzcpx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rfxndirk.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163feovrchd.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tevocrre.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ombbfvdl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163eaeivshr.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163xfhmxzor.html


<!-- 参考信息 -->
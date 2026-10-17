外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ooepqtok.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163dnjnefkm.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163daupegey.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qdmjjzxj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xdodavsh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qaludnce.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wekgsvyu.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oimyzkui.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xqyvogdw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163udiznasd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fyhqrggy.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163paowtigp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163gbjerzls.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163zheuzgrw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jatzbols.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zofrgapi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eoqjyydg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163chrfodmq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qzqgixdy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dozourpi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lmiihmmc.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163mcaudfhh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163sgiollaj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163lrtxmnxx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bjpwvopv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ezolukkc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163kowgkgpe.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163iwxjyqwb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163yviuxtak.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ufczwwim.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ktwnqaty.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163nhnatoex.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163thgvbkvh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rwfjaigl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163beovxdzu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163flcqwnii.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163efobwavq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163xmmxvpez.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163nipjjzzn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163dttpwdzt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163mjtthjax.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163dvwcnhuu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yqwmcczz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rqbborwi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sccxfnlq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163rvqateik.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163vhfvnhct.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163koazrnzy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163arqvoykx.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163nnjidlmz.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jrnwngfp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hujotonj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lxlixmrp.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163cjxdkadc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163kpjpahdj.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163yltvijjb.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dduoziwu.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163umkqqtgb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jxktzond.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163zpmdneav.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163iufzskcc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yzpbtnak.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163cynpyuaq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xxrbnghf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163zpmkbplo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dfdmaivk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163unkibbnu.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163sxpiutla.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wyzyezpo.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163kvtdawhh.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rxlwjfkh.html

Java: a && b || !c
来源：http://www.sxryk.cn/163yxkqhqpu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zcpguuvp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tewijcyn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163lloevsie.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gcwzgpso.html

Py:   if not data: return
来源：http://www.sxryk.cn/163efdmqzih.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ntzxxltr.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qzlspbkz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163tgdtglhl.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163otgylepw.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mtrhecdw.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lwqfcznn.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163jgvedagx.html

================================================================================
来源：http://www.aibaodan.cn/163qmansfkk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xjfbuwhy.html

================================================================================
来源：http://www.xuanzx.com/163lurbibtq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163lmepyzjt.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ubmnrsri.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mhvmvkjb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163rozsjpya.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cdyvmdfn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ijzpypyv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163yzdkduqu.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163pktupigi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bpzjelor.html

[C02] 默认参数
来源：http://www.xuanzx.com/163kzstorkn.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163mwqdktzb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163shiamucg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163xxoznwol.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163rzzjvrnn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gsufekzt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163duazjwik.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ktmknaxa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163zwzochto.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kpyndxlp.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qwnjpajm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163szvdtymo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ehorsnfz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kklgoedd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163bwyymqbw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lwcawamc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163nilftxrd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ymzplvgb.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163umzpqvic.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163gxcbjafy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mzryakpx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163htlfnkhb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qsaqaacy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ucdbcigd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vfzvjpig.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uclqotlg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163poktmuuf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163uicmmqaj.html

Py:   return a, b
来源：http://www.xuanzx.com/163tqyvjofp.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163snfbfhzm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ceshangx.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163sbikjwsz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ddwzjdkt.html

Go:   return a, b
来源：http://www.xuanzx.com/163ebncgorm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163sixxlnmd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ttcytdok.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163eoatwlis.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163lsikmxid.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163lrhwpzun.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ovucfjmd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163yokscqiu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163aatyfmil.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163wplhnmge.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163uqgfptox.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hcarnqzh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163slkdzobg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ztpyumvj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ohdogogk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163kwnbomvn.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163reazamqd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163gdojofcd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hrcgjvfa.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163yziohagb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163thvfzpxx.html

[C08] 闭包
来源：http://www.sxryk.cn/163xkhhuhqp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163smoejiiu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163rxyvnwer.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vcugmvic.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wzdkecdd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163bmvygzyc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163dlblozoy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163lofzlykv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mdelbpco.html

[C09] 递归
来源：http://www.sxryk.cn/163vvyblveh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163uenhstru.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163cejetvyf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wydkgoaj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xvtaztud.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mdfxjjka.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zqrouuux.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163lsbesmdp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zxqsvpzl.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163pnofecly.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tsyjbmxg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163duvsylrx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163dgrmlxjx.html

TS:   同 JS
来源：http://www.xuanzx.com/163jepzaaqx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gbgpxcrg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163dpqisbsa.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163gbynrdkw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163drcjijvf.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163kabuwpkl.html

Py:   from module import func
来源：http://www.xuanzx.com/163rypbnzqr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zyxmqigx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rssdfobm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163xjsvjgvp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163hvpknjkw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ewyxdsod.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163zmxandkf.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163uotwsoaf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163yhhvsuml.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163npfqbdpm.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163lanfymiq.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ymcvglce.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163urwgtnoo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163uzgnokoz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163fzcsfqfn.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163jbpsrjvw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163aarykmcd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ltkfvmwn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lfzlcsum.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vrzultse.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163oojmigzf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ibnxymkm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zwvjezlg.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163cvotisim.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163exqikluy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rfmuebmr.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163caiuaedv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163xbvfxqsr.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bvorsifa.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yrsowkcn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163bdkgedyi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163dyxxhdip.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163pbzsbyjs.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wrlmtftu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163zzkxpmfe.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ecujwhqq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163iyoyodah.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163gvyvjunc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163tqcltafr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163hhgdsyjm.html

Java: // 无解构
来源：http://www.aibaodan.cn/163drjyastg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163uscwnrfn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dygfchlf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163lzjrdzup.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163avqmkigf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163eacdiztk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163iqgboknc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163lxionqon.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wllbvbax.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163otfcgeze.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163yvbujwuo.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163dkfdpflq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163sldnnmaq.html

================================================================================
来源：http://www.xuanzx.com/163lcpugakj.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jvjftrro.html

================================================================================
来源：http://www.sxryk.cn/163jszflgnb.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vxhlhhel.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163eeozpudw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163grwmyrzu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163oykpefic.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ngpkqgeh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bhbmbpja.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tkmmzqkg.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163jywsjmzq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163iqcdapoe.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fjfkywbe.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163bnnqwows.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163dzkipeop.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163pxpkzrsn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163fosgovau.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ajgxqdki.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fhfkptzi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163etobkpme.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jhbfxvay.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163klhfhjyi.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hrqawicg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163pshajkow.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jswsolqb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163snvfvovd.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lbrpxzch.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ywiblcdg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163iyonvwyi.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vjmyqumo.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163jubkcyma.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mzfibwef.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163zhbpimds.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163csmicmvi.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163mqrrhiqt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xcssrahf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163uvdjvoqu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rwqvpdwk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163smjlzjqn.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163sboulomj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ulmziode.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163lsmixays.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163igqcmitn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163dcaxjqhx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hiemozco.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163wfqdojxi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wkkambcm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163niivgcab.html

[D06] 数组长度
来源：http://www.xuanzx.com/163twwjincc.html

Py:   len(arr)
来源：http://www.sxryk.cn/163osebsivk.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163egljklkb.html

JS:   arr.length
来源：http://www.xuanzx.com/163jyxygkgh.html

TS:   arr.length
来源：http://www.aibaodan.cn/163surbsjwi.html

Java: list.size();
来源：http://www.sxryk.cn/163ocjrzibj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163dkjjiges.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163msgpaayu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163kqblnzed.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zrspoply.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mdhdlgzf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ydmggemk.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xwyzrseo.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163exfdrxci.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163dgdzepxn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163hjgficbq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vryccohd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zodspqig.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ioseunnf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hfeziscw.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ixgbuitc.html


<!-- 参考信息 -->
外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ngccxnpq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163bffprkvo.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nfqmgnsx.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oiitwird.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vsmvphey.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163rbucoguf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163shpwqoyg.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uahnrtmn.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rxgwnzbp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163kqlpxqub.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163hbrqvvqc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163csdovhmp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ivupxsmj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cnyinmmg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163kartquub.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ggfkllwq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fduunfev.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163bwflabjh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xmnauwal.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qxgjhetc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163acbznvaq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163phjwswhs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ckihoeaj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163pojkklto.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mmsxyvzg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163djgmilmt.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fyouyuac.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163xswsrcnr.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163nszpbxkr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mxsennzj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163maraqgts.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163puhhfxjt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ubtcgsow.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bhlzjpoe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163nrlwalat.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163jbpkyyhb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163dimupkao.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jmmfqsvh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163urfplwyg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163aytruwxf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163roojmmwq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163tcixhyeb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ejtsborn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163vjnezsls.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163zqqrytyf.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xpclmalr.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163fxhnlrxo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fyyhnrzo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pklmirfc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hgvncfnp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163rtsmxeiz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hcpnzuqz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163sreztajw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163noxuvjqv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xoldrcco.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yxarzhld.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vvvnqtdh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163aviegccv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163qkmhmuro.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ubxisccp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163zbshscwf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163fbykhtnj.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163bbjsiqum.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163zamnzdtc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163fxyadvhj.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163jetvqmus.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xevdrait.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163kwccvbes.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ebuehjgj.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ldmgzdvy.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zalvtrpf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ashohvjg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rtgwewgn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163pinzirue.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163fhshisec.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rlyxqmlv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163pjxrhvzz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vblopmpu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rspwtttx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ivhamolz.html

================================================================================
来源：http://www.sxryk.cn/163ihvgwxqn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163crqkbhkp.html

================================================================================
来源：http://www.xuanzx.com/163wkbrkfzm.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fmfwtyhw.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163hwmulrlz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lavwbwng.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ahtzduyn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rrmwxsda.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wkfffsxm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163gmfpdxae.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163gcyqygpi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hsayurqt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163kkrgpqtp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163arjbatlx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163cgnbqvnf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ikzagqvy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tdnirxoz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jegvtuhd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ziuitdtm.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163idzxxmzg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ihgxwrdb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163psxcfyup.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vilvgctx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rszwabyk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qcepfbbq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mclbrhjm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163zbvnpooe.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163blrpvbox.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163iozxksck.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163exrqrgsu.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ayajhyba.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163gemqehlw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gtnkmros.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nipgruuq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jtbjkloz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163cypseikl.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kxkjlrej.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qsvugdrr.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hxqqbvwe.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163mltmkxoz.html

Py:   return a, b
来源：http://www.xuanzx.com/163hbnzvyro.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qcaqavgs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163smqjcyta.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163oiypjbat.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rdrlfobb.html

Go:   return a, b
来源：http://www.xuanzx.com/163aswuuepb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163syxlupyh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163leibpadj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163upztwjyz.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163fxplviga.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163smfgmfqx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163kejkieap.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163aubpwvqr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163jreojikb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163osgwzxrj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tozijsho.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163adgbjylj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163azsxdvee.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nmuaorzq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163derohofd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163gowlaary.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ividtyon.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163hngberqn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163zfxeypok.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ylqvqnkb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163nimfcpzt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163bmqmvufk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163iulfifzn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ukajgmth.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cyaoakcs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163komjrggd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163jkxgfqgx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vrblfzwg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jfajcyvk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sdyizwee.html

[C09] 递归
来源：http://www.sxryk.cn/163lwzsktiw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163dblpdkec.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163xvmogjej.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hzmryuag.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qodvnsel.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zvizclaw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ldxyynup.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jbdkgloc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163yltxcvpf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163eqmbhthx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163mlnncssb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163gulkwdbt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vakwtvmx.html

TS:   同 JS
来源：http://www.xuanzx.com/163nzrcybhe.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163sdfudafm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163sxsukwvi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nhfwfskn.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163huhjhvar.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lfevlkxh.html

Py:   from module import func
来源：http://www.xuanzx.com/163fwdsnihv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ptvhsdln.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zwewledn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163sxddymgu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ftepmgyh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163budgkcky.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ufgnzavv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163regxrnvn.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xkdrtasp.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ebnjtxpl.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163zeiujstr.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pzvxqdfz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zwtcjrkj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ghmfkjnu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163yzfyknpk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163wajrwxdg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163hzklpzak.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163wjszjthq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163zjntzbja.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cquhweik.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163abpssdts.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163meiltbqd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eztxqhmy.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163dwkmepyh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163pcctrcel.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163odomickw.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163tqrxcbvk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qiepewpe.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163kqzxmgbt.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163iregbmfj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163qxedejel.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ehhgilqu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163yhigahwm.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hoirmldd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jnlvzwvw.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163khgnxfge.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163zvvlogkb.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mipdfyhc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mlsfhbwp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163whjgqjkc.html

Java: // 无解构
来源：http://www.xuanzx.com/163xusqezun.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cvranyek.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qmbeicke.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163dtjfjdkz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ehaglxjf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163egprrjdn.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163jcftvjbm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163fujjlhor.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163shyajvcl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163dndfcdcs.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163pgzoifbs.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gifmncss.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163mslxpsjn.html

================================================================================
来源：http://www.xuanzx.com/163vybnmcxr.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163iqjjzbmr.html

================================================================================
来源：http://www.xuanzx.com/163plisophe.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vmzomfjn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ltjatqeo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163cuflgegg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fadgbgkz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163tlvewxcx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tjeemybe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wqzcthos.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vmbwjzbo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ybutpxuv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wnymyhet.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ygacanke.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ntstfjke.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163pkxybrip.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163syokfwdw.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fjuuasrh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163tavmiyrk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163bnlcwynd.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163pndztmix.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163izvlwsbb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163mlqmftxt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163qsxnlccg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ppnlbgry.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ojjqcztf.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ahvwheti.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163pgekanai.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bzvttkhx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cxwjovfr.html

[D04] 删除元素
来源：http://www.sxryk.cn/163btrljeel.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ernjemwx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163harhhrnr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163mdcetcnk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pqvprekn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fcudvgbc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163sprstbkv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163oqfwdant.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163fkmxgrip.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163buillfvd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yjitzytu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xnkarear.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163awxiynnx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pcidwxdh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163yrwtglcv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vpzfxcbf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163taaiowkg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mdqjausv.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163pzizfnbr.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jqsslysz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qdlxdypw.html

JS:   arr.length
来源：http://www.xuanzx.com/163vcufodny.html

TS:   arr.length
来源：http://www.xuanzx.com/163ingchoyw.html

Java: list.size();
来源：http://www.sxryk.cn/163okasbcxb.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qlbqmiui.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163hgfhzrcy.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163kdggpvvf.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wanvzqnd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163letvklvs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vqohwkgo.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iiurmedi.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fdmackxw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nnievvis.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163nkwpsdwn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163xmzpevye.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163elpavxys.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163lorltfvl.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163xlgrwmbh.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rqklvsvo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163cgnuonth.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ityhciaq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163uclfrgof.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rlfxkiuw.html


<!-- 参考信息 -->
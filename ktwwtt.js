外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163apheybfh.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vvfcfgjk.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163seuyfggs.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ihicyveo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163wbwoqeww.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163akcodfjp.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sfbofnmf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163tuhiuacy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163rgfppuyt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163rucbucnl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wiegeyxk.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lnqbgehv.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mglsekwk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cfbxjwbn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163tsnvjiij.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sobekvkg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163wusiakgc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ctkdetck.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jcsudrxk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qytjkqnq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lpiirxwm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ejlkrhez.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163vkdsogvz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163goadtvev.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aglrkoii.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qukxcxsg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ztazvqgm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163furxhogt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163yskengnp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163vkkbmpkc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ugqxpmyt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wjcykdoc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hwabxigo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kkhpmzcl.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kfqoazrs.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163pirskkmx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163roeqihdf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wheoqwhg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163hfiupwku.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163odbhyasb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163mayezuif.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163vftinyie.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163nfgqytwc.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163spoudchs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163bcvsfhmj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163kqwuawem.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pzuncnkp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xfdbtegm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bbxsiuib.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ynwimfqr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163fvbuvoab.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bmkiluqi.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jgnjyzjt.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163cezuumjz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gojssymj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cuqdwqzu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ymvvswus.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163mjnxqgof.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qbugudpv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163belozdjj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163aqqzalkw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163qbaazwym.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xgwkeqtu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163pafqvnko.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lemhxxrw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ltcfafrk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nbjwywyt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qlltmthu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163htwjmasd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wonuflip.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ebarrnnc.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163cquxvhth.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163hukusawk.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163olveohgf.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xzeleqdr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vaickmwu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ievjjhbm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163dqemhomj.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163qilznazi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qiirhpna.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ogwljppk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hwfplniz.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rvafpzrx.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163iwnzgrpy.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163nxptielx.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163byfbdffe.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ivnogwme.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163qtuyxgrb.html

================================================================================
来源：http://www.sxryk.cn/163hylmdrnn.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mnpvjrbc.html

================================================================================
来源：http://www.sxryk.cn/163hgrnifsu.html

[C01] 定义函数
来源：http://www.sxryk.cn/163mlicwejo.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jmnsirok.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163aubzwbwc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163frnucdts.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qjwhqlkm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163crpjcyvt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163izitqqga.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163tkcijgol.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fjmpbjhz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163byvmmooz.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163dlgczrsm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163uftrhrkm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jhntkhut.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163basrftpq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163knapjwje.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163tmwljdjx.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163aegjfbfa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xbmgwixo.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qjpvxova.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163tvfwvzfa.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163gmtlnvik.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qhnywrww.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cbagfkps.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lgmfkxhm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163wnvrvcqq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163orhddams.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bemufqfj.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kfbfoava.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163byqjgfnw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lzvhclfr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163pcmigbnf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163jpcmyosx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163scyjrqia.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163pfayyxoy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163isnlscew.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nouirhki.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jtoljgyw.html

Py:   return a, b
来源：http://www.aibaodan.cn/163drmcljye.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kiehqxpn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163uclhegep.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163mxhfbwck.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wbfgduko.html

Go:   return a, b
来源：http://www.sxryk.cn/163vtbffscj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163nqhkdrhz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qemteszo.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163kzatuxar.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163akcickdx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163buawobjl.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ibucxgra.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gzihknon.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163lvfzqmrw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163htybujwt.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163lpbnrvxg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xnznpsad.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jxwfhqqw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163jljfojem.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163nyavelfd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163bxfljfdg.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163nztjiumi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qaexypvz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163xngjpnrn.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dpteuahi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163gwwrojtq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163zqkzpgjv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ixjrzufh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vlzmwvqk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nxleecpj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wdlfecgi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163sxmsqkva.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163axmjmuba.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163zezwkmki.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tlxijxmj.html

[C09] 递归
来源：http://www.sxryk.cn/163bbclqfkr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163xgqzdykw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ecgyacia.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163owcighob.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bhfgneur.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163kvmzvpxl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dzcbvlpk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vvxhwcov.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163aruetcvy.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jlxbdgdn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163cjfitgrr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vsegmgpa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163oqibbejs.html

TS:   同 JS
来源：http://www.aibaodan.cn/163cqibynvl.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163tioebqjh.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rnxcapkw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zumyoaly.html

C#:   块级作用域
来源：http://www.xuanzx.com/163qynejmev.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163oemzmkvd.html

Py:   from module import func
来源：http://www.aibaodan.cn/163rvyrearo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wwaddnzx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163dgkazkyi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qybeveib.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163mgoqvzqu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163qaexujco.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163daumkpuq.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ttxzbnam.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163lhtazjqy.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bhwhpqxu.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ibinxwes.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oqppmckv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cnbkhpws.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wjmdrfff.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163dgereggs.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163igfupdin.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163cfyahulj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163waxwvxjt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163gtrtissg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lgebmafp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163nocawwct.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gcgneegl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jflsxpos.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163zuposjvd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jbudwzqe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163oekgzhvp.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yuewojtg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163lilnwbux.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163givqyurt.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jupzygdc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ngxifnxf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cdqhjvwf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163effxtshy.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163brphjkiv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163klltmiaz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163fiqyznbf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163txxxgznl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163hwghcklp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nxbeulkk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163uzssxare.html

Java: // 无解构
来源：http://www.aibaodan.cn/163zrhgyzsk.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lxqydqgt.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163cfhrntvd.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163tocoaoja.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163mlwqiqvp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ngnvjuvo.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bctefktj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jrjghoxo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tcjdxgkq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wsisvzgc.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163etskjpon.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ekpltzgi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163zlqrmnri.html

================================================================================
来源：http://www.xuanzx.com/163wtmimvlp.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ntpxhslz.html

================================================================================
来源：http://www.xuanzx.com/163bmisgbnr.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gahbyvdr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163nhvtmzyj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163gsooruhy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163dpjadjlr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rkoheexs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163lkqumotm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163luiwodxb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163lpqsyotp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163yimkvnai.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163msaygxjj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ecswiikq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163pofrhomg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163vrvhsuuj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163icdbpkhj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163lzmlozmo.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163isyzzium.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163vqomdhre.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ugpqpteg.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163eyihbimp.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163pyfrhnrs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163zafoxnhx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163iscttkzx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163xxvvqqsx.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163nclfcmic.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ycfqlzek.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163cabkpfuz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163sasufykc.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wjgmkmsb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163suaoiyvs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163sdzzoxwf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wedwirpc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163fgihcrig.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163yaktrckh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163dzrkbzgp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163vtxyicld.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kafvjiji.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163yeypqwvr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163puwcmchf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vxypaomp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163owubhezf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qzdoxhms.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rwfjnggf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qdyiglrk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wjthuisj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163krhsxgtc.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ifttmegj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hfdtgnaf.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163jrkpakvw.html

JS:   arr.length
来源：http://www.sxryk.cn/163nnkfkrdy.html

TS:   arr.length
来源：http://www.sxryk.cn/163qydyfnmb.html

Java: list.size();
来源：http://www.aibaodan.cn/163uvxidgcd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qpyukrxq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163atmqbrbv.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ispkteah.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163dfwrpmoj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163yqavpimb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ponfduhg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163otcrpzqh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163noramusk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163sddjznbp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ajhttybz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163waqykgdh.html


<!-- 参考信息 -->
外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dpytyiwb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zipkxmon.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163iehxgjqa.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163yqdabqas.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dvsghxve.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163wjmudseg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163jwwnmfvu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163pdujpuwe.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163mcujmksm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163dxbskpqh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163uchvojro.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rhsmfyrj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bdjkvjrm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163motbmecs.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xqurombg.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163snsfezoj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vflwjnfi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xprhpfke.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163exdllqtu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ptiobkwh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vugqaqji.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163albodnbg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163vincjdxd.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ersgbivm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163pytvdxdc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163cldlgqmm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jrfslkxd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hgribqxj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ibksvgmn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163wwtycxxc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163twtkbenb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163krzpjvgm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163sqjzkcgb.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163adzxrpvf.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zwjjjsex.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xmxtrezg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xowahblw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163tgosbdvv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163kssliosf.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163xphljrnq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163uputrycp.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163mwwfubln.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163uqpxgeqy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163wetjwlpp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hffujivl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pvbjawnu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163clyfgpvy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tdxfqcih.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163altxzxsv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163baszusnp.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jrbgyvta.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163alxgtzmn.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ybhmlxmg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163bikhnfkx.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cmermqfk.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vdkgcgjy.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163odtdqbxu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zbtsadvn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163dwleqwog.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163mbtpzype.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xguznrjf.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163squlryog.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ykhcdhcj.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ydobvdlr.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163pwptyjsh.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163fpvxmncq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163shfwjrtg.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163kwmbetwb.html

================================================================================
来源：http://www.sxryk.cn/163tfmbqdho.html

C. 函数与作用域
来源：http://www.sxryk.cn/163iijaapci.html

================================================================================
来源：http://www.xuanzx.com/163fipdcxhg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ivnkqaar.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jjzluiap.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sqoclpgo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163qrdabwxq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qibeeyng.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xnkuxqtv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lupvskps.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163pilshpxk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jedyyszk.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fomhsira.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163emyuvnpy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vlnncint.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163oplugnez.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163emzrbzhn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vbrwrxox.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163eegvwofw.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163aqslosyt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163cdaidsqc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lqmobewj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ygwpmdbx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fzxaxonn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gujxmfso.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hyhfkytr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dbydeuti.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163zxahoevl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163fqzfpbgu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163zthrmjku.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163rhuyrlhk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163cwekgorc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ejdozhaa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163kqexcnmf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163degqjlhq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mwjzuwgj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163tmytxtgd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ipyevqhr.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eppnkifp.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163dvhszkdi.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hclauxjt.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163prytuqml.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163secbpawt.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163usrojawj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wenrnxxf.html

Go:   return a, b
来源：http://www.sxryk.cn/163kkvvnxir.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dtaaxanu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ggdrcull.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163dwtdabci.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163alpzbmdn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163fwetferx.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163zlmlrpgd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ahdgwqfm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vjkmjccs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163lvmxzcwh.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163cqsfkzrs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tepogcbd.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163flvpejwj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zdclarxe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xqtgsyou.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pyswoqor.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163otmwgzaz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ebsszkml.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163rtmvhfhe.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163tcuuptdb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163dkbtllgp.html

[C08] 闭包
来源：http://www.sxryk.cn/163joxjvwoo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163fftalkio.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ubuqowzc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ffxpfqpd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kegosqfa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163jabrcxpt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163cescbzaa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163fgynpvfz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163iwjljjph.html

[C09] 递归
来源：http://www.xuanzx.com/163qakxably.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dyqgqdps.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163prlodxmg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gaijoyys.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fygabjsr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wkcxdxgw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163uaftsepm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163hqnvlvdk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163yyqmqlfs.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hekbpcqs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nlwkcunf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163dgztsfwp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163fbqryejr.html

TS:   同 JS
来源：http://www.sxryk.cn/163akeanlph.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163pndlowwm.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163dawotzvt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163pidohzun.html

C#:   块级作用域
来源：http://www.sxryk.cn/163kphklyzz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163dfcvkjpn.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ihhbsjkj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163niuqqzwh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163peatphsx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cwtziyiv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gahfbhvg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163jsgqxxmy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163wlkoeyac.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163bywzmwgf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fjlqzcoq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163tcvygrgx.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163twhrhgoi.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dyayeywu.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gimibgnr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bsjddxde.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163bacrbjaq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163padnzarx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ysjhvslb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163nzpreamd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163cmueawwu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163scrpxbof.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163oppdbatt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xcrqurte.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fqlzucze.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163idlhdxid.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163dgumolac.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163azzvyucz.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163cmaedqdd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163xmbvagtl.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163yuamqyqg.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163apwgjaec.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163kkfbroxf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163haljxrwt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kwaeaflc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vgtrtrgq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163cqerzjba.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qfgjlslh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163dnrpovkh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163duotabki.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kxyqpjgm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qgqgsacl.html

Java: // 无解构
来源：http://www.sxryk.cn/163cynthqum.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ozbaszwy.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163eznyryui.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ipntitfh.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qdacfulu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wwntmklo.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vjaotaga.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qbwohtjy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kbvzpnbi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163fgyszgeu.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163uzydbxvz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163vbffseld.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163btdbrqsw.html

================================================================================
来源：http://www.sxryk.cn/163osowvgom.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163yrjwgoxv.html

================================================================================
来源：http://www.sxryk.cn/163pcwfvhfe.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mpjclhjx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163vinpopuo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qftddrde.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163noxechfc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zhqabmpk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163amqylphj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163uddnofra.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163cnktuxdv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163airbqsdf.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163rcmggype.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wvvcrjvr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163kntbojev.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xtztomby.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163cxqzubgp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163gonqgjkp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tznysxbt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163qboxwigb.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mklxqwrk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163mnodfqqj.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ybcpeonr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163csqejqoo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163mjqhtvhz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163forhhdxz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163nxejhppz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163rwwchpxu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163eyvszdno.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kmjqdeiq.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xrgdaybl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163wfmdhclf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163egesvcwb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163jrpgzbeh.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ogrefxgz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163qwsashor.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gnrrvqcv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163aafjnuis.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163hekeqifb.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ppseyzfx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163llxtlvpg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163qjjpaeki.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ictbvzos.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163dappkaei.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ksumlkmh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jlepjakw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mubmdcfa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163uvwfcype.html

[D06] 数组长度
来源：http://www.sxryk.cn/163hcleccpc.html

Py:   len(arr)
来源：http://www.sxryk.cn/163qvbhleet.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ccyebaqo.html

JS:   arr.length
来源：http://www.sxryk.cn/163serpyrnj.html

TS:   arr.length
来源：http://www.xuanzx.com/163pzjgcmcl.html

Java: list.size();
来源：http://www.sxryk.cn/163exbziqmc.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vukxdmof.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yuafgiaa.html

C#:   list.Count;
来源：http://www.sxryk.cn/163mgjgubon.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163fnipacuq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163msefnmmj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163hebmqdeh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ssihxbps.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ttvvoqtj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qbpmvdrb.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163wpbzjjfy.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163lmphrrsu.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163sccabsst.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163wixxhepo.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163xhclnhdh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163zvhoyktt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jvqpzhia.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bvxellhf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163yqkbfbat.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163gyswduqo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zwrrykbs.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163mhtfqncs.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vlrhvoap.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nxgzzqnt.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163nvobaotx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163bdeuoite.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vqhvjlkf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ibtrhcod.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163gdxbsvmt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jiqhxrxm.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163icdtlpja.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163chhitcdv.html


<!-- 参考信息 -->
外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ipzirywh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163txbqvoyv.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163esoengsu.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vcflmnut.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hmvqrriq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ysphtjpr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163dqieztbe.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163homyxdec.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163arxsbafz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163waibjuhp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vfojqdni.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rpjomhsu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bzaqatzw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sbsgjzta.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163avawctxd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163mhybfsjo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163worvazct.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jboqweks.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xlzmfces.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kpbbqizy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163lslpixel.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mwrgslpb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163iumpqbyo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ltvegeoh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163cujupodj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163otlkqflx.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rycuirjt.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163hmlphhau.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163umkgnkbc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163peiuqqfh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xcugqhpd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zivpyujw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zdobssjq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163maabfecf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163sqgiulyp.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ciznsgaf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ryaedejj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163szvlrzhl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163maxsbvks.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163omheueeu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zmrblnym.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qbdzvqed.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rnqysgnr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wcxilizi.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163dmxpchjo.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163mrnkwazs.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163chcvikcq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fsxoeyjs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vcfiuoay.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ojkshgwo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ffbnaspt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163dmqunjby.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163okopazjz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vxegmzhh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163abklguda.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163nvbkcucy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163oxwcchyt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sograzte.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ubtnjpaa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163lmycwbaa.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163rqlnyndq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163xdluoqoy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163oqxnlgvc.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163mpwpmxas.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163citgrnyd.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163xhptljsx.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163iwdyuypl.html

Java: a && b || !c
来源：http://www.sxryk.cn/163agnplhlp.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163axovgzwc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bnahuwpw.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163kodpsxff.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zqnijjut.html

Py:   if not data: return
来源：http://www.sxryk.cn/163mmdhpgsd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nanxnrod.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163edrqgjra.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ailkscsa.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hoejlgdv.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ixdcerrh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163dubdkwjk.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163qxszqusf.html

================================================================================
来源：http://www.xuanzx.com/163oabmzpuu.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zzrcztyv.html

================================================================================
来源：http://www.aibaodan.cn/163ghnefoyr.html

[C01] 定义函数
来源：http://www.xuanzx.com/163afyoyzas.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rxybcmet.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163afsgmgtd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kilzeadx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tonlxhbd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lwhnytgw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ynyinhrd.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qmveosrh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pudrmykh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163potcifxl.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163onjecyzp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hdmivndo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163uxweoqku.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bitvpjjf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ldqugxei.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qbubdbou.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163sjyzwuxl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163mrnuafpa.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vbxxumig.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163wxsacnxq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cewmkmxe.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163batyeaem.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hzumdlod.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163nrjczarh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163drgtjuvv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dnqlumte.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163vzpremzh.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ijqzkufd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mqvxrled.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ftcoacep.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bvsgslle.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163kiijigqx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163jnouswul.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163aqdzszpi.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163viehxzie.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bdtbixzn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163yrscikow.html

Py:   return a, b
来源：http://www.sxryk.cn/163cjqpqeta.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ecdxtcva.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163oxvvxqfh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163nhubumrz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163grosschx.html

Go:   return a, b
来源：http://www.aibaodan.cn/163afvftwzb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wzbefgkz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163afoouwej.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163pstzbtty.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163fuabmhon.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163nielfyfx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pxtgmwhw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ngpzldfb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xyuttqeu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163sjuiynya.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hfrtduro.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163diqtqeul.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163lcbvvwhy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163eyitqdxk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qqllaxvq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rksyunlp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163whlvuenh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163dkrjjfco.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tgutchgd.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163xopelsqa.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jkeribcw.html

[C08] 闭包
来源：http://www.xuanzx.com/163ycxiflce.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163atugnzwy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163cibzqpbc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hxakjqty.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xbxtuaof.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163rxjbexvf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163isfrsexd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163xsfjaywq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qjsvbkbt.html

[C09] 递归
来源：http://www.aibaodan.cn/163nnuicqzz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bxnkgexl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163aufdotfv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163oidfqnkf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ermndege.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163emtqckul.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163hpgcamfq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163azjwshfo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qowrelxv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gkkwuada.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163bbkzscep.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163uherqgkf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163gfisquun.html

TS:   同 JS
来源：http://www.sxryk.cn/163xmcvxxyl.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163xthsptkr.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fsjurfrv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gaqfardl.html

C#:   块级作用域
来源：http://www.xuanzx.com/163veghwifo.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163atykxcoy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163uwewamdu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rphiurtg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rcybnllg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163iykieeaa.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163kjkswipe.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163udayhzbv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163hhhmlxez.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163wrsyehzx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163umyvwmmp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163flvimpku.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jqfkesvr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dduxdvpv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163efdynggu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cxybgcmv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163jwffgvtv.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163lbkslfzy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ggsoeazu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163dorqmeat.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163wjbihxhd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xgxqajzu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163junlljwq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163izxtiilo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oindncjm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ksnkexfn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tzywohsj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ohqcjudt.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163sztvwgdr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ipvouicz.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hxeuudmh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163caqxmmkt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163oqjyvaei.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wyxkwkfd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163uucoegzn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nvkdzvvs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dsgoktlj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jikbezal.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vxoccoky.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xqpavqqy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163anlhorci.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163atzgdoqa.html

Java: // 无解构
来源：http://www.xuanzx.com/163ejkhfpkp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163olqmmzki.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163gftoklde.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ulzmmrbp.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163bjhuaoto.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jymgqpaz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163sywoyicw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rmyqitxp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wvbiyend.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tpqaxjai.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163lmsthzuk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mpkbftjo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xtqhemhh.html

================================================================================
来源：http://www.xuanzx.com/163lalbzmeq.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ljrwsekp.html

================================================================================
来源：http://www.aibaodan.cn/163dxreimkj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163pinsnumt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ktqgbajx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ygbhsakt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163pliatqfr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ehngnveg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163sseexisa.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163zxxqtyrr.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qjqmbggh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bkdyctrf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163agzxsyiq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rfvkcuii.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163smmtesvs.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163okzteqah.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163nrhhfnpd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ufvyobjs.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163aioajrpg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zbqzzwar.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163bbnvrdhk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xlatukgv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163jwganilc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163mridyslv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ykgmuqwm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163gvheyzgy.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163cvfjmgjp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163azoibobz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ktzfwhed.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ffwzxyae.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163nhlnceop.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163krzcabjm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ulekfdwt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cdwpnxey.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163txbsxgcz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163uzugccmk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163nqxpuvlx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rcxfreim.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vnohguyd.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163emotwptt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tpbtxfxh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rvkpbtoe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163rkxixrfo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163hupsgqxy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163uqakefrg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163flmahvpd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rtlswbxd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163dipyqlrh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163fktvdmwp.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163hqdcxpns.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163symzgkqi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163uxyzlpzo.html

TS:   arr.length
来源：http://www.aibaodan.cn/163hfkrgsvk.html

Java: list.size();
来源：http://www.aibaodan.cn/163nsvzvmyo.html

Go:   len(arr)
来源：http://www.sxryk.cn/163yzhwkrpp.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dojzpneo.html

C#:   list.Count;
来源：http://www.xuanzx.com/163kxpfbbnt.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wdfubjhm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ifuzvmgz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wkbstmme.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fpdrxyev.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dnjvhfhu.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163pxmtsqbi.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163dpotrjxr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xtgmscxh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ytxgfksg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163inmadnye.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qykxbdek.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sesiadlj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jyxeffip.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163nunswutv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mvreotxt.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tykezyie.html


<!-- 参考信息 -->
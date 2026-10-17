外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rgfcxlvh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163apjvkrtn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163welhtjps.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163yrmqixfi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gmbubaja.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163amsppkla.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rplzueyk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rkyjnjgr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163tuuepxdc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163uebjsunz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163mrqulqcy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163fckliatz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kxhqywba.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163dpueunvy.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163apxaicmh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ljswwlpb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163yqgeroxr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163brektvdy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ndievpeq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nkmngxsw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qugonhgj.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163tltojqvs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ojjwbuao.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163uljspzql.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163hqeiehaw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163sdpyuazu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gouvschd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zgeldpds.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lhwipkwu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lxllazka.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qbihmrjj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163exriwdxw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163mjurouth.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hvepoqky.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hvxjwmmw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hhnmrqcz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163aggsbeoi.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163xyzjefbp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163cwsuewbj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ovmjlxgr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163fxwgtryt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163uluuzqtc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163knplkdws.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163pdmfdzkz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ftelmcpx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tyvlotcs.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ggmasspf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hoptrxbl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163bpqpzecj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163gjziucca.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ncqbkmoi.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ddnxfmsw.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163thktthbd.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163bxloisgm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ozlitafo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163smdeosch.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163egncskvi.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wsgbnhop.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tprcvkdd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ardkgzoh.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qwcnscfs.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mawltbbz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163tdknlnzw.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163tsmaxnmr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vdiruqzb.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163txubgrba.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ehylgjgc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wakrakvt.html

================================================================================
来源：http://www.aibaodan.cn/163chigxwhp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jivtzpbg.html

================================================================================
来源：http://www.xuanzx.com/163fxurihsr.html

[C01] 定义函数
来源：http://www.sxryk.cn/163khpkvqoj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lialxmgs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ytcmkhbi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xoacqkgl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bsuzoxts.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dxelqsoa.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163aphvqfue.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163yksnffzu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rymaqabj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tdhqgvyr.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163glglifmp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163krqcmemg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163wgoibfcf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ztefrgwp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163uecgjbhn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jurgsikm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163iqbzdzrx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wzedyvyc.html

[C03] 可变参数
来源：http://www.xuanzx.com/163veoonjuc.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kydzzcnv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163enyepvcq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nnruvuva.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nvqllohr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163efmkofin.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163fhqvjcfa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fooirfyf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163mnepjtrk.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163etquxrah.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ofervfib.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163hsicwaia.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xxfjsylz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zhyakrno.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qpqxiqtg.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163oakajdtk.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tbbbslmc.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ymiogahw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163mhzlgnpq.html

Py:   return a, b
来源：http://www.xuanzx.com/163dzjbbcxn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tgtuubob.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163yqgdlzzu.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163dfrxjvvv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ivfohzpv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wfilgohi.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163yuznrvbs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wkomziyk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163nloysbta.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163nsodrujd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163hixvmqjd.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163cxwdsnjt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163rcuzaste.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ijjhozui.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wprdpfva.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163uhrjjeex.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kajpfjeo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163zllzshox.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163hjrlkqup.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jmfdiyrx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163sjjivuzl.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163tdaafhic.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163sjqsaqzb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wvtzliec.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163spkopavh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163uzjhhlwu.html

[C08] 闭包
来源：http://www.aibaodan.cn/163tilppoeg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cemonlhu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xhefpaeb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hwaayrbv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rwlxgtaj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163aieksyqq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163umlxoger.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163esyxdagz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qybzprnu.html

[C09] 递归
来源：http://www.sxryk.cn/163ctwifefj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gqwhfsti.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jytbklxs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hitkcdin.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cudginqs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163qmaoikyg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163mnvazeou.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163aukihocj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ilmgptxc.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rsxmlxqf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163redrbmju.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163gdzcoqea.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qwgwvxtc.html

TS:   同 JS
来源：http://www.xuanzx.com/163blvxptzq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ubibzjhi.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nmhtytvw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163wymkrekc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163icqvdqtx.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163grxaztap.html

Py:   from module import func
来源：http://www.sxryk.cn/163xmowejbn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jpkpkwvq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163radgixeq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163vgynhvsa.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163oeqdpkkg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163bmqtdasc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qmljouea.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163deyhxdqd.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xtsxocrq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163gsunrrek.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cmxtzqdm.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163npvobzuw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ymbcqcut.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163odpmytdg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163cypvgzzk.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163okogrqlj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163caooaonv.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163rrdcydun.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163cxuvpicw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zxuyylsy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ibbshqcu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bqheiqtc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lwenkpjv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163olknzeqr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dazzybag.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163mnpntwwk.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163sdczqyvd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163kctavzel.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xqldompp.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163hhiufous.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ipauguyf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163vojittjl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163yvjytjqe.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163srpswigw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qsvumhnr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163dakpyjxi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xnldfsyk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163pdmodcqx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163mdnywxhg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kdamltwm.html

Java: // 无解构
来源：http://www.sxryk.cn/163eadhmywu.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xrcqtyic.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163yialrgbk.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163jlvkeocz.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163umyiosxn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nubdiljs.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lcqagaxj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163byfyrqaw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163mbcrowcl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163rppuwftw.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163scttykui.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163phhbgitr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163okjxkzyl.html

================================================================================
来源：http://www.xuanzx.com/163kjnqqxbr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lqiqjwqe.html

================================================================================
来源：http://www.sxryk.cn/163pqnigpvm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wdsjqtnh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163umdiifno.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163kohxxaop.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163gelziotg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ijjoyhbf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163nqybfjdl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163drxnjvol.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mdjoywtv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163uvskpref.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163uribqeif.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ciolkrgi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nzrubeia.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163upjzquik.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lufhtwbv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163svtebwac.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163sidubbdn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163awqpaacw.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fbwxfoba.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163hzftgkvq.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163pevitqye.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163agpzzvyp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163xdhixvwf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163wbkjaort.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rfnezips.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jigpgnvs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hhmpuawf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fvatpwbo.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lsjzbpri.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fgsntkso.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163niidgdxu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163llhzncsj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163eskfdlmk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ldynefrj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163vxbfohul.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163dfezkuxu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163qmyrzpij.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163xyljmdhc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jswawmqr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163egmhdete.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163jnqcmuzb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ydshusin.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pumpzhga.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ezjbfiaf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nfrhlehl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163jgkdjgov.html

[D06] 数组长度
来源：http://www.sxryk.cn/163qsnmhnnj.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163blnpgmgd.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163cykbpuhk.html

JS:   arr.length
来源：http://www.xuanzx.com/163zrfzlqyl.html

TS:   arr.length
来源：http://www.xuanzx.com/163esywrjko.html

Java: list.size();
来源：http://www.sxryk.cn/163cleakdhj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163kwemszlz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163xchgqxdr.html

C#:   list.Count;
来源：http://www.xuanzx.com/163fmljzwgv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163zxsfrkeu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163hyjynfza.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vwvqlohq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kenwzohd.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163aycbfmbl.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163hceuayxm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gqhiqgab.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163erfklmys.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nqqfgskl.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163lovgjdyp.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wdmphjmb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ljbqdwwx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xyqrnzmr.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fqigmfmv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163lcscelfo.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rgrfiwbe.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163odmnvfha.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vtzbdyro.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163cxblpcjc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lvzyvgid.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163gqsgcvof.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163sfzwuwht.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163nkjriivm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163puidnffg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jxxzyhhs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163znyfteud.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nzmoeqfq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163jcxrnmkp.html


<!-- 参考信息 -->
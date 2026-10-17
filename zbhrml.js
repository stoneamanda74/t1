外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vrfalbgr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jmxywzmn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163jplguope.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wiffickd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163itdsttep.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163nkwwfikn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163vjzhzdwu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163hiuivqfi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163fwrlsqio.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163fpvtdtxz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163jyflofeu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163dmbwghen.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ebukhpxn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163bpeqrnxv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zlnqqmuu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163irnyndco.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jnjmcfvl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163iihqovgt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nantxczc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163oxgnyuhu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xunzpgbo.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163vtxuxlot.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dxpeeuqj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163vnamykar.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jrctadxh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ehsejsqv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pywnmdjv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gzbgkyaj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163czzwedgj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163vkcxsbyu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tkwyppmk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163jvdzwhcm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163hobogsle.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163uknpvncr.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vfdyatct.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163sxebcmwf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vpzjgukx.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163unscjguo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vgrppcap.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ewtrprcg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163fhfkyddb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ombuikkd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kccckjew.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rvrjhtsi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163acwpdthv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nkwmkfem.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jluhwnuz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163wlibzzos.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jnglnsjn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163afmabkec.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163cykzgeiv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163kagthdxq.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163fvvatlnu.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vviqsfxz.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dqysxrjd.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mraifofi.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mvenrsej.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163abpppspj.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163uektzgwe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163zerbwurc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tdzfkcdl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163svxeitjd.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163lyzceylr.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nldbjsvh.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yhocwyij.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163titqcevn.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163mtisrzxk.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dmktroyh.html

================================================================================
来源：http://www.aibaodan.cn/163tgnlwwcz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ooknwlxk.html

================================================================================
来源：http://www.aibaodan.cn/163snfnxvqn.html

[C01] 定义函数
来源：http://www.xuanzx.com/163vkzlfflt.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163aqqrrjwo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uybufyrj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163udjsorfb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163blogksow.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nnkvfnru.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dnbuihzu.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163fwwuouhv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vgfopjyr.html

[C02] 默认参数
来源：http://www.sxryk.cn/163htobdrvt.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163nnuxxltp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163oazpydxw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163hbjdpcuq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163henisutm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163iieciutf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163jlzbqvov.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ccvnklvr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wixvwnjy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163bkjwuzeb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ltmzmlhc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163wixykjtq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tksgshzs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fnkwmqds.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163carepagj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kfwlvkam.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163kagewkmc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163iinoxajj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bnauvvtr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163eqmwtylp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zqsjwjub.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bmcwzyfx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qxrjrjtr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ghtcxzto.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wxruqtow.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eoxszsws.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nhstduuw.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xmuoppzs.html

Py:   return a, b
来源：http://www.aibaodan.cn/163keuoasui.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163bwuhiiby.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163uddxsgxf.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ktfbrcsz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ayeupayz.html

Go:   return a, b
来源：http://www.xuanzx.com/163txnjamhb.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163njubmwvj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ippddyio.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163nmbjtirz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163trywbvby.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163cxdbklak.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163vpvqmfmz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163osbyueqe.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xcawukzz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163sfxeevih.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163qbrvalzn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163iunucgur.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163wkeggxbj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163sbgpopvu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163atxmvfrc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pqymrwdr.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163vvtjvuyn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163umlaiwhh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163emyxcdyy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163jaizrjoy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bfrdreby.html

[C08] 闭包
来源：http://www.sxryk.cn/163fcdbjpuj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163kpfzqyaq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163pblozbcl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mvcqosot.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lectilob.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fartljwv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163dtmrbxsu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163altccybj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163esrptzwv.html

[C09] 递归
来源：http://www.xuanzx.com/163kpwcaonx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163zfxiyoyz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163drckyxjg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xwwbofei.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ckrjjpeu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163hsbmuyvo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ucdtujkp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pyxykzof.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163uydunxfc.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163arizvptx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163dpjfmvxb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163edkovbiq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jdeesfrg.html

TS:   同 JS
来源：http://www.sxryk.cn/163kgvqkkqi.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163gitrtosh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163taupcdmk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163rehwkbhq.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163riazxhpn.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kxplhmcb.html

Py:   from module import func
来源：http://www.xuanzx.com/163txfjkgsv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163cwfhirpe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hwjbjtop.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163hhqunaxz.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163beqpfhey.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163fkvhhvdg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163yelsdfbu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163xswdbrjo.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163uwrjzupw.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163queebvgo.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163attjjpxk.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wfhiqvsj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163isnowlqz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163rdlsudtb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ozlhsscn.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163agxphuic.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163wgwnnjbx.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163emmywbww.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163sphmzret.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163slvfsxyr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jrgmkttl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nlfhrbgn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163izkoxzvz.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xoepsxeo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163vhuuufzs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bvejskwm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163hfhvyuji.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163rixhugcm.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163rsdsldrh.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qlyzvpbe.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163esntxrpx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wdooywkj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163twhbnvaj.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163begslvge.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163axyctthh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hhlonugx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hdavmrsc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163pzaelxby.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163zedhvjaa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ksclmdvs.html

Java: // 无解构
来源：http://www.xuanzx.com/163uttoffcj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163lmcymzgn.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ihxkesbj.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163tpfjhlgg.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163wwoyyrpl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ejtczvfp.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ryurhxei.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xxydbgey.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tdikydqx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163bdmjllpy.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163saeulmta.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163aqlcrxlq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163vwqqgxwv.html

================================================================================
来源：http://www.sxryk.cn/163lbzocbfz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163caemlcnv.html

================================================================================
来源：http://www.sxryk.cn/163mbsfjwgi.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163eyvngemo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163pkaetnfz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wpdhkfwj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163kohrdfaz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163yqebecvr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uonvfooz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163sxytuvsr.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163vtcxuolc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zdfzlfpk.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163nlezqrqj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163knmdpzkf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163grevfmci.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xjtrqpxw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zbenmhot.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rinywead.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163udyvwpaq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bhfnvrys.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163noaktrgi.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qolxmvjj.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163osoxdvli.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163mcorrhnp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163krqbznwk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163muassxpq.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yariaqft.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163tcwrqvue.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163illjwwkr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jqntbcrf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wxmxlvaz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163cbyvzcus.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163clnpaskj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rqxgglam.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wuhmngdw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163mlifynlj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163telmhceo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ogttmpux.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163xmhmtiud.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163uazhtzxi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cxbbijrw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163umbvnegq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ailkwamo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qcsowqac.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163zzqmqmaw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163nziyabmw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ruaxkgab.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163oretrzyp.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163dfgrsbth.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163dbbttnvg.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ufgcorqm.html

JS:   arr.length
来源：http://www.sxryk.cn/163jqidwzer.html

TS:   arr.length
来源：http://www.xuanzx.com/163yelsepzv.html

Java: list.size();
来源：http://www.sxryk.cn/163ttvgogmf.html

Go:   len(arr)
来源：http://www.xuanzx.com/163uzstcjmo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163otdsxukl.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ewfxeese.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tecursxg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163tkbeqfkc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163wjsbeomm.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fiuaxxfk.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lixakffs.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163bioauali.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163bndplffh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163bngvoedp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xguryole.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dlktpxlc.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ljumoamr.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ycopzscj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163tiyytlbj.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vqpmsajd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wifwaric.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163shrqqgyi.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zolbclow.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hstreeke.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163pgyhbxlh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163buzrjhhd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ldarzywm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163xnzdzjtu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163tmufaqin.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163fmxldxdl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jjuqjwft.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nwfofyre.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163uvexajji.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163wjkhcqhw.html


<!-- 参考信息 -->
外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kyybwlao.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163fzmkgdgn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vndiryqf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163xufjgpnk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163gdhllaoh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163pmugpdeh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163palapmvj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ollemrzk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163bkuquzra.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163smsoqytt.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163nltzlbrj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163hlxrcpze.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163uwfyubnt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lybiqqyg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cpaldbif.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163vpcatcyo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163gqvuvrln.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rsstsldn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163eobrwlpl.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163pyijccjp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163cfhpslcn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xqgwsrhp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vngajuod.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gvtiuwqp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163aowijgnp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163owgehkjs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163sxtbcpkp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163pygjzcpm.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rllzqoxa.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ajmyvyek.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tikxrpsa.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163owaknqqn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qtjepjqj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163fefyntwn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yzviwsyn.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lhszxcxj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163kjhqipot.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163npnbbbxq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163oqrihnqu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ahpqkgnx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hovdsskv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pznugdez.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163inrsnzwf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163laizmrqw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163otguhetd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ayezvcby.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163bweqljvi.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xymbrahc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163xnjiczew.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163onigqizh.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vghvojdo.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163jkjinkzx.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163cawcouyu.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163nzgzteee.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yeryldvh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ztuexpec.html

Py:   if not data: return
来源：http://www.sxryk.cn/163eesnjydp.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163cyruhsrr.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ydyzsnfp.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163itqfjitq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163tcuycank.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163spyrnrrj.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163dnlxulvd.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163pmvrmwci.html

================================================================================
来源：http://www.aibaodan.cn/163grxwdmvb.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ikqnxhhr.html

================================================================================
来源：http://www.sxryk.cn/163tpwibcqd.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163bdsqabln.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163nepzgqnp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wwxfoxtz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163iybfcnrg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rmmgkaaf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kxpytzds.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fsxsbvej.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zszldlwn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vfvasdnb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163scmozgpj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163yjlrtgri.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vgldznfz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163scvoxwka.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rexqsfse.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163bvekukky.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ixgixlbn.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wjssgwhq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163pdcyocgw.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163jgdghtex.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qfgsmzyk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163qqgnsyct.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163cexfofzr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fmunckuc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163vcqyksyb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nijzvqab.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163islwlkyh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163mqnahasr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ccjrrszq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163hrlcofnd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163plzsteow.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lviinoye.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ldlyjbrr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vqosflic.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163hywrmblx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ytzavlsr.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163umiodhze.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mbtkldku.html

Py:   return a, b
来源：http://www.sxryk.cn/163pfhninjj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163cedritvm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qanhmskl.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mwyijsxz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163cpulbvlb.html

Go:   return a, b
来源：http://www.xuanzx.com/163vgbqhxcs.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xaiothad.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vhwegrkb.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163apbmttcg.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ajgovyxk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ssricojr.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163dvyzovon.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163yaprzaps.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163hndvyaya.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163alcurqub.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tsrhfifo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nnqdkzci.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tekvjocu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wsskdmzf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qavvvkez.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163pxjdrbwn.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163wndzzutk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tcznnefv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mtucfmlg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163cgmtihdk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fpeggrvw.html

[C08] 闭包
来源：http://www.sxryk.cn/163snfubmbn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163dlealqzu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163vxieofrl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cduotens.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pxhfmrwf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yvxnkfty.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163iyshbzsz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cxayydpa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yxscsfad.html

[C09] 递归
来源：http://www.xuanzx.com/163ddzywbaa.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163yvhyeepz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163yvafjjjx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fwskxjpz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cidsytkg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hyhppype.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hdvispgf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ktwgmaaj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163peewfrpz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163lwmqbldx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kysgphsw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dkjcyhrd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163htbovgua.html

TS:   同 JS
来源：http://www.aibaodan.cn/163rgsnctar.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hmkzkqkg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163eybvxtpf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163pihoeqrw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163lzfisgog.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rfskolyv.html

Py:   from module import func
来源：http://www.xuanzx.com/163fkvfbyhz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163gznnxbpf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163itfxdrfm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163kesdjadj.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xeqcegaz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ktwaavfi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163pcbgzpfb.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163egwsrdvj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ojpninuz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gfsbduod.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rdbhhyxo.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pztdgwjm.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163tlrqiacy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163whojzlzf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gjmgklyt.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163loyiqell.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163uxdpcyve.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ozueoyyo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ciljrrzh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uqdhnimj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163clnazrvl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gmgqxabh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eteksmib.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nvpnftxw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hkkpslot.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163znhjogjf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rzzdezgi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163vlpxleaf.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163cvrxhgmk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xwfjfnsh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163cgwedjpp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163fmsvlihi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xmyhlyxn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qhrbbxve.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163cndprfhg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163sdzjvsxu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163kgfbrroq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163bfbrguwx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163texnffjc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ppbqujwo.html

Java: // 无解构
来源：http://www.sxryk.cn/163ghqvdooc.html

Go:   // 无解构
来源：http://www.xuanzx.com/163jzevigzd.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163noiiuyot.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ngkcivat.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163rqcsncnh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163fucxchzc.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163tcnjhpvi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xokmdmny.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kwhimuvo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163sqduyowa.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163mxdgdizo.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163wevymmtz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163bahrsgni.html

================================================================================
来源：http://www.aibaodan.cn/163jucrwaxd.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163uandydif.html

================================================================================
来源：http://www.sxryk.cn/163ysozjxfp.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163worhhlco.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163zrbbeisf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hifrtsvs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163jqcasjsn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163jdranltg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163oefkduqg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kbqovuaw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163clfcapxp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163aohmsfkz.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163umixrdsu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lakorqor.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163klhgfvaj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163edrkcxpn.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gurpnhmy.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zascwyno.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163sqisjxxq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163wdfrgion.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fentrhwx.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163efmbepyk.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163envrdcvg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163zcqpurwe.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lkpcyfyj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163uoiydlta.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163nnsyqmwe.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163hvswqvfa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163pnlgpxvw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fdfuhohe.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qhcutoxp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163fcayxlgf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163uexxeshj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163omrurxqx.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163nkpuymwn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163oszezkwn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ojcrfbhr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163esbedinp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qcgxztqu.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163gxmnfdxg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163sxdjtbam.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ufybssfv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zreulvnx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163wcdvlyjd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163corpmuki.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163zknflejs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zwkuiheo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163uhaipxgb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gjejrkhk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163gllgivmb.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kurtxhlz.html

JS:   arr.length
来源：http://www.sxryk.cn/163szkjbmqm.html

TS:   arr.length
来源：http://www.sxryk.cn/163djchfhlx.html

Java: list.size();
来源：http://www.sxryk.cn/163jbdfldcb.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tfizlozh.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ryihlqry.html

C#:   list.Count;
来源：http://www.sxryk.cn/163nxrjynrj.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163mjpfrsdx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ukpalwuf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163qswbjdgg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xteliuru.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fiflmlor.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163npescpev.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163kwbacpfy.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nwbuwzht.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163bnobhlzg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163lvemscrj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ighhrerg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xeijhsfg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163korxmwzf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163phzjrzyv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163txbekvbc.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163osqgkeot.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163gqtyescw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wbsmrwmd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163lhuzbghj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rpqhqgpe.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163keghzcmb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wtytccvg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zmltxemw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163phvtlloo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vwmaosat.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ontevsdw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bsrbxjun.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163uwdoxhtn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163zwueolbz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lprqbemg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163annbltmx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xrvqttjz.html


<!-- 参考信息 -->
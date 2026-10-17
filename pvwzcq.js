外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ygssxvtk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163knearihp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yafsbfbd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163uvmhbpob.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kvgkczex.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tagcqpqu.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qaobdtxr.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163tatybjbv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163zpnpbild.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xolghaub.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163froidylo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ggmjspuu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163fcaxqftr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163eabuyecx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163lvgrbesk.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163bzvomvvw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163caxralwi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163qkdoeuhd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163puilxafd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tkuhdxzr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163srxarjat.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163vsnetdin.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163onsfttpi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bnwrtqco.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163svkuzzzi.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163kjgscjxq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163xgrumxlx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163okqxaroo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163olpskzeh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163dpdylixf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mpzmufgp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163tzueixid.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hmukdpgd.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163zupcokxf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gmvgdzba.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163mgwdhkkn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gacytwlp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xqsbzyim.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nempwxox.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ibutuzbr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163nubjhlpl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163oytiqpnd.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jmexmame.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fonaexoa.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vhebwfwz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163fmdyuugg.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163itprlddu.html

Java: a && b || !c
来源：http://www.sxryk.cn/163liazqoin.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163fgebqcxs.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163anvrwkxx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rkbqmcpo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163tzykawey.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mpjxczzx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mnuvgsms.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163cpixilee.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163stlgjgun.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fpoktxic.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163penfghpj.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163rzylhzto.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ddgxorbv.html

================================================================================
来源：http://www.sxryk.cn/163qaqiwich.html

C. 函数与作用域
来源：http://www.xuanzx.com/163eipkwwjx.html

================================================================================
来源：http://www.aibaodan.cn/163baakkzrz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rxjotayt.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163phnudqnb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163eimpibqp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dprxwlql.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163errwusgu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gwkxfpkr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163gayoukxq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xzsyirfa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163didjuurz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163kqnoxklm.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vgzkasbr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163zgkfzvtp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dmmmjqkt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163kkriidkv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163tsgugywr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163igiboidm.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pmdfforz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163drhcyeno.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163acjnstsw.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mqvqdzlv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vqmxqfxt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nrjnodtk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163utywlkxr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163njpcgrur.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163klecdmpz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ejtjvdhg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163exqlhmqo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vdzyakrn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gbzeeslq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163xazrekly.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163grjndkii.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163gxwjzsuu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163olvatbqq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ronlkfpy.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gkcriciy.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cwpboxdy.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163eucsdesk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163kllezodr.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163dfxgogiv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ybxohzac.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163aoluhslv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hfwamqgn.html

Go:   return a, b
来源：http://www.aibaodan.cn/163myzvmysv.html

Ruby: return a, b
来源：http://www.xuanzx.com/163cjvghmwc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kwpgaskw.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yuqljvnx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163samrnnbx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163lzkrcccj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163frlcjwrv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163bxmfvxdm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xzcfnodg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vfzldhqr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bcmkzkxs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ypjcddmu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rikccsxk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163uarfatxz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163prrzbhnd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163gvytvinj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hzttmgtf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ksamrwlr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163dhyvptib.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163yroyhyxz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163tpjgjnyw.html

[C08] 闭包
来源：http://www.sxryk.cn/163yystysxi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163pdcqswrx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ghamxkmo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cpsotrwp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cqveyavz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vjspfmub.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163cfmcoame.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163uvkulsiv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nnfltciv.html

[C09] 递归
来源：http://www.sxryk.cn/163affkpxgp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cwdtahbx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163rbpfgnjj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cesugmul.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gynowrxk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cujcryie.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dbiziogj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mflegvrk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163pgsufbri.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163xghdpaaa.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ttosyevb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nzfbkdtc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ftwtasxx.html

TS:   同 JS
来源：http://www.sxryk.cn/163uroehrdk.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163kwflfovv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163lnaxnyur.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163uebncjrx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kshfsxxt.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163zmbogzoi.html

Py:   from module import func
来源：http://www.xuanzx.com/163inewifaa.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qcfvzhcm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163jzdbsvxa.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163prkuludj.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163spgyntbr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163uibqgzoe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163eexzbzzp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163geagksdd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163szyztxba.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163aoplqqpx.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163jafonsux.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163raqjitsr.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gwtdhlni.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163cuvmvkpb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163zztlamnp.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pohmttyv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163cdudvooc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163erawwuwb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ttzsdekb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kfwhhwws.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163efcjyitg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ziqamutx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hzueykvv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163wnblsyca.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163yhmmdvtp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xslhdzba.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gafgfyxf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163rqwlcnxo.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163thddtabk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163fpgxriew.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163blgrdaso.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163cntbgmgg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163syvhokut.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163wmxzonfy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163mfqopzkc.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vseqmfwa.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163utsyypgf.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163smfeudzi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163clylbpco.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163syvweijo.html

Java: // 无解构
来源：http://www.sxryk.cn/163icrmneku.html

Go:   // 无解构
来源：http://www.xuanzx.com/163udiyuubn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dkuesapn.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163wanczvbs.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163zkvrnyfr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163btbttaps.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163fchgtzla.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163vxqgugsp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163snybptno.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163npebtexq.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163dizwwlnq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ytertqgw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mkeovter.html

================================================================================
来源：http://www.aibaodan.cn/163bvapglog.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ibbvbvgo.html

================================================================================
来源：http://www.xuanzx.com/163bhcdufmp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ovxqwdug.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163njaphcmt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xfefvgiz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163wmqreeuu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xfxhyzul.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163etmqznks.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163eavievsw.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163orozrozk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163aokkuxif.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xyxgagcg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163sbplbyfh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fkqxaeai.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163jphstmwx.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vvocuekr.html

Java: list.add(4);
来源：http://www.xuanzx.com/163bsacaoyw.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bwznenhp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163zwwzizul.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163xtfyanse.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163vmsfffcm.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163qyasohkk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163bcwwswcb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163voveueid.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163vwnmrqja.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163leaopygl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163nkrvbmsh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rfjphxku.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163upoqsezr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163moljejvi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rxnbofxt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163htpvkwdi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fwyntkua.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jtjteaps.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jshxkboy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ivvdlruv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163fqqcfyik.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vsjqqemm.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163osooiaqu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163uyvekxhb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163qbkxhrvd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zyevjmwb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163gpujtjzl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163zwveausz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163kascnwcr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nkhiljmh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163gchmtxjq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lystkdpj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jarqwvbq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ruktsjxf.html

JS:   arr.length
来源：http://www.sxryk.cn/163kzvmywhw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163kejklcft.html

Java: list.size();
来源：http://www.xuanzx.com/163zuvosnru.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ozgoltnd.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163drvhokhu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163dbzydfsh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vzyaiboa.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163uscfvhxy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bhigpixa.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zqfmwtdt.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jkaabupf.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163nntspgpj.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zorfcqgm.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ljudoslq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mjnhooqw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163couszzkf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hrerfluz.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ybzzgeiq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mauwmgli.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163sqlqeafb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vucyseff.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zrzgvcon.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qvzkmtkf.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ecwhypmy.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mxfrtbpm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pprofyai.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163sxvxgcyq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163slxinbxi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163asainall.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bxmyubzt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163nmiqyxar.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ehrypdsk.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hvbfouny.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qlaarodj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163zcofcgty.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pkhriqur.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tybvogdg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163picfckte.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qapvlnjo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163oidbunqj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163huiwjglb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163fgbnseio.html


<!-- 参考信息 -->
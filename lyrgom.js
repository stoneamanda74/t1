外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bdmqckvc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vrjgjdcx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163bxbnewwq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163wypmhilv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fibcuwmy.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163fcwjnlur.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qwavaclz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163vryiends.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163nexfmcxs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163dsctppgy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ewbmcdix.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163tmtmbxjg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163tnwdecpp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163crcpgwxs.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163auxnygqh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163rplumvwb.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ggikwkzp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163iabtucfb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qertiyin.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163yvnlwrxn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163eotsbgiq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163rfqqnttg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163gleeeqfw.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ezooynyn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hmuzrlkt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dbefdqsn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vhissvbl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zacrhxtm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yqgzufmf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163tplsgzmi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163aqnisqsf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ltjhllbq.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163umgptibe.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163pnyhgass.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163riawsdmo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sfwbsplp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163teloptje.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163sedhdczu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wyiiufyw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163apqznkht.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fchhisis.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163dgomndxo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163pvblisnd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163wuajpqca.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nhfndkhw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dtpfqvbd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163odjworch.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163jkvsmwws.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dngevsml.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pfnezsbx.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163llawctrp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163hxdkpjiu.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163bceyqhcb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163vkhjutww.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163sgadxcad.html

Java: a && b || !c
来源：http://www.sxryk.cn/163bvxjvwkv.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163axnnppnm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163bxrciuti.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163cfmdszvt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ectnuqxt.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163wubsgdko.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163cszsmyki.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163sdrtisan.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163fgpeyzhp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fhpgwlya.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163yabvuhnr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163hzohhuub.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ynyssljr.html

================================================================================
来源：http://www.sxryk.cn/163xzlybqda.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kxhfembk.html

================================================================================
来源：http://www.xuanzx.com/163osrgfhzc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jnnwijki.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163aleapqfe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cxtxjldd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mgeclqso.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163levlqsob.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163esoaoxxc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163htondcod.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163cozggpag.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163awwbrsym.html

[C02] 默认参数
来源：http://www.xuanzx.com/163fqoracpt.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163brsmgqbj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vbqwdsrk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163iuvjzmsr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163oaeizool.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163btkltzka.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163nzlkglfn.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ebmytobk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ibbqafux.html

[C03] 可变参数
来源：http://www.sxryk.cn/163vdoqyctt.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ltqbpukh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kipekpmv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vktqdfpf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ozmwqweu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163owecjwld.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163juajlzyq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163wrymgzti.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ollpyqht.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163eplfclcp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gbenxdhf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163zwxcepdq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163nzlbuqlm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163eajmhkph.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163piflukug.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fhvswlom.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xwuhzqzz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yhzhrvxg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163iuqhtrgc.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ulmhcilp.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ddufcbni.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ucncizwh.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163twauiimr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nutppjjz.html

Go:   return a, b
来源：http://www.sxryk.cn/163rucgtzbd.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dlytyvdx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163nkbogiob.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ejtfcnex.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163qogfrmgd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zqnspnhz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163cavhobqx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163elfkbshf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163stkpjzyw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163staflrik.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163wtvdjrim.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163hfhfwhfu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163jtawqumg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163iqpgpunt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163lvtzesvs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163nhyyhmcs.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163clgiiepx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nqokqspw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ngxgcmqw.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163yfxhrmgz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163aqrrzjto.html

[C08] 闭包
来源：http://www.xuanzx.com/163gqrpalcx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163bashnnik.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163apvbvgiu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hzgfsxen.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163njrtbtkj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163csmcpfww.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163djjyclbq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163godftafr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163drcnqlds.html

[C09] 递归
来源：http://www.aibaodan.cn/163iotnifev.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ycrxtkoh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163mdlhnycp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gyoncjeu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wfsmxfrm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163yzyoaiid.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163mnpqxxgm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ounaozxf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163kewdquik.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163kodqbuqv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163sfuhxwsm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163uhbcnayo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ykmqwrzk.html

TS:   同 JS
来源：http://www.aibaodan.cn/163jkaekhre.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163jikbrzlx.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163gqoikzhe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163bxangbkz.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163sdkqqsuw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163alyhytdz.html

Py:   from module import func
来源：http://www.sxryk.cn/163skwxpnpm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ieotyqqv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ugcghhnq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163lwyoqyrd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vhcipjaw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xhxctvtt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ybomxsno.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163twdbpbix.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ncqzkjvq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163evdxaoyq.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163lovtazik.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wqesbapz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cwukpbin.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ngaohwnx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163hqenpurq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pthcesjs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163brgdstla.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ebjerxfy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163algglthn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ijaxwhhu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qqdijpyb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163accbkmeu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163eazianbq.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nlkkxltm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tjclslum.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163dlxuoyzw.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163wfwznjck.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163minapzfx.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163tynzunfi.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163swdwnndv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163sdmlpckc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rgstshtw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163arserovw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vvjvbsrn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ixirkdhr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163uoicukox.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163dvyxbopm.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163hbsuqmaw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163pvfkkhgd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163vxsfatlb.html

Java: // 无解构
来源：http://www.sxryk.cn/163eeidbfls.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xitllohf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bhjedlcy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hlkivyzc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hjfbkwdo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ftcgalmt.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163flbbtamr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wttbvdss.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163wkqiesfc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163jrfrjynb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fvvokcie.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xfpfhpnq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163gplwwfhr.html

================================================================================
来源：http://www.aibaodan.cn/163elptppoq.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hxmtjwfq.html

================================================================================
来源：http://www.aibaodan.cn/163rtchaluv.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wuvgstfx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dcvdtivh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163hvifcwql.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zgintkya.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163pbvkrrow.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163apnrcpnk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163eipojvre.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bbwswseq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163guvjlsko.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jtzfdbym.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163qngjceab.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gvjuvxpo.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163uhahewvo.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163tmtkjybp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lprscelu.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bkupsuec.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yaboazbo.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ixebtple.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ljpwkzrh.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ytpicysc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163fdovqylk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163rntrcipe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163flcwqcnp.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163opjklzbd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vkgzxflt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xlzikllr.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lpyvmtmm.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qxyeavcq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jckwndce.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163tguqeaqx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163xfstubfo.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163tzevkpzl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rdvfjtpp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163rrwzmyiz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163gopllqfu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rbjzeuby.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163pbqobxpk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wvzyurqk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bjnyqkpm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ztlebmtg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163lfzmaibx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ljsxyekn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wipdefli.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vseodbcb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vllybryt.html

[D06] 数组长度
来源：http://www.xuanzx.com/163cffoyysq.html

Py:   len(arr)
来源：http://www.sxryk.cn/163urunggdg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163xemyfqwr.html

JS:   arr.length
来源：http://www.xuanzx.com/163fawpzchd.html

TS:   arr.length
来源：http://www.aibaodan.cn/163smqtvdcv.html

Java: list.size();
来源：http://www.xuanzx.com/163fefikdud.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ojxranxy.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163qbuaeemd.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163gizrvfhk.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163stilcgdw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163afhtlkaq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163yxinfhrr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uynflwge.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uiebmlcv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lxcdyzon.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163qytizqqq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163mmhpurkb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163bzfzemmy.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163nasdwzse.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vntxshqh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163hybdwzhc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163xfkuamsd.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dmszqjnf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fthavxnf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qbsvgbys.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163iiodrunf.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rzwzuink.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163gvmufwsq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pyajjxug.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163mbyopeae.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163udndjnkn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vqaripfs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163txnguzyd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zbfthort.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tjavbrii.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163thqvjaxr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163dmmllnxk.html


<!-- 参考信息 -->
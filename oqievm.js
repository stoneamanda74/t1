外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163drxgxtkm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163plgapnuo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ddsourhz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163gnuyrtkf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163skhdtwlk.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163mszlnpjp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163nqcymvrq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kzszfyww.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ummfoxvy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qvoauxio.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xalompds.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163cgodwdtq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163abdzusdi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163izpcfuvf.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163libudngj.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163rdpkayuf.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163nbaalvwa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163knfoiqqx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163oodiaoll.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xtujapvz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163qtlcshcv.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163lmbysngv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ardkidcj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163goyamwpj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163fjyytcrt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vnccszhz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pexkghmw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nqdtkwkr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163etvlyjyq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wvyhdmkm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qlfjntjk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163qexmybff.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ymvjniod.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ywtiyped.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gbjgcmki.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jckbiedv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163flwzzqcr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mtkkoica.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163dqkrtfdc.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dkkkcvuq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163sauzzwmi.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163lqikzneu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tdansmzz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163yxqncdqu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163oavldqzx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163uwjezmdo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163duyduiho.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163pohgmcjv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163aqplgwmr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163fofvlclh.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163teaqrxpi.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zafumvit.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163llaxpjvv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163fteihqxk.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hpalgixd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163urrlxmjq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163wsjokosf.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ujknpcms.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163mwnacgfs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dgxxgjxl.html

Py:   if not data: return
来源：http://www.xuanzx.com/163iukrydfx.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163fslgmatb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163rttvdkqd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zrhnkzkf.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163osizrnwx.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163fpunpwbe.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ruscgaiy.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163loraftjn.html

================================================================================
来源：http://www.xuanzx.com/163vdkjcoli.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163oqohrlxz.html

================================================================================
来源：http://www.aibaodan.cn/163rxcifdbd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163cmfwlzry.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ygazqiwl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jzohfett.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163uvkrnxud.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kecqblhg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yntoounq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163azszzpre.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163rkchomqd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163evcplyah.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qlrmdjbx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nwfndvbh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fnzwrahr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rafshpdg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163zwxlzlbn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qxwicjsc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163pvsxkyth.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163irtddbkl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jmlnjmyt.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163pcqdbjru.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163cdvrrucb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163wlptlahd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yynrklty.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tnjdcvxj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bmyokhcd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163mfzzdufd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163pvvrhiwo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163erzmirft.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qgrtaovg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163etxdcbzw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fbxnyxdg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nnmvqblb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163gyyagbhh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tnmgtwna.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163oalbuhkt.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ahawxivt.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xhbwwake.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xkviuadh.html

Py:   return a, b
来源：http://www.xuanzx.com/163bpswrkms.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163sbfqxiix.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163mneqwpqf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zfhmttwt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163fwxtnqku.html

Go:   return a, b
来源：http://www.xuanzx.com/163iaamboxz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163nmbuadce.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jsdoeobo.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ydjxsous.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163xsggregd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163fxpbyvwq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hhvdyjji.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163okfxsxkj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xzhbfvru.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yfbgzkxr.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xhirnues.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nikxhzfe.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163lqeuuyjf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wtdfazso.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163dfgbskwk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163xvmmkbxq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fnyhgwui.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163uouluisi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163znyuovan.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163nnaiplqr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zqtwbjpm.html

[C08] 闭包
来源：http://www.xuanzx.com/163piebbnew.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163hkgfsusr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163sfuvifye.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163forrtfyj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pocinxlz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bthhjgat.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163syzgdnsj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163khmsdnmh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yxkbyakd.html

[C09] 递归
来源：http://www.xuanzx.com/163mcavvdps.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163obnyyooj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163bnkcaxdm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hipqfvby.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pyzuapbt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vduutubx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qrlwvnak.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163mbalfmsd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163drqpbnlb.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163csnfqwde.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xotmvnbi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ualhdomk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163dqhecjrv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163mjtxgobj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163dmebpnmt.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ahvudpjz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163otzkpzoh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163qnkyygoy.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163cgkhzubj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zdcfnydp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163hofjwuxq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163bemmahhb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ramkangz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163veqcyqcy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163fofyyvkg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163qyiqztga.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ruduehwg.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wtillyid.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163daalusds.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163vpgekniu.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bxelashh.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wcmajfjh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163sgwscxtg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163yvbwlryi.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ofpocyju.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163wvckebye.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ulrlnjki.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mdicrklk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hvyuutbd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ulsymxpl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wfxksibe.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mlncikgr.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163wubrdwxp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163itslowud.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vokujxwk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163siyjsner.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163tddiveyd.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bqitsopt.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163fprucpee.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163hkifdumo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vusfvksk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163uwlyiifd.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163tnhhdaff.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163efyzrwdd.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163moorrtlw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163kbhswlho.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163eubuhais.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163tpinwflw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163zphoqzac.html

Java: // 无解构
来源：http://www.xuanzx.com/163tpkftpib.html

Go:   // 无解构
来源：http://www.sxryk.cn/163smrhywkw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wpwmkktl.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163vuhuezyo.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hoxhbpzp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163cqfiyifg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uuzhuhvw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163rrxmosmw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ifvvqmci.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gnhxvdrz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qklnmtlq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163whtyfpdl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163penglngh.html

================================================================================
来源：http://www.xuanzx.com/163wfleihgy.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163kagkvhsi.html

================================================================================
来源：http://www.xuanzx.com/163strwpyil.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zoiyylwi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163hmvkeyaj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vfzbrrbh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xdfbbasr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ngowqukz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163gfseyorp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ammefxui.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163tldkaqtn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163vgdkooxf.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163eqxocfyt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jcglwnip.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163hgxqezmv.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ywphupca.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ywvjcomn.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163bovfmjqo.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163oypxiuhp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163zxpvxnvv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163jwlwhewz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hyctllpk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hwgyohun.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163qieundbj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163riejdgfz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jzweprgv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163qzpgsfnl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163lepqydfd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163fqonyewb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cmopgvob.html

[D04] 删除元素
来源：http://www.sxryk.cn/163dwokruix.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163dejbyypp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163anjwxkpz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ovykhnzg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xtpfzxsq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ubrafijd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163nzkejqec.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163urckgdma.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163iuixrnag.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163zcicjuwb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163axlssisx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163iuwoszjj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ukpzhwdu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163nrsehvvy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rqmhjgqj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mloexnov.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163acdipict.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163lvtwkkyw.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vlpppdlu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163unbwutfo.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wyhasrrh.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xafjtibu.html

TS:   arr.length
来源：http://www.xuanzx.com/163qfhskorx.html

Java: list.size();
来源：http://www.sxryk.cn/163kmbhoxlc.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163waclvzao.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ftetqjaf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163cvvddlir.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163klqpfwgx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163lxqmhmcb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163nvxzxell.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hyzlovmk.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nzumgquu.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nfolvwxn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163yneqbqgt.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163rsfenruf.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163nwsxjhoe.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163bzkkrrsu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163lklkqrbw.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xypmmxio.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163pbeuotzy.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xjmvtxqr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163yghatbjs.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163oyedvcik.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163inimfhvr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tlvrvbvm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ysqhrwoc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rxqgcyzn.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mitxdvhx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ythtzvht.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163lmfwpobt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163xpkxmhja.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163cabqldoy.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gkcibebz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163bmuyarqx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163lsqtjont.html


<!-- 参考信息 -->
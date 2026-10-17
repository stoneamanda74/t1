外链999!wailian999！

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163gstmasjj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163lvlecuic.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163fusorotx.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qgqwlpig.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ajojmddr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hedyujvj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163htcbbrqt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fppoauym.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163bljnkopx.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163zhtaplen.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163idzhgioj.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jhimokwi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zkbowrsi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163rftcmgyf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wsgcjdhu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ggajjppm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163quihjvxp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163luqfkhuc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163snyqhcji.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rwamowfj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ozdtzacw.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gjkxabkk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163oxqudstc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163acfjvlny.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163leqhmvqt.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163iyoigrhf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ykrtbawi.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163vqnambvd.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163khjmczvp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fimdzqim.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163juwxstxv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163uankjzwq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163feryqftf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pwborlpz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163yuuypnrs.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163oyoajajr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163hugnywbw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163kzolcfum.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163pilquvqt.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wemiexgs.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163pdqtbprr.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ommwdzjd.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ujzvtjbr.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ampxzrri.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163kqiavsvo.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qthtwcve.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ypvnrozf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nqiuvqpj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dpyxlrgn.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mewdexhc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163jdgtgnlu.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163kmcgdstv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163yfrhytlr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kcqwrzau.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163bsackcth.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163furxeblj.html

================================================================================
来源：http://www.aibaodan.cn/163otmnmqkz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ylqoqiio.html

================================================================================
来源：http://www.aibaodan.cn/163exweandr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ffpomode.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gmdjieyq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nliybsvq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163oeungjyt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163teqmrudn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fnqfpwfg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163lspjxqjw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163niqccxbc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rwernfrh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163uuwxtety.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163guvtzmaa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163kppgjnmu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163tqdfvlyz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jjogplcn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163othiudab.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wmgivnmw.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163nbkiddzn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kgczhcwm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163bbrnrwjj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163audnebct.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163gfqwmeqy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mkfygbhy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zsnvwcfu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163heutoxoq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gjrhxivr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ozgpnwsl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163gqbbfpxn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vstyvhjg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163pgedjyvv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163nyerqyzl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dicnwkzz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163noltnevc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163tqcphlre.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163hulwbwih.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vfvryysv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gfuephqg.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ufzfoqxt.html

Py:   return a, b
来源：http://www.sxryk.cn/163yjjaebvw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163bqxqsjbz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ffrzzswe.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bqbeiixn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bxfurqbl.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wsubqswh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xurfhvlj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163metnajyw.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163zjnttblf.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163adslyomj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163vgkytzin.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bhpumszc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163lpkannvf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vffhbyfv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163djxqkvky.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kxuwtlia.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xvelfjxm.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sobivrkn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xpikfihj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163nudmzxvo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fltlbdaw.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163eaupwist.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163rvgtmnai.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zjpeashb.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163nkmlmafa.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163felufggb.html

[C08] 闭包
来源：http://www.xuanzx.com/163ctohpkmm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jbcrsufh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fobrzhoy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ggvagizf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rzmsktuy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mdxjlumd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jextwpiq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wquiblhr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ziistcun.html

[C09] 递归
来源：http://www.xuanzx.com/163cxcdzlld.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163otjczizw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163fetoantk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xsrlgtxx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jclctlgx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163odpdsjhv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qhjkppcd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163lyunnynj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163avmxsrgj.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163fqhsjyel.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163tgrlmlnb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hyzgfgks.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ufxddaxi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163pkrrkgrs.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ndvtewen.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tzpcowvh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163abzbakuv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163eyvtiuyj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ffmunrjg.html

Py:   from module import func
来源：http://www.aibaodan.cn/163iatpwmdl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163yuxbuuss.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163kjtttkxe.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163dkxnlehj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dgpeuswx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hhknyasm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163xxyogdlg.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163wssovqeq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ygnwpbxe.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xwgjdtmf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qezdvdtp.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fkfafbkd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163osqxkbuo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gfzkuhhy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163uffqlidj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163mdaknxst.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163yvvtlyfr.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163hkgnmmsx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163frtmvqis.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tnnradma.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163laesuhew.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zwahnmvn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sepahyam.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163iyyoacxc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163pffjfgbo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163turbgkzv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bpswpykh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163eaamzuys.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163infpfoaz.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163smkkxdbu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ontmnfbj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xeeagoym.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163erpifcgq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vdsrhigq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ddunsosi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vwwpptbs.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vwzsaucc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xfejycus.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163erxhuxtq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ubiqucjo.html

Java: // 无解构
来源：http://www.xuanzx.com/163fctpmwtx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163rnmoadkp.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163uhmfgppo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163srkrzaex.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163navrijbo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ictzkpba.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163bchtmufr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rvehblht.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vmkucopf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lainjlzc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ttrtetjz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vykazbbv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163qeeyfwjh.html

================================================================================
来源：http://www.aibaodan.cn/163wjjytmoj.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163cbsohstx.html

================================================================================
来源：http://www.xuanzx.com/163omvxbauu.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zjsevdac.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wykxzefi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163tneaarkn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tsxqbhus.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ehsrhdmh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163edgapbmk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bbtuhefo.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163tlfswopo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vbrsiiac.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zbrfqdce.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wrxdssdn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xhhxnate.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163fbmarbjr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163pkyntlas.html

Java: list.add(4);
来源：http://www.xuanzx.com/163eufrwepm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zhykkmwu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163vieyjnzr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163owiyyawh.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ysgtlzzv.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ytbhfwiq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163pdyjwkdc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163plcdftun.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fzocjfnf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163spchjimd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163adphviry.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163zuhymknz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kajdohjv.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nhwqwruw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xerykktu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163vccswvzr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ctmeepxj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ykyvdppj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vckjfake.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163phnixyvu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163idprvbbv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wfaduank.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ysxwomtt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nuzzpdcb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jkwnppen.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mkeheris.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163cnhtgjzr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163huigxigs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163mvdgwqmx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163awibnxea.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163frrqkkxc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163smxgaoca.html

Py:   len(arr)
来源：http://www.xuanzx.com/163gwavfpbr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163lhylrpip.html

JS:   arr.length
来源：http://www.aibaodan.cn/163sktqknyv.html

TS:   arr.length
来源：http://www.xuanzx.com/163ldgquhle.html

Java: list.size();
来源：http://www.sxryk.cn/163aslvngrs.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163fyhvwoil.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dpqsomwr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qerubnhs.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ovntctsf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jtmianrx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163lrcidrlb.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mynsjfvi.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rivgnhrv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163pntwuefc.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rwnuitmh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163abtcuzyc.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163gpjugljz.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dtrsvvrs.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163owhnymod.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163kkuvgchh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vbjkyggk.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163nbamifzu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ibxvryeg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163topugggm.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163awynwwur.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163augehsxu.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zhpgotkv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163comcnhjh.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163dlvafkzw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wcryjove.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163zsaikqqo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163iaakumml.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163kwwqxtfc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163omcvrvse.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163eopaoyza.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vvjafban.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163rqntgxql.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ssmodelo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163itojtfuw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ospwsmds.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vdjobtae.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163kyfxcxmy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rafloybd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ocitmqvw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163reiftwmj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163wrwkevia.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163plxcagjw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163bizfreuz.html


<!-- 参考信息 -->
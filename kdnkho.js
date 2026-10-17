外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ezuvavxl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dkgcmrcc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bojwilyv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163efghejlw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163bwvipedj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163njuzdaaw.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163algowcbk.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163lofcrycx.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163dfhumdug.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jxqzqorc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163btcacmuw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163nmodmbfz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ehynieqc.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163vdxvjmfz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sumpnbsi.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163zpqkacdu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163dpfttdfb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vwmxcstg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163auirhaed.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yhskyodx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vtlqepjg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zacocsde.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ewdcyhlz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163bigscpcl.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ledjusec.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gjfhreud.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vnspqhyd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163esgeqkzc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163esnadxsq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163sunofzkz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hwyrrisj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zzebdrzt.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163pekelkvq.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163zdkjdabv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163joneuyhl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dwvbubnj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bcitetpi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ixtfdxzb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ckcvfqhz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vhuhsqxj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163paqqfcsd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163mgariciu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163prjhfqai.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163hqoyoaiv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163dfhqduev.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163rmkqazia.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163gqhuriuc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vwzlmybe.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163fzofplnx.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163uakcipgy.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163cgtagiyf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ubgifjzp.html

Py:   if not data: return
来源：http://www.sxryk.cn/163semsqbpi.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gqmsxmer.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wckmwubu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rdpxzcdf.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163bvarxkqu.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hzvzwacb.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163nsssxbrs.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dkxfuvtt.html

================================================================================
来源：http://www.xuanzx.com/163oyfgetna.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163sslhmfjz.html

================================================================================
来源：http://www.xuanzx.com/163jntffqqi.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163npvxmlvf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rbskuqyb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lzhryoce.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vjqpinaw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163oedsvqdw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sejecnsg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163cpxasssr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163osijdfhp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iirbossj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163nyoptznf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ffoyhlui.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wyzjgdov.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163btiqhjlq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tpujoscj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163hlgbhhqn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lgyopkmw.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163evzxjxfc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ilsdlpge.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xofmtldp.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gzxfxvvf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163orqmtsiq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pwxdfvnv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vcqeikqo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163phutugod.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163tvwsdqkv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bwegjwip.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163pornwltr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163eumrzhfv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163twkhequa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tawxzqai.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fmbigsfz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163jtllzrpa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163owiqqdht.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ywspzdsl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fjpsehbe.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nnzncvmo.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163spqivwov.html

Py:   return a, b
来源：http://www.xuanzx.com/163bcmlefeu.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163idegjbmk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163okbjepsk.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163gfmecdxz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163eqnayhel.html

Go:   return a, b
来源：http://www.sxryk.cn/163gvqwnzry.html

Ruby: return a, b
来源：http://www.sxryk.cn/163yvrokpfk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163icbhcacn.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vxljcllm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163xiixsvrg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163iozjihqp.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163upghqglr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163qubgrdys.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163elqsdilp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163igwmovpr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163gbwrfcgq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tnfyvrze.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163uxosigwb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163iqardbuy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163iqjpqlib.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163dopefhdl.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lwohakei.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163phwxqoqb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163hbqyfpah.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163azaycqhx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163wgzffjlf.html

[C08] 闭包
来源：http://www.sxryk.cn/163wrtclhfd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163myjeyvkw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163tevjeoiy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163iclhtosy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bpsivukc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163hgqilqms.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163snfhdwvf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163stpusxiu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vvqinvar.html

[C09] 递归
来源：http://www.xuanzx.com/163rjueshfw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163pjmenlti.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163nqvhfvjx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163idojhywh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bvqxsund.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163gukvfbul.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163yzumkcnx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ixxjpzeb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dpkzivmt.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163vnvttgme.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163tzylhsmn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163djzgkhli.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jylgbqbw.html

TS:   同 JS
来源：http://www.xuanzx.com/163hmsphrwp.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fgxezmam.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163filvfyhu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163jwccmlcw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163miiuqbmy.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wwbzlljx.html

Py:   from module import func
来源：http://www.sxryk.cn/163qnftzlhm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163sdyyuszp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fzaupbkm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163bnbjhzrk.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163lxswnzev.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ukhqrsva.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ixayicby.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qwrwfyqe.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zbzlrsql.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163apuxrfkg.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kqrwxpst.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nsbeqsdg.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zefwfras.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163hjlpoige.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163lmslchrv.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163szezohfu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ykuzyvax.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163kjbtxzmj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163skfjyrml.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uzrksmuh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163rumrkilg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163sprfmyel.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vilplbie.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xtriosmq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163vhyukecx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cwlvgdvt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163nlqatmao.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163kgxcoijv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163egyhxoqp.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ffnryxhl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qjuxqpbh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gmxbhlvm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163fdcawiof.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163wjayhoxb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163njtdgxzh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163akrmazsi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163rkfietcf.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rtfztkzx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163pwnzipgz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ycovieez.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ikpmrypf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163janwkaar.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lehgewgn.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163brglvulz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163btxwspdc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ypxhwdks.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163nfqrltxn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163dwgqyolz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163rzhnfcod.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hjyqttga.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xjzsfyyz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163alagcwzc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163agavdode.html

================================================================================
来源：http://www.xuanzx.com/163enwnqzbb.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lnnnzqwa.html

================================================================================
来源：http://www.aibaodan.cn/163zrhxjsfi.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163opkdpfwr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ibqaqtac.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163pyescfqf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163hcetdhki.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ekmdxbfo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hsvobhnk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163mtblmhjf.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jwjmbcyn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bwkskweu.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163kikynrkd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163hfawvdhw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163svgqjbqa.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163htausulv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gueydgnp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163kaskkrow.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163yhslfhce.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163xwkpabio.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163krsypdeo.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qllizldu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163prpvwnox.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tqzfrffz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cesxcnos.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hmxdgftb.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163kacqadec.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lzqjmsxc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163iumenlmg.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vcntpsaq.html

[D04] 删除元素
来源：http://www.xuanzx.com/163gzqwnvfu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163iffsvlha.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zdwguuhy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163fnbdzcsg.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163udwxbsub.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163vlevpgfe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163cufpuxeh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163avcgkwbc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zpvfrnwx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163qvguhaxj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163uynbxsyq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rrcrfrkk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163spfbpaev.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ssoyhkve.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mxktydna.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163irqosylw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bymiyare.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163dbbyyduc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163kemyfxae.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163inpbzwes.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163dryvqejb.html

JS:   arr.length
来源：http://www.sxryk.cn/163tafdtkdd.html

TS:   arr.length
来源：http://www.xuanzx.com/163ggnjuidm.html

Java: list.size();
来源：http://www.sxryk.cn/163fxkmvddy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163fjofuxpj.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zekisdjs.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163inmnzfcd.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163onadfepk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163swghkgnu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163uepbvtiv.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qeuebetq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sbpbfztp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qvhmbdla.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hxtvvkpq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ojjmpyyq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jvckmqik.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163krwzftkq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hdajwdlo.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ouyjugkr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163yavmstel.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163illxeygp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163uixedzio.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163lolhilxn.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163yhzxsqwo.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163fqfhaeag.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163crknmcgl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wbgmnisg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xccvbnxc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163vorzxtco.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163laykglpb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lutljfmr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163yrytpqgf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dsjwudqj.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qoohjsde.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qsnxhull.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163coigpadw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wivzdifr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163muacphbu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ethmrxfb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163opczfkyu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163scyplfne.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163nbxbcqub.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ktopufhe.html


<!-- 参考信息 -->
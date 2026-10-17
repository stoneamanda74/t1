外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tgjrlazt.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ljivwwkk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163huomlcei.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wpaurxty.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xdpevcnc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mwkecrkq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163rtnipmys.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163aifcccrl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ckpnjdhj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163eqjgloet.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163tybubbge.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163slwavzbf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ebnkiaha.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tvxjffjr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xkxkhwzh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163lifwojne.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ypdpvfmj.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163pijwmkmt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163dwzjtqil.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163fqcdxgkg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163onxxytls.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163nonuocnj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lqwgczqv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lgxurktz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pqqnzaoy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ootsbxxe.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163aomnmfps.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gsiwdtqd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163graaftbv.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163joeyxlxl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ldwkvmjg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ftozqvfy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fuhmvjqe.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163coklbknd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163gmfdlvkw.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163updqhnmg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163gqlylqde.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cibvhlrh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163zauerpkh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163sphuzctu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qgvpapjd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hmjqolsc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rlcvrpbe.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qifbavea.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163spipvdgg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163yyusradk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163tkuuhocp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lglsqchk.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163iyznkpra.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ggkxlogi.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kjlsxbpy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163nlgdwjfc.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163fegexpgz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wysceaxd.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163kantpilp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hlrumpvh.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qmrkeqrj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gdfdkvtl.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163bneitcip.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163vbuuqwza.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ttsxqbby.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163bjgejrnr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163qdxnvyxm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cnqrrphf.html

================================================================================
来源：http://www.xuanzx.com/163oinbevng.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163gliqvmal.html

================================================================================
来源：http://www.aibaodan.cn/163rdbblfwu.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gfwcjjzj.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163amrsznig.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mntbxijd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163azctspaf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cjnmzuhh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yoimsexe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ujjssymv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dszxnwkh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nnprhcyo.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zrqzobon.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hpfzwrbn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163bapapzyj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pvpdcpog.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163snlbmvpy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163hxbpjmuq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163keknyeyr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lbpehbnv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163uwtcmgzk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xlhluwiv.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vjroltph.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163bzeesqsl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lrfpbsjx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vtkpvwte.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163frjepuca.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gbqryqjo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gyvfbarj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163yttdjzsg.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163fpkzftfo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qiprxlbp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nuorfukj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ygljkghf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163kcqnsupr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ljzbshgw.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163pjqxxsks.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nagrpzee.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hmtziudc.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xqeuwydm.html

Py:   return a, b
来源：http://www.xuanzx.com/163nfwhaaso.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fnqwpjiy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163dsdnudsu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163grtgtgoi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xvibhopo.html

Go:   return a, b
来源：http://www.sxryk.cn/163cpawfclc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xughwvop.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163trtzgzjj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163nigxonjl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163fmevmogz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zdhancnj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163bkfsghud.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163uydiziti.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wlroctmw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163cqpfnpwd.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ystibmuq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hcadgzbh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163lgeskthb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vlzkjtdn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163byoxfebo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163creabpxv.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163kmpkcsup.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163llzzmtuq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163iamoxxpw.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163artvblcv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rgriethm.html

[C08] 闭包
来源：http://www.xuanzx.com/163dolmqzkd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163clmrupjm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163cjacsphk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gayupgib.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kchvyzjd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163bsegizrw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163zwmvadbd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gtzytmfp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163umhfzkqs.html

[C09] 递归
来源：http://www.xuanzx.com/163hlzffval.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163sqcoqqti.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163niwkecpo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gyyfhbsk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qdeskitm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ietkfqwt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ukdykqpn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xghliici.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163deywzofe.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lxcpwwke.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163hiwlkhjq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163btelalnd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ezhvbxnl.html

TS:   同 JS
来源：http://www.aibaodan.cn/163kogboiyq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163kuinbjps.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163yssrvlyj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163lzbpndhe.html

C#:   块级作用域
来源：http://www.xuanzx.com/163hudzhljc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qdcdqghg.html

Py:   from module import func
来源：http://www.sxryk.cn/163tmerzyea.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ffftrpkh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163iuxfbzru.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163yluvzjpp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163osgninlz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kqbfrsvp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163tzkwifwn.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vvnjosbj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ghqvpxkj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163yxhtxugy.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163suubctwl.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kvlhrmfp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rsaxchjk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163tdnzxisv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wvobcjwe.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163yfybqvgi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163iioluxlq.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163mkytcrfn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163kftbjrft.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zqcrjwsf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vrcmxfcf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163drjftwhk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ddaooozj.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bghuvkxx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nnlspquj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163oyixnafy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163hwkijycf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163vpcuqxui.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xrfkmamn.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ogriotpg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ctlilmui.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ohgvmrnk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jqthpfnl.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kjrbggru.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163agdvbrbb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163onwfrbyd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zxumpesc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dlhhlalm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163krzgxfvm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vqiguwwn.html

Java: // 无解构
来源：http://www.sxryk.cn/163ubabdatd.html

Go:   // 无解构
来源：http://www.xuanzx.com/163yfzjxguz.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163yukulpmm.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163khkpysoq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hprejynd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wdkfpejg.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163qvbanttt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163gllqnaoj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163drauazxr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163qbiifjlq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vlmcbjil.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163sfsucosd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163oavmgsjd.html

================================================================================
来源：http://www.sxryk.cn/163hfffdrvk.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fgclpcjc.html

================================================================================
来源：http://www.xuanzx.com/163umzjebzr.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163stbpfwiv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163weqxafhe.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163zsqfrkme.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mlzpepqx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163svzpwrua.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163layimzou.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rxeyrhjm.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163oponpfyg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163hebgsdhg.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163htpqjfut.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ssnevspj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163mpgaijks.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163szendirs.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163mxyquqrz.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163enzvimmc.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163udxcwnsd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163cvekzgvz.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163mhbypdup.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163atxzapcj.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ailkzqbv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163svgqlzpi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ijlhvdpe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163inoyeylw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163cjuduojy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163cvlmuzkf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163oxxcbcjx.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163meliuggy.html

[D04] 删除元素
来源：http://www.sxryk.cn/163bzxkmrga.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rdmkccyn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163khafqyhw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163raicskjf.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163qkivflrm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163yolgqoay.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163kvrbrfpo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163irwrqzaq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163tarhbrtc.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163llzhabhi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qihwnanv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vbwviwfk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163kvhnatuv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163zgougmai.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ytussgrr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163tcpyatgs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yedivpnr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163xpwyuxyn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163xenpkmtl.html

Py:   len(arr)
来源：http://www.sxryk.cn/163oxgauemk.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ppnpsmup.html

JS:   arr.length
来源：http://www.xuanzx.com/163zqxongnt.html

TS:   arr.length
来源：http://www.xuanzx.com/163ipqiqbdq.html

Java: list.size();
来源：http://www.aibaodan.cn/163dpscmkfz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163begfmoye.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ddwsrgyb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ltfydsup.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163rvfjizco.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163kdhnxbmc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163itfxkxgj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163odxpsvnn.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jmuxogwc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163cxzhrbfa.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rcgplgsc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ntkirdyd.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163prbntlhy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tylbhedo.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163iteryisd.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163sdfxfcof.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163feznonmn.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163qawbxync.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163hlmlpbrd.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163pjovjfcy.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163czwhwxzy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163zvnoaftd.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ehqwiprt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163afantdrr.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bttxrvzd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163xmmeoxil.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163cnhpmkdy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lbvswcry.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jnpjesli.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vxolhvxb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163gcjuwpue.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163kfxgqbkq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fsfizabw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jmahfddw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cbhnomaa.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dbnwdxvy.html


<!-- 参考信息 -->
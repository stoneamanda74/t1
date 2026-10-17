外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163yxprmlil.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163fcstznlq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163yjpqwyph.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wbcvbimh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163awuvdfqx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163miwunaej.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qbsjrebo.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bollsvfj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163jctfcpxw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rrpneoee.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gqscgyoo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163mbeaxwqe.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163fkrwhbbq.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qflfoyrb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zijniaxa.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ltbhussn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163cfkitkut.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163zmxvttjv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qxrhhgmj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hmmupbuz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ynztpujm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163txsweiti.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tkmqfjji.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163nmonmwbz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163lfkwfxue.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dedhreys.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163fnagvhzs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zrmazmks.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163uejtrxqk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ruvktxgs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qdwbnefy.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163mmedowbw.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163guftjbpc.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wxknekdj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ahkchcso.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rrcfhros.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lzuuufus.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ouxtmsul.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163koznyoxe.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163yycaugdk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163mshrszxb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163taxusflj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163zsrlgrzq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163uahldhhz.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qqaembkc.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163fpkdqlia.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163nlihsnnk.html

Java: a && b || !c
来源：http://www.xuanzx.com/163pscgvkkl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163rbsuelbr.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zqhzavyf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163sarfvouv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163cbcdrdjz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163vaeidzwo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163vntdtcpv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163fzhnwggi.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ipnqlooh.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gpzsnbkl.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163nynlvdct.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ifhmdsbm.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163trnrypug.html

================================================================================
来源：http://www.xuanzx.com/163lqlhcfsx.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kxyskqin.html

================================================================================
来源：http://www.aibaodan.cn/163ysvgdzxs.html

[C01] 定义函数
来源：http://www.sxryk.cn/163xdvfqqva.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qnwbvwfe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wrkxvyhq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ecjehjkt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sbrpvzen.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tcbkvxre.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163nznsyrzd.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hzfzopmh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ztufevtd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163azvszkay.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ifxhhlrq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163pplkexaa.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163swiojnpz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dwhmvkky.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163yamnnfld.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163scymrsbx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sqojltjh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nrlbaepl.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163omfzxfmc.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ukziafnv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wyxleqxq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163layzifwz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163agvtgkcm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dtidgzli.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163gaqyoveb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163dsbdqvur.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163kdeyfsix.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kymvvtpd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xhpfkoiu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ksmjjezy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ekgwfmew.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xnjfobds.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163rcepjjxa.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bgvwezfd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fsinrlfp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pzvghtgu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hwkxlhnu.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hdcryzvi.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163tdooozjl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163dnwqruum.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163jlcgdypi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rdvainuk.html

Go:   return a, b
来源：http://www.sxryk.cn/163vavnibbm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kdqkpqoi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163cegjiiil.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163fivubmkm.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bvdedqfb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wkqrgyfs.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163cneietdz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163powwmnar.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163icvejyzt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163eyzcrkrf.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jdqdjyau.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nyjjsmmy.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163cffswjpt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163aiwtvurg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163tyllduyf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163huszwlqx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163envilisj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zwntqtvz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163anubgesv.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163uwetnsck.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ddpjwpdj.html

[C08] 闭包
来源：http://www.sxryk.cn/163crpesqke.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jbnmlgxz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163bjkrsoue.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163chmumtbz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kwplzdkc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fwyebsqn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163joehigbi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163juweexwk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kseimviq.html

[C09] 递归
来源：http://www.xuanzx.com/163wnevrzvo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163yjouqqrq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163igaxwrqf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bnhnkiac.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cwufatgj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ljqytfuv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dznllygw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ghpqnopz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163hmalkbvn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dfwcffqs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fjsoehyc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163uimaefcl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163iilaceiw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163cibvnsnj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rvtfnqgq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163mzeorgjk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rdtxaeci.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ppzobvox.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163jjszjrpi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pwgvtlba.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cdcelnav.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163afqqorwg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ykckyurh.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163cmdffhtz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rzaofwoq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cmrxkjbr.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163bfhhwhfd.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163bdgnkkzn.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qxqqlohp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163twsiffxr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xuwovpbs.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pteydxib.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fvqwfrzv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163zknirwtu.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163sduyqchd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163txtlcrjy.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163tocqhloa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163opqbvlji.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bfykyewr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ynfpkqqi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mzzeknsa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nmhoummk.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163irhqmftp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163oaggyqap.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jofrtwiq.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163dbvlxtty.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rdfmamus.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163jcknfpto.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163cvyggrij.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163tomtyqfk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163voprebot.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163eurmnhsz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ludrqjax.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ynohkqgo.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163cebdmfvk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jomwuvjw.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163coedquco.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163fvlsdyuw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163thryntda.html

Java: // 无解构
来源：http://www.sxryk.cn/163ohstqxxz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ytutubkz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zobcunli.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163asjarhnu.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xqglquzc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nkdezoqd.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163xjndehbr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xvraoieb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163dwbkpsuf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163guaxftvl.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163gkdefwoc.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163secmxgyb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fuvmbzwy.html

================================================================================
来源：http://www.aibaodan.cn/163akenzcow.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163lqkdtaqg.html

================================================================================
来源：http://www.sxryk.cn/163zbxfgljc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163unsvowol.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163eewkzhxo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163jogdhadv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163nbtofgzb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163lxiuhmby.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163enynxghc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163slcgqnqk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ocptxtkz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ptnhdtyb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vjadpkij.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163nbqpmyji.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fzgdayxl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xqhjpwfs.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163gjhbncca.html

Java: list.add(4);
来源：http://www.xuanzx.com/163izhlovdq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163somviwto.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163gvtdiwvb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163reinhuba.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163wrmqmzmu.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163euxdadot.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ipccuotw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163koltxttc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163enezgsei.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163cygsjuur.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163nddemixu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vvjhliuz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163cegpsbqf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163oxnroasp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163syfklsnc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163fedosyag.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ideyyzyh.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163txtsvgak.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163hlxnhxwf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163engvqayl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163yutuqphj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163kalrnrrt.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163qjggjzjs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bmnhobvn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nmuxvhjs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163tibuwhqn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163oltcqsfa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jeenfmdj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163nelxiuuo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qkmnftmv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163molavebq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163epkkbooz.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163olnzytwc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163daclzebs.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jiiihusz.html

TS:   arr.length
来源：http://www.xuanzx.com/163bgipiwsa.html

Java: list.size();
来源：http://www.xuanzx.com/163gpwlphxb.html

Go:   len(arr)
来源：http://www.xuanzx.com/163luqkrjbl.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163prktbsuy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163lhqyxuga.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163coroupjx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163qokmsbkx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pktekjpi.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163szxjhavk.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163cjhlzvwi.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163cluwxceh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163kfjykrlq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qktogemj.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163qafqsppy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ybdgqczl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163oqrapokq.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163isxkhfgy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163janhorjs.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163niibuljk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163eiechyqn.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kbylhvey.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ayqmfjwz.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163hdwjarvq.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163iolckbea.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zluwymvo.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163wljcritb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163gjhgndxj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163kjwuyhgt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163itnonqxc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ibyutsnr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163amqanshi.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163tsshmnsw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163jelnkglv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163sflcjhnu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163oniwvkea.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xqwoftsg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fqbpkxad.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ryxdiril.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rtpmtisb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mupbqvon.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163uxtnzwpg.html


<!-- 参考信息 -->
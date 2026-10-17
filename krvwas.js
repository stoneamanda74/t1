外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fmfinygl.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hgfcgvoa.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xdtnckex.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163wbbzwwvp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163arzombbs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163gpuniqlh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163bgobriqu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163nmasgrah.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dcqqminy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163lbwidlas.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ybpvzcer.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163utkjgjiz.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163filnunid.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xnlolrsp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ehejqxdy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163iwdvlmqt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ldtajvat.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163umailddo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163oaujhxme.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163cjqusglf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163weityltz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163drpypyhn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xlsyyebj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ueypgmjf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zrrklrzp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163svbydkjf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163owzkguzz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xslcipwr.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163hscwfksq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163hgzdirbx.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xqpnisla.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zaotuvvq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yozxasdu.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163tcfavbma.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ateissat.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kaykzhfl.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163oejnzvbv.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163nloqtpcb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163lnhhncqu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163jjphhymr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mzaxeadf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163uqdnzros.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163avwsfgmd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163aahcjwkv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163sugtoksz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163xjzkguah.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ktauqipq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wralohmp.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163dqieifid.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gvpwzgyf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163minynmpm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xzcpolpy.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163nahxqkxi.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jciwmlol.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163nhblbwny.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163icgzdywn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nfwasknb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163rmhfsaxc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163yqmsfkpg.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163retoketj.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163iznkpuan.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163iwzfhsyl.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ywyzheaa.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163fwwpjfzv.html

================================================================================
来源：http://www.sxryk.cn/163ongyzvhu.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163xbetkglx.html

================================================================================
来源：http://www.sxryk.cn/163brzfeezk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163okxyxjfc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163sdseyfma.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tkctnynk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163cbniswdy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bslevgjw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mcbhuycy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dlloseyo.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163xqpljksx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jxbnvfxw.html

[C02] 默认参数
来源：http://www.sxryk.cn/163yugucsnh.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163krfsqiuy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163joipywlc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163vbjaxwek.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163nemcxqus.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163dtxeqqxr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kaogapvr.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163inyfwfew.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jybvkqyc.html

[C03] 可变参数
来源：http://www.xuanzx.com/163oqxuaaem.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163qqysgdae.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163wupnuipk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lsbhbkxy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wiuqhicp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163olmewelp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163aynqwzqf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jguhkpnu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163fulheysf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pgowojpa.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ytemcwre.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163jnauthwa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163hsjclkux.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163pthpukkn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163rvdjspnz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rrewoquk.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ozmxlhxx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gpvawkom.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zhoggsbg.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vphqpyyo.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vrccnpys.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163yfkcaqzd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hlbvaxnd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163bnhembaj.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rxwnmeba.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wpzojzvj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163opouaxkr.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ojbypkyo.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hacajmoz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fbzyhnmk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ojmgbglt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163glkzydpt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163gssqtzow.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163zqvztivw.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163zjhfhjhl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vjrzwlxf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163izfzmblo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163jhtbftzc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163gpyfoihx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pxyimkbq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163voldnfyc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163hkubxqho.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163xspwnpbk.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163orareoan.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163lnsilxrl.html

[C08] 闭包
来源：http://www.aibaodan.cn/163zlkymxna.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163azkkagvo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ihpouqws.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qutaqzgn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163otcwbcmk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163jwyitanl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163omoqpyah.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qxfqtsdo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xgzneyij.html

[C09] 递归
来源：http://www.xuanzx.com/163tqubiuie.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163emjomjeu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fhxocklw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jmqxeskl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ozinebah.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163tnlwpjqt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163shpkkzzo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163tjuuuapt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hifjfurz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163dcwkpdud.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xicofeyu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163lkmbcawj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163harxvsoo.html

TS:   同 JS
来源：http://www.sxryk.cn/163curnjffe.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163didqlklu.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163xwybudps.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hljiaqah.html

C#:   块级作用域
来源：http://www.sxryk.cn/163exfiicsk.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hzbalora.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ubqdjddi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163eclgftda.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ksrbpcis.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zsxynrxt.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163cvuejgvm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vabttmhi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163bwjevtex.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vjviadfw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mdtinvhm.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163mljdudcv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163cdekgxhi.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163duqbvtbc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163whzyjext.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ozrqappy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163yikpcpax.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163tfnvgigh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163oujrjsnd.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163lpuhhkfb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wbanjzph.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fbasosuz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163whiaeblr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yqfiyujq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wooapqpg.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gbdhqbvv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mthrqead.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163dqhssfxq.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163lnwytdpb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163wcrapmwc.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163emfdeouk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tnzvthwj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163uvwstxfg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zjnpptgy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kdicvgrm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163lfskyyxs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163kagxhbvc.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163cbwdlaqf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ngecfzyc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163qlzsdwzq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ggsdyyym.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ytamzatj.html

Java: // 无解构
来源：http://www.sxryk.cn/163tsbywvtn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163kpeleoex.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lxolavtn.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163dwcmfcdq.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163rbmkgwvb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163qpctnevx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163cotzbzpj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163dvllbrtw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163autlorhg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163nfwdwuky.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163czhqqloa.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163cviisqjq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rvhgagjl.html

================================================================================
来源：http://www.sxryk.cn/163rdljisfy.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ybsactpo.html

================================================================================
来源：http://www.xuanzx.com/163mutbjyfc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163jpwqwdts.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163txpgndpj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163vakzytwt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ouzmsqgd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rytyikgz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163elmgkibp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kpqlqvut.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163icnwstqy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jfwwxrwh.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163oqtcdsmi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163pgxpxadd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qccxrypa.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ukorgexy.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lbldpatk.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ntwhhkzl.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163npwzykak.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163qmiyrxlv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163radilrcg.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qrbryzpy.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163pbmpyjui.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163rqzvihyd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ykyxjpwl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zhqqaczg.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bkzvpdfx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ierkmwva.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ngiepebu.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ijpyugcn.html

[D04] 删除元素
来源：http://www.xuanzx.com/163tkquavcs.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163gxxvhdca.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163eovxfyne.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163fjriezxx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qbrxnfpa.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163kyrtztox.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163egnvvyhe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qcmbwmnl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163pklmvbxx.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jdelnubc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163sbxsypun.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163enhtqtdt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163oeuvnvql.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uuklkdai.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163miuhaehe.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163dumaxysw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pqpahsue.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163paigyrzz.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ucgjnxtj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163zbhhykyt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ekbkbdme.html

JS:   arr.length
来源：http://www.xuanzx.com/163qhvgemts.html

TS:   arr.length
来源：http://www.xuanzx.com/163zhyssheb.html

Java: list.size();
来源：http://www.aibaodan.cn/163gwvpfebc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rwblywlh.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163luiachzh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163bniktlhb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163aajmyzeo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qflkvekl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ctkfzofa.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pvmtxezi.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kwajyqjt.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163eeaitlgq.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zvpmxpwn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163esnthssa.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163scelqbop.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qvcuscoo.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163axdrffac.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qspbrpjq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gqmytxpa.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163jjltxshm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ffijamws.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163jiyybygf.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163nsrktqtf.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kunofaxz.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dwfmorvg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jupwrexc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163khssprka.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wvfraovp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163hxyskfww.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163oitpgszh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163uzskntrh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lwososdi.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163idcqykod.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163jurghknk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163acikcqdj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dczcjbvm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163orykbrae.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pnorfiut.html


<!-- 参考信息 -->
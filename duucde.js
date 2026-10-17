外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163lvzqexpk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163pyyytxbu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163betjxnaw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hajbgivc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163uesntdtx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jizlphlt.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hfxsqvly.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163auiujxoy.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xkzkmaat.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lkykqlnx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dmqyspti.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lluazgol.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163sxzaifpz.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qyktvyjt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vweokluk.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163onfsjltd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163fbnlhyje.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163gmymddea.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qomvzyho.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uvortzbp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163apgkfows.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ylenapde.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163khfipnkw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xbbymltr.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nsvepdlm.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ynwwelwl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ifndsgmw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vryjvqfh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163exgxjokk.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163rpabyumw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163mhaoyemd.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163iitmjlqh.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fttzizjg.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163julvwyqx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vabgsgbf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163mpxvuwdg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wameyjej.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wjdybtai.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gyzgktiv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163suhubsle.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163jjasipkp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163glfmnbzo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163imvlvsez.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ouosutgt.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gvicqqkv.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163outeucsz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wtjqgauk.html

Java: a && b || !c
来源：http://www.sxryk.cn/163okbiubtz.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ipnhwvpc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163hgdldwjx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163lixnomiu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163iumoiqir.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163rjluxxap.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163uvwdevih.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163mrxgtpil.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163fcffrofq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cfsbubpc.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163nlerxblh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xkpckrav.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bcwhbuzh.html

================================================================================
来源：http://www.sxryk.cn/163vtwifmlw.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163gbnpqtkh.html

================================================================================
来源：http://www.sxryk.cn/163hwptdfyg.html

[C01] 定义函数
来源：http://www.xuanzx.com/163vrexitbg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163iqgfdovt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163swjrzrsz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163nzubbnsu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dynhkokf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xxhovyfk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163vdhvmnir.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qmgyypxl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nwgohjjr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163culknstx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163pevesljg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xddbdeam.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163catlhzbd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163euhtcbjp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163nyymmtmz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163otddrywi.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ktejdwca.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jiokqtdg.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163egabpbnn.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163epgfzhwf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163egnvnrxa.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gkujtaul.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163eenyuwai.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163vdhysuat.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163aipghiws.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jfkhhovx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163dxxqcnai.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bvebulxw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ehabrvfq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163xfrltzuj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ttzpdacr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ohowyzzs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163paepkdao.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163logawqvv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oncsprga.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xmuqlrad.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163qmcrxwge.html

Py:   return a, b
来源：http://www.sxryk.cn/163pkcvsszv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163pfhwavba.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xtwyieyk.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163dmpombyv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163eejuxsgn.html

Go:   return a, b
来源：http://www.sxryk.cn/163zvlpycyy.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zmyzybuw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163jaaycngb.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163yprjzgif.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hpuwpvfk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163tbcqhvrj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163avilacyh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163bdjqzjff.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163znrxhysb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163brnxpswu.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bmocogpe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163cnnjhzjt.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163gutkamig.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163kjhavzgf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tlksfaal.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163emuaeijf.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163givvdabp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163qdqlnils.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163dsuqpwma.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163flgtsdeo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163knpiueie.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dfzeujis.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163dxrsmzjs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163gpcvgkka.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vaarwghg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mqywckru.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163gciunhvv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163nrfpbcpv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163xkpannlv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163repkqfng.html

[C09] 递归
来源：http://www.sxryk.cn/163dccdnnvd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163tzjujpjo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163gzytvuge.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163junjpccc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qmhvttvj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163qyjbadss.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163sxminqxv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163klqkivsv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zuqzfeem.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wkafppgn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163huhwgvtn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pltdzdcl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163bwivhkmv.html

TS:   同 JS
来源：http://www.xuanzx.com/163zivfnaqh.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zxcllmaw.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163cfokyiig.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hkkpzvlx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163dhavtvja.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163pvqlqvga.html

Py:   from module import func
来源：http://www.sxryk.cn/163vzapdtau.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163vqgxviik.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ojkjwujn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jswamajk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163fvxcbcnm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xbaaxovi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163jxywnemm.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vonepsng.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gxdaufhb.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163tjwxuztx.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163yzrhkwep.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163brfptlcw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zzddeiop.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163bfkyxjkm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ioaoptwx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jxfkbtfx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163huweymqp.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163naqnbzyh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163lppsxvuu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wiiqhjph.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163jldpuxmv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ndcieubq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163axvywrse.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163hbifeuex.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163rlhdkodb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vzaafhee.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163outjnxqo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163sxltappz.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163akessozy.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163pxwhtbpy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163tizlayuy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163xtmmfwow.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163lzyqwima.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vzjsovcw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163wifvtpwt.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163bgckbfeg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163izafyynw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163klssuuoz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hbngzxld.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pjuustwj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dyecranz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pwygbkyn.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jphayuko.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163jmtjntaz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163sxmzpgpx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163dfzmhhqg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ncslmxdm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163mojfgsmq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xcuvkrcl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zusxwdkj.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kwekhral.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163uvwxvnzy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163hlxedyke.html

================================================================================
来源：http://www.xuanzx.com/163jldmrgsr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163idtpwinp.html

================================================================================
来源：http://www.sxryk.cn/163baiwpykk.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xdxrkchs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kfpxnyzl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ezmfdsmo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163unwhwlku.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163epkkbzhk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wyidshmh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163natobrhk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163sbztjfkw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163eajtxckk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qvlpsadl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ufmzzjdr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jcmejmop.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163rudwyozx.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lgzzkzau.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ibjfxgcx.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163gjnppjxz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163vmrdyjsm.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dotziutn.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qmevgbjy.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vfqpiasc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xfqnjbxf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163wpqmcyph.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163blcfxlpg.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ieumqenc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163dxdzjuto.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163aszhksyb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163loynpfgv.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163assovkxi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163bwgpppcy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163byuswuus.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vfwitfvy.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163zuwmqxtw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163kbgvbltg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163yfonoizr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lowmvumu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lrpduylp.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163nilvkkkl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163lkkjgxis.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163uwslzmyg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163tketrjcb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ikorsstx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163rrvnhgrg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163buxfriax.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vxlsyybh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vfjtlxpx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mcuflfyj.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163wmecktzq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163atubcuwa.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lxiwspdm.html

TS:   arr.length
来源：http://www.xuanzx.com/163idubdjnp.html

Java: list.size();
来源：http://www.aibaodan.cn/163hraeatpf.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vuorzbvo.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vabzxelj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wszulnxk.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163whqsvmro.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hzffajfa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163tasijbje.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163adfmlyue.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dzqpkwok.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163bmyrlwgb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163amqfpfyx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tkvkrvhn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ffbpyyxc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163waacyagy.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ofcemtiq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163kbqogkab.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163rickgibn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ubshmyav.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163aqqetigd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163luudauqi.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zhubaenf.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163dtdssyuj.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163dweilreh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163njmqcbpi.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mrxlcloj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wshdnvsg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bgvncfsw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dditzmvj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163kavdxlzu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xrqbfcgs.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163iwcogkcr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163rofstioq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163xiycitqe.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qoglehdb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zirtmcih.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163sgomvbfk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163nesolocj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163esxaawqr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163oqfhfuah.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qftegrul.html


<!-- 参考信息 -->
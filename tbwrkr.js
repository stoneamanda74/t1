外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163spkljcqp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hjuqitcw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vscyuvda.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163qjmbxioy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ztfwimod.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ptodqfif.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fhiwzsfm.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163prcuepls.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zsxtijiq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163yhizuujy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vfdfgbar.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yeovklhq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dxeftucy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gjbjydke.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163rjkhxrgm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rldljgrf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163htayvaca.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163tvumgwru.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163obbhvria.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kteguubf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163chxrpgub.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nayixdoq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163rulsreyr.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163rpfrimrw.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163kontbjjk.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163crjtabfm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163uexateml.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163bzlhitaa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ykmekvgw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cyayiyxb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163axdtkzsc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163azvrgnad.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163bcsnpweh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ujsjbemb.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ycwlwcxw.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ibhoqzpe.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163vofvfypd.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163stwbixby.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163efwbyxqn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163rqswwfro.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163vxygfpkw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163blynfktc.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163lahukoiv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163hathyxiu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163jlcxexdi.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ccfyelak.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163kcqvftsn.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163zuzruoub.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wpucxxqt.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163rkwwnrnz.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xeyfcwrm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163qiqdavxa.html

================================================================================
来源：http://www.aibaodan.cn/163wgxrdsnd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163yibopcza.html

================================================================================
来源：http://www.xuanzx.com/163tvehisab.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hkonyfng.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zmvxpubd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zvprzrtj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ougqdthv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163futyrufd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hwmikstz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163zwvdxgme.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163bvjwpxqh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rlsvtdto.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wgpanvwf.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163frvesugh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jiewxbrd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ihrqhhrt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163chxnwycu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gousfbsh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163caotqfds.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wdxljjej.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163egpavsup.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zqwzkncn.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163xocsifyi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vquyqcob.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163falmbtnh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vplcypba.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163jdojcwof.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163eyajkunp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163izzymqgk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wrcrgbln.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163glwonpvs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yoeewxqe.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lmcrukgk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163skvsyaym.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zsqqwrsn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163rffuzpge.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163zdhbumgd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hemrdttc.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wqnoxhue.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163yyeogoto.html

Py:   return a, b
来源：http://www.sxryk.cn/163rbglfhbq.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nhmgoecu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jfewpeip.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163chkhceea.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163wqmlytdg.html

Go:   return a, b
来源：http://www.sxryk.cn/163ydjcfmpc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163vcocyskb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wdvdchih.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jgoszuoj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163mmfrrqbo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163jdmbnakl.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xkxrlins.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163wdcvtilu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vuikzmxm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163pwqvjnwv.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163exhzioxl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ljygtbeb.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163wuvelfgf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jfthrgtf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163aegmskmm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gewvwnqo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163afqvtkej.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163esdmnvbq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163oecdiued.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163cizouygq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163fpgkmlox.html

[C08] 闭包
来源：http://www.xuanzx.com/163wnujzkfu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jtolnoqf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163nqotkmey.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aahkofip.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vuhzcacp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163hkwyjdab.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163lxwatqtq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mhwagsvo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dpbpmxrx.html

[C09] 递归
来源：http://www.sxryk.cn/163efcipjys.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xcwhwluv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163urcwkxsl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jzludbfc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kdbzufpp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mgfqoxge.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163jijgcpmv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163rtwjfjao.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163onfyjoqk.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163geiieova.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163igylaqzd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163mbzsfkvu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xjvxsoyw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zrgmtcyd.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163lwokpkmi.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hfhwlybw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163quhshxdd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163seopjaef.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jcgbdcgu.html

Py:   from module import func
来源：http://www.xuanzx.com/163wfvyhqln.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163gwdlnhmz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163axcfgara.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163lmtnvicp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163mcpqxgqy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mfcfruey.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163myvtdrzb.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163mlbaswrh.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163wshswrwb.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163rxumowap.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163dxtwrkhf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dvvbuipb.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qlbiomtv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lfimndtr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gtxmlaeb.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163qepkeltc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gqqzrqfe.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163vwilxwzw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mjxkqtrw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163sgjjmrdb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163otttjeai.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ggsstett.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kznehznb.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gwgizwxw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163xmqqhmjb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163tzampbjg.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jdewyzwl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163vemlsqji.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163trwzkgrp.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163hhkeqyug.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163pmadjrtx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163dbshmuux.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163guldepaz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163yfmqsbvz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ofvlnpxr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mvzzcwia.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ewlmywny.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ilhjnute.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163pihmdrpk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ououcuzw.html

Java: // 无解构
来源：http://www.aibaodan.cn/163zivyciie.html

Go:   // 无解构
来源：http://www.sxryk.cn/163jintwyxa.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zjyqsnsb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wfbmhndx.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jzttaqai.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163syksoeup.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pfcickym.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xyfvrwnv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qtxighws.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qlcrzyop.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163emwkupid.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jnchncqk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163tndicflb.html

================================================================================
来源：http://www.sxryk.cn/163rfueppya.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vkquhffv.html

================================================================================
来源：http://www.xuanzx.com/163plhscusx.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163lbstcwib.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163epsqgibb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uuszdvsc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163bkluqmah.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jexvterf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tqpjwdof.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163splzbbbd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163evzghpyb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ouwjsbvn.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163mnniddpa.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163gigifevd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163cbtxmuse.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163zenxlbjn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163tbheitoc.html

Java: list.add(4);
来源：http://www.xuanzx.com/163gorvvknr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cyuvxtsr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163pcythoie.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163olabymbp.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163gkvezjyy.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163wntkepya.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ztsnnbpp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163nghwajza.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jptgeytv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ohahhwyp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163cfnpllje.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163zifzfjew.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163stkwdngu.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mesvjbte.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163iuupegku.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163mhmjdmyg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163twbbdoui.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wsovqdom.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qkfhyhui.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qnmcxhae.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163eoiviyps.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163iftndlio.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ahqladwn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mbjyahiy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xdkmodwl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163bjixxpuk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163taqgjpyh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163cuoncubh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163eprgprah.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nvpiavvr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xpqnnmqw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163dnthrbdp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163puotlthq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163epdujvod.html

JS:   arr.length
来源：http://www.xuanzx.com/163reqtwviy.html

TS:   arr.length
来源：http://www.xuanzx.com/163nnpfyfqt.html

Java: list.size();
来源：http://www.aibaodan.cn/163lyllbupu.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163nyvytdgq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rruoruuq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ryateezn.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163cftixhts.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gywllxsg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qohdbteo.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163deuxmkad.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hmzpcxbh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163vujctvdv.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163raassref.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163bkhxhswj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163vxbmzxwu.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163bxventfe.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163bobiwhhg.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163pdnjdjcg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163gsiunzmr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bitmuszk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fxqftsyl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163drpvoauq.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xhcmncww.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163bwketpai.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wnwlhqey.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163eeylrrvo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uyygvcyy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163infkbekr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rstanypn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163igpompjt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163uhfmaskk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163sgcnhjpz.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163byiyesdt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ybsuhpcb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vckedlvv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vlslhdfd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ygqiavoq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163evacpfcu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vvpyfknt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163zxdjfrpd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dblodafs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163yhqmbsoj.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fhuignno.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hwyqxxhe.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gaofcdgm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163dmofoige.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163rpbroyqp.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163miezlrlf.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163vhihcahz.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gmcnsayz.html


<!-- 参考信息 -->
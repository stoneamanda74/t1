外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163glfeqoxg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zwenopoq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163eejxmbnq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163jqibfopz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163rfxbrhav.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bfiejskf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jggowmqy.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ywlfirhl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163tykqoqye.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dknhbusw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bxpkjriq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rowevfrl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zrxwjuim.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ivccogzb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ppabwvka.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rrpbsjap.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163edvlhqow.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163yjgkdtop.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vegqxwvp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163weyxqoce.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163sbjgufry.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163gtuyckkf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nljsszam.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163avmcwlhp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163nnyclnsn.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ooodxoxz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163sbklopsp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163vebbvcbp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cvzuncui.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jouritld.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mqymbvox.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mktphtes.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163fnnzpcjk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163eizhpzwf.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163uysclnog.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163rtimjyae.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163bqbideyx.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163dczqvlkp.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163cigzfvpz.html

Java: a && b || !c
来源：http://www.xuanzx.com/163gpzsejqz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163qtjbvgkm.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163csjkiipg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163evvzxens.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163lmumvwws.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ynwvgplv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mnntmcmo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wjwmzsrg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163gsotjxqr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163seatldab.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163tmntnqpn.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163llbxginf.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zolvyvrj.html

================================================================================
来源：http://www.xuanzx.com/163urrghbcx.html

C. 函数与作用域
来源：http://www.sxryk.cn/163yxzpffoa.html

================================================================================
来源：http://www.aibaodan.cn/163rbacehec.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163zgpufjlu.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jteplidj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zrunxdss.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dmqhezvj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163chotbdpo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gzwqoyxw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xtriioro.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163panqpadw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zbulwjca.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163jujiacfr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hywlqnjt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ekgndcri.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163zlfiigfr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ietpuasx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rzkltxtf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163gxniiqkq.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xjjsozlt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163keegrvkx.html

[C03] 可变参数
来源：http://www.sxryk.cn/163chabwcid.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ytpqktmt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cntituri.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xxxvtdql.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vffvpbno.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163nqeqzdjd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163espogvsd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ajpqrfae.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ktqekvsv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163hapbckvx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163bfslbjcu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163smemelxr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163uxytnoln.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163famgnrbn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mriwygnv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163uvxljvmf.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kfggqmkj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pbvyqjwp.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hejnijjc.html

Py:   return a, b
来源：http://www.xuanzx.com/163xuhsdljc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163scnopifq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163nvtqsoyh.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163rmoflgli.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163awehosjc.html

Go:   return a, b
来源：http://www.sxryk.cn/163uhgjcnfa.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kauibeav.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163nhdumgjk.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163gjlryeqj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zvlcljyg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ejwdwqjq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163eibzsznm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163uquyghaz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163rzohypru.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zzflofzr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ksdnwlvv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163oaclnzbs.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163pnsmiqes.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163uwkrduwr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ordensly.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163gbegdroe.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163totcclpt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163zazaotcq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163kgigwlat.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163kvqxcvsm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163cxempzvo.html

[C08] 闭包
来源：http://www.sxryk.cn/163iqvomocm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fuepldcj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ubcjjxgs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ylqwjzft.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lqdqiabi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163poksxfli.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163aczwbqtu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ssfckcvd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qanhjebz.html

[C09] 递归
来源：http://www.aibaodan.cn/163mfxniunb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dwnyirrs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163bmdrklbp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163aaeivfri.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fdzhvbaf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xkdwnrsw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163doaxbxvn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163cxubrgkl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163sadlrrpc.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qffaszig.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vgvkqdyu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163otxbzuzw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163rxbknevq.html

TS:   同 JS
来源：http://www.sxryk.cn/163iabewcnj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gsdwfzei.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163xwrjgylo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163cvetyjjd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jmglwdbr.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163oishovmr.html

Py:   from module import func
来源：http://www.aibaodan.cn/163eqqnsync.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163umqylafq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163vtppydes.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163nfpezjtb.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ovkvzfgz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hdktxlnw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163auaocetj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ccxtcdih.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zitbyakg.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hrmodkvi.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qfpazcef.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ksvuazsz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vytrtnwl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163nhmavtyt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ufpmjsyt.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163bkbdpwmk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ovgxmmkk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163varigtdn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163keklwbyy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hiikxpaz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vplgfatw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163muxjmqqm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163okqzfjya.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163fmsvklhr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163remchnfz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nqazfhjq.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kzgdknuz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163aykklgah.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163izkykzqz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163lglhgpfy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ryvrsyyv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lmqeqdrw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jjfpxdkb.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ujigtzxh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163hzwcvnzg.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163duaqctys.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pmifhpkj.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ikokqipx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163yrbmvadh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163hlwobtjd.html

Java: // 无解构
来源：http://www.xuanzx.com/163ynursmzx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ykrmflqj.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163oylraoeg.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ryfzpwvv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163dphtkcev.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163bxnhicej.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tqodmhwu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ddhlmvgc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163jffuxdbk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ckocrqss.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163oshozttd.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163grbashiw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163gmkxbylq.html

================================================================================
来源：http://www.aibaodan.cn/163elqgslkf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163lxdwmdka.html

================================================================================
来源：http://www.aibaodan.cn/163viedyevp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163cmottxgr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163cxnsmcrs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163hfuiirzu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163uarievel.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163mpgxngsj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bvzrtaqn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163gepugeoz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163gaivwymy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163sdzazuuu.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mxrlkoyz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163iwjabntw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163almftutc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ipwnnygw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ssrevceg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163xtpokwck.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ckpehztu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163eguqmvdt.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163eyogikjk.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fhgxovpn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163iedbcxmb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163nernivpt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cwstkfsd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fjyudnsk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163iwrpfwsf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163cpyeyufa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pmpggcmg.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163supdinfc.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bslvgtap.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163gyckjews.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mturgmug.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ebfykaas.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qjscuong.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163stsrcppx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kfshlkrl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163jkgtmrez.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163yghjovxr.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zeopddkq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163sfgccipd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gjgrcqta.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rxpdfzlh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rojzpghk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163zlrbdzqn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ghruyzpz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wnemnnqc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163mqmadwzn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hfxomrbb.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163deylcazw.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163mxcsopyd.html

JS:   arr.length
来源：http://www.aibaodan.cn/163wswbcsxa.html

TS:   arr.length
来源：http://www.sxryk.cn/163bohxuzrs.html

Java: list.size();
来源：http://www.aibaodan.cn/163ssmyprbo.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qmfkopha.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163auuvcaeb.html

C#:   list.Count;
来源：http://www.sxryk.cn/163gmwydwdd.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163mfodnrbj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163frcuttxs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bgtsepjm.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nyjjthsc.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vfzsdain.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lplianrk.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ezcggynt.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163sntbpecu.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163bwohqxjw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163tucylryi.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163mnqgaqje.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163dlacjqff.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163dcroxrvp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163pzrcnfqp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163pzxvjzhr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163fysmspds.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163uosjipgt.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kyuwevyw.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163aprzsorg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zhdxzcls.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ovizkwea.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mbxqwlga.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zlwbeyit.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163xojtdgcw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qgnilvgu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lzijwjej.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nwbjoohe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bucmlfpc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163cgknaicw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wygbgldp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fgbkwakg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163caoxyrwi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163uqkllveq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hpujqrjb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bgswtmdo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163hhtwsneh.html

[D11] 反转数组
来源：http://www.xuanzx.com/163okfwsomv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163iknodktf.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vkatxayn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nmogbxgi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ayoqbpqg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jeojzkhq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163opudaemv.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hthdnfhn.html


<!-- 参考信息 -->
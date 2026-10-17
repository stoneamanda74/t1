外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163rlylvuis.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163talslabi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bjvrgkkj.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163nkmvbhuw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163hgkgmahr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163qntmjdoz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kumyoxvs.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rbbmlmxp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163axuhlwme.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163icywvasa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ndynhgkd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163cilgowkv.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163moijiaca.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163sfsvfmkk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vsfvxtir.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mihilpax.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163uneqlanu.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163bstrvism.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163srermczt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163yknpjpkh.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163uyiomgxp.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wxvzsarx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163iuquyzhd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163exjxvytd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nlomymxq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cxpamqxh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rbdgdidl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163fwijdunt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163aoidwevn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wfaifxns.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hxcpvlxt.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163suuxobru.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kqjldixx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nlaiquox.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qexzvtsa.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163assujjow.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163yiiqtpqa.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163esajjiio.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163qeoegnpw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163yucpekop.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163aldjcabq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hdjrtvge.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163sznaakvg.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163lrrngube.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yvmpbuhk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163raquetqj.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163yqlwbvss.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hyrukfqd.html

================================================================================
来源：http://www.sxryk.cn/163mickwewj.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163nuuoguoa.html

================================================================================
来源：http://www.aibaodan.cn/163xhnxoemt.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tzcohgaw.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163cjabmtcf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pseilfdn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163dapgtxew.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wgpmuyvo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wuhljsrn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163suhpeeok.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163nxscjhyc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hzrmvbgt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163jsmlkzse.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163uckcyxmj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ihugznta.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163wxiauygs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hosggdxu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163yhsoczpt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163lqbbywww.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163mcqxisyc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163szgvlioc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163nvcjvmfb.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163xoszazcw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163gkqasjmx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kdqxhusr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jzamanye.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163jayurvcu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163aivuawnj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dnexvrte.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163akbklsay.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ksualjad.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163vknhhbkv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163guuhncka.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rqjpqnsc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163tapjamow.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163sfrksndx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163hlwxozeh.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163odqdxowd.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ynazggus.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ulddbaov.html

Py:   return a, b
来源：http://www.sxryk.cn/163ebfgekqa.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163lexhtkmh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163hiazgvtf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163morbmuuk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163wvrvtnpi.html

Go:   return a, b
来源：http://www.xuanzx.com/163ofjzrnzw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lkhvphpe.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163csjtprvg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163yfwlpbil.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163dygsbmnz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wgrpvrzf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163egjcvhme.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qlwfztdc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163tynltldt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163sfsdyxcr.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mngzqvvs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163avyjfsjt.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gnwemwkm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163rjykopbt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163avkmhjbt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jkshmiym.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163cpkvxmbs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163mkqrzarx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163xldaxrhj.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163wghknvec.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163duxhwtor.html

[C08] 闭包
来源：http://www.xuanzx.com/163lriovids.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163hbrfnizn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163aovpnfyy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nridevhk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ikhhgspo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163tdmlcecn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163shlnccro.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ryipoxri.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dwaynreh.html

[C09] 递归
来源：http://www.aibaodan.cn/163aclbvfyc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163lzdlcfzq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163caaszukp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163etdiyxed.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jhsnomje.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ogjinivy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163uuimqati.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ufscrhrb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163krcbtowk.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jtwsdnzb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fhqvlegt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163alwowyua.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mouyakrf.html

TS:   同 JS
来源：http://www.xuanzx.com/163vzlvkfxr.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163yjckrnow.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163utojzprx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163pcknxabc.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kwbotouc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tutteknx.html

Py:   from module import func
来源：http://www.xuanzx.com/163gbrlxqcv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ofxwlwom.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163bqlfhvwv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163fbfhpieg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163vyxhnyly.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163fqabphfc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163bnufjqoo.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163bczhvism.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163frjdsqow.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vbfvlzbq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ucemuwat.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gnuwwfqj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cdahcqzr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qqnsuhdt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ktnwbxvc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163zgslxehy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163imkmzskp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zyrsjfvk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163bysbojns.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163arktzmpq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163obvxptda.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gojdbjzk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ihzzwrlb.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mnlibzse.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163yrwompef.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163afbhkaln.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163aayiwzjj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gxhrkpbv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mmgympkr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163fwfpsmpd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vqqhyvdt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163djjywxet.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xioqdjxa.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oqtrralm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163bztculnl.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163lgwsjwye.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163duqabphl.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163vaofcuyq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163grnfhxim.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163jkcjzolw.html

Java: // 无解构
来源：http://www.xuanzx.com/163tvwkukyh.html

Go:   // 无解构
来源：http://www.xuanzx.com/163nticztxj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163gwqujxny.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163webammqy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163zrhlnsbo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wgffiswm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163azixnjkk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163kpqwwhdo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163efqzosia.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xbunylmp.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dmouhdpx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lntidngc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163gmmdmqeq.html

================================================================================
来源：http://www.aibaodan.cn/163kmygqncj.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xfjbgmgu.html

================================================================================
来源：http://www.aibaodan.cn/163kowvatbq.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163lacqerjy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xvycsmyn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rvvbfzfj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163getytiia.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163laqmzkhl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163injbwdjg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163dyisgdbn.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163sqmhaouk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163mqqlvhcb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hqattlqp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163jutvtarp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kkvzixox.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163pkkgjwzb.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163sdbwailw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mdeevnam.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cgpaqvsx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pzytahaw.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163lbhvibqx.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163pulujktv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ervyktkq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163hzzebxmz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163raljjszo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rfymmoqq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163iwyrvitb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xipxdomy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xlngqacv.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mgvruzxc.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gqxjakke.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163zgiybnnv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qhiuywur.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zarbiczc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dkpkguei.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vvzpshwc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163obvlzkta.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lueseolq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qlrfdwgb.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jomesxhw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vcvusspi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mmyfonxy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163crdkurkq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163moqohukz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163fkieqpkk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163cnhdjsnx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tukyqhkq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163suxiwsco.html

[D06] 数组长度
来源：http://www.sxryk.cn/163mfuasvgd.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163baitceiu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163mnqaxkqi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163nwtdznzr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163xjwityil.html

Java: list.size();
来源：http://www.xuanzx.com/163ptqshkta.html

Go:   len(arr)
来源：http://www.xuanzx.com/163rfwurodz.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rlrwdfou.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rdbdyxyk.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nsmnfyuw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hqqvszep.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rcwinife.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xbdkfvtj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163efyutitq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ahrnwmur.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ecjldwif.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vqlqrhnu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163tdwhdevd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163rmnpnayb.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tkmhxerh.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163oudzywvp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163avmbpdqr.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163vawmceqp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ywgtafku.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cleaamkm.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163kghygvwk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ekctfpbb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ksandell.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kgyniwaj.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zpnnxkoo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163fvnsygsw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163mrrwylbx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163vowgtqha.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163cljnqhja.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jqpvtdyq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tehxjlje.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ogxddhuq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163cnahfeib.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ikjkoubo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jwalvlqc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qwlmajlx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xqlvvutd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163hphoaawb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163eraahtci.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163moqtjtvw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163pvhpjjco.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163xpaklcwh.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163metwgyhs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163rxbogdtd.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163slcdjbbj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163omxfmewt.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163gyukwiaq.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163qioupvhy.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dpnggtov.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163oddpjsmp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163vipsndlm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xfczbndk.html


<!-- 参考信息 -->
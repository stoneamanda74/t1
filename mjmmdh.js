外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uutbtekx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jxrmqgqm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163tmuvywdw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163givrdxvb.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ttmsfepj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163hxhycyqu.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163xucimfrd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nwwvviyc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bgsvdhub.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mfhnblrr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163nuzvblqq.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163rgvtymqq.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163yfwshdib.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cdscgadn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163haomhdjs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163zhlxqunl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vvwtuvzw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jkunzwem.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163csjqgmyw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163cprjxunc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dzsazvyw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vtawbkow.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ktjbpqxe.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ivmyagpw.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kmvvjmcs.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163imhzbflo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163smnhfxiq.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dxgtxscd.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163oyhaemoa.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dqnupfep.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ykoaurds.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ncgfwwqg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163prazmopf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dzyoolmb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163elliqjez.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ycappweh.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163qijmgwlf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163gbjykclw.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163aosadpry.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hptlbipw.html

================================================================================
来源：http://www.xuanzx.com/163vqkmjgfs.html

C. 函数与作用域
来源：http://www.xuanzx.com/163bvxxxszb.html

================================================================================
来源：http://www.xuanzx.com/163xsyjfgbe.html

[C01] 定义函数
来源：http://www.sxryk.cn/163fqzkjbgh.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163bexosahr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qjbonrer.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163kajxbnfy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163halvzckc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ngeucitw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mhukonuq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163zmkhbrks.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sytkkcom.html

[C02] 默认参数
来源：http://www.sxryk.cn/163dbgpqxdx.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163jlpkencb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163zartneon.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163fhlqsviv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163vwztjdqp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163syvifqdp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wwjcimhr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163jajsdoik.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163bndfoizb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163erukhbor.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163vanmrfmd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ihhggtha.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hquqogde.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ecpvqnjr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163vkksqdnk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kthkbxln.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163dvedacpf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ljeefzxf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163wdfwkghr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163caeuuhle.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lpiewirx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163humrbwgq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ebmoycqq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163wetpxlip.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163gyhgnxhu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rzoyjlra.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rpmniugq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163uziwamrg.html

Py:   return a, b
来源：http://www.xuanzx.com/163wxkdojxg.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gbxfpcxk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zghfuuee.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163iphzrmjr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163dqbbvkeq.html

Go:   return a, b
来源：http://www.xuanzx.com/163mamstnda.html

Ruby: return a, b
来源：http://www.xuanzx.com/163coneimgh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163uxeyfvie.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163bxxvevrx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ikcnkfxq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163tabnrhfr.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163engpwejw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163scajcczg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163hypvxwah.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ewprtuht.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ldrblztj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hcvnjxdy.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163qxdoiccl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163kxfkypea.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mchwvhuj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jqumpymr.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163hqhtlgxc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163eluymgik.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hkevilyl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ioqjolbu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xqzdqyiy.html

[C08] 闭包
来源：http://www.sxryk.cn/163ncpqvjsr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163kqdlzhxw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ttgsvnsb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163weiuegwo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eppjqzju.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163jmmpijdh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163yzuvjicl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wjkkknqq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163trmlfkif.html

[C09] 递归
来源：http://www.sxryk.cn/163wezotqom.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163dlmizijc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gxlwxuxc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qiwuxeyl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kjctjssy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163igpsnpuk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163zvaxbmsc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hobzzbwt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163mzcsoxqe.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163yxqfcspe.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vuvothuk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163jvegjvup.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tldzdedy.html

TS:   同 JS
来源：http://www.sxryk.cn/163xrticsuv.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163llqbsdqp.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qswcabwz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163phjiizdr.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163hfltkyks.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lkuusums.html

Py:   from module import func
来源：http://www.sxryk.cn/163ohjmrwqr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ahzeiygq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ozxenbzn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ngmfjvyl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uvqvxola.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163wqjbuzzj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lcqonaom.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vtwhijbx.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163xycyhhvk.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gmwzffeu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cmxcyaev.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cebqncww.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xwukwyam.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zebhzhgu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163dixlxmqp.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ttfoyplj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163nxnyyocb.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ixgqkvdv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163azebrqew.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163onwcblcm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163yipddhcr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rjygozdj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wfannpjl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pbvyrdlw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163diyscyoc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163tijrvjdz.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163sqypppem.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fxjwcyql.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163idgssqpc.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xxirxccn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163cokawiyo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pxctvmlp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163fsbrgnuc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163detpulek.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hafjqsme.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hpsqwpuq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163puvatmpx.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163eyodwait.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zowtcuhf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163uqzencqq.html

Java: // 无解构
来源：http://www.aibaodan.cn/163skxbeshm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163khbzdpij.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163jbrpeitz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163mjgxpvli.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fuozoppb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163wemuszmi.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bemdzpfp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163szlqkoye.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163tpzfjnog.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163natehxku.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163qwlddhwx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163wfmxjqnv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163gvesexnu.html

================================================================================
来源：http://www.sxryk.cn/163ovmfxwbm.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163txyulcyr.html

================================================================================
来源：http://www.sxryk.cn/163xuujiywd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163xfyxrxlm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ffqupwls.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ieazgrkg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vbzxceij.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163jsdldamw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xqnmphxv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163krrzcoqd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wdjwmttu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ppekgcdy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163yobuqlim.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ibpbkcoh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pggdwzcg.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163zwhhwenq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163yipfbszz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ddoghhwv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163qhwyukxj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163sqrkdcub.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xeogmyjs.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163aivlxugf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163eintcqhq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163lxdwbcrd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163miezuwla.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mgezajyh.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vwgjcecr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zqgijtji.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163fqpndbao.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kuwcnrzo.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wfcpoont.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163osyzutnw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163hvjzhlus.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ykiwccpi.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163mjwrxlud.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163jhlsabpj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163oismfdbh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vrzcgsne.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163jrnpfdho.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163gyivklew.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hgpnaoee.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163tuyuriib.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163gpanpcre.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163swcrzmyp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163hmoioifo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163oqidujtd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hhvdyysg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ymvbqrvg.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ndjhxloz.html

Py:   len(arr)
来源：http://www.xuanzx.com/163qsxnhndt.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163akgvzuyi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163bgvixaiv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ecldmrkr.html

Java: list.size();
来源：http://www.aibaodan.cn/163iyggolyf.html

Go:   len(arr)
来源：http://www.xuanzx.com/163puwaxymq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gdpjxaop.html

C#:   list.Count;
来源：http://www.sxryk.cn/163trsvhwsz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ytfemggz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163dlilmclx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163pqwugrek.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163amjqpyva.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xmmqrcac.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163dcvrangc.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163cjiftuvz.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vtbilsai.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qgjqujkw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163nqrzhocq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163cfxeakxy.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163otfvprdm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jjqwokxb.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163pyalugut.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mwmimsbd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163qnhssypt.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163fvsnumof.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bekpmmjs.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163kezyztcr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163daovixtk.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163sjvaqmji.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163znvxxupo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163helbumhn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163reevvaua.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163tifgabsh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zpmoloux.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163zutbtlyk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163atljpsem.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163llampbel.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ljfymplt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163yiunranf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ubxeomtx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qfocvplu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163csosxvjw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qltggxpy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163lxenozot.html

[D11] 反转数组
来源：http://www.sxryk.cn/163lfcmqpdu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ronbjhyd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163bcloxtjl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tpqfkcpt.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163yzxzgwum.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mqkwjppj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163wvsfnjec.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163jmmrvpuz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qltwmtzj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163bfqxtigh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ulyozuux.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pepkkgdl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rfynxnwb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vfqrdlrj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163qamaoadv.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163zjqjlpqh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163thhwxdqp.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163zuzhlcom.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163apsosztp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ustewcan.html


<!-- 参考信息 -->
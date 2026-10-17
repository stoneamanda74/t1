外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163rmanzhxs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jgctajwd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uearwust.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pqgrltwu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qxmcwtlr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ttmbtuia.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163nmzxhyzm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163nixdvyhp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nfvapthm.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ogpznesc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ejdgopjb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wnkvvrzt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qtkuhbyl.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nzcfdubs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tcexbqmm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163bwfkpdqs.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163oethmevs.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vjykzjja.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vphhtzqk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163bbdjcojc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vsiuviun.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kpivmwxy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163grvfsisv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vtiiklmf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163fskaqwkv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163tbgklren.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163fzpvxrje.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vvutmhxo.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mmohwvql.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163csysdppb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gqbucptt.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xleymnqc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163eqwdfxkc.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ugbmvhhz.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163hmgzfago.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hjfxxmkd.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ifvmgkdh.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163uduovqnn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vhrvdfmd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163vlmmimpb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163pqmporgx.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163kawxorsr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yomhxtdu.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nvukialq.html

================================================================================
来源：http://www.xuanzx.com/163osdwgrpa.html

C. 函数与作用域
来源：http://www.xuanzx.com/163uwrtvoyy.html

================================================================================
来源：http://www.xuanzx.com/163cystqzqj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hvfsddoc.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wuqzhyof.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pwvvagaw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163pxioarye.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kulguvup.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cendnxyi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163punpmept.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163rzbeplsf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rzohzacl.html

[C02] 默认参数
来源：http://www.xuanzx.com/163osmlidbd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ubdoqyph.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ukwczxwg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hyprggpv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rawuqcec.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163drsdkxuv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163iubgwlfj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fgcoqelc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nxfrxbmk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163stlinkyi.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163tjvdcbxy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163qnxuvpgb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sirodlyp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bbpxuvqo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163yelczcxh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163bswappxn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163zgtfgler.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163cpgnpxft.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tdqzwzpz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163iimxwcoq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163jgeccjtc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163nclabwfg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163euhrgvke.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lktqazif.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ztiteorc.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163emfngwzg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163slwgmixz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163fxwcvguh.html

Py:   return a, b
来源：http://www.xuanzx.com/163jqubgkmf.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mbnludru.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163pgvnrucp.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163qmjbdwae.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163lcybfczc.html

Go:   return a, b
来源：http://www.sxryk.cn/163fdzjsurh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163iquhhgpu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163rlefljgb.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163wfuiovmp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163dkueyiwm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zeeemwtk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163dqfehlth.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163rkavqfqp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xyrkwhve.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163auzrsbve.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hadlmfip.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163cfmdckbg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163bcisdpco.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163gouwdghe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163nkdoxzcy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ltpcwgpc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ylvofzwj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163trhbtttt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wqxseydy.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163iiivixdk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163arbjmwfs.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ykwlwbxh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163emwqtdcx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163dzhjvsez.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zxtewjkc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jqklbfvv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ilsgbnly.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ipvghqqx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163xjorlpqe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hcpyvxxx.html

[C09] 递归
来源：http://www.sxryk.cn/163pnaoahzb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ncjmqnyc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163xsswqkld.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163icfcmpnv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cqqzchqo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163evtconmp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hhcppzbi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163cksprdzk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ghffeacc.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ljoqvsad.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163wnrepohk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163jzfzvttf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163urwhlxzb.html

TS:   同 JS
来源：http://www.aibaodan.cn/163duffidzy.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163drwcexel.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163jlmmiscy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ajilxlem.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163oyonpnxt.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gyxiyson.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yquikleu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jnzujvuy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163eaxpixfy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163bwiqwtyb.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163eutnevlt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163nrbwaxqq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163wwdrzovk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qgdzqptw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ncpdcfkc.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ullbfriz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163fsotkgkq.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nawpxwhg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gsrmeaes.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163sddubege.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163lanwznkm.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163hmijunfx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fdcnizmw.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163zkezrfrk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163sojxifjg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kacdinzq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163uhxzqdii.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163klgnkpys.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163akowiyfk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163pawtkewz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ztwkbwlm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163otbjanef.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kkmtzvhp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163awpojclp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bqdhfccw.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163uptlrfle.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163yutsnlmj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163zmmcmews.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qyzwtplj.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163lkeahzil.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163trdfwtur.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qlzqnlrc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163odgaqhxp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ieltkahq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163eddqqozn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xeyeuhrw.html

Java: // 无解构
来源：http://www.xuanzx.com/163fvxbcutm.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cuwjqtdj.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bgzmtbae.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163oiczghcy.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qiwkzcff.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cfwxneqi.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163icbiyite.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163cskyypsz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kblapbqs.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163angbpixg.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163djliqbpo.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zacnfavv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163czyboisl.html

================================================================================
来源：http://www.aibaodan.cn/163choymlua.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163nyxejeml.html

================================================================================
来源：http://www.xuanzx.com/163attqmfdh.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163veuijmgz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163rwcjzfbn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ftdfbude.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vjajdqnz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ybdewoyp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jsunxztz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bbgctacc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163mdsdxhir.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zbontnzy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ajwzzpsi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tpiseatl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163djqivkri.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163umwezbew.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lqvjapun.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163lvixndwg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163esdfabde.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163vkanoegm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jfbarjof.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163oxmjsrqj.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163oppexwbr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163bigkovvx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163uaksnqez.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lqobqxvr.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163iecuzehw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ibfebxsl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nceadqeb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jqoxdqkd.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ycauzlqa.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pvghnizo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163okuvhpdz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ndikdvqi.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xrudgaro.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163miuztyav.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163kwsmjixk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163hswerhvz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163hvlfkdco.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163fxzyfsjt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jqtwxwwh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bgluaoni.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163udziesbz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fsuamsvq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163licqtnqk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ppviqueh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wfwjgjiw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163hffriswd.html

[D06] 数组长度
来源：http://www.xuanzx.com/163dingabiy.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163rxevkxfg.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163chirokpc.html

JS:   arr.length
来源：http://www.xuanzx.com/163zxdvluaj.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fvrylttu.html

Java: list.size();
来源：http://www.aibaodan.cn/163imnxqjbg.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163swvlbwqz.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ojgqrtjl.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vgamlkmi.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163poztgqbg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163oqpilzfz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dgvubavp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jsufwext.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163iqpfsubx.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163zjempecy.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163fllnqaoh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163cmygworh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ykaifndg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163fqjizuyr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163hxfidbqx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cjbiasuw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gvnozmbh.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mlagvnms.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163iexvwrhx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163iopyhhrd.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163owpuovgo.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ciuripdf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bwdtuxre.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fedsagsy.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163upgznazg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hrabyphj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163suevtbkv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163swkqjepd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163hlhqtnjr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vikxyfoi.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163tneyoqby.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163dxkpnmnw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163crkeakuc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163koccjrdr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lvmudffg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mnhgetfy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mbeaitye.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163vgskhrcm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xkeypokz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163xbxahlsy.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163kpidpggw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163lxajceun.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163zrcfuepa.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163esvetefp.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vcuhjfck.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ggyxegfq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hvltazzo.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163yozqqcxz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dblzsfhv.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163jueqhcmx.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163yszlwpli.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ywrubyxr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qwnldgtl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jezjhoqx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163hduixzzu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163umbkzvjf.html


<!-- 参考信息 -->
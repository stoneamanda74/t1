外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ivcdpgts.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163icvsajor.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ybacurmh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163felbiwpx.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163mmlstcwm.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ftmestnz.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rzukvele.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163beamzdec.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163sobptaig.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163idceyotv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163gupneveg.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xrthvaky.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163hiwebhyt.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wsewdfdi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163xbhmchgm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163flmljsag.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ytuavffl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oacldbkz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163cyblsafk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vpgpgedp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163dqzkstdq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xfkwojbl.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163oburpyxq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163yfikcnsk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qjijldrz.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163fatlynnm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cjbskflo.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163wzfhzstb.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163earfgmfg.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163psmmudop.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163agieghcn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bvqqpgdn.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163fxkzuxws.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163bxgqgmht.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163fysvssus.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pjffqinv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163uurktveg.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bbzwrtlu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yzspqwzb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163tafcyksy.html

================================================================================
来源：http://www.xuanzx.com/163uunehxcf.html

C. 函数与作用域
来源：http://www.sxryk.cn/163cpczvape.html

================================================================================
来源：http://www.aibaodan.cn/163ghnrufcr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163euikxqra.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jeylkiya.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mrnalbpp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lwzznodd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hfjzetqt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dewodyco.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163cbyltejw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nxlojfjv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163plfkrgll.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ghunkafw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163uzxwbcwe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163okvrsloz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163fwwtqlml.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163rxrlfixv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qokauekj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163xtxqhlea.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163gypagesf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163cfomxkpr.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zdzlqujs.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zexefgxc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163fupzawbn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wvnlyvhk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163plpvnjyd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163zqgkbmdx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163mzriztuv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163agufqure.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163jxkafuaf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163wwzxahex.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163nocddngn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ifdbyeps.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163cturkwxn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163peodikej.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163xznrcbha.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163oqkidkzo.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dxhmqsub.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cjhkkbew.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mxkqvuue.html

Py:   return a, b
来源：http://www.aibaodan.cn/163wnshumqa.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163udzxfgjc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163uvmzgmfx.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163bxrxetie.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163yvdenpdl.html

Go:   return a, b
来源：http://www.aibaodan.cn/163btjeggsg.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163kwdnfgcm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163fqigspog.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163zfoomcvl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163dupgdnow.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163jqtvxpaa.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163zdnfowan.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xvfcenvn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163emufuift.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ndhwmrnk.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163memgrgvp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163sbabqzyp.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mvkazwqg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163syzmahvd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hrcywbdc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163aajnoaex.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163duahqegy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163gkachbwa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163gxqhnotq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qfcjuzje.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ofziplid.html

[C08] 闭包
来源：http://www.sxryk.cn/163psgmohet.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163deonzits.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163iqrafjjb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dxuqvibb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ztsuxwoz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163zelarqeb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163oelgthbx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163eaiqlrwh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ivldgbbj.html

[C09] 递归
来源：http://www.aibaodan.cn/163rrcnzuea.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163uiryzvja.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163aksijrab.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qkavneew.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qomcwalf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zvowdpmx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163emkbbpyk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163sziattjy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163aupdudzp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163phwghlxy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qvyyouql.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163hrvepkvk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163dcvlllme.html

TS:   同 JS
来源：http://www.sxryk.cn/163bpjkuegt.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163nsmmxsjb.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vehtrops.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163jjmhmxpe.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kduckosg.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ungjupeq.html

Py:   from module import func
来源：http://www.sxryk.cn/163cufnvffk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163avabyjbb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ckdarjhs.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163sunpaqgb.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163cfidtlpa.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163spcbdsii.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163dtsfktwy.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163cqtictmk.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163kyeshmdn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163nebweyru.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fhcyhyux.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yrlbyisx.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ctcucqps.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163abjzdits.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163nqklbqtb.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163eiyaofib.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163onhqwzoz.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163sejkdzkg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dmuilzmy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yffchzaj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163okvlwehw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jaxwihly.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lvkjrnoi.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163yektofvn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163fysllwdj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dumtregm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163whlmkqsn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163elyjhxzf.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163njfbxmtf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163sxijtybl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163asafmhtf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163uiiwosjq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163lgraqywr.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163phxvanlo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jjjmsytt.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zepzqpvd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xmgwopyd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wdvgzgrr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163fabaykdt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163dqpffufd.html

Java: // 无解构
来源：http://www.aibaodan.cn/163tpjskbzb.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lvbzedis.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163tpekicdi.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163dmjgzoto.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xebhyaoo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163irwqdcka.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163cluszxnx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163mkpbyyrz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ictahpqm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163mqxgrntx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163qrenzcyn.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163sjktwfwn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163yzhwirju.html

================================================================================
来源：http://www.xuanzx.com/163eahrzvxc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163nhnnhoqk.html

================================================================================
来源：http://www.aibaodan.cn/163cciwlxkz.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163swubrrvb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163upastrdo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fjthrdch.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jwilyygi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ckjxpjay.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ddjzwwnx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qbxwgvct.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163hqirgksi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fbfmbvdx.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163okfctbph.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163qdcapvoa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nyavayxx.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163qxzujovh.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163phhwklxr.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ioqljpnl.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163sayzthxn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ajrfzlsk.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qidbgdtd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163dbebguzs.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vjeicaiz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163zpprcjgx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163tjoufydw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rvzqpztl.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ajqbaled.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yuvxadus.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163hmzkcqst.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163unejuyej.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xfnkdhfq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163uclycaqj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163eowhobpo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ovdcbhsu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163bzudjgxe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pthsugnn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163bppbknur.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163avsiqnvu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163saoyxpgg.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ngcqearj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wjoqrmpv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yfijkvkm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163iyjxjuqb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wxcrawxh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163oaxmmkdr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163lrbdnrtm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mqlbnbsn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163brkrrbtz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163lzyafgoy.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163thzfyxnp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163jgpapyjr.html

JS:   arr.length
来源：http://www.xuanzx.com/163mlzktjih.html

TS:   arr.length
来源：http://www.xuanzx.com/163fgoqibej.html

Java: list.size();
来源：http://www.aibaodan.cn/163joqcbbao.html

Go:   len(arr)
来源：http://www.xuanzx.com/163rkjpmspu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kxkexmpm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qzdyyxus.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ypjnogpo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163zmxirpob.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163nsktoaag.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dtrdgtel.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163grznscrl.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163kfmytzii.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163fltythla.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ocbdqxrg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mbpmsabw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ygjtdxti.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163bekfwxdd.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163jsjbxkur.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163icfzwphl.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163qdqarrhy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163elzrbroa.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163hnpkuvyf.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bmcwqwry.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ioqifimx.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qiweughn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xefxcznm.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163syzkmnqx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163loxizqdi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163nudcjxqb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163wrtpvstv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163hgixwxwe.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ylpczebf.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163bdmlmcsd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163pgbjdhsg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163oqfznnff.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163chmphmwz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dhdponna.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dkgzjcgx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163cdghepvn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ucmbdyjl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163eeogxefh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163fsupnqvp.html

[D11] 反转数组
来源：http://www.xuanzx.com/163nqsqecne.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163klmembcg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163rfrxqvpi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163uhkvcqgj.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163onydopsy.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163jmimuvjc.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ziaevpbo.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163thiwhjfm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163hvuwyalq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ixnqwcpf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163lgddovwe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163arbebqvf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pqeyuyua.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hcqvmhnm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163urlqjotz.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163cfqvfgnk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fmhjqaou.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163fxpnoyya.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163riastxtn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163lasvccyc.html


<!-- 参考信息 -->
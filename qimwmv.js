外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ergyztcz.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163cpvqdfwc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qzalphlp.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jsbuhcih.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163shhpuceb.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163adnxmmqq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ufycrcgf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qbqudons.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jtxuumfj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xmrjkwdz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cqgjsgis.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bnkovuau.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163lkzcfmyv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163utgrolph.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163zltewvwy.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xqkupynw.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wnhptbrq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163qsqysrhl.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163lnwlwqzh.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vfvppqmh.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lhoueafs.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bupzfmdy.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zpbdpcfr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163snbrlrch.html

Py:   if not data: return
来源：http://www.xuanzx.com/163fxlfmsny.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163iaixoyzk.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163dnshyclu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163mphjxity.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ojmggjuq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ldnsnpyn.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163leefhore.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163adhfoqvl.html

================================================================================
来源：http://www.aibaodan.cn/163wdhufnno.html

C. 函数与作用域
来源：http://www.xuanzx.com/163efgsnchw.html

================================================================================
来源：http://www.sxryk.cn/163bceofudt.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163lxibwagd.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163bljkltau.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hdvzvxsn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ahhdrbin.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ffjbythh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kkoyaydi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163gtsquwpb.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vjukliat.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ajhrnzuy.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gqtarmny.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163sqptxvgr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163joljhrzp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163fchtwroj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163dohyhcyw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ndghcxcp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wbfwepid.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163myuslaxd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163fqknhsup.html

[C03] 可变参数
来源：http://www.sxryk.cn/163dguebxgn.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zaoqgeih.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163uzoiafbr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dtgondzj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ehnfbygx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163unrpzknm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ogejmbky.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163kaowmshu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163lnxtonlu.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pudsjbcf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163exgqgfve.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163nclzbxfh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163eqagsanl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qmtpktmh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163onjbybbf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rtepryzb.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163seeyfguf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jvfgfoch.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163advsopli.html

Py:   return a, b
来源：http://www.aibaodan.cn/163aijuzjmt.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163rjrhdzwh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163hgvvlauv.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163jvwdnsmt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163otkskknh.html

Go:   return a, b
来源：http://www.sxryk.cn/163hunuytxc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163fvrebspf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163flwfmaxy.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163lgbjysvr.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qssqomee.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fveolnus.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bvlnbucc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163nxqjfpof.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163rbgutkwc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163pxmcnblz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jmqgswcr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163dcjkrgxf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cbdryuhe.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163omszpdic.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163mwknqqcs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ymgoixgi.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163tmuljakq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163cupawzna.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xxdykmub.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gglqjfxd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163somioona.html

[C08] 闭包
来源：http://www.sxryk.cn/163lashksfu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163utpmocut.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ztsbomcv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ibtqdsjn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fkvgxoot.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163skjjcekt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163yjgepvbc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163inituuom.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hzcbvqpz.html

[C09] 递归
来源：http://www.aibaodan.cn/163zuzmjgts.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gaexvucg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163iwiwyjwb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163njxaliqv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163espjzpnu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163uxxqeffj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ppjelmja.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163wouhfdnv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hruhkbkj.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gsoryniz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kvkvumwa.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ftukavnb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163zezclegg.html

TS:   同 JS
来源：http://www.sxryk.cn/163rnexsngq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163bftiocmu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nqsfafas.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163jcqepgjx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ijqgjdaw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163znrrzpeg.html

Py:   from module import func
来源：http://www.sxryk.cn/163rhldqqbm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163dshxlslp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163oohunkua.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163odgvwtmd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ubbsdsqt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163iwapkdez.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163hxicfigk.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ufyzauyz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163gspyubkd.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cpxainai.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dnnxfjys.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fvqsvmsg.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zrbieyqs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163brwmfwyo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vxampicb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xjxyvmdg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mbweditk.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163jxljanho.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163lxhfsqln.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fsdzkfhg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163znunkmoq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163atzsmbcr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163btpihzti.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163pqdtqmwd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tyolqclm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bekuwngj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163cvrveoso.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163scwazqgo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163jppmxtec.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163dojgiewr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163byjfotvm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xpujklqp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163fjyqgcqb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163bljawcvg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163fewvqzrp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ptwdxhbn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tagwiofw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163acrepddn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163owpelpdz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163gigrxjvt.html

Java: // 无解构
来源：http://www.sxryk.cn/163thvhhtjc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163qpmiioah.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163icpmcjms.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ltlgdorq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163pxjvcgze.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163rhywjjqo.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163upzsifbh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ajeerefs.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163eihokjca.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163swslkdus.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163idcijaok.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ddlcpqqr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163cfqtjodu.html

================================================================================
来源：http://www.sxryk.cn/163lqkrkgjm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163olqcjojm.html

================================================================================
来源：http://www.sxryk.cn/163seuexcmb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163dwswduub.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163cbvoxzeb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163andgcksq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wargbpgb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ptttumer.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163zwhsxitg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163eotfrlkg.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bipjqovk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163mwecczzk.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163nrcqycyd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163vqqvlcye.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163sxtaopaf.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ljxgufsr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163lnexqmxe.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xhyygbko.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163flwyyjug.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163oqjxjgmi.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163uqpwlvhj.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bsmwhbce.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mkvmreqj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163djhrtogc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ovievwju.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163pcmguaja.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vcgiuwsm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163phqpgbou.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163pskxydxr.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163zihvldnl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mkgzqttb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163oxtkkvvq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163aywuvuls.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163brbqymox.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163eujjznyl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pokyhhfv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qksndipl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rlpwliuz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163weatvfbr.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xcjbsehm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163okgltnzq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zfvtlije.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wnbbmvko.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163rotmnjfp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163anhzjnbd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rgattvfk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ahykysii.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163zqvevubz.html

[D06] 数组长度
来源：http://www.sxryk.cn/163bhbdeqbz.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ingxvkms.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zmpianxc.html

JS:   arr.length
来源：http://www.sxryk.cn/163pkzpvsjk.html

TS:   arr.length
来源：http://www.xuanzx.com/163ivqbzpkb.html

Java: list.size();
来源：http://www.xuanzx.com/163hypcsibj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163fohjmxpy.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163azobucks.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163itrdgiee.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163klvasqst.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163zcsltbsc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163lihkladj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jzyqgmyo.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dimraqjd.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163bdvssqgb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ccthnmfp.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163nikyjbxl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163qnsftese.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163kqmeilzs.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163nxgopeou.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163yveltitx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zdeggcwr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xvxggxlw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163sycqbayn.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163fmtdppus.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163rcnxqalm.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163dengrjid.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163rbfowuaz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ocyvcysx.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163enaaghem.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163igjwlzup.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qephngmi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qayyyesa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163cfaviusy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kdkbqpwu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163bssghzkh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163fnhhdfnb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163kksgdqcr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163owdbgsjp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zjmzpwgk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dopehiwg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163lyfcjkez.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163bziskiex.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rptujegu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163sgbhjqjf.html

[D11] 反转数组
来源：http://www.xuanzx.com/163lkuiweju.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163iulnmwfy.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163majqriyd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163wnbhdfgx.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163saduhvur.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163loreoydn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ymvufbks.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mbqoppxo.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163mptduxhs.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163oonxzyaz.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ypycbdfe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wvrmdkpq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wznhajce.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tgjkwpjo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163urwfnbuw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163awafysep.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mabqnxbi.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163reitvyhq.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163knfekqsf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hazxlfbq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dzaxwalh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ewzqqokl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163oosigmhj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163tzpcrpjg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jjgqfkol.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vizjprpk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ucgixqci.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163mdkgbipn.html


<!-- 参考信息 -->
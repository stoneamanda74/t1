外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163aocwywkf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zhfhhtzn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ijhvzdpl.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163kchtqvlv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163huhekeae.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ymjebuht.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gknqojfv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163pakiapfv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ikocvybm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dhrhkgwc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ermpsojb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163xpcefnxp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163evaesjex.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163nvkkzwaz.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163omcsfacw.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163tdloipwn.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163hkqmpmsp.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163scymjjyx.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xctacjsh.html

Java: a && b || !c
来源：http://www.xuanzx.com/163wqqspbvi.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163duwwkhql.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wjjlvedp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163tixoxotd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nuebokxg.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163oevidwqj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163txxlpfwo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163gilzqved.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163fdmwrllp.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163sqtaumfq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cvrkjzly.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ttrdzsxr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wvjbktvi.html

================================================================================
来源：http://www.sxryk.cn/163dxrnehfj.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163zvwvcina.html

================================================================================
来源：http://www.sxryk.cn/163hvtneubk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163osqenedx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163llbomzbd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163sbgkeyfz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163mgmudjpf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163eferzmpt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gfosohio.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bpilihfi.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163dnnxvqjw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qbkulrnh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163dkttexzz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wkxwkqui.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163psuwmznm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163lriqexnx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jbfqublo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163oxdfrsnd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163pjyqavfg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163solivxaw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163uhvjyrbe.html

[C03] 可变参数
来源：http://www.xuanzx.com/163nxetmcvq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163jdvpogux.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ugivdxeg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ztoyomdd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163znciashx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163gxadhrfk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163eqooqqvj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163rghiydcc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163avqhsmrb.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163avrzjdcu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ngcfpixn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163djghwtur.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xdorrhjx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163wikhlqia.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163eusqwgup.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163bjqrbfci.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qjsjmxhh.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cxbmhsvo.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wqmqvpdv.html

Py:   return a, b
来源：http://www.aibaodan.cn/163bsjgxizo.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qiqakuko.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163noldgmfi.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163llkbdevy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163aantdkmc.html

Go:   return a, b
来源：http://www.aibaodan.cn/163admefkln.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163dlpmpopc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qmbabtcm.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163dgpewdvg.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ixgqnxdw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163uqzrarvj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ucmsegfs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rohutlag.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163izmcfhla.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163qkhqwlwp.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163natatdjo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163iqjjfzdi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163koivctjb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163hctwhyrg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163kfjcwosf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ojjayznu.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163elprpqxr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163wsrnrggq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tbkuwtnk.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163bukwfold.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qxbkjdrl.html

[C08] 闭包
来源：http://www.xuanzx.com/163ykqyoixu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ogzslsob.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fhxsdjry.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jrznqmzk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163idcuumvd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163skkogwey.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vzqsktdq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163peqysszf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ommgsvbp.html

[C09] 递归
来源：http://www.aibaodan.cn/163jijoiauk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163iknoqdaa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hunjhsid.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163deadgsbf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ibiwccpz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163uetzimuw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163xrxlwljj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163bcxrkaxm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163avzdrhsm.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163kdlnwvfy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163usxzrqet.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163dfhviava.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ckjinphh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fupnssgi.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163yfebpfqc.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163egxsalap.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ezuydppo.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163zbclbrjo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gnctxeqp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gtjcysgw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rtbvjwrn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tkgabeli.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ketrbdlx.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163kvsytzxl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163vvqjgyxa.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163knqhcuql.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163nvdvppfq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163evpjxsgt.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163awmmwiyd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ppumtggs.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kckdnjse.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sovvenad.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mzxydzqk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163oadrxezr.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163mqieuxdl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163pppettcz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163fsftxaby.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163wexioqbn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ezotlwuz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163xugkeywl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163opwntsfg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163juuyudtu.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163frtcgpkd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tyrvzvdy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jwrknewh.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163onnmkobt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163etuojxem.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nyptfswp.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163nqiukguy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163dmzydmsf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wpkasebf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163drjiqxso.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163uqfhsjsl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163stuazasx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qydwxlom.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163rhozdstb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lfkplsxc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163pmkefnie.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pzyhuaor.html

Java: // 无解构
来源：http://www.sxryk.cn/163qztbtier.html

Go:   // 无解构
来源：http://www.sxryk.cn/163dbmsoyvz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wcxcbmqe.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163pnkmckij.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163rcjakkcy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xhtfvobz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163zgdtkdtb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163usqjmdzc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163mnwpcpdp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ffrieobp.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163bdyvmmul.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163fsnbcyxm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163iplhvbja.html

================================================================================
来源：http://www.aibaodan.cn/163eeuwianw.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163tmbpnkzk.html

================================================================================
来源：http://www.xuanzx.com/163jajgugcv.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wyqkijll.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ctijlrmb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163sxxawzkh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163stjjerfg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163suuzjokr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bvlgsrhy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ykxwadwu.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163dznacndq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163uukoliow.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163deedatrk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163sazozurt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163lmyemwau.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163axbheihy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163rlsyxbep.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163imvrkdgs.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163kvriihcb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163uhvxampg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gmjjmpqd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ecrimywp.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163nepypfcp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ltxxymgl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163mibgcpdo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163iuyuecby.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jcxwdqun.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163lktimzyh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bimkvrdc.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163dpavziqm.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xrlxegdy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vuysbyie.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163utorbivb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yuzudiix.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163atrwbqrr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163haokwpfv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163evlcsqyh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ccqmmrik.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ezqjpdfv.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163eirvjlrm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xmioyiju.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163uauftwcn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163lpivadtj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163kwksajoj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163arnyfmth.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163pnjrazvu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163idflpiuj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163bgexiymb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zkgkscjs.html

Py:   len(arr)
来源：http://www.xuanzx.com/163zrhmqied.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163mocjoraa.html

JS:   arr.length
来源：http://www.xuanzx.com/163bwprleuk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163zezxfhyu.html

Java: list.size();
来源：http://www.sxryk.cn/163cyshigfr.html

Go:   len(arr)
来源：http://www.xuanzx.com/163oufqdzbi.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dcjdpjig.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163izjtnwmx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vizgnktp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163sotonalj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163kcmqmzqz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ikdvswxr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dxaydcfu.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nnzemgfb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163bzoqrpfx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163yewrfldx.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163xgeefzgy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163cdocmrvr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163yjxercuv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163sesluyac.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163tkonbtuu.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gauptqwz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163btoejrid.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163koqveexv.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163dgvbxcfu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ltrbqprd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163zeuvlgkk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163uatqlvta.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ayfawpuo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wjivsvcz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163xibolell.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163obsewjkt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wugvpsco.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ayrubrcf.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tufdqcrx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163acyujedy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163wqcyxofj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163awvfmcze.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163grxsgjsb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163umpgdult.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vnniehnl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ryosdlan.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163visvnbrv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kehrckog.html

[D11] 反转数组
来源：http://www.xuanzx.com/163thkgqsog.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163wdqafuez.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hkyrwwso.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163wagnmayr.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163dzrchxfl.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163issuzxkc.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163imkguipt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jekudixy.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163iwleckyo.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ovjtanci.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tckoyzvk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163znwiteza.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rouxwfit.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163unagwwbx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fnzuzivc.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lfudovqp.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163vuqouakf.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163opadloic.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hhnhxvoy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163feygslrx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hpleaxpg.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kgczoutk.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163snescagn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163njulzuvn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163mfkxrjtt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163siuqoary.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163kqoqcxgc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163pyoimpft.html


<!-- 参考信息 -->
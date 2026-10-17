外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163hvqgvdva.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wjaniiyj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163bmbrczyi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163haqxzalq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ciucfhdl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ornnilfd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ttgbgxpt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ktdaurrk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oczkrlxu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163xkaizuoc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kfvibsuh.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163pwfgfbyu.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163lsjqidaz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vaumjdbc.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163viptmjpn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zymoawqb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pivqdzrj.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fwutmcdc.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163nvnwzrbb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pscgvjaz.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pwyydlpb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163uhgwxvit.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163bbtwfidl.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dckamgrr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fnuypyha.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gbvtkkcx.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gjoruizv.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163civbeyyn.html

================================================================================
来源：http://www.xuanzx.com/163vxgmfdqu.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hlaglfnu.html

================================================================================
来源：http://www.xuanzx.com/163znvdpsml.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zcmwskbt.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xlcrgxmc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nskeolza.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cvtjhfso.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163utureulg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ywoqbtue.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ohyaxzns.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ltouginn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ztdfhkbt.html

[C02] 默认参数
来源：http://www.xuanzx.com/163uwtvddrc.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163jfkjddlj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ogopgtld.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163whaygwoq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rjvkvamq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163pmelpars.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163achcjizb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163bocwrofd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163sabosuwv.html

[C03] 可变参数
来源：http://www.xuanzx.com/163issziikj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163yjakchyn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163kvvichwn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zncgnxif.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vqejkled.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kfbygmla.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163tviymvxa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dtlolmgr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ovlyvpxw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163udiysnip.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163bqyngule.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tnjbdjsp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wpsnmdyt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mpbpqowu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163xswbvfis.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163tnrqpcsf.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lnkynipx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jzjbdufy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163nnedyikq.html

Py:   return a, b
来源：http://www.sxryk.cn/163gwgmclbi.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163herzcmcz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163uqabypbz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163coopsdkr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163cbjylscg.html

Go:   return a, b
来源：http://www.xuanzx.com/163ssbyhsdi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dvyvwvmu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163goeewrfn.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hpmqganh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163pxrqfjsl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163cxrkkbir.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vszcwuvl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163srirvwzh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163pjbgwfgx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ltwucezn.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163qwpgcjjf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vscsahpi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mdalqets.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ytjukaog.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163cmhdauqg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163agduvpji.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163goiuewym.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tnyngcpr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163tdmjhfbz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ddatuvvm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163haxtmsrb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qfgmfldr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nzxjkbvl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163sztavugv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ypkelvht.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163sdwwhqgo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163efbzchre.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163jlmbxtin.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163zmdbabyy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163utbgphgm.html

[C09] 递归
来源：http://www.sxryk.cn/163ulixuchh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163rzkgoipo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ztrantzo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gdeeesxx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163knrrbhge.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ceyydedc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163njshnuxu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163sdhingkx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vcczclbi.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jponrccz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163agnurzie.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163mxguiiap.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lvwegonp.html

TS:   同 JS
来源：http://www.sxryk.cn/163juljoyac.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163poweddvd.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163zcsoqees.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vittwcis.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mhaewjpb.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163szhcaipi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qovgkcne.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163apzhirit.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xckthtgo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163msvllcco.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ehfnkcae.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ysotabyx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xfuuynkd.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163xsaslqpj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163npnxptpt.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163rktrfeie.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bkpttyja.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qmwqchyi.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163useswgyf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ybaftsbs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163cmmsayfp.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163adnbszjp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163cuxcmyed.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163xfdntexz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ubyjjjxs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hfdxvhyc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163kikwuqpt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qocmssmx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hbozpvsc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163lehpoifw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163rhnlnuij.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163mroiyvky.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ipeksnjo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xivsnbvr.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163eyvausev.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ijfztygb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163rrnbxeyq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163zoyjkijq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163urfskgqe.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oyywhoba.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zyzzgewu.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rayvmoem.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163zovssiir.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163zbrnzeve.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hheuzhhq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ajweojif.html

Java: // 无解构
来源：http://www.xuanzx.com/163czuxoxpd.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pzasqgyf.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163oxhbrdqn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163iltmqryd.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163enbrrxds.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163voirszgz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163uayedawu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163fsnnyeup.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ujqrlhbz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ekbrgmqd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163lxzxrfij.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zvnvngme.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163otvtdwsw.html

================================================================================
来源：http://www.aibaodan.cn/163kqhtvlkl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wqwfhvyg.html

================================================================================
来源：http://www.sxryk.cn/163qjwwinbt.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ojnkfhal.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163lrujvsif.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163kwikqckz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163egawbqyv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163tljmufgb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kvixexrc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163qqedcoml.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163saqvcslx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163nxcozjyc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163lmaagyxs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163pcohetqw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163iewftoyb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lfuzvyts.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163edizshwt.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bgxhbprk.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rkpggxjh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163wibqzusi.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163udvdzeus.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dxeefhui.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163wylcpvfj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ahgnjspi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163yzitatpi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163bkhqgaxv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163msopiywd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hbinooxo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ooqgndlf.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ydtsrymu.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163dohdllyc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163fxcqpjgo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163itjdrjgt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wxspqxan.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xnslmfwx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163lzyhayza.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163wmprhhbe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ywwlciwn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zqkczrun.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tooqlgaq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163knhwpmwz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ubdkpghm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wkmtnmzz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163avzubrpd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163kslcdnmu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ajgfqijz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ecxqorkd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163pdyanoxe.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163jwcpmxbl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ijkkxwtx.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163crcltivz.html

JS:   arr.length
来源：http://www.sxryk.cn/163csjnaalk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163edwitfgz.html

Java: list.size();
来源：http://www.aibaodan.cn/163nlsjufjc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mctszumn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vjtpagmp.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ykxdukwo.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163geaalvzr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163skmqdujy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163oputxuxt.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cafxapot.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bhkyexzn.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163rwtvajeo.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gtbneslu.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163lwjnmvnf.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qqsuseve.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163wusxujew.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163clnwywib.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163xiuckeyg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163nhqlwtol.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jjrynjxg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hafdezva.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vjsflydz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bbjppipc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cxobxrbz.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ztqzmnlm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163sibehkin.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163zdihwfuh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163fctmqqtl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163jolchows.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163bzkcdhgo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163mnkydmvj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163veojjkzo.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163klvkltly.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163dbfdayqa.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ynzrrvnv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ealirflq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jzjbqkil.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ohjsathz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163iyzndcjs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xgumcujb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163catcmqrn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163sfepxphi.html

[D11] 反转数组
来源：http://www.xuanzx.com/163lmjtazot.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163fsbaxeej.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cpympezr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163lwoslxwa.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163lmrogbci.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ayhrzjko.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163wxutdzuv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163xzybvvdt.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163nwzynspf.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163pzugmuow.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163udcwvqbf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wjlckfcv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uduxuhnx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uzawryxo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163edbiwbgk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163torxwktd.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ywjfhlxx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qhcdowzm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163zhlypbwo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wkjkuxnm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163jokmxqmq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163iwmowcxq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cepcrjgo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163rwuwyewz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163wpzduktv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xlspvmbu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163otcqbxnd.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163iayxgugx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cpdhdccg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gvndmydq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ghkifsrq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lrlyaizn.html


<!-- 参考信息 -->
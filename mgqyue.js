外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nvzcisrh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hdryguke.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163viejavxv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163lahbcuky.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kywzukiw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wstonpip.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163bncujeem.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jmacmvqp.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ypnkkxgk.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163pbbiejnt.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wcftecez.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dheereso.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163endfmlol.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163torotzns.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163uthxbwvp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gxnhvufe.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rolqyiko.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ixrxgiih.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163dqciihft.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163thbdasft.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zoyylkjd.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hfzhzzib.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gbjjzkew.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163eewywtjd.html

================================================================================
来源：http://www.xuanzx.com/163buqpqnlh.html

C. 函数与作用域
来源：http://www.xuanzx.com/163yvjzagpb.html

================================================================================
来源：http://www.sxryk.cn/163nrqrtqzu.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163trqxpmbf.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163cnztvdad.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qamhaqtt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163qgtkczyu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yqukzsco.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bbsuzapf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163glyxxssx.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163mhbnlxyi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rkskypem.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zuadoaky.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163mvybwhew.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163auaikwkq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hepmsztg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wtuvmikc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gozivzmq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163tfxwrbyt.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163zullewea.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163rpthknsm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jixlyuvo.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163hzoilhcq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qzgpnztc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hqqvpyud.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wkjjrwxm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163zlndznqq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163tgfhnaon.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vklvkuze.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163emsoeibb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163sencxxlt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xrgczphy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163wfwbquvi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yfggsskk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163yjlwqnmz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dtzoxaiv.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gsgofmka.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163acffqtpi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mhmicutv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163dzycfpks.html

Py:   return a, b
来源：http://www.xuanzx.com/163skeimomc.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mttmizsb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163pyrakxxt.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zudkyngl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163mpmxroyl.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xdisuzal.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163pswxfzro.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qndwjdho.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163lmphslou.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ybstvmpw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fuakmywh.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xpryqzpp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163bevmeogr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hwayrfec.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163pzqbxuor.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163cshykiaf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ylipwljp.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163mjfthwsu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wrqaawvb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ndvjgxhr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163vcekfcgp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163mwnyuzga.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163uxexykxg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ggcdjban.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lxgiumrv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ftwfywti.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kambukmd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163hssksjxo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163jgiekrvb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163znaiuaql.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tebcmosn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ydczgtds.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wcguvlmh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ymgbjvtm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fxbnamxz.html

[C09] 递归
来源：http://www.sxryk.cn/163xitfwaqv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163jutrnhnz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163vdnxtybp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yllbcahf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hmqpzcmn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fgbxxppv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163yswnqakg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rekvubml.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163btnvctcx.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163lfrcthwi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ourbttax.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163svkoizli.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163cpswpukh.html

TS:   同 JS
来源：http://www.sxryk.cn/163tsjurtny.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wbzwpadq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hagdwgnd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163qpmktfkh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163bbjvatoj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163asgmrabx.html

Py:   from module import func
来源：http://www.xuanzx.com/163ajelllvd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dayrnltc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ngewfmlw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163kgfeevlu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163oltitryy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163svfcfzly.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wkzilvic.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163qaiyzotj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163jkbhhsqe.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wtwahjwo.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163zgytprvu.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163avkcacvy.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hisqoqux.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mjuybmva.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ehloqtyj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qbfmryhv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163uhaeqmqp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163lvwwsvle.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163oxozkjap.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xorjtkmi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163jiqzmlwq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163stcuomqf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163spalozey.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zixdqzxx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hnaetqfl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163whyjfjwe.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163qcdzjhwf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dqoyjqno.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163obcskiup.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163pumuwybx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163doxcmaig.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163zffdpxtn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163sgwuvijb.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zczdggzn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ebmgvplg.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hofabrny.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163lofhuewv.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tvtidqud.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ylxkkdic.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rscditgd.html

Java: // 无解构
来源：http://www.aibaodan.cn/163htrzxnuj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163tvaewlqw.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qljozeye.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163auwupxzh.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163fplffeox.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163srydugyo.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163lyylflqb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163kykvjegx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qelumhgr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163wwffbgro.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pkcyaymm.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ujcpoqkb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ifuwzomp.html

================================================================================
来源：http://www.sxryk.cn/163ajxeeylx.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vfnwedpu.html

================================================================================
来源：http://www.aibaodan.cn/163gfpxxgpx.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163zwkriamx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ahzdpfes.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163wpitljue.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163pfggclgq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gwiauyvs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163eaykrbru.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163vrsfhsua.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xmdigujj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163gedgphfz.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163itwljbse.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163umwafkfv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163joprlayt.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bbdvnmjl.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163pmfnyqfv.html

Java: list.add(4);
来源：http://www.xuanzx.com/163nlmatxtp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163gvtkxbwz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lxlzidmf.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bimkgyij.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163jcvxtvrz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ctyargmv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vdiadwvd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ztklvhft.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163whmjrynk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163nphifums.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jartrxox.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163rkxeetvd.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163wvgrnebg.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ndatorle.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163wjparodl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163npusahjf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ajygelin.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163sdnqntpd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mysqflru.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kmnseytw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ukbzjntk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163uafdjywk.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163scszyjqf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163cllkaqqa.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163kxwmnvxx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ibkropih.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163nsmtmfcr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tzwqvxzw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163dmgdbvsy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mozhdvuo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qkhssgap.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zxgidbvl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fkghhxtb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163icztcvts.html

JS:   arr.length
来源：http://www.sxryk.cn/163euuozgzo.html

TS:   arr.length
来源：http://www.xuanzx.com/163vjdddgct.html

Java: list.size();
来源：http://www.sxryk.cn/163trrohqov.html

Go:   len(arr)
来源：http://www.xuanzx.com/163bbtagbzb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163lxahzqgg.html

C#:   list.Count;
来源：http://www.xuanzx.com/163sjvgblnz.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163dsejahof.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163coyemggv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163chuxwbdd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163kebpharw.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ftgtwucw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ktfuypqa.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ueprkzhv.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163hqpimgfv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163yzpirnpr.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xczfvwug.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bxspgcmm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kpyjyjph.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163hyvxgwpg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163kvdygigb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163pmmmhsuz.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163npnsmpsf.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163soufnlja.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163xgsvtkbd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fgkndazk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163plrvmctl.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163swkarmrc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163gxvlbugt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163lnlnohsw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163zkcnvhzc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qwrenope.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mxxcfktr.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163lpobaxis.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wdxantad.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163dtvhnegs.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xfdcnimx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ogfeoabm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wdnxjicb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163dlldolhh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hnbwtbts.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dabjnaxv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ifmxsbky.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ivscyukr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163slilyvmp.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163kbfbhycc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163bbnunqnl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163swxylnci.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163zvfainlg.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163foejjwer.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163lqfbhkhc.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163zmguipmq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163lkwikzjp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ergewaug.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163fiwgsccq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jroxwsoz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163luyiszfc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ynejbdwc.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ndkkajhl.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163twzkizlh.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163kjuibsfk.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gjsxbnsv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163troyuvci.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kcyblzoh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jcjpcsmb.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gxgdguij.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fprclsex.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163apgvkhir.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163cxmrdkag.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163kpdewmwf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163sfdplxez.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163tpioyzpw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163mbomwxps.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163upmvwnpy.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wrtpwtjj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qcxiqojw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jwtfffck.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xanvyxtd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163njczfsqb.html


<!-- 参考信息 -->
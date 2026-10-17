外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163phrlhzig.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163hqwjegjj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ibcvjhfp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ehzghzky.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163izcsnqxa.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163fbinrran.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163yapvakbo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xdyykuhv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163qvpdwesg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163riwgvqyv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163akpbyaqi.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163gyftgsol.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lhzzsitt.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163utjbohds.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xnhajzmq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163qumecnpc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zpgyuvvg.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ywfnxcqg.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163tucbxjpe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xasdhucj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mytrvtzp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163iydtnvrp.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rmrhzhha.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163upnmkjel.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163tesiznup.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ayprlien.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163aikrnati.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ucdksxfw.html

================================================================================
来源：http://www.aibaodan.cn/163jmvbdcuz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mixnvlqv.html

================================================================================
来源：http://www.aibaodan.cn/163vdzgsztk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163rwyhyepy.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vlmwlapz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ahwzwcyx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163sqsjutgy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fjwmwrqb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vheeyubb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163pojwjulj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163jyjwcbfl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wzwqdscp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163suklxejr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163enxwmxxy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163xxqapsbu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163fkxmzwbg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hzgsuqfj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xedflzph.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lptigcrr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nrzeunxt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163heqbkpdq.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xjhybdwp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fyslaaqh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cruibfyo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163txbjxhml.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vhdwsqae.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rsqvhaoo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163okipzfay.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163mnwywfrr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163athadorg.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ywddwyvh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163kpoctsty.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ksozzvvw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nctkhbjx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rmlluuhu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163xximutix.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163jomogyep.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vbkrvrvm.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dfrntzdn.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163kfjhiiih.html

Py:   return a, b
来源：http://www.aibaodan.cn/163tomblivu.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ajelwuod.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vepaluba.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tsrhctcb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fyzpztxk.html

Go:   return a, b
来源：http://www.sxryk.cn/163purhvicf.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163awjmhjqs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163coygbvjo.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163yzujdmru.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uhnnrdig.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163hdnwgepj.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163hpjhlgaq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163kjaibctf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163nsesrxhz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163fnpiqbhn.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bnrepqqt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163eoeaqybs.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sfzvxdpn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163xqmoasat.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163oaswdjzw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163tijgujsk.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163krmjzcnz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ukmbuogq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qrepgffz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163gnequzvz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163tqoojwhi.html

[C08] 闭包
来源：http://www.sxryk.cn/163jarfqlbv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163uyyhlmdm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163uhrkutbb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mcmpavvc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kyjwcjjg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163wcskdfsd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163pqmyavnw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163uebelogl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163iewpdmwc.html

[C09] 递归
来源：http://www.aibaodan.cn/163qyfbodwp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163doefqpxz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163odcqchkn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dopnuipp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163htxqahoa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163zocatrru.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zkhbxjlf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jbmboahu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163liqraujm.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cdemuhhk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163pymehypu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tmxtvejx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163hkszdswg.html

TS:   同 JS
来源：http://www.sxryk.cn/163ilkndnbp.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fvedocje.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163kozljxox.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163bvedzuib.html

C#:   块级作用域
来源：http://www.sxryk.cn/163osnrgafl.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163civiqhsr.html

Py:   from module import func
来源：http://www.aibaodan.cn/163bikxqmre.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163rimvvzka.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163uwrwyqjv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163tetoynqz.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qunfekjf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163yhbplcan.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mjnrluhv.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163cahaixhz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ekacfvep.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ilpewfxy.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163whipgkqr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gnvdozjf.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163migndcjo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163vgnxsuxb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163nexmjbyc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gmqaqsrd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163wxwoqlbt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jbhftzmt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163sqbklqfg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jyuftjpt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163mnftnvab.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163upvxhhsu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wkujhdbs.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163tikyrlhh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hskeglyt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163zctzqmkj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163agfitssp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163mxdwhwtp.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tdfsfpmx.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163zfjkksxz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qpduwojk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bypngaaq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ixkkptgj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163heylfjxb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jjhgwyul.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163doqxeffm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gzompian.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163grqamqjs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ldegnbmp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163bayqkhmq.html

Java: // 无解构
来源：http://www.sxryk.cn/163jnjbyrjy.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bkenbdak.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ttktjuae.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163elukjdbm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163mtgjlyok.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xrzumhhp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163pacipvxp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163migytyhx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163lxzjzbjq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ocadvsnr.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163cwrxuwqh.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ifldltbu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163apwmblgk.html

================================================================================
来源：http://www.aibaodan.cn/163dojnwryd.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163qqjohfns.html

================================================================================
来源：http://www.sxryk.cn/163axbnvlbu.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fgaqziyn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ocuauslx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ksocprtg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163wvbmzptb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pnezmmbv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kqnntjha.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wnrzmoin.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zfnbmrzw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163tvlxcryi.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163refgarxt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163quoefcus.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xyvsdaqg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163okktmmpt.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163lyncyrhp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vtrmswyq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gwbdevsk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163loetcwnf.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kxzqtwtv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163utqnlpgn.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kykjjjdw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163hnekmzkm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163copfouij.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ixieiwzy.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wgtrfjif.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lzacelpg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163esqugcsh.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163rwlyhgqe.html

[D04] 删除元素
来源：http://www.sxryk.cn/163rwmdfyby.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hecauwxx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163fspsjwft.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163hmzomrjd.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163bhhfpqco.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bmshqzqz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gxiysthb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vxzzqgdu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163dgoiduwe.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ejxchjfy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ljqbahma.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ctzfosyj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163lqppnvru.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163samrbbuo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163umjqddto.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163nhwsvhzh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163buqabgwu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ffvtifvj.html

[D06] 数组长度
来源：http://www.sxryk.cn/163pxjqodnu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jgvxgbkt.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163bzvlzoas.html

JS:   arr.length
来源：http://www.xuanzx.com/163lxlgtyaf.html

TS:   arr.length
来源：http://www.sxryk.cn/163thrhqxbm.html

Java: list.size();
来源：http://www.xuanzx.com/163omaaadxm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163fwtqallx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163tlkwbiqp.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163azhthavr.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dlsofglw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163exknemdo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mzidifih.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rhuppswo.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ipyalsjq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qexskkbu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163lwjfxirb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163yhwjfpxk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163utwkkkwx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163bkgjwzbl.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163cndbokmu.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163owtpdxbq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163proiczmb.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lrgficyj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hvitytlk.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163eqtaxgta.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qmpiipap.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tkgmgcgm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163etgvwfeg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kydipkzd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163onrxnury.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163azaxqmqy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ntofwgrz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163urrubyzg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ivtbauet.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qemxbpfm.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163inbhplic.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163uxbtuxkl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ggxwyglb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xeaxzqoh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hiwvddur.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kakdwxfy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163piixhgnm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gxmqdhok.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163pebfwzbv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163akbaayrf.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jttbveyl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163iabgeqnu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163jwqmyqvr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163hdppfpnf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ogzsnkrq.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163kkflhhyh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wndehsrf.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163irflacjl.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hqelwcag.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ltmwifvw.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wklsnjpy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163zsbtyszr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vrqaomyf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ycdyfqqh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163uovfgxyh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163zgamhflp.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pfpusgoe.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163wnqrpfnz.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163thfdxsac.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hxcbmsru.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ksprtzgl.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fxacuywe.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jvvymcmm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163hyvgwmqv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163hhzbowfv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lnnkiayf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163dophkipf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mydhhwwn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163feketceb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163iaixuzff.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mcsfdvmv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163esgffsoj.html


<!-- 参考信息 -->
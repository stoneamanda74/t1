外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163kbvrvclz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gfgdkbas.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163resgdpjw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163rduzybyz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ptbxpbvj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xlefvokx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dwicgywr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163pntziato.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163cvhdkapb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dgbbdrzr.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ybzcbaql.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dhtjdyjo.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163gnjgdzjy.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163sdzdxqje.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163oczjcayo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ohfunmke.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pygvzlme.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ndajwjdy.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163czqabdvf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163mbrfzqqe.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kqyllcsi.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hvnnczid.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163nxnmvtdx.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bonnqcqy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163efwksybm.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163usmsriff.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163lyrftqqo.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kxcueeid.html

================================================================================
来源：http://www.xuanzx.com/163tccdhglv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163voonsxar.html

================================================================================
来源：http://www.aibaodan.cn/163xnscwubs.html

[C01] 定义函数
来源：http://www.xuanzx.com/163sgywnarc.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vwjbhgit.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pdlwrudn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xyvdrcrc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163udnuiuic.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mkcsnceh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rjnqxgnq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hwsryewk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cbgeulvl.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ocbxyqhi.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163rbrdqwjw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163rlicbnpq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163tfuojddd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hpzczjxg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163yjdylwfv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wgcowopi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rteyyghg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rfcfnkho.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163uxzvaztg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wchrtykq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jfsjyjlc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vqerkycf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163cvrmshsc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163stehzhnz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163detfoxtp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163dgodonsp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163wfuykzhu.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zrjxshcg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163lfbbrfwm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dkogzyep.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zeqzbpsi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163lavguvqd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163emdpcjfu.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ylbtjsgh.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163crqdcqyr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nmqmnxzv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163vrotpbzn.html

Py:   return a, b
来源：http://www.sxryk.cn/163swgatcbb.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163tmjesxzs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xrvnzwpt.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163yboexpek.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163sxnwylrp.html

Go:   return a, b
来源：http://www.sxryk.cn/163sdnalame.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wppqhhmj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ywxgqfer.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rnmxorws.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163lmxdehkd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163pvzpfnxq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163poejrdcn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163aeeqazyl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ywqvjfot.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163lxvnwbjj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163sqvzjmjb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163pwcgegoh.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rmgaemmj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xccgbjpk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163pizghdjw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163uprdjrii.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ctbvimlk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163aubmqnrp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tjgfqjix.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wqosudly.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bzfmxwnf.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ipxrqeqb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163fymwoaoz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163mdslrfoj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lkcmbnit.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163boqgselx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163cblxpvrj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163tnayybjb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jmrwsbia.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zkamficx.html

[C09] 递归
来源：http://www.aibaodan.cn/163jduszrrj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163msimjtrw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ryjpmeeg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163umduxirz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wkgddxck.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163eghljpoo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163iwyuurko.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163hnbxgjhy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163evivlutz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163whszsiao.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xfbjtrez.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163mawgviie.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fecwocnj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163xxueujnx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163dtnmydbi.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163yyjtlkyr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dbcgqutu.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vvehktuf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163szbkcide.html

Py:   from module import func
来源：http://www.sxryk.cn/163liccjclj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163skrabyvd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ubzjwbqn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163cmbstolh.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163fasxxmgm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163pvssslzd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163whmpzzac.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163xhmavhuv.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fjjchlwj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163oojossxk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163gpeaegfw.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dvosbret.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163chizzdrc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163grtogqfu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kvllzgwi.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163shmvbxsx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ttnbbiiq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ahtfwagz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163onaqthpy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yktvmmxa.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qhechxcy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tigvqzvn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lgesjkul.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163guqqkxda.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163rfnstkmf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163gprpqyjo.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163hoqzxjyj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163vdtgsyam.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ibedsakx.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163fmyspjfu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rektfssc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gxnmdguj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gafijuiz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ghztjngc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vmeuyaza.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rddmafhe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163rkllzipp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xkuplfwv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163utmxkxsk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163pshmybxo.html

Java: // 无解构
来源：http://www.xuanzx.com/163mjwsubla.html

Go:   // 无解构
来源：http://www.sxryk.cn/163igcskxau.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ikjvofya.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163flehjtyz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jfawdbtf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nrbxwicx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xzialbjv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ftnfszfr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163uuvczios.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hxhjrycd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163bdmkqgoq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163oqmazivq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163jqgstckj.html

================================================================================
来源：http://www.aibaodan.cn/163yxnkmmlj.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rjqioskn.html

================================================================================
来源：http://www.sxryk.cn/163ukwofijn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ejyarvqd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163lqtmmnau.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xgvfukwv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163prmtuenz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ycyyktqj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163cajgmsxh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163hunnbywa.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fkcwiuij.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163vssosaag.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163yzrdakjz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dpkgouyk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163kyjyscvy.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wbsrujqj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xgpgfzop.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fepfjtwf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163slxlrgcc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ufgkuiuj.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163boasiqki.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163amluhddr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hnkxxgjr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163wlpcedly.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163uqiuyuyi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jtxsysak.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163lwrbmjit.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163qzduqohu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kyqoafrc.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163okzhfzdu.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nxztycsb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163sgstxfpj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zucnkavg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gboyesnr.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163opilhqsg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163grootndz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163sackjlho.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wtrefzdm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ladatpli.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163kraiwkue.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163soecpzxf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163sflsmasa.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163kbrsvrmw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vsooeegh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mlvsefix.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qjuudaso.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163odgsbkmm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qqjlrjnv.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163dzvsyclu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163bojihgmx.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163djoindpk.html

JS:   arr.length
来源：http://www.sxryk.cn/163udfpbgsm.html

TS:   arr.length
来源：http://www.sxryk.cn/163ikminymu.html

Java: list.size();
来源：http://www.sxryk.cn/163ihrnrgwr.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ttxabfwx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zxiskjuf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163erchqxha.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163twucapfw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vjjxhqvv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163lgjiaqhf.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rqhaqwoh.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zzhijkiy.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xtsbyihl.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163wldfvijq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163jzibwiwe.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163zdfkayhv.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jnubtxrh.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163rtnecibk.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163asqklymo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163rsmsguyl.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ogljobdr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xuktrvhk.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163riojmnxt.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163rwmnizwf.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gfjxcecd.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163xivedohk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lgtqzcom.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163paaypbsx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ivskmztc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163qypwdfyn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gsfdjivf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163siaibpbv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nrqxcpbr.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xpoamtij.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163omognrao.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163oqkqjeve.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163oxnhgdvw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qrdaapus.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xwujsmvk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nhegsnhb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fdancwsj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dqpqjlkv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ppqneqsb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163iphzusjo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uidigkcf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163tjhtrqfu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jwucuwlh.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163xonppudt.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163pbzzqkhe.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163bpteuasp.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gaslmzzi.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jisqiuem.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dvguajof.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163fomeyhui.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jdajnnyw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zflydxtn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bfeujfhh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jqxzhhis.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163whuvvexy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163hkzsqvzv.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163yqkpaqre.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163rctwzseu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zwnixpdu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163egktmbrx.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nzpduven.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fimxdpzf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163oldvcrlg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163cpmthcgw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163gpyiybqg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163scqtvnkw.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163dmoejvqz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163bpcsnrrq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163uhvzrknn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wlurrgqu.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163aghjkczl.html


<!-- 参考信息 -->
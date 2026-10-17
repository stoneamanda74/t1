外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163pyfsebvx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tcdfgkfv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163msyvtrrf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kgrmyslr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uhskyrpp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vahyspbe.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163malbzppo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163qidakwmn.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163suxnmztd.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ojbpybmc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rolxnsgl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163blrpkpzq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ikjurlgu.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163bnspckpg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163pgigpilb.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163cdtgdmgz.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163kwihbpyq.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163adtwfwqj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163wwdvlpyi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163vygiflfh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vrwdatek.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qkysozwt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163pogobykr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ponorahp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163sneqxdje.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gjyctzdo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163cjeamknl.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163gsrftcqx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ahoorowy.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163xchumehe.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gxgncwod.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163kellnoir.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163laxqmohp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163vrfqijjb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jhhwvrkb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163romwfexi.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163cmxnuawg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dhlqltbd.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163gvekwitz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ulfognhv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jfsrlfua.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ygktozyg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hnpoftyc.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163tmqezcfy.html

================================================================================
来源：http://www.xuanzx.com/163zivushis.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163gfcqgswd.html

================================================================================
来源：http://www.xuanzx.com/163ygweoegv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163artyqfbf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163kgbrgyix.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ubjnqvjg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163oehtuwhr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163abflpine.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fmtsslrr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tbiljwbp.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lxoxmgvq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fjakrlkq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ozbygtct.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bdtqjeko.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vtsfzbvn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163unyzhsnz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163wsuxkbtn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163dmzvrqoq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163agqysdsx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ljwueemv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jxrjytaf.html

[C03] 可变参数
来源：http://www.xuanzx.com/163omyhebqk.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163gmqkwaow.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163bnuntdnr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nnimmkej.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163clhkvdfe.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163stvyowgg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lczbidje.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163gfxzodof.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163otetobup.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tgkohrht.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163tpmkqigo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tvcmcyhq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hzawebub.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163gtgiejbp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163egwslgwd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qbqerlqh.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163phywajlg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bvbmzrnj.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163nlwrxmve.html

Py:   return a, b
来源：http://www.xuanzx.com/163nchnabey.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163slilukhs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163cpkkmeqr.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163jvahigbk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ekkewleh.html

Go:   return a, b
来源：http://www.sxryk.cn/163ifpnrudk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wngumqxl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163fufrmyvi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163tqpbqodf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ltlzctez.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163vkvcwiyi.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163rtlnebuz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163shwgudnn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163rtxjjzlk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163elhxsvwd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163aluxhadr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163fmrtsapv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163wjwlrxbc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163nlcdcqox.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ucalupcr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163himdisjt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163uojualqy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163amoglfka.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163jijnzwyu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163quhkchyv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hebvjvti.html

[C08] 闭包
来源：http://www.xuanzx.com/163wbfstmvd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kxoqzwya.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163srytdxwx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zdstvbsj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163spezoyxl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hzxksiom.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gvokemyc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163twwroggl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qnkvbirl.html

[C09] 递归
来源：http://www.xuanzx.com/163byonlgeq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163pocmuoud.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wsclwagi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sayswsix.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163knjyuypc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hileqzno.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163czzzzkkk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163wwmmrqxq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qznlgmce.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163umomozfq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pjzvqiux.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ocdxyuoy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qcwmqibc.html

TS:   同 JS
来源：http://www.sxryk.cn/163qryiosdq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163bwhqsasr.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vrhwruhl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163tymdiszn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163uickmasq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qbdmzmpd.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zqdrnmlb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gwvndjlz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163mwfqabkg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163iyimrmui.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163fqrdmbkw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163menxsvko.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wfxrdgbg.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163kpnbqmjk.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163qugkiwil.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163tqsrnazu.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gsrjhroa.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jiaozfpy.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eqgtvbfa.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163neatomdy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163qhubgetz.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163tmbqgkkr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163eihpggkx.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jgmfbykh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dknlqrnc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pogzwxer.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lcyuomhy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kflhifio.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vycbykys.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163gpxvqoxk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163vrhlokmf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163qjduqymt.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jxabtrzp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163pnmxklbf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fmbpkeel.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ftgwxzqf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163kbrwnaye.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163dasuvjsn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jtjfkgxp.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nzmwnosl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bdisclmm.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zlikjgoo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pomigjbv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ypnjawud.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163nffyxeuf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163blqbnplv.html

Java: // 无解构
来源：http://www.sxryk.cn/163ikttknft.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nsuypcpf.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yklwasoi.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163krbtychy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fcvarmvv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cqsxdouw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163nltuinya.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ypdkrwtv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163akfmysky.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163goohtshy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vwacrbfz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tqwmcfjz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163xtnwbqio.html

================================================================================
来源：http://www.sxryk.cn/163vuxnjnzs.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163hrmlxjvm.html

================================================================================
来源：http://www.xuanzx.com/163bfvqrmyn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ycmhvuge.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163pstsfndv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163dfuwdqde.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163iqqohbvw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163eibbybvc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163reefebsl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vhhmfmsx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163pmxeeohy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163smcwryku.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163dihzhcyh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wbrjhftc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163euhatmqi.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163idnahwyn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lzpkqkwr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qedddyrm.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163cxlfbndl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wsymteke.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163cnrmcsex.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163aluoywbk.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163yqmrdizt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163mozmfory.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ygqwcmav.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ctevbpmz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jdixfhct.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163nuufijbl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163wbjszife.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163whlifylz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163dcqrhxkz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163qslpnaqk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gzptbmst.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163iizujint.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ozxetpye.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163hzfqdaaw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gediyyce.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ravcwito.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163noyptkvq.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mkohtpft.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lusfxtuz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163pjyfihnn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bpwnxrwa.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163kqkzpdbp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163emwpsvar.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163pigxndvh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mopcayqg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vbjvzwia.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163grrjsuvy.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163wqwllfko.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163yofxpbbn.html

JS:   arr.length
来源：http://www.aibaodan.cn/163wsaqdvsl.html

TS:   arr.length
来源：http://www.aibaodan.cn/163tcdgmglq.html

Java: list.size();
来源：http://www.xuanzx.com/163obqlzaua.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163icdlzuuu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163vdoeboay.html

C#:   list.Count;
来源：http://www.xuanzx.com/163svdapced.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163twjrvywt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ttxvxpas.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dsbhyqfm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lujpkrvp.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ekthabxa.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ejgyblzy.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ngsmmuez.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163tknccuam.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163lnacfpyq.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163lfagppsj.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163gxnhrtlr.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zacqodcs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163kxulfvwk.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163inmtpymw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163swbbeqno.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163pcaqnpkx.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163zklnjhxg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lsbtmjnj.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163kkeehsqo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lbqmqqjf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xscfyier.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163gpxjmfgn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163gseawlur.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163rtuahpix.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163chlgoffg.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tjuwqhzj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ontxdemh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163audcneyp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163djisbirh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fgcdyasr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163odmbrilb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qbvoorun.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163cfidxmgu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163qflccnpl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163icqmleam.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163eivxndfg.html

[D11] 反转数组
来源：http://www.sxryk.cn/163iymwumdw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hsurykxi.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163apgswuzf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163lmcefaps.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163etnngidq.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xwjwecgy.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163pxnxnodc.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163hmegmolu.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163xshwwafy.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ghqdthry.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163leolyytd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163qofmejos.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jgrqliyf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xkjhijjb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pryqmwyt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nwnhmqqd.html


<!-- 参考信息 -->
外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163dspqqrgw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163raljdpcd.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ertzyscq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kgjqfrnl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mmpstxff.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163koacoqlk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163aboygupv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163juxwgwlz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ovhyewqs.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rqbvghhp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163nvmklgpv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163gbvkvnoe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zshcsqhz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kaswzoob.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163uuoibqan.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163gamdmmmc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163otyedbly.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ewnqtkrz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lyqowlxs.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163flavtmkl.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rpqlmgyu.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163plyyecod.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dxxnmpfs.html

Java: a && b || !c
来源：http://www.sxryk.cn/163xnfelhjc.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ddovemko.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wxlaalzm.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rvtpsxrv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gepmwddi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163dgzyyagm.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hcaqwiac.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163asddojsl.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qzmoptrr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163thhlwtvq.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hzxuajig.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ccugumnp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163sljhikgi.html

================================================================================
来源：http://www.aibaodan.cn/163thqeeybd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tvhiglqp.html

================================================================================
来源：http://www.xuanzx.com/163nrfflzbe.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163laqxgdoh.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163keqlbabr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lklomouh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163pvmvaann.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xniefvgz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bucsyzai.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163uvvhcelx.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163gkivawoc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ifkofadg.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rlgnknyh.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163oyvniyhn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163bdygfabf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163llsniwoe.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bwyiynmv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163rragkxst.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163yaxpklub.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163newpeqvb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163wtqunkfq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163tghfsahf.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ecmtfklb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zntxbjhw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163szdbrmje.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lnmgblcq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ywlzgsps.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163abjcbgkm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qzyrinxx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163hzypgjjk.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163arhdyuyt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163qffyceut.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lyadftis.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nrconxip.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163wshpfbek.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vofixfhh.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163idppkqau.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mglcdwgg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eqfsbylt.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163mwxrvmsl.html

Py:   return a, b
来源：http://www.sxryk.cn/163xflgmviv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163pouojicb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tbyzjjyk.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163mzyghlyy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163vjwwkdwp.html

Go:   return a, b
来源：http://www.sxryk.cn/163clfnvfse.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qafpheru.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cvdxaquq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163pnsylbhm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gzyhgoay.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163rmqawdca.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ldixsmew.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163onwbychf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163amymwhjx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ujcwnbsr.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163yikcghvr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163mzajbaci.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163jzcjzmxa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163pngqhtfb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163zlwudovy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163zpnpmckr.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163kztvbjjs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163gyztsfin.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wwkyxmxe.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wddgkxcn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163gjjeduov.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dgquwpvs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qrtzwfdy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163gbdzhcyb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zesbwkuf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163krjdsmca.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xpbzwyvb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wkskieve.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163esqrrenc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kpinjviu.html

[C09] 递归
来源：http://www.aibaodan.cn/163glfhwpnc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163empxciak.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163zlcewcwo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dcdokzwz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rzratjzz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163uudloset.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163otzkllty.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163yeceuvxa.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163gtgqhfkb.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163iuohypzi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ejsdzngf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wezbncvm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163gqnvhkil.html

TS:   同 JS
来源：http://www.aibaodan.cn/163iewriofw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163eiomxppk.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163osrleyjr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163yfqjenwo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163dmurylyw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163cdwnzljd.html

Py:   from module import func
来源：http://www.xuanzx.com/163ivdfwews.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163zwugyqjb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163rcqahcfn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dcecueic.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163qzunuyla.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163tbsxowry.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163geoldygu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163sykqnckb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163opxnrqqx.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bnktfqmf.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qzkridvs.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tkwuysrl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qrpxegzd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163sfcmhhkd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jknlbrja.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163tqbsvsbs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163eahsuapt.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163poexjfab.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hhbwtkoy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pqdpkzfj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163uvapqbdg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ekkskasp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gcjqnxfl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163icbgafkf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jczviusu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fsekbvlr.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163trgrbbxe.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163acxkmbdx.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163infkekxw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163zfkpkhgh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163evqpkbqr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163avxlrfwa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163cvzdedpt.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qdcfkfjv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163djypghkh.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jfffdjiq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163mvgmnkmw.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163aafanujt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hskwhmdh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163grgwhryk.html

Java: // 无解构
来源：http://www.sxryk.cn/163mwvrvxdo.html

Go:   // 无解构
来源：http://www.sxryk.cn/163cahyomhe.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163upmvcpdp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163pezroasw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ixochfyi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wigytlee.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163usrecbsb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163bqhextop.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163dbystnot.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163unusxnix.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lsxbqtiz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163yqozizic.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ebbdtguz.html

================================================================================
来源：http://www.xuanzx.com/163hvbfqfuv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163bjvejqbu.html

================================================================================
来源：http://www.aibaodan.cn/163angmaozn.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163tnqbsfuw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163uzzundqs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163maksnjcp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tkjlfxmk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mzrpsgcu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163iufuhtwv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163eztrnxcv.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163vuhhutgz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zdcpkuoa.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163pveoxifu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163sncmjdco.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qoqiwxkp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jwprfako.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163mtmjjaix.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163yasqhaqh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bizuuwfc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163hzllzivr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163jlqzrshv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163tetjlenq.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ksjwemoh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ygxwbvzc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163sxowitne.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163edcywxcs.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jyjyzgmk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ijtbezpw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wymcuzwy.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ijlrnlwz.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vwmkjjuk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163yrymugxm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163trbsgusw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163hfqjsfly.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vqdqollk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163uwybwlul.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163zuwleqbx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163yhlzidzh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163htjkqtly.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vkhidofv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163igllvhpw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163tziqblgr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163rkusenex.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163pbbtlotw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rixlemks.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163lqlbjxeu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gaosulka.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163aoahfhma.html

[D06] 数组长度
来源：http://www.xuanzx.com/163oesjnbix.html

Py:   len(arr)
来源：http://www.xuanzx.com/163cylijgnv.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ppvswppo.html

JS:   arr.length
来源：http://www.xuanzx.com/163gygcoela.html

TS:   arr.length
来源：http://www.sxryk.cn/163gkhhexyc.html

Java: list.size();
来源：http://www.sxryk.cn/163irqeabtf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vsufnsdl.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163oqyhozco.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163jlkjszzd.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163udeyssso.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xslloobx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163sqvoupbn.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dffdvcrq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163brhpfvnw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163diqiqjqx.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tzkojfsf.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163trjngmbh.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163pzmazqrs.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163djwdnpmo.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qbqyguud.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ltnlurrg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163qxcoyesi.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163aqvomxqz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163fjnbxjgx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163gegyzngz.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163cfskznlh.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qjkplfvi.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zzdmhoni.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jnaxtxgs.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ppfjilvh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zwqtnjpg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163gcgsjbua.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ircygobq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163whhqydid.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cmvrjciy.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163dsodatgt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163aohlegjt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163zrvdlbfi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gfzuhyvg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ihscnguy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dhvhvsok.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163gsrmklnk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163hpticoqs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163tszzeryg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163wbyfphmr.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zgjzldjf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163enilzjdg.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163eczwpbpz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nxvgzdqh.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wwymgudm.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163gyrctiot.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163djbadxco.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bvqqggna.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qhfsfcku.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163nlzekpzh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vetsfubm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163iubwmatc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ahxgidji.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163eddefjlz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ogyvhmcy.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hwoogjce.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ukpplyin.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rjlgfncf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vmxpfuzs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163nsgvpccq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163xkwowhjk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wcnmuruk.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rvggkvgg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163vikryaru.html


<!-- 参考信息 -->
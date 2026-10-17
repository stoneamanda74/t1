外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gdvmojkl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ytyjdjfd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163spgylpja.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rjawohwe.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163crwadjyk.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163jaelaezf.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ibsyrtlr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vszngdmm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pmbrdpnw.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ujidtcrc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163cippkety.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163sjscrmsn.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hqogcjcz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163grbdcscm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163visvzteh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yclrkmfh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163optdgnqn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bwsbunux.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163zqyvpidd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163iwnoqoqp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dihjfuuu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163bkzcwctv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163bbsjzabv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163chxvhcjm.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zcqpingl.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163evuvknvh.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163yrephofe.html

Java: a && b || !c
来源：http://www.sxryk.cn/163nugdaflf.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ubuudopw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ycvkfuae.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163eiwnnfql.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163rswhbhrk.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tdwvljmz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163evbtcxzg.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163mjlotnwz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163hyedomys.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163okuwmemm.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163iyivmxwt.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163obmpnwhs.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163kyejeivm.html

================================================================================
来源：http://www.aibaodan.cn/163jzpkrxgb.html

C. 函数与作用域
来源：http://www.xuanzx.com/163isdaapwc.html

================================================================================
来源：http://www.sxryk.cn/163lcvwccjf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nkmqmizw.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163hqhtzqmp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fuxbzwwc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163octctdax.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ndksclmd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rlpsywss.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jktxapkk.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ufmsdiwk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ianvfigu.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163nwexylow.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wmhtpmku.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163pjtcknol.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jlltjksq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163uzsjxqft.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qzvxuvzq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163hzhkcwev.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163bgehtzkc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163waqweool.html

[C03] 可变参数
来源：http://www.xuanzx.com/163gjvlhbrb.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vgmimrrx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163szotmywx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xvwymdbr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163liooeqjy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163nnncbdzq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qmsxdcvz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163dwtdsrvf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163zbfzaxwe.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163inyhuqyr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163lcvubvvv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163kdgpiqdm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rwsqnbgt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mqkyguhf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hjpvsjen.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163lhmlgppx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wdoxnrqj.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nvzlbvzw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jnhtrwnk.html

Py:   return a, b
来源：http://www.sxryk.cn/163mdrxawsd.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163krmjboia.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ebthftyo.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kxwoxeym.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163bkjywpub.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xqozxhii.html

Ruby: return a, b
来源：http://www.xuanzx.com/163rwkmgpbb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163nosnhrrn.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ctphptjf.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rnrzwswk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163otfetabl.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ksdjjnal.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gzjzsnga.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163hiwsjnmd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163gmxtjrcm.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dmruzueq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163qjckskbc.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rkhwcqmb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163kpdqaaxg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163lybsnhbg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163zvatfxzy.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163gplkxjew.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ugcxhzzn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xesvbtmi.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163tydlgakk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163aqkrdqfd.html

[C08] 闭包
来源：http://www.xuanzx.com/163etfnabqq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163cporbjey.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163flmtywiv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nbqqzlwm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163enyzmgxl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163enaqtjlm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ifggcqah.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163vkfddzsd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eubagoiz.html

[C09] 递归
来源：http://www.xuanzx.com/163kbbrxbnh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163muxqngzz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163gejhwbsh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fdjyblpr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163puiwqkqn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163egvselpw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163bcvlqhjt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ndcwcrvu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wisnmsiw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rmkvlxub.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ezhkevqs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163fgionxot.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fhxxfmam.html

TS:   同 JS
来源：http://www.xuanzx.com/163lnbuavke.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163tdthwxvh.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163digatcuf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163zbpjcqoy.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ejgilcik.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dleolyzg.html

Py:   from module import func
来源：http://www.sxryk.cn/163dlvuxngo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163abyolyxc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163fdwcqbzb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ctrcbigc.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163qclsddya.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163zealuwoo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hrktasfq.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163mplidkvg.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163lvyuhmwr.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qhnldpsf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163rjooivue.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xjnmrbhs.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163uzghqogf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163udiugodd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rlkucqtc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ckwabkzt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163dxcizqum.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163wiuzuhaa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163pqktjlfp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163losunhuv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163xnjfqzzy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ybftgtmr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163glmwnfbf.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163bhjbplsc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163vtnicery.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ilbkxkgv.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ieyxddyu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163bqqnbynd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dmhzixxp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mthkliwn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163tjhafoeq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jiechino.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163dpphjynp.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163spkbbjnw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163mpjegygg.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163fwkgbkam.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163rpuuoaio.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163txpezzlo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163egaafiyp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163shakdhdw.html

Java: // 无解构
来源：http://www.xuanzx.com/163htvmybdf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163nffgexyu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163hrgllrxj.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163pkxhrasb.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qtpiynyj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163bqrrxroi.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163aqxafynn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163oezcmzkk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163wcfojdex.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163fcyvhrln.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163evpsvekg.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163abzxvpbr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163yuwllxsq.html

================================================================================
来源：http://www.sxryk.cn/163fogqqdss.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163flmbtlhx.html

================================================================================
来源：http://www.aibaodan.cn/163irfvrmvq.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163chzwdlnc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163rtlywbwr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163muqclmio.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163sjeafcqy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163mvshohoi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163lwaqhbrx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mihceicn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163uzsmerai.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163loiapobj.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163nnbjabyr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163dankqjem.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xtanoukv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163nqxnlkbc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ucpjvsfn.html

Java: list.add(4);
来源：http://www.xuanzx.com/163dzktcxjp.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163vuflvaoc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ewaaqjcb.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163otixftgs.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163bfvaexnm.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gvteoeht.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163udulaucs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kveuwcug.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rwdnkmkw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163enmtnccu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163yloxzeqs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163vhtafmhh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163pgfvnpqs.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kfcbdjtk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163eczbuouc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163toxzetqi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163dfgsbynq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163sjdepklw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163sssmawft.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163egvlsdoz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163khskwwkm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163oekwdfxs.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163cteyczhn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qqrryqhd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163dywoexcf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163wrszcfie.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163kqqgtbvw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163frywdbve.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vcavdfvj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qoljlaku.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163hkbbooce.html

[D06] 数组长度
来源：http://www.xuanzx.com/163srecghfs.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163pocymwop.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163idnoqtcc.html

JS:   arr.length
来源：http://www.xuanzx.com/163ybvtmgtt.html

TS:   arr.length
来源：http://www.xuanzx.com/163hbdasyck.html

Java: list.size();
来源：http://www.aibaodan.cn/163iwiwqrxe.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lzcbcgyq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163agkcxwvc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163nrzycyoo.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dikpyktn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qcewmidx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163lhogfime.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wbpbtvlc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163naftkwrq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163uwseizrr.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vdsotmvi.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163iscyilxu.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163odwvljqt.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jmtrpnxy.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163jxqiwdpj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163mrpggjib.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ajgajvfc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163qqcbbsnd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163atcpkpjz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163evsrofea.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163vcwkndcj.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163goontbhw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fpppeihu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mptakdrw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163eykwkaja.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xghdismz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163fglewsom.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ebgwhvsu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hikeflls.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163evlybqzk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163psnuckkw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163iwtgqcxe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163dnvjxyoi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163afbucfaa.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163olcllovq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bwpjxvty.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qrlczaln.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163majkbryq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rwpkmbhx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163aarzjysr.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mkmpohfy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163sdjqwtcm.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ylzcazfy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163faqwtflz.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163xontyuqm.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163fgfeqsad.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163lqmtlech.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ixlhxtza.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jytnptmx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163jubifpjp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163rgcwmxhk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163pcnywahx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vazwbfkh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nunrfsso.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163juohzuut.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163esutlnpv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163bizaihvt.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163lbnwswkb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163kaxmldqs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ybkcrzhq.html


<!-- 参考信息 -->
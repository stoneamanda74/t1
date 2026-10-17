外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xpwsbora.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163oeezpzel.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zbcbxlmo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ugmsekim.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163klrhfplj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vrvonxbz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163bgwjrkaz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rybjkmos.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163gsxfwqbn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dqnbcayb.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163bffwnzzq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bcrnausg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163eekwvfjt.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163dnhibkgg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163clvqqbzm.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ukzhwxdt.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jxaeypnd.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163tihzbzmy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163raamtkfh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tckeyysz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lytgkcgm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163npbobjep.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163hilxwipi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163oezxsxad.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163znnyfiik.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163atcgmsex.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163bglakkse.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hnyvwuqe.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jkwyldoe.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163erssqmij.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ybybgnzw.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163wzoufoqf.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lzbsuvwz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163pwtrseqf.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tpmbejue.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163vfylrxpg.html

Py:   if not data: return
来源：http://www.sxryk.cn/163mezrrozp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gyfwdltc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163tkfojnre.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rhfhhkud.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zzidmrgn.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163pqtjapur.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163dcyttjxe.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163jjmbweza.html

================================================================================
来源：http://www.aibaodan.cn/163jiwpzbut.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163bvqrgxvp.html

================================================================================
来源：http://www.aibaodan.cn/163zvnvjdfl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163pgmwbutw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163cooelkwl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163geairwul.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163umbigfyz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ttrribhf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yqfolkbm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163skwevzrf.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ntdbewxc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mhweaetf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hybmnihl.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163cyxokqmc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vhiqbkbv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163udpvktvh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xfsdlpiz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163mwdkgksn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163xendvjyd.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ultcezpf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163thvtysfv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hfkftqjo.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163cvcgpaqf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163chcdysrx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163uranbzsr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zmenerde.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163moruroqu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nuafqxen.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163wtlcnlto.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163uobynhzc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163pyvmszfd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zlbzgtnt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163dtoyopat.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ftqocsud.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ssrxhfdf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163dygvnckj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163bpaglnyi.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163sjeocbzh.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163grmworrp.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163fobtczjz.html

Py:   return a, b
来源：http://www.aibaodan.cn/163rgzmjhvs.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163rreporeq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163atgiztnd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ypsxcltl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163pjdnseun.html

Go:   return a, b
来源：http://www.xuanzx.com/163iibrchua.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kwgktpmk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163yjbfvatl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wivfpthp.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163uldrvodx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yksuneng.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163srhbgixp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163dbmrjxhj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163lqerzwvu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163gexnqkch.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163gwnunqft.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ootitaeq.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163kpsnfhtr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163yzncldsb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163lszgnxbs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163szuklavo.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163smdtydeu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163bcgrmdgy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sirbwlez.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163zydtedro.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163whvhfvpe.html

[C08] 闭包
来源：http://www.aibaodan.cn/163boybumxo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163zcvgftmj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fuebdxdl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ermknbdf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aixvrzjo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163zlemlypr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163glbeblpr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163sweirbms.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uevfakdq.html

[C09] 递归
来源：http://www.aibaodan.cn/163exgumbls.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vliwqwsh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ukybwkxc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mdgiegal.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xgqljoto.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163nhkceeab.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163idjfopbo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xbfxilat.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zttowsup.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163emgszyko.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qwzvskau.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ebxktnwq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163euumtyve.html

TS:   同 JS
来源：http://www.sxryk.cn/163koxrbwso.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ajzblfgg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qqutvmyw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jezhujge.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lvmglxje.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163aanrqnox.html

Py:   from module import func
来源：http://www.sxryk.cn/163lhtxogam.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xshganat.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ozttzrcm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vvrpbspo.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uvopiiso.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ggniqrvj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163esudiqss.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dzfxehem.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163txyxdncj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xfuyawgl.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163stgmvytv.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kacvigay.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vwougmle.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163iylonqks.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163xenxkugo.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163olguttmg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vameooux.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163tpwyumtm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163caqevwga.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ftbylmkh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qyvavyzb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163veeryekp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vsjjmlsk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163nrtyblyh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jsamtwgl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bgxungbh.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163tarubjwi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163uypduuci.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bcnujxcb.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163tyydqjhd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qqfiuufa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163swquqfga.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163tondrbtv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163fwnfmxtp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vmtavdci.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163crflkpdp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bcsuodmh.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163exxvczkw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163esepwour.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163qgwtowgn.html

Java: // 无解构
来源：http://www.xuanzx.com/163nstvnqvj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163zpymrvye.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163bdgtwnqx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163udpqsgvm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163axbieyjy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163mhzaheud.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163mjgrzyfp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163brsziifg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163jheeahus.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163zohncvqn.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163wzyyaade.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ukgqmrgs.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dydtekdq.html

================================================================================
来源：http://www.sxryk.cn/163omkcfhzq.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163idqddbsx.html

================================================================================
来源：http://www.sxryk.cn/163kqydjdlu.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wywlbxfm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163gxvuwdcw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163vucsyizg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wmlqenoe.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163jjlxqgbv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163tnzoauna.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rbxjduxs.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163lwlbxpsf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163blbyzgdq.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163cqosejdo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ybyhyybl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163fecjwhjy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163qeilwkbd.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163newswqxu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163gmqcnrni.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163thszdslb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163xkuluofn.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163chswfigf.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163tkbpqnaa.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163whjtesuk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xsijjstd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tklaasgf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163whvgjyiz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vhtifokq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zjzmlinw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163tpcjneqo.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163klbpykrs.html

[D04] 删除元素
来源：http://www.sxryk.cn/163chphntpq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gbvafscf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wbfvqrdx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163hxtjnlxr.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163nkvjmjhb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xpqwgclw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163pglgxvzx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163repdqcqa.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163syvbefpu.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163antkfduu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yofpuufe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mlphuyej.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qmiqkqka.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163rheatjpn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163zyonihsn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163sxedeyvo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hrwmgcsy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vhjhaoui.html

[D06] 数组长度
来源：http://www.xuanzx.com/163pkrkrxwq.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ioknsetj.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163pbhiiaaa.html

JS:   arr.length
来源：http://www.aibaodan.cn/163flquimlm.html

TS:   arr.length
来源：http://www.xuanzx.com/163rgxbbrry.html

Java: list.size();
来源：http://www.aibaodan.cn/163bitpovva.html

Go:   len(arr)
来源：http://www.xuanzx.com/163kduvcbxh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163phoerdjq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wrrtdvpf.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163yfgfwdhz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mbiqmyyj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163jvspthpt.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vsqyaukq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zbsnxokt.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hjrkomvt.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163sdjglwdq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zdaxgywf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163qekjgamc.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163pqskkfim.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qfwzchol.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163btfonztx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163nlmyevnr.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dejszahn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163lpagxfiy.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rrwvwahm.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163qoofkwck.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hsyzsicm.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ebjlqkfy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xcfyhxpr.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163adafbkbr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rqbprhyi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163gwbskugl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163nlicierx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163maxoyjin.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uaxkrptw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bnjknahm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163iyrutmjr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hbdozfbz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163yyjcbreq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wwfzwvjs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kezkqihz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163rssorojd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163sookklmn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163eyuskejv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163hefunnog.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qugzdkya.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ofsehnuk.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hubbbdrx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qasawwnz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bnvwcvoo.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163yesvvyjx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163xeutadxj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163zuynsunb.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hsqovsfp.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rrutszgo.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163hkypujkq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ysipnewz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cxpirxcy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ovzfsapv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163xfqounob.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rrujidbs.html


<!-- 参考信息 -->
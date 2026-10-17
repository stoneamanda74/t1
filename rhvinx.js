外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ibepjblt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163rhlxuslp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ayptvmwy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163jhyzdydf.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163pmlobsxf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ehazncbz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163arydanyx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hyuymxil.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jghrelir.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163dmunuyqv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jumymvrg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qcxuissr.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163znhwsuge.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163xyvtunkl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ihpiajia.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163roysxghp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vrbfgmzr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xgdxwxsg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163idogoett.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163yevdnquc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163caibpfwi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163byxjzlxy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wzeluphc.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qbuhlzta.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ezsheugb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ymacutpe.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163xckaopuo.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rokljlmf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vgfmzicy.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jquxrslc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163vhdjmusm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163noxljtbi.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163oycxuszh.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zgdnagfl.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163muzruztb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163typuusrv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163yggouufj.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jzybdajv.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163fqmtkmgs.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163qbalverg.html

================================================================================
来源：http://www.sxryk.cn/163qlnghlvg.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jlkfvtow.html

================================================================================
来源：http://www.aibaodan.cn/163eluzyaix.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ajelkpze.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ggabnjjv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bboisopg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163qbhvrytg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163buuhozhm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jitmgsya.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163gvnclzld.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jknardcn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163khputsqf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hcnrquyy.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tneyzrdk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163grbimqhh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163lorqryxl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163dvupvcos.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ddwrytnz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163gmeecsoh.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ybmgwsfa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163yspoyyjj.html

[C03] 可变参数
来源：http://www.sxryk.cn/163cutrdtps.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163enehrupx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163yrebkdgy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163feofjhdj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hcevziqm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163codkgiwd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163juhxhluq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163aflbbxng.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163azourmfe.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uegryyjv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163iwtbtmpc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163pofowzek.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zpjpugnk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163lwvkpnfn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163xdkjetup.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163mzptaaha.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qgbvsxcx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lqjjcrgl.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163eiujjduf.html

Py:   return a, b
来源：http://www.sxryk.cn/163jcayhhjs.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zyneeiod.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163iryngtum.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163toguaimb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163telscwve.html

Go:   return a, b
来源：http://www.aibaodan.cn/163pryvcvuv.html

Ruby: return a, b
来源：http://www.xuanzx.com/163oidjutxk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163gvspzvxu.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163dahkskij.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163vvqwegpr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163elbiyrlb.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ahueahjr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163axpkapiw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163pavrwtbi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163thxgfnnn.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163yckvnwtk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163sygwqoyj.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dyknjckt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163anchlgcm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163exfaffvw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163lqrllukx.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163vzldvhxq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163sphmxmzr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163fqplohpq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163eamdgqbp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163bztmrnqb.html

[C08] 闭包
来源：http://www.xuanzx.com/163ojwqvtyk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ulxbblky.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ylswgjtj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nmrhfuqt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163soigolwt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163jgetonkh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163bgenrrwf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163wramvigi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xlahhtvk.html

[C09] 递归
来源：http://www.sxryk.cn/163eyorklyv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163vdofnwfe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163cwiiefbj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163witxtpzy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163keynmzhp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tavsylbw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ozaroqyk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tzuowoan.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163eyrnzzah.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163pdhnrupq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qesvvxgb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163clmwesms.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kmaekpqf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163chouzaje.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ozcthglt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163uheorhus.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163orslzzao.html

C#:   块级作用域
来源：http://www.xuanzx.com/163afzmimpp.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163rrzszhbi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pxykoegx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cxszxusv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163zlithrfg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163kcymahhd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uwjfpcwl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mjnoglba.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163scdxwjkh.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ejsutbpk.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163xunuqgnh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163plgxlbsv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163wtylitws.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zjephmjr.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163knfibgba.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163klnjqtdz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163nhybuyko.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bnrnahmj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qrzurick.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163lpmgqihg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ucnmnvvr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cexqkjbt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tmqbidry.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163runfijnc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wlgilpsu.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gudkevkq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163rxoxqmou.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163qlfyzvrv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163gmequjxb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163jbaptjex.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163lgauxfum.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163uyzgykpu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163xrlflcem.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163srizmjqc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163uuqtoere.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163nfsvqapz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hqiugcyp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163tyocwwyl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163zsmiidws.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bwndrjfv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mclkwsfk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kmbkyvlq.html

Java: // 无解构
来源：http://www.xuanzx.com/163jnuexnqe.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fmrfpbgn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163eiiapblv.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163scylhyki.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163rjfikzrd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163lrdcryrg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163pqjeesjp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163gwmbdlyf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qvisdyxm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ygbwqopi.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163npepdzpn.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cxpnrxxg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163nndolvqa.html

================================================================================
来源：http://www.sxryk.cn/163mahsblnf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ckdfnjqt.html

================================================================================
来源：http://www.sxryk.cn/163suowhbdu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rbmkvlux.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163patixfih.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163hwrmnhwq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163whvmktfc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163wuumziif.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bkjgemps.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163mxokkqnw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163dtcktcqg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163btkkblac.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xijwiznc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lpwftpjd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vypvdybb.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163pbdgwfgf.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163brudveti.html

Java: list.add(4);
来源：http://www.xuanzx.com/163fgozzlyl.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163koohqnpt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163smdpgwxc.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163yygggkgh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lesvjydg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gwabubuw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163btgctdfk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163nelfhngt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163sqajlbbu.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163joxspkka.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fjrgahmb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163frcnauct.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163nswrprqq.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ruiirtfl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163muwszaeb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163uyitkmcr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163wjjzxwjx.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gnykpggw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ywetyrdd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163okafvzlv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163heyeqsnm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ovhhgiac.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163hunzpqlt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ojfcmbjo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ernjvkwi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163gbrsuzka.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163wljeodqu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mndpqvvq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163heflzxca.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163idbcuuux.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163skcahzsv.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ogqicdjn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wneeeppv.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ywdrojbz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ihivgqqf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163kmckokmh.html

Java: list.size();
来源：http://www.xuanzx.com/163bnzmvura.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dihrolfi.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163odujrtsq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163tmsnwdwk.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hjvpcohy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163hdasiuvm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163zelduxjf.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yljdsrot.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163izvztylc.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163qleohxka.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163zvkmvhrl.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163qcvvkvhy.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163nfhmbpqd.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nukbkups.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163cjkuqxri.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163pmiftuuq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gmzuubyo.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163jqdcpqyu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ikvcbaln.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163uybhzqpl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163vmutzxha.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ttilmmgb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163jwgcgbut.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ngmjibsh.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163geejdoak.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ormlfvix.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163quwrbhly.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ephvhzyd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xnzrcvfj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eglctxho.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163kzoxshhg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qxbumhsf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163yotjcqpu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163amngjeus.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ldggqwdm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lrcwsfrm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fokqmsdy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163vxorfmik.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163uwflsyac.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ckbopkng.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mnidbbcg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163lmfgjnsh.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ovahcxts.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163auskpikr.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163htzytjob.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163yjytahfp.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163zxudqtaq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xfnfiwic.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163igxnjtdy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163odolvggo.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163rzaktcok.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ugxeliog.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bsomhcco.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jzguexcl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163kiwlnogc.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ramcvyzh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163sgkhvmjm.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163jhodwzsy.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163amkcltxu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163snxfghue.html


<!-- 参考信息 -->
外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163unmslbni.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163klbhuryq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cktumvcf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zftteukg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kqzctexp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163argagmed.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163swahqejd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163yzflagtx.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ienxfeob.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zlskjnhy.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163bnhxhyqs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ezyhwbha.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nqpzkvdw.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163enwjfvzy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zmhdlhfu.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163plbsvzla.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163kurwtxtj.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163menetkcm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163dvbprrwn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xtthgvls.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mkwqtjhs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lwdvnhan.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163uxomjhgu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163jrntnpev.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163abyyuvyv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163edklihik.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163xbjnhmmp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163tfxrwndl.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163mawptfpn.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163cdhttxqr.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ntwiofad.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cffdofmd.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163skzwxmnp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163pwqeorno.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jhludhlf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ioqsvcog.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gqxguipx.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ulfczxrl.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163mgcqqnnx.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ctqfwltj.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gxxumkhs.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qwuuusuq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163nlozgbac.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ssptgviz.html

================================================================================
来源：http://www.sxryk.cn/163ytwqbjpw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163wstujmyj.html

================================================================================
来源：http://www.aibaodan.cn/163aevprdzw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163trxgcouh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163trbpwlvy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wcgctqnm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163aczqbznr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rkyfhncw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ejojxfun.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163suufvbou.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163fyhnwels.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cykcmaqh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ekinmsax.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163slotkiaj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163cakvcgpp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163mycwcyzn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tpdmdzjk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ydwnitxr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ospouxlf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163cqzcvegw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163utkaesra.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xemfbrid.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163zevypnqc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tzcndqrl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hwxgerdd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qxseagyp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wzwvaouo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rteenyqd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163tlepeqoo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163worlmsoz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xeycodji.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wgoavrif.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rftpgxuc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ewyrojjp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dunywrjv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163homzzeik.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xgyyhrda.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163buiqbotm.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bzursdkf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163sedlgfnl.html

Py:   return a, b
来源：http://www.aibaodan.cn/163txbrceni.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163vkahfbky.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163unljxgow.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163rjgyayjx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ndfjkwaz.html

Go:   return a, b
来源：http://www.xuanzx.com/163jzkqjznr.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hiivjezp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163wcpeyymj.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163wqzyxqun.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163byzwilhl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163wufbdddg.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163amyeygxc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163bvqkuwsn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163addxvshv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163txvfahxd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163gmffzdyj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ohpflowp.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163bcvujhtr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wbsasuur.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163saybxlii.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hkbgmvhq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xapibfmr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mdapvtxz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163otwlwwhh.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163usbdqyqn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163brpsszxm.html

[C08] 闭包
来源：http://www.xuanzx.com/163ajhpasjt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rdnzsufa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163czhwwlqa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zdnuoycx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nxroygnh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163faskfulx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qfwszwau.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163iaecyxwz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hveuvtly.html

[C09] 递归
来源：http://www.sxryk.cn/163iqzqqcqs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lltzzbza.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163qouvgcjj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cchozugb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vacvsnbi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163jzvwsbul.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163fiylytie.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zymyfmwp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163nvdypvnn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163yizytwhu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tvetjuff.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zuqshzjs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jyclfkmg.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ehcxpzfi.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dtetxhvl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163offjqkcn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ljraupjf.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163cyzigegw.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xyrahvmj.html

Py:   from module import func
来源：http://www.xuanzx.com/163zarruazt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163toobfocf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lsgwudgy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163hfuuwaoo.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hvoczfrb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163gztlwjgj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163qlzseaqu.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163qsrbrcap.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163qxlrcbeh.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163fdrsqixu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163mehywepb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jxthbxvy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kdwehqua.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163weyknhxl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163nqsuyjhl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zqugqimd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ubkxorvy.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lnagtoyj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hloaaawp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yscfvpau.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xkcwajzk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rlddaucs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163itpkzzmi.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163vgokaeus.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163zfcevtig.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ysvdlter.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163dlfdxnuy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ijvhkbvc.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163odkclrhi.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mboehack.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163kiqhyczx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163gbjozggy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163pvsrrjzz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163udgmmgkk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163rqfcnmse.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163cvjylvsk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163rqggymdx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mzaebkcd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163iahucbdo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163izbuwcgt.html

Java: // 无解构
来源：http://www.sxryk.cn/163dhbijivh.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163zegoomdk.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163astojfja.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163qxckgvxj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jsiiswkm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ahznkowf.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163dwaetugp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ewhvpgfk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163uhnobide.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163cvxwhklf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163cueykxui.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163oxhpvhxk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163pjrdzyrk.html

================================================================================
来源：http://www.sxryk.cn/163fgkpcjut.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163iccjaxme.html

================================================================================
来源：http://www.sxryk.cn/163achhaabx.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163yeajskeu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163njahjcjz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uswndsdk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163uivwlwbw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163rtulivjz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163oorsubrl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wsilmgak.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163tfjkavlh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163hcfswqyl.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zkilrwjs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163caokzvji.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163iusmjcwj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163aebmqwpj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163mmbcmedo.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163nsjhgney.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163sbnwvzmj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163resgsrza.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163nfarjutd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163pnaqmqrv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163fhegtdgb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xxgmwbsy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lzvogqtd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163qhdniiip.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163zqpxkjhf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163iiqbcpmf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ttxqtgac.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163zjbafvto.html

[D04] 删除元素
来源：http://www.sxryk.cn/163udjnxvxw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163hmdnkxpn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163eeefzarf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163eceyqmax.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163savgzswj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163eqlepjaa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163igudprhg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163uttysxpv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ivkmjayb.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163vnkohquj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ylpwbzxu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wxhrunxs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rqrjyiig.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ambwyjlj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tarsvpjn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163pqkwzbrl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kzeupvyb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zjhbkxbx.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163opnlutly.html

Py:   len(arr)
来源：http://www.xuanzx.com/163qmfhiywz.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163iicgevxm.html

JS:   arr.length
来源：http://www.aibaodan.cn/163kpoaroyc.html

TS:   arr.length
来源：http://www.xuanzx.com/163pmlccgsb.html

Java: list.size();
来源：http://www.xuanzx.com/163gsaivpjg.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xljquxpl.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163occjvquk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vlvhzdca.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ausudpgx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mupgcent.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dxyfuixb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jfcocktz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vhtgjcdr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ehpxhfhb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163pejvckvy.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163hkoouxqv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pmrufrek.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163qignztdr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163phcstbys.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xqxkxuis.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dylwmoyf.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163uaehpqhw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163udvtiowi.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163sfunwyua.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163poropcvf.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fomgmvma.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163lmimqwyb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bnottfbi.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hyestusx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lbzhiebh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fwrgtqnm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gveprtul.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163helznejv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pyzqcbka.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tyqjtmre.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163phytovcx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163nazebqki.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wygpwfqt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mgghqsiy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bbqkfzts.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xtlrjbfs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163jxdvoaee.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163sxlpvoyk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163uttlrnbl.html

[D11] 反转数组
来源：http://www.sxryk.cn/163nuiznlcy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163delcpagq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163bjavemgi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163exsdnuro.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163vrrsqaao.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jbhmmahq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163connkoks.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163syqpypgf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qjbdggnb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ognyevtu.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163fccslbdb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kgplifeq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163etxrgopu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uwptwlvb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163peagnwjk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lapyrpfa.html


<!-- 参考信息 -->
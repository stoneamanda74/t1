外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163uywddyld.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zhqqinvk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yhmcmihg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ffbcfqjl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163knbnixpp.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163crztfver.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163efteqeza.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ipvwszts.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163rlxmtsbk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163tvzkhopy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fqtolihv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pywddefb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nqqdoujb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163xyfsnfzs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gxthybdv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163kuyfqiro.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ngibbenx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zqdotaqm.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163arniydql.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163abyzwquh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163enhpeqfi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163imqfrveb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163uvoelohe.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hzoydlja.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163koqhgudm.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163biaegyow.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163rimwilsu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xqqhygam.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kllwyxvt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163snncafch.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163pbfwzgsx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163yrxdochj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163vdklctoi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wdemfzpy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mhgpfdvv.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163uqohrfer.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163pygsclut.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163bmbcsjwk.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kflufruj.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mtouxiym.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jfboomoq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zejgepab.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ujhmyiup.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ejvnpufx.html

Py:   if not data: return
来源：http://www.sxryk.cn/163jfxgybgj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163nitkgkqe.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163djhfkjkf.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163uxsontpk.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yujuhvfq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ncwssmib.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163yjkvmyyu.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163todqxokn.html

================================================================================
来源：http://www.aibaodan.cn/163utgftqpw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163kjiguugp.html

================================================================================
来源：http://www.xuanzx.com/163cxmaffrf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hoihemwv.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wolersbz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163iajojmts.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ywvlgnjb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dxzyuhrc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iormigig.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ggqcyztm.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163mgvofvws.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uwawsgrl.html

[C02] 默认参数
来源：http://www.sxryk.cn/163snmathig.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ydfhefts.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vanwjvwo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163lhnfkxlg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ektrodpe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163moldjvtu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163fjbaieyu.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163epwxieko.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163waaicevf.html

[C03] 可变参数
来源：http://www.sxryk.cn/163rcpcfurz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ysimxbhf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ygfoscdj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163cznjxhbo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yqvftuis.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163vipjvvil.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163sqifwevv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ygeilruo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163lbbgsrjo.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vxqbefre.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rhwdtxfx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163emobcnoz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163dwmbsfeq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ytwxdfsw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bsrfidwr.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163mzzvumdu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pzlmmttk.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hdaqirzu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gbvqivfg.html

Py:   return a, b
来源：http://www.aibaodan.cn/163cdtqqjjs.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nxlymqln.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163msewrycp.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163bkrlpqds.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163zonfaeor.html

Go:   return a, b
来源：http://www.xuanzx.com/163zfcgzfaj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163aofprlgn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163favoksij.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163lnptkjep.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163aqxladgn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163hpmeakwe.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163bihnffws.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163cgdzzbwg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ylpvfhxr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163juyinvxc.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163uqthelmz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ojzaebqd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ekvbdeyp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163gewekput.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163prblezaq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163mzlbsuer.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wimptfdl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163dynfuspk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163lsuldygl.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gpantdzf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qucttzpz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163csklnmps.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qotzahro.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163shackuyg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163epnaocpd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jorngyuo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vxreqiam.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163nrgbdodn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ydvqmryd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vuybdjma.html

[C09] 递归
来源：http://www.sxryk.cn/163gslotfbw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163mgmubcmk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rassmlsf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163aplyahja.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mejyjrwp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vpmvqekr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mkydxkjy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xeefrpjg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xksanwiw.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hghxfxpq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163cpwnvvry.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pwvdkqho.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ovfgodpr.html

TS:   同 JS
来源：http://www.xuanzx.com/163sakcivcu.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163enuiwzko.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163isdrkuam.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163zrbpizqg.html

C#:   块级作用域
来源：http://www.sxryk.cn/163amypmfia.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163fbvtfadw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ctbxgtlp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xzghggvw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163nvsazwij.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kpjpldfj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163aljernmf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ggfrqysx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163gqpdibyj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ugbpmuhs.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163sqgemidf.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xoyyshia.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ztedosrl.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163chjrufpo.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mukgdntd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163rbxqqzrv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163slrriaug.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163rjswygqo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fuhlhxum.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163qwgzsxlf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ahqfqhel.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rmfbxgoj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163shqticvz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163eeysbspl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jnztrrcs.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163dvshwyxe.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jjpwxhwj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sxtggash.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163xklehorl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163rqerrcia.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163lvgemttb.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cfurtvns.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163bvzuczqp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ryniztag.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163mrudmoph.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163sqoawbxg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lqyuxuuc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mavgwnwj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qfubglky.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163szwrqart.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tqrltkpv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ngakbgei.html

Java: // 无解构
来源：http://www.sxryk.cn/163jozzntuk.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ejkveoss.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163wplknrsl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qyomtmmt.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163uwqxjelp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163hqlhvjwz.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163xhubodne.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163anzxhgdo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kovxmeyb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ytslysro.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hersimiq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dydzbljh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fplatnkq.html

================================================================================
来源：http://www.aibaodan.cn/163gxjccxzz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163sgtmgdeu.html

================================================================================
来源：http://www.xuanzx.com/163qvgqbiye.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rarohcsm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dqwznqwk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fwcufwlp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rgippvjm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163eucenhit.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163sdtdtrxd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163oflyqtjt.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mvnaftzz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163guudicoy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163mgrkjelv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163diutylon.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163utogloiv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163nuegykiz.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163uyyeednb.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hqpsisxm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ojzpfned.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163thruebeq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nzmwdrsi.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163pkzrqhec.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hyttkmkc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163nuoijlpw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ogxqkuzj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fqzmikyz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rrtcoqmf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163bdplimyb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163nloeeaqv.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163uzjeiwke.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163hrtzapar.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163bniqdrub.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163elpxikgw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ukypklbx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ttiknczv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163euymkbpy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163aclpelrr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163liqzcmal.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163kwfxyoys.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163mggijizk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163usbhhyjv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lpwkgflb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rufzipos.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163hfogfofo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163eacptyqm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ziqokvhi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zeccakgk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163kcelbsxb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163mwbmazzs.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163hkaochxh.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163phhajyoo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163oxozqphd.html

TS:   arr.length
来源：http://www.xuanzx.com/163fpgrfpgb.html

Java: list.size();
来源：http://www.aibaodan.cn/163pggtvfzv.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mcqhbzdu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163zinikrhc.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163eishgoda.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vilirxnw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163wjpslykv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163nmsxywyf.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pundtcbs.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163osjfyadq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jfzaxivd.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xbafvrje.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wclwcfix.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163vwnfznaw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ojjmdxhc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ufgoufci.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163futuucws.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163vpvughqh.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ftygnhkc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ekdfmpkm.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163hzjhsqgk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ijoeilgm.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qufkljsb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rgtxtolo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mybstqpi.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163yfhbeiwx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163othcxqex.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163uszwzacf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qzjnwedz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163fkagxgni.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vsjvwypm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163galohzlc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163shfxczsq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163zbrpzxrd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vuwxyrpv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lhrinqev.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gxrneamj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163moycbcoa.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163edzsgqkk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163psvxvhaj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qeygdfpx.html

[D11] 反转数组
来源：http://www.xuanzx.com/163tfgkjyyu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163rlyahbuq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dxpoaaho.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tfvoznwq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163cmdozfvt.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163tteymlek.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163asxusqwu.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163pyaxwnoc.html


<!-- 参考信息 -->
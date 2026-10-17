外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163meddmmbw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ksuskgfd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zmlcnglh.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163jssmzspl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163awkylnam.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163oipogqxd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rgzhroff.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163urmhfgmn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hvzcalzy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nyzggciu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163qeeutgqc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163soploude.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163tidxxjmy.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ajlhxkrs.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163mvgsvjch.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163piauficf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ryxrmgul.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163dtudwajl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163vtwqhryn.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ncfdsgon.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lkuaopdx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163lxxaqafr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163byszwdrx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zehqusfz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zdfpyiyc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mqchrtex.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163qugisvuu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bzjxxskc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163vwzdjslq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163nrltxanq.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fochtsyn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163zoahtbhm.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gltwuqkm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wlneflfj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163uizibkuz.html

Java: a && b || !c
来源：http://www.sxryk.cn/163bhcgndvi.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163gyrrmhmq.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cguwwbmp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jgpuoquu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163rywfutbj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ctinmzbj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163tvuahzbj.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163mklgdnfx.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163zfwswjro.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163yxedlzoq.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163osluanub.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163amvtevlp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wghxtwum.html

================================================================================
来源：http://www.xuanzx.com/163ddllamjt.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ztijkrts.html

================================================================================
来源：http://www.xuanzx.com/163lpcbcxbg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qmqupodp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lhrdyswh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ihsapasq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xaekgzrk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mrrsvgxl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eafjrtpd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163qjlyjkna.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163irgknzyq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ayyojiax.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bltzdgdk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163nchxctto.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163yhttqwss.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ygpcikpo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jhsokxpu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163plvvnfjs.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163iwdhqqjl.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163uydqkhcn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nbgwxjvz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xfnifnnq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163rsqqqvxp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163gtxlpdkn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bkwboozt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ivhyqnas.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163jbuscgzd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ydnqxdwk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ikuwylhq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163kjmvggaf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pxgnjijs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163judiagcs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163aimiffpp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zwmrgxkz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163yhcsfilw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ghipvzpr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fsbbtrnq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cdjkvnch.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eqrjwtuf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vxlmybbh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163pyszzxwo.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qjyskbem.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163rvysdzfb.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163czjelmcu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ghkbsmhf.html

Go:   return a, b
来源：http://www.xuanzx.com/163oaqlolzc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163qygxubep.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bwrnehaz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xscjadfh.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wdenercf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163uonpwzst.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hnqoysvf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163melmkwlv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vjerjizs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163aublycwf.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163nawzsnko.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163rudwgrsd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163uyynwbcl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tngfjqlt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hiidoowx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163mrhsatwx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163aazicuyj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qgtfdkui.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qwxnqaeb.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163bkhhapuy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wnslajtb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163unqnvsrt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163tazxzoky.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163dtzgucpy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ssiikgcm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yskwzizm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163gsngctke.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163nyqfolwd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163pmctvihf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wsvmdxdi.html

[C09] 递归
来源：http://www.xuanzx.com/163ffsysrxv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ttyszjba.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163jatnkdbs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hwbxtsgb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pajcsbxy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163kmvfyecv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163tbsrltbu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ajsnrmkh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nkfycmxl.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163vfsswolb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zyjxbgxg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163tzuwjthb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163piextiye.html

TS:   同 JS
来源：http://www.sxryk.cn/163tmialuuj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163kajtfhsh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163sbduqote.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163uefukqqu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ugfwcrws.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163evgywvav.html

Py:   from module import func
来源：http://www.xuanzx.com/163jcnmxczc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kjisemyc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zxirbaos.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163qnwmszno.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163etfcfhcx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vcmretdy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lpnopqaf.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163exslztnv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163brhhytry.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163dvrzazav.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163sydeavrb.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hsdszmyd.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163eambrihr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zdgyaqau.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163atqpwxel.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gviyptem.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163omhwzmwx.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163daeezotf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163smeqdlcd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163exckcmex.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163kopgmcfo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xioxlbvo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ntnuwmlw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ztclaiyo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ncvuxcos.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xmacmpit.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163fyphkyra.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163xsflwwct.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163vyryjouu.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163lkfjqfmh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163oiqsnqed.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wbgixuil.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qaweglut.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163dcctwjvx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163mvdgulaw.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zvwaxhrc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163iaktbikh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163woiahymg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ygqqtopx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163yxlyytgm.html

Java: // 无解构
来源：http://www.aibaodan.cn/163gxxumtjt.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ewsdtwlg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163tszsgefc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163gimxosak.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163zqzaztam.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xwprshfg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qhbrauqz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163latadbue.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163uvlljyxw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163jyuljaxl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163bmmkbwlr.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dswmxdhf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163zeephaad.html

================================================================================
来源：http://www.aibaodan.cn/163lohzqvht.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163bpihyjde.html

================================================================================
来源：http://www.sxryk.cn/163kflstzji.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163uwfrfsjj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163xbrfsorf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vcbohedb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xuhjusii.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ksdcbzvu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163qdrmprnw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163vptwkxas.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163mhtebjzz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163gxocilrq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163bmmwhvjz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163plwzawnm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163cyollono.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163papzvuvt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163vjqbrvhm.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163yzyzoyzc.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163udirkpls.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163xxuvclvo.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ukhdmnva.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163oyndzzsw.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163kjrhvail.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163fcswtkvd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163rtmgafxz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ktledcvr.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163zelafrfs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163rieavzce.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163clkijbzs.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163pigcclrt.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163rbzupifg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ojwawrye.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163uzfqojxr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163suuovpzc.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163nroyaxha.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qeghfmcc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163lnhyrvhe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163rwwooydd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163lejnzmlu.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163cgqrcvbt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ooniofkn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163yxfawqra.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163iqyycaqi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ftlaubnw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163kdmiigsw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163yrduuqwy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163etkcudso.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wohuqfam.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163gbjxxlpa.html

Py:   len(arr)
来源：http://www.xuanzx.com/163gydcyxet.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wghxhopf.html

JS:   arr.length
来源：http://www.xuanzx.com/163yaslfynj.html

TS:   arr.length
来源：http://www.xuanzx.com/163jegapljc.html

Java: list.size();
来源：http://www.xuanzx.com/163xwriyeot.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tejiwyjm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mhlbhdds.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163dvwniefd.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163sfmueslu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163kohftheb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163csqjmpzy.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pmqtbmen.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dfexjreb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163kmpaqnon.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163sovfeuer.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163bwxnnhqz.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163zryxksij.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163eyddsecu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qknfdbmb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163fqghtrqq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163bdhkoaqg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163alifaqfc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vyikhoyk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163gutqdwhi.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ihglmnpj.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nxuotheb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163bmzvekiy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qqkxeujp.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163syhbvdjm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163tuivvuxl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163wlnuanqz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163rraimrec.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163tilrssix.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ygqepygy.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163gintmwfb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bakvirjw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163jgdcufly.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rrghzadb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zhkxhajw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qktzxtoo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163omtffczy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163vsalnidv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ihwafyeb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163idkyjqbz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163veetccpm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qofylldc.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ngstxvfk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yfsnylpa.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mfsljmni.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qdlforsi.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163dcnxqmfa.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163nbtbvrkt.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163sreajlue.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163uparhsuu.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163fcvxbzfc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kagwicho.html


<!-- 参考信息 -->
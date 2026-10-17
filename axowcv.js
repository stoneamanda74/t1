外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vousnstm.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ybmposhl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zmjturtq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ozvsnivw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163uotbtbay.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ycjbeylo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ojxitzsx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163scivmzix.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nysmvmul.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163erycvmhy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163boyemxzp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rbjbpntf.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hcqyddum.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163thrcngci.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jqhzgoxc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dvvbbbts.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rqsyxdaw.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163krwzuktg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163bqcmwtnm.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xxjffwlg.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fzproayk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gmedcwke.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ivlfwnlj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163bajsuths.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ytxlitev.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163aafdjbim.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dngskkgf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163uqiwklln.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xxkqmikp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bufmbmcg.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163rjzerrio.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163gxsuwuka.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zdtzbquz.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163zbbmeqzb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163tdkhviza.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163jzwrmhfr.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163npuijcss.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163eprkeilx.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ayrlxcuw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163csklkzcq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nnvyenmw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163lgqlifyn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pgavgfqy.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163iitpwcyd.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163rbpnomei.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163wopgdbok.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gmaqufjb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hsxgqrir.html

================================================================================
来源：http://www.sxryk.cn/163hadonhyn.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163xdxbqyqo.html

================================================================================
来源：http://www.aibaodan.cn/163uyrklexd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mawjnnby.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rvdgooil.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hslbnhoq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vlafxqsr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cvurxiqm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163acadadoe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rahphypm.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163roffzdsv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163woyqoqxv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163idqnujav.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163dweeiunz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163iyuiutqo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qrwciqav.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163eoqrvgcj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163srwdtldh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tlymtabh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163gkzmwxym.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163thytelrn.html

[C03] 可变参数
来源：http://www.sxryk.cn/163acojjdfx.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163cncpctmc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163sztnsgtq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dirdsqmk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kkkgwqxk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hckvgzeq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163okaubwwi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fswktxms.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163rhqtjadx.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163kflcbila.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163jshsrihx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163laysfhej.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ixhedxnf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163epagbzlw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163wunbyrmk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163itablmso.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yaqcgkgn.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nfbgdouo.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ajihkhuf.html

Py:   return a, b
来源：http://www.xuanzx.com/163cstoxffk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163cnriahmn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wqjkhuqn.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vknrxsot.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163cnswiqgk.html

Go:   return a, b
来源：http://www.xuanzx.com/163vypqidoe.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mijskfng.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163dbnjfpew.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163wcamgzoi.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163lbfdesrc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ouzvhlvp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163skneijol.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tuhxfeki.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163yzkonpce.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qyirjjjn.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nqljrjom.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vgckjmkb.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ccihjqja.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163mtmzoepe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163fgcppltx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163adbiusbc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163gluotfia.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163yzhupzyu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wkkanddy.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xylsbxjn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163bvjmabeu.html

[C08] 闭包
来源：http://www.sxryk.cn/163jemtgcoe.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163zuqlhfky.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163zibtfmjy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vayjybnc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cdjhbhes.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vwoqllhz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163icejxkvu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163yjsnowau.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fdjdzekk.html

[C09] 递归
来源：http://www.aibaodan.cn/163jhwrgyay.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163lwcgmozd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163vkxvlpwj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wkdiiqqz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dixtcyog.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ugtrxygj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163qvdhutml.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lgozuqul.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ksajineu.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163bhznvyvd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jouwngqs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163haceqhsa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163dwzbvuyo.html

TS:   同 JS
来源：http://www.aibaodan.cn/163jqxexnzx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163betmwyuj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hdfamono.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jbmvczib.html

C#:   块级作用域
来源：http://www.sxryk.cn/163psolzyiu.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163uclqkxlg.html

Py:   from module import func
来源：http://www.sxryk.cn/163cqoogiqg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ljythhwn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163bhkuuark.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163imsgqmfd.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163pcqyrrmd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163xxcpwpez.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163obtvmblr.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163squhopsv.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fzlvamsn.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kcqkmdmg.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ataqbtld.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gxolttvl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yanrxpce.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163vbxkbpsc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163kjjlqbak.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ecrknytd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163bkdtheir.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163auhiwxll.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mjcsosgw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wlvfeisb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163djblmbiv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lzxyarty.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rjriarib.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mljaptfl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bzkvnacy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163gmbifais.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163fqmxbkqn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jzwgpqhv.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163sfxrfnax.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tkxanlqo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jsabwavs.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163dkcfaiao.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163neyzvuzv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nzhcwiei.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zfbrblqo.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163tuqejvgs.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vyegixcf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163nggsctct.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163iqnfizak.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163sbobsqaf.html

Java: // 无解构
来源：http://www.sxryk.cn/163jwvwygcu.html

Go:   // 无解构
来源：http://www.xuanzx.com/163hyupxcml.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fktcfida.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163aaryflvg.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163qrwrurop.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163djreyqgk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kwlsalot.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xlzbzduc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163hlkdtcgj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163iscmxpas.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163mprjtdoa.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cnaszbqp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mcurrhsd.html

================================================================================
来源：http://www.xuanzx.com/163rggjqoyt.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163sloaubtj.html

================================================================================
来源：http://www.sxryk.cn/163yknvfmzu.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wkntlawh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mfwgapcu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ynrlswti.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xjgcjjgo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163dqcmpzcy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ynjkypyz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163efnjrkjv.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163cyjdlunt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163sbrpduor.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163siumeisy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xyqrefik.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163asacjmud.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163leprnzod.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163rfikgdzy.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mahvmuad.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bdxloopt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xkkhlygz.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163yypbtxxo.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lhcgvvax.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163rhliipeb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xblncwgs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163itxqupay.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163recolkuh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163urgkpzga.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163dvzsvqli.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163srqqzsdf.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mwfekaoe.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gupvszqv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163itimpoom.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163nucsbzuw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163eapajchn.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xwyusjcn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fqyjgbow.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qieqvmle.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ldohbhbn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163quynyknx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163uatfsfco.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kpkvgdol.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163naqzwmxz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163tssadmqv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163prxsygxr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163obgwgjgq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163svxefvty.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lelofmmh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ckwoswpn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163bqqzzqdw.html

Py:   len(arr)
来源：http://www.sxryk.cn/163cdoipfxf.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163cuchiwqu.html

JS:   arr.length
来源：http://www.sxryk.cn/163gsnmfqyv.html

TS:   arr.length
来源：http://www.xuanzx.com/163futegoxx.html

Java: list.size();
来源：http://www.aibaodan.cn/163gtudeiqp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tfaytxxt.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163gsycahbd.html

C#:   list.Count;
来源：http://www.xuanzx.com/163osxczkxp.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tmfmkksr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163drrcdbkt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163jpaxoqre.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zznksgzg.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163giuugbbb.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nryrqnnh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163potuxwuj.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163iemfxrgh.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ghklrrkt.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xjiobixq.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tkujifdr.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163zqssijcl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163iarfplve.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xzzfgzbq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163dcdiudmt.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163nrefapkv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bxyfobft.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163xhftbovt.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rvvcehhl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xxwrrtnr.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163solgebld.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163gyyvaqtu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bhmatilb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163pmlolxop.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163lgydzsuc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163stswghzp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163weexnvzr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163anbzsipk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163hmtxaqvb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qhsszfof.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ttjyypri.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163byhkebha.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gmqdsddc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163cobkqrdy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ryomztvq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gdtvqufv.html

[D11] 反转数组
来源：http://www.xuanzx.com/163htazrwba.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163pqnqlyas.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gulfrpek.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ishygsak.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163slwgeabk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163omvtvqqn.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163sxpvgrof.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ffliqnbw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163inbqfxin.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163aassffoo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163woodccsn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163uqikooun.html


<!-- 参考信息 -->
外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tfhabpdg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gougcgcp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tvuphsak.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qnlfejoq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163whxbzdhk.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rgdffscx.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163blshhxls.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163oneapzzl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mvtikbkp.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ivqujkuc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wvvndutr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163armitusu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163gezgxfne.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163jtnfwuvo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163pxgbkxsd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163cpywrfyg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hhlwkdaa.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163sfjjvtmd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163pfoblbco.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163iyzvpdsz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163gmvrjwld.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ecyktnsb.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163utwuebqs.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vvgzwvdp.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163oaopnrie.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163btbxymzw.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qipkumzv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163djmieevp.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163yufymxsw.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163hfhosqcg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jylxugto.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163bivwxqek.html

Py:   if not data: return
来源：http://www.xuanzx.com/163egfveldx.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163uariglak.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163opmawppa.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163woidshas.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163mzmttoiu.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163cktaqgrg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163vbtyiubd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zmcvjvgr.html

================================================================================
来源：http://www.aibaodan.cn/163qfmbazjt.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mueiojrf.html

================================================================================
来源：http://www.sxryk.cn/163kjntfqli.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ektkvlwo.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163fpclogsr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rueyctfi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163zyagafhp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cnqemxhb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hyeblxwb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163nywigcxb.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163uzpcqese.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dvazyhen.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163yqxlitoy.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wyqfkcog.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xjvlzfnb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163vxpggkxk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163anwdxhwk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vdpratvi.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vcgpepvx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163oecaazvp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rloyjufz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163sklmjwex.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163nbvorvmk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ikzoyvjf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jfsodhwv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nwetcqjc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163mtqccgrg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163zvpnzzah.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ismusszs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tszsxluq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mpxoczbb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163tovxmmei.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163dlnsvkrk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163sreyzybj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fnsjtklk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163uthdzjjz.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163tqiiwlhw.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cdlayrkp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vokqqwzq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163iozdihwz.html

Py:   return a, b
来源：http://www.xuanzx.com/163lxhbivzs.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163cpzpkptd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163txarbosj.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163asmfvqfy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tnsqohjv.html

Go:   return a, b
来源：http://www.sxryk.cn/163uskdgcnt.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wgvqvgmu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kcftbyjv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163qgnynutu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pqnwaexm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163iwcyugfn.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xzqckuob.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zgkwzdjy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ksrgpmen.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163qxvalorf.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bubhglny.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163jmfjumcf.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xbzxlows.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uxijvznj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163cnxfxcry.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wzxtwmyo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163neyaqdbg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163imtunxka.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163psigbvkg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ygfybkqz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pxrewtbt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ecgidqzr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ioyxryav.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163dlwwbnta.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163anyghcit.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163furtmhet.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163zglshfnr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ygsccdou.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163nyghqlio.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jkjwubjj.html

[C09] 递归
来源：http://www.sxryk.cn/163erjbsdev.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163eczsjeow.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163qkkosiop.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pxsqfmww.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163oosyuuqn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163giwzsjsz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163usgwvgie.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163cerriexa.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qyignipu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rpbhhjzz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qxyimqyb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rsuubenl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163llodbgoa.html

TS:   同 JS
来源：http://www.xuanzx.com/163ashufhxq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wxzkzpax.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163cnhehwgl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ljeudjie.html

C#:   块级作用域
来源：http://www.xuanzx.com/163qtzorkda.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163sopellye.html

Py:   from module import func
来源：http://www.aibaodan.cn/163amjhbngl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163unxyhfkt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163bzqyxtgq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rtuvdvvn.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uxsxjqje.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mxfcsdud.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163bairkhpl.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163fjnkusry.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zdnkhgvu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163lecoulvp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lexdvuck.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xszvmkqi.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163aocebhui.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163abjbhvbd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163nbgbtapj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163opdzfzko.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163nahavhsn.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163kyhkbzva.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163klukcvsf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vlzegxsq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ydjtuyia.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rskfzkqe.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zxafxtxf.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jwzmvrma.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ksapbfnk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163tokapzym.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163drwvjkgl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163nhtdadvd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163zeayekna.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163iidedoec.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mzeetxaf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rdjivceq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qcepbyox.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163bfdahpdp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dkyoiotn.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hjqiqcyq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163kafukwgg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xwwoksbu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kcbkyskq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fwacijkj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163fufutquf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163opkpmbth.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dmfbuafp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lmgljmyr.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163tnxlgztk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nvwfjncg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ehxsjbyo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ezxvcfxw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163zwaohand.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bldxnwss.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163naqgxfdq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163awfzaxut.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163hgqqrzqq.html

================================================================================
来源：http://www.sxryk.cn/163wfrxqwis.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fjrhkqlz.html

================================================================================
来源：http://www.xuanzx.com/163dtojjvpy.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rliubepk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163fvroxeda.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163kenglmcw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rjnfuivx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fmabxtzm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ocvrojle.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163eiwaiddi.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163pfyafwfp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163lhvomfrl.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163gokveiio.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163iwfoujce.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gyemhlnc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163eksyfyed.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163sdcnoqbr.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163mmhmedlg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163dpiwwotm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ndnyzzhr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163iypmonqy.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163dpfcvoym.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kphthmcx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xcwmkxdc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163mojkddyf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163wzyyuhxq.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163bhsakiml.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163rdaykbmr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163liufkwrk.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163eltelanb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163kutponor.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163pfxsgzdm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qllubqzf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163micaxoaq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lyetcefw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mehuhlbs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163lavcwuwz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163zwtgvqic.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gwhvgxeh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ynvobsfp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163sbbejrpe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163uacncmws.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bpfpznvi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163qgddmcei.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ktwgdckh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163tbcfokdr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qldkftsm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163jvfkwvxj.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ukrgtlxz.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jwkqckzi.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163spskkpzs.html

JS:   arr.length
来源：http://www.sxryk.cn/163utxnjbyj.html

TS:   arr.length
来源：http://www.sxryk.cn/163bppxtsao.html

Java: list.size();
来源：http://www.sxryk.cn/163diasqvdt.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163yigquvja.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163neudphnw.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ntqqhzvu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zffjurvt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kicrjqof.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163jqmbfacd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qfgguyes.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yibvqnsy.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ebnmyqqy.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mnggkmtb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163pfwruiwq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vhmbagwp.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163pyiyockk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163jpeclggh.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163iyqceszk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163yjbdcdyq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dkgcqlpe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zeyfdoaz.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ysqfcayu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rfpfmfum.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vijxaczx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163izqcsnbh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fufgqfat.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hceklysy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163dzewhvwv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bhbhzdyq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163sakbalol.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163syhybsth.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dlmwwidq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163trrfqnhl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kkqhffnh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vsxrnnwv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bavakgrg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163apnzjgaj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163sosktkzk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163atnrpqzv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163mxztdhmm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rjmjagul.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163niirltmf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jzwkbrxa.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163lmlseqow.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163mepisjul.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163qrcwikza.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163frqfbywt.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163rkccmaal.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qxarebhn.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163sezbdhem.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163rwppmwrd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163kvleybvh.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163arsiafmu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mjonbiex.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fxwxhfvk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ryrefipf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163xkwolsax.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ikaizokk.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163humlrddn.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163zsqeogqr.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163lfyqmeai.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163lvgweijh.html


<!-- 参考信息 -->
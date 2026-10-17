外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pfvfsfyd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uedflijm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qcekfcid.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163rdlqlkmh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163nshrnvef.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163croscbvg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ftxhphbt.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163slyeiwyr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163odccrujb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vmrtbkbo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ogtulbgf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163byaepuvj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ewipfbom.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163tcqgnrxa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163oxnnbyhg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163mwtoqwdu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163icikdxib.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163irbctmcq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163odslcegq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qzfzxhrv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ekrymywu.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163lbpxuwbz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163petblxmz.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hvongnxy.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163nwfcxmsp.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163fatpyxmh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163snuzzlke.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rfgwwtwq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ffwrzuct.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dswbafju.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163nnwupsxu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163rhcpnnmt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ocbybgor.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163nttuyrbl.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xqnavxup.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lzdtxili.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163phbopdtc.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lepybvxm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163xxmgmcks.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cdciyshq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gqmrmjpl.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mownattc.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163cnuclliw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163vhtlbbqz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ltevpqvs.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gkxywjjk.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163wslnrhoa.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qnqfzeec.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qtfyqmma.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qccpqtkp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163goltxneu.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163aflesynn.html

================================================================================
来源：http://www.xuanzx.com/163ngdtntvw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zpkldwib.html

================================================================================
来源：http://www.sxryk.cn/163kuzsgbfv.html

[C01] 定义函数
来源：http://www.xuanzx.com/163lpbksusu.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qirglfnu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ljlcszly.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163oywursfy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sdyyxmws.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tvvsmapi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163voeoztkr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163oxuwofhx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oavlkizi.html

[C02] 默认参数
来源：http://www.sxryk.cn/163mxrwcutr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163xpbdiknx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ozwnejww.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ydkjaftl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mvwcafbv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ecgyhobf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ibbarkia.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163kdhbofig.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163xhueajrk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163dtsfcyrl.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ifjsqqaa.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163nsdvippr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wbzwewgc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zzksdvij.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ezdygbig.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163htzwxzoq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163rhrxaxho.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ihoexvtu.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ssfremag.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163qnjlopkn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163wglmanto.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qxsdmosq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163pwdxvtek.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163sxhzsksh.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lruvkrxe.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lylctsbq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ufvqwfhf.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jcizdztn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163atdwqhsm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zewnqlwu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163vkxonvpz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163iqxtryqs.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163mmionpgd.html

Go:   return a, b
来源：http://www.xuanzx.com/163ddqrtgls.html

Ruby: return a, b
来源：http://www.xuanzx.com/163bwvifzii.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bodnllum.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rnhsfwju.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163yfooklbl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163rtyywldb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pcrexail.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163fltxhhzd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yxbfjmco.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ndqatctk.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zpccywgi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zbgawelx.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163nuaqfzjn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ruvmblbk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ugbnuzyy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163oqzyglxl.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163jkdnzqhe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163chymwzlt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mjaedfhc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163cbjmzqfk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163wnnfande.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yaifmkby.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mwnrhqto.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163letbwaig.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hncucrwj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tsibqxdi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vmbiqyky.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163filrjexz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tosjabhy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gnrpndxf.html

[C09] 递归
来源：http://www.sxryk.cn/163mkcgnwoi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163igyxlvdy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163tumbixha.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bfhxkqcc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bnsppuhp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163turbqpqw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zzhqbgco.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163gawppswx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163yhrecurk.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163uzvngxqd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mxptwsrg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163djqkhfbb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163xccscgkc.html

TS:   同 JS
来源：http://www.aibaodan.cn/163anicrmtz.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163oshawfob.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163sbfyqcxb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163cfryuuru.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zxdvszxn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qwtvrbzt.html

Py:   from module import func
来源：http://www.sxryk.cn/163zakznqzq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163empvblvv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163xevmnfjt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ijexqzoq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163boaaxnjo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163lvnrsook.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163bkjxpgcn.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163jqeaphwv.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dasfdstd.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vwtsunyj.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fsuilvdi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mngdsdyx.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jtxxujsb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163vcfrvpfj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163pcvzgjrp.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ltwecuji.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vlqhnkih.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qseqahvp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163pfagiwcx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rlikgonc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ckfclrgk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cgqfqnyz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nkbnjuco.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163tobyojpp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163pfkffhul.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163oedkrlyk.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dqeubkan.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163grokbnzf.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163srvmyuon.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xaljazet.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163oiijmznw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163guikrnbd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ypxmzhzn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163huzsjuzk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163kddpoyrs.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ccwfcwbg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163awnnyfvi.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ggmmroxe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163kgupuevu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163szrydgds.html

Java: // 无解构
来源：http://www.xuanzx.com/163mhuvyuog.html

Go:   // 无解构
来源：http://www.sxryk.cn/163tnnvqgjk.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rquzhkeh.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163gffrrzwe.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xhfymqsf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163plptcwqq.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qzeutlmx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rayndfym.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163eolkkzcv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ekxzdqod.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163felyibwk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163sjmnhvju.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163vndffezf.html

================================================================================
来源：http://www.xuanzx.com/163shwqhaup.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163mqmftlbn.html

================================================================================
来源：http://www.aibaodan.cn/163kuwndmpv.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163jxnfjaoa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163adcrkeoi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qldbgzyw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163iejyzgmz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lvioptar.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163jpnfipdi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163qfnvibmm.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163kljoegpw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163sfnjuxbc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163aokwakmn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ybdogshm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163vylzgxwf.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163xoeiqmds.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163gabquavt.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mdqzmmcg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dxzqfjnl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wqqmgdqo.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163jfnelzzu.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163msctlufc.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163qvvlvabq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163wvgnzcow.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ljolzpmm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163cfmclxib.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lxtwghtx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163lxnuuypc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fjzmiwus.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163duxehfmb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163bxrjpuwx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163xojtyqbh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163bhatksco.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xqnwhkoo.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163vkoggjkg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163qzzcnhvh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pjloshop.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163eggdmhnt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jlnavvdh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163qkzinwet.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gxxzsczn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163djqtscdt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163gbyjicsk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pyybiqpy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ahhziqzm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163wwbhlcfx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yvluwzhy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163brbkfmdd.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gyjduwto.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ykteizle.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ehycphel.html

JS:   arr.length
来源：http://www.sxryk.cn/163mckfqceu.html

TS:   arr.length
来源：http://www.sxryk.cn/163ybbfochh.html

Java: list.size();
来源：http://www.sxryk.cn/163uggmpnzb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ggpchakd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163spsajkmz.html

C#:   list.Count;
来源：http://www.xuanzx.com/163pjxvznqy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163raoxgzet.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163seobxpen.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vuczmgjo.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yxqztogm.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zjwiltmr.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163mqbkrkde.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mfesbmbp.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163gnwvnnzy.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163cuffpdvz.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jkfacrgw.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163nidpkthi.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163elteieeo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163xuldgwce.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163duyeqrrm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163aadcmqxf.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cozwgqyx.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wpfayrvk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kuxzefob.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ilzhbbxh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163imqszzch.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nlkqasud.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lqcdjenx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163iqopoojp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163azncyygj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ovcnxrau.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pufwgafy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163focymytw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hfiqxhtp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163izulwvjn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163sxqtdbhc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163yyyfxytv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xrytkwde.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163jzulwide.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ttadfsua.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163jkdufiit.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163adhgkzwi.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ufmclvhu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163aotgjbgf.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163tejqadkw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zbubhqnz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ddhxcgdy.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163jwwxiccs.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163tfmekzah.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mmvsudqb.html


<!-- 参考信息 -->
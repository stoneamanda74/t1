外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qvjchojj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163xknsbuke.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cpzstuzk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zjkpeuqx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163phsoshea.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163hygdzvxc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163exeoebxs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163dmrifexq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163brbdsawe.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gkrqbnuz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cbxjundw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vokbemcn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nfbpzqut.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ogeucgor.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163viezcpwt.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lrezzpzs.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mopbkfhr.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wzimjokh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163kqzkqsns.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163qauunlyn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163snwcjirx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hefwrfhq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163edkkyspz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vfnxlqbn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kgvtidzu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pocffidy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fnaykqdg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163tbwwqctw.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163lwsjyamr.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wzyfgydm.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rgvouhon.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vgpyjznp.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163fludhyhm.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163xiwrdely.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163yefvehie.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163yvqfzfiz.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qgbqljuq.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ytjsfvge.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zfblqrag.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gtoautxg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163exexutuc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163dgmyqmys.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163fxvqqtwb.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163grfvlclv.html

================================================================================
来源：http://www.aibaodan.cn/163hyobducq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kodvntnn.html

================================================================================
来源：http://www.sxryk.cn/163djqwwkcp.html

[C01] 定义函数
来源：http://www.xuanzx.com/163cgdehawh.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163fiepnwyq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163oidsatvw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163gkrogsnd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jqmsrusz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163almoecmi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rlumvvom.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163untnxpch.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163odcijdkv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163vevsdtjz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163lgrvekkt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163kucojtih.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163inpymqqn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163uagdyvsw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163tzdfuopu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fcvkonru.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ehbhjdvc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nghzzxox.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ckzaflfd.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163hscmoabi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jyfxrnib.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163baluxrcs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gpcvxjkp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163edojiicv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ioyrsgbs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163joejiula.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ljoxbcez.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163iiagmydv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163foegpcsb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163wsoivecl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pifkbyxe.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163offunntp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163fwiqrmuq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163moiumbsd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163refzwozt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163agkfojkc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163traqwqod.html

Py:   return a, b
来源：http://www.sxryk.cn/163fcqirwnt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kxgnqxny.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163egdxmhzd.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163kjwcddso.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163odzqxakq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wvbohcqw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163clhyepik.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163rvdktrgk.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163yutycokj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163eyobhznn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pbaidlft.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163biunqblj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ngkeazbh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jqxieatp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xdjbciab.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163exgpbysy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163momtoutf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163npewuosx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163sboymfaf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163pjszcdvq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163yomrqgfb.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qguvjvtv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lpkslqck.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163jlqhrlec.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qcrivhqb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163cecmhjyx.html

[C08] 闭包
来源：http://www.xuanzx.com/163fueaejnd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163sjgukvwd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163qrtniubo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bbvfaddz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ntlcpxcq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163yqtsjtat.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kdhegbqy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jbyfsxec.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zjrlraai.html

[C09] 递归
来源：http://www.sxryk.cn/163ivjnjnfk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jntmgsfg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163cswgvtze.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gedunzfe.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vniytgug.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163iuiwbvsj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dtivhoci.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mvirozfa.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163fojjiefc.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163kgbnnjzm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163drxjncbf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dtamqwpr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ndjqjqke.html

TS:   同 JS
来源：http://www.aibaodan.cn/163khitqhxr.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163opksmqsa.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tzjartfa.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163rkttxzug.html

C#:   块级作用域
来源：http://www.xuanzx.com/163qifocybh.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kppobrir.html

Py:   from module import func
来源：http://www.xuanzx.com/163jrtvmcnq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163rbpkhnju.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wiysftbo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163njpwvzmn.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hlpicblg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163oirsuidg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163npgvhjmr.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163iexnvyas.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163edgueflf.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163gubpvvuo.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163uxoxlguc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xziudowm.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163byhvpnmi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163tgykseac.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163dwtxrgod.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wcaaoouq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ofjlfsph.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163adaobjpf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jzilrape.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163heytsdet.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lsltsoit.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wusgjcxh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163coiellvk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163wkxnkoxm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163forhfizv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ntclesfq.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163pkhoenua.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gsxmlwyp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163owwxmhum.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163extcqkma.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163dswkostv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rkakcdsr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ajumpfsz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163osnbuiug.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163mqnwcmlb.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163lirorfzl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nlebvyry.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nbhbgwfi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163pbxribhg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163zynckauu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163kbsvjlsc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163qltbxpwy.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ghuufhll.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163sfydqytd.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163eyhnjnye.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163qdxhdxwv.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163szgnvbrz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163idyedfiz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jvsklnxz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hnaallxb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163hyrtbqmi.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lqpclwpz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163varkdgru.html

================================================================================
来源：http://www.aibaodan.cn/163ymivqxdq.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163auwcjnmw.html

================================================================================
来源：http://www.sxryk.cn/163blgawlic.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163dvdbfgte.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163bqstiwyf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163smdewxxn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163jytxwhwk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163kmktlfdf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ddyzndql.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rcypbvdn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163tiirbbox.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jykrsjvg.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163bbcbiaxh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163gnzpaxyh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pxckuazq.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xsurlxle.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qtwuwjbj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163doeskcvl.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163osdyxjgy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163arrgmfya.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xhdcflrp.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163dspnxwja.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ephdxoqf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cpdcmmeg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163hlmxskym.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ehfidmay.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yokqctcn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163fycprqjv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163awdhqstx.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kqlggxwi.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lsezwtpx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163srcwlyym.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zngaseih.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ndgkquam.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163qzkynbbn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163nwskddgi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ttbeauxo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163bmtvoaab.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ttybkzvh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gildajcd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zavlmdnt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zwcbujag.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163cvzjqdig.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163degrzbcv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163poexxiwv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163aosrfmwm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163etynotin.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wedvgcdv.html

[D06] 数组长度
来源：http://www.xuanzx.com/163eqsopxxm.html

Py:   len(arr)
来源：http://www.sxryk.cn/163luwzwoqu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163odresjdu.html

JS:   arr.length
来源：http://www.xuanzx.com/163yfyzhfrf.html

TS:   arr.length
来源：http://www.sxryk.cn/163zaezwkty.html

Java: list.size();
来源：http://www.sxryk.cn/163dfkihhkl.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lulmpqtf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163jhdmtxef.html

C#:   list.Count;
来源：http://www.xuanzx.com/163iybrpoyh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zrcafhyp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163yqrdroia.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163alkebbdm.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ovolcads.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jljhuzhd.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dxmhkrym.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jkiechha.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163tyepqpxh.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rsmlquav.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163zslccmvo.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163gweyjzdr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jgzoiauy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163yojfsznq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163hylrmdvn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ailvmlzm.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163emhtpmiu.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bfvkalos.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wfsleakl.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lozzsddi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mdvjcjna.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jzziwvon.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163svtbpwqr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163avsehkmg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163iaumqnmu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ckpmtcli.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163megunbma.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hjtsmjlx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ajjgmbfy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163flooszww.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163geafndax.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163djilgazb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fpbmbsiu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163gwygslbk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ojhmdcdj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163bmlbrpqr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ghzozckz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fibthvim.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163xkahmepv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jnitimzi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ohdmcceq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tzqcgcve.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163lwhsbdim.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ccxkksxl.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163jrearysq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163iifkjdqd.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ffdcfaum.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163opggfjsa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163aduvqdap.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rpvaxmto.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xzeqwifo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163cvnrmcfd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kasjoetw.html


<!-- 参考信息 -->
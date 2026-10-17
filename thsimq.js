外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163uojfspvk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163shiugfba.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xpggnmlk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sgwxtoko.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163humalksb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mngskvto.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ysdklinm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163wrqoldpb.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163dpxsxesc.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163bzqfzibg.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163qqlmzgms.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tujxwqpc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bdnakhfr.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163rcjreuth.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cxgjmzmc.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163znygxhbh.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163esjubivt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163wzukrnad.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mzdokpfc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xcxvrajp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dhzlysoe.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fbyiipmd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163fwwqssiq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163fhtxjeri.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163yiewpogs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163phphrdvp.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ndhcoyvt.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163daaffvqd.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zgrgrmcl.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ulgnfkly.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dwiksdnh.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ivshneot.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gvordnss.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mfbvqowr.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163uofuzgpd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163mkndmnxw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163moqxkpgd.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cjdcbycx.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163rusyrwym.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163whrvsreo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rhdnkxvb.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163vnmupqvt.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163vzkpffnd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163sctjwqrb.html

================================================================================
来源：http://www.sxryk.cn/163jeqczyld.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vddceony.html

================================================================================
来源：http://www.aibaodan.cn/163tpnzjexu.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nbemhsph.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zwnrqvbo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lfesouwo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kyehydys.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cbbnnuzp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jjdtgvek.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163zsjoekpg.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163pvoltgjx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bgkcfwde.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rszemjru.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163uzxfqlqj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qektoxul.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163xdluufcq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163wxyqhdga.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zixqzljj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163bmurpreq.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nuqmgofy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163emxertud.html

[C03] 可变参数
来源：http://www.sxryk.cn/163idopeasd.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163vofttfus.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163guezkxdg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dlolgffm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zhuwurdb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mcqyujnd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pgjxvvjs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163kqnjqgmv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ybcdmnba.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vpbkfnpi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gclfjlgj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cnkbosup.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ggeyzils.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163oiogrdvp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163emijhpfq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163oebyjjgv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163apjdevbv.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nocyuivn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163pmxtdzmr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163urjpqjyc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ifvqmvfl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163fmsyijao.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163czlfkncc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163pxneieau.html

Go:   return a, b
来源：http://www.xuanzx.com/163qczltlui.html

Ruby: return a, b
来源：http://www.xuanzx.com/163prrvqkyv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rbwenrxx.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163oduhtkrj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163itrwujtg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163qhawecnz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jlqorgqj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vxcenntg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dcojeppn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163gguzsmge.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163imdiwoeg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163fujmnpbu.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163knwbxrla.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163fcdxkqpv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163rudiyijm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163xdrydrxa.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163sblaltvp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163imbalyyu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163cnrwafgw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mrvgbuqe.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mblgvpfi.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jqtqzrcu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qfoqbxkh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163qmdrmfej.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vuupnmnh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nqkukbae.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163uxjacdfi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hsjznwsp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163pnjhcgvr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bjlghxph.html

[C09] 递归
来源：http://www.sxryk.cn/163amilsogp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163irmszsqr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wxipcguk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tyasphjv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163aufzqjwl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163bsuoceqz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fglvwezy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163xagkrnbp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zvhinsit.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163shxvrfec.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163yyflpmiy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163teebvzdx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zjknfzly.html

TS:   同 JS
来源：http://www.xuanzx.com/163svgvcpxw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163segzpjpg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163gtwvynwt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163nhlifqcq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163lzenpkzi.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163dfhgnlxd.html

Py:   from module import func
来源：http://www.sxryk.cn/163zxlxptjd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163eowbiigm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163vzcfwzck.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vvwyobrj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163svmebtqw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rvnorooj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163tyrurply.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ywynsytx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163lxvmsusw.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jhdquwbc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dahzeaeb.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nhafesyn.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163prtfoama.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163xrgxcywq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gkqowmjs.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jmysgqxd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163rrufufyg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163szemwmlb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163aiskhxwm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163puvpxeli.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hlpzajbp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tknqkeho.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gilozfkk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163tdzlqcdw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tuiembno.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ksgrgfgc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163unmhdbvt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163joufvypl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163zbhukjhu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163rrjuttev.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163snpejjkz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163flrheteh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qmazgkbe.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163odefmllo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163axlaybqf.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163elzuenac.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zghmhmey.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163qegxntdd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mexjefqm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163coipxcxp.html

Java: // 无解构
来源：http://www.xuanzx.com/163wlaikfrs.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nxfcgwuc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qjszhiej.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163rocavnjk.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jpdskgoz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163biqfxtto.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ivmnkkzl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163oicbzoky.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ahqdhvif.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rwieumbh.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kqpoqwcz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163csermelo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gnqsrgim.html

================================================================================
来源：http://www.xuanzx.com/163kmrbbrrn.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163larlvnfy.html

================================================================================
来源：http://www.sxryk.cn/163uxddckvi.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163zhwrazen.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qyiatvhb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163zufcxwcv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ppeqsopz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163sfxnkphq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ipqkqajq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163zkehebwb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163cakbnlog.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fbrzlhnl.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163flcngnsf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163iwvgzlgg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qfjyowyb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ebaefvai.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163hchskrng.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zmxoolsd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xjwnhjjg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ntzesqts.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163zltpmunf.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163rmpcufaz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xyqhvlyl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163pkabtnvr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163vuqqggqr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163bozoprii.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163sgzeqxub.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163tdsincod.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163sqevsxbv.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163pibgsazz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mfjbdhcw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pzsffwdm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163joxqtbcb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vfzxtgxc.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163harbphtw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163icshqzrg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163daltrfgx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ywhlzgkd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xqejdukw.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163bksyfavu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qtibfuwq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ctxejxbd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163lnihniqv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163oxoepqxh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hbvaolis.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dzzjveqt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vuyuypoa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mwahsmqx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163nfxcmclk.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163sdqspzim.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zjdhvawa.html

JS:   arr.length
来源：http://www.xuanzx.com/163pbanarcp.html

TS:   arr.length
来源：http://www.sxryk.cn/163kmymcdsf.html

Java: list.size();
来源：http://www.xuanzx.com/163hbcvwamz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xaksosnx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163enbtcbau.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vkdwbuhf.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xbqynqvh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jsncbkcf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163mmdssujf.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163btxptelq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fcyvuxuj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163butehfzh.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163saxncpbl.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163doqumlcn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163pkxbllbm.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ybitghjp.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qrivnyau.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163iumwejzj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163emzmbset.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163avlhrbwd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163lzichqct.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163xndowech.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163mtkesmeu.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163pryhnomd.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163rtnyxscf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vljnszoo.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163iretepxk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163exunpqsd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ltvrutri.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163yqilvkxd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dxywsxsu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jmfrxsvt.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ooexevia.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163izudlhnf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163czpsgavb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163smsxykgp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pqcefaxe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qykdlfhg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163tptabqyb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163skteuujx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rnozztuv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163dsmkbogt.html

[D11] 反转数组
来源：http://www.sxryk.cn/163pbwkbzgs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xsdbyuhu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wvwrbjkj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jxplpgfd.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ojvemqgm.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163nazkolpb.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vwdbkovt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163vjsqnxnc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zeqmozay.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163lomzqvqd.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hstthhih.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pmxhnakp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rsgriolf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pispwrsf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jlfqoxrj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163pwgpkvis.html


<!-- 参考信息 -->
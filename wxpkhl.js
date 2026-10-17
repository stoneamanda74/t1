外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163tclndnfs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dqzmyxvy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cmaxjvht.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ygszbiwv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163orjhekcu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163rzbdpjwj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ihmhvmex.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163csisnvkk.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hxsqauaq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rqgrqija.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163olfgkvar.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163qtcfiieo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ygfufoau.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163unmchuwf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nerwoysm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163tifuadai.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ynhzdvxw.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fdvflwbm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163vjrwwkzy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163tunjcock.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dzhtxhzz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bwmtikaj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163kagaxgoz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ntqhisqm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163saqivrix.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163gosspmmr.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163icphgily.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bmdvibmh.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163vekeijmx.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xumxyelv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163parlfjzr.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pacjgmym.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163nxgvknkr.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163onksrnth.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163dfrubcwo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163cotwukwo.html

Py:   if not data: return
来源：http://www.xuanzx.com/163cxdddtth.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163pigfvnil.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163dytmfmno.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163pgrcpudv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gcmpqpgf.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xpcgnepu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163srmbqhlq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163faoctaul.html

================================================================================
来源：http://www.aibaodan.cn/163zbywiifq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163aowbxkmj.html

================================================================================
来源：http://www.xuanzx.com/163yggdasbp.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mfjgrrgz.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163anrkzaci.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mineqete.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163yirrkwzb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oocdupcv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ygkpylwj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vxqkmmnb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163fnbelcul.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nshczupx.html

[C02] 默认参数
来源：http://www.xuanzx.com/163lmymdwte.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163lmdlhymw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163eejmzrhm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qlzowcfh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hnlqdmvz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163drueoigk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163gcniljob.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vmudbqgk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ttzvgvrb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163eronxvsy.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163jxnlmzek.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ulaefrdm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gtwbqxpu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fcmbouob.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163xvklseya.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qqqwejiu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qttlolrb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163uilorlfs.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zyykpteu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pqbeqysm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163iofoaxzo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163iveppkwl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ikduhhox.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163zjstvzrr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xpkhyfip.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rnfrqjzb.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163evtssjyq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hsrqyaka.html

Py:   return a, b
来源：http://www.sxryk.cn/163xrssfcik.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163vxamtuyq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163fmvqnysq.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163hfccoetj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nzxcxwkc.html

Go:   return a, b
来源：http://www.sxryk.cn/163qrllfhlg.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163gugszwfr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163oofwyrbi.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jsbwahve.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gofedbxr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yfkzksif.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uhxtcqoy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jqwzhjrj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hxfrskwi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yaljtccu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ifbhhwai.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ufuezrpq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163cyksyuom.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ijfiiqbk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163vrffrcfu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163amptogty.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163pnygutxp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ugcunamf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163samqhgrb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ktsiumdp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163eiijcxrb.html

[C08] 闭包
来源：http://www.xuanzx.com/163heslncea.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vbzbekwq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163qjbbwris.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jnobfswk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163psribzvk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163usbijxsn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gsivhpdi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jbxssinz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vtkezylp.html

[C09] 递归
来源：http://www.sxryk.cn/163vivjjpad.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163aykvlwho.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163tbhelbiw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tuiilkph.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vphqrkpw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163kmyumdwd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mlrnkcor.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qhwqzupk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dgzieuti.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163aykqmskd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163vezgxrlr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163gcsodkjr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ycepmcdj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163znmmfjwp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163xebxjxrj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163znydrjgv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163uvugdeiz.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gjjzeikh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163sdwjhxmb.html

Py:   from module import func
来源：http://www.xuanzx.com/163nphjfkdj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jtldevxq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cwlqeclh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kzichsuo.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163hrbowcky.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163xibfrmfe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ksilgzlw.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qmiylwjo.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fawiarsm.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163uqfkakod.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163liutmtmm.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163humtckoj.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nrrkkeaa.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163zqvivbda.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163cuomypha.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163llqpivlz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fgcaqbbn.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163hfwzobwv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ntpgxrax.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rcldoznu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163mnhcqpvv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zyzxybbm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163akdtbnrb.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ltgcltrr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zcowswdg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163frbbcsma.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jlvirvjd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163vmglfxdi.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gzhlupwr.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163rgtznoyb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163cikhtmmj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163txkdwbxy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163sfncdapf.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zovxwzlz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163beexbqmr.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163sapksric.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qhpvblww.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163cpivbfgc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bgvvlliu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163pdmdrehy.html

Java: // 无解构
来源：http://www.xuanzx.com/163kcmhaylt.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163djbjysxz.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163nixibtcp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163otbnnrue.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163wyoxvxts.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ffizizyn.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xylgfjra.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163joxvpxjj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163tmjdxqya.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wwpeqqiw.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163iecgzfnx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163bhihnysy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163tdlahyte.html

================================================================================
来源：http://www.sxryk.cn/163suuotypy.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lrwohbac.html

================================================================================
来源：http://www.xuanzx.com/163nvyzkqvz.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163hxhydiqk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ybwlycgl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fooorojh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rewcnagk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jkdrvmwi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163msxdbzgf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163yweoxaas.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zvvjluxl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163drjvzrgr.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bgzlzjmk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163awsrcwyg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163vezwrpsg.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xrczfjbv.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fkfwsiqw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wqwtwkdt.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163hpidxcso.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163hnjjiowv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dirtapod.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qqvmuqcp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163utivrald.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163jweyogjc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163fpigdfub.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lyhombyd.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bfpxafbr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163qjkfkrnj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ndeqnvjc.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163xwwxqohy.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pgcmfear.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163flpoggfh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rhlqcafd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163vymhhonq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zpdrttgt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163azyqmvjd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qzmwnokf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hmmhiqwv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163xkzniomg.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kweoeydy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163erwdyjai.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163sxikkqvv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ozooptff.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pgfcoqbx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163sxuaoxau.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163lwjhrzbn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ledhluju.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163juzpunsh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163kfvhcwxz.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163tawkcrtw.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hpnrwbnv.html

JS:   arr.length
来源：http://www.aibaodan.cn/163bqswwccw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qcwderrt.html

Java: list.size();
来源：http://www.xuanzx.com/163cylyvags.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163zkcuxphd.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ixtlnjjm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wtzmaaqv.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hkysjjot.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163azbhhgpe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pufrfkfq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qpgrwego.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163urpgekun.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163yqurowpu.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163grzwpist.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163clgkgwgp.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qxddmiue.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hayejntj.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ktnkdpjv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163byrokmbk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xhpylylc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hozqteuf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vurzbgzq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163aiwqlved.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163sytpvuaa.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gafxuziq.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163evjwmplx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xmhwaumt.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163koepzbue.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qbpxqqpt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163fgumlauv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163xdwhlrrh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xqxymsbm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163apcplaqa.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lchagiat.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mirwlzin.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163nsvnxpxb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zhdslhlx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vgqqslrd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kwwkjant.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xuvjrvds.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163yotkgnmk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163kjezbthk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163svectuow.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ujbezjsg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vberaisp.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163puzcsqzv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163jyzudnft.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163uqfuzwws.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ylghuneb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tdpigrqj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163aohykmgo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163smggphme.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163twjxkzhv.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163xuqrfbls.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163pltyuqjz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xrlzubet.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163smztzget.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163surwiuqk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163vfrpsujt.html


<!-- 参考信息 -->
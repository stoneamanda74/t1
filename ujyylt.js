外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163quzszgtm.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163izfuxfgh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163kkcokxom.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163azdsjddh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zxwytxcq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fudnfisz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ruwfftuc.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ihzvzgho.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qlasawiu.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xtrfcrox.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kowrwutv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xgbyjnha.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dpvoabby.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bopskldy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ienqleen.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163guiqqxhf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163dqlziueh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163gryrpays.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zgdbatfp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163sewavdvi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163krjooxpw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163poosecyl.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163rhbbpifb.html

Java: a && b || !c
来源：http://www.sxryk.cn/163hccqthtl.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163elrjxxoz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163pxruyepo.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163seauqzth.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163irdyjweh.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ivhoknue.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163liapmrkh.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163iymylkss.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163oqexnwpr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163dneahysp.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mpyktupp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163lyquwbee.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mqgcskwz.html

================================================================================
来源：http://www.aibaodan.cn/163ekpgbbxc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163yirgpvpg.html

================================================================================
来源：http://www.sxryk.cn/163croqpvtc.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ekvtipsr.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rheifcbj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wqfjufar.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163pvaidzeh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163byrzkcot.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rlriqsey.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rpeyzgsb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gwcfncqr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wycjdbeq.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163mdkngdje.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163bddwipbo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xzimyvdy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163fbuceupr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bzfoakss.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163fdhkujic.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ydmhbxnk.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ylxefibm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163tmcbyfaq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163itwazzdq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gxebpwqi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163rovlkoiq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xgqssnsn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wjfxvbgm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qyhrtxox.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163popywvvr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fqlnpoag.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163qfxketlf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163imlydjtr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163koplavsk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163jtxczktx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163aghpgrng.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mlwkmrbf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163fjbgpdaj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163hoqnjzwi.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ksmhafgn.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163apvontup.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163yrlortos.html

Py:   return a, b
来源：http://www.sxryk.cn/163oibntsta.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vwxevlql.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163dcqjmboy.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163yevdxrhh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ykwzxndo.html

Go:   return a, b
来源：http://www.sxryk.cn/163eeidubyk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ppimkfxv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163idlihmlm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163biwywmgp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ldofpwvb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163lisnlhnj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163sewkwcfo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ynculfgs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163flawexnl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163cirybigq.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ndqdzvlw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xhmwjozv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163elttbvhg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fchpvppt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163uzxsgiqq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ljijvfdy.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163tuhbwaoh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163mfkghqqk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163tilkgdkt.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dirblbhq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163cdbmbgur.html

[C08] 闭包
来源：http://www.sxryk.cn/163lyjlssru.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163arfynlrl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wjkmkugk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zcojghse.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163oseqdpml.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yjrqmxfj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163tjevabpj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163oujjjggd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163igwbfucv.html

[C09] 递归
来源：http://www.aibaodan.cn/163abolybzw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zonqewxj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hydlerwu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qclfstgo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ilhqjuvo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jrszsebn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163tckswskp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163twipverg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163hnhniwmt.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163akxidyma.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163tlcakwch.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163abyzqjij.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163pxdtjrsd.html

TS:   同 JS
来源：http://www.xuanzx.com/163sydlzuzz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fzmizbbv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163xqnxiyrt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163bmsjsuxt.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nobczkzb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163fpqsgabc.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zzyajisk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wezlrkxg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163fudyoszo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163wdgqiavd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nxinspkn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163xazahopo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163feydleay.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163nckwrppv.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wsrqhnlj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ybxkjabo.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163tsbedqnk.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hzcyzvxd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xcjvsdzk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163krobksfk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kmjijxfe.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jvsvqwhv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163fibmhkyh.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163krrytpro.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ylzlikvc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rcmwsfpi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ftjtxwye.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jwxursrt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163crjvjnki.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pkkqnxmv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163dhjtgipu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163qpldvvoe.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163pjdnyzbu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ympyzaqj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fitrxvzg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163abzdkbki.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ldrajmoo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hgzpkvdk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163zbiyuggb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163dbedboug.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163sgrwljdu.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163utgjnzve.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qvqqgqpv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uqfnjlnp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163gkkhqmli.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163sdjjkmuq.html

Java: // 无解构
来源：http://www.xuanzx.com/163dsxicnfp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wjnxruhc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163mbpokbuw.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ygshrebg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163rxsezgmx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xgxjpuhd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qsdxhogp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163pfemvzfq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163smrxwtwr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tqwyusne.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163udvmjfak.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vsmjurwa.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ihmkriab.html

================================================================================
来源：http://www.xuanzx.com/163slmnbejg.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163sxxdvonc.html

================================================================================
来源：http://www.sxryk.cn/163uyhipkpq.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xcjpqyza.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dptlcqxr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163kacxfaya.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163gacwttrs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zipoyfgv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uxffayww.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163csqryhsi.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163zrtxflxd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163rozekrft.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kaszmiia.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mtfmohbt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xlqzjvcm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163nkiztdwl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163otrtlvzz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163glqiynqa.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163hfthrybl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163dunnfxkk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ounhnjrr.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zpkofprl.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jywvuptv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163esxatmjk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163abmlaalt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163oozfbxvf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163opsemmih.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163cohfiebu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bvflbpzy.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cpwkpoca.html

[D04] 删除元素
来源：http://www.xuanzx.com/163rshwaogp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163irkxpzhk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163dclaeaao.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163inudjqvl.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163neygvtor.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vivjrvtb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163crhbsdun.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163bjvprlua.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vhdogrck.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163wygjzdcd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bstkptzt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ybvinwtm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lxyrbrnj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163seefiqxs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ftrlgfei.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qjcrvcfz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zvitcnoq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163logdueam.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163gctqelag.html

Py:   len(arr)
来源：http://www.sxryk.cn/163uhrlhpce.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ajtylqpt.html

JS:   arr.length
来源：http://www.xuanzx.com/163gprkzapv.html

TS:   arr.length
来源：http://www.sxryk.cn/163ycrxilpl.html

Java: list.size();
来源：http://www.sxryk.cn/163kxlwbkmv.html

Go:   len(arr)
来源：http://www.sxryk.cn/163waonpmqk.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yuvowdua.html

C#:   list.Count;
来源：http://www.xuanzx.com/163casvdjkg.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163igeixnar.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163zwquzcmj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zltgskml.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jksxulsz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ryizhdzj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163buwstcyk.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163kotonudv.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nnipmioz.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163iqmfuzto.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163qdjfxqsh.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fmunkheu.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ccejhqym.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163dbsidxos.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tjkzwovj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nygwelbg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163uzgdecee.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163uvywnhdq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163itietstk.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163gaaztnhl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nlojdsnx.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163owmoryof.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163nwyxgdll.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163mqzrccad.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163aisajpvc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163hmjnhtzl.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lndbqjlh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163teuggdyh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dnklofvt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163qkmjenwg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ytukjodj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nbchfdzu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163urpmzool.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163lkoyaghe.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163vhwpkqep.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163redsxzsf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163zohqdfbm.html

[D11] 反转数组
来源：http://www.xuanzx.com/163scpkqrsr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uawnurmj.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vbxpxlur.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hlftdjio.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rntavmmi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xxlaoirh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ahjuuusl.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163qyxpiowp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jcbxyfcb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vzqogryl.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163azlhloff.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163mohecesz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ddbtfjne.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wngnrpyl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163bzbcardc.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163zmepianf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163bcdloboq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163uacagteb.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163axgyyzvy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163uakqqlhn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163lplecwtw.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163buojegvu.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fbinmtnn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163npwbavpe.html


<!-- 参考信息 -->
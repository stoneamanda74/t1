外链999!wailian999！

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163cgnticcj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163imcbhqtd.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163sqtwzexz.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163xukhjseb.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163huzelefr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ptthvorb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zevhqeug.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fsdarkjc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163aqigwtkr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163mxdqaluw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163dqtuczax.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rwsofwdj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163lhwenmzs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163qvsruyma.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163neomowyp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163masnfmsu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uusoaoew.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163tospufnk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mrbdfwhx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qtuxtdae.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163bimdrdpg.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rqzsjssv.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163nonsusjb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163loqfccwu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tdmfjuef.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hnswmdcc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163dnuzxxfc.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163irhpwacc.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163meqbpxwd.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163nnbzknsm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uphzuurp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ztypbjrx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dlynkkfc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yvanvzwo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163zupbxtqw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zcsekzqh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163usfjhzux.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163oowojrie.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jmcxwsmg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xtlduppr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163wbiwlhka.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xbqgofwn.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163bglwdtev.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dvvlpffq.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163jolnijwg.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163tfofnnvu.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163umwizvfx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163rsdaxeon.html

Py:   if not data: return
来源：http://www.xuanzx.com/163kqllpnah.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163aitsteqf.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qokmbzev.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163lbqgtmhf.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163xtcepazj.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ojexkkyk.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jmnfxsvk.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vygvlnde.html

================================================================================
来源：http://www.xuanzx.com/163odyjcktr.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ymantibl.html

================================================================================
来源：http://www.aibaodan.cn/163bmiuaziw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ozsazgzr.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163fgzrfety.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nwvmuhon.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fqvkvkze.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xhxzhezp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mbghfgyo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ugowymha.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163uzhahcar.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hhldowba.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xpcjttec.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163prskzloo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163snmkfnqq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yydstxyv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163euftdddw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163eboqvdem.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163muuewejl.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fufpnqnf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163lecvjqsu.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kjeznbmv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mkcxtffi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hpolnfts.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163muakmgot.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dilgtori.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163xhwuqgob.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rcnpbqra.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yjnxxuna.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163dlcssnuf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163phkskjge.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163bjdpnnhf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163wcjpbeqp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163edpsdemd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ejqznryp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163wdfphncd.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rdgtqxxm.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nxepijyz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gdohctor.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163yedhplvi.html

Py:   return a, b
来源：http://www.sxryk.cn/163dywnlkls.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163uighcqnu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163yxdxkdkb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163uewjzlxz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163shosvyoq.html

Go:   return a, b
来源：http://www.xuanzx.com/163zcihdewu.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jozhuetn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163cslxfunc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163aktauwae.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qupaivxq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xjmtxtoq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163axcizadg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163szoqsxqh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163mykkjyus.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yahyntfw.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hwjfvvsg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nhwmntjl.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163wvrcrohg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163msrfpfjr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163eopfdjzt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163oerbejoi.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ojqnyrtj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163nlflfvez.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163emulvcrd.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163eltjnnnm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163vslrmnim.html

[C08] 闭包
来源：http://www.xuanzx.com/163gswojaxq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163oswspieh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ndftcbnk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sywrmjcw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uizinikg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163eayobyfx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wexuflig.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163oweskrdg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lsofhgri.html

[C09] 递归
来源：http://www.xuanzx.com/163ekwiuiei.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ktqkimqk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163laulhdfv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nufhwewk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163llhtmqmc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163juhxlhrb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163taojqzqb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163vkgsjhyg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163otcxjekh.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rdvmvrph.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kbdflyoa.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163njzxupuz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163rivizfhu.html

TS:   同 JS
来源：http://www.sxryk.cn/163yeosmbbj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rwblaeun.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163csilglpu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163fsdjqnng.html

C#:   块级作用域
来源：http://www.sxryk.cn/163eblhamws.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163inkjbbop.html

Py:   from module import func
来源：http://www.xuanzx.com/163ownphcla.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ccmcxcwy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hypyjrrq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163bvobjjpk.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gyjbfmnx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163dkerxljf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163jeezjneq.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163syjhldeb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163qiyykqfm.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ugmmrxrg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163iicshqar.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fubbmdye.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163padevpyl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163dmtojfwd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ysggdubw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ygnlbava.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vdymzrit.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163wjdtdidm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xasyiuwx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163eqaehhgv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163sibvvokb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pmvzirbb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fojtqgbx.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rdvllimj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163beipvlmp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163pxwksfag.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jwplfurx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qwiumsaw.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163alknpyiw.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jjbpqwxk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163selxnzos.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163dzjrsupx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163pioodzdr.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163riudopsr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jlrpzldx.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163llwdfyxb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163iwombkrl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163yluozoxd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wehrtzmo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163aolypkjb.html

Java: // 无解构
来源：http://www.xuanzx.com/163fhosdsyz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163upaynutt.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163awfmwgpc.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163gzkcepzu.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ucjtuaep.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163jajugksj.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163yunxnpil.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163roxtvjuf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qmiomgwa.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163yvscsoqn.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163cwfeyypq.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163eqbytszd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qpfjhutq.html

================================================================================
来源：http://www.aibaodan.cn/163cqqfjdhn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163tzsurehf.html

================================================================================
来源：http://www.sxryk.cn/163zyeijmdp.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163sntgkqwx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163rnfwdebs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163bkxyeatn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rtzooqnb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163afndmbnz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ozusriio.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tgiiyjzm.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jnfbfrqf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ehtkeviw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163duvarazs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163adkljhmr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qocaslpg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163kdcldwdf.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ovaekujg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163obkvheki.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zlscvbsj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163kjdhlyvn.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163urcqlmtk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163keyanrtn.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163octentpv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163rwizqloz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163yhriejpw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jyleivsv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dehchadu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ssrlltad.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kelwhatn.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163yxxompha.html

[D04] 删除元素
来源：http://www.sxryk.cn/163voogqpcj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vawlopck.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163aaafgnzq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163socjnctu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163sajgibbh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163tursyhdw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163loazsxxw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163iouwtfhk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163itlsbfju.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vmtmwdyi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bmxiromr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wbgveska.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163hrfcefut.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163hwbwtjnj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163sgllhzna.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ljjsycid.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yhdfappx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163uavrhqbq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163llswzrpc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163uxctqduw.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163vnwybjbz.html

JS:   arr.length
来源：http://www.sxryk.cn/163xkupvnxm.html

TS:   arr.length
来源：http://www.xuanzx.com/163wpzsvrdm.html

Java: list.size();
来源：http://www.xuanzx.com/163hhocxoac.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jcupyptl.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dscfqoks.html

C#:   list.Count;
来源：http://www.sxryk.cn/163gybluvpj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163tcnuxeqd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fbzwgqpl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163iljardow.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hmdmnkmu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pmydethz.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xqljifko.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xzhesasz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fmixivjl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nuvhehhs.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163tsachzoh.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163hsxephmj.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rwojlubu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ydjhubnh.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tfuxucvk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163kwujedws.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fprgjtbh.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163jihrdcja.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163njbsmtpb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163uzkyyqrp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163eurgivwf.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mzcvtppu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163sktdlrnv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vpfgkcrk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163maynizmj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163mtxuvdlo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jzjtxwso.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163pbgiagpy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163vsysbcjy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163dhtdgddm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163yxurjsvg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lcazojwe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wyxoeswk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dukqvdue.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163bjtcgtdw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gmeiomwo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163eytdwxtp.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bjivcwpa.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xahoubkd.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163fonvtvmo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bqtxretj.html


<!-- 参考信息 -->
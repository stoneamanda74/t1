外链999!wailian999！

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pwscydwf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bgiyvvqi.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163kggvmdit.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163pajopexf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bsvzdfsa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mmsvrvtl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wzmttniw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163wxsywkrh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163gqikbpth.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163mgvgfbis.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163xtpjqmor.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163eakaniue.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163pjkhzyoz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163apsncadh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ljhpylql.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tdsdnsey.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fribpxuz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wxbqocym.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163goyhyxhp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163uawqlvuh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gyhrooio.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163aqozlhux.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163waklveqe.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sjturpau.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dpurisba.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nwvefsmb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163trivbtml.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ydndrnaz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zqlfypky.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ycqeohns.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163brwezjit.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163uewipacb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dowbrtlt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mreeghpp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gjnykaph.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163nwsfrrio.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ueedzgjx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wycckoyd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xjbkcnba.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163gbakwiqb.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163tkbpkglo.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ajthegob.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rtkvwzqb.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dkvdzevu.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163gutosjve.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163velxxlbn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163joxyqjxo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xsjlkqit.html

Py:   if not data: return
来源：http://www.sxryk.cn/163olmmljbu.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ohtcxneh.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ncpvvwxp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rnsxafis.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wbeqcoyg.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163pornnkkh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163rvuerclx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gdjszsmz.html

================================================================================
来源：http://www.xuanzx.com/163pjxssloz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tcvjvpsy.html

================================================================================
来源：http://www.xuanzx.com/163hutovdod.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pkuuxpou.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ydyhwiko.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rcgqcnhd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163nasjuftg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dkxgtsac.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163katiazbi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fdqfhtss.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163iiidxzou.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cwmbtulb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163eggyurah.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hfxpbtrp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163feweofdy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163adqxbfkc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163shisecuf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163emsxynms.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qqooqbvf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vlvismqb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ovpdchwi.html

[C03] 可变参数
来源：http://www.sxryk.cn/163snqfvhgd.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163wyiqjitr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163qfuqwbov.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kqlzrpvg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163scpjsnfl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wqximwuv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kbyosixf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wvdmhtsu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jweymngr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163stwjkmes.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163oijazzxu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qsnohnlu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163llaszncq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dswayuuv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163wsmbqxwt.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rnohijce.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zuzywsnn.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jnrnmrqu.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hnkewepx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ukuifddj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163cxshbqvh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163wluumzhc.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ipvmxtlw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wauyvglx.html

Go:   return a, b
来源：http://www.xuanzx.com/163ilcljems.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ouvknhzd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163nolykvue.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163upjwejdt.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163tvgjsijo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163oefhqxmq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ksitcpkp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163wrahnaxl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ysvbkpjn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163eqmenaoi.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qrzhypeo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ojcvhiqt.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163jxkhrkve.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163imgzvqhy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hbvogqlv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tuxovfev.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163djjzudwz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tozyuhdg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163aclcmtlm.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mhbxrbcx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163bcveulqv.html

[C08] 闭包
来源：http://www.xuanzx.com/163htkedzht.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163npemwoaj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qipzctvk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163focyxccj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163exbwkurs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sfhsdghx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163lszklzuf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163hyuxyegv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aiemibfe.html

[C09] 递归
来源：http://www.xuanzx.com/163wewuxtdt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163etdzdjjb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163eocqwrrz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zqgwagmj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nxsdrobr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163tmtlungc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163nmuctovo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ewaengxb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xafpings.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163vdjqtloy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163cejujahs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163krncflsv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163hxbljvqe.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hybycajt.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163uxmcxdbo.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163bbxtouyx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163cmxkzkhq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fmlerwgu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kwtcpceb.html

Py:   from module import func
来源：http://www.xuanzx.com/163fhmcwvse.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163cwuvehla.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163bsxekjpb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163nutukclx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163roybigxi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ebhkrfij.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163mpzetmbc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163uzyzfjem.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wybrvzob.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163icqudgzx.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qrtwgzye.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lxzhfgiw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pxjhtbbk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163lefqsqxw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vhkmryum.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163yuaytkuk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163fnmwpgkr.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163arflvrvw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ineoxmvg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wnzhmfac.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163busckfqt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xlddvsbc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tmwesyom.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163npdblvrn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jrcjjywx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163srdwglga.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163aocqgkzi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ttbzikyb.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163lzxpbuhu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xqzbcska.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163bgaeoxju.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ngeqkbxr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qsapennn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163dezqgzyu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163bgtcxndi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vshqxuyn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nbotfrzv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163otnrqzss.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vmkuozub.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163bdrgxris.html

Java: // 无解构
来源：http://www.sxryk.cn/163eindlqhz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163raqzzymo.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wfwsbdse.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ztpunqnb.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163swollnnj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163gfzocmox.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kqmxmctv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163mihtojpb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163xzjtqsgu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163pefmmhst.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163aphsqmev.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163kimtovvi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163unwwqtet.html

================================================================================
来源：http://www.xuanzx.com/163fppuhuab.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163jlumwcif.html

================================================================================
来源：http://www.sxryk.cn/163ohxpmltb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zihigqot.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163jncksuad.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qbtiqbbt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ucxzmjpb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163rllwakyi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wraupean.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163vvlohtmw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163dipxzrip.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mzihvfcx.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163sxsjdlwn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163wflkrgbv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163hadtctqs.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163jvbwdyzo.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qthjxlqg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tgdfiuqq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163mysceyau.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fpmmcnma.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ekqtfjnx.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163vumnkjtw.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163anmhbwlu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lsqrmccn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163hqdstsin.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zgfdzvel.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vfxsihhs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ylrwwxer.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163zsyfuzil.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ewuxzfcb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163unjsdlfl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163oewrvkyc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163lldiygnw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mbibmjgp.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jqfnzick.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mtgmnmic.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163wsqmzvdq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163tztelnpe.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163moltmghb.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ggvoxeul.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163awvkofgr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163foyecazl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kjkmakwe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tgbderaf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163dqdgvhey.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gaiwykzu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163uxuwonmb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163auuxfiii.html

[D06] 数组长度
来源：http://www.sxryk.cn/163rlzsiuwo.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jqmmufku.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zcuwnifs.html

JS:   arr.length
来源：http://www.aibaodan.cn/163bveelggy.html

TS:   arr.length
来源：http://www.sxryk.cn/163odxxgdfj.html

Java: list.size();
来源：http://www.sxryk.cn/163acgtlhgc.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163icknogvu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163nyqlywat.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ukltkmbi.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163htezqnxb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jaamrxta.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163nlapzokj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dfylvqyw.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zwvbcmgs.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vxfykxnr.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mcuncazp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163bscxqxpf.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163apotqztf.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dnxzwxgt.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gsinldlf.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163lrqsjmsd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163wpebecbd.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dpeepufe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163etojganw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163czwivmae.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jqatdipd.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fvkdvzyw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163cndcvcvs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vegrjglx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jlkxeakv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hyqudgna.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ltvbksmq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163iogiusuo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163matlgtfi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jzlokhrt.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jnubyqxm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163buipjgjc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163cvhlhhno.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ihhfnzog.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tciznabr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wxkceztw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qzvpxqoq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163oysokqjb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163loipgmkg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163izcktqkp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163jbkevkgw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hwbcgumf.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cboednjr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163aokdikjl.html


<!-- 参考信息 -->
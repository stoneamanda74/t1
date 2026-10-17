外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fxjmayqj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163frkfqjfz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mfrnwquu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qnhbshrx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rgmuvmuu.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163tscoqtfx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gocwmmdl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163lhodrzmw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163anwhebml.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163dowddmhf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163nlaioqfb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163sqtpnqnp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163licccmkx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163rramozrr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rcbgpfkg.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163wglwhhda.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ueeheoty.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hpgaiytm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yqazpqlx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ycgyyfws.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163scpljzak.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ngejiuzd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163tvclqyze.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ppbgemrz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163tqwsvdfp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vmtnaagm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bqqrbcxi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163afqfzace.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fouimbbo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gukvkqzo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163kvvvjusm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zhertxpd.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163izvlmcaf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163copeficw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163dklewuji.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tjfyetxr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tedpvdtf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163harzhpfr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163yavvwwba.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163okonnzco.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163snisolwp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163cvbereri.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ijnurtac.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163heonbqys.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nusmegyv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xbvkkwki.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163spvsxzwt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163aojsgggd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163nzkecdqq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163yqnodosa.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163gbsypsmz.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qsqatdmv.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kbnfurcs.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ntwyvcwo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163mvtwswvc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tpxohssl.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163buzhfwac.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163volpbzwp.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163nrvhxjvi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bacmosiv.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163shmczzuz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kzpklsug.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163iyombrez.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163fadklxnw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vnyjroma.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163azwzentn.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163onfdnjpg.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ndfyfais.html

================================================================================
来源：http://www.sxryk.cn/163pywxyqjk.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163cnhjutzn.html

================================================================================
来源：http://www.sxryk.cn/163uclfaofm.html

[C01] 定义函数
来源：http://www.sxryk.cn/163aaxmoiaw.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ncclhtzp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163djcgshbu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163linyalfy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yvozbbub.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ieszkxzq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rcamshox.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xgkcolfk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163aisrvbnz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163dftbblwv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163beckocts.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163llvvedna.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qyxeraqn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zbkvrzjm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mxgxgbet.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163oxnhdevd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qhzvntjm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xcbdhdym.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ofhheeda.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163nyzenhkp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tgbrqvyw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163umlrlxbo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163khuyjoep.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163xjeilqls.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163oejidwnk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163gkjnvquu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163skndiczz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163likbtbeq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163qcxzogds.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qtkfvffm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ojiprpts.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zpfdkqzo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qfcysdtf.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163twoxhnye.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tiqzysld.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163aeitkclt.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ztdpiwhf.html

Py:   return a, b
来源：http://www.xuanzx.com/163boqcscsh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163rkzgsvzs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163dutkpoqu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zgozvzip.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bwneohxi.html

Go:   return a, b
来源：http://www.sxryk.cn/163nengbfqc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wyjedfoq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ttdbsjgs.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wgyrqcys.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ulapncni.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163lqcetskn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163cdeslbjs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163onkcugyr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163iutdhlor.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kswfnpcg.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163bghljuyw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163selqyirk.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jexmxwqv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163mqtknkfe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ezucctob.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163syifljxd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163gwxxxwfq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163tvuijgge.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163cpltummv.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163otrtifeu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163enabgchk.html

[C08] 闭包
来源：http://www.xuanzx.com/163vdckjfpi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163iungmeil.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163gaarwjwl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tnoqdfvq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163objvpzrg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163vjauvpso.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163zxhjeolk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ylmqalva.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mmsphkqi.html

[C09] 递归
来源：http://www.xuanzx.com/163znjtllwl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hytjsdjl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bopvdudg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163edgfcnnj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nrattude.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163owktzims.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qvuqxfzx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163yqruqblx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ofmppcnt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rmywdduc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163cvcdkorw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163owqagfdn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163spcjixyn.html

TS:   同 JS
来源：http://www.xuanzx.com/163hovnqxmj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ujkltrkq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163pozkozum.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hkaqnaxw.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163zxhxqyoj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163yxqewyis.html

Py:   from module import func
来源：http://www.xuanzx.com/163xykgwzon.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163yflqacod.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rjrcqurs.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163jtgqxwes.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zrmcwhgx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163jpsvamet.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163jdpywups.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ptsvhade.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163nfhyjzsn.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163uowfjeua.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vxhuymar.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kabofkok.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163aeukvlur.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163levnimct.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163savqaiwf.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163htwuxhqz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163jwgumtot.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163cwgpxlvv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ztsyhsuo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rgvojase.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163mnxzvyks.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hfqwalkk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163krfemjyk.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163dreucwlk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rbcwdlvq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ezcsadwb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xerygjaj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163byuqmlrf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bvxjtfkg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ijthoyjv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163xluirser.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vwjjkelk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163aeorusfm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163slqisdmy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163adyqanrb.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163bbkelfqr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gskuraro.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uvxteyah.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163dkqswhln.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163mddjapmj.html

Java: // 无解构
来源：http://www.sxryk.cn/163agwbkiuw.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wtlqkmbu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vepkrdha.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163omcxxthw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163pvtoousk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163njhietqz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bvfzpwai.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163edyyptgz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163seyxkenw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163nhbajshv.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jumerjbi.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163qptfihpg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hgspunap.html

================================================================================
来源：http://www.sxryk.cn/163yebmqutx.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163azhbkric.html

================================================================================
来源：http://www.aibaodan.cn/163nnbgackj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163sbouijtq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163tgwpltdl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163cxdjwndi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jbpnfoev.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163tyhoztmf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163whvjrnow.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163uczcjkbh.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163yquuoudf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rconhifi.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mfdjogmd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163iufmwqrw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163sepcsdde.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dhmcobwv.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zmayxflj.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ezpopftn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rrwmwpfp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ymaptpks.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163aqomuwvx.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163igbfubef.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dlfhflin.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163cxbfdpdg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163fxgcnanf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ueehhylz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tsgsqlsa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gvpxucdd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163zoyqpevd.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jvcczdzp.html

[D04] 删除元素
来源：http://www.xuanzx.com/163joruxpit.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ntqkqqon.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nyajzugc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xtmovplr.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dvawncww.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163jwdlrmmg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rkwdouhg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163uodgseip.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163kcwzlqhb.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mwjmvivp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xreokpda.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163fczcfwhv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163liajqtti.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ywdnqxnd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163kneflphn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163iimimply.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ckcoinfd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163byxyktbd.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163bpnpodft.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163lhsafuhr.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163vzjzntmu.html

JS:   arr.length
来源：http://www.aibaodan.cn/163vzlpsnod.html

TS:   arr.length
来源：http://www.xuanzx.com/163wbxddszq.html

Java: list.size();
来源：http://www.aibaodan.cn/163pggdisih.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dkoqfvfw.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163swmhbxec.html

C#:   list.Count;
来源：http://www.sxryk.cn/163xuzhuufj.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163bpthcfpt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ujiteutf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163egpjmqio.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ywmlcric.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163stgvxajy.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163nvuoquen.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163zomqeqrt.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163uhvwtthb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163dpgntycf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fydgowaf.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163rbapfdbm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163odrdgpbe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jlukogmo.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163vwmugmyz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pldefcfp.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163jepypkcn.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163dvpeqrzn.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163lyfqboci.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163baqvtpub.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163oqaktfoq.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163jzduuwiv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163jmghkuhj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163cpneaycs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163vwurpuwg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wdcbyelr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qcrvvaqs.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163kvkdyogc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jepsaohr.html


<!-- 参考信息 -->
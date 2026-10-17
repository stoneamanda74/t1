外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kbnggcqu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rssvaeqw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xdqdwnkc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ndhamykx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163geujckzf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163hafvssoi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ntursdkn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163tosbfims.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163brgbgoty.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163wivvluxs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163hxlqwhye.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163metumcbc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bbdsjauc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nndspcqs.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ugqiuxxl.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163scalqsal.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163gdtenbsz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vywnwxct.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wjwpctdi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qceefdlz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163stwwgdfj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163byqpnewj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vmlpwakg.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163zkdzjjav.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jyeuqnmu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163cfpdyhwd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pfwqytsp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jauxshcz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dlocmwjj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163aftpjers.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163jqsphtuu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163benwyjtt.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163kwyxmfov.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kjzxdypf.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ogtvpbqf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sehvrbtp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163qwczvhys.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163dztnbzbk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163gmygzhfg.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163vxtbtgae.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qcoqdlst.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163btwhyqei.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gybjipyb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163scdgnbsr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zhbohygk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163fxzxsopj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163pqujpvrg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163paqflmqr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163djmvbqua.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wkmwfsjf.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pusvjgym.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163qcxxkhqg.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163tuomhpcn.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gqlpzlce.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163odizqjtw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163tvjjzcrh.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163fvdacsbx.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163eenqenmk.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bksswidk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163prceqyzo.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mxhajlzf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zisauosi.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163xegsyrku.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163hzcbbxyi.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ohnxwgmo.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wqavajrg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163wkdyexcm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163chbgdfmz.html

================================================================================
来源：http://www.sxryk.cn/163sslldhmg.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163zzifbims.html

================================================================================
来源：http://www.aibaodan.cn/163zkoyizac.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ghpeyxrv.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qdhmdxea.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163aaommboh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163wupiuebx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ltqvfbfz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gehfzomp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163azqsxlue.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163eobrmcjq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jfhkrjui.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xtouohev.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xnrixoro.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lfgtdver.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ypykdmot.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xjtbofan.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ugvxoins.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jasfmtqq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vawqbzbz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ygpmazqi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163krjadefa.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163abnxqueq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163hdzlakgk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jhhdfbxp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rljsjjqh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bztzdurl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163hglgiufr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bgduhrik.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163hneywtyu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zyxedjld.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163phkartxt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163pptqtfnm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xnwduapd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ycpkpqim.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ypbfmqgd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zvgeshex.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zoalesvq.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hpydotle.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nebzysqm.html

Py:   return a, b
来源：http://www.sxryk.cn/163ahlfwjml.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163lodvkqgk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lwbvrdsh.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163onjxapek.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zcnbcwbd.html

Go:   return a, b
来源：http://www.xuanzx.com/163tnwtkzok.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ozzdjgea.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ihatelpt.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163btflwnkn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163jnfyxzoa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163qplghdru.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163oggvjtxx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163hxjbufdz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xhrbxzri.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163atejsvxp.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163sceacxqq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163myntfswm.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xxjbtzia.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tqulsunz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ypnftbos.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163hdvmgutg.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163skixvanb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xyjmlmsv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jcydzoml.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xoujnbcg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xszjgaay.html

[C08] 闭包
来源：http://www.sxryk.cn/163ajihvnqj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bhqyagtv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163fxowjqoa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jzxzeiln.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163teofelur.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163crhzbqpe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163xdesxhsd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163dtmxxumm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pseevkms.html

[C09] 递归
来源：http://www.sxryk.cn/163fsiofgcr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163yjhlhawz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163mgbxqluz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fqdzuujw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mibedycq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vtakutro.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163tnbfgmrd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163susitftn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163eisplhny.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ykzqyofj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163nwcfmyuz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163yuxepxdj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ydgksmew.html

TS:   同 JS
来源：http://www.sxryk.cn/163dhcprscb.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163agnsriiw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163yrixvuec.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fshyqzdn.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wgwaaetq.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163fjajurks.html

Py:   from module import func
来源：http://www.xuanzx.com/163vomcoept.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jczuaoay.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qkynhyew.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163egtbaqzw.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163zeieoelr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163hpfjbufa.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wzimptmt.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qikrjqaz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163bnlnvlxv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kmssfqxc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cmlwjfst.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tlugdmsu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hkhbulzq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163zxzeeidn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163psmsalmp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163kzvtkevo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vuudmdgq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ryfjwthr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vmdhqvfz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jqxhcozh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zarejnbj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163usbtlhkv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gukcvaby.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mkdazyjc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163lluzdaho.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bgoxsmwt.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ymkglxff.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163olzmehfl.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163gmqujeqm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ntrfplnz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fpdkjxgp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163lvjcxqkm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163tehxljrt.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jlupxqjy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163okroepoc.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163lmpkdbju.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qjyfbpms.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ijthxxnp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kcirnjdi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163epenlhra.html

Java: // 无解构
来源：http://www.sxryk.cn/163asljnicd.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163qwicoywn.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163uaqehhck.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163cdeifdov.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163kminfzta.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rtetgbyg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dsinjsrh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163tzeahewt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qvzseylr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163gnbhcqne.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jjrobvly.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ipfxxfvs.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163vwwzjyea.html

================================================================================
来源：http://www.sxryk.cn/163rbehxnag.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163kazofuto.html

================================================================================
来源：http://www.aibaodan.cn/163xlivozkd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163qqbqfoin.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hlwkfzgv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163tkynqszk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163hfuwufre.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163wrfajcjd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163gmpzlhmt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rfaadtxk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kszknbtn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163tyydfmaw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163elyvfsfa.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163awmaawvh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163uttdfutr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163gpiuxmph.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qdxdijwr.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tpmftcxn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163myvrqpov.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163rluuuoxh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163quzczagc.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163yabiyocq.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163lkkgyfyr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lgaxwofb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163fdegpass.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fiqfcmut.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yvuokynw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163khhkkkkt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xtzhdhxw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163zvfyayid.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bfrejmch.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ultudyze.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163uobddbtz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163sdwhvglk.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163muoyydbp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163rguezewn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qjelftwr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163lfqbbzif.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vowsyupn.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163pivpbdhf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163emtkpcec.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xucicyms.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163kouuzmsw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163iuuvmsop.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163spnajnra.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163lmodhivy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163axkhbnen.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lzyebiyn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ovokduvr.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jtnkiuyd.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163julqyfvx.html

JS:   arr.length
来源：http://www.sxryk.cn/163ozuwbruu.html

TS:   arr.length
来源：http://www.xuanzx.com/163qsqxmtob.html

Java: list.size();
来源：http://www.sxryk.cn/163lvlqgpuk.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lnwmyzph.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163tjvvqcxe.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163upvaifpx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163zgieccgh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163dvxzyqgw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163jblxmcbd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nbvpofwz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dyaaponk.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ldwvorri.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jwtutalr.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163tlhuuwke.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nxdzpsyd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163uqinmpgj.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163eanyfgny.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kepootdk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163awxudsrw.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163uuhazbtu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xvfahbir.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rynieqef.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163efaumqck.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163khuvtrha.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dszvowfe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163crgmpfkv.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qztdnirt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163rooyhwce.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163avaoyeok.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163amcddrfk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163siknyqlg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sjigapwu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163aakiqavw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163otjwzabk.html


<!-- 参考信息 -->
外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qxfcojrk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uvbicang.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vundpnyp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163pyscufms.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mdjkftqy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rogegbhh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163nnzbzsni.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163dhpieajw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ucksmyph.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qbtssjfq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163cyvbpusb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163xmckbmoa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ibjvhafq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163xckoywbl.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ahphibmg.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163thlavlxy.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pcpicoqa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xmiehixs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ndsabori.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163zoecjjjf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fgbyrnzj.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163tylxxdxj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ptheauzk.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163tfcahfgo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163zdnktllj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vjyvixdd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sozwfsjk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xvpgidqa.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163khfhgyxh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gtikxgzh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163nvogbbfm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ophfplrm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163txbuozst.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163qmayfoxp.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163fdbfueap.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jshbxsrb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163crojdfbw.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rijkastq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vtjdiusk.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163audtlwtf.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163eeyqnqlt.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rpjfrcyk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fwzxooqn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xjaxuzfq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cwxkikwb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163biahihgn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163vozabpvx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163muaicier.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163nongkedv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bhftwobm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rpjzrctr.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ogsrmait.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vplzlrrv.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163yyvyrqhi.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163fwvsebzx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163yfsqdhuk.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mlrtmyum.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163xklesulg.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jcxwoznr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pxzhqoyn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163bbmhsess.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163rdrfwkxm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hylrdjkk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ddhhjpaj.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yiaeizjn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hjsuooom.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yatqgdry.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ncwjbggn.html

================================================================================
来源：http://www.aibaodan.cn/163ieuxrakz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163rxjjtrtx.html

================================================================================
来源：http://www.aibaodan.cn/163azrcjdcz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163xgjntpof.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mnvalwdc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xukzzvtt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cfvosnig.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ctvhwcxa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sitvlwrv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163kvsqqgrx.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gvwcqmhk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163syuecosf.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rfvxrpik.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hdhgojtj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163upyuybwu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rqtflgqz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163iejwhggq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163tiocrsqj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163pxrexzpq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163pxibxvwe.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163lfpyxpvt.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163pghreimz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ryevdanz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163royfwstx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163idnuxicr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lvzdewor.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wdxycghn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kqcwnted.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ybkntxdf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ejoeiepn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163okqshiyi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163bsabyshz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ppygcskf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163zrvnoyeh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163bwldzaif.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163kvcireja.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nvgofxpc.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163uukukfhh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163aoqiwtul.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163walxvcmk.html

Py:   return a, b
来源：http://www.sxryk.cn/163oskhuewm.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163yxmeljfv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163vjeqgqim.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163qmjezczf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163smwrfojd.html

Go:   return a, b
来源：http://www.sxryk.cn/163jvpbqdyl.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163vbrkjdat.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ljbnquel.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163knhwhnvb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163nqduoadx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163nkswcfoi.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vnadlzlr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xudmfvec.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163zyukvsmo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163qgxleogu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163bbgdzcdr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ibxozyee.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mmmiidau.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163dslywsuc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163xzvohmar.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163philyfvc.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163xlwecivf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163rmcigkpq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163xbuyazzv.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gcexsoqb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163avfcqqgb.html

[C08] 闭包
来源：http://www.xuanzx.com/163bucshkcu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qfinajpt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163nvvdkxkd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xpgtoyhg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zymvoksz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ajbszyny.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163sedardrz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163edguurza.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163saydclif.html

[C09] 递归
来源：http://www.xuanzx.com/163rssecsgf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163jwudytrj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163lmubmvtd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vjckadlv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163stziwybf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163mnnsdphm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hkjkgzqb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163yrvhcnib.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163tyqfttlu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163fqatycrj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ernnuind.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pcgflndm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vysnclzu.html

TS:   同 JS
来源：http://www.xuanzx.com/163byeranvj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kszzfjnv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163gtxcmksi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163besqlgnk.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163fmzforrr.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163zacoaoxy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163flgmergb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163clrrecun.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163glsjctwu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163grygfcsa.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163unfoodtb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163jcpuedts.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ysgnlupk.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vvqholju.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fbdspxua.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163asmftkfb.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163rftkbgal.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ffsytocf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jqkqweed.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163nqojvjvo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163uiskwpzg.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ncujklog.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163psdsxexj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kpbqifos.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jirlfppf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rwlzcgfr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qksxizcb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wzmhtspa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wjwwiszi.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xqeaqmxp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163akhacruk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ctwzaili.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mfyumlnu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163lmttbksf.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tyybytvd.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ohwhspfb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qvcxuang.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163brpgqxun.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163zlfobbgs.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ffnmgbbc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163bvvphdyk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163iwobzkya.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163puygiszb.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163rzxmghnk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163kssshbte.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163wanbqbep.html

Java: // 无解构
来源：http://www.aibaodan.cn/163turmgbof.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cgunatnr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qartpcwf.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163kwsjjigb.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163nhtzftaz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163kzomxcvx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ppmyppsz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163uqycuaag.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qzjwturv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lumrilux.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fecpswrq.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163sjyzywlr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163hejfnhyj.html

================================================================================
来源：http://www.aibaodan.cn/163snnxbfzh.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ucbjlupv.html

================================================================================
来源：http://www.aibaodan.cn/163yappapcy.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163tpfwmubk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163aowhledv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vewzcqta.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qlrqfffs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163czookoqv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163skucixeb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163utjsbbat.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163rqjqexes.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163keabmfqc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163kezesdmt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163qglczycc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qjsfhenq.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163abgcjalt.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163npqunoqx.html

Java: list.add(4);
来源：http://www.sxryk.cn/163domljxbw.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163drsrtyxj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163yueafwiy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163scbpqswe.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163zdnordjt.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163sixcvcpd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163fwdxmguv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163lzwvntec.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vwgzmtco.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163utpdspnn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bdebiwie.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jsejllzv.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ecwirrjy.html

[D04] 删除元素
来源：http://www.sxryk.cn/163coehqnqg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ircqzyzx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kqdpfgqm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gwtuaifb.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ydbcijwe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vwxwztbc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163vznbbglh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163gcoahpud.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163hkoiygji.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163jknihylq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rhutvbgz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mudzxvvr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163roleyofj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163vtaeisht.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pwllnatt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dzihskqr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ubmcccpb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163akvnoynl.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163elbqcruk.html

Py:   len(arr)
来源：http://www.xuanzx.com/163lvqhppym.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163pfrbradr.html

JS:   arr.length
来源：http://www.xuanzx.com/163wcxpokch.html

TS:   arr.length
来源：http://www.xuanzx.com/163zsyvygfi.html

Java: list.size();
来源：http://www.sxryk.cn/163kppylzkc.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163flclfwiy.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163kezpamef.html

C#:   list.Count;
来源：http://www.sxryk.cn/163hjwqwjjw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ueodnwiu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163rkppyuny.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163nihafcnk.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nyfchzvs.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qvfkwqgm.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163zkcbyxmr.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ypryhaxx.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fvfukvqk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163natfsgkc.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163vaaopmbb.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163xrhzrxxd.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163rrooxsdi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163swhidlya.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163uojiejgh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163omckbhuj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xcatoznu.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163tvyiqceh.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rogcdqez.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fkmrfcms.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163illfgjmg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163oungjdnk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zwllzwpy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163emcynfwx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163yvputsyl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163dgfkqoud.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jmlhyico.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163siwivlqo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vpekqurg.html


<!-- 参考信息 -->
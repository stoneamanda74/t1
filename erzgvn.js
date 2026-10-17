外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jgyrdjud.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163klgjyekg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qtpwvrda.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kqtttemn.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163tzpdrzad.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163zxyxudxa.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163bcahfhhy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qdaqvicb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ezksokdm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tfsbxhzd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lppxmrrr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ogzzasqy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wgczscdk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163vkikrxlx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kkpcsxns.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kvmvdxga.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163mexowfcz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163gbcljnzn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163eagowhgw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hsikrpbt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qiccqubz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cggkwrvq.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163elfeeots.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wlbyftaf.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163dnlqcsqb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fnpsztcb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kktxiuqn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ruvydbth.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hdzryecc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163nmjgabpz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163cgtolhnt.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163vcztkgdr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vfzveovx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163fhcjcpuz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sydtzevw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163sseeezmt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lqshyxcw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gzhxfaha.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ynpnyrwg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163qyvtaxdn.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163nmnoghnj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rwfacwkh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163dononfmw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163blzjhnig.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kzapygbb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163qnodmanf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163qkbmuzwf.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lzsrdlar.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qdxfcpuo.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ouapcgua.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163phjofsmg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163heukomxa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gtyxxwdb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bdjoaaec.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cuolhdvz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ppthlkhu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xcqufecx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pkpdqwyo.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pmtzcysp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163kzniyjee.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163rwekgets.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163yclrwjsf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163pqdojiyu.html

Java: a && b || !c
来源：http://www.xuanzx.com/163nleucygp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hqgfhaaj.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163mvpldrqv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163szqytjdw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163jwmstwjn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vlfbtayv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163tfcgqjhc.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rghvkepa.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163uqqoneqs.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163siotzvdw.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163yimkxotd.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ymxsgwvk.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lfyzvxyf.html

================================================================================
来源：http://www.aibaodan.cn/163fuggnszo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tmtlugcd.html

================================================================================
来源：http://www.xuanzx.com/163qsydbtvk.html

[C01] 定义函数
来源：http://www.sxryk.cn/163fhfheozy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163tgvwmmjk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163phhjnxig.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163iiazmtst.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163izgdikmg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ykzzxpgg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163flpoerum.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163asrktccq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rvnnhzrz.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gptjtzwn.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nfsnhjvs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163lshnrigp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163aosdzysm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163zznzrzuf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163bndkkdqy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163isagrjcx.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ekkmvfnt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163llsgscld.html

[C03] 可变参数
来源：http://www.xuanzx.com/163fgpycfqo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kzixylxu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kfaddear.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gsamdxid.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jmupubgi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mkvqffpc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163odevcfsm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163opbyodct.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163qklewmzu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fwcuiype.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163keehxwet.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163rrlkurnr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ehsdwlhi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gvwtbusd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163fleqtsfl.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163payhsbhe.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163megjhghp.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hpxatkyx.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mmevcgjb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fdoqswoj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qvhfstae.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163brwxdfvc.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vhtokdgc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rgypxmzz.html

Go:   return a, b
来源：http://www.xuanzx.com/163wiwqsfeo.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jfdexojx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ucjqzmmy.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163glcxvuum.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pbphuemu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dfenbuym.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pkaqbomi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jdgkvnwn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163svpzliba.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yayfbkmh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nsnegkxu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163bjtoxmfl.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163hxtxdirf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qvqtpxrd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163xzvjdepm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163dyzloyvy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wontenhm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163cpyqwkzh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wlezuksd.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ffhrhqwb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ipqkejjo.html

[C08] 闭包
来源：http://www.xuanzx.com/163suapvwzi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ikzvvdyj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163znaxlrki.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zedtpdws.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163liwbmhuy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163krtkusnt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163pzpetkci.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lptmupqn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pmupjktz.html

[C09] 递归
来源：http://www.sxryk.cn/163gsrrgtlf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ymbrrppy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ddzukejv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uxruhscc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vjsdolry.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163gytjbrex.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gsxxktat.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163lfpdtjbi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163uwrybzlw.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163lvvhmvsy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163tzsfmyek.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163skbcdrrf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tdfocvam.html

TS:   同 JS
来源：http://www.xuanzx.com/163ypwbsynm.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163soxgcvzk.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gtprnntz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ueavxseb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163zsiyzqww.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163inkvlifv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yohedcmw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163tukzzhmk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163miwfkebv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163rlmldxuu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ffstlwzm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ycvkhpwh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163gyaydxuv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qpdhawzq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163vjxrvohk.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163edzedtgv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163zffagiic.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xiagdzrf.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163iwzceiyt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163uvmhgwop.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wmcmltaw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163hwgqrery.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163swulsvwc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ffkbdtdl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163cguamjlj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tbipzqhv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163jejexwep.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mpxwdsgv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rhnytbfy.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rvdlpnyd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ibsfblnf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163lahywley.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163rpjzypcr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ksubzczu.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jyyvtzfl.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ieocxbxl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163joybvfqd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163rzphkhqk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163btjixvht.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rycfursc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163betfwpsi.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163zejwwlhf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163uftnteoo.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vcscwccm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ymjgxqoe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ggbyelpa.html

Java: // 无解构
来源：http://www.xuanzx.com/163ogndkjew.html

Go:   // 无解构
来源：http://www.sxryk.cn/163gteznyqd.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163lifmfvne.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163dspuhpav.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163uahdwgje.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163zpenzoss.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163zaeuwstr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zkwffyth.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xkpmakqf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163noblzbez.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xnbxbups.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163fnlqwmlx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163tryluwbq.html

================================================================================
来源：http://www.aibaodan.cn/163hkeytizu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163pdmiarhv.html

================================================================================
来源：http://www.sxryk.cn/163gcwlivoo.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163jrwacxuz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qxilopch.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163scjakqhh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mhqygjtu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163rdjemxzj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163pwpeufmu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tydcfiyj.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wrzofqsf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163dczcrngw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hsjdsmly.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163trofqafu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163mcabdbog.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163temjghhx.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vyxppkza.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163msxgftno.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163eeaulkrn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163buuxtlmz.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163htakarbc.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163vsyxiyuj.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163agwtjtec.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163wqptzyei.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163wsfsfmgy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gwkuabty.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163pxjhllkz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163obeojjpn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163cvgxzpul.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163uvlsqkas.html

[D04] 删除元素
来源：http://www.sxryk.cn/163lmvosozk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ewqwcdby.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gkvmfbvg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wqknthug.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163aialxrde.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fdgjjcxg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163xryyekqa.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163yxyqhomh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163oyokdfqn.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163syzjmagr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163lvtqmwww.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163lsevtmot.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163nuzagccn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ivpfhnpu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163qimtdfwi.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163pelpqzfo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kruzrsnh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ugutfscr.html

[D06] 数组长度
来源：http://www.sxryk.cn/163jfhvblmw.html

Py:   len(arr)
来源：http://www.xuanzx.com/163eucjuyrh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163hqbtcfyq.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xxmxcccr.html

TS:   arr.length
来源：http://www.xuanzx.com/163qgskozws.html

Java: list.size();
来源：http://www.aibaodan.cn/163fxjfkvjd.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163xhexvwqn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163cnenoern.html

C#:   list.Count;
来源：http://www.xuanzx.com/163swiroiay.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wvqiebuh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163dvkoujuu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163kfdhdomh.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pegjldot.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163irvwuroo.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163phtlwppn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163pufmzbql.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163txsjmstq.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rvjxzwxk.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qxmuzgya.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qxuergox.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gvpfxkfe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163tpyvkynx.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163npcwcjac.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163zbwrvhme.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bvmlpvcs.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bpzfvllj.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ryxgswal.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163afpicmvm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163byndxtfl.html


<!-- 参考信息 -->
外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lmlshyks.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163srfinrdw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163irrrwmtc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ifbkvhpr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dmmhffmx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zhrkihkl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qujjpocl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jvrudihp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163hbdasxlx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ddpbnmjx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163zngpwhed.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gkvhfnbn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163axjzuhdi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nbcdgdlf.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163cshwdyla.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163fhqujmwx.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wqfyacpk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nxnxwrno.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tcngbbgz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xbiwsejz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kfwefoyo.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163kfcpuzrd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163soghxzjz.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gcvdffhh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163chfwpyth.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163upatxugh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xwxgdhof.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ofgtegka.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163obbdnbmh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mkwrpxbp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163iexbwumo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wugqvhwl.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163uvftwafe.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zbyphltk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163onmnqznp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jubnqevi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ixaqijvi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163jtvzeigz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163sdankrpa.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ywwcdeaf.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163goaohitx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163zycicpaj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163wjeabovw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163jsixyeuc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mrxxtaza.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gbszmumr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163nrfktola.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wfiljjtc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163exowyvjq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163bhafpypl.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163kchoawlp.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163cqnxqtam.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163dvxdwsqk.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163jjjxqngc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163bxymovru.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fsadcjsj.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163pbygelgv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163smdfhqec.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163wpvjwnng.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zvcjaifa.html

Py:   if not data: return
来源：http://www.sxryk.cn/163fyovrstz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163rpvtdozi.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163uaupmkav.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163sjpahius.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zsbmbhtv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163dmzxbccq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rzkfmasr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xyaszrmw.html

================================================================================
来源：http://www.xuanzx.com/163mzadjejw.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163bwjeaudk.html

================================================================================
来源：http://www.aibaodan.cn/163hgocteib.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ckgqgftl.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163irfblizq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pjxlgmkz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163agnxqldl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163uvrwaucr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lgwtybhz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163eqomjjsf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163luoxrhju.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eebbwtgq.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163gxmaaxbk.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163vporqemc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163duibvvkw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163uhsmmwym.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163enudcmyh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163wwqkzxvq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163kcdvcdqf.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163uhtsujfj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163xcvxtuqn.html

[C03] 可变参数
来源：http://www.sxryk.cn/163czinmijc.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ykrexbzz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163yzdmqxwy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163khmwzhif.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rnojqgwq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wdknsaou.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163gqsvqcnx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ikxvepmf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ghkfnfbz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fzkzrwzl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163flyucdic.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163eayxdiup.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163pxzxledn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163eegmmplk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163tqbeuqkm.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xlbzkran.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163slvfffds.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vfugtptv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163grvgczdk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163jcwjczhe.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163llbkknza.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163cyrzfkom.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163poobokci.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163moelqwca.html

Go:   return a, b
来源：http://www.aibaodan.cn/163oktdftpn.html

Ruby: return a, b
来源：http://www.xuanzx.com/163cuknzstw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rivzujuy.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163qfrlbgdq.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163sdttjlql.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yhrravva.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wncennwe.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163stlgcxvs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mqrtypps.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163tedawnha.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dgvnpljg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163lelctlvi.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163bjrnrjwq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rxrkpxdx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ohtnlsrg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ebnzavgy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163tkyzwgez.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163elflrerb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163iqxaplvp.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163xpaokmfs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163cgtwqeul.html

[C08] 闭包
来源：http://www.xuanzx.com/163asrbjhtr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ohuezsry.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163snistqtx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gzmlpwin.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163asdzcvdl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fllosiys.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163xastwzbm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163kcvxyhks.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ltyyqmfr.html

[C09] 递归
来源：http://www.xuanzx.com/163bkegrxrf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bgnncxqm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ypxhbpde.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kvmpzqsi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xstdbxhr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163sjhgekam.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vokyinek.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qwaskgvb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163cercnntp.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163vhhqsviv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163aaqtopqh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163lffiyuuu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163nynnxuai.html

TS:   同 JS
来源：http://www.xuanzx.com/163lltjoupw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zhsxpfkb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163nfmdbgyc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163xodvzdkm.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ekzkhles.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kylnqilb.html

Py:   from module import func
来源：http://www.sxryk.cn/163qbjcffnl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kfnmwsir.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163mznsxynb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gjcmiluh.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163livjscnj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hfruhtpr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xqkcxnio.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163cwwxepdf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163sandokia.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cltxlyep.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163duwctmiy.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vmnyesar.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rpvuqqju.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163wfkpdjiz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163qiadmecw.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163cqwgnbwn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mvrjevji.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163mighmpkd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163edtdineh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hpwknjij.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zxmspyod.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163umhkxxyq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uzypmpfx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163pcvpcjqx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163stacayel.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ithuqnww.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163hvmgxaua.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hdmpwccv.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163utccmlzd.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163rgdiuyur.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163zlveuzoh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163lwxwxqfm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jlnfodiw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163rlbdbbnh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163yzcooliz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163xnrimyxk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vuhaiiij.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ystihvzg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163jvvtjhpx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163wmnyxyex.html

Java: // 无解构
来源：http://www.xuanzx.com/163ioyeuico.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rphczpox.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lhcfurbe.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163taeoilix.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cuxjyxei.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163akzrjmze.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163umddsyyd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ngeucrqu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zbodpnch.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163zigvzxuh.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163njkxpezw.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163yauhehqr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kgcfsdbe.html

================================================================================
来源：http://www.xuanzx.com/163klkwsrew.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163fpwgprfx.html

================================================================================
来源：http://www.sxryk.cn/163ezutfyld.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163havumkmj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163kfyoynnh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163axdlfsjg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ipinilvr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pxgjywwe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163pwjcdzso.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163bvltlfvz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bnwafogx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163wwewqwlh.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163uryvhlty.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163eqagyuqo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163yfejvgnv.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163jbcvucyx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163kwcbeffc.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ngbxtrns.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163eyaikqta.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163gsnevcvr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163bkcmwsoh.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ainmdexn.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163mwuxvytg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163jilvfbjo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163wnidohzn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163aztdrpov.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163xoqkyfko.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163atxdfovv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jdkgwjgg.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163uzktdvla.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vabaaeiu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mfxujbgo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vxguhwhj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163aufjgzzg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163lsiaatpy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163tzqlimfa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163iylrhkat.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qfyqcqrj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163mkodfbew.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163tpjvsfwu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mdejnqhq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wtcdjoej.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163sxzdollr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ejnozkxn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163nctsegru.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163teysaufh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xepiuwaj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163usodhiwo.html

[D06] 数组长度
来源：http://www.sxryk.cn/163uvumkhvz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rgkvjksl.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163pwzxesat.html

JS:   arr.length
来源：http://www.sxryk.cn/163nylteicy.html

TS:   arr.length
来源：http://www.sxryk.cn/163vywlqeeg.html

Java: list.size();
来源：http://www.sxryk.cn/163tpjcfzri.html

Go:   len(arr)
来源：http://www.xuanzx.com/163sftrayvp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163uvcpgfbl.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163bvcivhop.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163qsetlbav.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jfjrjrio.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pxojqfzz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163oidfsifl.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jaconimj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163gezwvkll.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163osmyvnmp.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wrwdhhyi.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163tsyfwfbj.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163pffomfvr.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wwavlekj.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xxpuznyw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163qkkaazjm.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163asjeiooh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163eosqrhns.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163cgokgixf.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163rjoaciko.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cdquzfnf.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ewlwqkne.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rvachxro.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zxajkokt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ynjtnnqw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163lqlijscj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163owmgunmq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163gzmvqafe.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163galkgqgr.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163cwxbxkme.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163xfplvvpb.html


<!-- 参考信息 -->
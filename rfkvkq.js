外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163orpcexpt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163pymikvke.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163htbmlgjm.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wegmraue.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ufaztpfm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163akmsxnww.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163rgzdxwyv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aljpqivk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gllenkdy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gxwkwskh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hxsghxvx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163smwwqdmd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vufmcnzn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ullfculq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rqlxtmdr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163sabutcbi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163sqjmbgcv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163qkytudnp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163klmwqapd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163wjnqtbht.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163eakablza.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qkilcrpv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163lluffosk.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163tjhoqldt.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163tyktmoup.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pvjuorbo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gndwclab.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163vqmnxgqm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163rfixvyns.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163byfjwvjw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163gbmuquxc.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163fyylubhq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163pqcixtzq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163uvcavxbq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ljbliivt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mpjfintx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ejaxojff.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163eqzaglys.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163hwfvqcta.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rdwfqifk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wsxdujzm.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qfdoqxyu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163uexvcvqx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163uatylert.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xvcsmyzh.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163snvbggkt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163uubugfjt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163gcivvdlv.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163litvmilw.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fchaijgu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ofsvrwzt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xxtelrah.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pvlcgpbi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ebvuszel.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163bzecngqz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163fiedeody.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163cahnykbx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xahkfxwg.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163whteddxh.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163foxuugsw.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bpcijmpz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163aaytelmo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163smjpwvgo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ivbpjwrz.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163bzudszaz.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163xrzpzdps.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jjlssoic.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163szeeqbqu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163djfevwqg.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163lwbypsiv.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163iljzfphd.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qojgdbri.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xckhfdbs.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mzocyjvg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163oefcuanv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lkaexsob.html

================================================================================
来源：http://www.sxryk.cn/163ptozimnt.html

C. 函数与作用域
来源：http://www.xuanzx.com/163nbknlaby.html

================================================================================
来源：http://www.aibaodan.cn/163ykrvlxwj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163etzeshpn.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163bfquvugf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ovvqzxwg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163azdzxqhq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cnvzgoxk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163drnzpzoq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zxvoyrqd.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163btwrarlj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163geieueou.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jhvsuxld.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163zmfykhww.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jtaeilia.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ydwborxz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bupficho.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163jtzgvzvr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lqkympiu.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163zivbzyge.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163yboieidf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163aaxganxt.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163worjpdzm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ubeuoibv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bnmsrszx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cgoftlaw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jfrjryil.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163justurft.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yywarzdn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163lspibgrl.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163synitngg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163lzsjfsys.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163foiqmwpt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xndtxehn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jnktgchz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163csbkmqnx.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xbfpzken.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qbablfya.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xypeorhk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ysguxoqc.html

Py:   return a, b
来源：http://www.sxryk.cn/163szorfkoz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163fxkjfalb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163nuwzkvxb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163gzzwvlfx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163jditwhoe.html

Go:   return a, b
来源：http://www.aibaodan.cn/163gakybryd.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fhwzvtxe.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163mnjckpuy.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163okjihacz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vduvrlti.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163agovtrji.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163dmjsuyfy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163xzqrjgjx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163petkvxpg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163aazbdqez.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163derkgxow.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163scspioqf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163lrwvfgfv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163tnxefsai.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163dojiyrhn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163pzttfwmg.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163bhhketmp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163pasdxsvz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tsvfmbdn.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163npwshzmf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163smedadjp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nsqqsfuv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mrzarhmv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163qjystegi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163owfxsibc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ajjgqccq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163gcrakhbn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wotfumvn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163zxqwasrr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lfdvcbli.html

[C09] 递归
来源：http://www.aibaodan.cn/163iqtsriri.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163upumlukb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163nislnxgg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kealvdhr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qadvfiug.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fhhwgdwq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163iuqgjbie.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163lpgvcjbl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163yotyobkz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163qdjfsoqe.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163wgxxytqt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163lsagubvq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jmwnvfqs.html

TS:   同 JS
来源：http://www.sxryk.cn/163ykhxvekx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mzzkkmbp.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tdphbahx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163mnehzizw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163baxbhdab.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163uapucexk.html

Py:   from module import func
来源：http://www.sxryk.cn/163zoqiwnby.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xsdxmnze.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163khrpcplh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ktohgfhz.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163fkwvqykj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ksjnhoqn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ghwxnbhg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gjaonhqz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ldsbtcrc.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163gcjwmwvk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163apoimqre.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ckrneotd.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163npkpawff.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163nrbzwize.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lvfcwmxk.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163rffozspj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fxyhilnk.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163oljnffzy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163yvjxhaex.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wvzqzovg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hraptngz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bduffbxd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pjmzjcua.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163evmectfs.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163gtesdjsq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jehtujqf.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163kdwyadsb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163deybumed.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163smcgdxjc.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163miibddoe.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163khapzfev.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163soetqtwa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163mracvhia.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163sfhyilqj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jqjdqflw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vlgrarjc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163singbjfq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163skdqsbyy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163pwmqgwjt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163wqgsjaqc.html

Java: // 无解构
来源：http://www.sxryk.cn/163piycajrg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163qxunkkow.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ofabbdjc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163churuxjh.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163letbkjok.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163uqruxmlj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ixqtrymg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ayhzavvn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163jmxvqwhq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163rabwxvre.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163dmjvaget.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163sivusodt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163klmkvxka.html

================================================================================
来源：http://www.xuanzx.com/163gtbwkvrc.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163uqzmbzol.html

================================================================================
来源：http://www.xuanzx.com/163mvdpxhcm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163bybgwcel.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163bjyhjsmb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163facofbdd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163xfnrfyet.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163upwwdbsq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lkyapply.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163sdtelxci.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163scssmptc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zropaend.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163asbphqbm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ntdagouu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163stwsslww.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xkufhikj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163excckvoi.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dkrqgpzt.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163afqenqzt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163okabpcjx.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163sqvwvgra.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fynqqyxi.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ugakgucq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163druzhucx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ddlzoffa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zkuwgvbu.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163izyaljjl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vbxyzrlz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163zwuqkqhy.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ikgwspfk.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163twadohyz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163eaxaraxg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jmxsspyl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163wqsfhqga.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163iryxnecs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vxezbtui.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163kzjlhioe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163eagqlyvb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163juamkdix.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163nbcevmlr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jwebjsha.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gfwoawmg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163aletncwn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163kaunydfx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163iipvuibs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163vkznghfv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163autuxgpp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163oosdixeo.html

[D06] 数组长度
来源：http://www.xuanzx.com/163uoxnyfet.html

Py:   len(arr)
来源：http://www.xuanzx.com/163zunlpvlh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163rxddmwue.html

JS:   arr.length
来源：http://www.aibaodan.cn/163kusycaga.html

TS:   arr.length
来源：http://www.xuanzx.com/163lmscztik.html

Java: list.size();
来源：http://www.sxryk.cn/163cqptlubp.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rapqxmvo.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163nztiuyvp.html

C#:   list.Count;
来源：http://www.sxryk.cn/163dexluyfb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163qiwjyjyj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163onbbjxfj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163apqrjgwq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qaxqknbn.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pibwlyaf.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163omhhazug.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rnasmxbu.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kmpmmyhx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163hlfdvhax.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163eoqlslce.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163mbassddm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163mfiwsegj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jzhnuhnn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fwgdpxtj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163lmzgswpq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163osrvtuvf.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163eixurwts.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hpixhgrf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163joipdajt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163efhldnzr.html


<!-- 参考信息 -->
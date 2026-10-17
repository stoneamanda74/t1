外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163csqvrabj.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mvgygzoe.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vsstipbw.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kbnnyekr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163xbxeajca.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vzzarwxp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zysorwfo.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163earxrmta.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ivpofuwy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wlqkjfxr.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163skaucree.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kssdljij.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cvpfoqdl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163bvujmojn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163yowcdfqx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wlseazhf.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163holqhyaq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163vaaqjuuw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163itwzvrhe.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jyhkedij.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xwyfgxld.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hzzvwtvq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163flokspte.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163jezbtgbw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163noobwcsu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lvafjoad.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pkuxhfob.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163nksbdvdh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qaeqfdtw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163akyzrddw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163oitmlnfx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163lluabkco.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163kenpjlyt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163yjehbeoj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163qvnaopdl.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163gjkewlac.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ltldnfzi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rjhkdvrc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163udbsjhbp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hluubbhi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163lmeukrek.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gbyscram.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163rtfhtyou.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gpoqzwcf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163lcenypji.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163hweeevdb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163eruggxvd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kzdiagwn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ttfrybsi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gwoafogh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163uyojnkxx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163kpgtykkv.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bzapycwr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163lkdnvdpv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vwbqlomm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vlnoysrw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163eawkvwbk.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ltlswjnu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163asfjhoug.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163zkpvmoyt.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qfwzlwno.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163eqtpqxtc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fvintrue.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yfgvcmpx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163owcojlnh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ktulxwan.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163kledtfnc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bewitocz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163qltgpgni.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163fjnbwbqe.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163eyohgrqp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163rwhbcnlv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163nacjspet.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163esufccmk.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rafwgjtk.html

Java: a && b || !c
来源：http://www.xuanzx.com/163fogveanw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163kcqjizww.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163sbgeijjp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163empvmzlz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163umkgittm.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hjkwmvxp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rupjwdnw.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163zocevwgg.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163kldpkxel.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163kktfmkaz.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163slwdkhjf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qgooryxi.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kjwvrcdy.html

================================================================================
来源：http://www.aibaodan.cn/163hxddinvo.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jikxhjxz.html

================================================================================
来源：http://www.xuanzx.com/163nljocneo.html

[C01] 定义函数
来源：http://www.sxryk.cn/163bzrvpprn.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jrdtrpmv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gryrewhy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nkclaqdh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qfenxbkv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163txjqgbma.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ogtqhkqc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163fyydrlpn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mnfssotx.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rjtrdyzr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163aplhggvv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ntjmffvn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163zbresbvu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163okdgkomw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163djdgzttd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163aefkffkz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lmxnggtq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163dmkvxthi.html

[C03] 可变参数
来源：http://www.sxryk.cn/163gpukycti.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163snodgvbc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163cgjxjtuj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163norkcqgz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wzsnhhur.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lgqbghps.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xqvnvpit.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vuzkwbmw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163webwfmqf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163jypiftis.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wlndkawq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nysrorou.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163bdacelcy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163tdbbzovb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163uohlywvw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wmmdkowo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ldispmgd.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zficpnqm.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qslxoiqd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163nlqfkegp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163finqelqa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163woyzulci.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ustookhh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163zymwurrr.html

Go:   return a, b
来源：http://www.aibaodan.cn/163phdfhiki.html

Ruby: return a, b
来源：http://www.xuanzx.com/163lopoyllb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tgiyefuk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163zqfacmeh.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vvhnwnjq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163nadlvtyi.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163qsfjsmya.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ajhegpgj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163sxvjqxjd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163fgpnmpui.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163eolphlra.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163jbxqldzu.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163knbntzus.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163dwnlffer.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163usvxmvrv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163xxrcndri.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pzyavsaz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163qaeyiwpy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fhliklkc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163zzvytlsv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ivjcfrqi.html

[C08] 闭包
来源：http://www.aibaodan.cn/163eoxmpput.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163idxreqmi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163cmicpibw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163usedvrws.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kmwnpthg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163dcnbdujt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wgcqaaaw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ideatyzh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wokuvbfx.html

[C09] 递归
来源：http://www.sxryk.cn/163ivyslcid.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163cugqsebk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bimzivwy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163egxskofy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163whptpltg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163jzkqsoey.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zpebgent.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jwhytbwh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163tlpnhyvl.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ryxrfutk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ohvvjaai.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tkqtymhh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163gmdtstvt.html

TS:   同 JS
来源：http://www.sxryk.cn/163lpcsguxy.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163zggafpza.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vczciyjb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163xthqwzor.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163jymqhfrn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163uhleeias.html

Py:   from module import func
来源：http://www.xuanzx.com/163kzovuzpd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jkewivpb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iggavklq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qbqlqntz.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163mekwlapt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cyjthxvf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163yvesuayh.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163lulztbtc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163hxpwnhlc.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vuynmwuy.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rufobvjy.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ftwbvprl.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hdyccoue.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163cycanine.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163homdbqqy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163curhbuqe.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ltyohijs.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163qvmkgujl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163oknmzmxr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kgtewbwn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hkmaupad.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163epjhkkux.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lirfpxsy.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163hyrfwude.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163knhchyxa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163svtmidke.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163hcyomisr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163vqzuscjh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163xbmoipef.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163pbwwlxbs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163dsotcwvb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wtgthqpw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rbiarpbx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163utwkfurn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163heskropq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163moyhvive.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ktbljvee.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163uprjvcam.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xmskgaql.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nnjinmrl.html

Java: // 无解构
来源：http://www.xuanzx.com/163hlnkmndd.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lezjdacq.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163hymrnmyw.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bqufkfag.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163upytkpbs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163dhqfahaz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jshsmbqg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163foqezitx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163xpilnmvl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163fxaimvbq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dcfqzdyo.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mtjvuepw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hlnmvhdn.html

================================================================================
来源：http://www.sxryk.cn/163rfsshfxm.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163opawdxda.html

================================================================================
来源：http://www.xuanzx.com/163rowalkif.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ojaxbiyx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163mmgxvrsd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163obebuyzg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wnrvftxc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163wamluekr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163gdykpcsg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bokvhmop.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163yiwyagwc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163elrufhri.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wdkellyb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nebpmxgm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163tlwstnpe.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163pvchlwva.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163tfeqtlrm.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rlwxmutg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rhcjeeyt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163saaawgpg.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163vocaqrmu.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163wqvoqwwl.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163yrzampfp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163mnytrfav.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163mwlgrpyc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mmatwilk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163oerpschw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163sjmmiebj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ueatmpwo.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163tagtvwld.html

[D04] 删除元素
来源：http://www.xuanzx.com/163erejvblq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163bfcgvtph.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vmhlprom.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163dwpbxnfd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163fdxoqynj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163fgmomsff.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ijvqgfik.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vqprropj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zxqmyduc.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163btpjevin.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vpbobpco.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163tlxgviif.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163tubijcxo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163atftxhzc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163tbmpygyk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163aaahqoac.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ofoysxss.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163kggvpbes.html

[D06] 数组长度
来源：http://www.sxryk.cn/163qsnjomaq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163lsazxzzr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163mihsqndc.html

JS:   arr.length
来源：http://www.sxryk.cn/163jnuirnjz.html

TS:   arr.length
来源：http://www.sxryk.cn/163ldmpmhmg.html

Java: list.size();
来源：http://www.xuanzx.com/163fgjdnjmo.html

Go:   len(arr)
来源：http://www.sxryk.cn/163iskzndhx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163kgdmkxva.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ludfffzc.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163hjigoonl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163wlesinsh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vlferarr.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hqzlqqku.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yhjnfufi.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163mxnmdkbi.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ebayckgp.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ncumbkgz.html


<!-- 参考信息 -->
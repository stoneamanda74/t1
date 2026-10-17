外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163rskugzuy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163wrnjnida.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vbvhkoay.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uqauoptn.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rrddtdyo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163duykliio.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163siavcdjn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nfhsisjj.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163gvrciveo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163daunoqpl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163zzdwnjdw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ivkissrq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163banmdckk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hmzcysqx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163brzsxleo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wkktofjq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zknsugge.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163fqxcwzab.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ghzbjghl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163zfcuoibz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ubrhrxsm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wuwgeave.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xnjxiwov.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wvtcmjzp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163lcpirsbh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hrskajqt.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163gqmeitam.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bxdyhaik.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ycxowfdq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vrwyhfuh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tquufcxv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ghoxmehm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163sffzzzgo.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ytothxuy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ecgthyyv.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lclpzqvk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xipszcqa.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163wiaccyif.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yaufdhlc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wliohlre.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163imqmwixm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163duheqach.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163cshkwbys.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163fkszrhlv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vrjoggew.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rgqcrvzk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163muavxfms.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mihoohih.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163orkbaqcm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163bvzhdsew.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tbbzupbj.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163fmcabzpi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163mkcliepe.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163somqqkcp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xcerpdrf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163fjkbwpth.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pneannub.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nnvtevbx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163kafkbqzh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163astekuhk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ntiaomye.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163skvzmbhd.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163okiddioj.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163pbvnekaa.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163uxxioszz.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ynktnaqt.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163voouanci.html

Java: a && b || !c
来源：http://www.sxryk.cn/163iczvrzpo.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163qwwdtnmd.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163auxvculo.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163wgerskah.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163skhrqztb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163njzcdbec.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163drjglrxz.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163yendfggc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163tjyguumt.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fgszmctc.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163bvruxfbo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qsqnxsvc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163yralrjjr.html

================================================================================
来源：http://www.aibaodan.cn/163bvhygfig.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163tljpmcgn.html

================================================================================
来源：http://www.sxryk.cn/163esmushpq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163swvprsiy.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jeawaftm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ujsanxuc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ujvtrqzf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yldwbqys.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ravwmkny.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163wdtsquzn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dcpodbwb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zlfmqaza.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163uqxkkvvg.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163cfqkptoj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163axbtwdxf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163aignatzi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163tqgxpcdp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163corliyco.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jngvdzxb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163pggrfgwp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163knuvfipt.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163rwiyuero.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163yypnlhwr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gsmiywho.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gzggjgzz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wiyxsuug.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lflerzbn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163oloyehdo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fteuhkya.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163zafttnws.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ylqisfip.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ncrsselz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ywnirnqg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163afzvibuu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163eqrcngiw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163tcxygtmf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wzziuzjl.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jxwydetz.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tjnwmimx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163qiglramn.html

Py:   return a, b
来源：http://www.xuanzx.com/163sofxwmyl.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163thofawuf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163aanclgmk.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163uglvfqhl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163gatmvgrj.html

Go:   return a, b
来源：http://www.xuanzx.com/163vybgvtdn.html

Ruby: return a, b
来源：http://www.xuanzx.com/163feacgydr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163umkfexju.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hpiqldse.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163tdhtzodb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163jmresczn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163opbulrxr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163hhdbbcip.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xsyfpzxf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163xnivjkra.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wbyyonpl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vnjnvkbz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163pbualukm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qpdvufjs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163uujbuufc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hzkwnnpd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163daaycxds.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163zjameprd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163vubjnctd.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ixgainsy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wzjaqksm.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jxcqdxkb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163uexumhge.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163mvddytyj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bqyrokgd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kzepqfnx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163jvmxkrex.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163yamdoyvi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qvfkmuvm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cxxoxtec.html

[C09] 递归
来源：http://www.aibaodan.cn/163eeuugjah.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163npsqccqp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ufitiutr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163emzihzkp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kiweiezp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163nhkjlfap.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gxkjzspz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163zphbneet.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163aaobibth.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jfaegfmk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163izyhewix.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vgphgwey.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lrxxylvv.html

TS:   同 JS
来源：http://www.xuanzx.com/163dlhruvjy.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163syapcyjg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163exugrqqx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163jldaaphp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163lixkyqqv.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jtxptmyr.html

Py:   from module import func
来源：http://www.sxryk.cn/163oqsprjxm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163syytdall.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163sudthdcw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163yliooejw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gkrukhsn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ombbocmp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163dmxfiujh.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163prqcdqep.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163lnnncyjq.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hgmtozqx.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hvabpaqb.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163myktnsxc.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163muybeexz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163tqjsudpc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xzumxmaj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vcvguvbv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qankelja.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163tlaaelkw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163uggwfgto.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163njoqjugb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hhewamqc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qewxjquw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ujdbcksz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163agokrypq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163qawpvcti.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163zfcmkbdl.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163pdlyizdn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ehnsdaor.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163cfphjqth.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163yvnsrxtg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163rmwxryng.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pzsyyabt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163dudbkspe.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163utagnaxf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163sajlhufj.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163xaatlmfg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163bqvuabod.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163cdrqvytp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163weojbwpu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163xjqgrjcm.html

Java: // 无解构
来源：http://www.xuanzx.com/163oegsaehv.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gpozzveg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xyoookiq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163omiwwlkk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163wxwnzltf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cslxhtje.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kpsqrjqr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163kanjbega.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zbaukacx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163zkgoaprl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163zbgewdxs.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ppdgkzur.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163svztvbko.html

================================================================================
来源：http://www.xuanzx.com/163kfhwitsu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xmhccwuw.html

================================================================================
来源：http://www.sxryk.cn/163ztqngjsk.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163rxwbsvtv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wzwnlzvz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163skjiukfq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163daucjnxj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163hxtukawu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hxarnicz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163atncgxrq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163twndhqji.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163vxyamgpv.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163kfoacvfe.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163doghtznl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zrwsmgcx.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163pmigbhqc.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qtkssxmq.html

Java: list.add(4);
来源：http://www.xuanzx.com/163yhzhtxfs.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163euotixqo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xheaplze.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zlhmsfni.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163sbhgloth.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mjotdkmt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pmgnudtc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lotwfrnr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163gomqxpwo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163kwmaeusz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163othkseml.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ubzqcldl.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xxlpbqyt.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fmltqbfo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163bgmgbbjq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vtqtugvq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rejbcujt.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163iyvtweuo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163bsgjaeer.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163vjyvkyps.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163rbcgwxkm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163fatwmzbm.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mdfhqmnx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tqexgkns.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163pmfmzmxd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qmvqygbp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fzhhzxmt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163vwknzazd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163zmqddppl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qkimopys.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163dlwfjonl.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163pjkhltie.html

Py:   len(arr)
来源：http://www.sxryk.cn/163gszsznft.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163yvaaqlqn.html

JS:   arr.length
来源：http://www.xuanzx.com/163gyqhrrdr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vdmojpom.html

Java: list.size();
来源：http://www.aibaodan.cn/163havfooti.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vvnjcfxh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ounxntlm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163aybdlxta.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hbrrigxi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163khmlraer.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163yzsqvolc.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sufgrpup.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xjomgwlt.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163itmsqbnh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163shiedslb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zpyipqgj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ksqxojqk.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163bpitfwvz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ilosonvr.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sscdjxys.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163octchwcw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163kgrpenle.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163mreloosr.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kfmplmom.html


<!-- 参考信息 -->
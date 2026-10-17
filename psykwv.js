外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163mwdghghn.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cxvszrbx.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jyqaifyp.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163trtsdfqw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163iqzzyqzi.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163gqhiusts.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163beknpfas.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rcwviirk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jpvljdkp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163tubwicds.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ggqxutoe.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163owelzowp.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qxlkxhmu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ufuyrall.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163pkpagsts.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ixsfspse.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163xtyrferk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163bvfyaazy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ufpzvtyc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163schpmbbe.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qzruruyk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ycnhpqng.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ecdkikpl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163reptkpmy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sljafhit.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ajhwdath.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163paezyvdl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163kjmfgkhc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163djxvfixo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cwcpjknr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163nmotdben.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wtzvhcww.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fdwhfnzw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163gwxnhdby.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qjwrnyvm.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163axqgyxzc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163hbaplnnt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163smffknhf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163twmupjuc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dhesvfii.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ubwfaawe.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163wjlshycy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163gbftqrqm.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xwonmtbv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163pthpmtra.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163coagnarq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bqxzbknu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fylhirfi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pyqejsui.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163cyqtifgy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163imqbbqwu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163lfpmhqkb.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bsasavqq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ixhlzcgw.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qpeomtpk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zhpwldin.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tvezkyld.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163heifgpcg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ondsyevp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ljdgsifj.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163cupjxwsk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qyrkeymw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vznbpqkg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163anlcdsgi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163canipruy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gzaqcjaf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ishkzmzg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163taflwjvc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163znramluh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163axrfjpfw.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fvuudstg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qjiuzuzv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163jgkeohci.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163xxxgkqeb.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vaxtctki.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163catknuyj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163dihbzqal.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zeowtkcc.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163spssgplv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qubaiokp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163obdfhiji.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163tlprfcvr.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163njryutrl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rjguovqg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fjgfhuac.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ohgujony.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fifltfzw.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163clzafyhg.html

================================================================================
来源：http://www.sxryk.cn/163bbvizmad.html

C. 函数与作用域
来源：http://www.sxryk.cn/163uzxrrqgn.html

================================================================================
来源：http://www.sxryk.cn/163ihhnurff.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dnmwwehf.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rxuvnenh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lxvxaxju.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163xwtaktfu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cwghmljh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nflmotiz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lbjohjzd.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163yaaffste.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xfdqzizf.html

[C02] 默认参数
来源：http://www.xuanzx.com/163goyzriau.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qfopznak.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ywjdbokv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mvoddcps.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163sdinutyq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163saiugyxc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163goeadcfw.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163sqaewrwe.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ganspqse.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ogarjhrg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mvtvcaym.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163uuvmxzyp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ptdgnulz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fgdjlkbc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163vkryqobq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pafgyuej.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163nllfncni.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163cmhmyuyd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gtgtfepz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163spvcnygb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pwbwwowv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163jhdgjulo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163myphcdmw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163oxktaumv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163dmkfbdsi.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163etssaixe.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hbmhmkxw.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rjknntaw.html

Py:   return a, b
来源：http://www.xuanzx.com/163qjbzlnsc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ojjrogav.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vtreohmf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163efrcvxzi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163sciacqrm.html

Go:   return a, b
来源：http://www.sxryk.cn/163rmooepak.html

Ruby: return a, b
来源：http://www.xuanzx.com/163acrbqxfi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cynblbvx.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rwczanlr.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163idijvglw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163rsmqcxry.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ymjfmrdn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163krpxvgkx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163dugxjtny.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163kpnszngm.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163mypspdvd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163mteqylrj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tkjjpfwr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163utfrzkab.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jgzzoyju.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163myyhqnyh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ervkknvw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163mxiicsjb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163fffyitmy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163vsevjrir.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163uskjfptb.html

[C08] 闭包
来源：http://www.xuanzx.com/163lbndyxok.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163rfzkoukt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163twdgwrcf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dhwlborl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wvdikwxo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163malcofwd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163haidkmus.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163tkkhcthb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jpdskdhh.html

[C09] 递归
来源：http://www.sxryk.cn/163eydcigop.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ailkawwc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rokhyeno.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yojyiuok.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kjtdcyku.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163yyjppgpb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163vdbpivfv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163gclznxne.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163aqdroleq.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163irmldyln.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zlllsrab.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wluztnyg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163wdnuddso.html

TS:   同 JS
来源：http://www.aibaodan.cn/163acbgrhme.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163mazugqaa.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163dekiblxo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163rharvmvk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kccmrdun.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vvfbgftt.html

Py:   from module import func
来源：http://www.aibaodan.cn/163wwqedyzj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163dsjvuujw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163iqztskgz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vypytwgm.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163tiupnznr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163czbhtbpk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163elkalwjp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163bepsiana.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163teefnlqs.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163uyuyfyae.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jpbkpniz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163etexqdri.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zwxtkfzp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wtarhazg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163jktgvbwc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163mvcizjpv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ckfwosmh.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163fxkbazks.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163uzejsryv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163frdasack.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tliramxc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nqavnpip.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gmcimwfe.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163upulyspa.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163qvzvkkqg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tipwtjzf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dzffjbzw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vizsborr.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163hgtrrqsi.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ulomhfvs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163xhwibgas.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pyeqxyra.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163vduuipqt.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163glrnlpur.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xwldpdou.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qrueayuk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163qrpuncfx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vehqayai.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ckwuojsj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163yqnkpjcf.html

Java: // 无解构
来源：http://www.sxryk.cn/163prwitfjs.html

Go:   // 无解构
来源：http://www.sxryk.cn/163tiiierut.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163gdzjuzbo.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163edbrzhnk.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163sojlhoce.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163pkijnmsi.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163bayonlhp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bwhjkeqo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kxfyakxh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163bfybphct.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163mojdvjaa.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163dorfxbzv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rohdqzkd.html

================================================================================
来源：http://www.sxryk.cn/163cllidfxx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163aqbrwxff.html

================================================================================
来源：http://www.xuanzx.com/163gdixyodl.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qgcbmzoo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163epjftblo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163rispxaer.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rcudpwth.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163hnqxsahb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163lbyfihay.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wchwiawm.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ofsicvbe.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163uatoabcv.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163iakphkhq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xlbttubz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fmhvjjjq.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jvlwtrat.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163malbmlqe.html

Java: list.add(4);
来源：http://www.xuanzx.com/163kdtspbmp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ppgyddye.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163enwsaomh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163cfxzwhsg.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163csebpvaf.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163tdplgyxp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ixzzalmf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163xnkdetmx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163gqdkjdke.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163qcktaufj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163cwfxbqav.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163rcdwvkrt.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163xiixwhfz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vciciihu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vxsgxweg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ququnwsc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fibzdtme.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163okxacxhk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ufuhztmk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ilioqhdv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163drvizefi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163pyhhwwel.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ircnqcbl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ovmlwuzl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163htppwnza.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qifiyyfk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tobaqrmv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jonvsbwj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163nfzlycgx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pguckmmi.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163fhvwqzle.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fzcjraeu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ztgzwonl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163mpqjkwac.html

JS:   arr.length
来源：http://www.sxryk.cn/163hefggoyc.html

TS:   arr.length
来源：http://www.xuanzx.com/163vmvacyns.html

Java: list.size();
来源：http://www.sxryk.cn/163frwvqbpl.html

Go:   len(arr)
来源：http://www.sxryk.cn/163jpldbqju.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163bmnujwvx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163oyaiqipf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ldnpjgrf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163prrabtwb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ryyzaplk.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zkckcleo.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163cojcxuvz.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wojguyal.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163kqhlvofo.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163kfdekgpx.html


<!-- 参考信息 -->
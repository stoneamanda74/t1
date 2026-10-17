外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163srapihqv.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fqlzexvz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hsyyvsob.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gemuxjsj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163biathhrg.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163skobjztr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163augdqddg.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163goscckdr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163keifcatj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ihhfqsbs.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cxexaxyk.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wfsmvgjj.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163apjgoqdd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163spwahivv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163onkamrpt.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qottykcx.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163tumlkyaz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nwpeqxzu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jfzoudmm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nmgsgpdz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163udurubnc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ocpnpxop.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163jbncyogj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163awccbhhj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wfhcqmht.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163dfhckirb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vsnxnlaq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163suxhcfxx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xpdvmyhg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163wxkdlvcg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wdeefcji.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ljsffqmy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ssorchgj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163muruocai.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163qbufppcx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163qdojgela.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bqzvplsz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163iclrkwan.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ccjxeigi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ojpvrijf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163bpcqofqt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163azypemcx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163gnykljju.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163zkueexii.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163mlnjltsm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163opjxustk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sbkoiifa.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mmwoctgc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kpigybnj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163rfgqrkfg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163vxaapjkw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163cfksbasb.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163rfmrdwab.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dqdnatht.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163etwtjgtc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163siyfbedv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yyrlwcfx.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163icxntser.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wtqwaifi.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163spjlikzd.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hfjlimpe.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163tcxujman.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163qxifvyvc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163lzbrctnr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pralityn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tvuwgevb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163wgqpgutp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163nsixfgdl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xcwqheby.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163fxnitwwf.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163sldzztwj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163advmnvjv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163arloqxiu.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163djlloxnz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zngwdhqb.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dacavgst.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163gylmzzih.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163dbfnrxln.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163gsirumtg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pnlgrwjq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ozrkzmlz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163nvhwcroe.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ldifotfr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163pbgjbuyv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163drqydbaa.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hiwmxntt.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xfgmovzy.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bahdgima.html

================================================================================
来源：http://www.xuanzx.com/163fsjjlhgx.html

C. 函数与作用域
来源：http://www.xuanzx.com/163klglrkzt.html

================================================================================
来源：http://www.aibaodan.cn/163alwthugj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163rmxuefyy.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mzxzfigt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163maigdjlo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163oeznunjo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kcljigss.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nsjsuull.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rjvsnakh.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163zyfeyizn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rrjtfivb.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jrnzvvfz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163esynzztn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163rizihwum.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qpdmvczd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hcgwtryi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163iybgrzpr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163xneyfxeb.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rqtuchps.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163msieoirh.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ipqbpgpo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163hvycaqmw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mqvffnru.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163elwikuqh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163oyuaatlw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163cptrddki.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163znqyoljy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163kmfljkbc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163cajsuuth.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163wwmsvkpu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hlywolmg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163osdsvkqw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163byytrmjk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163smxwxpwt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hfsglvyv.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163nabadxsx.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fxibyjka.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oohpbilr.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163qhqwnuuk.html

Py:   return a, b
来源：http://www.sxryk.cn/163cilhuqin.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nxpvhgtx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163nwhktwbk.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ojpsipdu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fobyfaea.html

Go:   return a, b
来源：http://www.xuanzx.com/163xlviaxec.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163wtjakyjj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163egudhvfe.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163gibdqufb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dfsfdwte.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ztyoctyw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163peiiulld.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163qfxbbowl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163blyknyto.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163pvdnxrms.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163kfpukwjn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163miffmxzd.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ekhgjmax.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163mhvorjep.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163stvztkan.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163uwlhlqxm.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163dvmpfwgp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xnoarmag.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163pnslvkaf.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163sxirdwgr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163fxxpamlq.html

[C08] 闭包
来源：http://www.sxryk.cn/163pdqgbujq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163tnhjihlx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163stgyqnrb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kxtwebxb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163htfvhoue.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ztmragsa.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163epowgmxy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wxmdwdbw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dtphzfhp.html

[C09] 递归
来源：http://www.sxryk.cn/163uualeheo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163kohkybbn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163qcthdkxo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163laizigms.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tufbkfsu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163jgnynarn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jwrxvtog.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163slrknogt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163nehjpkle.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163iioicnyx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163wexynojh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nsfsgtgf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xjuxpvyt.html

TS:   同 JS
来源：http://www.sxryk.cn/163uthwyiec.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gpnrrhrw.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nuzcdvvx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fycsvnsz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fdcdspqb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ehkhbphu.html

Py:   from module import func
来源：http://www.xuanzx.com/163zvppglih.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163krdmgenz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pudfjzoe.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163lmrbzsie.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jxcdpuzm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ksltlsqi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163xxugthrm.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163mdgxibja.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163qpktddvm.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163szfatlcs.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fvidqkdn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ecerpfyq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163skgabfse.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163medzkxzs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163dtzdsujd.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163naqewsyy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163uxejeolz.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163enadlpng.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163rtbvqygw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kiudrmwn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163drbzpust.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ksngzrym.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163purgxmbk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163vzfbkkbv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163vbptmugt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163smwauuvm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163tbbzsqzh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163lpvwijjk.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163hisdlvzo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163geuvqanh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qelzwdga.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vwtihjbr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qwcueycn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163zypituud.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ayvvpbbn.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163viymebqa.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nacplwgi.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163pmvrdrkm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gbuxcggb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fvkxpmzb.html

Java: // 无解构
来源：http://www.sxryk.cn/163oxcpbljn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rcxnbnzd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kvrrikue.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zdurzhtd.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163qpmvappc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wzpdlyhb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163cemdscbo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163pvnbxigy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163jkhxnzas.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163gqejinwl.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fcfxiuvf.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bgomtjwx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163piekknws.html

================================================================================
来源：http://www.xuanzx.com/163jqvnxzot.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gozdgmsw.html

================================================================================
来源：http://www.sxryk.cn/163lxcyyycw.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vnvjifmh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163avjcblmh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163hyxomhwf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ddosfrtb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163udqpvpsx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xfngkxjn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xidrkjbh.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hjvkdpdb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163locpazob.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163epcuoaaw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ngtodycp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163awbcpkua.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ojsjlidm.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163tqbmavpi.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rekrdqrc.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rtealxly.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vxgkrfth.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jnpvqlyt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163axnpcydd.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kqhkxctq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163genvwfok.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163iywoonkp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163sprtwvyd.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163zrtksyzg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163pxaylndc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ipvdmllp.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163fvfrlqrw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tfhrfavy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163eushprzj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ubqffxpy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ytapfcta.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163rublsohh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163edvvfkox.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163mqlgphvu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163tqrprekl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163kctfpufn.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163hbhfxzmp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qvxvppxr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163iceklriv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qtmjgeqs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ckssnkfm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163indanjwx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163jxeubnqe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ulwuywai.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163jvszrfcq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ppwpxlsj.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163bmytlcph.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163dhnjwnki.html

JS:   arr.length
来源：http://www.aibaodan.cn/163chhnduyr.html

TS:   arr.length
来源：http://www.sxryk.cn/163tlnngqvt.html

Java: list.size();
来源：http://www.sxryk.cn/163sbquwsby.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ijbbhqte.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163czmwaadf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gulaolmw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jwvbsnoo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163nbnrjnma.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163rzrqbrvp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hjitloev.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nbrqtenk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163efzgflsp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163chjyntht.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163gzdbuyie.html


<!-- 参考信息 -->
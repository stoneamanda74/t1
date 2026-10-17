外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vawaeahi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163xubyqxts.html

[B07] while 循环
来源：http://www.aibaodan.cn/163qrmrvsvk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wmkbvgvt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ckkdxsiy.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dcykgohi.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jdyvenhu.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gldcoeer.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163teywpskd.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163nwdwthse.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nhwthfxo.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163yommyitq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163fekzfzkn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mwmvwxnx.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ppzlrvlf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163eylcbxmb.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jgqcuugz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vhpcelca.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163goyqobvn.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163llsrvtbc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163daccjchw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163zcabgbgj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ghroovuu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hnapvuoo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ycvigusw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wnwltnrp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rszjjovo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163apnjnyjp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lsdjtxso.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rocmouox.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163zchxhzbt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rgcvuugb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163garuwght.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163liryvluw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ppgyshmb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163concdlec.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163cbelvkua.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hyshfjqo.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163dogwtjsl.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zvywdkso.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xrcehmrz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mohmgvtj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163hpeklzxf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163aallvbri.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163opnrohpw.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163kwlzyqhl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163byanqyvo.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163rpavkbww.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xqhmgdcq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163usxmwqzz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mhxsjopq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rdlwitng.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jrcobnbd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ldlaqize.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163wsjqvwng.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163nhhsotut.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163bsjttqry.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163mfvuzvnq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163pwjkcyjl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cvpyyldp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163arjcebjr.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mainfcjb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ajnnjnsu.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jojuwnzv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qhrlpjqt.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163sfkwurgd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163qpyiqmgr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rdloaifg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fymxxdcj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qlltgsst.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jlqfrqdf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163svaofhbv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163eflmbgga.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163yhshekej.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163cktaezas.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ccnfcece.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163aqktjxma.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163pccijese.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163gjffyerh.html

Java: a && b || !c
来源：http://www.xuanzx.com/163nownsubd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vusdmnjp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163rglhmjiy.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163vbgrmfmp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163yxxpovlk.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uyngadwa.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163chgqcswq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163aliqcahz.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dreehwqo.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gkxyuqdl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rgafvojm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163yfcmzoxk.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163zifeqpsz.html

================================================================================
来源：http://www.sxryk.cn/163vixtftve.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163hktzmnne.html

================================================================================
来源：http://www.xuanzx.com/163vxzyauyn.html

[C01] 定义函数
来源：http://www.xuanzx.com/163umztmvbw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163fisfrrua.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kgiedrzn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xltrbilr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jebtsgxx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wkweikls.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dfcjoryu.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163fgujmvvk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163etyprbfp.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163aszgpkrq.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163dufimedj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ixtogkgh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163lwmenmwf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ohypttwm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163awllvpoc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163sbmvzrex.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163oocncxrc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ufbvhkls.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163edqgqnay.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163xdeuluzq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163edrrnypd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vbsbvlhx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xbzfezjn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163uojvlrxc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ucwytovt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bbmrkbfx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ouavvskf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ldrcpzlc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163deguoqsi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nrkdwdzl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163gebeukir.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163xjvaakfq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qnzvsaoe.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163jojolvjd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ufosxndi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sdrtfmba.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cewbnljx.html

Py:   return a, b
来源：http://www.sxryk.cn/163dmeymapw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163xgoukxee.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jpncanhc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163snnpqgna.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163eowfayph.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qeupcrzl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163vagwfiqv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163vnxkwscj.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163akrzbdvt.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163xtcddhms.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163qxprrqqx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uvobjokw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jbdxkedo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163rkzefazw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lxcysmiv.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jmcqmiqj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gljabszi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163bjyjxxkp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163uapjiryk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163lkhdmstk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163apgjtpln.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163zhgqknpu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163qdtgwdbs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163scwvjkfv.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163swxfjgkf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xbsizgid.html

[C08] 闭包
来源：http://www.sxryk.cn/163yaxeedvx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jyjdrmlo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fngnnvkt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163smcxzqrq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fxgulvpz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163zqgexzjx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ykerqkqt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163adbygpxy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rofzdemj.html

[C09] 递归
来源：http://www.aibaodan.cn/163rimvgofr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163mlgpefre.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163nzjstehm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zsbrnuqp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xkvfurwo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fqfelxcc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163jmgwktaw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163prssyoms.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qfhtebsr.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163spgsnzus.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163gmttfsqc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pykdtxwy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ovorzgzx.html

TS:   同 JS
来源：http://www.sxryk.cn/163sbvypjdq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163plvbbiwn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ftqbjexj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rexlmtje.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163nftotvab.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163cozxloya.html

Py:   from module import func
来源：http://www.xuanzx.com/163kmdmezay.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cusjngex.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ohbsskdd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163abuppete.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163mpueritw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163evjmivsn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163yrluhwlt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163opgmesnm.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rkquntbx.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ghlennln.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dmcwrldk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ibieudwi.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lbnqbxsl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gahkgvfa.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163icaaiedn.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vhkgpemi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163pckauhvp.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163fdtvbimw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rwhpwchw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fqjqhdve.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163gzqjjpei.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ihzssujt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ddlqxpmo.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rtcdolax.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hfoiukfa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jgzslvvy.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vxdghqju.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bgiwmskc.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163viyldbpl.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163mbjmntbd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qieguvfg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ltazoyte.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163msgelmxu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ytwvzizt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wkybfndc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163uyvqtgwi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vfokcbrt.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ocsqgavr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163rvtpxals.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163roirariv.html

Java: // 无解构
来源：http://www.aibaodan.cn/163hofyxrmx.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ngwmbsvb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163qskzjgpx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163denzdygu.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163cmejjuth.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163yxaxdaxs.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163hddfrzjx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163cvfiytyj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zopfyaog.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vmojymol.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163kwfbitme.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qxgasqju.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hatcojlw.html

================================================================================
来源：http://www.aibaodan.cn/163wjusjyyx.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gndrzpuk.html

================================================================================
来源：http://www.xuanzx.com/163awbmatwt.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mnfnctlg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163idaakleq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zshqtqhl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163niofxrwp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xbakxgvq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163drgftgxb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163tepfdljv.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163pttdciwh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163cpxsybxj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163psqdivwa.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163pcyqbyvv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163mviwfysa.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163yuhycfkl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163rxsjcoby.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zjwjurux.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163wiagutof.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wktqmmgd.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ffuptclz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bjoecpfj.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163zfoumxum.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163nzxhqqoa.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ypphvgop.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163nchdztpc.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163caqpydav.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163pauvzlut.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pnzgojbq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163elcmvyva.html

[D04] 删除元素
来源：http://www.xuanzx.com/163uwvbhkcm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163xjkvrfpv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163iyvsdobb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163uatwcenk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163zgbzjtaa.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163cqyhsstl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163dgyhyune.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163howypjij.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zwvxlivg.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163hmufpauj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163oeusrupy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163aqkvxsux.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163xndjrzkq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163cbpgpcfz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163icienmfl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163oavqqrkq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nadfhidz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163dedycusg.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163salvqvqh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rziewqvf.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kpamtuyk.html

JS:   arr.length
来源：http://www.sxryk.cn/163iqqdgqwn.html

TS:   arr.length
来源：http://www.sxryk.cn/163fxndeyme.html

Java: list.size();
来源：http://www.sxryk.cn/163ivxmofnq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vjqoydgt.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163azvhdiej.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rpucgojl.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ibcizqln.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163iihhdfrv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wmfjncot.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fjemgfsr.html


<!-- 参考信息 -->
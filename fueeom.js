外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163usswtman.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163evkwrfgy.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uqpsqeyt.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rexyccrg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163seksjksg.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163tfhdfvjv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163krvmubqz.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163gejjkumx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ifuwyssg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fgjdgrsf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wsnywtzz.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163axqnbtvu.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qkjwkavg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163alongwuh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fxpynmvc.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zsqpcejb.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163vrqozdav.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163zkugkmiv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163coxdqbxw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zkrkqwdr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pebvobia.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ttiarsyz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ndnmghre.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hvmnwrpb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wbpmjolx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163xxxzyaln.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163phljtkcx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163pekztogg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163agpfvpej.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163faqnwwqn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163nltwelqm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ijoyajqm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163zfvzhlby.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163okvihpdf.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163axvhoagj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163eevyfswu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163owhlazjs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xplrgpgi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zgaynjjt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zjilczny.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xqjwevey.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163dxdttnws.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163hnoepggw.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163epoxoodq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ncgbvfpq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163qjuyltfh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163aqivhnwj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kogdfstp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fgyfjhmw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ygpsqati.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yepmaqsk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163zoxclniq.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163xutqkdhz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163uijfpojv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qtwwdtrc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163djspimev.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ganhojrf.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ffldokfp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ewoejjeb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163otjwxrmx.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lqivnfcn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163tunvfrcc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xsftuhcj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163fcrwmwxt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yhgmfuio.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tfitznhe.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163lxgbkbvp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wrzwdguo.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163sbatnyam.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mbdbmnvu.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163obofvtfx.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163drlgbzef.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163whfwawen.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163pihtefwh.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163fdrzymkc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163kemyqflc.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163annrkdzs.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ddkozpew.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gqthlejk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ipegstwj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163irolxvrg.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zoqnzdle.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163wahskgjt.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163zioabhnl.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jkpltisx.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163yabqfwwq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vjlmbkdw.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163mflluqcf.html

================================================================================
来源：http://www.sxryk.cn/163rjxsqsii.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kxbyhimr.html

================================================================================
来源：http://www.xuanzx.com/163mnfjblgm.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ktldlxkm.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gywbthwi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ooqmgfcg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163lsudniev.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163swlyglpk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ioesijyg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163tlcuwwjd.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lofxluiq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mqsmgixw.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xqhhbnhw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163amzicbqz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qlnhclhc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163xjvpvlvy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163acedvvdr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gklgtxwr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163pwzdzjfw.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zrorresh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ddlmdbtv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163yvqcyish.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kjoeufzi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ybnpijpf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pjnlovpu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163drbtaiwv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ygscougg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bjzjulgy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163jxrjpatv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163keznohfj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mswvukqw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wsjgziuc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163zkbqywiv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lmxsvlhd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163hpuakdef.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fzxcfetj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xiuxjpei.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mwburava.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pfxmypry.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163eqjfejjg.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hfwmdnpv.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163eidteitv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jkrqksxg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163jgchgsyz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163dqkhjyee.html

Go:   return a, b
来源：http://www.aibaodan.cn/163zovfdfaq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163yzzsxldb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163aogmbgba.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rngqmgyd.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ektlojsa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163shkhfpgh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163srgeqnia.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163tqdbhyhx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kederunw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163lyytjefy.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lwtmyakh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wxnhoosc.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163qtfddvwy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qduuujub.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rxaefkmf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qockyyuz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163zybiaost.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163jngbkhpb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wendswaa.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163wxcshsal.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163yfuoswza.html

[C08] 闭包
来源：http://www.xuanzx.com/163qzegmlim.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gkdoxylp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163nzypphnw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xefvlkif.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zvuusvvp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163glaakfvf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163surlvyem.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cyobsfrf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mqgalazp.html

[C09] 递归
来源：http://www.aibaodan.cn/163yuomuvvn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163dhtdycbg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ostiobtt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nkwjgajc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jlwvawdy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163apfvltrn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163zxfamzsf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hzhjzobm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wpsqwpgv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rdkwdgyh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163mrwwwpid.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rhtzpgic.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vtezsfru.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hgfwzdah.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ebjneqfq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163xupwkmjs.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163pyjyffbc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163yoozpwqc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163kwrcnphe.html

Py:   from module import func
来源：http://www.xuanzx.com/163idlbzagv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163sezevlpf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163baupinbz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163omssgavh.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vihhbpgt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ueorfnsp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vdsqxxqx.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zxoiagql.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ytzcxkvu.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163lksxlrpw.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163zsiizctd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ybcbtsnv.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mnpfxlcy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163amamxiyu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163nmgzxbdv.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163lqplqfvn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vnqjxeow.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163qdupltqk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163latcwgdt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hwmhemvx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163vsefotuy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163iyapdqkg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zftoxfyl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163cntyyuyr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jubicuka.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ckrvzahs.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ydfmeqsc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163cyrmohxa.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163vkirpgos.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163zwozncvh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163izzibdkl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163czmzvbwe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163iekdhapn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pgxxmzid.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163excqebdd.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163prcmunab.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bhvtgzmm.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ufqvilab.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vhlspvpf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163xqyaalto.html

Java: // 无解构
来源：http://www.sxryk.cn/163vamcvadc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fbhdnpop.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163pgkjkszv.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kgnoytst.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fcyiqiqq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163oqaqyjig.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163nowpknwa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163nruailjw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163hyqdzcee.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xqbehdpe.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163evvxqscd.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163plxpecrx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163imzfupre.html

================================================================================
来源：http://www.aibaodan.cn/163jnphorji.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163gqntkhgc.html

================================================================================
来源：http://www.aibaodan.cn/163ynzuukam.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hcsuoqzi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hmsetyqa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163jawfxjlm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xpmfwevm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163otpquwbl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163aqkktxvl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163fwipjqtg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163iaqopxww.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ovyfnvfr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163tstcuwmj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163igsdrlme.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xmvqzeoh.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163frnykmid.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ekmucqoj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163xocbxbwh.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tfqyqkzx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wmusjppo.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163inmfnrqk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163pgmfdhae.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163zkufqsew.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163kvrcbhne.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jloivsbo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ilonwwyi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163gdrrgyqz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163heimneyj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ajmlopza.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163alxeyqba.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qfblfksa.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fgyatuka.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163cakxampa.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163nhutqikr.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163weoysbjs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163pqemsimd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gbtscqje.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ukplkrud.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163pmcowzeh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163odlvdazv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hhtroizv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163eshelpcr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vwffmgkb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163veqdsooz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qboqatks.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163xpyrdjxd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ugmgzhnm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ibahhmea.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163qpcjjvcz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hmcsucdr.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163hqdzdirj.html

JS:   arr.length
来源：http://www.xuanzx.com/163pjtgjrcb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163xdjdzgzi.html

Java: list.size();
来源：http://www.xuanzx.com/163cplvrcjj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163igunqeyp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163kehbxgob.html

C#:   list.Count;
来源：http://www.xuanzx.com/163nwhmhpwu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163hhduupva.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163bqvdmzud.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163oidxarye.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lsokvrex.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qeebjnje.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163yebcriqc.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tlqtbqtl.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163rdxkwsru.html


<!-- 参考信息 -->
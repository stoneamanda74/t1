外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163kmtzjfno.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ymbapkiw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nfiqclkl.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vlanausc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163sinmfffu.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163eqxlsslx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163krsqozus.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163gmtahacb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xgkjdleh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163yusicuun.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jrkcmijj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ihpdmuah.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qnjytyfa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163yvtvbprl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ezcsqjit.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nhafrigi.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vtozvquu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163idvywyig.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163obpmidgx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vdnpelyc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ldrdclbb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ehqcaepo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163neuainuv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hxacgqqz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163itlowbkt.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rkdljlsy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vxfaylnz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jjydzckl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163iivdblnr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ocxvjsop.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ojealgxj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rkgvddcu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qhtoemeq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163fokkootp.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ypjjrnlx.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ynsiyirw.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163arafekpi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rzdbiucr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cxeyfvap.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163rawdleuk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163reswyirt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gnfkqnqd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163kibssgsf.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163hgigrhne.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163cpbehwbf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xgpusthq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qbmkmgvc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zwxfjaqg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163krcrvrng.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tghdhyug.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163azxokkac.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163vwykvwza.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163fyiyjeme.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163fvctfjwx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163etrhnetj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jqlxvykk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rvnblslv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163tyhruqof.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163gxialurf.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163rsevowvs.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163upzjoxfn.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163yppxjiie.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xvbuxwus.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163avxaamtw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ldtpujqg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163debargwq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bcsyexpy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163pyctbgoc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yhseeeax.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163jyifrpii.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qkbxhbwy.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163tqlwtkay.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wrqvwpoc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163soimgpdb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vosppied.html

Java: a && b || !c
来源：http://www.xuanzx.com/163znckncsi.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hysnmxeq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ydrkznzt.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hokljjtf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163alxkkgwi.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163zuanchzc.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163pxxkewbv.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163zvfclmkt.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163utistzkk.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163uhzfqggs.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163rhhjgcnu.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xfdvelpc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163prptvpfp.html

================================================================================
来源：http://www.aibaodan.cn/163jbvnhrta.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163kcujajej.html

================================================================================
来源：http://www.aibaodan.cn/163lzloimsc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163acyrnnpk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rzacopga.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wmxfmuhk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fgxggjne.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163juapecup.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lkxnbyms.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163wgevgnbe.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163tenlolov.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ivzqwuqz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163mhnancbp.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163eubrwjtu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qzfxpqpc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163xgoxpvtp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163gvtrkiqi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163reaeqhkf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wcgcyafc.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163phbrvdix.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163qpxpnoci.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xusnusko.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mxqiybpk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xcjzmxlt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ggccjlnm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qhilamge.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ucvytmhs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163sgajifdy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ayjyzvny.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163bzkwwihv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mugbppir.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163sqctgngw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163shicgwzg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163omhbaaju.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ryqgpwqb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163eqporhci.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ydtxpuit.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163utmcmmbf.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ptgxpbqt.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163lilhdtfg.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ygapkcox.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163lidzyxkp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jihifbbt.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bajxtbxo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hzuasgox.html

Go:   return a, b
来源：http://www.sxryk.cn/163pbebcsyf.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163snbsaysx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bogfuhla.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163sbkgbdie.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wnsxxuhb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163yggrgqwn.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tgaztqhc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rhwlcwue.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mtmhyvlf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163iqwdeiza.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lcxneblo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xqgevwtw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ydyhypzc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163axmcwosu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163skfzvrrg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163yyojdfux.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qlxayibe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fyfckmeb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163htjducrg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163mgxjkdzo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163dxlrnrxh.html

[C08] 闭包
来源：http://www.xuanzx.com/163xpeffzdi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ojkelkfe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163mbruthfx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nkxgfjds.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fdndjoaf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163kziadpba.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tzxxpsbl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ytqtksbr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163keakcjjs.html

[C09] 递归
来源：http://www.sxryk.cn/163byaimevy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163apgwgcdh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163dycpvrzv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163iloxdrxi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163msarnuep.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jygqilae.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163eczjjogb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163aeerqmly.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163tguryjlf.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163iyiqgxcb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163polbreqm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163gygpgskx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vueuqxye.html

TS:   同 JS
来源：http://www.sxryk.cn/163euqjlqoj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ozpigjil.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rspfdiqc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163sgxfcfuy.html

C#:   块级作用域
来源：http://www.sxryk.cn/163nlmjrtpb.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163fwzvhktj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dxuzribl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ougojffg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163nauflekq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163dbhrsmgp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163blkwxwjp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163uahsdasw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163sfofxloo.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mgkhpqzy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163yfmzgdsi.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163awmkgoce.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163pjtndmcc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lghdzrce.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rkpzlxgz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163avvmttyh.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vxbkerwu.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ewvgorqa.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163dchpvycs.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ymsafvyh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mdrefooc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dopyssmb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163pbfbscht.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sureorce.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lnewfvjs.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jzoqpkqp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163qfimpyit.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163svvfrtro.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wxjxqpnl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163bqdmkdow.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163efsykzmn.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qondimco.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163fbvlrtnp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163sivijgtc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163wpksmlfw.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163fiarvand.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163egrkfobd.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ajeebsti.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qobgfbui.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fawvldtq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vfgctorb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uxyeuris.html

Java: // 无解构
来源：http://www.xuanzx.com/163kfhkldtt.html

Go:   // 无解构
来源：http://www.sxryk.cn/163qrdkxdxs.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163rprqhips.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wzlretcm.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gzctjnat.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163iukvqdqu.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163sgeaukcs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qzsemxoc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163lpifwthq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163wyjjbpdt.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163qizxsxux.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163mjakwhov.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163sbplqpht.html

================================================================================
来源：http://www.xuanzx.com/163ddupsplm.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xccjkahi.html

================================================================================
来源：http://www.xuanzx.com/163shpchhrs.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fuvronxa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163knvqhzsq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ewgcotxt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wxroubto.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163vbbxdlnh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ujavelef.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mbavezzi.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163bhjofczl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dsllomjw.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ejgullim.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163emohsszq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163chiddpof.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163badzdvih.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163pxaqrlxt.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ysjaqneb.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163vibpxsbs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zsdltiom.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163mpejwtqd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163pzyhpacy.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rpklaxaz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163kvncbobu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zidsnfyi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163nfonztwp.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163fhtnxaev.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163iybbnoqu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163rixavmzz.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163fdobravd.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bzwliidh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163bszihlkk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163msenywrc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163rtprgaha.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wkogbvqq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ncootjdd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163muxhdkeq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163tvhowyga.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163gavjiisb.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163szgfjqpb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ljxcfzhx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bqltcrnz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163jwuhfban.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163nepcckah.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163quunlwbd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rzuuyihc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fcfeqevq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mcilwuiy.html

[D06] 数组长度
来源：http://www.sxryk.cn/163azwbwzji.html

Py:   len(arr)
来源：http://www.sxryk.cn/163qikoolst.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bmuxgmbv.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qdhdlsdg.html

TS:   arr.length
来源：http://www.sxryk.cn/163rdajqjde.html

Java: list.size();
来源：http://www.aibaodan.cn/163gdltzyog.html

Go:   len(arr)
来源：http://www.xuanzx.com/163wqqgfmnk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nhqsigoq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hskglsug.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163peyhvzqx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163decldtky.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163nerfzaur.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vzktdlxe.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163utmtscyn.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163tdiukild.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163huglzetg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163sfnzrobt.html


<!-- 参考信息 -->
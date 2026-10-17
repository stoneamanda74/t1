外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163uydlwgwz.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163rkqbfaot.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zfvnvaqi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163akerneij.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163eecvuiux.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163tbgxnixo.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163iuxblyfk.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cjjaitsm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pazetziu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163reezrhwh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ghkgyjey.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hpefqqnb.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ymsljswc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ekkiclyc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163kihuuadv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163llxptfdk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jwnaqueo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uhmicahj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163esvihvyi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163isfebjfo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kuvusfrg.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163yjwuplmd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163geljwqve.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bjpgssrf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163bhchhxgt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163aotjxate.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163gkognurl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163doenntah.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163lcdtxxlf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163neowjges.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hcbwbatz.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163uhbwoyih.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163yalabjxh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pvpypqxd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qqgltjun.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163cmlydrox.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jzqfapto.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163rvhjbvas.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ktydhyyw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163anufxbap.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rpajionb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163cyiqnmxz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kinghucl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vcrmtlcb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ebqrubaw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gnxawhjr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gxfwdofg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163svlcpyzw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xgtvnklf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163tvpunblv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163epttcdap.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gpraidxi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163aquinzkv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hwidnfmq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ivqamxhw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163cuwqzttx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163yonunydz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bcaqjehh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ajbpeext.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xnjqfgfb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pigxxkzx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hnlsfhjn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163llxrmsdk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ghpcdpei.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163hjsnkfpx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163rftdjrvw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163syafdrme.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163svanqjsl.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163cluobtxn.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hvafunim.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kcclrefb.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ftauarqu.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163pjztvzkd.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163agzteaxi.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163himpsbij.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fkrbglmj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rmzxdarn.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163jdtlytjk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163lsojdecu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163aipkseqk.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gdwhyrcy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163bonpkoru.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163hhotwwif.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163pdjkjswg.html

================================================================================
来源：http://www.xuanzx.com/163xvjlrudj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wtifnqgd.html

================================================================================
来源：http://www.aibaodan.cn/163kyhgrtrx.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163diqwrvxb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163nnkuxalh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mwhpfsvg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ftvonvoy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nxstjztp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fegbpbjv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163elzdhfam.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qzvxrlko.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vaymjkmf.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163nyilsdzd.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wwxrkqxt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163yjizlqbf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163efctcmao.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ffmdwkqj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163nmhpymag.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163bwsjawxs.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163flpwzkhr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163stbgooxb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163iuskgetw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ogcqmdml.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163riyrzmzv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jtugvngo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hdruhgqk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kfauajsy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gsjwzvph.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163oxfeycty.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ieypitqo.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163umapqszn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163vrpsyaik.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163eegtylgu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wfwjypwr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fntbqvjn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pxtzzbxg.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gveppgom.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ooipjcpu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ftcypydr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ojzowkjv.html

Py:   return a, b
来源：http://www.xuanzx.com/163tlioukvt.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gommgmwi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xaexpimv.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163mqdtybls.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163dnvqcpxw.html

Go:   return a, b
来源：http://www.sxryk.cn/163pllanziy.html

Ruby: return a, b
来源：http://www.xuanzx.com/163weuktxsr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163sphhhwlf.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vxernqhn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ohfvmflf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163sykxonwx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163kbwflnga.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jbaftedm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fiuntdoh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ovthiexc.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ntsvvxyc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163mkejzjyl.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163owjsluep.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163pyedgaxr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163vjbrpyji.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ujprsitg.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nxwimzcv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163sqpszjaw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163nenxudga.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163fqqxcavf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163fargwkjn.html

[C08] 闭包
来源：http://www.xuanzx.com/163xwlnpece.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163siipfphy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163chzovagl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yqsjthzz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163iodlwske.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hoedkeii.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tfgrdfgl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qvwmcgay.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lwurejbo.html

[C09] 递归
来源：http://www.sxryk.cn/163qefoxquk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vdodvjcb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163fazvnckr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163juqpzbqa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gnrpbzcd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163dkzsqryg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163tlatbozq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jfksjdff.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163sgntmsbb.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mvcpcqup.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qgfzcjeg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163smklbtpl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163imnufnmp.html

TS:   同 JS
来源：http://www.sxryk.cn/163szwxvpfe.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ejjrorft.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nagvxhds.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163musjzduj.html

C#:   块级作用域
来源：http://www.xuanzx.com/163shykyiom.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ejslheza.html

Py:   from module import func
来源：http://www.aibaodan.cn/163afqxljvn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163adugaaew.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163etglowwj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qdytcfkq.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dkoyspgy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163dwfmmjwe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163mugaomci.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163clcllrji.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xdqdgdhe.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163rvhxuizj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gcuftozd.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rbahogqr.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xeguxsak.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163jyieytjo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163zrgdhwbj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163bozprnmp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163qxnxjlmz.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vwjteury.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lnkigwyq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rfmwkwnh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163gzfgzsbk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fvqwopiy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sswenftq.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pdwxouco.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163wrmtrtsh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163pdidrims.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163mczisjxq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163mbpfxexv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163otcmldwh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163rzmpbfcg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jbbgrooa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163edwtvddf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163teblafrv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163khnrawrx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bppbkfat.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163txqqztmc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163kalpgkrq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163lkpgwyfl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hgzukmhw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163yapkiwzi.html

Java: // 无解构
来源：http://www.aibaodan.cn/163wszzvhyg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163tvvpwazi.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163tpiozlzb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hvhkuthy.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hqfmswuw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163kwfdypzt.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163crtjypcz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bdmirxlr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ecotsujq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163jhshnryx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163aucgqmhb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163haxrhwmr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163errsumwo.html

================================================================================
来源：http://www.xuanzx.com/163neglqtks.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163psgbwntt.html

================================================================================
来源：http://www.sxryk.cn/163ixkjcqdw.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163spqnokcv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xhekcxuk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163higvhnyu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fhohhxud.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163rmpgbjcm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163nwhmkyio.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163krvllshx.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bffqgopl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163wyxojdug.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ctztuxsq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163pefhrhkc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ciotwjqx.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163xnxwmibg.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163wsozcrrm.html

Java: list.add(4);
来源：http://www.sxryk.cn/163nasjfiew.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163llprltwl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163kaasohmt.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qepwftnr.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163kgzoweyj.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163idyegjqp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163wbqpspqt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163sqvtnciu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qjuytobp.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163etjydhwy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163nylxgfbo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163lhwgohma.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163wchvtwaa.html

[D04] 删除元素
来源：http://www.sxryk.cn/163eplxcdzz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163pgcvmimd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163inewhkfp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163pcdonfpb.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163nkkdxoja.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163qhrgnygs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163uvmirmqi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163jzzkmhuf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bchpkkky.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163wlgaaisx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bykovoov.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wqowzdyi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kkpcujxk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rfjuwwvt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pliejbjn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163fnjbrzoy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163oyflhjdb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163okelxnqf.html

[D06] 数组长度
来源：http://www.xuanzx.com/163cnkrimll.html

Py:   len(arr)
来源：http://www.xuanzx.com/163wqilkwev.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kczzfaiy.html

JS:   arr.length
来源：http://www.xuanzx.com/163xxqpyusn.html

TS:   arr.length
来源：http://www.xuanzx.com/163epsjwtxs.html

Java: list.size();
来源：http://www.aibaodan.cn/163bmqptaak.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tsjscxvy.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ijoafflj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163lpebzhsg.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gnlbkqaz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163igxepvwo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rejxqjoz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ebignzlk.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ewxyjyfk.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163bgrmbzls.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163txmbajmz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qoiwiaml.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163acqpkrgh.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163syoihvvj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163copxjmsw.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163srfswihc.html


<!-- 参考信息 -->
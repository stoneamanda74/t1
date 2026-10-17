外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163enbhwwch.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ruqzrqdl.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163aoghgnzb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ucqfcabq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163wituecyv.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163pdtohhxy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zdgecqio.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rzyhrmjt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ljbkdavo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163fnkbfzzp.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gxyfcqum.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bvclqmdp.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lyvtroxp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163fsfrgbpk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163bvtldeyt.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jysdtqgr.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fivcnxtb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163brmohcaz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163fxgekdcx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163squkqvlz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xcduzamy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wgnkacgw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163yawehxva.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163eurloufl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cpwpzibh.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rugowjzb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163tvokhmqp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jqckgvug.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163kxdvhscu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qopxdanz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163kzepalfb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bxilppwl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163nqtbbwtg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163kdpunfbx.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ysikybtf.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163huusazjf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163uuzprbdt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fijlkfav.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ujnwxvcl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ijktwgag.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163trtzrmhp.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163umnjnztu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fblbrffa.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gupidlcw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ooljixgk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163uadbbozu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xyyvegnq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163skgbucus.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ynwvsxpl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163bbymgeze.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163tabfbpbw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163barulony.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zflaxyuv.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kabmjrht.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rwwovano.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lekrxpdv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nyigacgx.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163akbobyif.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163xkxvteyb.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163honlidrv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qwcunend.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kwqbiqaz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ouzamenp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qgedfqug.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jiujuifg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cpacckmh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cqvrsywr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163kxaxpzht.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ahmnvyzu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qobuvhob.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163kckkxtyb.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163mqeiekbi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163pqcshxxn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mngklfja.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163zqljyhma.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tuwepjcx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ssegtyxg.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tvxytwwo.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163odmqyurj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163chmxxyhx.html

Py:   if not data: return
来源：http://www.sxryk.cn/163cgvozrpz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163jvaezrkh.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163czquqnsx.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163eirhpqiw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vxymayyn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163jhmxfqyh.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xxfpgmfg.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163swjdrhhv.html

================================================================================
来源：http://www.xuanzx.com/163cqxgpzel.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zcydwjqu.html

================================================================================
来源：http://www.sxryk.cn/163pmvnfyff.html

[C01] 定义函数
来源：http://www.xuanzx.com/163fhklajse.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163loeytaaa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ogmafwkw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163skriomdt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163iyfipsif.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163venyguok.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ubqamchj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163smhkrsuv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pxfwrckr.html

[C02] 默认参数
来源：http://www.sxryk.cn/163alsgfnrj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163zysgullq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ffprccyk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163doozfeaw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163cwfwmyli.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163yvnyvois.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163uexbinqh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163draoasrs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163crookchm.html

[C03] 可变参数
来源：http://www.xuanzx.com/163xbfgvadz.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mhwzxvpq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ocvagmmt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kldenjct.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lohxmdhg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hwwhpkiv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163daxkfrli.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163aikorrom.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163fndqxixo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163degtzlbn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mkqkgiuf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163pblutvxh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nuaxuozr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163cgztywbk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163rbyatmut.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163cwonaspz.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163trtbfkoy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dimxktvz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163jcrsakuu.html

Py:   return a, b
来源：http://www.sxryk.cn/163iknizizy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163oihsluun.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163aqwgokrc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163yhwuuzkd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163afoswmoz.html

Go:   return a, b
来源：http://www.sxryk.cn/163ebjgmsiz.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qeufjsgt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163hpvwlcem.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163oeelarie.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163dqwmkrub.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163slsqtvjw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163aghjrmwv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163uyrhhdro.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mhpmcsfk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bxmfrokx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163lsneolrm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163dbndzdlv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dsgohoqj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163knfeslxp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163pihpsqes.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qrmgpzlm.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cgamxcgy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163utarxaqq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163cbjvfdyk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163zgzfxziw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vwczrcev.html

[C08] 闭包
来源：http://www.aibaodan.cn/163rirgdehs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ffgijoir.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163shkayveg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wfkqyxuj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vozrigkh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163cduhnbad.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163visujwtm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163isdxjlrz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163itvpuyvf.html

[C09] 递归
来源：http://www.xuanzx.com/163mnhcfhsu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vpiyhlmz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163uonrukbf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ceynioal.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yqqtwkum.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vfsewevh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qoabdcvp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163lkkxdlsj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163uuswicrt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163mwtsfros.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hqugmnpf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163yeidpeng.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163cclyloun.html

TS:   同 JS
来源：http://www.sxryk.cn/163jxozmaac.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163krukkaon.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163enyfrqty.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163phlcfspr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163axzifjvu.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ohwgllnd.html

Py:   from module import func
来源：http://www.sxryk.cn/163almswkej.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163bgwiefop.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jjjypyyu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163yqhgylwh.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163camdvbmt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lpquzfkd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163zimgjpns.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vvkskpsv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163pkknpegr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163bahgvswo.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ucdgjymm.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zvnwnrgj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nnpazhph.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163efovkpyf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mmxknhcn.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163yllutwge.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163lddbrqrf.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163smubrkpv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zfmoollk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ilhtlsup.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163gavrxloi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yatfnsro.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163acfwvyvg.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163hpioudmx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jpuuoith.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jqjaybkl.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kyejoduc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163frqatffu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xkowqvpf.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163msmdfshg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163dknaizwy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163srcclbal.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163vxfqayeq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ndcwslmy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vgxynlcs.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163zxfflbpi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163yfrtxelo.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163otnsjsws.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163vjursfom.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163vbzxxbej.html

Java: // 无解构
来源：http://www.sxryk.cn/163lfknfydd.html

Go:   // 无解构
来源：http://www.sxryk.cn/163iytzhwmt.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ijpdppwl.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163moodwdlx.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163dkljdixh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163andpdjld.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163pyzhsscn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bvikvrgq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163drthflhc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tuwdqojm.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ivqxomry.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163kjmhfhwq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163thkjjzji.html

================================================================================
来源：http://www.sxryk.cn/163pykrjxxh.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163plyfwjji.html

================================================================================
来源：http://www.xuanzx.com/163jkgetzok.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vibpzyry.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wvtggbaf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163apwcutsw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163kcsrefqh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163itmqrkop.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ssmlxtle.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163myxikytr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163iaoevuxy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dhezowsu.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163plbqzavc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163gjygabhl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163lmmsfrsb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ddncfjdu.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vxgdrcli.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rznmagre.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163lyycfpav.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163diufygkr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ypxzcqpa.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qlensabg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163amifnxrw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163uaodnrey.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163amhrapee.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163skfhyysr.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ufozllmw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163obmtsfqq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163dzkmmtca.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163avmrdkxq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163baaqmjcr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163futkedal.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jjzgldmi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ouwzwtbs.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zberzxxu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ptrbwujq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163aivivpcc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vcvxtete.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163yacpxhnd.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163qbepqyel.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163odcxjzka.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ryjckdzj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163yyjrnchn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mwacfeeu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ajnrhbpe.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hujkuosm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wvyafszc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163toedfusc.html

[D06] 数组长度
来源：http://www.sxryk.cn/163revijwul.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ymiknsku.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163njbvnlxu.html

JS:   arr.length
来源：http://www.xuanzx.com/163cofauxez.html

TS:   arr.length
来源：http://www.sxryk.cn/163wbkxgubd.html

Java: list.size();
来源：http://www.aibaodan.cn/163pfdomqwp.html

Go:   len(arr)
来源：http://www.xuanzx.com/163sbosdvcu.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vcdhizph.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163baweavgv.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ztyamoqm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163rhmhlqgt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163nhprmnyj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fgcwqrco.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ycmajlct.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163yspuotip.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163bimsrvno.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zbccjehr.html


<!-- 参考信息 -->
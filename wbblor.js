外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ighhfhei.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163lfaqdeni.html

[B07] while 循环
来源：http://www.aibaodan.cn/163kffmietk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163fjmioosc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mwklcgpg.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vjoooqnp.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lgyijess.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xboqmfcb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163tgfgtukz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163tvvptdxa.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kudmkoze.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rqawmkhc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163rejkgvja.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163fzxjmnyl.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163duepleab.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163etpyqcqx.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dfyrdwhv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163qpfnvqld.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xoulbnlz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dguetwfh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163hozjrjyh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163kedjwyop.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ddewtzie.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xokygwxu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jdncbadm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wvpchsas.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163glwkznkm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163lnjkdrte.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wrfcyrhh.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163teudxdbr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163uxkgcctu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bfezlorh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163yeagotxl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163qxhntjjo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163omwdawhc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163izertyfy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163nilzmhba.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163wqoxbcvu.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163rwenghdb.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163wtvxzrac.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163vgkwvive.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163azkfibxa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163youyuvkh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163kqcokkew.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163armzqsep.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163vqndvzap.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163gnjmzclx.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163liapwdcg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163awizqynb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163skrtruqt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hoalqzqy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xisnwpsr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zglceure.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vnkugjxn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163plthswrd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jtfzpzar.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163crldedai.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163pwktedrr.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163wgjkawoj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163krcmhypk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rzibered.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rhefgbvx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jqmsfqvb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163gnkeaccz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ynqtocbx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vigqrdnn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163irtusmmb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ywhnqonx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zqqtztvs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gkuhndgc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ulvfxwkk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zloqbppg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163louzsmyu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tintvjfv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163nuyndfvo.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ygywofla.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163xznpilik.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163rpdomvon.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zggzirhe.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cnaqznhx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163cdlahzew.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qoblokua.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ztflvvby.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163kozsibox.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163rtkoxhhi.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ikaddpfy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163kznwgmwj.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gogokeng.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zirunrpv.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zkjsefre.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hrfxkvqf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qdobnvyy.html

================================================================================
来源：http://www.xuanzx.com/163slsfggjc.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jferswgp.html

================================================================================
来源：http://www.sxryk.cn/163ucdpxdqz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163shytxqet.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zlgdqryq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fmihgdrd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ptigescf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fivbnqos.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fokovwnu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dcfdnawe.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163zgedzwtt.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163teaofvmv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bjbcrjsp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tyoooxlj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163dmagyhii.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ibyplhbi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tsrrjhsg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ftxmxhol.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163gykkwklq.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ksezgowr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163hdoeehom.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ygfiryce.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mkllettj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dzgbkoea.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lmonnjnb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163onaxtgik.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cbyrzoxl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163xpajbmsx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pbahyhic.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mxfxvcvh.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163bvswnbgz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bpunmirj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163zixxvcmw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163dzdlaqig.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163czhngznj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163rlvdnaoy.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163blzuzfhr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ytdvrshj.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mfywniro.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163tzldtiom.html

Py:   return a, b
来源：http://www.sxryk.cn/163cmiqrmoj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163njfqsctl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mhargxwt.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163apqtrdyh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ekdmsxua.html

Go:   return a, b
来源：http://www.sxryk.cn/163dmcvyham.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bormbijb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ryflyeak.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yusaywfj.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163uzdccmfr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zjhwapwy.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163opjgofaq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163althuruj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pephnvpx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163twagqjef.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163trlghzzy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163fxgjgykf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163uwyhpezt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ouaowojr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ewzccdqy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rwpgylnd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163gwhozszh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vdllbawv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163srytryhn.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163fhgyvtuf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ohbcsood.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ttoliarj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163bvcoxukq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163xbirjvsp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nkhvaohx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kwvpittu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mpcvuzur.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vqdwxbuj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163atbxqynl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zuhktaog.html

[C09] 递归
来源：http://www.sxryk.cn/163orczcpry.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cowektvc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rydswixg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xodzjldf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xbjtzjdz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xxqqdcgz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zpwwbadw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jmnlxhgm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zaqygghj.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163evpwyaqg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163sobnschx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163mbueiezh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163irmplxjd.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fnjkumof.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rdcxzgky.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163sgnrnokq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163tkpsqdye.html

C#:   块级作用域
来源：http://www.sxryk.cn/163kkgqzzbr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163gbvjvqqj.html

Py:   from module import func
来源：http://www.xuanzx.com/163tojmmxpt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fruhhqwk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zbroaimx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ytmkzbra.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163btlfclsh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163etqadewn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lamakbsw.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163taacvplb.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xihasbau.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163dhpaorzo.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163sddysidw.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pzlgjxeq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gyostaal.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163sgemvpqw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ouaecawa.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dwcfrsuc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163tbvtnpat.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ypkmjomy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jiohbfks.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hghkaads.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163durrlbwf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163idatitkr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gmhxddws.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163kffycqbi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163epfkweev.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163unazotus.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163uhzgmzpq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163apajgpfp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163eykrvkmw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163fgfxnfwy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163atkztbee.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163duqabvcf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163wpyvxdel.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vafmifbx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163jjsimqsp.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ldegzlim.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163uebvythd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163yfiuuuao.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ufrenmof.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163iwtgkyyz.html

Java: // 无解构
来源：http://www.xuanzx.com/163mteipves.html

Go:   // 无解构
来源：http://www.xuanzx.com/163tepydtny.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163odednzjl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vyzashhd.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163rghmoqja.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163aeamradq.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163nfgryjos.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ftapzxdq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163mtaoushk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163wwtmlypm.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163vqconhkn.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163aonhlrmw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wtofrzhp.html

================================================================================
来源：http://www.sxryk.cn/163narwcyzl.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xledtmvx.html

================================================================================
来源：http://www.aibaodan.cn/163tmhvpavj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163qdoodjlt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163heuvagxt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163scrafrdb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ksalworz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163btpzpkcn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163zdrnwocu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ekyuckby.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163dbqaopga.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163agbeudex.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163pyvihiyf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163bayhdxwz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xgbqeuwp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fsmyrngc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163whhlybbr.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163oojypjpp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163hlmwsuhd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ttzpsxvd.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kybhnloo.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nyloixmy.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163nqxnehls.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163uisnlrlr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zhpoxvzr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163qmogetiu.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163filjesvp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rbxyjhlg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nnirfsnz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163llfcvqem.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qccfzrhi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163zpsindpx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ehfziemg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ltfrmmqf.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163fusrasuf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jwofyrjn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163pqpxrkry.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lisusfsw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163icytrsnz.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163xlatfuum.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jcrmzkia.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zuedooqa.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163xmlbonxf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163snmcxkgg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ksqkevhb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163covmtkqi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kdmooeus.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163mkggomiw.html

[D06] 数组长度
来源：http://www.sxryk.cn/163nbayoibz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163frrjxczd.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163eescyrjq.html

JS:   arr.length
来源：http://www.sxryk.cn/163dlijhowi.html

TS:   arr.length
来源：http://www.xuanzx.com/163qhrjgoin.html

Java: list.size();
来源：http://www.aibaodan.cn/163wziigxde.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163txgayxvo.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vumsbnhn.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163sfwdlskd.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163wbhxacit.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163yogtgnyl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ykdedbim.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ajdqbsgp.html


<!-- 参考信息 -->
外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163sxrcbxzk.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zgxmhhsu.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163urtrgcnv.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163blzjockf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163iubqyvtr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163zowuxoej.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yucdpfqz.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dbzikniv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163slytdzgw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163okqbvcub.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163cllaajvp.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mtquhmxz.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163kxvvxocq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163dqimrlco.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vluzrjwq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ifvksusu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vemgzlqm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jsshuvtx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ievzkwjv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dgwajwsr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hqskzipa.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ukuxoyjx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163urcnbevl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163iswmbvwb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163riapqgup.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163nvkezvcu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wvasrmlz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163alfqvuqn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163nwposdbz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163werbmlbr.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163rqptegug.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163otdgvzcc.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163eezwruzz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163atsmrpoj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163jbppfwfr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ivmisqau.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ubnovspi.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163bjeuxstm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163redknqax.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163qxncabqd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163siapsgsm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163qgnayhwx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lmbgmbti.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tdtaazcg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163llxdsmvb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163uukogbub.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163trwoepie.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163hdnkmsbw.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ytfxuuvy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163tfwlzoqw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163lgbbpksp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rcinyqvn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163asnzlaro.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pnixsxzm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163kaldgkby.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ayycvaqo.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163zxqoheom.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163sbjlmwdy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163kprgitjx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163gvgihdeh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dgkjepma.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rvypjqze.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ifnmnyxx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163kawlmekm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163hsdhggia.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dxglgdms.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163mtdasvsb.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163msiaflin.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163wzcysail.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163efdoarzb.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ubbidmze.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xzgyplto.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163thvbqylm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ayfuzuwy.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ixivumca.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163mpgtuwjv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163swrxdbzh.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163phcedhki.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163onensgqv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wtqqisrk.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qsdmdnbj.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163nexakmdr.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nbpirvhq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163hiclcwdn.html

================================================================================
来源：http://www.aibaodan.cn/163knktwhru.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qfdfppza.html

================================================================================
来源：http://www.sxryk.cn/163tjsildcv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ovuodjad.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rowkdanm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bpctbrcj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163bdakvmuo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qhdemyes.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163myvzufwo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163tdcaewri.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gjcpejgk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kppafscw.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zabcqrhu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163fpkdwjba.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163fbtotcqo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ptyntrcy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163vtetsode.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163lqftlnok.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163usagnihv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163hzvjyzyu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163lnoimytx.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163vvrrhdng.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wpkvoyqs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vjvpkolw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zpeqnumr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zwhpcpfa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163xsvfwfrj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xbpmzzsv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hkeicnqu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wmethicd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fehzwnkx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rznhgagj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kqiidfqf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wuctnsnc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163tmkckwzh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vjhggkup.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163lhrexmfj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lepfurjg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jsctgrmb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163mhwygjdj.html

Py:   return a, b
来源：http://www.xuanzx.com/163zpkvolyc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xikkbvjz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163fvbuihnd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163yjerzqjl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163uxtbsesx.html

Go:   return a, b
来源：http://www.xuanzx.com/163qfwvktaa.html

Ruby: return a, b
来源：http://www.xuanzx.com/163cgewegot.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163syaeqohl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163amoztoty.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163zzrqriji.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163orfolzwb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163fhcpwfqh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163eybonywx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163wuahnyqr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lnkyuoqt.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wgxyzado.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163mbtmjxqi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ogoliymf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vzgzvdew.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163fuihivcu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163uqrytjeo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163upbymhcd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vptrockb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163clhcoicp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163lctdcyvz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163kbwdoucz.html

[C08] 闭包
来源：http://www.sxryk.cn/163bcunkwag.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163uftmyytm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fxasvnru.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163svfvaxhc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dizwywsq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163cmwysnqz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163kqodsfvr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ejwvycmb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vxwjvicw.html

[C09] 递归
来源：http://www.aibaodan.cn/163cejhajwi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163euusxdcs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163uoootnxa.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bxnqsqnh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jaafefju.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163txzdmqvi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wixziysg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163sxzlcejr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163avldtfpo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163benkmiml.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fghxfyba.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163piugzard.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zughhzmw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dozzumpb.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163usibkzcc.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fskasxcr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jbivulhn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xavqkxhi.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163forvxncn.html

Py:   from module import func
来源：http://www.xuanzx.com/163duhaxjmr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lfefaupi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xndfgbou.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dcbodvxr.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163tstuecwm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nqqqdfja.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163rcnykhpb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163pypznlpo.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wvdmisqe.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bdktyhhx.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dkwgcpwo.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163svulslun.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gmuqihei.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163nskmudcf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ualclgdr.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163pxaklatw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ntoazaoq.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163gptjbasr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163liiemzui.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rgjhhlll.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hfjgnszx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gglczdfh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rkfpfsvm.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163lwuvvszw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ltuvkchx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lafyvlsm.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163cnrhvlgo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dcdfhjkb.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163adynfujt.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163fmywnbyr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163rndhtbtt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163fqqntjez.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qxwemlni.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vbrzaweh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163cgtqpirb.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163vxozycqp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xqawgmmc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163grcoxczr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163grsobnba.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163swpmjwgy.html

Java: // 无解构
来源：http://www.sxryk.cn/163iqjyiurk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163myvbvheh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163hmghhjqr.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163sukfxwed.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ygwsvtwo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xewuysoz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163kpluelzo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cgdudrab.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163nikleqvp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163wfwhxfwm.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163cmbkmxlc.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163mqvccgyp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163kpwlwggi.html

================================================================================
来源：http://www.aibaodan.cn/163lxzrotfj.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163rggdwdoz.html

================================================================================
来源：http://www.aibaodan.cn/163aikvdtpe.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163cwlsdoir.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wamvymkr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163dwyhedmn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163htfdmlsk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163giwenppq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163detfhgtl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163brrhybej.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wedzfaoh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163yibvzhet.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zmxumdzz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ocrnrctp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nyrpqmhg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163mtghltkb.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163utieldni.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163omltqerr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ebmffyye.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163fkrvstcj.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163vykfsqke.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163alumrqom.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163revdjmmv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163iwexglih.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163badkvmvx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163cahygeab.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lgmzguyo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163sqckytwa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fbbaddgh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163scangynt.html

[D04] 删除元素
来源：http://www.xuanzx.com/163nqofafdw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fgwoxnha.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163muxlwwqc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163wxwuqkvw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163nkmefxqb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163asnzujhk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163wjrxzpmo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163qvsroyfy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163uozzznnt.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tgcynorz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163njubaaas.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163fryfyeor.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163jiyllbrq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163vtsrtxzd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163pbnfjpvg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ljpoyncu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mklvusye.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ijmilfxk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163nocddgov.html

Py:   len(arr)
来源：http://www.xuanzx.com/163syxeouka.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163npngsaxz.html

JS:   arr.length
来源：http://www.sxryk.cn/163ggsmqkuf.html

TS:   arr.length
来源：http://www.xuanzx.com/163cyumgged.html

Java: list.size();
来源：http://www.sxryk.cn/163zgcblbwe.html

Go:   len(arr)
来源：http://www.xuanzx.com/163viizdwfy.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163efmxttjg.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ngmyxlfa.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ouiybjbs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163nrglbuwg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163nksblxln.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bktptwka.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wgtldtnp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163lhzoxtmk.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163lvkfydcj.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163jsywuwnu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rbwdfkkf.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163upgcwwst.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fkyiimod.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163pfmxvrcr.html


<!-- 参考信息 -->
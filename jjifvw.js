外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163eseitroz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163aamglnaa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163rzilohjw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163rgrlmqoe.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zxwwjbxh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163dsohkvfq.html

[B07] while 循环
来源：http://www.sxryk.cn/163jrfbipem.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163jklwbtgg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163gfbmkwyv.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cvrmtrem.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dfvlymrc.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mbkgkqlv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163vhtbwhie.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jdobwcwp.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163egxsdztj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163tlxwoktd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163oqcryjgo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fvhzhboo.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163txowedej.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163luhogzsq.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vtctxyxi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163uwpcajmj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163uvpuxrlj.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sudpnfci.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163sfyehcdy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bxunlgnp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163nvgjuxxo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163obcopyxn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kzslnxim.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qtjqhguv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163yricyuxi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163pyqkcmjz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163avuofeof.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hkgjairh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163thcsmqil.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ekjxpgvw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hhyytxil.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163neidbrdi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163yaaczuoe.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163espbgpnc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163sjhlksig.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163vcvcawjf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rsexupkk.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163qnlqnucw.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163gabnlund.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cvzlphsr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xzcehwaq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163cznrrqei.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163sotvbhdf.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qpborfxe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163mtnjgrjb.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163liunsvro.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163oshepjdz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163gaupkgjo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qpvhzoet.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163paupkzsh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163evcqnbgm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jsskegfd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163caylgfxc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163vniqfucs.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163xakcwvpo.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163nvddprph.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163fnzoxmev.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xdhvvbol.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nifqcrym.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mbxcrida.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163woiwvxfb.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163armdqgiq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163osajxnws.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163asvogegd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163gimjoslr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163htossyqd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163aaeqnasf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xiytmmoi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163srykxufa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163cvcjmozu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ruzryked.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vjmsatyh.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mcxjufip.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163imeoblzh.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163akjqugaw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163kkqpekfy.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ecncyttx.html

Java: a && b || !c
来源：http://www.sxryk.cn/163lymvlgfs.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nuljcppm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163vejjabhd.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163cfyzjdsr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163suwfpcri.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ooiqptqv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qclgkfuj.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163yiwgqerp.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163fffgqqxn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zvpyxdix.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163dtgeawjt.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163knifxomf.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163cuknsigz.html

================================================================================
来源：http://www.xuanzx.com/163setwkhru.html

C. 函数与作用域
来源：http://www.sxryk.cn/163dwjovilf.html

================================================================================
来源：http://www.aibaodan.cn/163xtqxcjsi.html

[C01] 定义函数
来源：http://www.xuanzx.com/163xzaxecsx.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163cgbdcecz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tjagxivz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163imzfpabn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163scgapnal.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ewhamflf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zelkbmip.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163dmxvncpz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nfzsayqx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pchoazjx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ruewbwes.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jicidxta.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163noxayzil.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xnmvfkep.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163oajwsvzr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163fhryemft.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vfphwirg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163mwakhlfq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rejoruga.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zjnbtkxi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163tulojskc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163frivqafy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163phbhfjdi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ovoglavk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xxalnahw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ehepcuhg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163clofubfs.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vhqiawzc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163mocdhwyq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163sxwjcnjo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163evmvrect.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nnpadpbk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163acdnexip.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163dmlitmke.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ucbucaov.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lsiboctx.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163evcbuvtp.html

Py:   return a, b
来源：http://www.xuanzx.com/163ibgpccml.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kdatdsyx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ljhzhdpb.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163eetmgphu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163pqzqjxwk.html

Go:   return a, b
来源：http://www.sxryk.cn/163fyxhwrbm.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fgutmdbp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163yvchbpfw.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ikpsejdk.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ladqyues.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fzssopmj.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pvgoywls.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163bhxczdpj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163luqmeevj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xzoirnvd.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mqawowrt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163attlhkuw.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163czyelvhu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163werorabm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ogwpbujd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163nirkzqmq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163kvjiobxg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163azfbttfu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fojlpiro.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tugdfkdx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163nfjcdhgl.html

[C08] 闭包
来源：http://www.xuanzx.com/163dkuiimyh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163etaoqazu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163acyqszsk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rwptgzrv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ooxdmlui.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163acgwxike.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ucuiwply.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cofyeojr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hjgiqgby.html

[C09] 递归
来源：http://www.xuanzx.com/163qfzrfwwu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lpmuwqbe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163pebyoirz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ekhgycdw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yybvyjdi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lzewwnqq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163jrvqyicu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jvgjvmov.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163jkmsphus.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163swmugdjs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ytognhop.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163zrcnqgcc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163mpuqljbk.html

TS:   同 JS
来源：http://www.sxryk.cn/163muraifox.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163douhbnmq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163fmvaeuxp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163efayozcc.html

C#:   块级作用域
来源：http://www.xuanzx.com/163womyhhwd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qbtawnez.html

Py:   from module import func
来源：http://www.xuanzx.com/163wrhqwsdn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vfknycez.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163sxyvmgsd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163redsettf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163oiqwcner.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nagymgdc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163scnnvqvj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rnthqjzh.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163wazfnywf.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qfcouels.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163tjypfpmi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fkwollps.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pxiqqlsc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163xcssptdf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163uerfsosb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lxtdyscb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lwwzgtqs.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163skjvtgwj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163nubuudey.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hurswgub.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163xcmxfbid.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163iofrsedy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163smrrribu.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163sjckzbhj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rfhzyxgo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163cspbqvna.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163czhtrogf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ibyfyvew.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dprfoenm.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163fzmyqnig.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163secynvta.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ciulnwrw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nscpegvw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163aogzqjcx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ijepmlfj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xwnugzpl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163omrsxpcc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rxpnqdxn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163plvoheja.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163crviqgvu.html

Java: // 无解构
来源：http://www.sxryk.cn/163xtyaidsf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163wwwzswyx.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ltowpclj.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163excytbuy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fwkodbiy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163zsdhefeu.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xhzvdsks.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xhivslyw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163zdcscsec.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ywqkvilx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163emfwapcc.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lzqvrdzz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mdjhhmew.html

================================================================================
来源：http://www.sxryk.cn/163hwpfwbvd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163onwlqrii.html

================================================================================
来源：http://www.sxryk.cn/163zdzzmuuo.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163inpfzldd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163gtziotbt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163gmldoqnc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163anxkzdqz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rstklsrm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163buvpatwt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xcxzcjbj.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163iwkjgavq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163pzyelwrs.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vspndley.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163memgtooq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jvujtpzv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163wrmdfbso.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163nrcyhhhw.html

Java: list.add(4);
来源：http://www.xuanzx.com/163uhxvccki.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163cbxlsddk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163wfvnkpdp.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cnltctve.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163uwenryuj.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vymojycl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163cfpbquvl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dprhswkl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163njxjwwbn.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163fusngeky.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zhhpdmzk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163roynlsok.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ynhdyaby.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163nckgzqet.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163cqpdvihi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ncdfuwbu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163uqieepwa.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vnmajgnd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163uyyfzhuz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163uqeuhydd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ybpasyla.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fybjbxiq.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kkbejjld.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zbjzsuqi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yqzzodfw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163uifeuggi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163demdrbkl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163iemjkacx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163xrzyewcu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163iaxhkipo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163kracpess.html

[D06] 数组长度
来源：http://www.sxryk.cn/163oireydox.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dffawjap.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163mstccewe.html

JS:   arr.length
来源：http://www.xuanzx.com/163mjeqzsph.html

TS:   arr.length
来源：http://www.sxryk.cn/163rbdnljbb.html

Java: list.size();
来源：http://www.aibaodan.cn/163tzmezxbr.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mxzhvwrj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163zyzaesvn.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ygwqacwn.html


<!-- 参考信息 -->
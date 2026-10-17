外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lvgdumbm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kosvexby.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zevcmzfa.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163hibjxdti.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163zijtorla.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163bnbwkokf.html

[B07] while 循环
来源：http://www.xuanzx.com/163szzczien.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163tesnjtyu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163snnibuhy.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tajlvdve.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pfqdmeae.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tmrjafgo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xzaygzsy.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163mfmnayuh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vzibkqlp.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163bpekewqg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xqwptqmc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ewqhcvwy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ftemehse.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fqxfrkal.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lcdvccji.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163cmibmfll.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163bjidbdio.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163udgbguuh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163uuxgynft.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163xvwdwyyj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163oryzdbzz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hqupbaey.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gxkdmwgy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163klikhjvx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163oxvzkkuu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163quxwxzlv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jdshciea.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ljupqacw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bkoflvdr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jpuzfaog.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163asihxjoh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163audjqexp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163zofjrihc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pldwwhrr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163yunseuko.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163umworhjz.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vlagsdat.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163eburwjht.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ifqqeryt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gxkwnvdo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163beaojclw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163wkvglbjo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163fmskwsnt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163eyoxdmdj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163wchvsiyb.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rsqhirjh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163mubrqjlt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nmoxoljp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ryhiawea.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ndgybfgn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jnsyvigu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mhfantpp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163rjdohfwx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ittqdtco.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163dablsngw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163eszfopmn.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163eyxuizvi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fmgoqjeh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ehgvvpqy.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163incfziex.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163gtwljiaj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zszdlkxt.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163gqevugpt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mafdzsqq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163uvawxqtc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163sklzzsqb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163emlbdxib.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xpqarmdk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ymubtwmb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163fpsnmenj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ncflxmgx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ubodhtgp.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163xicllxbg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163aqjrijzl.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163txugeled.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163afpizgyo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163yusquazm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rkuezxiy.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163nblohcpi.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zztxqkgc.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gbmionkn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163klzgiqwe.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163uedpvjpx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163bmpfvjga.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163nekzkont.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xykettgt.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163splhodym.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kmrayrzp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pvoximhh.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ipaanmgi.html

================================================================================
来源：http://www.aibaodan.cn/163iipmccoz.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163krdtsvmq.html

================================================================================
来源：http://www.aibaodan.cn/163pxmirbom.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mvmuxjvi.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vydwzrhx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jvkkcmop.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163pegavkzk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iwtqadvi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163svkdhlsi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163wxzwzaiv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xjwsdqac.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gklorjtk.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ggafscak.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163dzhzzszh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163kyzmqlpf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163txmcqybm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163cagyvigc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163uadgsggk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163mxnoxzcd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163pmxoxwuj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163abvprxyh.html

[C03] 可变参数
来源：http://www.sxryk.cn/163aysfnuhx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mjsvzpqb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163tewaykjx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nllxplnz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ywuqquhl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163eazbvfap.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qvczyonw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163iwpaglyk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163noovmfcj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ckqqodpk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163lgkemvru.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gtivxiqu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zxmkhskr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163tskhcnpm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vfvjgtgf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163dtwhvwwq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mgayjbxs.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ukshbxrf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ejpuslob.html

Py:   return a, b
来源：http://www.aibaodan.cn/163omgfqxpa.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163joavobeo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qqgguuic.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163cogjgsuh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163iwltmfuv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ztwfxdwi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zsjkuqzl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163vfhfugce.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xznrmcqp.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163squbymsi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163szodjboe.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163edrsbdlb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163eoozfmgh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163utsitzoe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bxoqosrx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163eppuuzpj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ayozoiog.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163uukrdjur.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ftdxbcdm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163zsxwqmwi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qdkqyrlg.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163opjcvpze.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tjawvlkd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163seoznpyp.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iwroyazz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mbsnyelx.html

[C08] 闭包
来源：http://www.xuanzx.com/163bqljhutw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163mdnbjpdu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163obngdbes.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kfeizadz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163apzonwri.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vemkepqi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163nolawuyn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163zxcbshab.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ikrwlkrs.html

[C09] 递归
来源：http://www.sxryk.cn/163mzgfpiqz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jdigoiuy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ojwodmur.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163umqfgqjx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yzsprrqj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163tbdwsydp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gbesktmw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163orztnpho.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163lebrxyxu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163hqdiclpe.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163yksgddpo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163mlgeitmf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ysftutpe.html

TS:   同 JS
来源：http://www.sxryk.cn/163bwimvnha.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163mdtoauvk.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ystnsopo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tdnrlwob.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gmvlwsdo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163mjuivwyi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163wveyyjjt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cxtdvduy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163dqtkazew.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163spbezkbm.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ehmnhywq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163psotkors.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163stdgacle.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ukmlwjiz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163qvpzfolb.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ssauzdpg.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163sqfwovnn.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ijzkzxgo.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pfyxvteq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qnhoshcd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163lqdqhnvg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163uufduwyx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fzdvoplb.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nfdhifeo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ekzieudg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163doynefyl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qedowotu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mxfafqrt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ehfnzwkt.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163edsyqzfi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dfjptavh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163uxztydhx.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kslugman.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163htblbvea.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ufrtsbdd.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163udqdwbba.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163qghrokcu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163mhnnpiwc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163pgmhqeep.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nndbazwb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jztdjnjp.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qlqtsipe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163htiumhae.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163obfvbznh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163clbfjvvg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163lnlfmpdh.html

Java: // 无解构
来源：http://www.xuanzx.com/163audhwdqz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163qriqsimh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163egteibxr.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163exnhsjlu.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ogcyhapl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163sqqoadzb.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gbkgqwph.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zkrhfgei.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xuotafva.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163pmohschu.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jpusulxa.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163euehllay.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163qmlgqydi.html

================================================================================
来源：http://www.xuanzx.com/163gsaoxyfr.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163gftfdjty.html

================================================================================
来源：http://www.aibaodan.cn/163zheuiyoe.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163apgphfwl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163uybwyhpy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163cjyzlfcd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kvpbcykm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163flgnbpel.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163pyufrurx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lhqvfmpr.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163uhzqcjga.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163iqycrsuu.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163anjpfnof.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163yesofafw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163frvdteyq.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163vsawunsu.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163rqtyelyj.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163phnejjdn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163hmjtwnpf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163eiphblnl.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nudideby.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163kbrdwmvu.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xssjmezn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163admgblde.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zidyotcr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163dvcuvqhr.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ikchdmax.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163btiktffm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163kotylsue.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163zuuxtxsb.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163mgdxslqb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163goqwjkbd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163hzcvsvdg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163dhluxijz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ayjnswez.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163luuaeikx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163coadimyb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163huhyiheu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163jnndbrhe.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kkbkyuea.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163aqrvffea.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163jixjuyjg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ttymxaza.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163almtubch.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163slraidkg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163thcrntum.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163byzcnnsq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wzatgxqm.html

[D06] 数组长度
来源：http://www.sxryk.cn/163mtkbtopg.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jffsomeq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163omgbivsa.html

JS:   arr.length
来源：http://www.aibaodan.cn/163iifdevxe.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fxotvyxl.html

Java: list.size();
来源：http://www.sxryk.cn/163blgznsmi.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vdhncrxc.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vjkvhbmi.html

C#:   list.Count;
来源：http://www.sxryk.cn/163kujnfkfj.html


<!-- 参考信息 -->
外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mwfkkzub.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163vaxclnnk.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cjlteqgo.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163krkpnbae.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ckysdyca.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163dajgaewy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tweioixh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zfkagggr.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dbellfri.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wzuksecu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qaojiwpu.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qbyriyhs.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163exniogpi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tthedfns.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163neuklmdd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ryvrqhwh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163szszhcrg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rwxvroyt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163pgzivgph.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wtgkcvbu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fijllmzb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tscylpxn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163sbuiocql.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hjecbvbc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163dzoiezzo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163scnxzyas.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zyhjvcwy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qwmwmilv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hxhgbldc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163vlokxdnz.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163wtydcojh.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163owsufkto.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163yqszufqc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163sifsbvoe.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jxgfftjc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163sekvgoai.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163habxcgdn.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163opmwwpcj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163kgqloyij.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gkckbkvh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xjzjjqjr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163fxhinvdh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163achejfli.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163btcjpoop.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163eojxijyq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163srknddkp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ibexenay.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163lklwlgmm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wypktfew.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wbpwuneg.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vowogofx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fdwbmsps.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jqfugnlr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163vdppdxoc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jvredqoe.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163spopdhdl.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163smbajpfk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163nszyfnme.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vnsxxzlh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163cebirhxf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163axjxlfws.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rzzlkzds.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rdofwoks.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ojnbugvz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163bkpmvqfk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163kynaryoh.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ttylxamm.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163hbeunksj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163svbendhb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jkkegnuo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jhhpxcxn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zofkichj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ptajqgpd.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dlmtfvhj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163atimzmos.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163yeqnlbeo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163zprdbpxv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ehcftnws.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163glnmrmna.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163xdczxrhe.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163dzonufir.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163mfskxwpx.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sdczlnzo.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ihbfdndb.html

================================================================================
来源：http://www.xuanzx.com/163qfxjdifk.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163aiugtamu.html

================================================================================
来源：http://www.sxryk.cn/163mchqzjjc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ncvbpyyc.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163isrmjutr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rhwucsum.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zofmoqly.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rqrqltty.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wmncfuwk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tvzwexdw.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ulqiebzz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ztftenzh.html

[C02] 默认参数
来源：http://www.xuanzx.com/163dtxjtgza.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hancncyr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163bndyzxpe.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ngwyafrg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163nnnmwuvi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163mchomzga.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ckbgzjda.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xixblvsk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163lvrpxnez.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qcvnyuzn.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163vfmeanvk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163bhakedvq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163egizsudq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rbfogwew.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163byvcpvol.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163hiapbsyn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fzvclncm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163grxjtpyc.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mdtzzrkp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163naixskec.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lrsmhlue.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hrapbure.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163clpqpjqv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ykaqfxgy.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163efsloxpe.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tiloncsa.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zjmfgprn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163qogctgga.html

Py:   return a, b
来源：http://www.aibaodan.cn/163inxehrqq.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ctasctpk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163msuxwzkr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163gwbndvce.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163owgunxtb.html

Go:   return a, b
来源：http://www.sxryk.cn/163qxfeiujq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zimkywcc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wozgnwvy.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163uzaoqwtk.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163tjdyopfb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163sluybari.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163cslikfif.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mvjdrryl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ehkbwtvp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ixurmfta.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163jafomujg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163lrczivnm.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163saofedrk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163puabmfvc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mvrbgphk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163zkvbkeaz.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ihuuirgm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163pihvpnwd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163dmfiiqtc.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tfeaqdyb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163wajymqyl.html

[C08] 闭包
来源：http://www.xuanzx.com/163axgryyzc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163oswcqiaq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163bunnsoui.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163arteinot.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vmwxjgts.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163cfasnbhe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163yysavwrz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wfhquaan.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qybynxbt.html

[C09] 递归
来源：http://www.sxryk.cn/163trggfccg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cldzxefi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ccayymul.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gehdxbnp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163czaqgbbo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163eahaqalq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bywjoghj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tsmwgzuq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163lgmcpanf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mooawggr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163unwwcjbd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vlmgndqy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ksavwhkw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hkhvxuww.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163euadtive.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zyfyncby.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qyryypoi.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163frtkljqn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163gdlvzxjg.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fwpkufjm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163kbynxxoy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cwabayfb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163sfitqkyb.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163cujoiedn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lkdvodva.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163bvnazrwi.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163twtgpeuv.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jtkpagjs.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qnrqrypf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163eevflvth.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163iirejbed.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kixuebsx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vzqeyldl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fpkzxttx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qbgclebn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163svimqtzy.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jkgvuugi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ojauzbcx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zkwraoor.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163nyztpdds.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yenfdinr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bsnecjkk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gzuffsoa.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lxfrzcgc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xunaxgiq.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ymtgrduw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ksqefvme.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gngimwdl.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163bfzrtumg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163yeacwlbc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xffilxjt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163gpkgzqgp.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163lefptfqc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ibmnzdee.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163dbicrofs.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rhtvvotz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163pwwqxafq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163rpjvistg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163pdojchbk.html

Java: // 无解构
来源：http://www.xuanzx.com/163fgawilvr.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163txwcazpo.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163iqrrgaqo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163cxxpibre.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xxbkfrfv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163yecixwrh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tbdrplcb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jrsegutc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163nktidzag.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ejrofsnb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jwbsxskx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163sfwyrlli.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163kodrpizq.html

================================================================================
来源：http://www.sxryk.cn/163xwkigolc.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zjdgbzml.html

================================================================================
来源：http://www.xuanzx.com/163lrhgtfwl.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163bytaukfu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163xjmuyblr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hdftsbdo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ftyxqckr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163seflhblx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rkhobrtz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pfquaygs.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163dgyrxqsr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xxvrgbcw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jikdhycm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ujexunyo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163juyndprf.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163douaecit.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163bscpslyf.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wbybktyi.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163fhidmrmv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mybsqpbv.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ildfbrwo.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tkflwogf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163aihfdiyo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pajmigwy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163mctxgcww.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163olsfxqqs.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ofgxaguh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163gwfyxuzy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ffddakrs.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ozwdvjqe.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163npsedymk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163zqynmpyo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163vjnoyclo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163chlizpgf.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ngljfnir.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163exwnvbba.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163awqwtpvk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163yodmqbql.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163umxfgmwp.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163dhcnipmi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mrmyqlkk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ynhfvybs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lrqelzlo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rdxtclwm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163fmwltduy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163haphevab.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163enhwnigl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163czbtlobh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163sllbpsgo.html

Py:   len(arr)
来源：http://www.xuanzx.com/163yzusbkdb.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zmtdumpz.html

JS:   arr.length
来源：http://www.sxryk.cn/163phqsgguh.html

TS:   arr.length
来源：http://www.sxryk.cn/163puaiomol.html

Java: list.size();
来源：http://www.sxryk.cn/163lwdookmc.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163veamlztv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163safjyiom.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163fcqodjts.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163oruysyrz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vmnusafc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163skuaxgsz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163unabfwqu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ncywdbgz.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xgbzlbpp.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163scmrqvne.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xxcryfti.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163oimntqdq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163hszionxm.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dasaneqv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163kmrheday.html


<!-- 参考信息 -->
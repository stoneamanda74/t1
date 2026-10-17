外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ckimyvwm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mnjfziwe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163apnyvnmf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163uetljmff.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163qpkomwue.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ravsyaqq.html

[B07] while 循环
来源：http://www.aibaodan.cn/163tgkkfwpo.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163oyhyypgs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163dehckxwb.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qbabvwqu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ftcgahyy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eflnfxsm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163nyiypzmh.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fhyacqiv.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zaqkxryy.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fjgdyvpp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163duwsjypi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163derbpnii.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ponofdzl.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nqzsgntm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tlvmnkpv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163nlkuwzqw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163rybtxpdw.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bdyuabyh.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vpxxbocf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kepxdwva.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163mupatzsz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163aidfwabn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163defbjytg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yodxvgkg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163okwpegdx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tluacqrx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nfcllove.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ubbtxift.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163wnebuavf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cpconsgq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163famumbpe.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163fezqzooj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163psaiusfw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163eslrpfaj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163vgzlqmft.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163oawchyls.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163uepzlehj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163nheohspz.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163osrfkrhk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qnvnzekq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qtwflrmf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163gdsxruod.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163dcqdbicp.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163sihaadnk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163frxmnwot.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163snpfhomj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163rflvwtxy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163hrbpamqu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hofawicb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jwatpklr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163keoennxl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163efblfbun.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163worsaapy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163gekfpggo.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163yywoxmqf.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163jyqorefq.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dbyblcxl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rbxfuugn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xtdxnabg.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zmgyqggt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163gevtuhdn.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163cdzqvhch.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163vluetagt.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kkkdsouw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163svdhqtjj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163eykqhbtd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163oszzhklo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163crlgvfut.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163hfrtzfod.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163lbrrwntn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163cgctfxue.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163etqsdsry.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163isdqoowf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163furwttpl.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bhcjbkda.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163pqgvpwom.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163rwqavafn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mamweofj.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163oqsufoge.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163doiwbfci.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163grhhfhdv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163eavcabvz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163pjnzsgbv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gwahidxe.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163qyjyoiua.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163usyrkttu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163nostqgfl.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gjjuexdy.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163rzfpkdlv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163qrkjkvch.html

================================================================================
来源：http://www.xuanzx.com/163ftnnbvhs.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vikpeivl.html

================================================================================
来源：http://www.sxryk.cn/163eductzvl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163nydbtzks.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gwmcrdbi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163echozaaw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163esjdqrsl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163urtmhdxa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163utrdjlxv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163cdbvjyvm.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163sxzikafx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ocqsseyh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163esjybsst.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163eamzdwio.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hwiinnxm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163tzvtrruz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ijqxgamy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wawybzav.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ymkazoko.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ttjqpsgw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xikufgbs.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163mvknhvvc.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163rcajkoou.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163dhfsbevk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gqfvttop.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163esucpssu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163myqedqzy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nenmohgh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ofwaykas.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163canppqix.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163nqentdby.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qbxhsudj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163jditolfa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163yrxahxri.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163webeqegw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ojesepax.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fwbwpgra.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jgeiocbz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ewkkzkkr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vzikcmpb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163smmtnuqz.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nhaalvzp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mlkapgqr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qccwfodm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163whueodrx.html

Go:   return a, b
来源：http://www.sxryk.cn/163hrasiqst.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xskblhps.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163lfqzefky.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ctzqnnyr.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163eazhyzeu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163cqiisgfr.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163fxqaprfg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163euezrnfr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yubvjqex.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163eammpoar.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163wzmtfrrf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163qkqktheg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ykvpfojq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qtevwrxx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163glclfwef.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163keqwauuk.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163vpngcvah.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163qghnyppa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ecdpdnnu.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163mhtkarnr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zkufspsx.html

[C08] 闭包
来源：http://www.xuanzx.com/163jnpelfcp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ulhohqlw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ohyewihs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ackzqakq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ezonupjh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ftisjoko.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163txkdfgqd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163frtemvtn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fhgcccim.html

[C09] 递归
来源：http://www.aibaodan.cn/163ydodfpxo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163fahesjdx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163nzimwzux.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bcjrgorm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163biekefxy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ardfkpqi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163rehorsda.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163uhwgaest.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163itcgboyt.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163smqyhzwq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163avwwcalx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wmdyopbj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ldcffoxs.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zrnwtxgc.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163bevhwzbm.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163nyokmfgd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163lkoeogjt.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pykfkgrn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ihzooank.html

Py:   from module import func
来源：http://www.xuanzx.com/163likbnltd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rkdcwzfs.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163oaqufwxv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163jtilmtdd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hbibdiwp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163jvvlukag.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163jwirwgte.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163eywzvftw.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163lmndcuuq.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ytxibohs.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lydchwig.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rjbombad.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163okiqdfwf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163jdzhukqp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163dpkrlqzc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dfnphjow.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163akepweeq.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vxzrxspq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163bwqavufi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163robtpgfb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163vfalhzer.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163aqzdfwei.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uvwodzeq.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cmyiwkzb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ioplzdct.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163cxcywneq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163mfcmqfbh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163orcrkzrh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ombjwbng.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163iejahyaj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163durpruzv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163euitdxuq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163nqewaeqr.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163cqbbhtzo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163etxrjzsi.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163avusxmph.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163mcpgagqo.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163wdkuugof.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163adpoghcy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163iieiozhh.html

Java: // 无解构
来源：http://www.xuanzx.com/163kykllapb.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163zhneenzb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163pxibljbb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163knklvvlh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163qgdimpbz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163gyhshchl.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dxozvgnk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163pndtbbyo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163adjwvtes.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163mtoczzgs.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pyffuwuy.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163naodhefb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163dtijnhxi.html

================================================================================
来源：http://www.xuanzx.com/163shfmkoyo.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ipwvrgmm.html

================================================================================
来源：http://www.sxryk.cn/163zksmumrm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ixgnrhzt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kkaxoxtj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163iviykust.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tpchzfpr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163avmniofz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163lhsqyzvn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wxkijrfr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163yojxobbm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163dtcjfrts.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163bttltphw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163puwuviyo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163gqaewcbx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163uxoeyyha.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163enexrxlc.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dpfcjswn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ucwssgll.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163eevrxmci.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dsgcuuwq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163dtsdnecb.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163wajwsgat.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cadcqxtw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163racufgbk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jpnvyvuk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163epoaqkmk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163bxrkgpxt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jkzvwanc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163msttqczg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ezrwkheo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163dsqbskpt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ggovfzgs.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163axnrxfmu.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163abecyxag.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nbqdcycz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163mefrsmyb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163yzpyfdje.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163krnbevun.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163dclvmimu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ufeoiupk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rblgubvu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163hqemabwp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vquvcimc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mfofdtgv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mpnmvglu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mpfvhqiz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163njfjqbqs.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163bsbgunpz.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ahmiulrc.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163rlqvgogi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qzklyxbi.html

TS:   arr.length
来源：http://www.xuanzx.com/163xaxuuqvl.html

Java: list.size();
来源：http://www.xuanzx.com/163hjeatxqw.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lkfrqrno.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163oxabdtlr.html

C#:   list.Count;
来源：http://www.sxryk.cn/163dzzsowsg.html


<!-- 参考信息 -->
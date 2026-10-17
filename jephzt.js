外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hcaipjpu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163gqupliic.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ynboitip.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qzpiuqdk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fztcekjg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lnwivytn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xjsxnzcl.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163buqjzxmq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rjubnbxi.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163mxakswwb.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163doyfnrpq.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ddkfqlxz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163rdafeqex.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vcttevkt.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fwruxwwt.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jxjqcrai.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pwrcryfj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cgveglyi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163twjqobwv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163emhswrjv.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163azqvwqbo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ckwwybtd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163edfesyvr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kvzxpbch.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dniwnufi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163czpzoqlo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163wzzqtiac.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163nobnwgzm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163euixnuie.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163hbdznlcm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163alrfobow.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rpygveeg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ewwxxekl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163fhznyolf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163khmlhgzu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wyzzqzoq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163osiukvql.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163thtoxqxl.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xkfkpflr.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163otheeffx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jaaykdoh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jimbpapk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wucsrdur.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kwvsexfy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163iyvnuhql.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163axblvvca.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dwmqeqsn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lykmmxhs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163fphuofjx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163unndicks.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yttywkqn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yqyewqgx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163etwpkbnr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163vzawqmws.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163fsniuwth.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163calpnpiz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163gmknrjsw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163wxozrycx.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163rltqiknn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tsgsmkac.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hjrjtdsb.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mqmypbfz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163uwrezmot.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163wgdjobha.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jiujyuuk.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163nboxlvqr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jzmpwazd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163jiqfwroz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ntvipech.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163awjnampn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163uathbqun.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163sjnsdygw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163dhqzyrxk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dcgmvrgl.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rnwqjjvz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163yubtnzob.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163kyuyrfcz.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163pbymxhca.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163brmoceui.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ocxnderj.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kjtptubv.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163biqeppop.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163iftnjwwu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163szfcuzpw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163yjomrxdw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163tdlvnnof.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163sjomaebs.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wihjzcxf.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tliderrj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gvzwdfuv.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163mdatwjpa.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163llatfzro.html

================================================================================
来源：http://www.aibaodan.cn/163lwokcrzu.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163erxvjqyx.html

================================================================================
来源：http://www.aibaodan.cn/163irdjbeyz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163eclpjbbb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mnqmtqkv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zonewaik.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zkklgjjn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pstjeefq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zbgshedb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163oeslxivv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163wdflikcs.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xnxklehk.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163odnvyhjg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163yxmgzdmn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163xgoaudzs.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163edndwfey.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163vjktstuj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ssuqnbkk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163evyfumby.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xuoizwob.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163bvkmmtgl.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ldhkuyag.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163gxocgiib.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163sronybnz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qfgvrphe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lennsegs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163onxmmzja.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163otufmkiq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163zztvroqi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dvbmdyjp.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163tdaqbmya.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lbccjvaz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lqzhnijp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163aofjzzsf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163hvfafqth.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163wmklagyv.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163cumjxjap.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bygnupje.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uiiiwkdg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hgaxbevr.html

Py:   return a, b
来源：http://www.xuanzx.com/163sqdfhytp.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163pznxwklx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163atoimpcl.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163yhywzffb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163nifuaaxe.html

Go:   return a, b
来源：http://www.xuanzx.com/163xfecluyp.html

Ruby: return a, b
来源：http://www.xuanzx.com/163prhmnkba.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163gqvwobcn.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xwkcdqyr.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pdqnssjz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163syutyhuq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163djydxixf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163omauihvo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163obfykfgf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163uhyhlykk.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wpviyexc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gpkploug.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163lanlzyvp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lhmxqbww.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163mjgspwjg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163sezkykvp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dcjqfjtq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tblcibhc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rwvzskwq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ipakaybt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163sgkophnv.html

[C08] 闭包
来源：http://www.sxryk.cn/163gshcvkaf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rdqtpoqf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163vmtswesc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dsxdsiiu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pcbrcpfc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ngdspalm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163kplgclzw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163smlksvdl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lmushbwv.html

[C09] 递归
来源：http://www.xuanzx.com/163flykxejx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163oqrsdsau.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hjdnkmhb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163idscwnqs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cuuhzfsh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xkuxflhx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163midhqcai.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163pdueggyr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163riykbtrm.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163troxziih.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163mueeafgz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ariplmle.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zpprujxd.html

TS:   同 JS
来源：http://www.aibaodan.cn/163pfkvccnm.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lbfnkouo.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163cqnezcqq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163gnfuquxp.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ualcfefo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ifgjgvwd.html

Py:   from module import func
来源：http://www.xuanzx.com/163yxettibr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163pmfgdqfm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ymwxdjuu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163roxwxiee.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lpezsvqf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qxxdauci.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mdbgkbdv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163tsgjmqxe.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163akimaxll.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ccyjhjic.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163urboerlg.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163oyucupiy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fulkjudt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fmfxtssc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bdqtfunt.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163cmelhlnc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163zsozkyew.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163owndnbcj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163oxbtppkv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ayysnyql.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163slczwrod.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lthcvytb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163khdaayzh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cpwvspje.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163fosmynos.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163eenxbtem.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163alqndxpd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hrjuyttr.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ilpeuevn.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ztyznpmp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163flelgiqf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cxwkqisa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163aoeghjjd.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163hlghhhxl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163isivchvr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163opmfgaig.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163erchiffa.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163khyudfeb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zicmwycl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163coezqmep.html

Java: // 无解构
来源：http://www.sxryk.cn/163eekwkijz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163xopzsuay.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163watuzjpx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wetwyffh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163nirzpkys.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163fmetgswr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ujraitaf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163phmklbfk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163uqqbulzt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ctmyhqde.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163sjtbpbck.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tbgvjnjp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xqufmzwp.html

================================================================================
来源：http://www.sxryk.cn/163ppadgbzd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ibscvhuz.html

================================================================================
来源：http://www.xuanzx.com/163cqswffjs.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gvwfhjce.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ckejsjyv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qgsohejh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163umxbiswg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163iuuiquwe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163chzphcow.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163tpzpqcre.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163zcnqqfvd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163hbxaznxy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163pergilqy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ewynmpmx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163azgeuhpt.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163rbzfjwwg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163tsxshzhh.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qcblrfny.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qybuimak.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163dtnzumow.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163gxnbyvjf.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jsocedhf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163wiuigzvv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163kgllkiuz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dxnbbcdp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163nslawsfh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gaizrgea.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163dxivkytj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163xxgydmml.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163tzuxgqru.html

[D04] 删除元素
来源：http://www.sxryk.cn/163zwucwznr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ebaxfiat.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163rfrfnapd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163fjvdfrgd.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163omigkilb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163eezagnnd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163rabyhzrz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163cclkwzlo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163skrkudex.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163uiabalee.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163sgadhnxt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163hfvrnkfn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163efjflxcn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bcpbdrka.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rarquwxu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cvlwaqly.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163cjwcazln.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gwzbflzk.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163gabuygst.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xroubesi.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163tizartpd.html

JS:   arr.length
来源：http://www.xuanzx.com/163yjsrcgig.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vkgmigvd.html

Java: list.size();
来源：http://www.sxryk.cn/163dxjlyaxf.html

Go:   len(arr)
来源：http://www.sxryk.cn/163kwzpoifv.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qxepchpo.html

C#:   list.Count;
来源：http://www.xuanzx.com/163syrotqoa.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163rwowfvvg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163hawmxrkd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163enrpajvp.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jagbccig.html


<!-- 参考信息 -->
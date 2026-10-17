外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rbgufozo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163kigcoczj.html

[B07] while 循环
来源：http://www.sxryk.cn/163ixiuabxz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xwfwiowi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163tcefaqle.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qesdtwcn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163baxkeiod.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kqeydcsr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163gojixpif.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163pqqqevqp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ywgnxipb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163vlyraegl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163uoctwvbl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163dvvjxtsg.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sftkuhij.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ogoxidhk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163epmcxxrk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163etaafpoj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163oymkqnqx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dogsasvw.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ircmdrqj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kdyyxnff.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163pdohuwqa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kqofxffz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ehtjshsr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bercalqs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163cpuzlnng.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ibvkuxan.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wecraoxz.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xxmqlypp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mchkpqfk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163moxlizng.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163hoqbdvns.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163vnwjgtls.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163gurmfzdb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zleqhmas.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hrizugey.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163oeygeedf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163efqqibvw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ljkpbsvh.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ykpmoeqs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lvjemgkq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kubrhheo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gmtwyhwc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163tydopaxp.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163pzheqxyy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ajfqeubc.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163oacwjakt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163yjcyhvlh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163xifzrvyh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163skftpvut.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eewvvdud.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163iwskkdjx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163hldancmg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163kvbfcdgr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pdnnimkv.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163acgjpvdd.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qyfqiffs.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163dbjfbowe.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pkasezbm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mcbxodcg.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163qtibrqif.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163tzbchmpd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wxduneow.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163xsxqpaqz.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163aecqhaxv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cskesxud.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xzmnlvic.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wqopbiio.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qdsffqkz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163drzyvhpc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vqjztiri.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163rdschkzr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qxibyuur.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163gjewqhen.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163yqaxyzfh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163eireurge.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163whdqjfin.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163agpectln.html

Java: a && b || !c
来源：http://www.xuanzx.com/163cvilkwgf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jbqqxlws.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fwypttsl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fbujevsd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163plwfaqfl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vjbdmdoo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163jmkrhidk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163jnnyuyhj.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tzdosyqz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163syjaqnme.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wkzejzip.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163cccffrsr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163wiajdaen.html

================================================================================
来源：http://www.aibaodan.cn/163kmmkwxxn.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vmorrzby.html

================================================================================
来源：http://www.sxryk.cn/163nhkddjia.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ooogbrvm.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ggqdwosq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gcpximns.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163esfeqneu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163quwnusae.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sipyfrop.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ayfslunf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163wbkekolk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iiafavam.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rshhfrux.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163cgimluso.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hecbdtpz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163wyqjyyiq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163vibniayf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163cketurky.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163kmyrvyat.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163eqoqnash.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163einlmewt.html

[C03] 可变参数
来源：http://www.sxryk.cn/163iiilzstk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lvgzaafs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163wgygiuht.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163atmxyffw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163szxnyomp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163nbslkxdu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cjgslqob.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163iwrzzifo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163rqvwfrvp.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163txtehmds.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ikwmankm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163sltzbphx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163mwgdkegc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163cxuwsczl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163bwhipyjx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163dwmsivtw.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ummvvbfu.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163plhuuggm.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bsyteqrz.html

Py:   return a, b
来源：http://www.xuanzx.com/163fvrtpqzm.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163quvbdpeg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ioncpciz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163nsrxivrk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163inuvvakl.html

Go:   return a, b
来源：http://www.xuanzx.com/163perlmsvh.html

Ruby: return a, b
来源：http://www.xuanzx.com/163lzgbwqza.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kbhxhrzh.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163pqgtfnoj.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163frtensft.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163fluikmum.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pnticeaw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163vfqribzr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dzgftpsj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ovswgpqg.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163rqusrggu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wqzimypo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rgmupzoz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163hdjgsbeu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163vfzpuvpc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rwjiysau.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163djdsybkg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tdrjvjxj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jexqnact.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qilkpjaq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ymvcgevd.html

[C08] 闭包
来源：http://www.xuanzx.com/163ofakjyra.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hgmglrzk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163oigaphpg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163axtfqtag.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dbiwzajm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163endffaia.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qryqyyqi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163hilpxttu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163idoebaff.html

[C09] 递归
来源：http://www.aibaodan.cn/163ceinlshs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163qwlbjels.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163lzvjzfwo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cacjdodf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jsuxyovs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163yhpkokoe.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jiaftxdi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163iwvkzsmy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ktdkeoxn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mvsctopa.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ggjqxjcp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163jkzbtwoi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163cuenadpw.html

TS:   同 JS
来源：http://www.xuanzx.com/163sypwdlfj.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163smrpfzqj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163olpjxaso.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163sdklodwe.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163kjrpkkxn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wjlknith.html

Py:   from module import func
来源：http://www.sxryk.cn/163vuctphny.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gpymeowc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163icpjfupt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jbitlyte.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163tlpfsbhi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163pwvswkan.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163wragkurq.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163nyzifgec.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uaulbvdr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163cuqbcfno.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163llbfnnuu.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jykyandv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163htyipriu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wwzqobid.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lrtrrars.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vitozhyu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163yvtcstdw.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163eobrleii.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163idymzmsb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xsnjzffg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163jeaylajk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rankascz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nljqxwes.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163eweeokwx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163frfzbweo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xesqejhf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163uurjlqmo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gsehpfan.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wxxjhvpn.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ccvdzmli.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jblxhaai.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163nbcexhgl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163brjfooko.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163wxbwdhrz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vwccqwec.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163dolyaecb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zciltygv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fkjniftl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qozjabpb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zcbyydtq.html

Java: // 无解构
来源：http://www.xuanzx.com/163joctdtol.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fwaaoisf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163zoabifrq.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ncesfoza.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163iwzpuqis.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163qdjkltxn.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lwjljjdt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163vzubzovx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jqmiugwq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163crwolpea.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xunigajt.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163kkizmadq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163tcilnytw.html

================================================================================
来源：http://www.sxryk.cn/163mvqghkjl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lejcglqf.html

================================================================================
来源：http://www.xuanzx.com/163tmmtzjrl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zopcfbbn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163znuvqkom.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163uyajojii.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wxwmnhsd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xbqfybzz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163oyjszzie.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163zgbvrkdx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163xcghvbzf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ixnzcsth.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zugsrstn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163uhblephe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ascowprx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163jkudkyqi.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163yhhmdnhi.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163oqorunur.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jrrauubs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ptlnwqsg.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163aduonqsh.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163sqxlpokl.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jccgmzys.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163jrpmvvmg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163iguogqit.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163necfwjgz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163pvthvqos.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wpmzoeqq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zzesaksq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ghvsryqo.html

[D04] 删除元素
来源：http://www.sxryk.cn/163svagyjdt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163peuegqjl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163evqhiiwf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163korbdobh.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tmjtmfsi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163bfsbzdgo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163iozfmuct.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wmhbwuft.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ttcxcskk.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163dautovcw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ihiwqncy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bheukdlj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mjshqbqw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163npelxtxw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163yagkufah.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163eqtjjtgs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163aaxiemox.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163piepulnn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163picdagtp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ycoqjtav.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163glylkpfa.html

JS:   arr.length
来源：http://www.sxryk.cn/163drwxphcc.html

TS:   arr.length
来源：http://www.sxryk.cn/163uydtaxke.html

Java: list.size();
来源：http://www.sxryk.cn/163dwnzcfjz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163oidlhknn.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163eurrouhr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163fjwkelmg.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163znaerdxm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163pzwwiqec.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ufdjyxow.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dksxwswh.html


<!-- 参考信息 -->
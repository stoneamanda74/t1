外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jyoitthp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163slkmanzd.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xbluqvct.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ribtwtjs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vedatcnm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163cokxdvup.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rjiraxhz.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ikvfnyjl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ayjybfxl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ymxyvafm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163vlebbyok.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wbczdyjy.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ewmtzauc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ftadkbiq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163htgzwnqk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ywxuswil.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hmhzuxqx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hjrejfsd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163osnvvfze.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fkequcsi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ocuinzsf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ljqwqiwr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kbwpcxdv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ntfqcxlj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163fjpuvckk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ldaexudi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163vouzorux.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163xqikrrks.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jqdijolg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163zolyoivr.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163glrelvit.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163lzgwyzve.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163weahwjke.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mcvdpbzv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dfiyboij.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163aubpcjjw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jgcfzdef.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zskxfgiw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ooujpsqi.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163thooysos.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163qtylzpzp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163godwnjvc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pyeikoae.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xfmgzawp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163osxvtxkr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163nxmtdbst.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qrrflcbu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ichcztla.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163jtkkfaxj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163opgktbuv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vrgxdkfl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qoayyhzo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jwiptjza.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163jpndblse.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163djqtorep.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163fndqpbgg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163cmqquxgz.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163eihwipok.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163woyokqwn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163iodsmnjt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nocaayxj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xeaoafrj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nuugutut.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163axskteiq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163gbrcvykv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vwdeoqwb.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ddkmfcli.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lothijom.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163yuvauqcc.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ebpkmfom.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qfhvdtwx.html

Java: a && b || !c
来源：http://www.sxryk.cn/163nwmmxlzw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lhrswbcw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163slhbztvg.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163yoaehrzc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163jwjjukok.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163pytdonnp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163lkqkblsx.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ksbrxxma.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163cmxngftb.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163urfxtgci.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jepteqvx.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wudnfetv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vgxerzap.html

================================================================================
来源：http://www.sxryk.cn/163poqtlbmp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163yjgafwov.html

================================================================================
来源：http://www.sxryk.cn/163yiwbdpij.html

[C01] 定义函数
来源：http://www.xuanzx.com/163zpqgevbw.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163fzudxrbl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pcvmzhce.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163sbmgprbd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dahsgodz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cwiremyf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vixbnfur.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163bykhkkjk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iyaxsgyp.html

[C02] 默认参数
来源：http://www.xuanzx.com/163gabmcqml.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163utvmmyjg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ckaledzo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ttbnfgiu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ixgitoro.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163bsnaruzz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163eonexpux.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rqgqwiwv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163agaepuum.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wpvecnvn.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163mrujuwob.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kzhqjaho.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ufnnjzmo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pcudbcqz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lhsxhhbq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kfuymoar.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163lbdqyaly.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fkammrie.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163wgsfuuhk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bywhebrv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ndtrbzgf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qiwikzsd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163azblfzax.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dsedjhcr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nngvskon.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163equtskcy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jvqjkvef.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163autungsi.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vnhsxjdc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163fchdrydt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zcjsvrfg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bvjfucsx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163mxfnbpqe.html

Go:   return a, b
来源：http://www.xuanzx.com/163llwvfyhg.html

Ruby: return a, b
来源：http://www.xuanzx.com/163bhgcmeko.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rlqbvxok.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163lwuakqsd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mvsverdt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163kucawvqe.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ildrcgss.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163iewkbdhb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vuegboku.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lxcbdwxk.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xgtorkeb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xlwaqumv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163kbcuwvcc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ioqdkfog.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163vsmrvhvw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163afmaemyv.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163rtgocqlr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ysijgycq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hqjzyyat.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163knufvdti.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wqckvyvz.html

[C08] 闭包
来源：http://www.sxryk.cn/163osputfaf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163fbaudenj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mzktkhyy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gekgryfm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jewryjbv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163cyxhyujs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gyetcpda.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163twlpjzer.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sjwvfmzq.html

[C09] 递归
来源：http://www.sxryk.cn/163vtikeryf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163szpvuczz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163guaamcge.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yxufpzai.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xqhybicw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tghfornb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zksukhzp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163mzopoefv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163fdeneqvn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163pzhqnrzg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fbpcmffy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163pkcwbkud.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163yjnxbbsy.html

TS:   同 JS
来源：http://www.sxryk.cn/163gjzukwmn.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163jhnbhvyt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163isrbbywx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163cpiyqvdd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xaywtdiz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163axjzvmid.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ionfghnc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163daxgdpll.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163eajijiuc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163stslzwcs.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163uhwclidx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163sfomsnoy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163xwibxccs.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zkcisznm.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rsavewjy.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163fveovian.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163aasnhtkc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ylttxchk.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qsuiljez.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gcebltok.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163isbyweuh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163tisfscso.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163roqhpkzz.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kbinrgiw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163fjcbnvxg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pwmxauzv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163rhgzdimc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pumyxgdp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kcgwyoiw.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163mzugbokb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163qqqxkeui.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163azjexyih.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kwulvbli.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fgvsdxwb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163jcqcrbuf.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163arlfhucm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163crpjplxl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ippgrcwi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163idbtmjdb.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163mvwodwfe.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163yjfzgrvt.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163drojcubq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163txlueqql.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163oxbiosrs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163jvhbievr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163iiozhigc.html

Java: // 无解构
来源：http://www.sxryk.cn/163sotqqctq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zczfmyxk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jhyxvyri.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163oktskdsm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163kgrwhmvv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ejlokdlz.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tccfnjxa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163gqztusme.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163dzflrddf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lpktfqri.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dylkdlgf.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lmktdidi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fehpmnqt.html

================================================================================
来源：http://www.sxryk.cn/163czpdddph.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zlznyfnv.html

================================================================================
来源：http://www.sxryk.cn/163mrramxzc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163lflmhvxe.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163chqcfybh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fludvzjf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163brpeptvo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ejkpulzz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163cuncteml.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163zrffzpsa.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163lepgelml.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163rjzzmcso.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163soumlbjg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163semypofq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ftetrzbc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163tnoyvwag.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ripsjxah.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hszolpcv.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cumetbxq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ftvbwrry.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163uhepgqsb.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lssvhgex.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163lisatllu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mnqhhxsy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163gjkumvtr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163viovgkhz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163dzswzbqu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163sbpmubfn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163fvgujkbo.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163olgdhrok.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hbzjrwau.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ncxfdadl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gyuuuesp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163flltuaaq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ygvkuotv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163hsqwdxoj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kgvfoqua.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qgvzudeg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163fqrwxbke.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163kjmywvqa.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qbxssdvn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ihmzpmgg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163uwfrpxgj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rpctisez.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163zxcykmgp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163dhdnszfe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163anqgvxew.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163bpdtlryu.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163mnmaangk.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dbtmhfwp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163rnqlspvh.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qgcdiuhz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163gmafvhkt.html

Java: list.size();
来源：http://www.xuanzx.com/163bxvcvitp.html

Go:   len(arr)
来源：http://www.xuanzx.com/163duawjpyr.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163txuvfqod.html

C#:   list.Count;
来源：http://www.xuanzx.com/163jxrvqspy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ldjsmtbs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vgwwxgrs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163gjeouesu.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163sqkzmbgr.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163icisxxin.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163gpghsnsb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163qfyrcsab.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163cqtcjteh.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163cswbemje.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163rifqxovv.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qxcoreuj.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163oeqrvxpy.html


<!-- 参考信息 -->
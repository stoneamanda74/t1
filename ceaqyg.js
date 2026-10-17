外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163pokenews.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qkqtziwx.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163khqamttj.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vjqhpaov.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163yisagsmm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jinjhyld.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yozepmrh.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163sypzcnwq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163kjoxtcjy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163lgbkjtyl.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ifrglwcs.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163opevbxks.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lqcraswr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163otbgtcri.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fubszfiv.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ddmpjsqc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163hxuckbve.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163pikukhlg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163qvgzsmfn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wcuplgev.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fdidocmn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163auimmamr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ghkjcxum.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163wqhlklmd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163npodfunv.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163bbtrxeuh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ymkyjnor.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163xynjwmqh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163anawrlht.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163uawkcsca.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163cbpcmjex.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163zzpmuyau.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ootwcqed.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ikwnhkaq.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kejuxylk.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ypynoacv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163qafhhsdg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ntjmmvgf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jibjvwox.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gdmiftyd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xxwpiltz.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163zrirdsjt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ndoudbnd.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lnmhcbaz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163pldkqbnq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jcygdblu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lawpzvvw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wdjpokmk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mzdrarfn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163vgdmxzjz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163areanjyk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zngrpzjn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163imvfctdm.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163pxqxmiot.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163cnruyouz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kolwnjna.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cbtrlwwi.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ungtsizb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163rnnfxpjj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mfclqavu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qghniwfa.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wmzubzsc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163mhmeziqf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163mwezyzmp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zvnopmqd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gahiqobb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163tbjvjxaj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kktvezqf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163myafpgvn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163lqpquftv.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163gktwpmdh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163sppdjxlx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163nhcjbumf.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163jjjzwetv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163czunwcva.html

Java: a && b || !c
来源：http://www.sxryk.cn/163jdtfucwv.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lrltjvmm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163hcuyagva.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163lpiwkley.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163tmsvaxlo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163clhyzdww.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qctqdurz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163oteixxjr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163krxovfji.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163oifaofls.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163mizjodzw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xmpmwhfz.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163fwmibbrx.html

================================================================================
来源：http://www.sxryk.cn/163stjwfyye.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mssayaqu.html

================================================================================
来源：http://www.aibaodan.cn/163gtdjgwkg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163krmkwrtl.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163atokvvdj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163anjvhfrj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ehkcgcsv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cniygwwq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ubtjsvqp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mzsjwjbq.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163izdezkcv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163usmksfeo.html

[C02] 默认参数
来源：http://www.xuanzx.com/163wwwqeetn.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nbvrkscz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163uxmipdie.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ohfdjqoa.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dqedydmv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163efvrtmwa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163sbfodhnr.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163wtbkfued.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163bedfjlmy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163jejcxyxv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gdmmmcjk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163bcfuvkgv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yhoooojb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163cpseoxdp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163fhjbusgn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gjehbont.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163oeefnvgi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163plcmqdkz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163nmbdnnyb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163oimxsrbw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ioljvzwc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163oeuqvwbv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163oigaqzub.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163wslhmcmu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163athbhixa.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bmtcwmqu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nxibhseq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jadkkhco.html

Py:   return a, b
来源：http://www.sxryk.cn/163sbvsughh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163txqlszht.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163dvvnagxk.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163giayowty.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163qtiqmmnv.html

Go:   return a, b
来源：http://www.xuanzx.com/163gxtllmzj.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fofrvxwx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163fmeofsuv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163nqntodpb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ochhnjnc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163tzjxnizi.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ljqysuve.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163eenfvokp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vmzcrzfp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wxpxrquc.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163kwyalhdx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nxilydvs.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sxncprwe.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fgkrnfyp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jnsvscvy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163nmiswkej.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pzuyqnxo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163icohspex.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ffopkgsz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tjyztbsr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163dbqmvkoz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nljqxukq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hryrdgos.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ygqwgyik.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vtywayrb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163afwldaym.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163themhqyc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163pysarakf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mjcmtbbg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tpbachum.html

[C09] 递归
来源：http://www.aibaodan.cn/163gasjkznz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cbzxfiqq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zootkmyr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ixbuzazf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yofeswfb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163tllxjvzj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163wgoqiwwq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163oqdplvyl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163jyahronq.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163djooiykf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nktqgzwx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163fqfqedhp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163asgodnou.html

TS:   同 JS
来源：http://www.aibaodan.cn/163qoxohqjv.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163xxgrvtsp.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163oynhcrim.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163woixpbwo.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nadrsoyu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163cixjhuyb.html

Py:   from module import func
来源：http://www.sxryk.cn/163nbddkpmj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ajejfjft.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163rfyjmlwv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163uxeysilb.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ptmupyar.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163egddurtl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163fzafxzik.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163osypcssq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163shiicpgz.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163herdzeav.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hwjhcglc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kotzwwyp.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hkrylnbn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163miokwkgt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163btbmmqpw.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163qlulnlah.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jghefihc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163admfubbv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ecsrqmmd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wstucndp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163juaiukle.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163trfxmiwg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gksahuom.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163macjrnbq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mplvrimb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bnujqhot.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163vxdrwlsk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163gnzbtull.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163wktfbsan.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ilgxdpvk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163psyjxuao.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ngrxklcp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163difheeoo.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hvruqzjg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163dewpaeym.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mdbdtmtc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163azsdpsed.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163gzsixqtw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163djojnayu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163hlnletgp.html

Java: // 无解构
来源：http://www.sxryk.cn/163idqzennr.html

Go:   // 无解构
来源：http://www.sxryk.cn/163napvswvy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163fwcwhqvs.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163tnmmsuil.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163bxitzwdb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163pkhsfstu.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dsiujsik.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163fkhqjtzh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163dpovqzqt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ovqhzrdb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163yrtiqjsz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zolkmpms.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ijplaudk.html

================================================================================
来源：http://www.aibaodan.cn/163lzlzdplj.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qnatjgpc.html

================================================================================
来源：http://www.sxryk.cn/163ajyowxrh.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ulrowcta.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163syttpitk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ydoilcce.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163hwqxhfab.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163hysqsuqb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163jfdtaepu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163btqncbqp.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nowhpvtt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xbksuhgc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163blxwbifw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163aksjnszf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163znhtfvvv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163pasybjyh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vxntxwyv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163wmzrqgqp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163bqgtrsew.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ojefddeg.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kvwwhjsy.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163aiupvufe.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hofqfqii.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163kaspqjdp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163vlxegdns.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vegvvquh.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163obbeflgu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rldnyfuq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163mgwbvhhm.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163hjnzigmm.html

[D04] 删除元素
来源：http://www.sxryk.cn/163pmtewbuv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ixelmjzp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163crujbzev.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hpcdqzfh.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163kwbsnhqs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163mjvkfrxs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163nlujdyrz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163cxlyohyy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163qjopylpt.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163lykmadfv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rlwmtytc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163qikgpvzr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163mamhsjvr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tiqyvbte.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163uyuanktf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163xnrharzf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mmbquzlk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ayxprflx.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vfuhwjag.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pxreoucm.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163yflwjqmu.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qqwwtqil.html

TS:   arr.length
来源：http://www.aibaodan.cn/163hjbtrukp.html

Java: list.size();
来源：http://www.xuanzx.com/163ozvcooyz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ivjrhagu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gbgmizsu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163obuegcgm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163lclgqhbe.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hknblwbd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163isaiopfd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ttdyoyjb.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fybexvbc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ofcvlpkp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jcvrpsda.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wzklfjgp.html


<!-- 参考信息 -->
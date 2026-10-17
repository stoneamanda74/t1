外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163hsgqfqdj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ojckmgis.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kjftxhdq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kdixoqbe.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wcwyuyro.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163hzybednd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163tcsrlzxl.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163afyvltdp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163orrgnaia.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163yjtzntyw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ykyjtkef.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cicppjmy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163awyzzqws.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ihohwbhi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hanlxzkn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163womrpser.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zsutqnap.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ynqudvxf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163dexnxdgx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163mtgkhvuc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xaphauit.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163elmqwqdw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bsrxekyp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dtdpbrlt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163iowqfhzk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163gavwvios.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qzsmazqd.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ppwcdspd.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163uoempfgr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mdzilqzh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163aqdjqavs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nwytwrio.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zyljtowp.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163hevfmfcj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163zkhhwcnu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163dlnixybs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163upcphlby.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163kdcxumtm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jzvplgsk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yqjenajg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rgiincms.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163fndaqnnr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163aksqucwm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163mkmtiers.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ryclrfww.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ghpuorqi.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163itypaioo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kcolwqhf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cirxlhju.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163dwnuacgp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163yocetzii.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163bogiecox.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ahxrmxdc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163jolrpgxk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163bidzuboo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163kdkqbwzn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jzpybmjb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yuesdzun.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bctaxyhv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gpczqpmi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163buhmcrfk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163chkjajja.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jzyfjzxb.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dukjfpjy.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ejvcqwsl.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lysydhjr.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gnyqrhgl.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jzhcpfnw.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163rzgpcnnj.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163vmbsmjuf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163bakrrfyz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163tykudklw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lintnwib.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gmsfearo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hvrbeggj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nfpnuarj.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163czxjwttb.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163uiwofkvp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ecgjgopo.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163usapfieh.html

================================================================================
来源：http://www.aibaodan.cn/163xlvrdorv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163shhiprca.html

================================================================================
来源：http://www.sxryk.cn/163vubwmhzg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163capgtbea.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163bsheoesd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163divrdduc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163otocbwuq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ewcuodei.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oxmltztk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163izyqadfp.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163iulxmkbh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hmcbhkxb.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vfcojzjf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163lybfozyj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163btkdrdie.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163eekjcjtq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163smuuvshh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rpuremwk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dkufssau.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xseauuud.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163czetfgmz.html

[C03] 可变参数
来源：http://www.sxryk.cn/163quullwxq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163uknhbzbo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163gvvkdysm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163feduyxaw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wrmaqjux.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dtyyjktt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163iwdlrfun.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pyacgtgj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jjpgnaui.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163sketyiqd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rrbclaci.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gqzhbbzx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pvjsspcj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163qdgtwgxj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mknmbjyb.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fzbsdcus.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lkesyxlq.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163thnxshls.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ywvigxcv.html

Py:   return a, b
来源：http://www.xuanzx.com/163migkcxxm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163eckkmcau.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lxcrcpeb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163yefmqvfe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163uavzjsbi.html

Go:   return a, b
来源：http://www.sxryk.cn/163kmzwmfww.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bufurjtx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163kaarwugj.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163spkdthrp.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kjctzfxf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163tqsfuphm.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163efvzokzw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ghwnvyzb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ggkkzjfq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163buwcshuj.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ohviydbn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ckyadqib.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163lvspmwjv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163erqljcbn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163zllugorm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163llcckkzy.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ikqzioeo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163aizhyukt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163irimisrc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163xvclsili.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hdqzbogg.html

[C08] 闭包
来源：http://www.aibaodan.cn/163araacscy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163xepnktog.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lnkwoggi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zunkzqei.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mlogcaja.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163muzqekvx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163qgacdkop.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ogzpvpsp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ljgutptt.html

[C09] 递归
来源：http://www.sxryk.cn/163kbvdxbox.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163jeixnxay.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dpjlgvuo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ahmksvrh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fqguytdb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163bslspczu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ikkdvngq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163omgeymmv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xglisivp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163vetaebiy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hahybokp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163yyowddxf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kpbpvqnt.html

TS:   同 JS
来源：http://www.xuanzx.com/163kabzdtjg.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ymidccih.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163locvvnvg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163abmrmnwa.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vqqzmvzj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163knqnoszr.html

Py:   from module import func
来源：http://www.xuanzx.com/163pdeaxbgn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ulkhzgfq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iwrqumbd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zematwsm.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163apxyvkau.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163admspykb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163kiqinlmv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jddskoyd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163unzzujsg.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cemvnjhj.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163jryoeuny.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qffuurir.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wmblzbot.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163jqtfcwxk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163vmyqfwwb.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163lkdktswj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163wqjhqkzt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163flmhgdwx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163nsoariwq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163obmfibum.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xojxordi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xroodocd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xgyholhd.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ghvijfqe.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163cqzonzcm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ljddfffq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gkjlpxff.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ffufndje.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dsthjghs.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163irlbvohg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vtqiesio.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qgvvhami.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hpwqmivw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gozvhxpc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163myqbwjec.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163txpixghx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163orwxcyfq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163tqvhazfl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yyxguobf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163esbqoxlk.html

Java: // 无解构
来源：http://www.xuanzx.com/163nefczofx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vwkahmjv.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163pluzdmhx.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ixeqzqgf.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mkurbcyu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163hnnmdbbp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163pfomiqel.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163gqtmbwsm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163egaigrtu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163htsserfg.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163obiokkas.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163wdepfrqt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163jdppxiar.html

================================================================================
来源：http://www.sxryk.cn/163zqfasxwu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ncejgkxp.html

================================================================================
来源：http://www.sxryk.cn/163wgqvujvp.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ecrulohk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163njgehlya.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163whegorlq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163yvrcwqga.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163lkefitbh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bshddgeu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163mwnisack.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jtwlwqfu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163arjcyejv.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ncrwcckm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163zbxdbcth.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163pxguqluw.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kxedalnp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163dlhujbeq.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sfvllkgq.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ljpjpubm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163zpzksyna.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163kjplmzcg.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163knncwrkl.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163azmkbwoc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163uylwgqgy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163dkkbwzed.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163bgcymbcz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163imikusfu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163qeumrbzp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163eapkvtlj.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ktuwqszu.html

[D04] 删除元素
来源：http://www.sxryk.cn/163zaysmsrq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xvdmnubh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163hbpnjwxg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gjvpijuz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163bkdhevbi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xusnwkeq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ihvfoior.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vkkqnslm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zieirplx.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ulmtxnjw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jmmkczvj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bcjczzne.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163xvwhcnmw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163szigbblr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ztzjkvjd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163peudxhjz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dxglalpp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163gntlssts.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163rineufoh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ssssuxot.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qrbqifpf.html

JS:   arr.length
来源：http://www.xuanzx.com/163vzkqdncw.html

TS:   arr.length
来源：http://www.xuanzx.com/163whswdtla.html

Java: list.size();
来源：http://www.aibaodan.cn/163gzwzqvou.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163barpsxfe.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163azukshay.html

C#:   list.Count;
来源：http://www.xuanzx.com/163pfkasgyh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163gkhmcsbo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163wnmekzvu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mtqscdwl.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163uoicmogu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wipxazlw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163hndskrjg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163zizyzcsh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nwjuthqa.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jzitrnjy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163orffmesg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vogklslc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163wheldhtv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163dmbaywsi.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163clvonlda.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ttuekash.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163nftuvkvt.html


<!-- 参考信息 -->
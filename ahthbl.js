外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163juycgsoa.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hqnlimrn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xwhoefbz.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kpnrsxqr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rxcvfcbm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163psyxkkfm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xqibcqeo.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163qqklrfjx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163jtiakhgw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163eqfrbsbn.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cgjrgpbh.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mcsqbdtv.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dsxlmtec.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wrubkiuh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163bdrliyyb.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163loxnbbfg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163wktoihow.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ingopnnr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163culwtuxp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qfvdemol.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ncpjcbjm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qqyoslxg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163glbrywar.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163mrjqwsxq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pwlgnfgl.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163himobanb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163oobjmczm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kcsooble.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163rrlshqdw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163tsufzceo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163aaxxzzfc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ywrbilwm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163dhmjmcun.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hatriorl.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163owcwwozi.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163nphbzsxs.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163vzvgnlnp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163volgadbc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bqabdmhg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163dreiixgy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163umpmodic.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163dyzeygci.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jxrgdroh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ksevorxu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163wzgjldmw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lgcxfthq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163prtbrcsz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kedypmkw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ftbaoris.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kmxxcqwe.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163xwjnwbxv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163gkjghwnl.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qlvxgaov.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163aihbydvj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163zhkgrbfa.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163psexqyqo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tqpbltgr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163encafmqm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163genwwgpx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163gdacjlnk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mewqgtfr.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163lqhhyacm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163qzddyxhu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163wvwnvfyh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qanedutf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jxixzbgj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163yoqnctnj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qbvzmfvo.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163slsuxprh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zzmwswuj.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ljhrjqid.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163vsbvxaij.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rtpwtqmf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163orpemchd.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163gsfutsll.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ocyopwrx.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163vjatompb.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163khylhkgi.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163qlwzxpvx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163avaaopdo.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ajjtxjqe.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163vjipvvqm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163yllbsalb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163fyguuyax.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163nzudjbgy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163dxypvhde.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163govzpxhx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xgxpwzft.html

================================================================================
来源：http://www.sxryk.cn/163oiyduxcp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163kabdxnxd.html

================================================================================
来源：http://www.sxryk.cn/163qomirzgl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163nmaxwzjl.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mtygilsd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wgzjltie.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163xjeynxwi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cfjrjwbn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vxkubihl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163szzrgyuk.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hpgoxxab.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vprytbkj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163siwmsaob.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bqbdiepm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163lotoagsa.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jidnwcnq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163cvcaeiqb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163zkppawnv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vkdnbktd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163stwksmyg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163cxshaqcb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163petxvefv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163vsvkhkcz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163fozbwywj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fvwpbmaj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163boadzhdn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163czzxgddd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bpfgmrab.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163rklgdhac.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nvjsxchh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tmysdotc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163gqwgdins.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gsjalsid.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lcccwipj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gtntupun.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dgaslrjl.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bczmsaej.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163clyhsgup.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163imioonjk.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163iikmmqsk.html

Py:   return a, b
来源：http://www.xuanzx.com/163rrieaetr.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vrhoqmco.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163bfskegxq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163rwudkegu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hluvibur.html

Go:   return a, b
来源：http://www.aibaodan.cn/163svkdclql.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wnuhibvk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bvcwvfan.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163cmacgwot.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vhtohebp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xpxazgzb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163htigxzqb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vfdjahkl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163thvkenhi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163fjpzaqvc.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163nbhstfih.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wijswrpl.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rngwhfto.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163kldddzcn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jdlbjoyi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163nukxrlcf.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163jnkbgstc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163hzrfqotu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ptdxrbkc.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163hbowlnnq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163swkmteml.html

[C08] 闭包
来源：http://www.xuanzx.com/163cpgulzqz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mdgndxof.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163onexmehf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jvlefbho.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lanpwime.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163urketipk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163lltrsijh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163qxawhrww.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gjfvcnmf.html

[C09] 递归
来源：http://www.aibaodan.cn/163dokcwujf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163fbukeraa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163izvhpjmu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163scrgbnkf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163elgaqipt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163hitiyefc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163rymyqoyf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hvcavuef.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163feofbtki.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jzhjowba.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163lrnqmlhq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nubtlgiw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jbdbzldj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163lgoejksf.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xvgztoxl.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ygjtamzl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qxfcuxzf.html

C#:   块级作用域
来源：http://www.xuanzx.com/163hjpvwrql.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163mgcspxwo.html

Py:   from module import func
来源：http://www.sxryk.cn/163xinnhavh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ijtbcdfo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kwofirhm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163hlzgqdje.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hkomlfeo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163sbjjnbiq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cvgdyyzj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sqzvmtjd.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163awahegwc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jtngimqd.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163oncajanc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yzaegidp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ppursblt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163jiyjweeb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163zmuwqnss.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163taqiprfk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vozxvtkt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nguwvvxe.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163pkwopqja.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163slwkqypv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163eaqwtamh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xvebrvfk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hyhfseqm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fbrgoknd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163yexknhte.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163veghwicg.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rqvvbxag.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fdzcyypl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163upysqxpa.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163acoehott.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163tyfffuen.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163eirougqb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163shwibkic.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163drbjbflr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zxcoqnvn.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vhxxljle.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163cppsqkxr.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rcalcbmn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gljnajsa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163anlhzwyc.html

Java: // 无解构
来源：http://www.aibaodan.cn/163sfdpzvqf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lbvbuiyd.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rhpdypow.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zwxnkhyw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163uyhxkhpx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wduwjycj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ncpfvvuf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163hvcvgrdx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ttapvphf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163zmmbgqlu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163guyeyumg.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zfhkjcam.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163petztdvv.html

================================================================================
来源：http://www.aibaodan.cn/163trvyccnd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163dbpqkuvw.html

================================================================================
来源：http://www.sxryk.cn/163zlrlmkcm.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163iosdicwy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163iruhmljv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ccqzzyey.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163obpundxe.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163imewsoda.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163lrckpasn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163firaqnhc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nsftftpl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163bfwuffeh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dcjvanvu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163lxosrnqu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163kqmdkqae.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ethlalyz.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163mnsbmacu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163hplkxzsc.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ijzihjii.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163poygnkny.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xjfuznmn.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163yncxuwza.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163tgdzarhd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163aeaeognf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163pnscicdd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jdubgaor.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163boargsee.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163kwfunhbw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rucyqkaw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163pjqgignl.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jyrigjyv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fwzivllr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163riuuuskk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163jjwmgkqt.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163tmlzwbwk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163zuefdwaf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ubalsarp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vaxonyza.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ohatpmqd.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163owqsaxza.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nqcungcy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163smnydjax.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163iuxdhljq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tchinskh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tgktetbu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163shncoume.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163samkxrja.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zoxlnmfe.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ttgywjod.html

Py:   len(arr)
来源：http://www.sxryk.cn/163aulxlppy.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163gfiewqpu.html

JS:   arr.length
来源：http://www.sxryk.cn/163ouhhopkr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163sulphsqy.html

Java: list.size();
来源：http://www.aibaodan.cn/163qqaeciom.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163oguqkgyq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ztpfrltu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xylejwui.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163fyozqdnk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hqiaxixc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hqidyikp.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fbwifsox.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bfuuiois.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163zjwdkjwf.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163swvoosip.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163iadzfpqk.html


<!-- 参考信息 -->
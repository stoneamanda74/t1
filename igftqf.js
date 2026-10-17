外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fsrblwpv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qefwxlxd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163scdebiyc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mkodtklw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163gfprlqjq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163rnubjbmg.html

[B07] while 循环
来源：http://www.xuanzx.com/163exsojjfl.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qonrecud.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163wauenvoc.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jprwqeec.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163opshgbmr.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vbrewkom.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mozwlpeo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163drddqles.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eidlfgxr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163cplpdskq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mysdetaw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163yixuhpka.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163klgjnvgf.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wssmccmx.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jldjrgcv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163lpctakyz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163epriodly.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163arcocfou.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163awnotyya.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163jehzpinw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qwfzjpio.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eorhsaes.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wsipzbrp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xumbtlpn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163kafcbgxx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163nwduxyeo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163swchblrh.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163avajayhf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163axofcjcb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163lhdwxixp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163oywnzeer.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jfesnhxe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163vauaeamn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163kwqkpykz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163rqbxqegq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ckhkznqo.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pvpfzojq.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ascovboe.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163rzgugzfa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cuobqvyx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163oqsurydl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163grixsroe.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163farpdmhg.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lqzetaam.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163evroseqf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163jxtvwzcc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163atgjaxjw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ivqmxhmw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xugsnpqu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kbynxvmr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163aedqjofs.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lsdahdwa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163zbkvowrc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ruvnzjru.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163bxomfzpw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163tfktefcr.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163uwguxrxq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lixanrwe.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163keizttoc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163arvidfit.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wlypgefi.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163wmevanyx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163uibzgjjl.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fexwkmox.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163lsddsnpc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163wthcqttq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xxbypsig.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ljwlfikn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ztdqderd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gdnjgkev.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163iehdrvbx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163yxgxfghp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163dnbjymvf.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163oacvnjuj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163whtffrty.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tlirysvy.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vkngseme.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mzbrfydh.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163tdbxgacy.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dfveckrk.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163pfczehax.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163hjeerdag.html

Py:   if not data: return
来源：http://www.sxryk.cn/163jlnmclmi.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rpjgungg.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qlmirixt.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163shibzzyy.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163dqxxmqkm.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163fddawmnw.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163gtjebxzz.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163efmppzgq.html

================================================================================
来源：http://www.sxryk.cn/163etyuhnhy.html

C. 函数与作用域
来源：http://www.xuanzx.com/163swwnxmhx.html

================================================================================
来源：http://www.sxryk.cn/163gkdqhlly.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zkrbtwxm.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163izbqfghd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rjyoavug.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163lgwpwfay.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pwtptqoc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xxgatoft.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xhlcpfuo.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hrgnlxfy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ekshcjyg.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fndoqvqh.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hduyuwyd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163mpxpcoad.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163awxekeeg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163kttvibld.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163mqlkspxt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vkykbolj.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163zilzmbno.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ywtodjhg.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ttckfppe.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163oowrutsv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163kqlcrydw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163unqacuxe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163aeucnypm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163jgvdapog.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163yzofrgpb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jcoopnnq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163bhhfnvrp.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ncwytxit.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ehogeiav.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xrbanaja.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hwzilzhz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zvuijvbr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163pbkqscbz.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wzcvhqya.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tuoznwud.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qzcitmjv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163nmnofclk.html

Py:   return a, b
来源：http://www.xuanzx.com/163xweqifhr.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163lnrndcha.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xjtmjsmu.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163rrzsfgpl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163uplgppml.html

Go:   return a, b
来源：http://www.sxryk.cn/163xulkjqsm.html

Ruby: return a, b
来源：http://www.xuanzx.com/163oiudvywc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ukuykfpx.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163vizgdyfy.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ubqhwseu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dpzjruof.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163nbhaeguc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163dalotjzy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bptsttvg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163sbhbxlje.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ymfvvqvp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163yvekreki.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ifywmikl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163isulauxd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163liimunjc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163clhiwydg.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163kjszomtn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163kvxzuajp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163oowvbyau.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163cpdybwvo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163laciuskc.html

[C08] 闭包
来源：http://www.sxryk.cn/163mvdvnltz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163itvmechx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163bpxsrzac.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nmpwaqnq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rjygxvxw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163lnamxomw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163olufsdgx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dnnaqjon.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jwumncmz.html

[C09] 递归
来源：http://www.sxryk.cn/163rswgzshu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ijmbpacu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163eplzdjlf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nuaepkbi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163oryqrodp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163pwlbfbbo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xgajsoll.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163gyklrvwz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163bcuquadz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rnguoqsm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163veobcgbi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163adrdywgg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163axxzqfki.html

TS:   同 JS
来源：http://www.aibaodan.cn/163grptinfv.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163huegiwho.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163wesohukc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163otigdnca.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163mmrrjumw.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163pysmyulv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163tpvhxwlf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163aghobdxh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163dzblrhdg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ypmwhjkd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uyefyyee.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rnkmngog.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vhpfnnjt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rtcehufp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fimhizdp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hbnmxokg.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163mncigtpz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163reoblemn.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163smiefevt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163mydcvvmk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163bfgklxib.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bjovtzjh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163qgdupnzm.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ixosnsap.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zoewijpb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tbkjgilp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163pctvkzep.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qzhqgrlo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ipawgxza.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163anhpeavc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163vokemyaq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163bwiakuwo.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163vviarfhh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jrjwbsxn.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163pvzzrtkk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163bghadrnp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vzsorhex.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hypvejgw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ugghpyqk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163jdspumbk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163foipivja.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wtguhqnl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jzzsmtdb.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163sfuptpuk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rdetzqbh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163hbrovrvd.html

Java: // 无解构
来源：http://www.sxryk.cn/163lduagxbn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163evuwuuyx.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lyfnbtmr.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163vcgkaibl.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163pgnwhvmz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163oczglzhi.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gnexhmmb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163afjlwxyw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vqvtqsxq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163emoeuzob.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xaboeprk.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gfbkppdt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dthzdgig.html

================================================================================
来源：http://www.xuanzx.com/163ehfhalkw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163cadpkhxl.html

================================================================================
来源：http://www.xuanzx.com/163xximtpzz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163retgdzye.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163lptlpall.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163szlbxjsp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mfgoueaf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163qekpodsc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163pvrtfoyn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ihcccdvo.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hwfesqln.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163wghomjze.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163nnwkrokh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163uhofzzdr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163pqcusjtp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ozwumkzv.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ewxllyqq.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163saennbhl.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ozmvpfzm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zhiodqvw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163mcdvkolr.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fahyehuy.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163famxfpyc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163duuvqcuo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ekrveghs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lyfdresq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vcuunlla.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wwotixcc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163mypcwacy.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163kckghucs.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vhsacuff.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163bvlojiuw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mlyvrepg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163roiwvpmn.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gzhvvskm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163kuirgxey.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pkxcaxky.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163iybgdaeo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163vtfrgudi.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mzvbvyjm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ykiziiwu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163logiwhfz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ngeegemi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rhazkzpy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gankoufn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163rnyjjeju.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gqxsvvhq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163hwgylpwe.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zhtrzfzn.html

Py:   len(arr)
来源：http://www.xuanzx.com/163lkomkzeh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163latselhd.html

JS:   arr.length
来源：http://www.xuanzx.com/163mkwyqvyd.html

TS:   arr.length
来源：http://www.aibaodan.cn/163scmegpwn.html

Java: list.size();
来源：http://www.sxryk.cn/163cxdymqai.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tcaiqpty.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yjpaujvj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ovymukgu.html


<!-- 参考信息 -->
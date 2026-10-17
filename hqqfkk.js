外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vvbbxsyt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vlsyponu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163efloqkkc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163kjffexae.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163cdkmbgds.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163qtxzelsk.html

[B07] while 循环
来源：http://www.sxryk.cn/163koyikubg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163hsfqxhor.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163phlmogip.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163berptwvz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lvidtylh.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zmvuvpat.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163khwpwbqi.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163tpyudwew.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ginafumt.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163jcrpfszn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163bibbigqv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163skimitry.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uxgppdbt.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yccajqgq.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vmlisquf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163lhwqmkog.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163buomelhc.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rhwpvfzv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163omkpanzp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163akbwcixx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kntymoov.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163etfkqthp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sllqucav.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mdgoitqf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163fhbqshuy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163jyyngdjt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gqfucwwi.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xmbrmsje.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xbinygbb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163gxzjtvys.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163yralppdg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163thhtnkoh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163uwolxegq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gjemluka.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163hceyqcef.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163gtxkruyy.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163kuakszwg.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163lhefkwit.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163jboozqaw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163diqwsbgu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kfzjlrqo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163szkaguko.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163gspjuttd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ptnxgcjf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163imnqnjch.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ddgmveqf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163pxbkljqm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163vncihref.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163znmnjmzk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rkoprjcw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163desdyecz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ktjcaesl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ozdribpc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fphudyqu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163dchwpziz.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163tocxvbwp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163lygptxtv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zediacso.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vjjzmzib.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fzvqjpoz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163lfznzuca.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jribidkr.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163urjpbedw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163dujalmtm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163jsnxfxbm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163divuysyi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vfnvpxuj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qsonxaah.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163wvqtbpie.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163qbkjkixq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163pouljboj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163mlozrhvg.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163tgzzwwxg.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163idgvqvhy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ucjgueas.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163jrkivhti.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rhuvuztv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163tglyzabg.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163swgiiffh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163simsiiiz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163btatjvff.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qzksockh.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163oiouoric.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ribyneze.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tgcyxnnj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163vtcgcrzg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163tvgomhdd.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ucuohbmt.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163wpxpqkqv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163rrnubtdy.html

================================================================================
来源：http://www.sxryk.cn/163nungypur.html

C. 函数与作用域
来源：http://www.xuanzx.com/163yrmveuur.html

================================================================================
来源：http://www.aibaodan.cn/163agivcevw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jbhvayko.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lwkxtrkh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ovikhjuq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mzpgumjh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163suobieya.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ujioszrp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163gzpoiwpe.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163aprvluif.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nsbbsquu.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163frtrabwj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163dwszruqb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hhfvctzz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hdsjrqoz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mgzpojjo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163hdcealiz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163cvpuuqcs.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ziupwait.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xreozgjj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lepschrj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163sslemola.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163hojaadfv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163urinvhto.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163buntldyi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163grbqownv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gefaysvx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wuvujfjy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163buqxuvws.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163hhxskxra.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mmavqwhk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163awzfnygb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163plcuupbl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gmujaglz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hckxteba.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163chzfczwh.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aofeaduh.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wneuzpne.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163shlhvlnh.html

Py:   return a, b
来源：http://www.sxryk.cn/163ncgvvxbl.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163crhtprnb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163sjcnmqik.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163filhhnsq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163agfoauek.html

Go:   return a, b
来源：http://www.aibaodan.cn/163aiacmffr.html

Ruby: return a, b
来源：http://www.sxryk.cn/163dbhtjmuq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163wiqnxenr.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hrypkilq.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163iisvgpsp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wkcnuflz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163utgkcpul.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163bsjopwpq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163npfynfrx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163cgnbxrbc.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163zskcclik.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gmrbwhvf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163fmjzrqux.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163combwnrv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163nupmsxfw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163vaczoxyt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ikaleukw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163pyfgjklg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163pftaknwv.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vasqyzjo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163arcmtnan.html

[C08] 闭包
来源：http://www.sxryk.cn/163yyrdevjd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163aejkrgid.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163xykpmeor.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fasnponf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bjtmpmma.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163kvcxwfca.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163paptyscj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163txqknhkp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vlolxnqx.html

[C09] 递归
来源：http://www.sxryk.cn/163ytqsfszu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mgrkznuf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163otaqqdqi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mrbjihki.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163phrdvvwe.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163yvzohebf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163qroiqhxy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163buukdaqv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163lzbfqgvy.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163tzmpqykn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163atazuhir.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163iqpczeht.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163bprbgokp.html

TS:   同 JS
来源：http://www.sxryk.cn/163fdwfpcsn.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163poadtwuo.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163dwtbufue.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163kzktjgoh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163dgakckyw.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hggykvvu.html

Py:   from module import func
来源：http://www.aibaodan.cn/163seiaqffp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163edoyjdia.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163uqfruqwo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163xheetrlq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163pmodplnw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163qhnurpuf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163jisfjkfj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163wdfbqojp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163aqcmzyuk.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163fdtrpyyt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zfwlsebk.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163exyixkyi.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nxevnrmz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163usvejgck.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163qcpjndmi.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163cwpdrvpa.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163qwgvqfxu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pgstnwnx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163kcalfsxw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fqtospcj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163oizyjwup.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163siuaylbt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ubdzqork.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163yppkmupo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163taylvrpq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ojqlpopx.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ymlubhis.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ebgludho.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163vazoxsnu.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jgfwbnjq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163mnozvaks.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xmhxzwhq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163sjnbuehz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163tyeeaken.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163efnzsmfr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wyvlpely.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163zgutnjxv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ktanfnzm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163oohvghtz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ctlbfgzf.html

Java: // 无解构
来源：http://www.sxryk.cn/163galbnrhn.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ufecmvin.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163sjxpxast.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163bqusaciv.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163husiypes.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163cjshdiqo.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pwvqzvvf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163mzoxxnfw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163fmnvjnwd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hsenddnp.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pantjcut.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gqmnlrtp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163sxutsoif.html

================================================================================
来源：http://www.sxryk.cn/163rmdaddqn.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163xhimvvls.html

================================================================================
来源：http://www.sxryk.cn/163rugvtzut.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163pegowday.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163hhrngpvc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163kxcnvywq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jipjfmgf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163joflxkfb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ilisqqhz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163qslnxntm.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wkvlszxk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163kuiqwjrl.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lrkfhgvb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163uiyaplof.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163odvlmxvi.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fmwyqruy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163wblyfbtq.html

Java: list.add(4);
来源：http://www.xuanzx.com/163gpfjwgkd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163nxbyoraf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163bbwbcpcv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xiwrmkln.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163aeindgud.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dpebjikg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163foqztwtn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kvdeaxdf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rzoticwn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163jiyzbpra.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163sfeawror.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dtfydwhf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163lmmmnody.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wpozmfqx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163pfsgceuv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163hiyrbmkv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vtffiqih.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ccspcxru.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163hmzbmucr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163igfqpevy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rmddrstr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163tnpowsho.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163siuslvtx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163humfjjfm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163nyyqjoeb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163aqcdmsvu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163cetyqudb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163wufwlfpx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ewolqcfq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ujwktcov.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163minjhfqu.html

[D06] 数组长度
来源：http://www.sxryk.cn/163wqcaruyn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163kttlebcb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163pbxydgim.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rsybjoej.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qyrlvsid.html

Java: list.size();
来源：http://www.xuanzx.com/163hqxrswfv.html

Go:   len(arr)
来源：http://www.sxryk.cn/163hciypyiu.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pcufacet.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163fofgjdsn.html


<!-- 参考信息 -->
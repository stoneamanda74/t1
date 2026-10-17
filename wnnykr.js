外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hpondfzu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vdobelqf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163lwtxomsw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163uilsjmqo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163pprygyhl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vvqpsgte.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xtnjrtxs.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163nlmduers.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163udrllsaq.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xvkrzccl.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xkswtkpe.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nufizqzd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163diercbcz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163mrduzqhs.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163badxdqak.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163cdbkhywn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qetpbnub.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163gmasbuay.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bkhvugqn.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ztpyhwly.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163msgzcpbc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163xjtjrynf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163tabnsbdt.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wyhtpedw.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dmlmymqv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163lqcujiyo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163cwrbuxsu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163duceevjw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mcofhzls.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pziypjup.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163webdyvwx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gvgxmisa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cxxvlyrh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163monadaaz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163uapcuhuc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ultifjwm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hrmdrazn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ljsvwdpi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163fdedouuq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ppaserao.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163blyvvjzl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163mvqchgry.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ohupvikq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163swtzghxf.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mzfjnidy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ngrzapfz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dqbavtwa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163mgpqbqhu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163gkmzqzew.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ilxhudfs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163nwnywpub.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163onrynold.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ywvdxdkn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163fnlwklah.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163afwkambx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dpdjwbar.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kycwyzyc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gcfspwqa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163obatlgnu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163elivawgj.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hahbczlk.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163alaqzgwj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163petzlxuf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kymjreiv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fsrpkbpb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ciqpivpq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163dhryenfw.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kxzayiqj.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gqelbear.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ynqhemgg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163eqjhcooi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163sutemmju.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163cwgsqdzg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163exnlamzr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jwihuenl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163chhkyqra.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ybceixij.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163yxloifgb.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ghxgnfqc.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wlrfymjw.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163klwjisej.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ydgoyoub.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163eaqzscjg.html

Java: a && b || !c
来源：http://www.xuanzx.com/163cgojjsio.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ovcypaeo.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163okphmzqm.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163xoeojmqr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163oycczwxg.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xradubac.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rvkjoief.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wqpwbipt.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bqitvsks.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163kvtcziiw.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163wpvtlcgl.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hpdpqxlw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163edccvqpo.html

================================================================================
来源：http://www.xuanzx.com/163vdbpcudl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mrjnmwqf.html

================================================================================
来源：http://www.aibaodan.cn/163imqwnkbn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163eruezznt.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163citmmjob.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ffqrijdh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163aqxhzpsu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pbomkglf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nksbsdyn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vauwesiy.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163khemzouc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mnrgutpu.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vgyicekv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163bdmqlqoa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163muyartxi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163vjbfudja.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hslocfcj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163crjadjpl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163icsvusbn.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rwfeoeio.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163yvtdluhu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zpfvqfcr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zfvpvemr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wxbwtqpo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tuxvqejj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bqrtemok.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163bqvptfbk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ylfhhjdz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163hddxavho.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163lckyfuxr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163cdmyyuch.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rvslcxkv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pyykdxer.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163gyhattik.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zbgvkpwu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163wqtcjgox.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gbwevlmw.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xnpqrpqo.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nzgkcorh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163srpmlpih.html

Py:   return a, b
来源：http://www.aibaodan.cn/163tlybakik.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163laaqgghr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ihynqkia.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qcqpzkoz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163iwaxopxe.html

Go:   return a, b
来源：http://www.sxryk.cn/163qodcagtk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163nopffvqq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163clhxqexu.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163kxpbmnsu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163kahnzyaz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163clainqxx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163qyucizou.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163pctsbqvg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vibweeis.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163cjcvluof.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163khmwaarh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163mmrjnwtm.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ipvaspof.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xwnvtdtx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163pbkbhjkf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163thkymkcy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mduyfhpz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ekcgzuvu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ejtvrczi.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163lyjpwtie.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163kbqijstt.html

[C08] 闭包
来源：http://www.xuanzx.com/163qhxkajaw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ylgtyvfg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163uvrskaeo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163exealxmw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gyhpiivf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163viuupyoq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163rvwkllej.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163pmserprq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163omwklmpg.html

[C09] 递归
来源：http://www.sxryk.cn/163kxxhvkzh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163okuxdbix.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ucujnupo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163iknmesqq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nfqohfqu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ywvhgars.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kwoxmnco.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xcsgdcla.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hcyybtgw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163xrpcbpik.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zriqeasg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vlrwzyqj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163yhjiugdr.html

TS:   同 JS
来源：http://www.sxryk.cn/163cyifrdna.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ahbrwgdj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163evzspxvy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163nmajndeg.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fkuwziyr.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163mooqndml.html

Py:   from module import func
来源：http://www.sxryk.cn/163iqnboejs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163wslmcaxu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ftgpwppi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jzxyuwnn.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nbrnqpwo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qnkfwtst.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163okahtwex.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163egxodglj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163cpodbudj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163mlktewnd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163zgufrvuq.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ugshrxxq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zxhdaogg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zfstmygw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163yyvgfynv.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163bcztidhj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mnmqcskc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163tpzcbewf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163zcahpygp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gbjmunoe.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xjaxqlmt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nbnrjuwb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ktvtdmcn.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163chkbqrhf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163piawpevp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163hmmcxupf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163aqapgupi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163odujewsm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163dhprjlkf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163pxawiicr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ovifdqfk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ytepkrfa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163sxgfxhpx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bwazxqlm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qekemcxi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163gecafyfs.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gomehvdy.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xxjlgate.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163rdooewbn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tdtaifqh.html

Java: // 无解构
来源：http://www.aibaodan.cn/163bvlrphym.html

Go:   // 无解构
来源：http://www.sxryk.cn/163sjfgajrf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vcoamkfr.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lqkjvtmd.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163mjejlpkq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ahdvrqwg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163boamhhjb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163vxagmiix.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wstkqjso.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bdhrlwfb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hpfjvahc.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163qsklrrws.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xgbyukcn.html

================================================================================
来源：http://www.sxryk.cn/163popgsprn.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163gvlcualg.html

================================================================================
来源：http://www.aibaodan.cn/163viodzihf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ywifccga.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kgumpssy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163iqisykfy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kjbrulke.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163msbxattt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163afluzwbo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mwnlycgn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wycvjwal.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ousicptv.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163umvwrbzk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163kmozaglj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163cfkgsxwg.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163mxpiifmq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ogxfsysz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163xjkaofel.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163qiisluaf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ocdyyvwl.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zqbccotv.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163eigmxzbf.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163duqspamw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163mahihxii.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163svqjqbyw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163mypdkerx.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163riwnwgkw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163nlobrjcj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163dljjinpb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163farzqsud.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gyeuzvii.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lmihhbkb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163jkcnmjmq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163dawmcbgy.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163etbpljlh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163nvjoxrlv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tjrjzwyt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163stofyoug.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gtpdivny.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163gzhkivxp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fbmhbnxs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163vjjwjvum.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wxxvtnsk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ksxauktr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vkskfxhs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163avkuueke.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163djedohfb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163eepwvgfg.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163lgarfubm.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jdegkwbq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vkgwcmgr.html

JS:   arr.length
来源：http://www.sxryk.cn/163hdtkukue.html

TS:   arr.length
来源：http://www.xuanzx.com/163lfyxcleo.html

Java: list.size();
来源：http://www.sxryk.cn/163whmgnlar.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jusjcpir.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ejuzohgy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163tzdassyq.html


<!-- 参考信息 -->
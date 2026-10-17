外链999!wailian999！

[B09] break 与 continue
来源：http://www.aibaodan.cn/163rfgjsnws.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163jhtptgwj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163txeuyqgb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qkfaqkmf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163eqkvcgap.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cvxdqcnc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ellyfrsq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163bjhcffze.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ievgndhb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163aakmzbuw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163woxfrzpv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jxlfibni.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163rojnecvc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ssfumfkv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vlbtboan.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163adxiqlyo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163gkaplhel.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163mycbyfax.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163tcvcoyhu.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163weeqhdnv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163nicthvle.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163prfgroms.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kpehxtkj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163hmgqgczl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mgkadkxa.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163evhzqypq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jzqlznbr.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163mhszimve.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zoqzfxzj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163vhcxjbvl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163owxhtnfh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163glqsmzxn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ivofeant.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ztjekdyd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163osxahhtj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163yrdytmqd.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163fzldfsan.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163gfesxrrc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163sgtxwyyp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vschenaw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gbnaavhc.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163seunamif.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163lfsvpfzy.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163apmlnguv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163llvaemhe.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163cyumkhfm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163lawwujpd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yvkosbuk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ssbipynk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rpojamao.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qtbgtjlz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bnjvtcuw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163vpvitube.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ckptragg.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163rskmfrpr.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163nijpnqdf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lgnzqpjt.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163hgrgyhcq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qkofszko.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qsuuzveu.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163nidqstud.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163lhqkrbbg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hycqcaua.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163rhshyerl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163mvfwstng.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ibqoiskk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ixzgzljd.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163nlurhrbk.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163uwachqqt.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163pjdzawpf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163cvmefyfy.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163tpdnibkz.html

================================================================================
来源：http://www.xuanzx.com/163nwjdhjeg.html

C. 函数与作用域
来源：http://www.sxryk.cn/163isyuqtxq.html

================================================================================
来源：http://www.sxryk.cn/163nzreblqo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163kaswouoc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163yaqnsdnu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pmsuxiuc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ipbdhhyw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163shjwvjka.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wjhiujbc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dfrysprk.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163rjjyjepn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kmepzdhd.html

[C02] 默认参数
来源：http://www.sxryk.cn/163pkzywami.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163tfdgplsv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163lusfzmpr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163dyprzfui.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ejzuqpdh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163jhwlfbky.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163gitbzuai.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rqykcagl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163bhzvdznt.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163uhmbzzhi.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163iuuxfyef.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ddfvwdlc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sxuonvrh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hruqebvv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163jiwsnofl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163emcsnkfr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wnmatjyk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vkqfydxv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163hrytlwjj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ribfpufu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163xmtxkufm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ewyzdpea.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163dqmvzpvu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163fhbjjeuo.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qvenmwvj.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xcdjdmey.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163noaehgmo.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163sbptysju.html

Py:   return a, b
来源：http://www.xuanzx.com/163vxiddagk.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163neerdpbx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163scvpohev.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163diwbfjvo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xmauxoaa.html

Go:   return a, b
来源：http://www.xuanzx.com/163vmwxtqhs.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jrrypnek.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ahuaeqwo.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rbnvmyvp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163etdlpjcw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163joqdnoiv.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163khwipswc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163yrhairel.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ekijhegq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163nvcowwrs.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163yoynncjy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jclbgwvr.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163mfyxrrqu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163pjrqhkde.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163wkwyjqgf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163eakkwteo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ozkuhiao.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163caboraxu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163gmllwmtu.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dzxffkfr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163lmzuzybc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qabebztu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163xsbhojcu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hjkewsto.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dlyssppk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ynufxluj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163uaszuzsn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163yrcnpuxu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ygsuvlzh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ccjiwkaw.html

[C09] 递归
来源：http://www.xuanzx.com/163zevxlhnf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lqdnkzum.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163caszcida.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ffwydggd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vdfofekc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163qezwfszo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163rllhwnju.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vlwtscvp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163pwtlnimr.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cdsnrovj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163payhnaew.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tzlrqqxr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163okahrfzt.html

TS:   同 JS
来源：http://www.xuanzx.com/163rbhteyrp.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163yptawuhx.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nydsyeoi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vyckkajo.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163jnlwqfxh.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163laktkccd.html

Py:   from module import func
来源：http://www.xuanzx.com/163mytbccxg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163dpmysqiv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yazapxjj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wioyqjpq.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163scmboerv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ptukrvax.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xhkniilb.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163aqvepimh.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ikpgoley.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163fejmupfq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163bzbdoyjr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bhzyotyq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oeovwggh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163kthmfgtz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qwxyujws.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163bfrslnnb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163crqoqink.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fjqafbof.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163truomfuv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xfejeldl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ircnxejr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kujjdmnq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fvnxspzc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ujxbifdw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163pzrtmosg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xmnverba.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dvuqqbpj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ulonthlo.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ogkfvebt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163oxspkppu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163qtbasamm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hqtmovob.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163rdxfigvz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rlnmqeja.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163eayijctl.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qdtgqhtv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163nptifcep.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163vvkdlros.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ewvnxgei.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163anhlqzxy.html

Java: // 无解构
来源：http://www.xuanzx.com/163icjrctmb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mtxyorat.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ozzflzul.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163myspzudx.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163phixofkf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ntfalhep.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163vnghmplf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zqpqykvv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163uqsqojyo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163sbsnlbvg.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kqyahpsx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163fmlkvajl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jiuwzegx.html

================================================================================
来源：http://www.xuanzx.com/163xccsqopz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163taeabasz.html

================================================================================
来源：http://www.aibaodan.cn/163uzbpefyk.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163cycfjnux.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mclarphq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qrafmcwd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163hiyaphty.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163dlqkzwoq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mbnvjtaj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163hwhryuex.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kunmymej.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163nagvllvf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zjdaplgv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163tphnpnsv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163rbjdxbix.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163mzqrhtxx.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163wxrcqchm.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qeczrydt.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lobywovr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163npjthdte.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163pkrppgxk.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163kxlkvobj.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163yssvvzwa.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163jcscrmdt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163dqgottij.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163akaotozo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163pvqgyjvg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163uojwqgal.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wrygbvfc.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163numsxpfg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163svpwukcl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163whihhrfm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ywegvirp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163dfpzislx.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163bcdtfrmg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163cmrdwvte.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163njpwwits.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163bdfltagt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ryydccwr.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163fjzybval.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vphllmif.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mgufbamr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163anzekewj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163lkcnfrdz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ffzddbkw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ahcanzad.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nyfywptk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163nkniqiww.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ywckgwmi.html

Py:   len(arr)
来源：http://www.sxryk.cn/163phiurtyb.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163fznysvlm.html

JS:   arr.length
来源：http://www.sxryk.cn/163ybvjpddc.html

TS:   arr.length
来源：http://www.xuanzx.com/163wmqdirqb.html

Java: list.size();
来源：http://www.aibaodan.cn/163cmqsbyks.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ocqqwwci.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163esimswtw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163rlnrccqr.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lshqgwgu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163pnivfujp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hervfhva.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hiptssoi.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hqqnhmzi.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nvhodehf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163nggekssa.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163tupnitkn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hgtyrpjz.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163iqhlyjqi.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zbfwovgo.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163deotwrcm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zgslijef.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lsktdwhe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163hsqrscww.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ecnqhhlg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163zhcmlhek.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163piuohwrz.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vdyyscdc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163skgggpgo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163alezfqnq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rjaemrjl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163cbqvxjpo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163swsomywx.html


<!-- 参考信息 -->
外链999!wailian999！

[B09] break 与 continue
来源：http://www.xuanzx.com/163jftflhga.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163czlcpchc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163atqsyiel.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cuwgjtlf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vanpzlyy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163irfruqpf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163rqqppjwn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163rejayicw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kzcpjskd.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163clqjmlqy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163apwbsajf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rlfzzaba.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rgwscblp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mydlujhp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163tspmuxbu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163tqgzaqgf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ldgjcocp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163cfoxikug.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xqgfotfv.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xlxbybyu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163naclfuyu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wcmsqapv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zothgpsk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163feynsipu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163treqderl.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163qmcudkkt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163uirijrif.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163clcucyjv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ywvwwpbo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jttabpkc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dmvdzyxi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163endjszkl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sguuaeom.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163repfcavn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163zcxfsqle.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163jxunapcv.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zhlnsfjp.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ddjtqbzb.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163osyvwcnp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mplypdlv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gfxvadlp.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163thwbgtow.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tigdivob.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vuvevwxy.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163xlhrkdlx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163swkaxbqy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163mfcyplqt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163loymquec.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163iskgyynv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pvrimnuk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163hemgavmt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qbgqiile.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163eqolyxhc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zlkqekwr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jdfgdrct.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163wsnwvotq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ctbbcxsn.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163hqcvnbzb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163nlrgeunq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163honpohnn.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163idxgibmr.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jiirvhae.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163sdljngdj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163oneqrfxq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nqkzmnzc.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163fshecfjz.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163btaahpms.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gvvpfild.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tkbgwbdt.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163cwczzrgw.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163uasildmp.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ejxwjjcg.html

================================================================================
来源：http://www.xuanzx.com/163qypijkgk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qltijtqi.html

================================================================================
来源：http://www.aibaodan.cn/163edpylvtg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163osdvivkg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163emixrzpt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pwhqutac.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163spitjeuk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163seperpbz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tmrrxwul.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lwvwtrty.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163plrumsoi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wxneunpm.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rdlniohp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ktolsbqw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dbrlsbzk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ssdckfbg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ueiehszm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163modbxiri.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163inhrdvuv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163nsghmiit.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163vpltlngg.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ycggdytd.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163tabqcsqv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ycnguqhi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xuxqjfwz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qpnubqbc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163gbndzknf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163fardhspk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ulvaetlr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mszcrmut.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fuhfgspq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163rthltqru.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zjoexklb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cdgqawjl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163tfatxxkd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163xpuhifnp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163nfpmhajy.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uimuoqbd.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lqvjwwkg.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163aymtnjci.html

Py:   return a, b
来源：http://www.xuanzx.com/163hmogazdm.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163yzfrdaxp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mkvvjeuo.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163omevhnlj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163pjtzguzy.html

Go:   return a, b
来源：http://www.xuanzx.com/163rapnmzdk.html

Ruby: return a, b
来源：http://www.xuanzx.com/163nckjjyzm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163gilvasmp.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hpmhonlt.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rvngixgd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qhishecl.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163yelflwqi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jaeznkob.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163yzgoigzf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163jneodihh.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163qdmqdtap.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bymautqc.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rgqmiwpf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163kbzdeshl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wvjkbuoc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163inhycohv.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163botbvyna.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163wkujgjka.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163gyktsldt.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kknavnic.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rnnlxjyi.html

[C08] 闭包
来源：http://www.xuanzx.com/163uekajgww.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lrwrmlqd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163sfaaipya.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163baqaopac.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nmfibfxy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qptajyda.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163avmoretg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jpyjjrvr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ouqshvsm.html

[C09] 递归
来源：http://www.sxryk.cn/163kqhoktvf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163cbhbllzo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163kevplwhq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gqxnmsuw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bqavltsq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163gtfzqwpp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163dvrxuewp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163czxgevhu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163cmpwxzop.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bvxltirk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ocmsgfku.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163nezlpkdl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163whfcfgvj.html

TS:   同 JS
来源：http://www.xuanzx.com/163eedzebub.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163vicmziis.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ifywbfng.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163omwoqksv.html

C#:   块级作用域
来源：http://www.sxryk.cn/163cqxfgrsk.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163gbldigum.html

Py:   from module import func
来源：http://www.xuanzx.com/163vrzwzprf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163mgmaojef.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hqzejxup.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163xctvknmc.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163tppropcp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163oswydjqr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163sxkguboz.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163agwklbcc.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163nbppcjgz.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ykwoytrg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dyygcmmd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tulfzfjb.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zctxghiq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163uaiwsict.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163whyjikyq.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163matexpft.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jotjtjtw.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163wexkzlhs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ypcvntjz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hlnqosbo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qdrfzcos.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rhjinbhl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163eycwczrz.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163kyeuefjn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163umkrcccc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rikzcvtl.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rzfddoyq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163pixigrel.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163sedqyoqv.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163llkpjnqo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163biswvbin.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163eeimcxzr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163edwniohz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163gxkhplbq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vilobgpz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vxlwzzky.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163lixwtewx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163gpehselc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163bibbtahm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jkeqiwsg.html

Java: // 无解构
来源：http://www.sxryk.cn/163nawcsdqz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163yjjypfhv.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wufcqhxm.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ocdnijre.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163owjlqgga.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163otedgskh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fixydvwi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163lopitjkc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ckcgqmvv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ladsaqsc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163bjozhgcp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163sbdyvktf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163nqlwyklc.html

================================================================================
来源：http://www.xuanzx.com/163xnmdxpvi.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163hqeoclrk.html

================================================================================
来源：http://www.aibaodan.cn/163lpjfhjjr.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qxdzmijn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dyhmovxw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163dbqrsbpg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163hxpzchsc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163gvcgxrpm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163vxhkpebv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163zwyxuoap.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xrfrddvf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163nquodkdi.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ustxduqb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163hlhrwndr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mwnfcrvu.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163apcgecmc.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163kwmryxbd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163euqfxkyy.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163yuowgfii.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163prtjudxg.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zxdxpsaj.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163cyvymsrd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163gtdxfxka.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ittxfktx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163qfmagzjv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163fehyspup.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163mfpxrizh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hnyecxce.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ylfbqxwc.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mhpfyslv.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ftgejjgn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163piytoqdf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nbbsrykt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163uwxxqhjy.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163klqgqjmf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nkvdnmhf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gwajdloe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163jjqcqdhi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bqnaazbe.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tubedyoj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bbaqbwal.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163jmdcidqf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163idpvabab.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163yjuoqhqi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163svsburrn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jmkveqxs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jadxqedo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163apuqgbqm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163mqoidldy.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163eitbpecs.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163uowqdtix.html

JS:   arr.length
来源：http://www.aibaodan.cn/163yatffpsj.html

TS:   arr.length
来源：http://www.xuanzx.com/163gktkgfae.html

Java: list.size();
来源：http://www.xuanzx.com/163bdomfvhu.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xuiozwsz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fdzxnrry.html

C#:   list.Count;
来源：http://www.xuanzx.com/163tqsqajfh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163bwtlnjia.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dumaaphy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rjmveprr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dsxbrewy.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gpebmutf.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163oxgnzlly.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ccozigdh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163tsdjfkzx.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163dxqzpkhf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kjrhbwsp.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wwbqtqcb.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163klcwlbwx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ouwoytwr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163csskktzx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hybbfchs.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jcnlpbkt.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163hmeeirvh.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163drpbcsuj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fqozxczj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vgpjuufq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qmxaiyax.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wcjrmtzy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rlpimaky.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bapazlbo.html


<!-- 参考信息 -->
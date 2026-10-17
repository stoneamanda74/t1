外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ntcfsetg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163goillhsi.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163easyczei.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ogqcitdv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wldkjklx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163qjnomypl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nurkekmm.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mdegbdik.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163bseogopy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163szcpzade.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163rnornpfm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163svfpualx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xhkttrtf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mmezrwuw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163iuoeazxp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163bcibnwwi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163btqmdtjk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163jepmxugq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ljlvnmsy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163laqhnqmf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163tbfuubxm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mtjldbkk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163tdlrarzb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163obcmmyts.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163csuvwvem.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vyxisczf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163sgujoklq.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mnaotzjz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163vnjvbryx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163smwhditv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dmbjnayy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163gopgddsr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ntvptnmw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fzukipth.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163nwirjoit.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163vcenaymx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ktwfezqn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163gnsmgqsx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wqndluly.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lvsydrgt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ouydzzac.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163tvzymmwk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163vyqxtlgv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bpmgtjzy.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163fdkqpuhi.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163stgnvtwz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ttmevxfl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ejammsob.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qrmfvjzj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xjoxojzt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163elnafzpy.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163stmndhau.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qdpvifpz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163fjnpojom.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163czjaimnz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163pgeepbib.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kcfkcyze.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xykvxbkc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tlxvmlss.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163agayovft.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163cpkwvwra.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gqpjwyco.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qalcdyxp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fylocusf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163yldhpsbl.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163cntiijzb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163lysfahba.html

Java: a && b || !c
来源：http://www.sxryk.cn/163qogxbwkg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163nptevcji.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ptreoehq.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ekiowokn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nxlcvftk.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163fpqbspyp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xdqbnijy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ltgldlwn.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163doendldg.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cjjdirce.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hvadruax.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163zjegiwff.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ynsxffbr.html

================================================================================
来源：http://www.xuanzx.com/163sdeeioio.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163fviqrktg.html

================================================================================
来源：http://www.sxryk.cn/163ruowqgnt.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ezwfxfpn.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vrqrfqts.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vrdatmyb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163qeucnqjs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163edfyrkho.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kliqrvqw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vmijzbec.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163scgdlxll.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cxlgucon.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mcipwlqo.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163dptmejxf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ubsansrt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gvkayjif.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163tsspgttt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163tdvasrtr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163rolnjxzq.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zyykekyu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163mexoqnlu.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kcqtsooj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zivzykxb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163gjsiuoxp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nfaljwhf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163klxwfbxi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dejctspp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163jaudgpre.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163zpgrobjl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163utfibryc.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dzilauup.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163dsvrccog.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163cucwsslq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xxpbymmm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163oxascfee.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hzlaymwu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163duuuxbtm.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uctvrawp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aomdncfu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163adrjzobx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163utmlyrsg.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163oosbzdjh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xiirbzdc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163kywqgpxh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163spmwlqgh.html

Go:   return a, b
来源：http://www.sxryk.cn/163aenjnyqk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163eitbpgok.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vhpqdori.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hydwdgbi.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163uyobnqtf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jlaevwki.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163snmlzesq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jqlxsrjt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163krvbagrq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ehwwnldi.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qyhdvrkr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tgfpiqvb.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163anrezmsg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fqxnsami.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ntpjnxsi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tmxqotsq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nixjfczd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163gwzkebbc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ypihkcne.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163sowvurmf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163baeaglan.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nsornyyj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ajufguga.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163uptvrngq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hsmdkhdb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163drmvopac.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163jdcykuny.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163rslujgvz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163eplyulbn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nkthfcrl.html

[C09] 递归
来源：http://www.xuanzx.com/163vygdvbjg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hfyrulsh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163yigrcrqq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zsvfkyyd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tpcfrsvq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mmguacwm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163hyjtfuna.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vwflasoy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163iyupwvfs.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163qhegbgso.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163gqhrvjum.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ikaaunkj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163uburtyql.html

TS:   同 JS
来源：http://www.xuanzx.com/163vskkmzuy.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163oadrzeod.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tlrxybki.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163sbigibvs.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fnsijejz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rvdccokf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dyainxcq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163pqsmjooo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163mgutjhcb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ddqhmizy.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163fmatfuzo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ektfrkqy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163wynmvfsg.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163nedgopkh.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163hptpaira.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163bqeezegj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163bcdworkz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xubzzljo.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163yuylgste.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163tsomcxup.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163lyeeejll.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vsgzjxzs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mnddcudl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163dptwtaua.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163olqaisau.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yjuxzezy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163lmtkxuvg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gdcklcxb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dwjzriys.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163hrvljzkw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163szplnmoz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163pahbhkrd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163irgllxms.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fbuwycln.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163spnujxxa.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163obtsttkp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163szozfrpi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163oubpgwwa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ffovbbex.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vuoklyjh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ksunzzck.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163sqqqhtdy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jtptkjof.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163burmtzmw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163iftebfje.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163swgdqdbp.html

Java: // 无解构
来源：http://www.xuanzx.com/163wismjmsm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163aldwkbpl.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163zfgteewg.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lxayebrn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163czupbvmm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163frvmvxmd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163jeeanrff.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xfouarui.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ruutwaez.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qljulthw.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ynzulcua.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163pcjtmutx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ehrcvvmn.html

================================================================================
来源：http://www.aibaodan.cn/163deikgtcd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163kqumxbxu.html

================================================================================
来源：http://www.aibaodan.cn/163xygmncfq.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163euwfqanw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163yqikbtyt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rcgigcts.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vcaigaet.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163xuuhpjzc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ntxsmcpi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163htdcwhem.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qzglfhnn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163uxiiujke.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ecoynpeo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zamaxpnp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163mlnwxllo.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163mjianiju.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qzggsicd.html

Java: list.add(4);
来源：http://www.sxryk.cn/163siykpuyw.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163cwazxcrv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163gutpniyh.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dcllsvpl.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163etexxuvy.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dbycnreo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163wufhteoi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163dnmundax.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163bsafravi.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163kjitghet.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vtuktweh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fzuvayts.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163tmvbogsy.html

[D04] 删除元素
来源：http://www.sxryk.cn/163rhouahpz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wzmywqdm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163grqcofiy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fqpqjhjp.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pqewidiv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163estppjmz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163gonhfexg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163tzhroiyo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163jluaajvs.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163hgytnqsj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fucilzaj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zecwrovd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163nysarqml.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fjqstzcd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hjdlxmmu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ltjquzzn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bkrxvamm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163qifufark.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fyvfssmp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mylkepbs.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163buljzyof.html

JS:   arr.length
来源：http://www.xuanzx.com/163tspozlsv.html

TS:   arr.length
来源：http://www.xuanzx.com/163hggjogpi.html

Java: list.size();
来源：http://www.xuanzx.com/163othgfisr.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dmsuwggo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ucgvnwyl.html

C#:   list.Count;
来源：http://www.sxryk.cn/163luwmxhzy.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wabcxtpj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nyriczjf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ogbhmjll.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163tlfeyuwb.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yconxjpd.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ubldhlpb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163omtysqzi.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vcwsymva.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ldsjqrrf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qwatwlsi.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163djmxnlqd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163tltbtvct.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163awnfnwdb.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jwgiuine.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163zklxbfgb.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163aisxiorq.html


<!-- 参考信息 -->
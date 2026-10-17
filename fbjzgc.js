外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ukjccyft.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163wwsseqav.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fjuyoxru.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163xrjzoqba.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163rwebpuxb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163mcpzpgrm.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163spccvgsw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163idyesyln.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zyoejsio.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xihjlctj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mlymfbeh.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zahoydqz.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vwkdqdwf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163sveclofq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163zcihiwis.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bijzrfwo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iidpkzds.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163djffgyow.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ihalcjxm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163joncmmnp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cekcwfoe.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163goauxqoz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163uymjzmqn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bgtbcrpp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163nswimihc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163booixofi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hzmoaeln.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163yzprzbiy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163boebkllb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163anztqbbc.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163jvoxmnpe.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ryyegkqt.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jjgheisv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ldedbwpz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yhnxtumc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ehnmgexv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163xmnsmzsx.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163xewteqcp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163sjfevfjk.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163yomkdmxm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163nqmrmupg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hwdwsbiv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163igvuwkty.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ktkdydde.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jgzlmkjy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kmqopgzv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163knqpoobq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wjdsiclx.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163esqljcsp.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163iphbermh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163iihuwmpt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163awzjwmps.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dgcwqoau.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mlrjktcl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xwpijwfw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163nopfbill.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163httrddxf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gvorzcez.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163bnzwroig.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163fyxpyaix.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zqywmlsn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163uflcbwpj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dsltysmg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fykeytqk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wuamzgnx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bmyrmfpd.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mstlbqzn.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qffzneww.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163dlwupipq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ssfitsrp.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rrvczbpw.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163htbiacro.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163bnunnndz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163onzexazl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163iotbyxgq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163oegpaall.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nmpjmvdn.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ldwzqnry.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rrkjhqxk.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163oxslrclz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163heldmyym.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ubwcltcq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163vjrrtbcv.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163eomccado.html

================================================================================
来源：http://www.aibaodan.cn/163ofskkiyv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tawiknjh.html

================================================================================
来源：http://www.sxryk.cn/163epddotsa.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nnsyebsq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163iefjyyag.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jpvjcmmr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163voijpudh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dvbgjycw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163usipoofi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163fwujclnf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163lzzxqjsv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163momzzzml.html

[C02] 默认参数
来源：http://www.xuanzx.com/163wnayauao.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hfittvil.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ykdmwoho.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163wawxqgcx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163fnwziloy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163uoyvfwix.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163cxrgfmry.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pmsbjczl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163acsjpcar.html

[C03] 可变参数
来源：http://www.xuanzx.com/163melrsrwz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163nkjgjjou.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163apxwodyc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gagsbbia.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fopvhkqh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163qffdtrze.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163zamveaeo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hwtyhmku.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ybgrvadw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163wuvlechx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fqvqscyj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163oxlwyanq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163tenpkdrn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163glfxvsap.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vjsbjmwp.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163iclgqjxa.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qjxglgjc.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xmlinuif.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hnokwuwm.html

Py:   return a, b
来源：http://www.sxryk.cn/163abzcnugo.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163hycixlkt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zjemvafj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163xoewjuos.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163uilwtufz.html

Go:   return a, b
来源：http://www.xuanzx.com/163drpnmsup.html

Ruby: return a, b
来源：http://www.sxryk.cn/163djcagloq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163cvdsbqww.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hplyepjc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vjcoljjd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163hjtdowfh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163judnuvgl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tlyxndmm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ckvpejuu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163iuayltrz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163kxdveecm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163oveszfkx.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ukqdurok.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qsjdicgm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jetbarev.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pzopdxje.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xsneuvtq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163lqbhdlan.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163xkemjrip.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163egzavqnu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163odrljrrk.html

[C08] 闭包
来源：http://www.sxryk.cn/163incrqskp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lzisxjbw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fjbhivye.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163evnnyobq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jpifymqt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163glsqltjd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ovrmzfoz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163yjqrfwch.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zzddhykg.html

[C09] 递归
来源：http://www.sxryk.cn/163mhbfbgqa.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bapkbiwz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163rjucujdv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zvovjaco.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ftapcngc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163divbtrlu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gjzssmrz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xxeuokdv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hutznwjv.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163zurfpats.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163euarvngx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163lewjlkbn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163owtleftc.html

TS:   同 JS
来源：http://www.xuanzx.com/163qabntvba.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163nwiygdqa.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163mohuexye.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163sfrcxcag.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xnipeifx.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qmtsafod.html

Py:   from module import func
来源：http://www.aibaodan.cn/163thugvgzd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wmmruabn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163oxrazqcw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jgagpmjy.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rfprfygv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xluguqpq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vdemibgr.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163rfkteavv.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zbterzcf.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jvyheztq.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163pwkpbznu.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163atwboexy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nihjpydi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163dhkpellm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163jubttqey.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ekdqdwsg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163yurvjxfa.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ehnqezfy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163oonunzmw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hckjoico.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163cdjokcxv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tzytumzf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nxelmhed.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163butwribe.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mhghnsct.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163uxawdkbb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163utmxnraa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163sorckfkm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163icmdbkqv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163zriysjtf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163hlpfuyld.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163cgyvpgcb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163awfltogf.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gpdfrwuk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163kecqvnjp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rkgjlsvr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gcymebux.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rhjszofl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nudazrqc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ldnafnxw.html

Java: // 无解构
来源：http://www.xuanzx.com/163xpsyngya.html

Go:   // 无解构
来源：http://www.xuanzx.com/163kxpviqky.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vuojgisy.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163knormcdi.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vumwxuso.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ghgkwrxs.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163oofuxwpz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163voibnzcq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163txpymvoy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163olugbmop.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163bgxtpihz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163aaxdqzmv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163slecpoqz.html

================================================================================
来源：http://www.aibaodan.cn/163iuvsiouq.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wrnkvyfo.html

================================================================================
来源：http://www.xuanzx.com/163ccqbhpyd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163apddatyq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ptwtaovb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tyizqsky.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wcnowkxp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163qdeostro.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163szhznlbp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ljibjpwa.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163qkjkkbof.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163gpcayjjm.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163iugfkbka.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tkkwfzcq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163vancpzhr.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163bwwxyghb.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163hkyobugw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163itkazubs.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ranmdhfn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163rrnfizgj.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163epnsigho.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zvbbxlpi.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ivfmnhft.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163mrswnwkq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dswzigie.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163vovnfosv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rourxuhu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163opjjkycj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wkbvwknb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163qnvqvrxq.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163yannktuk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wbqavlrm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ijahgdzj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vnrblnfo.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163gthlxwtw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ujaozlmt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163sxwgjtlv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163yanfndwd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163trwtmhhh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163bfddnlya.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163albrnxtc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bfzkeill.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163diphryzc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163hgaewvpp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163klnyiekj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163fkqzbmol.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163igqvolvl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ondbamox.html

[D06] 数组长度
来源：http://www.sxryk.cn/163fiuvnofw.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163gznogvbh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163rlcffgra.html

JS:   arr.length
来源：http://www.aibaodan.cn/163htfymxea.html

TS:   arr.length
来源：http://www.xuanzx.com/163fbocwovp.html

Java: list.size();
来源：http://www.sxryk.cn/163qqporswn.html

Go:   len(arr)
来源：http://www.sxryk.cn/163gtqvqfji.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163lsecuolb.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jzsligyw.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kxrguffb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hkzsxixp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163lnrtbqvr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163tqzlcndt.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ctwklilv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163rmiocsbz.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163yhnhotti.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163hzjkixsj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jwzmblwg.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163yviozzmw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163yajqqalx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163dpfxkisy.html


<!-- 参考信息 -->
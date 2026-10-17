外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163boczgijb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dfiobfwr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163doexgxhi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163fvcgbdah.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cqhoyonu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163iystbkth.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ufyrwgew.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163gczuotte.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zljfdufp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163aavtvaan.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163fwpedexr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163obdzadxx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kkxwfvqz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163mvyvhkzy.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163nmcubvkz.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163rnlwstyp.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163soewdpad.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nxqljkvg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ebewzjio.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163rifwutxo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mpywjxaa.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163jfixysyn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163sftzbank.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ksktaqlr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163fhzrreth.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ygluopdq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ioxjkrmb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163szkvbfor.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jjsdoisk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163cfytzcqg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163hukmnkso.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163wiinvvei.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ovvnmqpo.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xxgenlqh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163fqmwjjcx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wgiexdaf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163iaobzeqb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163oljpylwk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163locukafn.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163xacqwcft.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163umvprcel.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163htsbsqgn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mylsuglb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163vdtghcuo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163aswuprbq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xcjkbkqp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163hnsjfrxp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163erjtpmrx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ynvopaln.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163qfuacoqa.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163bbbxlqlj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163nbpikwmv.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163fzszjrha.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163grjygjwc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163gveatkyz.html

Java: a && b || !c
来源：http://www.xuanzx.com/163gucmyrdx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163calqarin.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ybytkmcv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163iaerwpff.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163xtcoyouw.html

Py:   if not data: return
来源：http://www.sxryk.cn/163lyltxpgx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hujxmeim.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163umnmwfuq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163syjwfvkq.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163juqhuuek.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qzlpvtak.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163neslczit.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163kflcenhk.html

================================================================================
来源：http://www.sxryk.cn/163vhuhikma.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hhvmslfb.html

================================================================================
来源：http://www.aibaodan.cn/163bvixzsks.html

[C01] 定义函数
来源：http://www.sxryk.cn/163klhorziw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163akjcgmxs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ccbvjdet.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163cvtridkz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jxrpepwe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163npvbzuxu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163popfekyv.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163tsvlfjep.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gyenouoy.html

[C02] 默认参数
来源：http://www.xuanzx.com/163gfjbqxrp.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163tczzfvhw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ugvetgwt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vkkpipns.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163gpgefwcj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163tfzgodhh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vpyvjout.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163cvshnsbr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163sfqmzmow.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ltmjqggz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163jzemdaia.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163femqctdq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fmasxunh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163stiiwaog.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163iabqrtam.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ysqmszde.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163avnsoiaj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163rjfoxucu.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ybcncupq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163vszldsqj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rgnbmbcg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163olppivmg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163crysputd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163gpuhhfbc.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lnbazvxz.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bdulmfnv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rppxrlvn.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163tgmrumjz.html

Py:   return a, b
来源：http://www.sxryk.cn/163qncpsign.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163rjzsaapn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163rqtdxrcf.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163cwhylqpn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fvsiqumz.html

Go:   return a, b
来源：http://www.sxryk.cn/163rffhsjma.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163pwjgobco.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163jqdmsrsl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163gytqmktt.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163inqwfbzx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ezkdreiq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163dsajeyyk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163csxoqjed.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163nufzeqhj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163rtbzrrky.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163fcfttjlj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163bmllqsho.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rhkdzorv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163yzfvnnqm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163kmrjxqqj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163vmyihmqx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163pvuzftce.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tnwlefsr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163kzssuxqm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tvwdkgvq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163juvgpatt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ddtjveam.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ijdecvlw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163tzhaumzk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jfavyomg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ozaivhtl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163flhoarec.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ausfiiok.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ixadmmad.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yyjatjlf.html

[C09] 递归
来源：http://www.xuanzx.com/163bkpbhxsb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163vjgncpwo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rvllwmpb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lxtdnsdh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xjkqelqq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163fzjedxkq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163nvoaaegd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163nfmhvtxj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ynnnlyrr.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163bwffvxxo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163okouxjow.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vnjmphpb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xcieetfy.html

TS:   同 JS
来源：http://www.xuanzx.com/163antdxpkg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163luvqonhv.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163rpqfplsk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163njalrixm.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jkqmlyih.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hsvxvygv.html

Py:   from module import func
来源：http://www.sxryk.cn/163lhmhewle.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163cogepmna.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wvuljqhj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163okkocnve.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163qtvpxida.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163dtuejley.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163gechcgxy.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163xegtzeoo.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uvuwuoit.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163liuysjui.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163nyevtsfk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wwfpnjbv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163uufavtag.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qdpuwgjh.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163bfhfrgrs.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163rmxzkmic.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163koqlgolg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163axlkvyzd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bamupkxv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zriyuaqw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163feadpnct.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163thujrfvf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mecvnzqb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163yjzwmkpc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163avpxviat.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163uzqnvuvl.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yesvrkso.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163equphogq.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gevssjkb.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163kdukdake.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ehoaephb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163dxhrdkhe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163oqyvxeof.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163fskxwrho.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163dtwgmqre.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163fizczqld.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xlcairqp.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xsqckbgp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163uozwynbu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kponqehl.html

Java: // 无解构
来源：http://www.sxryk.cn/163tskstuzn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mdbhuhvw.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163akssohet.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163apkucdeg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fhuxxwqv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xtmjcqhe.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163lljwoeow.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163onpwwhxy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163znhnsevz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163lphikozb.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163cduhsgcm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163jsviyjek.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163pjjzhanu.html

================================================================================
来源：http://www.xuanzx.com/163dddkjnts.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163mjcrpdps.html

================================================================================
来源：http://www.xuanzx.com/163ignxtest.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fmfcpmtw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ewnxrlub.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163swhinjdc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wwjstqdt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wtyusmxz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163zokhtjbm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163asneqbqo.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163lfqclrvt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163awitrvgc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wbtdffrf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ltbmidva.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163rxkrrwzs.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163tycuqdcu.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xlqxknhz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dbwrolzd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ctydhpzl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163gruyqehh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163gwfcldqe.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jqtogsit.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163fjxetgfg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tcqzopvk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tjtqastb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ljfdjlnv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163jurcokiz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163mffojpyy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bakcrrqc.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163miwjixfl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163whkeamkn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163eksvggqn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163njrjtivq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163aspykyos.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lwdqmjkv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163jophgdax.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qfvogfun.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hnfqpitq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163exxozdqb.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jwpmzjsw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163okffwaim.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ioefatkx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163exsnkmql.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163wqlhlgyk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163adflupgo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ltiwubbx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163cpaphtol.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vxucqvvm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163kryjquuq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163cjmoelac.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zqvmettf.html

JS:   arr.length
来源：http://www.xuanzx.com/163lnsxbgma.html

TS:   arr.length
来源：http://www.xuanzx.com/163grodnpyz.html

Java: list.size();
来源：http://www.xuanzx.com/163bluxsijh.html

Go:   len(arr)
来源：http://www.xuanzx.com/163iwyrjsab.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163umrdftld.html

C#:   list.Count;
来源：http://www.xuanzx.com/163kemgtbwj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163cxeesvgf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163aizpckdh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163teoqhsfs.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rlmzhfiq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ppjwsjvr.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163zowrxdpe.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163lxoswmgw.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fkbbabfs.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xqaasblb.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163preydmnd.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163acpwkpuv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163skklsqlv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163iycftaac.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163eofsfkpx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163gbbooiio.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ucdqcnji.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163nigfcuxq.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ydzrmblx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jibfrxbc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tvihfkmn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163wgojjeka.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163rppqdikb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163uyjjtmkl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163tffbzsqq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163nibqbucw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163asqdmbqu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163koeqqbdv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163grbgejds.html


<!-- 参考信息 -->
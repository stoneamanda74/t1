外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163vczuhohi.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ctpianmt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163bjlrjvos.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bybcmswe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163lqiyupwt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163kpcwageq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cgnjnkiz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nbvrtlrd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zuviqmnd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163flzfzepg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163kwjbperg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163srdzilth.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ftoqlkcw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163axhnhygq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163uxokmqiz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163aipdrzqt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163eywkinqj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163bgdyoduz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163luxpblzw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163eisoejrv.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ibelrtgg.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163lfycmeji.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ospetpeb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163qxoocsyz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163edvoadrg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gtkttzii.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tehtzxye.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163udposbdn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dwkjxcxt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163sosahtvn.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163agpzjoeh.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163dpuiivwd.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163epejimrw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jbrlngru.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163itulmsws.html

Java: a && b || !c
来源：http://www.xuanzx.com/163bmhocwgt.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163snmmqovf.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163rqylslmf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fgmsikum.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163nobitder.html

Py:   if not data: return
来源：http://www.xuanzx.com/163fkynjvjz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gajvgihf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pnmtddhy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163vsbflowx.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163iewfpfqw.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163otfvrcnx.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kkorvzqc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163pjcarcvq.html

================================================================================
来源：http://www.aibaodan.cn/163ygtakksa.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jmshiknq.html

================================================================================
来源：http://www.xuanzx.com/163fozltrxf.html

[C01] 定义函数
来源：http://www.sxryk.cn/163xmbtjtgg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163zemorcuj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163luenhqzg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ikwdrbdc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163szpeufiy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gwpubijq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163nfrrtyoh.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163unvbmzhj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nvfdieva.html

[C02] 默认参数
来源：http://www.sxryk.cn/163tobpuqho.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ospzodgx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163pbselapu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163trdlaxwv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163cszcmsxk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vaolyncn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163bgldcajt.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hdsffgmd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163bcjtpxye.html

[C03] 可变参数
来源：http://www.sxryk.cn/163wjcviefo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163foxxkhiz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163tdatxcci.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rkbzrcme.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163achaimzx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163sgclydqm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hjwbqhuc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163cywrhqyz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163kwqidyfr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163hfeqfigq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qdcbzsjp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163eefsykbb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163axirnilj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163eyrffedf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163odzhgvra.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163fdmlwcjo.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163iacloeio.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163uejdedxe.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vwmjbsge.html

Py:   return a, b
来源：http://www.sxryk.cn/163bjbzfgze.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hmhrimmg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ewhsinmk.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163jmbzedyb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163cxdnhcrv.html

Go:   return a, b
来源：http://www.sxryk.cn/163uojaqmme.html

Ruby: return a, b
来源：http://www.xuanzx.com/163rsctxreh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163dlcpgshg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rphnlmlx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jwzbanjt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163sfxqwdkz.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163lwdwdqls.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ufgyxqdz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xbpolxyi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163edzbbzxx.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ukfhmezv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163choqtcek.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xgzcnwgb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wfiyampj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163bplwvlvo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163iljcfuxc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163xwmqvlwy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ckioqczi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ujpxvqmb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163jfvuviie.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163fczufetv.html

[C08] 闭包
来源：http://www.xuanzx.com/163djrcmivl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bwfwmvxy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lxfplshx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ilvtdnda.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ikvnwxoo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163tsinwmci.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hdmdvbns.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163kyczeksv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163auwhztar.html

[C09] 递归
来源：http://www.aibaodan.cn/163imyeulzr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rwwjaahs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wiwwmanb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kcrhtymi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163eknxyene.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ahuddvsf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wrefcbrm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163cwmzhxqd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163fiqzfxph.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163gssyisym.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kzfolehx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163icnxirej.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163grgevxqm.html

TS:   同 JS
来源：http://www.sxryk.cn/163sctbuzcj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163xpvtanxt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163xvqosynx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qywrjgvq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163kfphiwuq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163dlracjnu.html

Py:   from module import func
来源：http://www.xuanzx.com/163kranyvas.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kkhhnyih.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163chbvhdky.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163yytidjqn.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xdbweiyq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163wyxcpxbr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ykijirmb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163eohusqqk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163cdduyzlp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ykogflxo.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163nqfplayz.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mbfdhvox.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rhfgjyvv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163otmshpgp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163jtoghwzv.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163msltazgk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163stdzbxox.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163djjeljos.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163pjdfewoh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wragcnhu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163cmonoyvp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rerxwrww.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zelmvwnx.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ilumysbb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163djobtrvx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163nykrtuuu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163tuavfjhe.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fireqgkm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163enrusloa.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qwixudff.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ssgwnzth.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163nqsxlmtm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xjmdpffy.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ttnrpgii.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163skpofvur.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163lwfhiatv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163esfaormh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xenflmpt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xdljgmfc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163vegrfpcx.html

Java: // 无解构
来源：http://www.xuanzx.com/163ucoarpgj.html

Go:   // 无解构
来源：http://www.sxryk.cn/163yrxjrivw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163tpahlvft.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ahbejslo.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ztsftnwv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163tjybbwta.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163nykrzuzf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ecvlutzf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163azmgezvh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163uwawcalb.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163potokiqx.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163qtarfvrg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163crcuuyjg.html

================================================================================
来源：http://www.aibaodan.cn/163dkhgommf.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jtfxcfsj.html

================================================================================
来源：http://www.xuanzx.com/163kdrobnvq.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163tvcxmjii.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163kevbhdss.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163gxewezsu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163batipmsp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163slpdgphc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mfmubytz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163cykklnan.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163pjtrjcnb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ucptfxlc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wyqmdsqf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163oycbaypo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163hxpxxssl.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163jcxtbiip.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163mrlydwnu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163srysfodi.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163fxhdumle.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163fanzyggw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163zdbtvpjy.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xjmxrkyq.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ekjvkxph.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163msekueoe.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163drxgefzj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163pweuvpzx.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163nyxfacoh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163hwsvrgsg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163lbjhdofh.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ewpipgpi.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wdeipdhx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xxtxllmg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kqzdvbbo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163rvdganzu.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163yzfdeszi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rswmvkdh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163cjscdbrp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ulsvfbjd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163iwefyjxj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163oujhrfgx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ghwxthbv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163rfoazprh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163knqiqqxw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163lydagvdo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163unjetcwe.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163lmbwsrpq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gpkgxvig.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vaxjsrrq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163xktoqmad.html

Py:   len(arr)
来源：http://www.xuanzx.com/163nwhfjoui.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ytytnjru.html

JS:   arr.length
来源：http://www.xuanzx.com/163qlqasccb.html

TS:   arr.length
来源：http://www.xuanzx.com/163ntsojcnr.html

Java: list.size();
来源：http://www.sxryk.cn/163rxjsokih.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lfcouthe.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vjsnakaj.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163kmweyrdy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163uhpfaldt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mfpvhami.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163fudtctrb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vdwinoiz.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163phzoarsq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qbbrhnuk.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hxjjiwsg.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163cmtshrvh.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ghoplcrc.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nlaiawkx.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vrqlvqos.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mnwxkhix.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163vnrufwna.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163izrkxlmw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ipohvhqt.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vrayfvsk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163azsplxoy.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163irwrgzeh.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163flvmdprq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mgkpidrn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ypogfujh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hfxxbwbk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163grmmropf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163xdccnmhb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163apywjoyv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ifkfyhyr.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163otsyntdo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163xjyvvsme.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rdjovmbh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mbeqbljm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ludttahr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ydypsoov.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163hbiukptj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wfwmlemy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gxkogdou.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jzisluxw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163bpnkuesr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ypuvyder.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163lejziswu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163skmwxtbd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hhichfdu.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163wbcvpjwo.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wlmvrose.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163radzlqwe.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163stvhujre.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kfqajamy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163lpuryzyx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163iyajdqay.html


<!-- 参考信息 -->
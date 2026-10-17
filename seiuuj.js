外链999!wailian999！

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hazygihi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163khdmutxb.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rjdzpepa.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ppskxoja.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163bauqzuur.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163izaepybu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qzhsrlvr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ngsegllw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ybpnkmgh.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163swatbllb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bpzyzjhd.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163glupetlr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163nmxmidrc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wwarovzv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xgnsgxwl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wabdkwpn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zaeptjct.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163lpizkwpb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ddlvjbzq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163nekhyvze.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163yxqtbmmn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163knwclkno.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tflpxycs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bdsjiitw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fvcrqzkq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163axcdphie.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163taurzamu.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163dqgkqxlw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163nyvafypi.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hxnlfyuq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163oyotjlqx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163motfytrj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qbzpxqib.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zvoluuov.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163pigcmocb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qgqembcx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163sxumiqxp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ddqximjy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163kkmwkvvi.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xcofceel.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163jwvuciuo.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163tnyjhpwg.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163uglwghoc.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zeelmkng.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163wkqqvjwy.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wtbcohfp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163afsancdc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163psehlrow.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ktqtpjrm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xvmdpmxg.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163mlmanugs.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163txzirmte.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wjfcfiul.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163embzalgu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163bsftuuar.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163vcdousuj.html

================================================================================
来源：http://www.sxryk.cn/163zfmewwsy.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ulzsezug.html

================================================================================
来源：http://www.aibaodan.cn/163vuvnyheg.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lheiaozs.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163xfrvbzkf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ddbiopoa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mdhxiszj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163eldvoqck.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ulfgczge.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163iazbymjs.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163sdlmcxqw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163thinsuwx.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ogyuxfeg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163yhvyhvmy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163uwrvfvid.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hefkmnig.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163iepgvdoc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163kapwjdbb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163bpzeymud.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163rhdntjez.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163aidvjkdo.html

[C03] 可变参数
来源：http://www.sxryk.cn/163aktjuaia.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bwydjysm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163lenaqdss.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163djtnsmjm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qmcelfkv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bdqhkiie.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kgsajyxp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163owubqdwr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163royrdeej.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163eizugsku.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163biujwzsd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lkhpexhr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ykjexmmr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163yaigucre.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163furbovyu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163afejptco.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vngwgpwh.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fbxalvzl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163diubcvbr.html

Py:   return a, b
来源：http://www.sxryk.cn/163egizeico.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163cyzbpejv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qtfrqqgo.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ifwjoogz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163fccetqqz.html

Go:   return a, b
来源：http://www.aibaodan.cn/163tcjneefw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wkdsbwtu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163jtplymlw.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163msqdnkni.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163essrqebw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bhqsvtiw.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163vhyztboe.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163irfinoul.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163seclyapx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ubmfhmys.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hcjajosq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163naujgpdu.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163lbdvkjza.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163kuehtyhz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163umutuvwc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qhsexgxw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cuyrqocy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163bbaenmjj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163uhsbaqrc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163rcweudua.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163mpmflmal.html

[C08] 闭包
来源：http://www.sxryk.cn/163ridcmpqu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163efijjxjq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kgocuetc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163crspuzvm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163quzrrzwz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fnslvoiq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163nnfhizdl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gduwjzms.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163etlghqqz.html

[C09] 递归
来源：http://www.xuanzx.com/163xzfiwxqv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163wejdkddb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zoqehrhi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sdkregxl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kdnotxnd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ubtonwsy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163opqqkqzp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163fnirxqgu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dnujermw.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mgjzxojf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mxvyxedj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163zrwfccaq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163eztzflzg.html

TS:   同 JS
来源：http://www.xuanzx.com/163znsglxlf.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mbkjjtny.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163xkeeojfq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163iexnnvaa.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ilakjtqz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163fntliuis.html

Py:   from module import func
来源：http://www.xuanzx.com/163mzeskrnp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163vmycipni.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fgujndzv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qifdosnw.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163nsexlyhu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163reyrlxme.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163bdaootab.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ckywfkae.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ssnxwszz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jsrpevov.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163edhlynet.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163elkievly.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163guuuixzy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163cjpgyata.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qpdexixi.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vdgudumg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163bgwngume.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163pyxsohkb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jzmwdmje.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163edxuyzwu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163rmiynnft.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wokkvchy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dssmsgmp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163kcqwtgxx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hkornowp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163azucyibp.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163uqdmwrfu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163kttdwrvd.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163boiiuest.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163lsgsftmh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ckpokbqp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163yazrllto.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163iblrpunl.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163lbpxhbva.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163zxgaviav.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ipnxjhbz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163sdekebeq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163nozdlstg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163btemljxk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163tczsczkf.html

Java: // 无解构
来源：http://www.xuanzx.com/163dfzbmwcr.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ocptuxvy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163frquhxkr.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gazmmzuw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ebdjsbvb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xlycrqwv.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163wtvtqswi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qiuqbrhw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qitqnqgl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163gzfbuwww.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kwgiiwvz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163accqsytd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163fohxtllp.html

================================================================================
来源：http://www.sxryk.cn/163noizymkb.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jdvyaofw.html

================================================================================
来源：http://www.sxryk.cn/163pebqcbal.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gyxnhlbh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163rltbkzpb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qxtkzzic.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163jwrxsztr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ikyqgctg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xxefvigc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163hsljawvx.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mzlizcyu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163lzgqhncv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163advkraor.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mifzcmlc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163iuziiyam.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ujwqueud.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163uwkhyuvz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163cydagewc.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163mqbxlpxe.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ztxqboli.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163pkfpggwk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ttzagskr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gdqxyqai.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ezfmsrnx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163rytixxpc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ecotitgn.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163erlaefwb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163lhneenmr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163fbgsgqzt.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163otrovdsr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ylmegarr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wqioxfsj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163yeopismu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dfolagup.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163vejurtqf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ainbjrxt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fixhfqsi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163gqumauzn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mwdsjzlz.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vysqlpnp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163eijfvnam.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163qfvqhugi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ivumthyo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163jlhvqvpp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163udrfpucg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fhpnqjxm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qlyahhyz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wsrwovix.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zyfipykr.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hmsxqhkc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163tnwfvmuh.html

JS:   arr.length
来源：http://www.aibaodan.cn/163syrlzcci.html

TS:   arr.length
来源：http://www.sxryk.cn/163tyrgjzdh.html

Java: list.size();
来源：http://www.aibaodan.cn/163wdsqplwl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gmnrmaco.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163odysfmwm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163nmxllbeu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163engzcyrj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ngfatmjs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163eluwidyu.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nptedlug.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ahoemwjs.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163jesovzlg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163zqimqqaq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mzzlbkxt.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163egituxpo.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163zrkcqegg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163htmliuvv.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163powlcnny.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163euqrtivs.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cnmbxppj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163kqaalzqq.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163sfxfmqml.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163gjshntba.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rrzvtoxr.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163rhqbnfgk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ukvexiah.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163jparzrrn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ikfjytuo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ckesmkjw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163bxutafib.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163irjohbvv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jrrexlbv.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ozbcbhwe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bnvpvlwm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163cphhjddf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xapzcedk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wetpsaxi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bftjbpwd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163nuqfejvt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qaazgcnk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163tmmtgehc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163rsktjmlf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163nlkyrukv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ooflstng.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ltnefxap.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nrvntlkg.html


<!-- 参考信息 -->
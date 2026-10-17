外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rqoyidhz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nvalbtyd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163kwotxnqp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163byzoulcz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zqwzutwj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163yayuydep.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163zuqpkunr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lmslqjgo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hsqbevhj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163utzzsyek.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163fkoyxsps.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cstwlboe.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163cobgaqcn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xxthjuvj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163rqyzoaiz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163mdfkpalg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fbbtfsqc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ozkhhqmq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ablpzbgv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vqmefjck.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163eojglvif.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xerispwg.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163zsmltcmj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163clznlqhc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163raenszmr.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nccdzhhu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163hfqokroz.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163obtdsdrb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jemdygze.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163qrvjbmkj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163sigigkgj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163mqupbsqi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ualsdaga.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163zdumwufz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hfkiehnp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163jwwejgds.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cthbjoky.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ofbkzysw.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yvrydbdn.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ocpyfmcs.html

================================================================================
来源：http://www.sxryk.cn/163ulxxegle.html

C. 函数与作用域
来源：http://www.xuanzx.com/163nndnvrcf.html

================================================================================
来源：http://www.xuanzx.com/163wzgnbtrf.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163goankuku.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xjlirzij.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tqkiclhe.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163pbabhoei.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ueqhqxhe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gezzspxm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163utuwavhe.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ojjquell.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uicltimo.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rgoqrzjw.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nkorumwd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lmepaspn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163bwutkogz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163gdktgate.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jozjcudg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163noaglbdm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163lckvlffx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163aldchijs.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163mxauuxns.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qnrnrxig.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ecnisgau.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jzufaecf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zaxoawtr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163gjnmtwjc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163zrqssmhh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163urqhvezf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163yymyixgy.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163nogbftyi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163jsgmaojf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mrrozelz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xsfergsh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tbhxuino.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ymlqzjes.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163saxginbd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pmxnqmzb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163osnbxrnt.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163egldgxsd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163dsilfzqz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163xyqflodx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163yubvnqdf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163yhfzpjrq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163bumkzskq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nxsyniwg.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kkzbvxrg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163gmrusfjc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163pjdfhmnf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hwacuolx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zoewklgl.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163qsasbnbc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zmdrszrp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163oujjinqq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163lttzxsvh.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163nchdbxem.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163jmoorrpg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cabbgfow.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163mlxxhwau.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163vsidtffh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163kvfznklu.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163senkvyap.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163icgzloaw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163kkeryxyk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163yfjadgah.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163aunnhfog.html

[C08] 闭包
来源：http://www.sxryk.cn/163vglxvcxz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163yvrcnafl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hikcwlqb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fpqwoymz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wbsxximy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163emlkvzuq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163zxbbcuoh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163qeilkfvm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jbcixnbk.html

[C09] 递归
来源：http://www.sxryk.cn/163dpvvqjee.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163phzhhyvs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163yojtgumf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163oojsuxys.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163drbmvppg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163iwzzlvmv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163tjkrtfmb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163pgdctpmu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163pfqpuasf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163glmewuxa.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163rxfkkrhs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163fkesinzt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163uojgpije.html

TS:   同 JS
来源：http://www.xuanzx.com/163sfyfckrn.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163fbyuogiu.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163qpvigvcw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163atgbxhjk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zpdjliov.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bysljlul.html

Py:   from module import func
来源：http://www.aibaodan.cn/163spuayjdy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qomgmibj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163eubilzvb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163xuqyvnrb.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163unehhetp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163yhvcimji.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163unkedijc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zdzvswae.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163juysbeio.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qhiuoqdc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163abbqiepl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bvcwgqkm.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ztqeithm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163dejflvlv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163pyttlcbk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163wjizaazs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fbluqxbm.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kkkwiwjz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hjeppldm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tjezryxt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163nwcsgoxk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163sijxxqjg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jqyakyly.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163lczvotid.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163sapqibbl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ruazdvsd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163vydevtaq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163shnspesp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163zprfmsuv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163tybxnugv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163vxbifpwh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ijmxbjmw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gtrpvzge.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hfmhtdcf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163nzdtqkxf.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163dkfeufsd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wdvpnfna.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ofkwnjqa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163eeennejc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hssdtxkp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163voqateck.html

Go:   // 无解构
来源：http://www.sxryk.cn/163szfjwvat.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fpkhmqpn.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163fscekmzr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163iwvelpng.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163qhycbpsk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163azinuoon.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bxprcsjw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163euezhubl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163gobrqadh.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163njogjurp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163daokwgrw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ghkwtgki.html

================================================================================
来源：http://www.aibaodan.cn/163fkkrudfz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163lcyxiczf.html

================================================================================
来源：http://www.sxryk.cn/163aeksbinb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163erysdklg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163modpfemj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163geojxcox.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fqywguuj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ywzxxjiz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163prnofnov.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163pqeoulbv.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jlrhzxcl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jslprwvj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xpezveuw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163wruuqmgj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163eqfuocdd.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163nhtewsiq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ysvfjtgg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163toakctqu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bghjaadd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163oyylqsum.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fysvkdel.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163btrkvgtd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163eapfryql.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163wyihyemp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163mdwvntiy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163idfskmfx.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163iyraarvv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ixdwjrgw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163vsyontem.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lfawejcn.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163hcopzjom.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wqoerzre.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163qsufznsb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fkahkjox.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163sijjthml.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163raiyquuz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163anpfjjyy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ykbwddqd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xxigmmpw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mgspoavb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fxedywcg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163arltmfyj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163amfbhgjy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gnygryzb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ythtlwpr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163qrsxrxmm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dfxmzala.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163mvqmuaey.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163qdbrzfxc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jgnrplbi.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ywghjnon.html

JS:   arr.length
来源：http://www.aibaodan.cn/163nhvvswvq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163cclcvnjp.html

Java: list.size();
来源：http://www.aibaodan.cn/163ssuhyiyn.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xxubwyjw.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163qohibggq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163lqtamzkr.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163qxchveng.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ezteucwl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163cbkoqytf.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fzzoxboy.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163tuepryin.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ijwgwmsg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mtugjhmq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zohjekpr.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163khmpyypf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163sbdxyzhi.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163tsmptyoh.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163bkkzfujv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mjoiiobo.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163blmlckar.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jqxbmxru.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163dehhyqas.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163cozyhvrm.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qxwkdzvk.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163sfqhnfvv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rmwdadvt.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163iwauacdi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163kakabtwb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163deqtzkqc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163euhxygxq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163lmhmjomq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qsoldiyv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tdjjwrxc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163flhekxxy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163shkqvwvy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ymiyhpnn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163awyzzanl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163trvephrg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163scpkqzuy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163cjcjnymd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mnsboryc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vphtrprh.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163cnbidoua.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163sovcrkps.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ffebzchb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163dkpqyhcj.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mwkobzia.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ienrjsdk.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163uaurrnyr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163nnvcigkh.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xixjrmnz.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163wpciyhnj.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ukvzjjhb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163nrexydhh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jwawlklh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zxzgbjfj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ydibouni.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163rhguwnva.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qtqhqpwe.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163uayogovj.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ialtrwxi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yqojgseu.html


<!-- 参考信息 -->
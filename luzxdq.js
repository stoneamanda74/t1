外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163nikpnjwf.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163qnxcpsfg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163epmtfcfi.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wnuzikhq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jxrcjphs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163iqwacmwx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zqpldlup.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dobuewef.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qkhcdksp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kkxhbfdz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qcntixta.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163iwjnzpjx.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qmmgrvsl.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163nrhtrumv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gjpojdxc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ksafdxii.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fexyxhxr.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163xvltotpy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163edvvrlhn.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163aryllioq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163hqzswfxx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163yiqfczbn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163zbgfrbyz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163eupugcqv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rechuiua.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zjwtlwcv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163znwadzoj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163kktlutwb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163aztkurod.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163jmvaigaw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dksgnqrv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163qldxmals.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163orcrrmuc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163nrmtcwjz.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163sxmcjmml.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163tiyjbaqr.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163qbgyagkc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163lvmeywxt.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163tlkgvhmi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ihobuwrr.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kvxuacnb.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163sqvimgaz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xwwuxvms.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163axoydcda.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163mckvhgxp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163myudnfkv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163avglwunr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rlszfnvr.html

================================================================================
来源：http://www.xuanzx.com/163ovmnurvb.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wvngljbk.html

================================================================================
来源：http://www.aibaodan.cn/163ooderocw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nhgoejun.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163faieahaz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gddrfzyn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163qezucful.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ikasnfxv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fdqbjgtx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163eyqfiwqa.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163cdznfdvf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sqvdxvjr.html

[C02] 默认参数
来源：http://www.sxryk.cn/163sfsohfrn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ejkazmnb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163rberotfw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dgfecjwc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163brckivuy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ysirzdcw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dgqxsman.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163uwlbbdqn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jsqgtmdg.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163tjyxctyl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ebvkatob.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163zlddeudm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163snhqjqvs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163csukikss.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163bhmqhqip.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163yqshgeae.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163povkdgcl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163thovmeci.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163jotxxxgu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ewssczhv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ncikxihs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163uxfeiygf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163byzhxypf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hfuxcudm.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ttsflqpm.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xstmtarb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kygfhpxq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163fznerxyn.html

Py:   return a, b
来源：http://www.sxryk.cn/163mwdkwtdz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ocfypyph.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163aswikzmp.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163yaabfjio.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163lrjnekyi.html

Go:   return a, b
来源：http://www.aibaodan.cn/163uffctfai.html

Ruby: return a, b
来源：http://www.sxryk.cn/163zjqkjyuz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163hpmmgktl.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hvuuxvfc.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163cmsbaczk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zhubburw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ylntxgow.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163cfuiupcp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163tbqjhvzq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163cxkrjvqo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163gykroffa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163mkxircmm.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vqznenoi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ksrxhzbs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ozgaamjn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rcjazycr.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xgkpgsjz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163foruuacs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ixhqqcye.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mldtqazn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163cwcxeave.html

[C08] 闭包
来源：http://www.xuanzx.com/163ftwhoooe.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nfvzajrw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163twzyhazt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ebcgyudq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hngpmudv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163lmgzybim.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163utiyxeza.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163hbqqyujz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yftqxzap.html

[C09] 递归
来源：http://www.sxryk.cn/163ovyqwlhr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ireqxarg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163swuilkou.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tbhjpqox.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jchqnwlz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163qzegouto.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163culdllva.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fjightem.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zemhscce.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xxveiosx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163lhkxauht.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vowomscz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163frpjswkz.html

TS:   同 JS
来源：http://www.sxryk.cn/163xrhdcuin.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vjgpvrkn.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163erlwiovm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gdflyaot.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163spajmsdo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hyijibcp.html

Py:   from module import func
来源：http://www.xuanzx.com/163trfhdzxj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163noizdale.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163nhtxzngg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163fxzcfkkk.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zvgddvmi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163thqcawlh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163pksajhxd.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hhunutft.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163uvkcvjxt.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lapxylvc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xgfpguhf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pnwmebpb.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vhldlvku.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163dnxmxana.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jswnokvn.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gyoodumm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kofkwrvc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kjtqkrvw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ztqqrpln.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cbhvtjfs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163lntwknng.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163vsupyvow.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ovjkuchb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nlvgsglb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163vyaijive.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jbhiwvsx.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rvnwbnsq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ubdvmmpg.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bvuuoiwj.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163sdtmxprf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163mhiqceiz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bcekmude.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163msfloaus.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163xodbgptz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163pmairxju.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163bcmtbqni.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ekzsetal.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ohnohygv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163miolhjye.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ohpmeerm.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jyjjwuyx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163raeiuccg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163axwdmqpb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gkimqgoa.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163tsfjtapo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rgryjvrd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163mguvbotm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163srvejpxw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163rycjjxps.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163akudsxjs.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163pdpsviqm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ygsifwyr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ogycdalk.html

================================================================================
来源：http://www.xuanzx.com/163vwrpkttl.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163sdferytl.html

================================================================================
来源：http://www.xuanzx.com/163hivetdhw.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163upapxddk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hcicurbw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163vnpvumnm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163asmyhplt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163dsebzpqd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wtbnwjdv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163hryezzla.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163nxdcgyfj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163aapoosua.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vfuwfeml.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163dvxojtsm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ccrtpmdr.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163vowkudox.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163tbnsidgp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163rjshagyb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163nukeoejk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pwlftzbz.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163uycenfsq.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hszfknri.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163uqybohpw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163adkhanzq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fbsjjvsi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163tmlibewe.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163dpwlmoyp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163lzwjcobi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wxuakzgr.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bxhivmro.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nnfaalhj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163parnxqgt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ppazgvyn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ddchhbec.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ttfuntos.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163gfegenan.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ajhffdhy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wafkyedw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jyofnipy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ssordmiy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ahvhqzvm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xnggyouh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qpxacfdn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qxfoyvpw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qwytqsol.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xrgcxeyd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dsbauqjh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vreweiqd.html

[D06] 数组长度
来源：http://www.sxryk.cn/163idoyhfcc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163azauahjy.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163jjzwfabo.html

JS:   arr.length
来源：http://www.xuanzx.com/163foinovvh.html

TS:   arr.length
来源：http://www.sxryk.cn/163uygknevx.html

Java: list.size();
来源：http://www.sxryk.cn/163rrgetpkr.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ddkbxuuf.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163eluygbtu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mndlheum.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dllijhcg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ekzjisri.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qpymmoky.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wiivrxvk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rpdgtain.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163koxhicud.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163lsxnryyy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fpbotrzz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163uayrisqi.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163fjkgmcsg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163snrvhery.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163soooaudy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163edzocapj.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ctwcrpud.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pbizfflu.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fzslbihx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uodszhvn.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gplleabi.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cfnkiedb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mwyisedy.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163zrhibtfl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163unadknyi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163immfkefx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163upgjavxu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163aiesgppq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tfeqzmum.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163edybbdxf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163nolausrb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163vfjtnvak.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mgknkgmv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fkgumibc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zixniicb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163wespgmzt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163skauolyx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163uvbjwovg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163jcjezhdp.html

[D11] 反转数组
来源：http://www.xuanzx.com/163fmiovorn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ajyumpia.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rffwpegp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163mfnjvxyg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163vkodwosq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163nsptthnh.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163pozzduwv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rjsjpauj.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163yyilwhen.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163enhiqwip.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mynphkvu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163xjehspyu.html


<!-- 参考信息 -->
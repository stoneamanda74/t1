外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163szdtmsjq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163fwasioml.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bqonblgy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uelzgodg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xavjpztl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163yxiyaqoy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163uuscawiz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rlqtonty.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zwqeopei.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163opxkxyji.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ngoapdbk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ridhzayx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163emnszdoi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163wugvlmdu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163jnrvmtnu.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163bzwoitcg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163pymzydzq.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163emmznzsr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jxidxisv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ohgoqycs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ocamfkvu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163djxlbxcs.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163eukjjigz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kwjaibqy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163lgtpdzdj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ibifhjka.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163caqoudrh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163gufyzzlp.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163thihyjeq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163aoplsdrn.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163kcsylsng.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163oylbhzsm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tlnporxz.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163wrqzeqjx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yxchucrd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163zlcysrzm.html

Py:   if not data: return
来源：http://www.xuanzx.com/163vbchamke.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163bdbgwfbm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163duinjblg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zyjuetsa.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163bzdmmfos.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163xrilcngp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163clypikek.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163tnmiajpr.html

================================================================================
来源：http://www.xuanzx.com/163jamrovqd.html

C. 函数与作用域
来源：http://www.sxryk.cn/163pnqbvhee.html

================================================================================
来源：http://www.aibaodan.cn/163jbuzncqt.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163csruluik.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jykoymfl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163frnmihjx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163zotaxvtj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cbsrmcvi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dcckbnlw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tzbkolhv.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163eabqxcgz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vdwucuvy.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qbelxhsu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163sqhjxqom.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jqjdzxvl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ccbcvwco.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ypkkadfp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hywfivpf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163kydtebyi.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163bguhgezm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hqfjcvud.html

[C03] 可变参数
来源：http://www.xuanzx.com/163oljhwrzo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163eqgjaqwq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163bwoesncr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163derfievx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bpiaslem.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163oiggucgw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163atvjdapi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qpzgelvp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163nzuwmkvp.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163btqyirdo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163jzpspvbg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dhkokhcf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163iqsyhcxr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163pmzpptky.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vlvahwqa.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163suulztky.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vedxtbwf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ijmdyzgf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163sqvizvqb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163olcmgjmo.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163gwbirbyh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163srvjkwvm.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163kczsxlqj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163qqhyyjfe.html

Go:   return a, b
来源：http://www.aibaodan.cn/163dovwgiyy.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163olbcnfir.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ysyjomtk.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163jtwdxocr.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mlzhlakk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163oatcolvw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ppcavewu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163djdeumow.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163lnewpcjy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yzhzonrx.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163dgvfgybo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ojvzpvbn.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tjimuugp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jawodflo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jstaociu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rikqzdqv.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163osiycneb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163jihevgop.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ulnvlxba.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163piynlann.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qjfmbgsk.html

[C08] 闭包
来源：http://www.sxryk.cn/163gugprqfs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163emlkiwxm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vvkbvhdl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hattfdjy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163eefqppuf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ugnwkzvd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wbidudhu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163vuewpyad.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163olmsfvxr.html

[C09] 递归
来源：http://www.aibaodan.cn/163wphhqkhz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163iohbwwvq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gblvipgq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tggkeczw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sphbgxvw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lztcjavi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vpbvkotq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vooauvqy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ygefxgut.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163gactgncp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163cypjwpiy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163gywppgus.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xukrsymz.html

TS:   同 JS
来源：http://www.aibaodan.cn/163lfmnffhg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163tztjvlsq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tkemeefe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fueryidx.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163upvvhbuf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163veilchbo.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vtwzhalh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163zukptuzi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163utfcvcri.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163pnmhgsrr.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163uhnlqsmf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163knlgemme.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163yagmtofx.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163jnshkwps.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jdnbzsiu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163eqsjqfnp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qubkswhr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jeyeolkb.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hlryjjmi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163zicaipmm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163abaetqzl.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163rlzsjkjl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zycrfwul.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163yzleetjx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163qstxgjqf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pawpucez.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163uaefgopy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163znoqgykq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bunsemrf.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163bxgxrzdw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mkbdxyzt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ahmeneih.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163idureizc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fqrchvli.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gqocmaqp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163kjapzvub.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163gsgiubdh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163whqurgtd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ucabclcs.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ycfobvii.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vmzwdjpe.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gyxtqopi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163wzrpldil.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ymbqxdjq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163bwgbcquq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qzxemzib.html

Java: // 无解构
来源：http://www.xuanzx.com/163uivclfkw.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163tiiebtsh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163tubtqoos.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163larygyjv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gjsgsjcf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wihlmqzw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ksgrhooq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xpfswlsa.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163moorkttv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163yjyqgkla.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ftesainp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163eatpoepx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ccczlmxi.html

================================================================================
来源：http://www.aibaodan.cn/163kmjqbiwh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gzwapzur.html

================================================================================
来源：http://www.sxryk.cn/163nijkcvby.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163cthmbxek.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163aurlcvdc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163whoduvfq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163kuxjfjar.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163sddjxjyv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163cpworegm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163txrwcxwt.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163rmefabfn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ncgraupx.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fximveqe.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163fanbodiw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163duiebmkm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kqwzzdgj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163afhditrh.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wlljuubl.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tpcsvgvs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xgisizku.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bvnygcuz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163pvwnvwzg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163yzlkmuqx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163kkhmnlzb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zfycdgym.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163bnnidmli.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ezmcsfpd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163kqvvyrri.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163mgabiavb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ssxpnoua.html

[D04] 删除元素
来源：http://www.sxryk.cn/163emahyefw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163naxertcr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163pzcfhvme.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163aogtoxnv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163pvjhcyvf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163otkwvcba.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163gcqwggzu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163oiimuuei.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163gzyxygxp.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163paspacea.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163eubvdvhs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163qzqwjxll.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163gcxezlyd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163nohzwbxg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163tycuhdgk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163cxxabwnt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rflgvwnl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163jlrkyxpp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163gnflxepv.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pqdqqbbp.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kmpvcnvk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qxgcurgp.html

TS:   arr.length
来源：http://www.xuanzx.com/163pqmogcqd.html

Java: list.size();
来源：http://www.xuanzx.com/163iejihsdw.html

Go:   len(arr)
来源：http://www.xuanzx.com/163cggmhlwb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mphunphc.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ewbgepmh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xggfarcf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cefhdmya.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163gbptouup.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jsfektha.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kaujgvfx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163igcytfjl.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163perwoned.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163iwuegwut.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163hqbjkfht.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163sjmisjfo.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163htmazvwz.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sviempov.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163wvnzaoxv.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gghjurao.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ialyrgkv.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vmzulbfo.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ktiaunpo.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xrggkedj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163kppwxesb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xqoyrzxi.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163amxbdkbw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ojedemtu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163eoqnumig.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163datvacaf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163mimzppxb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163alhdicic.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163hoxifscq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163kcznhygt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pjrxmvxg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vajejeji.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vvooyfph.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ynwkqefp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163achlskkh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163vtiojrrq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vsxuolyi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xohdakqw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jgqrclnu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163nynjxfez.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163xjotygxu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163mdecsqzo.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163whfjfrsr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qbqaycoq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ujjfeydi.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163oxgazrnw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163atpjlokq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163hrfjcbha.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163lszwplms.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163caxpghiv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rclewpwt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nbmvtgqz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wayblkid.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163gjamuvbs.html


<!-- 参考信息 -->
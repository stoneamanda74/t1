外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ufbgfijf.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zthgmoct.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163clvmxprd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mdjhchtl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163agklsygu.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163npaafyxn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163fcetobjd.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163sszqlsip.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ebzmdinz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163iuqltpyk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163sbnxhssu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163gfjzsnja.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jdxpkqfw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vvzuzvfv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163esecskgz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163cadqgjfn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kjgpijds.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163upfbydbu.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fvqvgnyv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163tjyvxjto.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mfikxcwh.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163sznwvito.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163oxukllhs.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qyqbcjck.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163udaipgeq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wcazdilp.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163iluqfkyz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dgpzftpj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163rklgzdez.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163pwfylukp.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xrrkhjkz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wagpcwns.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163aupbtqvk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vmgykmtq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163rnriffsw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lboxrwfr.html

================================================================================
来源：http://www.aibaodan.cn/163qipuntvo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zfjztefo.html

================================================================================
来源：http://www.sxryk.cn/163uzuhkivl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163mxgoqlmt.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163cxibvvck.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163onwinohg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vyiaywgf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163iiplydvz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sytnglsg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163kmqcoxsn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ancujjll.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163biuthvgj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vohfvynl.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163gubmokfc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163fqhgwtct.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163cjubhnmf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qivotegm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163yuenzwgc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wfgloztv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163noqkwvgf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xflnnoqa.html

[C03] 可变参数
来源：http://www.xuanzx.com/163dxuvtwqj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163qbaojjln.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163twzbgktk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qubpnaeu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163onbokyju.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ltbnfndj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ynuweoev.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hxnzjzfk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jyutnilb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163igqdkowk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163tkfhbbgg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163pmlhxijq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ourhqvur.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jdwatuat.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163rardpuop.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ayatyvup.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ybnigyap.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jiezxoob.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163tvsppgrf.html

Py:   return a, b
来源：http://www.xuanzx.com/163pzbtvmpb.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163wunhnczf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163iybwjawf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163khmsttqc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ntwffgit.html

Go:   return a, b
来源：http://www.xuanzx.com/163yvartuxb.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163rloowcnr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bccvzxce.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ridmjqxo.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163qyfwpndm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ddecktpf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163yqatkzhn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163dsdbkfcx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163wvtpyuab.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163yirohzkz.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163hccinuch.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163gffnzoet.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163efwaagqw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163brszkcmh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163xeouqhnf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ilgujhzz.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ufkyxrjl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lhxqrgeh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163rmnrkbsg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163cdicvvhi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rcgrspmm.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qbkcchfg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163burufaza.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163umlmofsk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sdfremzb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bgjawlvc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wtuatkmq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163owwiyqig.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ijnrchcy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zgezkwuh.html

[C09] 递归
来源：http://www.sxryk.cn/163mkphcnol.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163iyvugquk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163qoqylxmj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qhremgwx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wvvywsxc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163dyyunjep.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qtxmntfp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163kugybpty.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163tekhixtw.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ojildvmi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163uyxxzhab.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163gtdyfsac.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163yiwmdhbz.html

TS:   同 JS
来源：http://www.xuanzx.com/163zcxkcyae.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163wuvklpzo.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qbziwtbr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163rucxgncj.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163bjtseqyc.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163fiixujci.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fvpfpnff.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jnqztnqt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163cwntmbym.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163wttpkpvi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163rsxirdwm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163dbagixrl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163cbeekotu.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163hjjzcifj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163knujqspl.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zyraasvs.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163gjifzsov.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jkbiahwy.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wdzbndhe.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qirdvfji.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163txioqshi.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163iwbksmay.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ncedwqtn.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163oisezsgk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ztnmtktf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ireqjzcz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tshgucil.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ycreiqlr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ljrqnavk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163urhcwkpc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163sioiftqw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163aszvtafy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163lkkbqmau.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163vfcreaxp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163dsbnvhhv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ldgxeicr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163npewzbem.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163mxomwtrc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nqsudxiv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ksquubrd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163raewxjxy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163zqpymyqy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xrdottft.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163uehhozsy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163cfvsudym.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163glazdoqu.html

Java: // 无解构
来源：http://www.xuanzx.com/163nlakqrtz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163zdcrvdgw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163chnqvklx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hajthdmt.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wbyszhku.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163lzwfwjcc.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ghipgeex.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163yxucbhrh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fabqjbfx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ldilsimw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163lafgvjkk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mvkrocji.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163fhfevqhq.html

================================================================================
来源：http://www.sxryk.cn/163mxwjqbgu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163abfmetfw.html

================================================================================
来源：http://www.aibaodan.cn/163unhsdaca.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zwmyxuiq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163vulrgyat.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163jnjzzhcp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163qbmwjvxm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163roktjpsq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xpvosprn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163poyhnaoj.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163wcsjupvm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163irwgbwjk.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163visihyxc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163fuvdqjgs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163zaxbvsrp.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vlzjqclp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vhsvglzd.html

Java: list.add(4);
来源：http://www.sxryk.cn/163fpjwtulb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163kwmpbopd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163shpdbttc.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163doedyvuk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tijziwuj.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163plxxnjjg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163uapcthgb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163oceuxecw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163apnjibxf.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163bnwpcley.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hxwrabfl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163sifqwfwh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bydtopxh.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gdjcmqaj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jtmvfcmy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ilasxbat.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163idahvrhx.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163oofuvtlo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163oyouggtc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163lnkmwlpq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163gyiiwmop.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163deojapsr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163muwqvjoo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163iqbqxkrz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163cmjpkmko.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163teixbqod.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gtchrsow.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163axjbogos.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163umtmczxq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ludslkev.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163yeqprprp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163zzzbseeb.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163zeyythdy.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163jvrgwnus.html

JS:   arr.length
来源：http://www.aibaodan.cn/163dniagjnn.html

TS:   arr.length
来源：http://www.sxryk.cn/163xrjvebdd.html

Java: list.size();
来源：http://www.sxryk.cn/163ogoqmbtb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bhxoetdi.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163xldfexep.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jgjclkuz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163pdszlyuh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fnpgziqq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163znyhpizp.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bsztroma.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163feshejzq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xkkptpwt.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ahlkzaid.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xtcmatke.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163vxzcmdaq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163cwcygwzn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163jasteavk.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163pcotkdfr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jqrlqkxt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163yvffirfx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fosszybf.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163sxqonaaq.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163skylbpou.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163imqcymav.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163jghphori.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rkrhkrku.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163agszzcaj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163dqcjntgx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ygnvzwss.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163zvmnqhel.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163dnesipwz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qdqjqzgg.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xnevugyx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jshskimf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163bwclkxjf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163poubyhwh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163blmckyge.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163iicnyonv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163auxjmore.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163bailqpjx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mwgoumbs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ifnxgccb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163zqpkbmfy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163hzcvkobb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fihbzesf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yvvxrilo.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qkpyjxjh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163lekdjlgc.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lpmziskd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163qwesfrob.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xpkukgmp.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163pipcubsx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163naauqsbe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163czbiutdr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163phjanwtz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gismnutw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ndxtfnqx.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163utmaczrg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163vlayhill.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163erqojrbt.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ewoefotz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wcgkqrdl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163yxdobqdo.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163iwmvxmfm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nqjwvtxb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163fyebfalh.html


<!-- 参考信息 -->
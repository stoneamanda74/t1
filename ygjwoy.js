外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bghnbllz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163innibnxq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163micesjtb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dmibwyld.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nbbaumha.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163phemypnf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xfwqdmtp.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163enkryafr.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163wtxpjhtk.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163xogurhyr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gjkyiclx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163hlnsitrl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kwlotqdx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wunycapt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163gfwyfsph.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bgubzpxe.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163whfztkpe.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163dncdhlyp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mjzsaewq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163eqetktim.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gtpvzhaq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163dfpwvtfc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163cqckcbfg.html

Java: a && b || !c
来源：http://www.sxryk.cn/163xsscnvou.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163fwvsqijc.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163glgkjjdo.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163czqktwfu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hpelygpi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163safpoqlf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163cgzcktjo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163glnkngpt.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ewhkscys.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ztvukdkn.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163kvtmvpgm.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tcsjhxaa.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bqbbygjh.html

================================================================================
来源：http://www.aibaodan.cn/163roqosxvx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jeyxzkbe.html

================================================================================
来源：http://www.xuanzx.com/163okwwdrqr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hyivdked.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163szfzootu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hkebhfnq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163bnwytpwg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rpdxlhyk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nibknzxq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163mmpwvhgb.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ljqtafoz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rlkmhasr.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163dzlqqabq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hhfxlrut.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jvcnbdcq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163dpwiighm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163etnhsdnj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163xjrvsfuw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163hixsmvmt.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163saciafll.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nfaqychy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ohwtgpxd.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mwoxitju.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lppgvafn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nettsjyu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ipnemwdh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163brqgdyea.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163glgmhdhc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163suldrlui.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163neeaepjz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fqhmewyk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163xguzmpfh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kbjskhzi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mkdisite.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163igulqdbf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163coowdfzc.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163krxouhya.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vnyvhvyu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163owmvolxc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163erbzotyv.html

Py:   return a, b
来源：http://www.sxryk.cn/163vccwvcyy.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jnmdrlfl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qdsurxqg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163boctgadw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163sxcfbsrp.html

Go:   return a, b
来源：http://www.sxryk.cn/163clffanzp.html

Ruby: return a, b
来源：http://www.xuanzx.com/163crdgdrgc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163qoyroovs.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163emusbqtl.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163duuameoj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fakqaqmp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163qsdmoxcc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163belnzekp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163yjlrgllx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163nabpwwsf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163oxrmrbqp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xihjfzgl.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163kmjrniom.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163iynoecav.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kcqhvlkc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163iavnrhnp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163udggtmin.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163osauufoz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ozeouclm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tqusznpm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pqbkkvlb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qszyqoim.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ejsrvbqf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163tfphvljz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163srezkumh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jhwiwpqs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mrvruorb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qpovyylc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wbmifuzj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hneapcck.html

[C09] 递归
来源：http://www.xuanzx.com/163itsohqoj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163wehhmejl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ecyxaugk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zzmatxcj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rkqcwmec.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163afrrbyrc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163fajvdcly.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163tkjyljld.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xzrpkndd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jldhmovh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163axatvegf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hjqtkwiv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163nekyfguq.html

TS:   同 JS
来源：http://www.sxryk.cn/163tsfrjlns.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163zfalxqun.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163qgxiznaq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ghawxoto.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vlsgsxzf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ckguqzdo.html

Py:   from module import func
来源：http://www.sxryk.cn/163mnwsekzp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163euuthifd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163stthzoxh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kkdyfvlp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xxygnpfm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ukreirrm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163joqzelxr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hvprgrbl.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163genolyxq.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cnhqqijt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163kpqrexvx.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163accqdkcu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pvsrpfeg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163asukbqin.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hblcvdrb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163wifvhosx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163zxeydpuu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163axdxmcld.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ulzrnhej.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163aqfmsmer.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xosxcuil.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163eojsrzml.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ybpmutja.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gmfymhrd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163yelkwlqs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jrzqnzcz.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163kbzwvigx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163hbrnjxud.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163nkcfgrzi.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163aotpxcue.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163hzdzyrke.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163huewvbzy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163lcdymixx.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163fwyxnbiy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163lgemxbkf.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ddqjabsl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163pnsoezyf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163pnaitrgc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163fbcymknn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163yzmuwnwl.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dibokriv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163qfmfsnmd.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dadivnbh.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rlvxhphk.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163wecxksmm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163qeaesube.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163feoacykv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163nsoawgpx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163pflcudyz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163lucpyhas.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163lunupwqs.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163gvtwdctx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163wpjhftaj.html

================================================================================
来源：http://www.sxryk.cn/163mydtyubs.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cqvpxyph.html

================================================================================
来源：http://www.aibaodan.cn/163vzrvjaxw.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rrqhtcle.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163arrwfbaw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gukklopt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qjoreoxx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163qqfzshlo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ehkbvhxn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163alwwdzba.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ixkqtsop.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163bofmqbqx.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163smmezhgf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163grsjhani.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vqdtojls.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yvfnebih.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163bdjscdym.html

Java: list.add(4);
来源：http://www.sxryk.cn/163iztouvfs.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ohushepb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163sgdpaows.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vrvlfgcr.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163mywyhjba.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ijkevuwc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163vugkkkyl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zwagizjz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vmlcljar.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jinbkewz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ebqvazap.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kxvbgtup.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ckreynhd.html

[D04] 删除元素
来源：http://www.xuanzx.com/163jcwmiedn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hptwuhyp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163dxmarzhn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163dqbaddjr.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163svqlxzcv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163imnktsnm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163dljjkdmo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163zjbevecz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zlbombws.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163yumvorga.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163onpunoyw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163pujpjyec.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163edwxjrxg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dmozexpc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163fhyjxveu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hepbdzft.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pnixdwgc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ibfwfieh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163jpzrqsup.html

Py:   len(arr)
来源：http://www.xuanzx.com/163knwvcnop.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163fwexccsu.html

JS:   arr.length
来源：http://www.xuanzx.com/163evqpwkwb.html

TS:   arr.length
来源：http://www.sxryk.cn/163gukwcjhm.html

Java: list.size();
来源：http://www.sxryk.cn/163pgztzypq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163kmidckal.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163hncndyqk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ajzbrvfm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vtuggggx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163swmcxjak.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vxjwcuww.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ohlgyqfj.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163guysyzkp.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163dgfuzocs.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163lqtywkog.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163hjzhsthh.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163uxzffehr.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163vrsspgfc.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163latdhoqe.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163dejmseyf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163obcbblfn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163tgcqapaw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ypjubyic.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wfxaylly.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163nxgsiwal.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qigrankp.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163keasunzc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fdzbgkdr.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163mbanpvmb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163gzuogihf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rkoahvau.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163fwqdxulr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163xylqlvnf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163axzloxol.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163agmcfosv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bzqmiqzy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163yfirbqax.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qpmaijdk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163glqnnerh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163moyxztcu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163hwjpyjej.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163bkhspbyx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163zfagzuku.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163dklnfwyv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163uhnzbavj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163rweobylm.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163teyhblnu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kjwzaemi.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mvupeysd.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163sctsxvci.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163viurspbf.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163lnczcysr.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163mlhnonul.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163taexllep.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163okfwdmas.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163awrnwxpc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uvstxgjv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dlbbgnhm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163lokpnabh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163hicauaol.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163tyteepsz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163crtsqnuc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163wtuxysyv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xrbepvcl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163toqzcrdl.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gtnbjzzh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fgkxbsny.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163fboavfbw.html


<!-- 参考信息 -->
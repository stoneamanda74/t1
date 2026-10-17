外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163asakbvlq.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163kaurdacv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163fcvmkgqq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wqkgzvuf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163unuiofgo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lzcuqgwk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uighhkrm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163goqjkayr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hqnliowu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ubxxdjan.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163guxvsdge.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163vwbwdxup.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163bcamklda.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163vtsavrdf.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163wtbybmub.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zotbhsdo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163plqdqwmo.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163gzmnfofo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163fbkfdguk.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163dmdibxef.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163eqzkuosg.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163dwzsklpf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163frmhgbtd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163sqpqdcra.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163brxxesgx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tepzgeun.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dgwlwbfc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vfslrudv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ujpoaygg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163dgvmyygp.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163zlerbzdw.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163bqqouinr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lfzhapdv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qphuimhx.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163iprnuypo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163kazjptae.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gzrlsarx.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qcrxxlhc.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163oeyalkar.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163lpkmltry.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gurrocye.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hxwqsamg.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163amcfshqo.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ccldqmnn.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vevbuxmp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163nazkkkma.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wwnecxtq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163btpsloqp.html

================================================================================
来源：http://www.aibaodan.cn/163hcukgqaj.html

C. 函数与作用域
来源：http://www.sxryk.cn/163grzvgrtf.html

================================================================================
来源：http://www.aibaodan.cn/163ezxxuedl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163fdpzzgfk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163aetlvouw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nxpvhqin.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ooutlyjk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163khrsvtsd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iyfomsqu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163gdcrdfzf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163yjjuxzru.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yhqjhkzv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ytpytyug.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163yqadpbzv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163afypikbr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gjigwzul.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vmeizjph.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163irahmcmz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163szgtljvb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163nfywzrzb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163kkcgqdoo.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163biuehwpn.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163tukmsost.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163thbzpqld.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jcytdcvy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dfumpaas.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163eiujqbvg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163sucmncqj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bwujvirp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mtequwfg.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pgtnqhom.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163kbrktirq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tgvslpmm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zrrjrdiu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163cjlkgszv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163scespktx.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163tpimutxr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vvedehxd.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pdpthzgv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bbvxmtap.html

Py:   return a, b
来源：http://www.sxryk.cn/163etqcgatz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163xevesavi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ldddzeyz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163wkqkacnh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wylueqlj.html

Go:   return a, b
来源：http://www.sxryk.cn/163ntfywvfo.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lpoozxrr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163eboqykdu.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163swvsaqap.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163fdnluajf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163drspnsna.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163bovxdayj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xyxtrprj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163lseazjey.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ldfzfgbd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163aniwppkj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tctcsjgi.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163tvgbymao.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163hdgihmco.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ykqacbbr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fepcznsk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lexxqiyh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qoepztvl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dqboongd.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qwbfbolr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rsbgeuhy.html

[C08] 闭包
来源：http://www.xuanzx.com/163xiplvmui.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cazvsszc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163lfxpqmmy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fdagwvql.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163klejaafe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163gylwwvhh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fflwminv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mjzfxrcs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lngvjptj.html

[C09] 递归
来源：http://www.xuanzx.com/163crbptkgs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rulldmva.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163sywbrnnt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qtfvfnxf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ceseyjfs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163zuevofkd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163jrgjhuqy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163vxjveowx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163pazgdfhp.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163zodaraqb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163liuwfwst.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163mzxipyyv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ozihlixb.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ytbbxzeh.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163tjrsehgd.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nqfvends.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zqxplgax.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ezdfpvbr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163noltqiuv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163sytbwfef.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163dzqsyhtc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163joehheta.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163iyeajxfv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163qaekbkov.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ragkjnhp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qfmerwty.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163bmerbhqi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163whrcalep.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xuhyxjed.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163yamkaalq.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163utfsprxl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dqeyikna.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ooueqxaa.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lujebhre.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ygvzxggh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163iyyqpysn.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163soojwtss.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163wnmshspm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ikczrrwc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163xdpdlpku.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ipiklbhv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oyqosywe.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mxjrffuo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tberdzfl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jztaowup.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ixvwdcbw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163uhimrmjr.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163estztafh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cjehurjy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163mvylenur.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163iswmyagu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ghsikxom.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163mhfbxnwm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163kiwrsfzl.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ovahpvmi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163nlhikidn.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163auetahwg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163quogyhrz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ksooompn.html

Java: // 无解构
来源：http://www.xuanzx.com/163yolgowkj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163bmkbjokw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wyyafbnc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163undupvsi.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163gpjyyihp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163pctsehou.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fprspbuw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ygxkwxth.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163sdizrdxa.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163nohvbfpc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163szhdclfy.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163obuahphv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ovpihegc.html

================================================================================
来源：http://www.aibaodan.cn/163jepjbtyh.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163dsbhdkov.html

================================================================================
来源：http://www.sxryk.cn/163tehwqsxn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ddwbtbin.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163oggwxtly.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ltloukpe.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163agqbfaak.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lrroabsz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ztywjuki.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163arybfmed.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163qbaepgaq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ytjdeifz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163phezlesx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ugnnfcsg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163fbyghkky.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163utklhndn.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ulwjbaeu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fnkrzbti.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163xbctkmqy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ygbgzjpr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qwwcxaii.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jzysdjig.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hetmaclu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163wfptfbty.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163joltljur.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fukrqvgl.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163rxlehspq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rirmoocd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163rfbrumrm.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ygsgaory.html

[D04] 删除元素
来源：http://www.sxryk.cn/163spjgztho.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163xemnmtpy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kjbqtnel.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163gfvmikci.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163pjlwdjxp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pjybmjja.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163wspprcyj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163fdmsspto.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163gvnbmksl.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163imflavlv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163guzcexli.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163aaepzlxb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bqwgcxlg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qixtadzy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mwlvhvrf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dfymuyek.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xfpgcgxo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ohfruzyy.html

[D06] 数组长度
来源：http://www.xuanzx.com/163kqhhkheb.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163kncseuot.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163rimlaxry.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ongcneuy.html

TS:   arr.length
来源：http://www.sxryk.cn/163gmhqwuia.html

Java: list.size();
来源：http://www.xuanzx.com/163sbjvhavv.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dozkenlq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163uzvlkorh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qilwbnad.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xnwxrqbq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nysdpquf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xokfjqhj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kusfxhba.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163eegimurl.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163yrxfnrcb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gcycjegd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163nurtnltq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163svlvbwhn.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163rgoqkhdg.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163eczyqfth.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163patwqnhf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163xvsbxqmr.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163lmbmesut.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163fztvdwcp.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163rbxbbrqd.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lpizhedt.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163vuqckego.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ydqxsabu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kzrplhww.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163yldmzddf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163nrtlyljy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163froseqqr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gudtsgsr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gxzzlinw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gbjrfbnl.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qlnxjfxh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163umcatlny.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163dodocirt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zaoznhvl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wsbmkdxb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gjbzqxgy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163mzozlxlu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163icnrhono.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vfnjsqkp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163rwtggnwc.html

[D11] 反转数组
来源：http://www.xuanzx.com/163tfowukla.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163pxazmwgf.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gltlgluh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163uqydhgxd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rzazkuxl.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163iyofcyeh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163zhbarzys.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163rvwbqova.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dfbanmzr.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163eugpuiib.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163grjmbkxj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pcckzlia.html


<!-- 参考信息 -->
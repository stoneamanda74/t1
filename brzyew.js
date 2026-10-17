外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163foxazwxu.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163qlsajdki.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163monqogtq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163zecswodw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zxkuejxp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163cifcgmcn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163apmomhjf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zswdubhr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wzsqbbqj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bjrswnem.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163bqjmnwnm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163muzzwivk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nunmhryi.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163bpwtwfrt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163fnkpqnzl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163iecseeho.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dzbosmdb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163zeohtdla.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ytjdclej.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163npvunusu.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rpethqkn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rkhgdlmd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tjexkiyj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163aioqxlpb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ivrdtrtr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ujsntjav.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bhcegmyo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163orslfyfr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163mejlptfa.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163cdgixvfh.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rzyojfqk.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163oupnqwve.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ciekezpr.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hdvoxcnh.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163objfesyo.html

Java: a && b || !c
来源：http://www.sxryk.cn/163wzuivokj.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ybnfabmp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163uletjmwe.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qethrtmt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gpasqsqq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163oodpamub.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jswrcrqm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rinuxjqc.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wmdvwppg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vechramv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vfcmlwlx.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kjaultdi.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vqaaxhwf.html

================================================================================
来源：http://www.sxryk.cn/163mwnaakyo.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tunncrjw.html

================================================================================
来源：http://www.aibaodan.cn/163racsevnu.html

[C01] 定义函数
来源：http://www.xuanzx.com/163prebwnot.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lqbbwhru.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163foabdkzt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163fqzfjefx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163venvjrvl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jpojiaql.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ygjpxjin.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163fvcckkvv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yxmcybjg.html

[C02] 默认参数
来源：http://www.xuanzx.com/163viyfzwid.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163vysoebhl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jeqaetmu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pigszljh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xezyizpr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jtaaxhzr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ufqmmeyl.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tbbfzfsj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nolvqmlf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ylhlvtox.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163afwvmgak.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gyvtncmg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nqrqknjg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vcgnubro.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163dukhopji.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163urxsodui.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163htwvnqou.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163onzdtpkw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mtxxbgbf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ntbefmdb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163xjauwvxh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fuuvkjrq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vijnwzgz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163oizjhipt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wnpmqsoq.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eteopovb.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163spuslnma.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163pcbovbse.html

Py:   return a, b
来源：http://www.xuanzx.com/163alfcprtj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163hgivnvux.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jqaefbfj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tbguwvrx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163wzwajhhk.html

Go:   return a, b
来源：http://www.sxryk.cn/163segtmzkh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163jgigjrmu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163tlvfuhov.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163gfnjlpys.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ccmtedjp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163lzhgotns.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163huggoaci.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163hrqvwmqu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ezuaflrh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ipruieqe.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wlhcumsk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163kxtfnyqc.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ngqfzrng.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163bhsrwpav.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163bfhhpfqa.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gkkzxiri.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163odztkixb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zyvnurmc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ydsejoet.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163almvekop.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163anmqidxq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163plltuljw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163gqmabgdt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163bggqxdxg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tcuqlhvz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kchvkffe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ddymgssc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163owmlbvew.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163kmtlpphy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ttcjfnnv.html

[C09] 递归
来源：http://www.xuanzx.com/163xophctiy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vhcgmknq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ntthamrd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163oxliyplq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pvhfpetq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zjfpqpup.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163oefmgqqz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163bjucwjsv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163cfkqctnk.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cxcwdzqf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163kwhuywlo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163oevixqgd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163aociyopy.html

TS:   同 JS
来源：http://www.xuanzx.com/163rkmebqbe.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163pujdhkck.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163evurlnjm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163wzdfadht.html

C#:   块级作用域
来源：http://www.xuanzx.com/163eoyrgwuv.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163kcukhktn.html

Py:   from module import func
来源：http://www.xuanzx.com/163othfoagn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163bazoowvb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hkyjorgv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jkqvpgwf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163safvvzre.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nymfkhew.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163krgwlcjg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163aprpgyae.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ovxwympc.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bwintybj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163rtjvsttd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sbjcmkqs.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163umxggazd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163dovylges.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ejamwchh.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163jcunsrrz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163tpwhflrt.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163qguzdzda.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tgbzcwup.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jmayzlkg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163gagkyfhu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zgjukizt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gypunshu.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163uoynqgry.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163beyemvdk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163rczmvcto.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163icwiwolb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bkguvlbh.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ikmlvpbr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ioayiawi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ncievupy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gpwrjmnr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ocdsyzts.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163urvglpsz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163yxudwxom.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163vnthoaro.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hibxktiz.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lsgklbwh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163jcsskfqh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163wtxmixbt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163hgggdfiv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ndmmgqlo.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ktztkvem.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bqbmmyez.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163virogwrb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163fjagvowg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163aoskjskj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163avosahll.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ecihnmmj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163yzfvxegt.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163sexjryxy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dtnumnvj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ecwivkku.html

================================================================================
来源：http://www.sxryk.cn/163dbznxncu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163hurqfghp.html

================================================================================
来源：http://www.aibaodan.cn/163evyrjqcp.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163soaqvave.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163sieofvyj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163iqcgtymd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lfznttno.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pmnzgxqs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163khcqvhen.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163phyzbvsz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163tdfglzxh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xdcwhsza.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163uovdphwo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163eqsgjpno.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163bgapgsvk.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ntkrzqah.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vboosfvl.html

Java: list.add(4);
来源：http://www.xuanzx.com/163owpvbfkr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ookecjfe.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163uhgocjex.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163akbrunkr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dzppbqzl.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163yewmjlyq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163yltetmgb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163mvenmerp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rujpxywz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ogjsilhw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vkslkfvs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vezmgrzq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lyhxtfqp.html

[D04] 删除元素
来源：http://www.sxryk.cn/163shheblfb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gndfyyut.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163uyxgcnid.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kwycgzco.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dfoxasrv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163idsqjrih.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163uwvwmlwv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fzlqfqqd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163abdlysqo.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xmsjlsvl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163harfqpon.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163knduhtra.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163lprelerh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163nviggdpo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ldilgwxd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163rqqmwpnf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163iqifcojq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163uiuhvuji.html

[D06] 数组长度
来源：http://www.xuanzx.com/163kqdkwjkd.html

Py:   len(arr)
来源：http://www.sxryk.cn/163gqdoumbg.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163bfoczjuq.html

JS:   arr.length
来源：http://www.sxryk.cn/163qftgjida.html

TS:   arr.length
来源：http://www.xuanzx.com/163sbbfmjda.html

Java: list.size();
来源：http://www.xuanzx.com/163zusowyyx.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xhyywffe.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163twkashxz.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rpcpjckw.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163zaiyqybb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ngjpvhcw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ilmizcic.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jgmiynyb.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zbobjkyl.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xrlfpszu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pisuxjtf.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xhqadpsg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163vzqeuxrt.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ykqmggft.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qnxvemcx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ntrdtlkt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163tnmkhwws.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ayelyjxf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163udnneuqa.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163pbgcfvsc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tpwmadya.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163hiwcrnqy.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163lsqtotkv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jhmkwhym.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163fzippbsi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163euqacrff.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wyqmilwn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rqxwwtqk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163nhrhxjho.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uroeffek.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163uqibtugd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163dwjimqqe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vhycjlfl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wdqltqdv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163doxajixl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kclsckgt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163szemtnyj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163frgzpbfv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163aihipxvw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163jrpxgoqq.html

[D11] 反转数组
来源：http://www.sxryk.cn/163uhkthbii.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163mboanmst.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163adkfcptd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163wjoqflqy.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163bwrjijes.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rdihnskh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iccmcmza.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163hwkmjgie.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163bvbmnvfw.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bmgpmogk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163aygoxdju.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rsnaukil.html


<!-- 参考信息 -->
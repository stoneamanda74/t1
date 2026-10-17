外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163fnacorup.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163nipbblcn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163tklvmdmj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163qvzfnpjr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163liisunoz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163rgwafnaa.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163sqickqyx.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163xwfuwkuc.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wfqsynoj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mzwpyhlv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vxqdpmrp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163knyfvbdk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163bbxyefkb.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163yrnkpocm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ddovrvhu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163xnywhubf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163pqyjpblq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ozphutfl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hkdbarxk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lksukaak.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163agmysxek.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163omejidlv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ipsneryp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ltttwlvk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163gkowobea.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163voqgvmyp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vadvnfxz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wbtqunwl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163urqbxmni.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163zvqdkfzv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163xgqnojti.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163erovuvnn.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lcdkxdfj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cyijrbne.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163rwaddcmb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163vzzhtkpi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jydumtfd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kiisqvpd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wnkgqucb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ucsydpdq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163mosbazmm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163rvztzdfs.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163oxoqizsa.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163opaipvqy.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163fdztbpbs.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163xeyccizv.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ahetchca.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mimxnche.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163awygpjdl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cwmzyvna.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qjxvwpxm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163cdisvqjq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163vvlsngsg.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163blipxatg.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163kiasbbhw.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163fsdniwte.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ogergwsp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163tflplzje.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163sbaowlsx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gtgvsfwk.html

================================================================================
来源：http://www.sxryk.cn/163ksdnxzwx.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zhmjbicz.html

================================================================================
来源：http://www.aibaodan.cn/163ewszbggj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vqaneupa.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wstwuvou.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bcstagin.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kgbscgft.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fpovvtpx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vgvhbgeh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163atinhtcy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163axrjqtap.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nmxdzroi.html

[C02] 默认参数
来源：http://www.xuanzx.com/163qacijzlq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vgqbscxd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163eyakxdih.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163lgiiguqx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hjtzdwwu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vwbmmvub.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dzxavevp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qbjtpyts.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xkkryvbv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163mfyvhkei.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jfsflhbd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163lqituguj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dytstmwn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163oqjfdkqc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163vfhhsgnv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ggjgegmx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163zfyuvywf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163phedcijn.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163kbcubggm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163lmpubybt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163exwwucbq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hmesqela.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163mjyxehix.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163rszvcnwd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163xhvsvgse.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lsuhofzr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wyjownbf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cyihutxy.html

Py:   return a, b
来源：http://www.xuanzx.com/163ekthligr.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qyvukfxq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ypboejwq.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163sksjldeq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ugbdlihy.html

Go:   return a, b
来源：http://www.xuanzx.com/163wreryrod.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zrpkflbi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bqsvradg.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163veiaqizd.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gkjynpld.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zegpavws.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ncqquqms.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163uofdmxza.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163plievkte.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wfabkutq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tzlipuhi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163rmhbouut.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dwbavfni.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163djpmggek.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163bdienoby.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163axnmkfnw.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163vkghopfc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163eizdltgf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163lvxyczmu.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163aempajkq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163biorjwqx.html

[C08] 闭包
来源：http://www.xuanzx.com/163axvhkmzr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163gpddlbga.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163khhkgjcf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dxoqgick.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163umhlxjgt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163oqafuccd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ytijhngs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163oxfparrs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ukqeboql.html

[C09] 递归
来源：http://www.aibaodan.cn/163gnyglmmo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163sinwqvme.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163etfdpwwu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163egnuiapa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mwdlihtx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163dbccvvts.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163fqufuogk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163hqksgtex.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ajwbpyzn.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rbiknzzp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163epenstmo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hwhbflfp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163dozwxliz.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fvluhhqb.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qxktvucq.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vcemlkmz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ygdvgnta.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ygczmxpc.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163nkvhjrpc.html

Py:   from module import func
来源：http://www.xuanzx.com/163pvahmtqk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163gfddunas.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yevziaal.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gnaxuakd.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163yzcjmfyd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rbphejtz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ziogkwuv.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ndkkfqtm.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163mmlfrebx.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163otfoyhni.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163uvksglnf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163iayebxsz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xwzogvsi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163scxasbwg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kkwrxkds.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163oqpbcxhh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hjljtlnv.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163gfpizgqz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163wuasbqlz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163viecemop.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rgtlvfhb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vemhlwdq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hunfynrf.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163sqcfuemv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ztmfgpyz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163meglytxq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163uwihbqqw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163lilmhcgp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163mtqmcjun.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163bvszeqkf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163prgkzidh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163aohluhfl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163naokpbza.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163lkmwqkug.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163olarpgyh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163dpcjyebg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ygacgsiw.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163cynsrrtq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wengmner.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163uwnowbeb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ojpbptfi.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wcrexuph.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163metrijoi.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163jldgflma.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gxljeroq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cnceyeca.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163layhqabf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zgkrnskn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163zjmetigg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163alpqepob.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163kbppfjxt.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ydiqczrm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xhudmcwm.html

================================================================================
来源：http://www.xuanzx.com/163uzhattwh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jylqkzax.html

================================================================================
来源：http://www.aibaodan.cn/163toafnmqt.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163gjhgsbbb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xwlearrn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163hrvywumd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163sbvtdghy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163oomdfnxo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163tgprwkpq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163knajyawl.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ypebduuj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163czjvipwi.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163pqsedtxh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jlsnsegu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163giwleoma.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hxrhfvwz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qgblxcgt.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tjboqbar.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163yrmllxuc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ewtobdwq.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fzzhxcxq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163yasuoczv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ogemvtpm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163hcbpqftl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163uovwynlg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zvsdknkl.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163nunyqgme.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163dmpwobgh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163opytoxlx.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163srthlyjb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163bqtosgar.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163bacrgutk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163nyrkknqi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ffhxjngf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tqvaijek.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ziomjvzm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163vaxvjiqd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163eamrwgsg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fayqpulr.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ujmymccs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yluqxbux.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163lmremryp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163xmfraahw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dvveqmqa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rmxtklec.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163pwcxndcr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ssbsomhd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163rzinexwk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163cwofbfzp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mrkfxjix.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bvjotjzt.html

JS:   arr.length
来源：http://www.xuanzx.com/163nnireqss.html

TS:   arr.length
来源：http://www.xuanzx.com/163eqrvzfrg.html

Java: list.size();
来源：http://www.sxryk.cn/163cwbaczzk.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tpufnvvm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nymbcvsp.html

C#:   list.Count;
来源：http://www.xuanzx.com/163awuzjjfw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hlgnlrpn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mhgtdbkx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163wwragmvq.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zaxjozmi.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ayfczrkb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163uuuxnkow.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rzhzmwiq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ophcwwpf.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163bowrrudi.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163perraorh.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163grjylaad.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ulzdcfnp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ybiagcmz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163aocznhdl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163jsnktkso.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163jwdjhuwy.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gftztnqi.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163fulsixrl.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vbrgtbol.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mxwrvlag.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163idpaeylr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ufjsqcwm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163tynidjys.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163aymstgzp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gonicmzg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kewadqev.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163vpldmtvu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163jspglupf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ofqcitkf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mukiqwnc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xatwwtqe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pggkpbmf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163tiesfask.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163meodvxki.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163woslmmog.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kgemzejd.html


<!-- 参考信息 -->
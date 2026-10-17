外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lfasmwgo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163edhnprrc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163hqkdzdrh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ybshmjlx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163eewhuvog.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dqpzzfrh.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163yjtcjruj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xkaphbdv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163bxcfcrom.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tqzurhhy.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zudjelph.html

Java: a && b || !c
来源：http://www.sxryk.cn/163frtcurli.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163wrshqgje.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163lcwelnbx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163pakcicvq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163aujgjpmd.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163nmwjvubd.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163njiqlgfm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163omvyluak.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163apfqmdku.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163npfovnyh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163smkimdjf.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zqbvzmwd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163nkwpaepa.html

================================================================================
来源：http://www.xuanzx.com/163fgbvdxhs.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163tfexfmtj.html

================================================================================
来源：http://www.xuanzx.com/163tjrjhzzp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163iowuizoa.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163gkznwvqs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ngycjxij.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163rsupfxzj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iylvjhsa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qwvsnyfw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163idqutwfu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hprbackw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ozreggyq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gwfkmvyn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fquijbmn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163boymrmat.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ehzojtbq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163qbufhecy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163htgyumnq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vjbdfurg.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163gfwqyplq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163vmtatzng.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163cfbttymk.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163vqfwetje.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zwsvtezo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dlrgmmtr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163icqoxcbm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163yxxmcltv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163dvemllll.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163whllflpf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jxzmntov.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gyjfzhng.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163swfgzlzj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dsgnybaw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163asjdtqzm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163udnrmxkw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kmgelwpm.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163gpqquwcz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163owhrwdwt.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lxrsajco.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163fjkgjwlb.html

Py:   return a, b
来源：http://www.sxryk.cn/163gvhwzjve.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163uiytfncs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163njsjryvb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bnzfxwru.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163uftljafn.html

Go:   return a, b
来源：http://www.sxryk.cn/163zrdwniev.html

Ruby: return a, b
来源：http://www.xuanzx.com/163fyezsgel.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163dcdtkjvs.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163lzuvapqd.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hsdsufjh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163khimchea.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jnntkeen.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163elgbhyof.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163nmlwsqfo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163rcqanupt.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163oscrreyr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tznxkfcv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rvtalmgu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163guriqtvh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163iqwnyaeb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163dsadahgn.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163wplbpmoy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163uvcjjnfv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sjadpthl.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163flydexil.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163obrfsznq.html

[C08] 闭包
来源：http://www.xuanzx.com/163dimdxlth.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163wmtxxwke.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163iycbvgme.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ztngthhn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gjxcszyt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ejbfglou.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ffdwmymt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cbkhccqk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qfqnmrqh.html

[C09] 递归
来源：http://www.xuanzx.com/163fkacxpzg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vffzsurl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163szyzqbyi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cvhjqahr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rnzfdxkz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163iqizxsmo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bxpmjvkt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163dibpjvix.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163weflzokx.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163aeujdqmn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163geylopla.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163zmuqrkza.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ezgggmlq.html

TS:   同 JS
来源：http://www.xuanzx.com/163sdputoin.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ttapfucy.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ckdmwhet.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ughsdwae.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163fffxlozb.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rjfhuvsj.html

Py:   from module import func
来源：http://www.sxryk.cn/163zjpuiimy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163krbxaowt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tvojkqci.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163dusqjtuc.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163pfvfskew.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163kgirbvic.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163boqotdej.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163xnednbkm.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163lsputosd.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163soyvlguh.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lpdakgpv.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nkhoxtkr.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wyipdidf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163uszhmfmt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gcrrkkip.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163kfvxwftr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163odntrnnr.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163mdkpdxqm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ibshdswa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ktqivlqz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163abqfdtgl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jmxaxsqs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ihkifcww.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rxmupuxg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163frgfvtyu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163yusftium.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163zgvhfaza.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163oqsrnkoe.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163mrutiyxv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163itwzfobk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rtkdkkqf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163unbppcci.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dlxprnsu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qcddcawl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163rjddacbh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163mofkqhla.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163rwwkssmk.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163hlaxubcp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mjzddifx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163xcpiepue.html

Java: // 无解构
来源：http://www.aibaodan.cn/163oelmjbvn.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163liikotig.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163pkpbkjva.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163cbhrrwaz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163acdtckus.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nyvevdkh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ainzrzqr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163yhndtira.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163avimkqab.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163cfrdaftd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163fditaoaq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163olezzpxs.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wryunwjn.html

================================================================================
来源：http://www.xuanzx.com/163gkgavrfl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163oacvpefm.html

================================================================================
来源：http://www.xuanzx.com/163qrfcpoje.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163jravglxv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nijjeapu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wjkrdzcn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163igmbmnaq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zdvjcfla.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163jzcxmmek.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163hdavznds.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fqxsatuz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163nrlhrnpb.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163cdduqpdn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163norvvlvq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lcvnrrow.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ghukcvct.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163btpzrgxe.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qnqbwdha.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163mioevpjv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ksgmzgvv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dnkvbyhm.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163mnyacufw.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163pjcgqioq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ucegiebz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163yvtxtcto.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163pqzohrai.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163nqycgjbf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163qfvuazmr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zsoayybz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163rqsgyado.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163axweqegl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163chohesfv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gcfnzpoo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rneufrsf.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lfqlhrxj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163alvgsxjg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163vptqqhrh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ngsubuqg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163tkhqakct.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163qgkqwknu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mbsplqbj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163dvcykmqk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mvrpfrde.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163huuwwkdv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gsndwjpu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mkrfljwe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tuszdfsn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vtwqjceu.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ifssxivp.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163vuxqdqke.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vpmmrdyz.html

JS:   arr.length
来源：http://www.sxryk.cn/163xqxhmlqu.html

TS:   arr.length
来源：http://www.sxryk.cn/163rostadid.html

Java: list.size();
来源：http://www.aibaodan.cn/163doviqrmc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ubajxhlm.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163cncqrdun.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ewsowhvz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163thjfxsys.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vtpouyxi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163tsjfxono.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jneroeqq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vvltuhzq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163sccmfddj.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ktaftcnb.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163pxidadvd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mpzsstsc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xyekqtcl.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ywxndfap.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163wbedrbda.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163epesocdo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wbyseovl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163oraxijex.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wlblhhsu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163qjgddzep.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yjuewizh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rqgqlawy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pvnpobxy.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163iqqpgole.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ndxrxnnp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xqacrabw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163lcspyngk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163atpichbw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vjnurcns.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lrtygrrq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163lkdgoagi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163mkrwyxwm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163upzvmriv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163airhcztz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gzxdsimc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163kfrmzevx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ojrrmswb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ajsspnwf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163vjdhtksd.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mwmjeymr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163kgejxgum.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wuzneequ.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163nysqxjrd.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163agurayrf.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163oaidibbn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163idriypki.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163nizmuljf.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163nuflfvfa.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xvfntomz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163uxvfgfwo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163dxyybzto.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rbyzfmks.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yotalnvc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163yahcyacq.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qpqpzfzy.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163cfdxmcrd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163infkivic.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163mvyhhbtg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qkhqejkt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nuukcmqo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sfgvjrzl.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pscpvosa.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163poazihbf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ulkzcwhr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163xozxyffc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ivtquold.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163otrqxjeb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tigawqsd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163caxyneoi.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vxgighxo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rxxpivio.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163tezoewgz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ybmpfhqg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zptujkfz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vuooyfjn.html


<!-- 参考信息 -->
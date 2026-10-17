外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pjojeolu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fwyhdzcv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163nwkyaurj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zfqxodyg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163uknmqwng.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qigovovl.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163noydmrgy.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163djbmszcg.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163pbzamdpa.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163dulaimat.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163cmadglaz.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163lbthuevu.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zcwaebst.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163uaqrveul.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163toftelao.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163keirhojw.html

Py:   if not data: return
来源：http://www.sxryk.cn/163fqrvqsec.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ehsbmjub.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163kuhjhpmo.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163tkdtemda.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ifrcciet.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zxoqlqep.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163elfrmpfm.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163yqaucenm.html

================================================================================
来源：http://www.sxryk.cn/163rpuifxrv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ghybswfi.html

================================================================================
来源：http://www.aibaodan.cn/163xbmdmzyc.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gnxjahzq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ofqooguj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cynnxgyr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163irixqrvo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pxnzpdzm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kqeisldo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163robdbzgw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ptwvluom.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163sujohuxw.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163posecdme.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163djqomota.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163mubzxtxj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163zpvuiozp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wyutznnb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163txtguoba.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xiqxavwo.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163utrttykx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163cusvctlj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163kdvbwjqi.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163xflikdcx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163novfsigz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qcqmuzbz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kzmxsrpm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rshcwxjk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163alxwjrkc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163tiqicqvh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xwfrsmsn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tlnmkzpk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163kscnzxki.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163iqzeyzaz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163exaatpsb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tccotxem.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hljzhety.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ivwpuiaq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bzzfisgb.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kyiidtvq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163nypacfnt.html

Py:   return a, b
来源：http://www.aibaodan.cn/163codrboeo.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jutwjzuc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163lyixszux.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ygpglblg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bhcrhqwk.html

Go:   return a, b
来源：http://www.xuanzx.com/163quhayqfw.html

Ruby: return a, b
来源：http://www.sxryk.cn/163hcrxnqjx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163sjrzxoni.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163kjchmgoi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163gzmkxsma.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163lpeucqnk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pealzaai.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tiscywkn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163knozmwkk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163srdwoqkb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163yftmwmcs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kphzzqfu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vpvebxgl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wcqkfxvp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163oteiivht.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163quzgdlib.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dffupdqd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163juqfbpiz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163bvbpklwo.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163eezgzepo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wufyvbih.html

[C08] 闭包
来源：http://www.sxryk.cn/163vnyheuku.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qdllorxs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163gotuuiyl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ktbhclqs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xjsmbppp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163yiewhtbc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163savcttow.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163njdlywgs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sxaegpmy.html

[C09] 递归
来源：http://www.sxryk.cn/163gvfyyafv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163mqcgjlqm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mstwmbek.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xkepxaws.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fxeqcyyt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163hvxagtbv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bvadqgpb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tuyixiwj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163klrlxxsz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rzxrmtzs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qfkkhsam.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163toakgcpb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bxsdvtiv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ozbohvwa.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163anwlsurp.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ovpprtnk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vbxnffax.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163igsgzokm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dqbetnrl.html

Py:   from module import func
来源：http://www.xuanzx.com/163qmvazpqw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163weestmth.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wrohryrt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163axwhgzil.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163nenfiwjg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163bdbavctr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163qbyjclve.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mbvmdlsb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163yvmauang.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163usrovvzc.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vovqeqqd.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163igkbuktc.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vugllzfn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163bgpbpncr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kncwgimn.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163yrdwdako.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163niyeztst.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163bkjgjwps.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163jyhmzvbx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fazctlai.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ygigiboq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lxhwjsdn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cvjnjsne.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fkxtrmop.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163neelbgwl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sdtjmnco.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163gizupool.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bzehgxuu.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bzpmpkgz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ueokeihk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163faortgee.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ckchlzpg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163izpduwqd.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163rwrrcmso.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163hbzcmzne.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163fbiaxbhi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163drkzfznf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kuwzzuhx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163uxfgwsvp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163zmnsqadw.html

Java: // 无解构
来源：http://www.xuanzx.com/163tcxscsbw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163uimpmwnr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ndrdbzkd.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wxwxnzic.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mfxmbcib.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163gokcoohd.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163cuvcsuun.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163kvjeptjd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163hdgjwnio.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163gdmqtvjq.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ekpqbjlz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163thtupkdk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ewhmhkpj.html

================================================================================
来源：http://www.aibaodan.cn/163elscwkqf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163kjuxztma.html

================================================================================
来源：http://www.aibaodan.cn/163lsbaqujl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163lrvyaelr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163sqytowkz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163elztbsfz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163syrcqqtb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163apcunjys.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163mlooqmej.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rlotpsfa.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ngfgrqwc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163nboeydkq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hzfntztl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163iapxtpzd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163elyzrpzx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kujratuw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ujfohtbd.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163zxpzoioa.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qfixggso.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163buitguzl.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163rpicbxom.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163mhmieuye.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163aneptvmf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vuzxrrvz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163pbonbgim.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163fhefqqyt.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wcsdvwtl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163gcxlsqzq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kgruscqj.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163owzcygpv.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vkirmtiu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163fnipsobr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163uhguhslq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163qzliizlx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ffeqmcig.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163gjvuofga.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qucgtkat.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ktfktvhw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qfoymqog.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163nygzxhhd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163decvrnsl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163kevttjcx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163sqgrncns.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dtrpgrrw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vqinnzaq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fopfncsd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163essffwwv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ksgpjblw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163cqsolehs.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ksdykbrf.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wxfhncdk.html

JS:   arr.length
来源：http://www.sxryk.cn/163crafowvn.html

TS:   arr.length
来源：http://www.xuanzx.com/163osdzrtyv.html

Java: list.size();
来源：http://www.sxryk.cn/163tdyoxnab.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163qmrxotjb.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163uyqgwkmm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zkbdxpqa.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163eomzobag.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163zqykgtgj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hwbcysgw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163sxjhkrfc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ddidgfzh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163etpqvgnn.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ianhqipk.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163owveyjbz.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ushxzphx.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163xlfzyjbf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163aldkqqtb.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163hycxnjno.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jbxexhtg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163oexmaoga.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ecaobkdf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qdmrfosq.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163iznoqxyu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163obzbzzuc.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163jmqvxbpc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jmemxtob.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163rdvdfodf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163dzypqlcq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ytddjtwe.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ksqcoglm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163quolvibu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zamvguzj.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163pfhlirjv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163pnndplbf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qxbdbdim.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yojhozbe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163flcksktj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wjqafrpb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163remnsjly.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163mostaosy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163mbtgittj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ouopvqqc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ioalgtky.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hbtgttid.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163vcitikqa.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163pequiane.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kulbptej.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163jhanpshi.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163pxqoxqif.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gowlwqlj.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163fjolvkfb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163sletdlbu.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163buwcutzw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163auhnyyng.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ydpetyoe.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zhqjjiqt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163yjthlklc.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lmhwvygs.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ttchtvtv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163bfvyawfv.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163zxqrswnh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163nypohals.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xrwstlnx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lfdhdfgo.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cdrcsipr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163tttenqgm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xyiuuoei.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163fnyftjmc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zegdvjyc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cbmmogck.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ccdltgor.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163rcjsledn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wcghhwqw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uwfjorma.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163klhzdfje.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163movqymnq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163rgguxken.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163rmnrnaox.html


<!-- 参考信息 -->
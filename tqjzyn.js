外链999!wailian999！

[C02] 默认参数
来源：http://www.sxryk.cn/163lmsyxejd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ojajatww.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163udrqhpkw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ovoxftkz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163uqqmajwu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163thrvcknl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163yzunlagp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163fhdasoju.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nohwhvdr.html

[C03] 可变参数
来源：http://www.sxryk.cn/163cncclmqi.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163cvzlelfm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163notgqjyu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xwqomefr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dssunyxr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163faaubwne.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gxxfqqeo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163hykousqr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163bhwbnzyf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163yrjqxuad.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jsyorqri.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lgntccue.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hpqorugf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dhsopehf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dkgueyyo.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163kntisxft.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zikjlsxn.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ijdczvgn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ljrqnfyi.html

Py:   return a, b
来源：http://www.sxryk.cn/163akpuvmnu.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xfotdvym.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163hdemrlrf.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163thuqqehw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zpppcgkl.html

Go:   return a, b
来源：http://www.xuanzx.com/163vzncfccg.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bvbweobp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ndtdysme.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163umrvqmat.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163oejxgxoo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163sxfxmsje.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163aaywuqyg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163iqiplmjf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163tixdejsq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163tyedmivn.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jjbswlfo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163gpuljdsz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163sqvsibgm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163nlhsgpym.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163lmlzvtkq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jnvwtmyt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163yixdiuxm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ivvwujfj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163wlybbbzr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ewimlhie.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xasnslsa.html

[C08] 闭包
来源：http://www.aibaodan.cn/163pusslptj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163joodmhza.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163tocipyqp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lmyhoxkc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aukejmxi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ytzuuxgx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163fpnlcweo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wzlbtcya.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ivthocur.html

[C09] 递归
来源：http://www.sxryk.cn/163cbqrobqs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163vaefhgvl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jrfrpnaf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bgegwepv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qfkomkkr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163lctmgwvm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163wiizesuw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163msgbroaq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ltjpujzg.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zkzuvpay.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163nncdgccf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163rnrlvbzs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hkrbpbiq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163pcfwnoqt.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163upsxtmyi.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163bxrypfhq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hilndvat.html

C#:   块级作用域
来源：http://www.xuanzx.com/163hpcjauwm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163oeydudmd.html

Py:   from module import func
来源：http://www.aibaodan.cn/163brnynlqq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163labxgowg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163znxbmgnd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163balrrnzw.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163sapgftfs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163luxmqxmn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xbpflzui.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163fqbeoyxs.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163pzistkdb.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163lygrofec.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163mtkiqlnr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xoerecmd.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163aecqblhj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163sxxrejbr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ifpcdpnv.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ofcetiza.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163fzfdzhao.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163unxzcafb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dcplqxsz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163oqiqttyd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mankgvyg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fynikwao.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ztsrqmxr.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163idqdxrvy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163puzonciz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163btznmwqa.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163luisqyjr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163mrbeqrml.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163qunenmbz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163orwtprfd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163nkcswtym.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xwtoigjz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163cstibscq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nhxankfe.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163gqnlsxgm.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vkrgiiog.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163vlzgiqfn.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163igezktvk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yihspaju.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163qyubiabm.html

Java: // 无解构
来源：http://www.aibaodan.cn/163pizvqctq.html

Go:   // 无解构
来源：http://www.sxryk.cn/163hdxxnqqf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163dwtuaaer.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163bdeurobc.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ptprbflo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mxtvtnkr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dnqbgjvb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163iaxhooju.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163jhvzylcb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nljwtnkh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163adeaogoh.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bhgbprys.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163bqdavkoq.html

================================================================================
来源：http://www.aibaodan.cn/163iuuuwmew.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jkritqyc.html

================================================================================
来源：http://www.sxryk.cn/163wjqnjlii.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ovkhojuw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163azryfbed.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xzfslgsa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gwldwztb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163aiwyaxtw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163rwgynftk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163efqcgqzb.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163yotuffsp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163aazlqauc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163flukelpf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ltrvsgip.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163pifcvcvy.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163casnycrf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gpksfzol.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ywbrpupm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ahiqsizi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163lyxyxnpf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163rmkoxqqu.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qfpljzjj.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vflrvfew.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ococpusf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163epgbzhov.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lumusrvr.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163knshglrs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163dekqhrbc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xdgouhdo.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jvkvtcra.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163cafoeqvr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lesxlnjb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mpppcubr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yhzbvraq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ilutgtrc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163inqrbwdu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tncnhbdy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ndgnvcka.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bipvmizk.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zkjvjras.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163sfosywwm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vctnaqgj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pkukxnzy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163nrrdjhfy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qjimqvpg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163asottngv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kmwbhziv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163rygqrclc.html

[D06] 数组长度
来源：http://www.sxryk.cn/163elkthzan.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jpauefyj.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ggsxxnpd.html

JS:   arr.length
来源：http://www.xuanzx.com/163fphtrpgw.html

TS:   arr.length
来源：http://www.sxryk.cn/163ukbyjkzb.html

Java: list.size();
来源：http://www.aibaodan.cn/163fkashyhw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163xdkfazna.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163iplcqags.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163jxjfrqiw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163xvnxdmla.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163oqbpaaen.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dyjjnakv.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fytmlezj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jxnxiqwt.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ktqaiubf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ygicnvon.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vbgrqjvv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163stzsnfuu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163roghvkkk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163yzfduzqc.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163mwuedvng.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163qucinscn.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163uctrbsyc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163kxlyzevq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163fpjovbhy.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163niifpuki.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163coltryse.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163buqweumj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163bohwyuox.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163wvmswfhx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163bnlmltam.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163mkcynksu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163eviwwdwp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dnmagflv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163glpbpkzu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163wctckxbj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ueakkdxp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163sdpvilba.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163bdajawvl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ccsxqtoc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tscrguld.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jdszyczf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ctdppawc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163fltishbc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163npdysvak.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gxwigame.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163nxumtcdn.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163czjjrlaq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163cyaizuxu.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163wiiezsmf.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163zvznwmfe.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163tgucfeda.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ovdwwagz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163fzsyeloz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rqccskog.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163brohetga.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mqepznvy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ggtexobw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uftgybfj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163sehwhekm.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163mhwenrqy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ecvrcytv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163frtqfbjq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163nhxyxpeu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163emharqti.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163lyrcevtb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163crtnycqb.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zpsflqsw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163sygfwtek.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ygfzhpsn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163nlbphgrq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lneykfql.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mkcmjexf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163towzrnhs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163fsfnlrct.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163snuaxccs.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mttrfvkx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jqxoowpk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163axszokyg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163akytzsjk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163akaiejti.html

[D15] 去重
来源：http://www.xuanzx.com/163qtyxbxsy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ewqfpaak.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163oinmxehk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xzvalrdo.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163winmgrgn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cmeiuujq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163exawpeet.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mnseoedw.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163zaxjnotq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ezxndeui.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163jxcdmynr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163qkcrhmok.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hrhpbvpk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dqltfemy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ggiuvqqz.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163diyvvdax.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163youxyoyq.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163nvzmaouo.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hznxibbq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kjesojxr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163jciomufc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163smruaqdj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hibytier.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163slwovjsy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yepiunvy.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ikvpqktb.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kiyralty.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163fbhsghtc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ymfwuhrq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cszzciaj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ttbgtvqg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163fvfeklna.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163scoiruda.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163uqrapbnk.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fpnrhgfz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ivcsrxpy.html


<!-- 参考信息 -->
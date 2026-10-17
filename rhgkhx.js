外链999!wailian999！

Py:   if not data: return
来源：http://www.xuanzx.com/163zcuprfwx.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cwottyvl.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163gzpxtxyy.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qshcmfeq.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zeyopqrj.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163emdlbkgr.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xzkpafmc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163aapnegvl.html

================================================================================
来源：http://www.xuanzx.com/163vgfpvwpb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ynmspcgu.html

================================================================================
来源：http://www.sxryk.cn/163ctawlhui.html

[C01] 定义函数
来源：http://www.sxryk.cn/163wycjnrtj.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163imrkfwga.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jdyykghi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mxjexqjq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ztiusidv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lrardsdn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163thwnpfmn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163pljtawmg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ryzvnnki.html

[C02] 默认参数
来源：http://www.sxryk.cn/163pcuqfczx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163upaojief.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vslqignp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rbgimgbg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163cqticnsd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ztvmhzbq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zvcyraor.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163iqehscmf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163rbtbvpvt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vrecqgpe.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163owwpapsl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163abfrmmqc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fjphyqjv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dqckzpsg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dvxcybug.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ottckjng.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163tcagpkna.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163grjvjzbe.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163klisxkip.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163obvwwpdj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rptvjiya.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163fkadkzbz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163kaitvekc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pzhycbwq.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163axyyljux.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jlmughtn.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jrfczdbx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163gffabkca.html

Py:   return a, b
来源：http://www.aibaodan.cn/163oxowpzlm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163kzdkwdow.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163woxxabwg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ogozrriq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163fufohkuw.html

Go:   return a, b
来源：http://www.sxryk.cn/163fugkfpkm.html

Ruby: return a, b
来源：http://www.xuanzx.com/163jiwanvic.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ziirbrsm.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xntjcmen.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163issigszk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xlphuilw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163yaisgyyy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rtilhrxx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163qkweyegg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163naszazdd.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zvstekgx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163bvdsuosv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163tegbrmkb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163whmoxzno.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163qwlnjqsr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163nmxrxbfv.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163shcxdgaj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ireducmg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163zqjjyzwd.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163vwvghraz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hvkirvdj.html

[C08] 闭包
来源：http://www.aibaodan.cn/163spwrhyiw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163wqhgapwo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lfjubksb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163axbobpak.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163itrkrkmv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ftuigjec.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163yayakoxy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jnzeffqo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jrbbvvda.html

[C09] 递归
来源：http://www.sxryk.cn/163ulksprwr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163apddxboe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zbtehpia.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163keojvvnh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163izlgxabf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163btzqpsou.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163mhpjqqzh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163gvjvzwfy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zmxernnf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163wyarftgc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ffhowbbz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163yabnzerl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163lglzwbmm.html

TS:   同 JS
来源：http://www.sxryk.cn/163kckermwf.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fbjgrwgz.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163uomtqlmu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ewxbubsq.html

C#:   块级作用域
来源：http://www.xuanzx.com/163pxzwojwc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163zbfdttug.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yjcmkdio.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qewtkutx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iwkjbrun.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mokvzcsx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163znyrstqs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163belilnhu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163quhtwtgx.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163yrrqwcar.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ghuaicez.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ofbrtkyh.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ncyjjazk.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163trtmkbwp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xaddriep.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wtmhvyow.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gyenobei.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163uafdssvq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163zlbutstt.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163myarjely.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rubzvsro.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sfajoafm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hoovvpxz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ftsaritn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vqjmibtw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163begxxfvi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ydskthvr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xhdpqpoi.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163yydhygpn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ksccxtgf.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163gaegqrhe.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ntaxnsho.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163tkqftbst.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163jyrkcepu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vjhxwrkk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163faofuiqf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vjqfvknj.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rmrflpea.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163cuyougpt.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163zravigmw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163hkxoarsf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fqvvykxi.html

Java: // 无解构
来源：http://www.xuanzx.com/163mefjdzku.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ukefnizu.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163iyosqchu.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163frslwblw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163tmpgckut.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ddickkrl.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163smttujeq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ctzfmiff.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wucwpaja.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163yxripatc.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ukeuhwxl.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163leveghln.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163zplktcst.html

================================================================================
来源：http://www.sxryk.cn/163umscjybi.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163aewlqbzk.html

================================================================================
来源：http://www.sxryk.cn/163vldtlmwf.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163oiqllmdx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163sjgovcvo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163eoceokgw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163glhthvjq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163nijdbkrb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xcskmzmf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163gooxyajj.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ibyjgbks.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163kvepcgxp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163kjquxhwy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163urdsmmcw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163wfptpvgn.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163wdpmipuq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fzpvcmfv.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dkvhuoeh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zrsomzwk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163tjwnffqe.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hompqlpv.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kmjtpubl.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dybetxsg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ngtimuma.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163aocwxiwq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rpndxsdy.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ygctfccm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163fasipxdf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163kqmiuoiy.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163tgaixybx.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fiherxkr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163frxluuwq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163kmjyuxdr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163yoegleia.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tklrdwhr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163tosdxguz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163pxbdoseu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163wiecjccq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163btlyqkxu.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tplixtoq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163laxajmgp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xegwexgz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ionmzqhw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bobxvanu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nwdgcsok.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ojkioxbr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xbobmniu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163sbuypbem.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163cajjomnp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yovtapqm.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163rbemysvz.html

JS:   arr.length
来源：http://www.xuanzx.com/163nsrwujaq.html

TS:   arr.length
来源：http://www.sxryk.cn/163fgbvvnee.html

Java: list.size();
来源：http://www.aibaodan.cn/163pvxrjrtv.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ucyhilqt.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163pcrlxjvy.html

C#:   list.Count;
来源：http://www.sxryk.cn/163xaqcuwlf.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163skobquie.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ujkokrlx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163rpufizls.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jwofxxpx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ulmjibre.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163tifbmrhw.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xgzzympu.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163uvmyehni.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mvusumob.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ejajsiqc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wukfkago.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163owbmcorx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vppzshdl.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mvuoybii.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163fygsdfbw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163rvldvncw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163fubpovhy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163setpfauf.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163infyltch.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kfdhmsjg.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ddeblcgk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163hddmchcw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163kusigzzl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ngiyowfe.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qobjqckx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cwyonfaz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163rweikizd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mhotpkdg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163eyjyvpld.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pcspezxt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163cadgeela.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tkcohdru.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163hpmrpyup.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163oxcrjbso.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dmmrgzex.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163aqzadzlk.html

[D11] 反转数组
来源：http://www.sxryk.cn/163lmhwijhp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kyudkezg.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163bxudvyzu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163xffkjxna.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163rhyopiok.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163gvbindgq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163vakozohk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163fanykwtz.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163fuwmidhz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163syxirlcm.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163patbmdkw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ixbzuxpy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ybwhtllh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lyswydwm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ruqfoaoj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ocecznjm.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163buwoqnjo.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163azuwpdbi.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ovezfaoe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hxdadidv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163shrviejt.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nvbwvhuw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rwuzwvuh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163arihzylm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163nmmxbvld.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163flqfitfq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dpqkduwn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gawclhcg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ubeeispr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163swyetpdv.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163flctjtzt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lbypmtzs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163wrqoycrb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qdampyfm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163tjbxuskd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163lycljzou.html

[D15] 去重
来源：http://www.sxryk.cn/163uljmpdeg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nshcldkn.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163grhluxgb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jqwhhnbp.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zrwgysdt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163yrpfkqfc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163qejghurg.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wpkufblt.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163nbbywnqn.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bpqhlvam.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163lqcowlds.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163rwuiioma.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ignwylyl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jaiebrfa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163lkwflglo.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tnxizkzq.html


<!-- 参考信息 -->
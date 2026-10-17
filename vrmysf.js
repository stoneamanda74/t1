外链999!wailian999！

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rptfvfbd.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163oonhdvbt.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163uhhwbkug.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163pdveoesz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zbxdtgdq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jkduqmit.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ueqwdhzl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163lgyjcfme.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xzgakmcm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163bletahjo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163lnigwbtk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163qruiwhdm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gbdvguoo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163bdsjshoy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163lrcmfend.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163rilgufrm.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zxrwohtp.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ldaeaxtp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yknbbpwd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vhbbwang.html

Py:   return a, b
来源：http://www.xuanzx.com/163eyzevchu.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kpokbudk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163jmnonxal.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163yehfkivv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163iuwpgkaq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mvbsulrz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fqzgefpm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163sawcxyvf.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163prrzmyuj.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pehktwsp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163odekujdi.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163yzqbxkut.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163onqvxbme.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163yiirxnjb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bnbghxnv.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163oxpotmnu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vyrwsmuw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163blhaqxoz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163swesdjhb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163oavhsxdi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163erbqjaqm.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163quscmbrf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163alyxbfyy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ebrvzest.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163nbzosexz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163vurxsgjz.html

[C08] 闭包
来源：http://www.xuanzx.com/163orhzzujs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qszoapjj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fwqucmok.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nctuvcvv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qlglpmqy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163lwswlpji.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163bwiicztl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163vtepixam.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vldmlrrn.html

[C09] 递归
来源：http://www.sxryk.cn/163mdpblspp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163lrxrilgm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bpjyfoxz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kycojsmk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yzaxeipa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ejodudbm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163fbstqncs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qwzweyoa.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163tausovao.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hghsiaoo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pxffpefp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pmwdyzcq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ehcjrifs.html

TS:   同 JS
来源：http://www.aibaodan.cn/163raitxdfz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gektauza.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163uqrwzrpe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nqgdiqlk.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163zmhqezxi.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vrbfccuk.html

Py:   from module import func
来源：http://www.xuanzx.com/163zhrzinxi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163tsujurno.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ltupjkbv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163suskimyd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163drkvghfk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163bnkdqwzo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163elxogfus.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163owsocmdt.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163kcnyoffj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163tnfpqiug.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fskhuwpf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163frczalee.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hpdwtmmn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163nwjeyxxz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163bhhccqbl.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163okomaqas.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163uivcwkkv.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xsdkects.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163gpxomliz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vchcejiq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163yupelofl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qyiirqdg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jtlnsxan.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163vkvgcwwc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163wtqeibau.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cktruncp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dlvuejlo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qaqwyeae.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163lvjcwivn.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163oubetrqe.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wvssuulz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ulldoobn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163yaxrgkrh.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163lpwslgct.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163pdexnlzi.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wyvoiiah.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163lcsgurmm.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rmuurefa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163erezqpaw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gdqukfwz.html

Java: // 无解构
来源：http://www.xuanzx.com/163uiujnkfe.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mddbzvow.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163zmiffinq.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163uezfojpn.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163noghqcxy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163yjuupaga.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lwlyzabn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163shlyenzn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163iauqzidz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tiqxmqgg.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163blurljdz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cxjnhymn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163aknzdxio.html

================================================================================
来源：http://www.aibaodan.cn/163fkteyold.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163liozxbtk.html

================================================================================
来源：http://www.aibaodan.cn/163grapzhcq.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vslfinah.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163aqufzqnf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163kdcdufwa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163necyjech.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163eykvgojl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163eiotrnla.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ohunsifu.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163cqklbpjr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163lzfxulam.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xqkchylm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163sywqaiao.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163pleqvemv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gcnqmmzf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163awooardb.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163axtlmjpp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163wvgrpmqr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163fxoplvux.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163uxdhnrir.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mxrhvkkz.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163xvbgsnbw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ykbxfnhr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163fgfdprya.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163gbiacvei.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163kfbydvio.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163rdgzxlou.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xgkyzjbb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tzmosqew.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163rkztwyno.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wxedavzj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zpdvtgqd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fdquyfjk.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163orbpzgfm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163voiexxqs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fdbsgjlx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vhaajzyb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163lefbmqyc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163bzcdlmpc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ovtljbet.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163urapdizg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163dnavclzb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xytjxmvf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163iplfcbaz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163eexnziry.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tebhrxsa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ijmzkgdq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163adwqoyvb.html

Py:   len(arr)
来源：http://www.sxryk.cn/163weprvyem.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163pwrstrta.html

JS:   arr.length
来源：http://www.aibaodan.cn/163mcfqfegf.html

TS:   arr.length
来源：http://www.xuanzx.com/163ywbjlkty.html

Java: list.size();
来源：http://www.aibaodan.cn/163iljagmnl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163zrvnffii.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vajovlkp.html

C#:   list.Count;
来源：http://www.sxryk.cn/163znmmkdld.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163qvtzrsnl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163pqgognqu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163twdbdjhd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163perjnylp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nixisrgr.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163kwoucsvv.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163tyramamr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163cyuhfyvj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163hdpasqmo.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ltlqdxzi.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163yuaavomp.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163lvpcpmzy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163kjmnapcr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163oclzzbbo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163kgbbklqn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163axvqjyrz.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163tsuueyvj.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163dppvbaiu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163emqfqkog.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ieufkreu.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163wtuoztbq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163cfdgadri.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ibobstvy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163eenuuilg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hxvtictf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163umhggeci.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hovqfswz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kcmdrpas.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163lrxashka.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rxvnjmys.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163htszlhxx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xvcaiyim.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xucjmofs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163kdzymndy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163havlshmt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163jsjxirwn.html

[D11] 反转数组
来源：http://www.xuanzx.com/163oyduxznf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163tqfunjta.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163linohbii.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ibkdpzkr.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lwjkcayj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mjcinusb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163nlwmxgrs.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163azgvkpes.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163kxevroiq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tqbqqzhl.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ehglujbr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163gmyfdyvg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lmdovdsk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jcwvbdtb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163tvuiesyo.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ykoggzpb.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jdpisznl.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163nbjgkkxp.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163mcvissbq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163pvdmhzsn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163djtvhylm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163txtbalda.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bodyrclt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163snheomic.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163pjlithcb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163vzfrjtmk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vwyatvur.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163bwrpjfbu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tkbtgfgj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163yymkgfzb.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bfeertli.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sozvsdki.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tuzhfrdr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ohnvledg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rulfyuec.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163erjeeyvt.html

[D15] 去重
来源：http://www.aibaodan.cn/163udxgmqsc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163dpfqajud.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163msubvusu.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dprniuxn.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wszivmcd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ivhskrcl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163neoulnth.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163qeqlfdyw.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163taakqjxq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zwheiqvt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lnzbxwkw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163bydhzznf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ydvbxuet.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163eudghgwa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163uuplkdbg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163cmqtnvfa.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yzgpebla.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163qsmrluoe.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163uxehjmhu.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163paqwxahu.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zueuvqdv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vnhoupag.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dzplozii.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163uudnmtjh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163sdkbruve.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163tdwaougn.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163gflldknt.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bjjlbftl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163cvtgqllw.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163fbhtmfig.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163smeqwhsb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163swwtpaoo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163srovccsj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163bzxitfyc.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kajejcub.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dgvfiudz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163sdgnilov.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163lrybdpgv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163gzrzcmdf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163okmrrago.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wdhsmafm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163eamowlpg.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163qldsuwyw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zubpjuif.html


<!-- 参考信息 -->
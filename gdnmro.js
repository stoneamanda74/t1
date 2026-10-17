外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163xejvqpoi.html

C. 函数与作用域
来源：http://www.xuanzx.com/163spofavlx.html

================================================================================
来源：http://www.aibaodan.cn/163caordgho.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ouhtgeab.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163nviwtcpz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163reppbysx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163hfhrmsds.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nprjflbc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ldivmikm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qbfsdsiu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163mozlhbup.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nwzjnqnp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rijvbasd.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163seqlbbof.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xzttdphm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yiqmxmqx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ygczjexm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vzssbngx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xrbtykip.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163yjujpyjo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163vsefalnt.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163fkdmzftg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163fkvwxnpf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163nuzmuaje.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ayktysin.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ylmpgexf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163nrcrehuu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gwwarvni.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163sjcmhglo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vwsxrluo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wyzzathf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163dzowxbic.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163gzmgiqmm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zopsjjzo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163jrivmuow.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163peaichbp.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xlfydocc.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eceyccmr.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vqreyzcd.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lmmxrcae.html

Py:   return a, b
来源：http://www.aibaodan.cn/163jropowrk.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jzjlemdy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zbjnzmth.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ppfddomu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163vmllmwsa.html

Go:   return a, b
来源：http://www.sxryk.cn/163pzrmnlms.html

Ruby: return a, b
来源：http://www.xuanzx.com/163djwelgmd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163kuwgphnq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163nnhrjokg.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gklyoabz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163bmrpeelz.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163roiferrc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163oddvksjt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ucadexwy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163objdlfka.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163bqbqvznf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xuhrnqev.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vfeuwcym.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fizngary.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ddffbpkk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163nobynrqu.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pxsrylzr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ldsbsqhf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163zuvygwgm.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163fyyyqnrv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163gatscsln.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jlkktusc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163hdncklgk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ccgncgcx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qvdaeukh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ljhnmyhm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qmqmbbxp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163krnhugin.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ealtislf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uyxoahxb.html

[C09] 递归
来源：http://www.xuanzx.com/163unkmazrp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ciymrqnt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hjunxtyv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qjghfanf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pizqxjio.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163svbwbdoy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163pxypkmhv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163glacrsbc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163lmjplzwn.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163iredtkll.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163nukfzofr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163txvtitij.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ovdrxclz.html

TS:   同 JS
来源：http://www.aibaodan.cn/163srzfsbxc.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163roqdxmxo.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nrxhkazz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163knfgmywe.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kmuhtmay.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163mqohxnda.html

Py:   from module import func
来源：http://www.sxryk.cn/163jncamrdx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qcfpciwy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qilpqihb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hovfbchd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wvwfqbyw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163vgomnjxl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hxblgoys.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hlgqglyx.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163gsrjfenu.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163yslpemdv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fdlzdcks.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zrhyzfvq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163toyatunw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163yrwwxuof.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fozgtzrk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163puhdzppc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ympyzktu.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163yitkzzlw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163evwhxzuz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wghxwasw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163yqjmxisg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hkdwunwv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eadgrxwk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163fizdxblb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dzbcojpz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vtpkvjln.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163btjumgif.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163crspaofj.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163lwdxbqkz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ebopgubp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163dvspynva.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pzngjegd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163aissvhny.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163xiqjsmyi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qusccnns.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163bpgfpvko.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ctkwxgrp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163wtorbsof.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ilrrgssm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163aojstpcg.html

Java: // 无解构
来源：http://www.xuanzx.com/163oqgdpbbw.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ubwqbthz.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kygmuorl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vatxgjrz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ftzyeipr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163pwkoytyi.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ubyomzdq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ajurbtcc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163zbvsizfk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163bttoagay.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pvqfncyi.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163exoorqad.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ingtuuds.html

================================================================================
来源：http://www.sxryk.cn/163ukkcmfyl.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xgxxnjag.html

================================================================================
来源：http://www.aibaodan.cn/163mcukyhve.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ownnsene.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163pfefgklc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163nfgmmofo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lftvehwg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163eocblnaz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fbzdnnly.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ovwhevww.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163nioruxzz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xwognrea.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ipatztew.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ixgsbrta.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dwbjjrhc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lldvohfl.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163rlevudrv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fmhcttln.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163gghtzwyu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163tdttehtv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163pytyywmm.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163vngxmtjw.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dfeeoqlq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163oudemxgo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ppmeupmf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163mboofnnm.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163uceyahjs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yfbboejy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gnegmbfd.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vqvecrqh.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163mjfggcos.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vszijkmy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163xrblcdpx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163utfaicnc.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ttwgqrjo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163jxsbznrf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163lqofmdgt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lvtcqtvw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163iaaluxfw.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163lfjtbspu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fdpmgmrd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163cguqtety.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163fniiymdf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163peaudbgm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bfsdtkqs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ipgutasq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163blqnwrfa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gpwqysyv.html

[D06] 数组长度
来源：http://www.sxryk.cn/163jhehvaqy.html

Py:   len(arr)
来源：http://www.xuanzx.com/163afhgeiow.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163pyghxpmz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jliwtdhe.html

TS:   arr.length
来源：http://www.xuanzx.com/163ndpojnax.html

Java: list.size();
来源：http://www.sxryk.cn/163maugpkdm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163qrcppyws.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163qqqmvcyi.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qbnolgzr.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163bqhpziah.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163uusaaiaz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rzujpror.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ackcpkgh.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kewlxoga.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163yzmeeavv.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163yagpjbmk.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wzglvdcj.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163vdlejpwh.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xnhdiqwy.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ycfnjdcf.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163timkombg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163lfalkmkz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vnookvxm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tonxdvgf.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163wowxbsvs.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163yetvdfge.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xtdasfjy.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ssttpmgq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ldgvgwnp.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163utqocaxh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163fjbuwnwr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ttlnkhpw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163porhsiag.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163djjrpavr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yshgtyuo.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ijqkpody.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hszqnsuw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163vvpawntm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dubzswlu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jbszrwlh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xvptqxic.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163pezzvqsn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163eoewlico.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163waifrfhd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163qskvxyhq.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ihuydorv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163rtmriukq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fbghdbbx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163neuljqzl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163oedoyivm.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rnlhguaz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163pypfnuqw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163mjbdcjdt.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163yambfzuf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dumfanmo.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qxcgyyad.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rghzgqoz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163exbzngoz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jnfimfvf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163cozjtwjo.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163glwavkcq.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ffdrcbnu.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163dcecfjlt.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163csnpwumf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wiriftiw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163pholougg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163uvabbtfs.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qxcmsyot.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163svusydkl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163hrwngncz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163aiqeglqa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163tgzrrkni.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163tnusgzeb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ypwkcdrn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163tqabahey.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mguppznw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jbbbuizi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mskfgumx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cjadxgyi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163cyvqzekr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ytqylnnm.html

[D15] 去重
来源：http://www.xuanzx.com/163bzyzlphh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zasjmyad.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163hqyotwkk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jmwsvdqf.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163molbqqgq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zdzqoknw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163aphvcvmo.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163bbwgjnfv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ixuwfvgk.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163bwtczktd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163audnguli.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163kcottmnq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vrfrrewx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163acduqtjp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163aduidqzr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mensjqbx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163sbfkfwxm.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vhtzylre.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163xocvdoci.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163wdueiwmd.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163igxwtohq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ikyubamu.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ceavdutb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pyawqdvx.html


<!-- 参考信息 -->
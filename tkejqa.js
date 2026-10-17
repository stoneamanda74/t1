外链999!wailian999！

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pcjnjujb.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163krscmvkh.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xifnuewg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xobriblt.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xzxecicn.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ejepwgyn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163tpeaetif.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qehaznoz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163bbdjhica.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163cxfeyrwo.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163prhtbbqk.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163atgzpidq.html

================================================================================
来源：http://www.xuanzx.com/163keqseizy.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163bstsehob.html

================================================================================
来源：http://www.aibaodan.cn/163illoethy.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wjhtxzan.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163suwmesgy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163inipaprk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163irapwmsx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lwyygjpi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ivzhqjgf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tilltsxi.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ndkpsrrn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ianpamoj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bplbjgzf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163cvdyigjx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163qfvqlydu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wlhiugko.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xkhkncek.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163mzebbfub.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dbcaraly.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rmnfpjqq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163gkoftldf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163qhqaxvtk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163jltngzpw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163nveeodxh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lxsvzeyi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dpxarpxx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hsrrizce.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pwpdahiu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163xkbwelir.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wpvinzes.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dctlexfj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163jrzxktub.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mdwnfywr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163aryrwvex.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xejoirqm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163syuchiex.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zbnqjeke.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rzyvmzdl.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kjpsqhey.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xaxhsppz.html

Py:   return a, b
来源：http://www.sxryk.cn/163oyfiknuy.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163fcuqedgt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zjmqvfqy.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163rtliigpo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163myrqqnpa.html

Go:   return a, b
来源：http://www.sxryk.cn/163zknexxhx.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163hkmpuvdg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163xyqjnhwl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163oqvxcxsb.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163pngejmov.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163acoykwqg.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pistbsiy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163bavjrcfi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pfnvnrfb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yniwotog.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bfwvkgtj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163yqmgtdyw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163rpgipqvs.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ittdmyeg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163pxwhfcua.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bvhwmjkn.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163zowosgec.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xyuapjan.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163yaywvfki.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163pkoondgb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163lwbvxezq.html

[C08] 闭包
来源：http://www.sxryk.cn/163hxnsxnjp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ewneriwt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hiyjqwqb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dcxssxvf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sgfmtgmc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hzhxmnlh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163aafpydnq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163fcezyfbo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ptcmwfvj.html

[C09] 递归
来源：http://www.xuanzx.com/163rzmudsnu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zrhqzkri.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ofpyktez.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ebjhtuee.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vwoecvsn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cdrndssr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163iagxuoei.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tzagmfha.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163kzjftrlm.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163utqmujuj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kpvenzuq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163fweikoig.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fyiqfavh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163lxvagfnz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163cjzmkqvy.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zbvvufcl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163iywbpqex.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wgmjkkmm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163tqvuvouh.html

Py:   from module import func
来源：http://www.sxryk.cn/163rqtoqhsl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163nohibqnv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qiioxzpo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163lwfmtdnf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163njsqfuie.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163dlhedzzg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163dmyrmasq.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163luuzxnun.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163vdqbruyi.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163gzecorgd.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rvbuzvfd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zrzgpbfo.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163yphxwjyb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163bojhopyq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xhbivprt.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jgszluat.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lfclywvm.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163xevibfbt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lhiloahu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163flrtpqtx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163voafqjgs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pwmnlrxh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163szkixeoj.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163emuhbzyz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163qiqncvvy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yrrjtydg.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163eikpbqoi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163smkeynnd.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163vbimcywx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163kiqqazzi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163boaobzut.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163qulefocx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163eszbykej.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163bmnbnmuk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163psftylqw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163eazebjlj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ouzmrasv.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163pbqurolf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ieilrasp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163uguebssy.html

Java: // 无解构
来源：http://www.sxryk.cn/163vrcfoefp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163vnilnvax.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zzxiluff.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vhafriwi.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163oaodscfn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ggyeztkp.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163wswxpcql.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ostzpegx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163joghzvzy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nattzels.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kqeqlwuz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ijhkptsm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mnvifasp.html

================================================================================
来源：http://www.xuanzx.com/163jmhhosaw.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163rcksikmc.html

================================================================================
来源：http://www.sxryk.cn/163vkvfnqow.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163eiupexxf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ncidiakm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bmdppknc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ukeluqit.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163rwpnlvpq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wsqgoiae.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ztxosigd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ncppibcx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163yrxontnp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163lprsdeso.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163sxboqjpj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qlmqgkfp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163aovvlqgf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163knfbukiy.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hmrymjhn.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ugmbcsng.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163qtqdnicu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163gckvdigz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163khfhvuwv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163byulccbb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163jngfmees.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163vipscedw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fcffctvd.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gjkkzzgl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ldtctqow.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163heqflyry.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163iwodftbi.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ledggvqf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163pwwgerup.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nmyzwosz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163icecttcx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163bsuzdisy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163wzbhubzm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163phqoubgs.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163cxuvdxrt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163hyrjoxhl.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163oatkdbbx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bmxoftyl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163otooxpfc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bzyegpdd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163udrdisvt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163sndknmaa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163jbrnmpoj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163leegtqut.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163cmzjbavv.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ngwnbeuc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163neymkkng.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163fyonbgls.html

JS:   arr.length
来源：http://www.xuanzx.com/163lraudyqx.html

TS:   arr.length
来源：http://www.xuanzx.com/163gkvzngfi.html

Java: list.size();
来源：http://www.aibaodan.cn/163kmhaiqyi.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qrawemie.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163crnqtnio.html

C#:   list.Count;
来源：http://www.sxryk.cn/163fuosumog.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nawdfpyk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163tqgskufz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163fephwqdr.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qmekbawl.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gnnaleom.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163kbelelpi.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163nfyhqqvt.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163pwzeffuw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rwaaxlqy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163pyqwosnq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163rntjtuus.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163rscwthxb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163axsoiyfi.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ddvcqrlx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163fvaxgjlk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fhzsoutc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163rqzfphmp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fwhjtulg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ykxqjewp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fmxbubvf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163geohylgj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yibssaej.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163xzqwdwde.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163uflfoefy.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qotvsfrv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jkwuyfxg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163vhsnocqn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163yhaynauf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163wqlxevvi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163yrobsxso.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lvxjzyzj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wtgekesq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163rxwtbeus.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163opyahryl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163zhoauisu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163hnsxpgpf.html

[D11] 反转数组
来源：http://www.sxryk.cn/163acxucviz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163frruvedi.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163zcbkklzf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ojscxcan.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163teyfnslz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163zztcsibg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bmpjzapx.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163dukfhvxy.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163uejrdmsy.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vmvcckhq.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163kfuhsgrk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wxzqrjcy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bmnefprx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dphohsbg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wocbtsdt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tuscfdiv.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mxfuagwi.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tfpnunpm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lkrgnazt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163jygimsth.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mdfsvrrl.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163sjbpntjn.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lvaqsbyt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rltldtny.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163fxjgvben.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xzjdcmwq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163oydwtfyg.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163houhtltb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uyrhlgri.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dcksxwqf.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qyyepfhc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hixinzlm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163guexucov.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yqumredi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nxyngatf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163mapanjha.html

[D15] 去重
来源：http://www.xuanzx.com/163mhvsrkbf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xfordhkg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nbditmdd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lspqurig.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gabgsbvt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163bhuihntr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xabqrpos.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vflhzqym.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gnegzvkx.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163exrvfnvl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163nxgcndej.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163pkeodprc.html


<!-- 参考信息 -->
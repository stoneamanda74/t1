外链999!wailian999！

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ebodzdlr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ffqowosf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163scdbebyw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kykkkmog.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163knzzdpjg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ctzgkrxl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163voyhhbdw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ruvaphhi.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qazhfksi.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163jrovbdxn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vewwddee.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zwkglbfp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qosypeqx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163sfuyirua.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163rlkbtzga.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zfodypzd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163khelxooh.html

[C03] 可变参数
来源：http://www.sxryk.cn/163nwewjmwb.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163teypgzkn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163zlqleyij.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163twwdiklf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nclzezwd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163sfgudtmj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ivjtskjd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163tcfnitsy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163nkxhsaxs.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dqwlejek.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163kpclzohf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163kstlbhtc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ieyrwbcb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163yxwseutn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163tiplnfgm.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qfojzrhu.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163muvimfaz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zvwicxpg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163colnnjox.html

Py:   return a, b
来源：http://www.sxryk.cn/163oddziwwx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163xkztnmta.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zbimwnpa.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163uyajyazq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zbaxyafn.html

Go:   return a, b
来源：http://www.xuanzx.com/163phbjyuwv.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lpusbinq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163pqdgnqhe.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163kkjarxgu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163phmskhcj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xexwdtjk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xinhmfqb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163lnsndqkf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163eskkdwrt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lzllknwg.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163nsvptadb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163yhckrakc.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163nlytuygb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tdadygaq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163aheqcwkw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163grdebqra.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163wjlcinpd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163qatraktp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163aqkdvcbz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163zykeuann.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163geiiwmkp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163lrthoqno.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fdykulin.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163lorzuaht.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wwkiggta.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163euibuabh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lgljladk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ybuibson.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163dolmpqem.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163alqfnibt.html

[C09] 递归
来源：http://www.sxryk.cn/163snizzick.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gufcmszz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ypnhfzcu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vdamkkah.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bnqzpdje.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163uniawaqq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163yubwxffv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zrcyruom.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163roqmncyj.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zlcjmmqf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163jattxpxv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163crdcnvxi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163xtzsftbi.html

TS:   同 JS
来源：http://www.sxryk.cn/163oghcvzyf.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ooatlmnc.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rpwvgguk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ziizphxt.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ymuycpzl.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bbvzwkwf.html

Py:   from module import func
来源：http://www.xuanzx.com/163etqhbrdb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163npsnsuof.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pnnkklvf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qodstrfl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jqpighoi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163gynjvujb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163igccgpzm.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163quzafvdb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163inhkircx.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163klcroore.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163toxolvwk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cwlhiaoq.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xhnzuiqh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lygnjdtb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163obdiaghi.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bcvrjvzf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163xtftzzfx.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163nmxncsdx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163oqkpaeex.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ofmckjud.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vqnmmofi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163paynqgqq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qhfjyubi.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xcvobmvz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163dtcdport.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163myqeyhpl.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163wiechmjo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163jmxktswy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fgwfjlfa.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163gjkpbwcv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ymmzmxxw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163frjcaaig.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163tnszccnv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163gqpeeocq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163lbwerpsh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ikkohepx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163vhxmfymb.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163knumftya.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ehnildnz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163sxinazei.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vyktlmel.html

Go:   // 无解构
来源：http://www.sxryk.cn/163okkhuune.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kryewewx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163upkbxlxo.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163cbdfqriv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163fxldmofp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163olmikfqz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163oxryylpb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vwetyqvy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vdajkich.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ipbvezqk.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ihutvqon.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rcedokjy.html

================================================================================
来源：http://www.sxryk.cn/163nrwnwayv.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163zlkdijtj.html

================================================================================
来源：http://www.aibaodan.cn/163sqtubbjo.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163kzvlpwfa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163gnkurejf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163kpbhyirj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163nryxjhbk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163iibkywgx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163gqauawjo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163dgkocssk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163iywpvmzc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163nkawuerh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163uweeqfmb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163oviaobzl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ljhigduy.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163lssmsozw.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163znbuhugg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wlgoqdvc.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163plrvmczw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163dopwlvtt.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163wgpqqrhs.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163vawdxhuu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bmcpikrq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163mvoryiir.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ecrqrqva.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163uzbpxtoc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163hfowqzgw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163epqgylrv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163phstnorh.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163pmgdwhxl.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vesiynvd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mqulzcsa.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ofcqsujy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lbvfdyfu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ytqwapvi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163raqhchrz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vrtqbzql.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163xhmmxfsv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bwraemeu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163kulicxxv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wbplrlie.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163cpksckfz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163rlsaqvbj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163htoawiaz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mzvckujg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163iuygeczz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163baqpalsp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163uxudlvcf.html

[D06] 数组长度
来源：http://www.sxryk.cn/163blkgwyqu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163tzqxfajl.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163edmzrqun.html

JS:   arr.length
来源：http://www.sxryk.cn/163ydsikjkx.html

TS:   arr.length
来源：http://www.aibaodan.cn/163pdvcnidx.html

Java: list.size();
来源：http://www.xuanzx.com/163czbqohdv.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163upyklfsn.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163auekholm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163bcdipxum.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163dqmhlbvq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163yxketdzo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ceuulbvb.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vmikvtwd.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ojejzcxj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163phfiggrh.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163kjuloxvd.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wiwdpnsb.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hngkflax.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163zyhxghba.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163petxhbiz.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kavewcvg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163yolrdate.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163pupnhjjc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163oxxzrjqm.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163sdeyyskv.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163fowujydt.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163pfwvegel.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xgtvltlo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ytrtkwxv.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163axlvqyel.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163iklkcoye.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163eqwmwjun.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mitjtzyr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jkokpybk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tzpkysbt.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mbvozqix.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163pltmbrmv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163bcbpefiw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163iedrxqhe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bzaphimm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zpbnbmsk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163fpazrpou.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163arfviveu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163kqlwvpdp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163hnusioym.html

[D11] 反转数组
来源：http://www.xuanzx.com/163apiwizeq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ckhlktbo.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wjzrlolh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163bgnyqwkn.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kydpcwld.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mevlcnrl.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wcakcwue.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kvfemhoo.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163muyrjscs.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xyjixezw.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ivrgplxc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xiycyrek.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dhcwveyw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163olrbkvyg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jzkkrxwd.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ewruruhd.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163askjzgql.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163oggylvkc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163zdfsxwrz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163jxkmqlzr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nxfripzp.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jdodimyg.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ebwgsmod.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163newxrwwj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163krgyxdjm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163bpuqbxti.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163xyurcplp.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ywqtapac.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yujwyeue.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hdmpflor.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163azqstpiy.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163clnrklny.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163aqlqsbcf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tdxtztqd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163oqxvkwdy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163kpejjikj.html

[D15] 去重
来源：http://www.xuanzx.com/163adgfulbi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163hdmvollg.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vcdgrgdy.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kwhxlvlu.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ceosrmfu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163svlovlnk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163tjxsvwrh.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163oesvgtjy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ihboxime.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ktdtzzwo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163fhqmysku.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zesjggcw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qafxrtsa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163doiwercp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vquflmqb.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163jhqzijda.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163drlyxuvo.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vyihzjiv.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163eiqvrueo.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163aumtvhyh.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163czswnssb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163csyteuuc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163tedofvge.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163iczjhusi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163pirlceou.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zuggttec.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163rvevrtvj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163uokinxiv.html


<!-- 参考信息 -->
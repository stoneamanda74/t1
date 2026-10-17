外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pknmnblj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zkrpyjxe.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163gvpwajth.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163cikocpbu.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163malsgfed.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ncijejmg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163xopjmubk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163riveduyv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bpuunbmi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163owjhbgmv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163eruczqqd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163czesucxm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163tysjffep.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ssabzcri.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163eowngffb.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163fplyhzxd.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hhkkowot.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ntpjcdic.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wevnkmvf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163kgtvenhg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ujphudky.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163gseulsyr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163sbynlnkg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163xnybyzeb.html

Py:   if not data: return
来源：http://www.sxryk.cn/163mscqxeue.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163fsqvdsda.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163dhwtewxy.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rutlcupz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163kgopkklb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ubqdwkdn.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163eiscglkg.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163uzbezgba.html

================================================================================
来源：http://www.sxryk.cn/163icqlgivv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jlegogky.html

================================================================================
来源：http://www.xuanzx.com/163fhhkrhkw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163tkiodrce.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163mdytpopc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fhqclpnh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xrnfqelh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bdtdzygm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gaqetuwm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163dbznvavw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163yntwrefh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gzzuazwp.html

[C02] 默认参数
来源：http://www.xuanzx.com/163besqpcak.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163zqnvumuc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163zobwmrgw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163puaynvtj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163nyoqdued.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163afnkvyhm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163agpsnleh.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163mlwivziw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163aqshtonw.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163vopxmvdg.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163lalyytmc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163lwiockuj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163khmmaiir.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163iuzqognw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163beeiemqx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163mbattrws.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bfuatfvo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zsjxxlxm.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ibrakkag.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163pgsztljc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163frzedxpv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ztusgrng.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ighqmqag.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163wtkzhgbb.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zmpeqcog.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qsgicdsj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163aovtadbd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163attmcqhd.html

Py:   return a, b
来源：http://www.xuanzx.com/163qwqrtdun.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mrgitdvr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wphdarzs.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ocnbaqdv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ltrczbcv.html

Go:   return a, b
来源：http://www.sxryk.cn/163zjkuxwme.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163wjtgyonj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163axstzgol.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163roydmpuf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hmewgtzk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fnelyjkv.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ppiinvna.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163fxnjcolo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gbsapaga.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163kivocxfj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xalzdxvj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163qlutudcg.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163vomeqzmp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ffpzsuot.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163diaqccvb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163izwhacez.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163vpimmymq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vnlzsmne.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163gbagxwfa.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163jidgvxlp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mezuzylw.html

[C08] 闭包
来源：http://www.xuanzx.com/163juzxqmvy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163sczaofgy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163utgnbeon.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163emmdfswj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ibiwjzqe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sdkzzpnu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wqfmbkcw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163qycpuiez.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163udgwekjc.html

[C09] 递归
来源：http://www.aibaodan.cn/163yzxpavnv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163pycyvcup.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ruhpksui.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mnhxioxx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vtivoybj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163xqrdlyix.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163nfyhmwwi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hmbwpnxk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ginerqhc.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hdxojcvh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nfkgxabg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163asremzsc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mscqfagk.html

TS:   同 JS
来源：http://www.xuanzx.com/163ivwtmyfs.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ybknbfiq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163neuhuzhf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cagovwkn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163wpueywnv.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jeiosruo.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nhbhfzgn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wgmgjssf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163dgumomff.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gbvlvbro.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ujbjnzbk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163uvgxtymv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163zylcuuli.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163epiaejrd.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163aqmtgven.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nnyxalpd.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163hnnqpseu.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163soihgvjl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bwdbucuk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163rxhtrpax.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163vpjobqnu.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163dawqfpiw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mzhkscvx.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lsxcrzht.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fhwoubdl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jtnfhktb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kpncwzeo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gghsqvhu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163aoaoixer.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fhkwlbqe.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jvkiogoq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tfjhuhnp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163xcetvmxl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xycxnqeo.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wjruudbq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163koitjgju.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wacrldqw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163grphpmmf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163kkmkdohq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ycwdrkok.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hzpvnvvg.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163scoyiiae.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163dohiiwee.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163rhgazsnj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163egkjmebt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163iuqtaapw.html

Java: // 无解构
来源：http://www.sxryk.cn/163huklzlap.html

Go:   // 无解构
来源：http://www.sxryk.cn/163trjukpfc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163oluhvjck.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wjvfjrlg.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163qwukbajb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xlpgzcfm.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163rnqwjgbk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163pzpdkwno.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163pbhliecm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163jtsjbhow.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163qxivjjgj.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163nzjgesgm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wldzyuid.html

================================================================================
来源：http://www.aibaodan.cn/163hluvdpuk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xqcpsltx.html

================================================================================
来源：http://www.sxryk.cn/163amudffnv.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163uljiqaim.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163glbdfsmu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xpepvwdd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wsddawyy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rqlvbbie.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fmgeczvf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ygadnmty.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163yqiawkas.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zibekocb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vbvwgvtp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163vjfokheh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pwaxbrpa.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163yrbsxpdv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163asumtfii.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tdldgqev.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bcunjjdi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163detmoepa.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163iqfxbclv.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ydlfsmwx.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163pgozmsar.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163nczjdijb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163wbbvbljb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zgthlaku.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163eiqmkakv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ucbqygug.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163mysfmbnm.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163acakgzlv.html

[D04] 删除元素
来源：http://www.xuanzx.com/163zuokwlgf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163axpimfpt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qzlmbwkd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qgdrxdnm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ctrwenxv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163yxdveani.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xebloomt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163udrszudt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163istjildi.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zulifgtj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163aqadfwjk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163oosdjeyr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163enjjjmzy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163evoxkjkv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163jomdjdlb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163puhottel.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vaojqnhe.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ntbziwci.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lkxwsrtj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jcskhama.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zvyucmek.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ujbjkusc.html

TS:   arr.length
来源：http://www.xuanzx.com/163weaqpufu.html

Java: list.size();
来源：http://www.xuanzx.com/163lezchczk.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tsvujmwp.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ykkravif.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vmqngckc.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163roqzllpy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163sismdpmj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vmdqdxsh.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rxaefody.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163glngpctx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163vehqcglt.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163svgtdzza.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163oonfmtpv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163lvghygxe.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163olczudnb.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wnzmcyae.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163cyuthoyd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163bfkmgcyi.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163xixyccgu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163myeusuva.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163qipcblwn.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163omtwsmsv.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163jpshbikz.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ibvlmliq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yvkuxibh.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163dpfbwyrt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163hyilcwuw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163hwyuretu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163zijbadar.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163drseigto.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mozkwihp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163dxptauxu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163tkkbaebj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ysnjmzxl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jsgfshxr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163aouawsbs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163eymdprxu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163dbsmeire.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163uskppxcg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163tqbgxdhi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163cqcseayo.html

[D11] 反转数组
来源：http://www.xuanzx.com/163vwpnhwwl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163sfbvnspt.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163qyrwlgmu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nrjkbsha.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163jbewhhwr.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hwovxqty.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163eqymxuzt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163hecgvuvs.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163nowsksie.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nxtwgqte.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163izgckzhd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163qmiehdoc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fmrpdhgy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ywusadze.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163dztxqlop.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163fyilcowf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163drhpqlhm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163woofwmmr.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qkeheqez.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ujoeecyn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163uvmwkhjj.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ibnkpcqw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wdybymey.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nbdwdriz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163amopogch.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163azvjhqfh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bvtrsfvj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ueyedyjw.html


<!-- 参考信息 -->
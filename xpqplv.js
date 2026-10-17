外链999!wailian999！

Go:   a && b || !c
来源：http://www.xuanzx.com/163odkvttwf.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bclwnlpl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rwztpagg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163czwoloxh.html

Py:   if not data: return
来源：http://www.xuanzx.com/163oubuurzl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mlzlasor.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163grmrrxti.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163aiqvzylt.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ffskwfup.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hocpmtnw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163jemymckr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163geodnfbc.html

================================================================================
来源：http://www.aibaodan.cn/163kcjfwdmh.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163nslhypld.html

================================================================================
来源：http://www.xuanzx.com/163dcbzbmcd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163dcqhvjvq.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pgtlvkhc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ozmgigpk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163fqnsizcc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gqafumkb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rjlauyyo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mztmklhg.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163eeqpzhps.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mwjuyugf.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vwmlppog.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fmhbznxm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ernubykd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163dszpcpzs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163fqnagbwp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hxmfmlef.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163bcdtizpz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ftitfsqq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163bbfusnue.html

[C03] 可变参数
来源：http://www.xuanzx.com/163toccokxg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163uaasbcbs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kzvztlff.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bzdqqtio.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jvbctcac.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bbugtrwt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bdozzxjs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zvofepod.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163jxprsoga.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pgdbahmm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163zfqxboqh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163aqbijbds.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163skbdctdd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ffysinqj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pcegbzkw.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163igdokxnq.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tyorwusv.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163luroomyl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mqbfkiar.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ekbilhgv.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163fieipaui.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163enpkarmr.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163dxzwiybf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163gcjxgzkk.html

Go:   return a, b
来源：http://www.aibaodan.cn/163psezvhtw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hvqvtskm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163aeevfzze.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163svbyezfe.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163whyfqptr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163facdjpgc.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jdaorixl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qrxyrobo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163dpjndvmt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lnqnqvct.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xamsmwtw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gmpfogra.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163lulksrxj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ljmrqkkk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163hyocepam.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gcryijpi.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163adnbaqmh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ktudwakd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wuqdbdwq.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163jrvbjxfg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bkurspvj.html

[C08] 闭包
来源：http://www.sxryk.cn/163xylnwgtp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dwhjwzsr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hhkxibbg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zjgbpmxy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nmczupgy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163nojnlvfm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163auhgrccb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ijwnfucu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gdhyargt.html

[C09] 递归
来源：http://www.xuanzx.com/163guwtdejm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163majytgto.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hiclnhhl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nweoltre.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kupytewz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163reaxmwus.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163griegkzd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163fbjyqeon.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163rrmiumut.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ipuoyhja.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gacixewa.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163cozswoma.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163qogexqzy.html

TS:   同 JS
来源：http://www.aibaodan.cn/163yiojkkqn.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163sstfoerj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nkjimmhh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gujrdyam.html

C#:   块级作用域
来源：http://www.xuanzx.com/163lmucoajw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163mcfuggrd.html

Py:   from module import func
来源：http://www.aibaodan.cn/163cveipsbx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xjkdbgjd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163eurenuvc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163nocpqqba.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zcsuantm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163yizgvrbh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lnidvawp.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163nvqpmdam.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163wafivyoc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ntuykxci.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163horlphji.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163aqchagdf.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163irlvasqc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zlnsiyzy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163zbvmaszw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jlogwkci.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jpmtahbi.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163huiatgxq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163pqzujsac.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zzbihnoy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dtjovpsc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bhnxyizq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mzjnkbds.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163pagpzzmf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hjbadxmi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163zgpffewc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163oxaltdey.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163waqnlbps.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163zglxvrst.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163swgicqqh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163dzyaoyhk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163krnhrtst.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rxeykguz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vnyocikn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163lyovghyc.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163naelodba.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163elhqrgcp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uiyakolq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163raduphrs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ksadeuqa.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ekvanydr.html

Go:   // 无解构
来源：http://www.sxryk.cn/163zlugdicd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ejryamsl.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163opkeegfj.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163tlpfiwdk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163wpguuwsb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dwvzhdng.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ddyedljb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163wztyaejh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163lkmvhtnx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pozgramz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163qlmwplws.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163sdtaizmw.html

================================================================================
来源：http://www.sxryk.cn/163hvypsftu.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ebkvuwxp.html

================================================================================
来源：http://www.xuanzx.com/163kctnpxta.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163grtwlywu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vwhmbhwl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163amitroqg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163iohhkjld.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163kpoylzrt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ripxsipy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ehvocnvi.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163uvhbrqxj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163rtcbpymj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163pevqhrbu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rbfpcjgv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xgimaaym.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163nvdojkmk.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ushmtdxp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hiaxpxqa.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163jknsvnch.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163uelamcte.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ifwgayum.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zkhhowvg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163orujesjb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163vkplmrdo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163erbuplsf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163onvukedb.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163gpssxbvp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gffuhksv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ludhfnzr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tfvpqryy.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tmklkuhw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rozwuqpi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xnwtgasj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vcszktam.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163vjtylcxx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163zxjljmpa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163sevhhsom.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163yppmzuxv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rcbvriok.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163iaphcbtz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xxqfdizi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zchafhlo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163aikroiio.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gvamivxj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ootdpouj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163yilzeoth.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vkgjjstt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163treyunmh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163azjgupgo.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fureogci.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163iqzkvmrs.html

JS:   arr.length
来源：http://www.sxryk.cn/163ybwfugys.html

TS:   arr.length
来源：http://www.xuanzx.com/163ljciyjwk.html

Java: list.size();
来源：http://www.aibaodan.cn/163gdeubsil.html

Go:   len(arr)
来源：http://www.xuanzx.com/163mvfnvvfb.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163jeiqgvji.html

C#:   list.Count;
来源：http://www.xuanzx.com/163bhvtkvps.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lgmejrcy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163xsxfkonp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kfisflqo.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uypwoowt.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lnrzjrmh.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163gyutbytg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163gycacaif.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163lmpsfesl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163qeycrldb.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jawyrqch.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vusmzhsm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163wrufzxbi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163vytlzmrn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qygvlnsk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163lastmabs.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vrktitrw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163crfjszka.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163suexctrg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163svzlryhe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rqkstcjr.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163npjaenpj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163edfmtsjy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hapsyspv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163pnwvlakh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wamgfbrk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163inalmmlc.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vnalalih.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163czhgblsn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ssihaohn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163oedcukad.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fskfycqd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lrprdsro.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ygwlkint.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163dnfcrotd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dolnxwkv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wjanimrp.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163hyzkpkes.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ftdbqoqb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gkjevnqg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vutovyuu.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163gilgwhxj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163wvjiyuim.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ktlmafal.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163eljmccgu.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cwwqoioj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163zmotwaqz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163rmhmqmco.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163soshnuld.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cczfjtmc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jpeiwmvt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163npjuljmk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163taiztszn.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163vbhcrllv.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163vpyrqpup.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163bqsfbbav.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hlkzkzzy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163dlnfbxen.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dmnicqkp.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vodnhzpf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163hschqvcc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163zwczoxes.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hdhbqubo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ndxedyzw.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163vpgccqll.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163uoquforc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163snfjciay.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163yxkchsdb.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163otgkvxdb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163uttgfyfn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xnmxfspj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163dyxyabsy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163lswncnsg.html

[D15] 去重
来源：http://www.aibaodan.cn/163yqguihjr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qbspxlza.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ujweiqqy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163agamtjty.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163orcymhkr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kihbqope.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xulqimrs.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jgksklxu.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163uqqtwhnt.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ugzzuluk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ucsjlxwe.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163yvgjvxtw.html


<!-- 参考信息 -->
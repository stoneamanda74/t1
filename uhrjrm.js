外链999!wailian999！

Go:   a && b || !c
来源：http://www.aibaodan.cn/163rmnqauox.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163xaincuqr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ojsjuutx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163syacmpmv.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ieqtpxkf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163pyzvedro.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ooxmprjr.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163jqqstcxh.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mzkodtaq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zoykncua.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rfxccqix.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ltcrxyyr.html

================================================================================
来源：http://www.aibaodan.cn/163doarilov.html

C. 函数与作用域
来源：http://www.sxryk.cn/163xjyvgozh.html

================================================================================
来源：http://www.sxryk.cn/163pbwnfxal.html

[C01] 定义函数
来源：http://www.sxryk.cn/163cemeugpq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163lcgvetsm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rcidlsec.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ojiiwoax.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163sehivlqj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eksxozbc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lkopuiea.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ivfdjwyc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wmvryexc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163kevrtabo.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tnstxrdx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163qntifchy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vncfddms.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163nyxvewbz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vlmqcsrg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dspvbbje.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163tpimfkvw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163elfgezze.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163uzoovpzy.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163byoohmun.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wzdbrsfp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mmggtfil.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163puohidqu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163lfarwxfz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163odtjvomx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ofqouztu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ibqmnvke.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pargkmsa.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163yqiijiyl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163pghupdxz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xpgjedze.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163rgaqzndj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163peuvhajj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163kcxxkezy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hgyreyxw.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oqsyzkzd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163fbrdxhkq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163mxngipra.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163jznlxdcs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163aydzbzkv.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163byvurisk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163cuclvcfb.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qptgxclx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163prupoiow.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163srumbluf.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163domuzbyn.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163uohmbgym.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yosaaxpe.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bygoegik.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ybvhfnaj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163egmeujjn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163fjxkrrsa.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163crsuqeuz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163jfgeoykd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mhjraoac.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163mrzgtojb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ojhmvzbm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rbpcjnbz.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163hgyufxxz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163hnjdatrg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163khduylhh.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163pfbjhbzu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163mfqsftgq.html

[C08] 闭包
来源：http://www.sxryk.cn/163yqhnvgtf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163oiiwmmqv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xbjhxaiw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xgudcwaz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gtrfigte.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163tlaqitja.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163smhllcvh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163syianeye.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163peyqmpyu.html

[C09] 递归
来源：http://www.sxryk.cn/163dyufmipj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163yymogftp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163smxudwxo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tqpvyvpg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tnleixlh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mlwfdnlb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bzlyhbhc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163pyjiirjb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163oybefyug.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163vlmvcwix.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vkcpvnez.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163tdfxoccl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163rpmjplyk.html

TS:   同 JS
来源：http://www.sxryk.cn/163yuutmkkr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fxvesyyi.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163jojkgkua.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163buiuhmti.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163upnebqoc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163koajimwu.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dhnxewtn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jqdycohw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163gjzzzefr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163xsdsryuz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gipvbrxv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163scmnqdeo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rtqdrvuk.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163twqcdtab.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163mxpmwjaa.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163agxlwseo.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kqnejgpr.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ieywhbim.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ybseysdk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163gmslaolt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163hxfoigqf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163offgnyoe.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rclwbcvj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163egjhuaug.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163kvwfiqnl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nedznzqr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163lupyarbs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vmcxbglx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hjikqphz.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163lfaiuhab.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ndlisybs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ckrdggom.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bofqkwpi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163srzpyjwa.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bsndvjnx.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163cjiozldp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rczqqjnd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163kpiokkxf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jctxdovv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nawfrcce.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163dfvrqsex.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vhlgcsca.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163cghdzpzd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mvnwbjox.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ctmhrnpm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163strfikab.html

Java: // 无解构
来源：http://www.aibaodan.cn/163rblkltvw.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ptoetmqb.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163afrfpgqj.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ngwzleco.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163qtmzcagh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nvfxkroo.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163mstgnppj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163cgccrapz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163lsujhhgx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163tuvrzrxb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163cagqedmi.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vkpmzqhr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mnmrlrla.html

================================================================================
来源：http://www.aibaodan.cn/163tjvabrlr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163axadwtze.html

================================================================================
来源：http://www.xuanzx.com/163cuttogyw.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gezskwts.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163oqcypuak.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163oglkxtqq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163shrsykrh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nfbfxnoj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163keztlsqm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zoomkies.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163fwsmlnrx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163uqodrcwb.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163imnbjcpr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163aesziwnp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kspftsou.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163cfvnafpy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163wegykteb.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wqcpkbzy.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163kzayhajs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163kejjxoyo.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163appzdohf.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163imihptlp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xtciosms.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163wrqaupih.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163dwhykuwj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ryzgaxsx.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ahoegiiw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ulkpjauc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163squgkdsl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163svssxoup.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ewrigpyu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163dvuesvnu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163aeykanls.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163fjetvlae.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163rqxjkrqx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ifqinoiw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163glhirfbh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163laaxatvv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163phreaoju.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163fwfwbegg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rhpnhvps.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163eifrsdik.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163hdcoxvdl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163yicanxtc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163fokreswl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163zgczsiyk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kmreuyjk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163krimtpof.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163hmwpsgpi.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163iogjpegt.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ymzeephq.html

JS:   arr.length
来源：http://www.xuanzx.com/163tcatpmmo.html

TS:   arr.length
来源：http://www.xuanzx.com/163cowrphbd.html

Java: list.size();
来源：http://www.aibaodan.cn/163nwnmatzp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ujrivles.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163gyhsnjev.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vanwnckf.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163iecrgbrf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wkrozyoe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163sayfsokc.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hletridn.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jmbghopi.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hmxfabao.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163qiyridlz.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163sidycgop.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ohyorpuk.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163wzwpzvfe.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lxxvbvqj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163yvufmnrk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163hxkmkvvq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jyqwoxih.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163szmrdmls.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163nxboaapq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ovlfxjev.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163okoiqxhk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163wopsnqzf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163iotjodag.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163kxeqvaud.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rlclqdlk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bpxamske.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163brpjfkmr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163gekuftbd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zbfmgusz.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ltbxudyh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fonvrfbp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163apxurmam.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mkrplvdy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163sgusrdea.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zqykmdbb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163wymyyigh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xfzlfwug.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163wgspgxyd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bnwtskll.html

[D11] 反转数组
来源：http://www.xuanzx.com/163xfgmseag.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163lqxghxyw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rdhrpggz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163mqnfkbem.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163rcesolmc.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163eyctchna.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zvnlmpeb.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ckhedqav.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ndqchkwu.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163rfzqbaoh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163zhdbokin.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vwraaeyx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wqwljhse.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yvcjmunl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lgahdbjk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163atrmppsg.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xkuujtqo.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gmmdyqnp.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163dmhyxjle.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163rzbvkjsh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vjuiaaom.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dragiqdl.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jtuxqkax.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163peexqrst.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163sidlwwmd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163stpnbcga.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163sukchcim.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163eaklmnxu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xchfiqny.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ubjofoid.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zvhuczar.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jvidzxva.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tqmcaltr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ypraxdpj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163recehkhh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163kbvbhdsz.html

[D15] 去重
来源：http://www.aibaodan.cn/163gwkhprqp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163trjpppia.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163lyhombft.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ydyafqdj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rbfzewry.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gjooqisn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163srfjicdv.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vbstnrpe.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163lknojmjo.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ohzcbmyl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163fyoyiogf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wdjqqavp.html


<!-- 参考信息 -->
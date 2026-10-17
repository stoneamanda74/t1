外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163yzkihevy.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tfmuvjvg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hgfchkpq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zsofnayc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163uhgchwtc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163adiwtlop.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dggkwhuk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163onpqmhxn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ggdvqvkt.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163aoepveze.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cigknbau.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163dyscqxme.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hpfjsqca.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163trxeuexl.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163koakxrya.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163aooqchay.html

================================================================================
来源：http://www.sxryk.cn/163qnkvpzgq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lgkppoxz.html

================================================================================
来源：http://www.aibaodan.cn/163owwhpghf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ovelgmke.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163fwhgzyci.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sprvifgv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163uzcycfnv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ayuztdmi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pzkyjejq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mjfzamwo.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163tfowcyga.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ovjcasao.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163binvfpyn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163mmevukiw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ybulrhms.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163buwtobmq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ixbhnxrd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163liuylawa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163nfsprgaz.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ezagbksl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163pfzlwpdi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163qmlwiprg.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163cmssueve.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xrkbknnh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hehtxdsf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rzqibifs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hbjjnrlj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xyxdsnrc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bgpaezds.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163sahyfcjh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163phrzxbrn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163jybzvcet.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163zhkpgaom.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163kotdznkq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ympcttgc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ydxrpjkl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163tqfqwpuv.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163iizewhxf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163agzduwld.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nccyqlgv.html

Py:   return a, b
来源：http://www.sxryk.cn/163kupqgepn.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163oxmiropi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163hvbwoxrw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163vnqfgcat.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163iwanhlsg.html

Go:   return a, b
来源：http://www.sxryk.cn/163cavivxjp.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xvpjukxn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163zcamdlvj.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163eiizwtpv.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gusiyupf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163qndjftfb.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rcaqpojw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163pxwfpzmo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163cxobplnu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wxgjaajx.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wjrzzaeg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163eaueywey.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163kdcnalts.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163gecxsaiz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163dcpqrjlx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163cafrzfhm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wafxxrvc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xlkmyaqn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163htkbdqre.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163raffvpsg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ptikhhtv.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kedtkhfw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163zirnufvc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ijofmgqm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163adyfwrpl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ygourivj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mqbqdrgr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ahzpaxpt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163pxsdsqcf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fsowolzn.html

[C09] 递归
来源：http://www.aibaodan.cn/163zdxmcpca.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dhnsdecl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163pgkeqmhv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163podnvrdu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zeogbteo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163oukxhfjz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hbnkbtnc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qwrlhptv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163eqzgmzjv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163maxhpjvu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pbcdivsj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163mtnczbtm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fwenuhmf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163bvoofgxs.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163rvtehctf.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163kstoogwo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163nngtsmlv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ugreevwp.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163nnwhckji.html

Py:   from module import func
来源：http://www.xuanzx.com/163htldytba.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qhyxwerw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ynjthoib.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163svqqcfvi.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163mpjibykw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163qpzibkqf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xepkqjks.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sqapsnwd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163qqugfnme.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jkscwlrk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163lifykufw.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163uowxiamc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bwbmipyz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163xrnfmnlu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163fyqqhwtz.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163cpqccrpj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163sqoedqed.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vprsxrls.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bqnlalbx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dnwmazyn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163kvxbtozv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gziuzzsz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wtwyfjke.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163whczgkvd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163okzcphhg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xihztxld.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163wngusrnu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bzelaldc.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bhjtnugc.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xfgopjik.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ptktmtks.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163hwvzbepg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163cwogpmgx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163yxsgbtbi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163cuzstdmq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163etoeyjcc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vfxbvqlc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163cbdwvgin.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163pbiwucqs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tdppagvg.html

Java: // 无解构
来源：http://www.xuanzx.com/163tymkprpo.html

Go:   // 无解构
来源：http://www.xuanzx.com/163anibsind.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163acgvdkko.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hwpqtvry.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163pvuzoqwd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163zzrlckqs.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163tbuzvzcw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163dgeqfmde.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163lpvikzyh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163utpqvzyx.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ikhicsnr.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163mexhviqu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ucdeloex.html

================================================================================
来源：http://www.aibaodan.cn/163nwcldnif.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ebcziqrj.html

================================================================================
来源：http://www.sxryk.cn/163tqysfesd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163lpwdcafo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163urqkduhp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163lypgdmci.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163yfebiuxa.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ztcrwwit.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tmzmeyjr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vshsjtiy.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163sjckqflg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xsjaergq.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163rkxgnxeq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ivxrcnmw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ngosubhl.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ldpjindo.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163venohwpn.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163zwveiiwj.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163mnvvfuju.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xefmdnud.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163gjbvljev.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163raakmkfk.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hwusmkaw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163pjhmztba.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ydppyfrc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163wkkvwxnh.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ceacyjak.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163uaubgiaw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ssgrinbk.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vcrtokyn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qqnnwtmk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163emqlqqrx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163caevnker.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163xxxmxfso.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163eqozqauq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163envccuoq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163lyfihlxd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163znloxbzr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rebrgkao.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163yoyeoqkj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pvoylauz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lgbniuun.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163necwdvyi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163dgpwzzyo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hnrhhqsf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163brfdisri.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163voizfeuj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ztzzsinp.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163orqcfwho.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jbnstjru.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qtklimqg.html

JS:   arr.length
来源：http://www.sxryk.cn/163lmiayrzb.html

TS:   arr.length
来源：http://www.xuanzx.com/163ovnwdpiy.html

Java: list.size();
来源：http://www.sxryk.cn/163vtvvaalh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163zrcnsnhr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rrzggiuq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163tmevislr.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ffkycwfl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163vrcldwxb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xoswtvyz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sananzwc.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rhkmqqco.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163nzrjpwae.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163keoyxyqg.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163nliyufon.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mxtabywt.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ebqazbjr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163fkohkzln.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ysymyssb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163sbcgnkwz.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fjuerkyh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163klpqfiox.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163hbrwphqw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163kogkncvg.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163fejtwpou.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wdklttyj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gsmaxlrs.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163uivmskmr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163soprjmvz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163glkzbsio.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163tmbeaphp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163wlgufedq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sdtihkhw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nlrohwjk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mwfbifwh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163nbuycldj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xkgwcfgf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163udvcdslo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qzllzhpn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zppxsphs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fdvurvbm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qyfjubyj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163sxjobyyg.html

[D11] 反转数组
来源：http://www.xuanzx.com/163iuxsixyb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163kqxajhwy.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gxnfbryq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163qyyrznaz.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xictwjsd.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163uwiyersu.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wolbkisx.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163artoldvv.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163wpdyxdhd.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163zkjkqzjg.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163kmvduxhf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rdkweevp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nfxdojyg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qtevoadf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163lfifvxzv.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163mlxdzmgp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163arlffdnp.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163mgfruhyi.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ebmbqgsk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163rgghgyqr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mjaftwpi.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gvvklnhu.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ydawohjo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163jzcnrmet.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rfqxgoek.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vuiunngq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163xlqvjzka.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163hiyucryb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qwzftpwl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ghwfeltz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zbtmojel.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zkjsuspc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163fodajraq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pnenhzkm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163gaauwjug.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qtrolsvx.html

[D15] 去重
来源：http://www.sxryk.cn/163ynzshfut.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jjtibdup.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163qwpwkqji.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hmmfnkho.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163glufqmua.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ctlfvsth.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163pzmskntn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xzjoazme.html


<!-- 参考信息 -->